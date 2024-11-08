/*! For license information please see main.79ce4935.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      463: (e, t, n) => {
        var r = n(791),
          a = n(296);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          s = {};
        function l(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (s[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var u = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          h =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          f = {},
          p = {};
        function m(e, t, n, r, a, o, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = i);
        }
        var v = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            v[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            v[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            v[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            v[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            v[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            v[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function x(e, t, n, r) {
          var a = v.hasOwnProperty(t) ? v[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(p, e) ||
                    (!d.call(f, e) &&
                      (h.test(e) ? (p[e] = !0) : ((f[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, y);
              v[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (v.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var b = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          j = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          k = Symbol.for("react.strict_mode"),
          N = Symbol.for("react.profiler"),
          C = Symbol.for("react.provider"),
          T = Symbol.for("react.context"),
          E = Symbol.for("react.forward_ref"),
          _ = Symbol.for("react.suspense"),
          O = Symbol.for("react.suspense_list"),
          I = Symbol.for("react.memo"),
          D = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var P = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var R = Symbol.iterator;
        function F(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (R && e[R]) || e["@@iterator"])
            ? e
            : null;
        }
        var L,
          z = Object.assign;
        function A(e) {
          if (void 0 === L)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              L = (t && t[1]) || "";
            }
          return "\n" + L + e;
        }
        var U = !1;
        function M(e, t) {
          if (!e || U) return "";
          U = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (c) {
                  var r = c;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (c) {
                  r = c;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (c) {
                r = c;
              }
              e();
            }
          } catch (c) {
            if (c && r && "string" === typeof c.stack) {
              for (
                var a = c.stack.split("\n"),
                  o = r.stack.split("\n"),
                  i = a.length - 1,
                  s = o.length - 1;
                1 <= i && 0 <= s && a[i] !== o[s];

              )
                s--;
              for (; 1 <= i && 0 <= s; i--, s--)
                if (a[i] !== o[s]) {
                  if (1 !== i || 1 !== s)
                    do {
                      if ((i--, 0 > --s || a[i] !== o[s])) {
                        var l = "\n" + a[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            l.includes("<anonymous>") &&
                            (l = l.replace("<anonymous>", e.displayName)),
                          l
                        );
                      }
                    } while (1 <= i && 0 <= s);
                  break;
                }
            }
          } finally {
            (U = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? A(e) : "";
        }
        function B(e) {
          switch (e.tag) {
            case 5:
              return A(e.type);
            case 16:
              return A("Lazy");
            case 13:
              return A("Suspense");
            case 19:
              return A("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = M(e.type, !1));
            case 11:
              return (e = M(e.type.render, !1));
            case 1:
              return (e = M(e.type, !0));
            default:
              return "";
          }
        }
        function W(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case j:
              return "Portal";
            case N:
              return "Profiler";
            case k:
              return "StrictMode";
            case _:
              return "Suspense";
            case O:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case T:
                return (e.displayName || "Context") + ".Consumer";
              case C:
                return (e._context.displayName || "Context") + ".Provider";
              case E:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case I:
                return null !== (t = e.displayName || null)
                  ? t
                  : W(e.type) || "Memo";
              case D:
                (t = e._payload), (e = e._init);
                try {
                  return W(e(t));
                } catch (n) {}
            }
          return null;
        }
        function H(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return W(t);
            case 8:
              return t === k ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function K(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function q(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Y(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = q(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function V(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = q(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Q(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function J(e, t) {
          var n = t.checked;
          return z({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function $(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = K(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function G(e, t) {
          null != (t = t.checked) && x(e, "checked", t, !1);
        }
        function X(e, t) {
          G(e, t);
          var n = K(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, K(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && Q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + K(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return z({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: K(n) };
        }
        function oe(e, t) {
          var n = K(t.value),
            r = K(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function se(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function le(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? se(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ce,
          ue,
          de =
            ((ue = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ce = ce || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ce.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ue(e, t);
                  });
                }
              : ue);
        function he(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var fe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          pe = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (fe.hasOwnProperty(e) && fe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ve(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(fe).forEach(function (e) {
          pe.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (fe[t] = fe[e]);
          });
        });
        var ge = z(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ge[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function xe(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var be = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var je = null,
          Se = null,
          ke = null;
        function Ne(e) {
          if ((e = xa(e))) {
            if ("function" !== typeof je) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = wa(t)), je(e.stateNode, e.type, t));
          }
        }
        function Ce(e) {
          Se ? (ke ? ke.push(e) : (ke = [e])) : (Se = e);
        }
        function Te() {
          if (Se) {
            var e = Se,
              t = ke;
            if (((ke = Se = null), Ne(e), t))
              for (e = 0; e < t.length; e++) Ne(t[e]);
          }
        }
        function Ee(e, t) {
          return e(t);
        }
        function _e() {}
        var Oe = !1;
        function Ie(e, t, n) {
          if (Oe) return e(t, n);
          Oe = !0;
          try {
            return Ee(e, t, n);
          } finally {
            (Oe = !1), (null !== Se || null !== ke) && (_e(), Te());
          }
        }
        function De(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = wa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Pe = !1;
        if (u)
          try {
            var Re = {};
            Object.defineProperty(Re, "passive", {
              get: function () {
                Pe = !0;
              },
            }),
              window.addEventListener("test", Re, Re),
              window.removeEventListener("test", Re, Re);
          } catch (ue) {
            Pe = !1;
          }
        function Fe(e, t, n, r, a, o, i, s, l) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (u) {
            this.onError(u);
          }
        }
        var Le = !1,
          ze = null,
          Ae = !1,
          Ue = null,
          Me = {
            onError: function (e) {
              (Le = !0), (ze = e);
            },
          };
        function Be(e, t, n, r, a, o, i, s, l) {
          (Le = !1), (ze = null), Fe.apply(Me, arguments);
        }
        function We(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ke(e) {
          if (We(e) !== e) throw Error(o(188));
        }
        function qe(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = We(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return Ke(a), e;
                    if (i === r) return Ke(a), t;
                    i = i.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var s = !1, l = a.child; l; ) {
                    if (l === n) {
                      (s = !0), (n = a), (r = i);
                      break;
                    }
                    if (l === r) {
                      (s = !0), (r = a), (n = i);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!s) {
                    for (l = i.child; l; ) {
                      if (l === n) {
                        (s = !0), (n = i), (r = a);
                        break;
                      }
                      if (l === r) {
                        (s = !0), (r = i), (n = a);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!s) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ye(e)
            : null;
        }
        function Ye(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ye(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ve = a.unstable_scheduleCallback,
          Qe = a.unstable_cancelCallback,
          Je = a.unstable_shouldYield,
          $e = a.unstable_requestPaint,
          Ge = a.unstable_now,
          Xe = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((st(e) / lt) | 0)) | 0;
              },
          st = Math.log,
          lt = Math.LN2;
        var ct = 64,
          ut = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ht(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var s = i & ~a;
            0 !== s ? (r = dt(s)) : 0 !== (o &= i) && (r = dt(o));
          } else 0 !== (i = n & ~a) ? (r = dt(i)) : 0 !== o && (r = dt(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function ft(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function pt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = ct;
          return 0 === (4194240 & (ct <<= 1)) && (ct = 64), e;
        }
        function vt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var xt = 0;
        function bt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var wt,
          jt,
          St,
          kt,
          Nt,
          Ct = !1,
          Tt = [],
          Et = null,
          _t = null,
          Ot = null,
          It = new Map(),
          Dt = new Map(),
          Pt = [],
          Rt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Ft(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Et = null;
              break;
            case "dragenter":
            case "dragleave":
              _t = null;
              break;
            case "mouseover":
            case "mouseout":
              Ot = null;
              break;
            case "pointerover":
            case "pointerout":
              It.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Dt.delete(t.pointerId);
          }
        }
        function Lt(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = xa(t)) && jt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function zt(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = We(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = He(n)))
                  return (
                    (e.blockedOn = t),
                    void Nt(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function At(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = xa(n)) && jt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (be = r), n.target.dispatchEvent(r), (be = null), t.shift();
          }
          return !0;
        }
        function Ut(e, t, n) {
          At(e) && n.delete(t);
        }
        function Mt() {
          (Ct = !1),
            null !== Et && At(Et) && (Et = null),
            null !== _t && At(_t) && (_t = null),
            null !== Ot && At(Ot) && (Ot = null),
            It.forEach(Ut),
            Dt.forEach(Ut);
        }
        function Bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ct ||
              ((Ct = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Mt)));
        }
        function Wt(e) {
          function t(t) {
            return Bt(t, e);
          }
          if (0 < Tt.length) {
            Bt(Tt[0], e);
            for (var n = 1; n < Tt.length; n++) {
              var r = Tt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Et && Bt(Et, e),
              null !== _t && Bt(_t, e),
              null !== Ot && Bt(Ot, e),
              It.forEach(t),
              Dt.forEach(t),
              n = 0;
            n < Pt.length;
            n++
          )
            (r = Pt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Pt.length && null === (n = Pt[0]).blockedOn; )
            zt(n), null === n.blockedOn && Pt.shift();
        }
        var Ht = b.ReactCurrentBatchConfig,
          Kt = !0;
        function qt(e, t, n, r) {
          var a = xt,
            o = Ht.transition;
          Ht.transition = null;
          try {
            (xt = 1), Vt(e, t, n, r);
          } finally {
            (xt = a), (Ht.transition = o);
          }
        }
        function Yt(e, t, n, r) {
          var a = xt,
            o = Ht.transition;
          Ht.transition = null;
          try {
            (xt = 4), Vt(e, t, n, r);
          } finally {
            (xt = a), (Ht.transition = o);
          }
        }
        function Vt(e, t, n, r) {
          if (Kt) {
            var a = Jt(e, t, n, r);
            if (null === a) Kr(e, t, r, Qt, n), Ft(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Et = Lt(Et, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (_t = Lt(_t, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Ot = Lt(Ot, e, t, n, r, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return It.set(o, Lt(It.get(o) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      Dt.set(o, Lt(Dt.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Ft(e, r), 4 & t && -1 < Rt.indexOf(e))) {
              for (; null !== a; ) {
                var o = xa(a);
                if (
                  (null !== o && wt(o),
                  null === (o = Jt(e, t, n, r)) && Kr(e, t, r, Qt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Kr(e, t, r, null, n);
          }
        }
        var Qt = null;
        function Jt(e, t, n, r) {
          if (((Qt = null), null !== (e = ya((e = we(r))))))
            if (null === (t = We(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = He(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Qt = e), null;
        }
        function $t(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Xe()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Gt = null,
          Xt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Xt,
            r = n.length,
            a = "value" in Gt ? Gt.value : Gt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            z(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          sn,
          ln,
          cn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          un = an(cn),
          dn = z({}, cn, { view: 0, detail: 0 }),
          hn = an(dn),
          fn = z({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Nn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== ln &&
                    (ln && "mousemove" === e.type
                      ? ((on = e.screenX - ln.screenX),
                        (sn = e.screenY - ln.screenY))
                      : (sn = on = 0),
                    (ln = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : sn;
            },
          }),
          pn = an(fn),
          mn = an(z({}, fn, { dataTransfer: 0 })),
          vn = an(z({}, dn, { relatedTarget: 0 })),
          gn = an(
            z({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = z({}, cn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          xn = an(yn),
          bn = an(z({}, cn, { data: 0 })),
          wn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          jn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function kn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function Nn() {
          return kn;
        }
        var Cn = z({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? jn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Nn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Tn = an(Cn),
          En = an(
            z({}, fn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          _n = an(
            z({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Nn,
            })
          ),
          On = an(
            z({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          In = z({}, fn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Dn = an(In),
          Pn = [9, 13, 27, 32],
          Rn = u && "CompositionEvent" in window,
          Fn = null;
        u && "documentMode" in document && (Fn = document.documentMode);
        var Ln = u && "TextEvent" in window && !Fn,
          zn = u && (!Rn || (Fn && 8 < Fn && 11 >= Fn)),
          An = String.fromCharCode(32),
          Un = !1;
        function Mn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Pn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Bn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Wn = !1;
        var Hn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Kn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Hn[e.type] : "textarea" === t;
        }
        function qn(e, t, n, r) {
          Ce(r),
            0 < (t = Yr(t, "onChange")).length &&
              ((n = new un("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Yn = null,
          Vn = null;
        function Qn(e) {
          Ar(e, 0);
        }
        function Jn(e) {
          if (V(ba(e))) return e;
        }
        function $n(e, t) {
          if ("change" === e) return t;
        }
        var Gn = !1;
        if (u) {
          var Xn;
          if (u) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Xn = Zn;
          } else Xn = !1;
          Gn = Xn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Yn && (Yn.detachEvent("onpropertychange", nr), (Vn = Yn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Jn(Vn)) {
            var t = [];
            qn(t, Vn, e, we(e)), Ie(Qn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Vn = n), (Yn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Jn(Vn);
        }
        function or(e, t) {
          if ("click" === e) return Jn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Jn(t);
        }
        var sr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function lr(e, t) {
          if (sr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !sr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function cr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function ur(e, t) {
          var n,
            r = cr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = cr(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function hr() {
          for (var e = window, t = Q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Q((e = t.contentWindow).document);
          }
          return t;
        }
        function fr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function pr(e) {
          var t = hr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && fr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = ur(n, o));
                var i = ur(n, r);
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = u && "documentMode" in document && 11 >= document.documentMode,
          vr = null,
          gr = null,
          yr = null,
          xr = !1;
        function br(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          xr ||
            null == vr ||
            vr !== Q(r) ||
            ("selectionStart" in (r = vr) && fr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && lr(yr, r)) ||
              ((yr = r),
              0 < (r = Yr(gr, "onSelect")).length &&
                ((t = new un("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = vr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var jr = {
            animationend: wr("Animation", "AnimationEnd"),
            animationiteration: wr("Animation", "AnimationIteration"),
            animationstart: wr("Animation", "AnimationStart"),
            transitionend: wr("Transition", "TransitionEnd"),
          },
          Sr = {},
          kr = {};
        function Nr(e) {
          if (Sr[e]) return Sr[e];
          if (!jr[e]) return e;
          var t,
            n = jr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in kr) return (Sr[e] = n[t]);
          return e;
        }
        u &&
          ((kr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete jr.animationend.animation,
            delete jr.animationiteration.animation,
            delete jr.animationstart.animation),
          "TransitionEvent" in window || delete jr.transitionend.transition);
        var Cr = Nr("animationend"),
          Tr = Nr("animationiteration"),
          Er = Nr("animationstart"),
          _r = Nr("transitionend"),
          Or = new Map(),
          Ir =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Dr(e, t) {
          Or.set(e, t), l(t, [e]);
        }
        for (var Pr = 0; Pr < Ir.length; Pr++) {
          var Rr = Ir[Pr];
          Dr(Rr.toLowerCase(), "on" + (Rr[0].toUpperCase() + Rr.slice(1)));
        }
        Dr(Cr, "onAnimationEnd"),
          Dr(Tr, "onAnimationIteration"),
          Dr(Er, "onAnimationStart"),
          Dr("dblclick", "onDoubleClick"),
          Dr("focusin", "onFocus"),
          Dr("focusout", "onBlur"),
          Dr(_r, "onTransitionEnd"),
          c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          l(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          l(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          l("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          l(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Fr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Lr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Fr)
          );
        function zr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, s, l, c) {
              if ((Be.apply(this, arguments), Le)) {
                if (!Le) throw Error(o(198));
                var u = ze;
                (Le = !1), (ze = null), Ae || ((Ae = !0), (Ue = u));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Ar(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var s = r[i],
                    l = s.instance,
                    c = s.currentTarget;
                  if (((s = s.listener), l !== o && a.isPropagationStopped()))
                    break e;
                  zr(a, s, c), (o = l);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((l = (s = r[i]).instance),
                    (c = s.currentTarget),
                    (s = s.listener),
                    l !== o && a.isPropagationStopped())
                  )
                    break e;
                  zr(a, s, c), (o = l);
                }
            }
          }
          if (Ae) throw ((e = Ue), (Ae = !1), (Ue = null), e);
        }
        function Ur(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Hr(t, e, 2, !1), n.add(r));
        }
        function Mr(e, t, n) {
          var r = 0;
          t && (r |= 4), Hr(n, e, r, t);
        }
        var Br = "_reactListening" + Math.random().toString(36).slice(2);
        function Wr(e) {
          if (!e[Br]) {
            (e[Br] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Lr.has(t) || Mr(t, !1, e), Mr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || ((t[Br] = !0), Mr("selectionchange", !1, t));
          }
        }
        function Hr(e, t, n, r) {
          switch ($t(t)) {
            case 1:
              var a = qt;
              break;
            case 4:
              a = Yt;
              break;
            default:
              a = Vt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Pe ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Kr(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var s = r.stateNode.containerInfo;
                if (s === a || (8 === s.nodeType && s.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var l = i.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = i.stateNode.containerInfo) === a ||
                        (8 === l.nodeType && l.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== s; ) {
                  if (null === (i = ya(s))) return;
                  if (5 === (l = i.tag) || 6 === l) {
                    r = o = i;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          Ie(function () {
            var r = o,
              a = we(n),
              i = [];
            e: {
              var s = Or.get(e);
              if (void 0 !== s) {
                var l = un,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    l = Tn;
                    break;
                  case "focusin":
                    (c = "focus"), (l = vn);
                    break;
                  case "focusout":
                    (c = "blur"), (l = vn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    l = vn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    l = pn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    l = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    l = _n;
                    break;
                  case Cr:
                  case Tr:
                  case Er:
                    l = gn;
                    break;
                  case _r:
                    l = On;
                    break;
                  case "scroll":
                    l = hn;
                    break;
                  case "wheel":
                    l = Dn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    l = xn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    l = En;
                }
                var u = 0 !== (4 & t),
                  d = !u && "scroll" === e,
                  h = u ? (null !== s ? s + "Capture" : null) : s;
                u = [];
                for (var f, p = r; null !== p; ) {
                  var m = (f = p).stateNode;
                  if (
                    (5 === f.tag &&
                      null !== m &&
                      ((f = m),
                      null !== h &&
                        null != (m = De(p, h)) &&
                        u.push(qr(p, m, f))),
                    d)
                  )
                    break;
                  p = p.return;
                }
                0 < u.length &&
                  ((s = new l(s, c, null, n, a)),
                  i.push({ event: s, listeners: u }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((l = "mouseout" === e || "pointerout" === e),
                (!(s = "mouseover" === e || "pointerover" === e) ||
                  n === be ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!ya(c) && !c[pa])) &&
                  (l || s) &&
                  ((s =
                    a.window === a
                      ? a
                      : (s = a.ownerDocument)
                      ? s.defaultView || s.parentWindow
                      : window),
                  l
                    ? ((l = r),
                      null !==
                        (c = (c = n.relatedTarget || n.toElement)
                          ? ya(c)
                          : null) &&
                        (c !== (d = We(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                        (c = null))
                    : ((l = null), (c = r)),
                  l !== c))
              ) {
                if (
                  ((u = pn),
                  (m = "onMouseLeave"),
                  (h = "onMouseEnter"),
                  (p = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((u = En),
                    (m = "onPointerLeave"),
                    (h = "onPointerEnter"),
                    (p = "pointer")),
                  (d = null == l ? s : ba(l)),
                  (f = null == c ? s : ba(c)),
                  ((s = new u(m, p + "leave", l, n, a)).target = d),
                  (s.relatedTarget = f),
                  (m = null),
                  ya(a) === r &&
                    (((u = new u(h, p + "enter", c, n, a)).target = f),
                    (u.relatedTarget = d),
                    (m = u)),
                  (d = m),
                  l && c)
                )
                  e: {
                    for (h = c, p = 0, f = u = l; f; f = Vr(f)) p++;
                    for (f = 0, m = h; m; m = Vr(m)) f++;
                    for (; 0 < p - f; ) (u = Vr(u)), p--;
                    for (; 0 < f - p; ) (h = Vr(h)), f--;
                    for (; p--; ) {
                      if (u === h || (null !== h && u === h.alternate)) break e;
                      (u = Vr(u)), (h = Vr(h));
                    }
                    u = null;
                  }
                else u = null;
                null !== l && Qr(i, s, l, u, !1),
                  null !== c && null !== d && Qr(i, d, c, u, !0);
              }
              if (
                "select" ===
                  (l =
                    (s = r ? ba(r) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                ("input" === l && "file" === s.type)
              )
                var v = $n;
              else if (Kn(s))
                if (Gn) v = ir;
                else {
                  v = ar;
                  var g = rr;
                }
              else
                (l = s.nodeName) &&
                  "input" === l.toLowerCase() &&
                  ("checkbox" === s.type || "radio" === s.type) &&
                  (v = or);
              switch (
                (v && (v = v(e, r))
                  ? qn(i, v, n, a)
                  : (g && g(e, s, r),
                    "focusout" === e &&
                      (g = s._wrapperState) &&
                      g.controlled &&
                      "number" === s.type &&
                      ee(s, "number", s.value)),
                (g = r ? ba(r) : window),
                e)
              ) {
                case "focusin":
                  (Kn(g) || "true" === g.contentEditable) &&
                    ((vr = g), (gr = r), (yr = null));
                  break;
                case "focusout":
                  yr = gr = vr = null;
                  break;
                case "mousedown":
                  xr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (xr = !1), br(i, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  br(i, n, a);
              }
              var y;
              if (Rn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var x = "onCompositionStart";
                      break e;
                    case "compositionend":
                      x = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      x = "onCompositionUpdate";
                      break e;
                  }
                  x = void 0;
                }
              else
                Wn
                  ? Mn(e, n) && (x = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (x = "onCompositionStart");
              x &&
                (zn &&
                  "ko" !== n.locale &&
                  (Wn || "onCompositionStart" !== x
                    ? "onCompositionEnd" === x && Wn && (y = en())
                    : ((Xt = "value" in (Gt = a) ? Gt.value : Gt.textContent),
                      (Wn = !0))),
                0 < (g = Yr(r, x)).length &&
                  ((x = new bn(x, e, null, n, a)),
                  i.push({ event: x, listeners: g }),
                  y ? (x.data = y) : null !== (y = Bn(n)) && (x.data = y))),
                (y = Ln
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Bn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Un = !0), An);
                        case "textInput":
                          return (e = t.data) === An && Un ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Wn)
                        return "compositionend" === e || (!Rn && Mn(e, t))
                          ? ((e = en()), (Zt = Xt = Gt = null), (Wn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return zn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Yr(r, "onBeforeInput")).length &&
                  ((a = new bn("onBeforeInput", "beforeinput", null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Ar(i, t);
          });
        }
        function qr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Yr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = De(e, n)) && r.unshift(qr(e, o, a)),
              null != (o = De(e, t)) && r.push(qr(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function Vr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Qr(e, t, n, r, a) {
          for (var o = t._reactName, i = []; null !== n && n !== r; ) {
            var s = n,
              l = s.alternate,
              c = s.stateNode;
            if (null !== l && l === r) break;
            5 === s.tag &&
              null !== c &&
              ((s = c),
              a
                ? null != (l = De(n, o)) && i.unshift(qr(n, l, s))
                : a || (null != (l = De(n, o)) && i.push(qr(n, l, s)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Jr = /\r\n?/g,
          $r = /\u0000|\uFFFD/g;
        function Gr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Jr, "\n")
            .replace($r, "");
        }
        function Xr(e, t, n) {
          if (((t = Gr(t)), Gr(e) !== t && n)) throw Error(o(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oa = "function" === typeof Promise ? Promise : void 0,
          ia =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oa
              ? function (e) {
                  return oa.resolve(null).then(e).catch(sa);
                }
              : ra;
        function sa(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function la(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Wt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Wt(t);
        }
        function ca(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ua(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          ha = "__reactFiber$" + da,
          fa = "__reactProps$" + da,
          pa = "__reactContainer$" + da,
          ma = "__reactEvents$" + da,
          va = "__reactListeners$" + da,
          ga = "__reactHandles$" + da;
        function ya(e) {
          var t = e[ha];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[pa] || n[ha])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ua(e); null !== e; ) {
                  if ((n = e[ha])) return n;
                  e = ua(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function xa(e) {
          return !(e = e[ha] || e[pa]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function ba(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function wa(e) {
          return e[fa] || null;
        }
        var ja = [],
          Sa = -1;
        function ka(e) {
          return { current: e };
        }
        function Na(e) {
          0 > Sa || ((e.current = ja[Sa]), (ja[Sa] = null), Sa--);
        }
        function Ca(e, t) {
          Sa++, (ja[Sa] = e.current), (e.current = t);
        }
        var Ta = {},
          Ea = ka(Ta),
          _a = ka(!1),
          Oa = Ta;
        function Ia(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ta;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Da(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Pa() {
          Na(_a), Na(Ea);
        }
        function Ra(e, t, n) {
          if (Ea.current !== Ta) throw Error(o(168));
          Ca(Ea, t), Ca(_a, n);
        }
        function Fa(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, H(e) || "Unknown", a));
          return z({}, n, r);
        }
        function La(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ta),
            (Oa = Ea.current),
            Ca(Ea, e),
            Ca(_a, _a.current),
            !0
          );
        }
        function za(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = Fa(e, t, Oa)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Na(_a),
              Na(Ea),
              Ca(Ea, e))
            : Na(_a),
            Ca(_a, n);
        }
        var Aa = null,
          Ua = !1,
          Ma = !1;
        function Ba(e) {
          null === Aa ? (Aa = [e]) : Aa.push(e);
        }
        function Wa() {
          if (!Ma && null !== Aa) {
            Ma = !0;
            var e = 0,
              t = xt;
            try {
              var n = Aa;
              for (xt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Aa = null), (Ua = !1);
            } catch (a) {
              throw (null !== Aa && (Aa = Aa.slice(e + 1)), Ve(Ze, Wa), a);
            } finally {
              (xt = t), (Ma = !1);
            }
          }
          return null;
        }
        var Ha = [],
          Ka = 0,
          qa = null,
          Ya = 0,
          Va = [],
          Qa = 0,
          Ja = null,
          $a = 1,
          Ga = "";
        function Xa(e, t) {
          (Ha[Ka++] = Ya), (Ha[Ka++] = qa), (qa = e), (Ya = t);
        }
        function Za(e, t, n) {
          (Va[Qa++] = $a), (Va[Qa++] = Ga), (Va[Qa++] = Ja), (Ja = e);
          var r = $a;
          e = Ga;
          var a = 32 - it(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - it(t) + a;
          if (30 < o) {
            var i = a - (a % 5);
            (o = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              ($a = (1 << (32 - it(t) + a)) | (n << a) | r),
              (Ga = o + e);
          } else ($a = (1 << o) | (n << a) | r), (Ga = e);
        }
        function eo(e) {
          null !== e.return && (Xa(e, 1), Za(e, 1, 0));
        }
        function to(e) {
          for (; e === qa; )
            (qa = Ha[--Ka]), (Ha[Ka] = null), (Ya = Ha[--Ka]), (Ha[Ka] = null);
          for (; e === Ja; )
            (Ja = Va[--Qa]),
              (Va[Qa] = null),
              (Ga = Va[--Qa]),
              (Va[Qa] = null),
              ($a = Va[--Qa]),
              (Va[Qa] = null);
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null;
        function io(e, t) {
          var n = Dc(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function so(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (no = e), (ro = ca(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ja ? { id: $a, overflow: Ga } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Dc(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function lo(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function co(e) {
          if (ao) {
            var t = ro;
            if (t) {
              var n = t;
              if (!so(e, t)) {
                if (lo(e)) throw Error(o(418));
                t = ca(n.nextSibling);
                var r = no;
                t && so(e, t)
                  ? io(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
              }
            } else {
              if (lo(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
            }
          }
        }
        function uo(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          no = e;
        }
        function ho(e) {
          if (e !== no) return !1;
          if (!ao) return uo(e), (ao = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (lo(e)) throw (fo(), Error(o(418)));
            for (; t; ) io(e, t), (t = ca(t.nextSibling));
          }
          if ((uo(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ro = ca(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? ca(e.stateNode.nextSibling) : null;
          return !0;
        }
        function fo() {
          for (var e = ro; e; ) e = ca(e.nextSibling);
        }
        function po() {
          (ro = no = null), (ao = !1);
        }
        function mo(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var vo = b.ReactCurrentBatchConfig;
        function go(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = z({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var yo = ka(null),
          xo = null,
          bo = null,
          wo = null;
        function jo() {
          wo = bo = xo = null;
        }
        function So(e) {
          var t = yo.current;
          Na(yo), (e._currentValue = t);
        }
        function ko(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function No(e, t) {
          (xo = e),
            (wo = bo = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (bs = !0), (e.firstContext = null));
        }
        function Co(e) {
          var t = e._currentValue;
          if (wo !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === bo)
            ) {
              if (null === xo) throw Error(o(308));
              (bo = e), (xo.dependencies = { lanes: 0, firstContext: e });
            } else bo = bo.next = e;
          return t;
        }
        var To = null;
        function Eo(e) {
          null === To ? (To = [e]) : To.push(e);
        }
        function _o(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Eo(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Oo(e, r)
          );
        }
        function Oo(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Io = !1;
        function Do(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Po(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Ro(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Fo(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & _l))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Oo(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Eo(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Oo(e, n)
          );
        }
        function Lo(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function zo(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (a = o = i) : (o = o.next = i), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Ao(e, t, n, r) {
          var a = e.updateQueue;
          Io = !1;
          var o = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            s = a.shared.pending;
          if (null !== s) {
            a.shared.pending = null;
            var l = s,
              c = l.next;
            (l.next = null), null === i ? (o = c) : (i.next = c), (i = l);
            var u = e.alternate;
            null !== u &&
              (s = (u = u.updateQueue).lastBaseUpdate) !== i &&
              (null === s ? (u.firstBaseUpdate = c) : (s.next = c),
              (u.lastBaseUpdate = l));
          }
          if (null !== o) {
            var d = a.baseState;
            for (i = 0, u = c = l = null, s = o; ; ) {
              var h = s.lane,
                f = s.eventTime;
              if ((r & h) === h) {
                null !== u &&
                  (u = u.next =
                    {
                      eventTime: f,
                      lane: 0,
                      tag: s.tag,
                      payload: s.payload,
                      callback: s.callback,
                      next: null,
                    });
                e: {
                  var p = e,
                    m = s;
                  switch (((h = t), (f = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (p = m.payload)) {
                        d = p.call(f, d, h);
                        break e;
                      }
                      d = p;
                      break e;
                    case 3:
                      p.flags = (-65537 & p.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (h =
                            "function" === typeof (p = m.payload)
                              ? p.call(f, d, h)
                              : p) ||
                        void 0 === h
                      )
                        break e;
                      d = z({}, d, h);
                      break e;
                    case 2:
                      Io = !0;
                  }
                }
                null !== s.callback &&
                  0 !== s.lane &&
                  ((e.flags |= 64),
                  null === (h = a.effects) ? (a.effects = [s]) : h.push(s));
              } else
                (f = {
                  eventTime: f,
                  lane: h,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                }),
                  null === u ? ((c = u = f), (l = d)) : (u = u.next = f),
                  (i |= h);
              if (null === (s = s.next)) {
                if (null === (s = a.shared.pending)) break;
                (s = (h = s).next),
                  (h.next = null),
                  (a.lastBaseUpdate = h),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === u && (l = d),
              (a.baseState = l),
              (a.firstBaseUpdate = c),
              (a.lastBaseUpdate = u),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (zl |= i), (e.lanes = i), (e.memoizedState = d);
          }
        }
        function Uo(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var Mo = new r.Component().refs;
        function Bo(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : z({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Wo = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && We(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = tc(),
              a = nc(e),
              o = Ro(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Fo(e, o, a)) && (rc(t, e, a, r), Lo(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = tc(),
              a = nc(e),
              o = Ro(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Fo(e, o, a)) && (rc(t, e, a, r), Lo(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tc(),
              r = nc(e),
              a = Ro(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Fo(e, a, r)) && (rc(t, e, r, n), Lo(t, e, r));
          },
        };
        function Ho(e, t, n, r, a, o, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !lr(n, r) ||
                !lr(a, o);
        }
        function Ko(e, t, n) {
          var r = !1,
            a = Ta,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = Co(o))
              : ((a = Da(t) ? Oa : Ea.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Ia(e, a)
                  : Ta)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Wo),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function qo(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Wo.enqueueReplaceState(t, t.state, null);
        }
        function Yo(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Mo), Do(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (a.context = Co(o))
            : ((o = Da(t) ? Oa : Ea.current), (a.context = Ia(e, o))),
            (a.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (Bo(e, t, o, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Wo.enqueueReplaceState(a, a.state, null),
              Ao(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Vo(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Mo && (t = a.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function Qo(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Jo(e) {
          return (0, e._init)(e._payload);
        }
        function $o(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Rc(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function s(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function l(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Ac(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            var o = n.type;
            return o === S
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === o ||
                  ("object" === typeof o &&
                    null !== o &&
                    o.$$typeof === D &&
                    Jo(o) === t.type))
              ? (((r = a(t, n.props)).ref = Vo(e, t, n)), (r.return = e), r)
              : (((r = Fc(n.type, n.key, n.props, null, e.mode, r)).ref = Vo(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function u(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Uc(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Lc(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function h(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Ac("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = Fc(t.type, t.key, t.props, null, e.mode, n)).ref = Vo(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case j:
                  return ((t = Uc(t, e.mode, n)).return = e), t;
                case D:
                  return h(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || F(t))
                return ((t = Lc(t, e.mode, n, null)).return = e), t;
              Qo(e, t);
            }
            return null;
          }
          function f(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : l(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === a ? c(e, t, n, r) : null;
                case j:
                  return n.key === a ? u(e, t, n, r) : null;
                case D:
                  return f(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || F(n)) return null !== a ? null : d(e, t, n, r, null);
              Qo(e, n);
            }
            return null;
          }
          function p(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return l(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case j:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case D:
                  return p(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || F(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              Qo(t, r);
            }
            return null;
          }
          function m(a, o, s, l) {
            for (
              var c = null, u = null, d = o, m = (o = 0), v = null;
              null !== d && m < s.length;
              m++
            ) {
              d.index > m ? ((v = d), (d = null)) : (v = d.sibling);
              var g = f(a, d, s[m], l);
              if (null === g) {
                null === d && (d = v);
                break;
              }
              e && d && null === g.alternate && t(a, d),
                (o = i(g, o, m)),
                null === u ? (c = g) : (u.sibling = g),
                (u = g),
                (d = v);
            }
            if (m === s.length) return n(a, d), ao && Xa(a, m), c;
            if (null === d) {
              for (; m < s.length; m++)
                null !== (d = h(a, s[m], l)) &&
                  ((o = i(d, o, m)),
                  null === u ? (c = d) : (u.sibling = d),
                  (u = d));
              return ao && Xa(a, m), c;
            }
            for (d = r(a, d); m < s.length; m++)
              null !== (v = p(d, a, m, s[m], l)) &&
                (e &&
                  null !== v.alternate &&
                  d.delete(null === v.key ? m : v.key),
                (o = i(v, o, m)),
                null === u ? (c = v) : (u.sibling = v),
                (u = v));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Xa(a, m),
              c
            );
          }
          function v(a, s, l, c) {
            var u = F(l);
            if ("function" !== typeof u) throw Error(o(150));
            if (null == (l = u.call(l))) throw Error(o(151));
            for (
              var d = (u = null), m = s, v = (s = 0), g = null, y = l.next();
              null !== m && !y.done;
              v++, y = l.next()
            ) {
              m.index > v ? ((g = m), (m = null)) : (g = m.sibling);
              var x = f(a, m, y.value, c);
              if (null === x) {
                null === m && (m = g);
                break;
              }
              e && m && null === x.alternate && t(a, m),
                (s = i(x, s, v)),
                null === d ? (u = x) : (d.sibling = x),
                (d = x),
                (m = g);
            }
            if (y.done) return n(a, m), ao && Xa(a, v), u;
            if (null === m) {
              for (; !y.done; v++, y = l.next())
                null !== (y = h(a, y.value, c)) &&
                  ((s = i(y, s, v)),
                  null === d ? (u = y) : (d.sibling = y),
                  (d = y));
              return ao && Xa(a, v), u;
            }
            for (m = r(a, m); !y.done; v++, y = l.next())
              null !== (y = p(m, a, v, y.value, c)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? v : y.key),
                (s = i(y, s, v)),
                null === d ? (u = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Xa(a, v),
              u
            );
          }
          return function e(r, o, i, l) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === S &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case w:
                  e: {
                    for (var c = i.key, u = o; null !== u; ) {
                      if (u.key === c) {
                        if ((c = i.type) === S) {
                          if (7 === u.tag) {
                            n(r, u.sibling),
                              ((o = a(u, i.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          u.elementType === c ||
                          ("object" === typeof c &&
                            null !== c &&
                            c.$$typeof === D &&
                            Jo(c) === u.type)
                        ) {
                          n(r, u.sibling),
                            ((o = a(u, i.props)).ref = Vo(r, u, i)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, u);
                        break;
                      }
                      t(r, u), (u = u.sibling);
                    }
                    i.type === S
                      ? (((o = Lc(i.props.children, r.mode, l, i.key)).return =
                          r),
                        (r = o))
                      : (((l = Fc(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          l
                        )).ref = Vo(r, o, i)),
                        (l.return = r),
                        (r = l));
                  }
                  return s(r);
                case j:
                  e: {
                    for (u = i.key; null !== o; ) {
                      if (o.key === u) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === i.containerInfo &&
                          o.stateNode.implementation === i.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = a(o, i.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = Uc(i, r.mode, l)).return = r), (r = o);
                  }
                  return s(r);
                case D:
                  return e(r, o, (u = i._init)(i._payload), l);
              }
              if (te(i)) return m(r, o, i, l);
              if (F(i)) return v(r, o, i, l);
              Qo(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, i)).return = r), (r = o))
                  : (n(r, o), ((o = Ac(i, r.mode, l)).return = r), (r = o)),
                s(r))
              : n(r, o);
          };
        }
        var Go = $o(!0),
          Xo = $o(!1),
          Zo = {},
          ei = ka(Zo),
          ti = ka(Zo),
          ni = ka(Zo);
        function ri(e) {
          if (e === Zo) throw Error(o(174));
          return e;
        }
        function ai(e, t) {
          switch ((Ca(ni, t), Ca(ti, e), Ca(ei, Zo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
              break;
            default:
              t = le(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Na(ei), Ca(ei, t);
        }
        function oi() {
          Na(ei), Na(ti), Na(ni);
        }
        function ii(e) {
          ri(ni.current);
          var t = ri(ei.current),
            n = le(t, e.type);
          t !== n && (Ca(ti, e), Ca(ei, n));
        }
        function si(e) {
          ti.current === e && (Na(ei), Na(ti));
        }
        var li = ka(0);
        function ci(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ui = [];
        function di() {
          for (var e = 0; e < ui.length; e++)
            ui[e]._workInProgressVersionPrimary = null;
          ui.length = 0;
        }
        var hi = b.ReactCurrentDispatcher,
          fi = b.ReactCurrentBatchConfig,
          pi = 0,
          mi = null,
          vi = null,
          gi = null,
          yi = !1,
          xi = !1,
          bi = 0,
          wi = 0;
        function ji() {
          throw Error(o(321));
        }
        function Si(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!sr(e[n], t[n])) return !1;
          return !0;
        }
        function ki(e, t, n, r, a, i) {
          if (
            ((pi = i),
            (mi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (hi.current = null === e || null === e.memoizedState ? ss : ls),
            (e = n(r, a)),
            xi)
          ) {
            i = 0;
            do {
              if (((xi = !1), (bi = 0), 25 <= i)) throw Error(o(301));
              (i += 1),
                (gi = vi = null),
                (t.updateQueue = null),
                (hi.current = cs),
                (e = n(r, a));
            } while (xi);
          }
          if (
            ((hi.current = is),
            (t = null !== vi && null !== vi.next),
            (pi = 0),
            (gi = vi = mi = null),
            (yi = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function Ni() {
          var e = 0 !== bi;
          return (bi = 0), e;
        }
        function Ci() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === gi ? (mi.memoizedState = gi = e) : (gi = gi.next = e), gi
          );
        }
        function Ti() {
          if (null === vi) {
            var e = mi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = vi.next;
          var t = null === gi ? mi.memoizedState : gi.next;
          if (null !== t) (gi = t), (vi = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (vi = e).memoizedState,
              baseState: vi.baseState,
              baseQueue: vi.baseQueue,
              queue: vi.queue,
              next: null,
            }),
              null === gi ? (mi.memoizedState = gi = e) : (gi = gi.next = e);
          }
          return gi;
        }
        function Ei(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function _i(e) {
          var t = Ti(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = vi,
            a = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== a) {
              var s = a.next;
              (a.next = i.next), (i.next = s);
            }
            (r.baseQueue = a = i), (n.pending = null);
          }
          if (null !== a) {
            (i = a.next), (r = r.baseState);
            var l = (s = null),
              c = null,
              u = i;
            do {
              var d = u.lane;
              if ((pi & d) === d)
                null !== c &&
                  (c = c.next =
                    {
                      lane: 0,
                      action: u.action,
                      hasEagerState: u.hasEagerState,
                      eagerState: u.eagerState,
                      next: null,
                    }),
                  (r = u.hasEagerState ? u.eagerState : e(r, u.action));
              else {
                var h = {
                  lane: d,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                };
                null === c ? ((l = c = h), (s = r)) : (c = c.next = h),
                  (mi.lanes |= d),
                  (zl |= d);
              }
              u = u.next;
            } while (null !== u && u !== i);
            null === c ? (s = r) : (c.next = l),
              sr(r, t.memoizedState) || (bs = !0),
              (t.memoizedState = r),
              (t.baseState = s),
              (t.baseQueue = c),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (i = a.lane), (mi.lanes |= i), (zl |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Oi(e) {
          var t = Ti(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var s = (a = a.next);
            do {
              (i = e(i, s.action)), (s = s.next);
            } while (s !== a);
            sr(i, t.memoizedState) || (bs = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function Ii() {}
        function Di(e, t) {
          var n = mi,
            r = Ti(),
            a = t(),
            i = !sr(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (bs = !0)),
            (r = r.queue),
            Ki(Fi.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== gi && 1 & gi.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Ui(9, Ri.bind(null, n, r, a, t), void 0, null),
              null === Ol)
            )
              throw Error(o(349));
            0 !== (30 & pi) || Pi(n, t, a);
          }
          return a;
        }
        function Pi(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mi.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ri(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Li(t) && zi(e);
        }
        function Fi(e, t, n) {
          return n(function () {
            Li(t) && zi(e);
          });
        }
        function Li(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !sr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function zi(e) {
          var t = Oo(e, 1);
          null !== t && rc(t, e, 1, -1);
        }
        function Ai(e) {
          var t = Ci();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Ei,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = ns.bind(null, mi, e)),
            [t.memoizedState, e]
          );
        }
        function Ui(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Mi() {
          return Ti().memoizedState;
        }
        function Bi(e, t, n, r) {
          var a = Ci();
          (mi.flags |= e),
            (a.memoizedState = Ui(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Wi(e, t, n, r) {
          var a = Ti();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== vi) {
            var i = vi.memoizedState;
            if (((o = i.destroy), null !== r && Si(r, i.deps)))
              return void (a.memoizedState = Ui(t, n, o, r));
          }
          (mi.flags |= e), (a.memoizedState = Ui(1 | t, n, o, r));
        }
        function Hi(e, t) {
          return Bi(8390656, 8, e, t);
        }
        function Ki(e, t) {
          return Wi(2048, 8, e, t);
        }
        function qi(e, t) {
          return Wi(4, 2, e, t);
        }
        function Yi(e, t) {
          return Wi(4, 4, e, t);
        }
        function Vi(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Qi(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Wi(4, 4, Vi.bind(null, t, e), n)
          );
        }
        function Ji() {}
        function $i(e, t) {
          var n = Ti();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Si(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Gi(e, t) {
          var n = Ti();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Si(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Xi(e, t, n) {
          return 0 === (21 & pi)
            ? (e.baseState && ((e.baseState = !1), (bs = !0)),
              (e.memoizedState = n))
            : (sr(n, t) ||
                ((n = mt()), (mi.lanes |= n), (zl |= n), (e.baseState = !0)),
              t);
        }
        function Zi(e, t) {
          var n = xt;
          (xt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = fi.transition;
          fi.transition = {};
          try {
            e(!1), t();
          } finally {
            (xt = n), (fi.transition = r);
          }
        }
        function es() {
          return Ti().memoizedState;
        }
        function ts(e, t, n) {
          var r = nc(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rs(e))
          )
            as(t, n);
          else if (null !== (n = _o(e, t, n, r))) {
            rc(n, e, r, tc()), os(n, t, r);
          }
        }
        function ns(e, t, n) {
          var r = nc(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rs(e)) as(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  s = o(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = s), sr(s, i))) {
                  var l = t.interleaved;
                  return (
                    null === l
                      ? ((a.next = a), Eo(t))
                      : ((a.next = l.next), (l.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (c) {}
            null !== (n = _o(e, t, a, r)) &&
              (rc(n, e, r, (a = tc())), os(n, t, r));
          }
        }
        function rs(e) {
          var t = e.alternate;
          return e === mi || (null !== t && t === mi);
        }
        function as(e, t) {
          xi = yi = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function os(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var is = {
            readContext: Co,
            useCallback: ji,
            useContext: ji,
            useEffect: ji,
            useImperativeHandle: ji,
            useInsertionEffect: ji,
            useLayoutEffect: ji,
            useMemo: ji,
            useReducer: ji,
            useRef: ji,
            useState: ji,
            useDebugValue: ji,
            useDeferredValue: ji,
            useTransition: ji,
            useMutableSource: ji,
            useSyncExternalStore: ji,
            useId: ji,
            unstable_isNewReconciler: !1,
          },
          ss = {
            readContext: Co,
            useCallback: function (e, t) {
              return (Ci().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Co,
            useEffect: Hi,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Bi(4194308, 4, Vi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Bi(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Bi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Ci();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Ci();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = ts.bind(null, mi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Ci().memoizedState = e);
            },
            useState: Ai,
            useDebugValue: Ji,
            useDeferredValue: function (e) {
              return (Ci().memoizedState = e);
            },
            useTransition: function () {
              var e = Ai(!1),
                t = e[0];
              return (
                (e = Zi.bind(null, e[1])), (Ci().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = mi,
                a = Ci();
              if (ao) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Ol)) throw Error(o(349));
                0 !== (30 & pi) || Pi(r, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                Hi(Fi.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Ui(9, Ri.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Ci(),
                t = Ol.identifierPrefix;
              if (ao) {
                var n = Ga;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = ($a & ~(1 << (32 - it($a) - 1))).toString(32) + n)),
                  0 < (n = bi++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = wi++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ls = {
            readContext: Co,
            useCallback: $i,
            useContext: Co,
            useEffect: Ki,
            useImperativeHandle: Qi,
            useInsertionEffect: qi,
            useLayoutEffect: Yi,
            useMemo: Gi,
            useReducer: _i,
            useRef: Mi,
            useState: function () {
              return _i(Ei);
            },
            useDebugValue: Ji,
            useDeferredValue: function (e) {
              return Xi(Ti(), vi.memoizedState, e);
            },
            useTransition: function () {
              return [_i(Ei)[0], Ti().memoizedState];
            },
            useMutableSource: Ii,
            useSyncExternalStore: Di,
            useId: es,
            unstable_isNewReconciler: !1,
          },
          cs = {
            readContext: Co,
            useCallback: $i,
            useContext: Co,
            useEffect: Ki,
            useImperativeHandle: Qi,
            useInsertionEffect: qi,
            useLayoutEffect: Yi,
            useMemo: Gi,
            useReducer: Oi,
            useRef: Mi,
            useState: function () {
              return Oi(Ei);
            },
            useDebugValue: Ji,
            useDeferredValue: function (e) {
              var t = Ti();
              return null === vi
                ? (t.memoizedState = e)
                : Xi(t, vi.memoizedState, e);
            },
            useTransition: function () {
              return [Oi(Ei)[0], Ti().memoizedState];
            },
            useMutableSource: Ii,
            useSyncExternalStore: Di,
            useId: es,
            unstable_isNewReconciler: !1,
          };
        function us(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += B(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (o) {
            a = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function ds(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function hs(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var fs = "function" === typeof WeakMap ? WeakMap : Map;
        function ps(e, t, n) {
          ((n = Ro(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              ql || ((ql = !0), (Yl = r)), hs(0, t);
            }),
            n
          );
        }
        function ms(e, t, n) {
          (n = Ro(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                hs(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                hs(0, t),
                  "function" !== typeof r &&
                    (null === Vl ? (Vl = new Set([this])) : Vl.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentstack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function vs(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new fs();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Cc.bind(null, e, t, n)), t.then(e, e));
        }
        function gs(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function ys(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Ro(-1, 1)).tag = 2), Fo(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var xs = b.ReactCurrentOwner,
          bs = !1;
        function ws(e, t, n, r) {
          t.child = null === e ? Xo(t, null, n, r) : Go(t, e.child, n, r);
        }
        function js(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            No(t, a),
            (r = ki(e, t, n, r, o, a)),
            (n = Ni()),
            null === e || bs
              ? (ao && n && eo(t), (t.flags |= 1), ws(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                qs(e, t, a))
          );
        }
        function Ss(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              Pc(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Fc(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), ks(e, t, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var i = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : lr)(i, r) &&
              e.ref === t.ref
            )
              return qs(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Rc(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function ks(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (lr(o, r) && e.ref === t.ref) {
              if (((bs = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), qs(e, t, a);
              0 !== (131072 & e.flags) && (bs = !0);
            }
          }
          return Ts(e, t, n, r, a);
        }
        function Ns(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ca(Rl, Pl),
                (Pl |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ca(Rl, Pl),
                  (Pl |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                Ca(Rl, Pl),
                (Pl |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ca(Rl, Pl),
              (Pl |= r);
          return ws(e, t, a, n), t.child;
        }
        function Cs(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ts(e, t, n, r, a) {
          var o = Da(n) ? Oa : Ea.current;
          return (
            (o = Ia(t, o)),
            No(t, a),
            (n = ki(e, t, n, r, o, a)),
            (r = Ni()),
            null === e || bs
              ? (ao && r && eo(t), (t.flags |= 1), ws(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                qs(e, t, a))
          );
        }
        function Es(e, t, n, r, a) {
          if (Da(n)) {
            var o = !0;
            La(t);
          } else o = !1;
          if ((No(t, a), null === t.stateNode))
            Ks(e, t), Ko(t, n, r), Yo(t, n, r, a), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              s = t.memoizedProps;
            i.props = s;
            var l = i.context,
              c = n.contextType;
            "object" === typeof c && null !== c
              ? (c = Co(c))
              : (c = Ia(t, (c = Da(n) ? Oa : Ea.current)));
            var u = n.getDerivedStateFromProps,
              d =
                "function" === typeof u ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((s !== r || l !== c) && qo(t, i, r, c)),
              (Io = !1);
            var h = t.memoizedState;
            (i.state = h),
              Ao(t, r, i, a),
              (l = t.memoizedState),
              s !== r || h !== l || _a.current || Io
                ? ("function" === typeof u &&
                    (Bo(t, n, u, r), (l = t.memoizedState)),
                  (s = Io || Ho(t, n, s, r, h, l, c))
                    ? (d ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = l)),
                  (i.props = r),
                  (i.state = l),
                  (i.context = c),
                  (r = s))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              Po(e, t),
              (s = t.memoizedProps),
              (c = t.type === t.elementType ? s : go(t.type, s)),
              (i.props = c),
              (d = t.pendingProps),
              (h = i.context),
              "object" === typeof (l = n.contextType) && null !== l
                ? (l = Co(l))
                : (l = Ia(t, (l = Da(n) ? Oa : Ea.current)));
            var f = n.getDerivedStateFromProps;
            (u =
              "function" === typeof f ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((s !== d || h !== l) && qo(t, i, r, l)),
              (Io = !1),
              (h = t.memoizedState),
              (i.state = h),
              Ao(t, r, i, a);
            var p = t.memoizedState;
            s !== d || h !== p || _a.current || Io
              ? ("function" === typeof f &&
                  (Bo(t, n, f, r), (p = t.memoizedState)),
                (c = Io || Ho(t, n, c, r, h, p, l) || !1)
                  ? (u ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, p, l),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, p, l)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (s === e.memoizedProps && h === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (s === e.memoizedProps && h === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
                (i.props = r),
                (i.state = p),
                (i.context = l),
                (r = c))
              : ("function" !== typeof i.componentDidUpdate ||
                  (s === e.memoizedProps && h === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (s === e.memoizedProps && h === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return _s(e, t, n, r, o, a);
        }
        function _s(e, t, n, r, a, o) {
          Cs(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return a && za(t, n, !1), qs(e, t, o);
          (r = t.stateNode), (xs.current = t);
          var s =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Go(t, e.child, null, o)),
                (t.child = Go(t, null, s, o)))
              : ws(e, t, s, o),
            (t.memoizedState = r.state),
            a && za(t, n, !0),
            t.child
          );
        }
        function Os(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ra(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ra(0, t.context, !1),
            ai(e, t.containerInfo);
        }
        function Is(e, t, n, r, a) {
          return po(), mo(a), (t.flags |= 256), ws(e, t, n, r), t.child;
        }
        var Ds,
          Ps,
          Rs,
          Fs,
          Ls = { dehydrated: null, treeContext: null, retryLane: 0 };
        function zs(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function As(e, t, n) {
          var r,
            a = t.pendingProps,
            i = li.current,
            s = !1,
            l = 0 !== (128 & t.flags);
          if (
            ((r = l) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((s = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Ca(li, 1 & i),
            null === e)
          )
            return (
              co(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((l = a.children),
                  (e = a.fallback),
                  s
                    ? ((a = t.mode),
                      (s = t.child),
                      (l = { mode: "hidden", children: l }),
                      0 === (1 & a) && null !== s
                        ? ((s.childLanes = 0), (s.pendingProps = l))
                        : (s = zc(l, a, 0, null)),
                      (e = Lc(e, a, n, null)),
                      (s.return = t),
                      (e.return = t),
                      (s.sibling = e),
                      (t.child = s),
                      (t.child.memoizedState = zs(n)),
                      (t.memoizedState = Ls),
                      e)
                    : Us(t, l))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, a, i, s) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Ms(e, t, s, (r = ds(Error(o(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (a = t.mode),
                    (r = zc(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((i = Lc(i, a, s, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && Go(t, e.child, null, s),
                    (t.child.memoizedState = zs(s)),
                    (t.memoizedState = Ls),
                    i);
              if (0 === (1 & t.mode)) return Ms(e, t, s, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var l = r.dgst;
                return (
                  (r = l), Ms(e, t, s, (r = ds((i = Error(o(419))), r, void 0)))
                );
              }
              if (((l = 0 !== (s & e.childLanes)), bs || l)) {
                if (null !== (r = Ol)) {
                  switch (s & -s) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | s)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), Oo(e, a), rc(r, e, a, -1));
                }
                return vc(), Ms(e, t, s, (r = ds(Error(o(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Ec.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (ro = ca(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((Va[Qa++] = $a),
                    (Va[Qa++] = Ga),
                    (Va[Qa++] = Ja),
                    ($a = e.id),
                    (Ga = e.overflow),
                    (Ja = t)),
                  (t = Us(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, l, a, r, i, n);
          if (s) {
            (s = a.fallback), (l = t.mode), (r = (i = e.child).sibling);
            var c = { mode: "hidden", children: a.children };
            return (
              0 === (1 & l) && t.child !== i
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = c),
                  (t.deletions = null))
                : ((a = Rc(i, c)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (s = Rc(r, s))
                : ((s = Lc(s, l, n, null)).flags |= 2),
              (s.return = t),
              (a.return = t),
              (a.sibling = s),
              (t.child = a),
              (a = s),
              (s = t.child),
              (l =
                null === (l = e.child.memoizedState)
                  ? zs(n)
                  : {
                      baseLanes: l.baseLanes | n,
                      cachePool: null,
                      transitions: l.transitions,
                    }),
              (s.memoizedState = l),
              (s.childLanes = e.childLanes & ~n),
              (t.memoizedState = Ls),
              a
            );
          }
          return (
            (e = (s = e.child).sibling),
            (a = Rc(s, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Us(e, t) {
          return (
            ((t = zc(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Ms(e, t, n, r) {
          return (
            null !== r && mo(r),
            Go(t, e.child, null, n),
            ((e = Us(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Bs(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), ko(e.return, t, n);
        }
        function Ws(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function Hs(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((ws(e, t, r.children, n), 0 !== (2 & (r = li.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Bs(e, n, t);
                else if (19 === e.tag) Bs(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ca(li, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === ci(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Ws(t, !1, a, n, o);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === ci(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Ws(t, !0, n, null, o);
                break;
              case "together":
                Ws(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Ks(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function qs(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (zl |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Rc((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Rc(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Ys(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Vs(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Qs(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Vs(t), null;
            case 1:
            case 17:
              return Da(t.type) && Pa(), Vs(t), null;
            case 3:
              return (
                (r = t.stateNode),
                oi(),
                Na(_a),
                Na(Ea),
                di(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (ho(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (sc(oo), (oo = null)))),
                Ps(e, t),
                Vs(t),
                null
              );
            case 5:
              si(t);
              var a = ri(ni.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Rs(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return Vs(t), null;
                }
                if (((e = ri(ei.current)), ho(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[ha] = t), (r[fa] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Ur("cancel", r), Ur("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ur("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Fr.length; a++) Ur(Fr[a], r);
                      break;
                    case "source":
                      Ur("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ur("error", r), Ur("load", r);
                      break;
                    case "details":
                      Ur("toggle", r);
                      break;
                    case "input":
                      $(r, i), Ur("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Ur("invalid", r);
                      break;
                    case "textarea":
                      ae(r, i), Ur("invalid", r);
                  }
                  for (var l in (ye(n, i), (a = null), i))
                    if (i.hasOwnProperty(l)) {
                      var c = i[l];
                      "children" === l
                        ? "string" === typeof c
                          ? r.textContent !== c &&
                            (!0 !== i.suppressHydrationWarning &&
                              Xr(r.textContent, c, e),
                            (a = ["children", c]))
                          : "number" === typeof c &&
                            r.textContent !== "" + c &&
                            (!0 !== i.suppressHydrationWarning &&
                              Xr(r.textContent, c, e),
                            (a = ["children", "" + c]))
                        : s.hasOwnProperty(l) &&
                          null != c &&
                          "onScroll" === l &&
                          Ur("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      Y(r), Z(r, i, !0);
                      break;
                    case "textarea":
                      Y(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (l = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = se(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = l.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = l.createElement(n, { is: r.is }))
                        : ((e = l.createElement(n)),
                          "select" === n &&
                            ((l = e),
                            r.multiple
                              ? (l.multiple = !0)
                              : r.size && (l.size = r.size)))
                      : (e = l.createElementNS(e, n)),
                    (e[ha] = t),
                    (e[fa] = r),
                    Ds(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((l = xe(n, r)), n)) {
                      case "dialog":
                        Ur("cancel", e), Ur("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ur("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Fr.length; a++) Ur(Fr[a], e);
                        a = r;
                        break;
                      case "source":
                        Ur("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ur("error", e), Ur("load", e), (a = r);
                        break;
                      case "details":
                        Ur("toggle", e), (a = r);
                        break;
                      case "input":
                        $(e, r), (a = J(e, r)), Ur("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = z({}, r, { value: void 0 })),
                          Ur("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Ur("invalid", e);
                    }
                    for (i in (ye(n, a), (c = a)))
                      if (c.hasOwnProperty(i)) {
                        var u = c[i];
                        "style" === i
                          ? ve(e, u)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (u = u ? u.__html : void 0) && de(e, u)
                          : "children" === i
                          ? "string" === typeof u
                            ? ("textarea" !== n || "" !== u) && he(e, u)
                            : "number" === typeof u && he(e, "" + u)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (s.hasOwnProperty(i)
                              ? null != u && "onScroll" === i && Ur("scroll", e)
                              : null != u && x(e, i, u, l));
                      }
                    switch (n) {
                      case "input":
                        Y(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        Y(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + K(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Vs(t), null;
            case 6:
              if (e && null != t.stateNode) Fs(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = ri(ni.current)), ri(ei.current), ho(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[ha] = t),
                    (i = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[ha] = t),
                    (t.stateNode = r);
              }
              return Vs(t), null;
            case 13:
              if (
                (Na(li),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ao &&
                  null !== ro &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  fo(), po(), (t.flags |= 98560), (i = !1);
                else if (((i = ho(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(o(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(o(317));
                    i[ha] = t;
                  } else
                    po(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Vs(t), (i = !1);
                } else null !== oo && (sc(oo), (oo = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & li.current)
                        ? 0 === Fl && (Fl = 3)
                        : vc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Vs(t),
                  null);
            case 4:
              return (
                oi(),
                Ps(e, t),
                null === e && Wr(t.stateNode.containerInfo),
                Vs(t),
                null
              );
            case 10:
              return So(t.type._context), Vs(t), null;
            case 19:
              if ((Na(li), null === (i = t.memoizedState))) return Vs(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (l = i.rendering)))
                if (r) Ys(i, !1);
                else {
                  if (0 !== Fl || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (l = ci(e))) {
                        for (
                          t.flags |= 128,
                            Ys(i, !1),
                            null !== (r = l.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (l = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = l.childLanes),
                                (i.lanes = l.lanes),
                                (i.child = l.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = l.memoizedProps),
                                (i.memoizedState = l.memoizedState),
                                (i.updateQueue = l.updateQueue),
                                (i.type = l.type),
                                (e = l.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ca(li, (1 & li.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Ge() > Hl &&
                    ((t.flags |= 128),
                    (r = !0),
                    Ys(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ci(l))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Ys(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !l.alternate &&
                        !ao)
                    )
                      return Vs(t), null;
                  } else
                    2 * Ge() - i.renderingStartTime > Hl &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Ys(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (n = i.last) ? (n.sibling = l) : (t.child = l),
                    (i.last = l));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Ge()),
                  (t.sibling = null),
                  (n = li.current),
                  Ca(li, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Vs(t), null);
            case 22:
            case 23:
              return (
                hc(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Pl) &&
                    (Vs(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Vs(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Js(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Da(t.type) && Pa(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                oi(),
                Na(_a),
                Na(Ea),
                di(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return si(t), null;
            case 13:
              if (
                (Na(li),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                po();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Na(li), null;
            case 4:
              return oi(), null;
            case 10:
              return So(t.type._context), null;
            case 22:
            case 23:
              return hc(), null;
            default:
              return null;
          }
        }
        (Ds = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ps = function () {}),
          (Rs = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), ri(ei.current);
              var o,
                i = null;
              switch (n) {
                case "input":
                  (a = J(e, a)), (r = J(e, r)), (i = []);
                  break;
                case "select":
                  (a = z({}, a, { value: void 0 })),
                    (r = z({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (u in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && null != a[u])
                  if ("style" === u) {
                    var l = a[u];
                    for (o in l)
                      l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== u &&
                      "children" !== u &&
                      "suppressContentEditableWarning" !== u &&
                      "suppressHydrationWarning" !== u &&
                      "autoFocus" !== u &&
                      (s.hasOwnProperty(u)
                        ? i || (i = [])
                        : (i = i || []).push(u, null));
              for (u in r) {
                var c = r[u];
                if (
                  ((l = null != a ? a[u] : void 0),
                  r.hasOwnProperty(u) && c !== l && (null != c || null != l))
                )
                  if ("style" === u)
                    if (l) {
                      for (o in l)
                        !l.hasOwnProperty(o) ||
                          (c && c.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in c)
                        c.hasOwnProperty(o) &&
                          l[o] !== c[o] &&
                          (n || (n = {}), (n[o] = c[o]));
                    } else n || (i || (i = []), i.push(u, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === u
                      ? ((c = c ? c.__html : void 0),
                        (l = l ? l.__html : void 0),
                        null != c && l !== c && (i = i || []).push(u, c))
                      : "children" === u
                      ? ("string" !== typeof c && "number" !== typeof c) ||
                        (i = i || []).push(u, "" + c)
                      : "suppressContentEditableWarning" !== u &&
                        "suppressHydrationWarning" !== u &&
                        (s.hasOwnProperty(u)
                          ? (null != c && "onScroll" === u && Ur("scroll", e),
                            i || l === c || (i = []))
                          : (i = i || []).push(u, c));
              }
              n && (i = i || []).push("style", n);
              var u = i;
              (t.updateQueue = u) && (t.flags |= 4);
            }
          }),
          (Fs = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var $s = !1,
          Gs = !1,
          Xs = "function" === typeof WeakSet ? WeakSet : Set,
          Zs = null;
        function el(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Nc(e, t, r);
              }
            else n.current = null;
        }
        function tl(e, t, n) {
          try {
            n();
          } catch (r) {
            Nc(e, t, r);
          }
        }
        var nl = !1;
        function rl(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && tl(t, n, o);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function al(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function ol(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function il(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), il(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[ha],
              delete t[fa],
              delete t[ma],
              delete t[va],
              delete t[ga]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function sl(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ll(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || sl(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function cl(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (cl(e, t, n), e = e.sibling; null !== e; )
              cl(e, t, n), (e = e.sibling);
        }
        function ul(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (ul(e, t, n), e = e.sibling; null !== e; )
              ul(e, t, n), (e = e.sibling);
        }
        var dl = null,
          hl = !1;
        function fl(e, t, n) {
          for (n = n.child; null !== n; ) pl(e, t, n), (n = n.sibling);
        }
        function pl(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (s) {}
          switch (n.tag) {
            case 5:
              Gs || el(n, t);
            case 6:
              var r = dl,
                a = hl;
              (dl = null),
                fl(e, t, n),
                (hl = a),
                null !== (dl = r) &&
                  (hl
                    ? ((e = dl),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : dl.removeChild(n.stateNode));
              break;
            case 18:
              null !== dl &&
                (hl
                  ? ((e = dl),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? la(e.parentNode, n)
                      : 1 === e.nodeType && la(e, n),
                    Wt(e))
                  : la(dl, n.stateNode));
              break;
            case 4:
              (r = dl),
                (a = hl),
                (dl = n.stateNode.containerInfo),
                (hl = !0),
                fl(e, t, n),
                (dl = r),
                (hl = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Gs &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var o = a,
                    i = o.destroy;
                  (o = o.tag),
                    void 0 !== i &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      tl(n, t, i),
                    (a = a.next);
                } while (a !== r);
              }
              fl(e, t, n);
              break;
            case 1:
              if (
                !Gs &&
                (el(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (s) {
                  Nc(n, t, s);
                }
              fl(e, t, n);
              break;
            case 21:
              fl(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Gs = (r = Gs) || null !== n.memoizedState),
                  fl(e, t, n),
                  (Gs = r))
                : fl(e, t, n);
              break;
            default:
              fl(e, t, n);
          }
        }
        function ml(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Xs()),
              t.forEach(function (t) {
                var r = _c.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function vl(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var i = e,
                  s = t,
                  l = s;
                e: for (; null !== l; ) {
                  switch (l.tag) {
                    case 5:
                      (dl = l.stateNode), (hl = !1);
                      break e;
                    case 3:
                    case 4:
                      (dl = l.stateNode.containerInfo), (hl = !0);
                      break e;
                  }
                  l = l.return;
                }
                if (null === dl) throw Error(o(160));
                pl(i, s, a), (dl = null), (hl = !1);
                var c = a.alternate;
                null !== c && (c.return = null), (a.return = null);
              } catch (u) {
                Nc(a, t, u);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gl(t, e), (t = t.sibling);
        }
        function gl(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((vl(t, e), yl(e), 4 & r)) {
                try {
                  rl(3, e, e.return), al(3, e);
                } catch (v) {
                  Nc(e, e.return, v);
                }
                try {
                  rl(5, e, e.return);
                } catch (v) {
                  Nc(e, e.return, v);
                }
              }
              break;
            case 1:
              vl(t, e), yl(e), 512 & r && null !== n && el(n, n.return);
              break;
            case 5:
              if (
                (vl(t, e),
                yl(e),
                512 & r && null !== n && el(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  he(a, "");
                } catch (v) {
                  Nc(e, e.return, v);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  s = null !== n ? n.memoizedProps : i,
                  l = e.type,
                  c = e.updateQueue;
                if (((e.updateQueue = null), null !== c))
                  try {
                    "input" === l &&
                      "radio" === i.type &&
                      null != i.name &&
                      G(a, i),
                      xe(l, s);
                    var u = xe(l, i);
                    for (s = 0; s < c.length; s += 2) {
                      var d = c[s],
                        h = c[s + 1];
                      "style" === d
                        ? ve(a, h)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, h)
                        : "children" === d
                        ? he(a, h)
                        : x(a, d, h, u);
                    }
                    switch (l) {
                      case "input":
                        X(a, i);
                        break;
                      case "textarea":
                        oe(a, i);
                        break;
                      case "select":
                        var f = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var p = i.value;
                        null != p
                          ? ne(a, !!i.multiple, p, !1)
                          : f !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(a, !!i.multiple, i.defaultValue, !0)
                              : ne(a, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    a[fa] = i;
                  } catch (v) {
                    Nc(e, e.return, v);
                  }
              }
              break;
            case 6:
              if ((vl(t, e), yl(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (v) {
                  Nc(e, e.return, v);
                }
              }
              break;
            case 3:
              if (
                (vl(t, e),
                yl(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Wt(t.containerInfo);
                } catch (v) {
                  Nc(e, e.return, v);
                }
              break;
            case 4:
            default:
              vl(t, e), yl(e);
              break;
            case 13:
              vl(t, e),
                yl(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Wl = Ge())),
                4 & r && ml(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Gs = (u = Gs) || d), vl(t, e), (Gs = u))
                  : vl(t, e),
                yl(e),
                8192 & r)
              ) {
                if (
                  ((u = null !== e.memoizedState),
                  (e.stateNode.isHidden = u) && !d && 0 !== (1 & e.mode))
                )
                  for (Zs = e, d = e.child; null !== d; ) {
                    for (h = Zs = d; null !== Zs; ) {
                      switch (((p = (f = Zs).child), f.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rl(4, f, f.return);
                          break;
                        case 1:
                          el(f, f.return);
                          var m = f.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = f), (n = f.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (v) {
                              Nc(r, n, v);
                            }
                          }
                          break;
                        case 5:
                          el(f, f.return);
                          break;
                        case 22:
                          if (null !== f.memoizedState) {
                            jl(h);
                            continue;
                          }
                      }
                      null !== p ? ((p.return = f), (Zs = p)) : jl(h);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, h = e; ; ) {
                  if (5 === h.tag) {
                    if (null === d) {
                      d = h;
                      try {
                        (a = h.stateNode),
                          u
                            ? "function" === typeof (i = a.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((l = h.stateNode),
                              (s =
                                void 0 !== (c = h.memoizedProps.style) &&
                                null !== c &&
                                c.hasOwnProperty("display")
                                  ? c.display
                                  : null),
                              (l.style.display = me("display", s)));
                      } catch (v) {
                        Nc(e, e.return, v);
                      }
                    }
                  } else if (6 === h.tag) {
                    if (null === d)
                      try {
                        h.stateNode.nodeValue = u ? "" : h.memoizedProps;
                      } catch (v) {
                        Nc(e, e.return, v);
                      }
                  } else if (
                    ((22 !== h.tag && 23 !== h.tag) ||
                      null === h.memoizedState ||
                      h === e) &&
                    null !== h.child
                  ) {
                    (h.child.return = h), (h = h.child);
                    continue;
                  }
                  if (h === e) break e;
                  for (; null === h.sibling; ) {
                    if (null === h.return || h.return === e) break e;
                    d === h && (d = null), (h = h.return);
                  }
                  d === h && (d = null),
                    (h.sibling.return = h.return),
                    (h = h.sibling);
                }
              }
              break;
            case 19:
              vl(t, e), yl(e), 4 & r && ml(e);
            case 21:
          }
        }
        function yl(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (sl(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (he(a, ""), (r.flags &= -33)),
                    ul(e, ll(e), a);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  cl(e, ll(e), i);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (s) {
              Nc(e, e.return, s);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function xl(e, t, n) {
          (Zs = e), bl(e, t, n);
        }
        function bl(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Zs; ) {
            var a = Zs,
              o = a.child;
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || $s;
              if (!i) {
                var s = a.alternate,
                  l = (null !== s && null !== s.memoizedState) || Gs;
                s = $s;
                var c = Gs;
                if ((($s = i), (Gs = l) && !c))
                  for (Zs = a; null !== Zs; )
                    (l = (i = Zs).child),
                      22 === i.tag && null !== i.memoizedState
                        ? Sl(a)
                        : null !== l
                        ? ((l.return = i), (Zs = l))
                        : Sl(a);
                for (; null !== o; ) (Zs = o), bl(o, t, n), (o = o.sibling);
                (Zs = a), ($s = s), (Gs = c);
              }
              wl(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (Zs = o))
                : wl(e);
          }
        }
        function wl(e) {
          for (; null !== Zs; ) {
            var t = Zs;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gs || al(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Gs)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : go(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Uo(t, i, r);
                      break;
                    case 3:
                      var s = t.updateQueue;
                      if (null !== s) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Uo(t, s, n);
                      }
                      break;
                    case 5:
                      var l = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = l;
                        var c = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            c.autoFocus && n.focus();
                            break;
                          case "img":
                            c.src && (n.src = c.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var u = t.alternate;
                        if (null !== u) {
                          var d = u.memoizedState;
                          if (null !== d) {
                            var h = d.dehydrated;
                            null !== h && Wt(h);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Gs || (512 & t.flags && ol(t));
              } catch (f) {
                Nc(t, t.return, f);
              }
            }
            if (t === e) {
              Zs = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Zs = n);
              break;
            }
            Zs = t.return;
          }
        }
        function jl(e) {
          for (; null !== Zs; ) {
            var t = Zs;
            if (t === e) {
              Zs = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Zs = n);
              break;
            }
            Zs = t.return;
          }
        }
        function Sl(e) {
          for (; null !== Zs; ) {
            var t = Zs;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    al(4, t);
                  } catch (l) {
                    Nc(t, n, l);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (l) {
                      Nc(t, a, l);
                    }
                  }
                  var o = t.return;
                  try {
                    ol(t);
                  } catch (l) {
                    Nc(t, o, l);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    ol(t);
                  } catch (l) {
                    Nc(t, i, l);
                  }
              }
            } catch (l) {
              Nc(t, t.return, l);
            }
            if (t === e) {
              Zs = null;
              break;
            }
            var s = t.sibling;
            if (null !== s) {
              (s.return = t.return), (Zs = s);
              break;
            }
            Zs = t.return;
          }
        }
        var kl,
          Nl = Math.ceil,
          Cl = b.ReactCurrentDispatcher,
          Tl = b.ReactCurrentOwner,
          El = b.ReactCurrentBatchConfig,
          _l = 0,
          Ol = null,
          Il = null,
          Dl = 0,
          Pl = 0,
          Rl = ka(0),
          Fl = 0,
          Ll = null,
          zl = 0,
          Al = 0,
          Ul = 0,
          Ml = null,
          Bl = null,
          Wl = 0,
          Hl = 1 / 0,
          Kl = null,
          ql = !1,
          Yl = null,
          Vl = null,
          Ql = !1,
          Jl = null,
          $l = 0,
          Gl = 0,
          Xl = null,
          Zl = -1,
          ec = 0;
        function tc() {
          return 0 !== (6 & _l) ? Ge() : -1 !== Zl ? Zl : (Zl = Ge());
        }
        function nc(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & _l) && 0 !== Dl
            ? Dl & -Dl
            : null !== vo.transition
            ? (0 === ec && (ec = mt()), ec)
            : 0 !== (e = xt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : $t(e.type));
        }
        function rc(e, t, n, r) {
          if (50 < Gl) throw ((Gl = 0), (Xl = null), Error(o(185)));
          gt(e, n, r),
            (0 !== (2 & _l) && e === Ol) ||
              (e === Ol && (0 === (2 & _l) && (Al |= n), 4 === Fl && lc(e, Dl)),
              ac(e, r),
              1 === n &&
                0 === _l &&
                0 === (1 & t.mode) &&
                ((Hl = Ge() + 500), Ua && Wa()));
        }
        function ac(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var i = 31 - it(o),
                s = 1 << i,
                l = a[i];
              -1 === l
                ? (0 !== (s & n) && 0 === (s & r)) || (a[i] = ft(s, t))
                : l <= t && (e.expiredLanes |= s),
                (o &= ~s);
            }
          })(e, t);
          var r = ht(e, e === Ol ? Dl : 0);
          if (0 === r)
            null !== n && Qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ua = !0), Ba(e);
                  })(cc.bind(null, e))
                : Ba(cc.bind(null, e)),
                ia(function () {
                  0 === (6 & _l) && Wa();
                }),
                (n = null);
            else {
              switch (bt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Oc(n, oc.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function oc(e, t) {
          if (((Zl = -1), (ec = 0), 0 !== (6 & _l))) throw Error(o(327));
          var n = e.callbackNode;
          if (Sc() && e.callbackNode !== n) return null;
          var r = ht(e, e === Ol ? Dl : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gc(e, r);
          else {
            t = r;
            var a = _l;
            _l |= 2;
            var i = mc();
            for (
              (Ol === e && Dl === t) ||
              ((Kl = null), (Hl = Ge() + 500), fc(e, t));
              ;

            )
              try {
                xc();
                break;
              } catch (l) {
                pc(e, l);
              }
            jo(),
              (Cl.current = i),
              (_l = a),
              null !== Il ? (t = 0) : ((Ol = null), (Dl = 0), (t = Fl));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = pt(e)) && ((r = a), (t = ic(e, a))),
              1 === t)
            )
              throw ((n = Ll), fc(e, 0), lc(e, r), ac(e, Ge()), n);
            if (6 === t) lc(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!sr(o(), a)) return !1;
                            } catch (s) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = gc(e, r)) &&
                    0 !== (i = pt(e)) &&
                    ((r = i), (t = ic(e, i))),
                  1 === t))
              )
                throw ((n = Ll), fc(e, 0), lc(e, r), ac(e, Ge()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  jc(e, Bl, Kl);
                  break;
                case 3:
                  if (
                    (lc(e, r),
                    (130023424 & r) === r && 10 < (t = Wl + 500 - Ge()))
                  ) {
                    if (0 !== ht(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      tc(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(jc.bind(null, e, Bl, Kl), t);
                    break;
                  }
                  jc(e, Bl, Kl);
                  break;
                case 4:
                  if ((lc(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var s = 31 - it(r);
                    (i = 1 << s), (s = t[s]) > a && (a = s), (r &= ~i);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ge() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Nl(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(jc.bind(null, e, Bl, Kl), r);
                    break;
                  }
                  jc(e, Bl, Kl);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return ac(e, Ge()), e.callbackNode === n ? oc.bind(null, e) : null;
        }
        function ic(e, t) {
          var n = Ml;
          return (
            e.current.memoizedState.isDehydrated && (fc(e, t).flags |= 256),
            2 !== (e = gc(e, t)) && ((t = Bl), (Bl = n), null !== t && sc(t)),
            e
          );
        }
        function sc(e) {
          null === Bl ? (Bl = e) : Bl.push.apply(Bl, e);
        }
        function lc(e, t) {
          for (
            t &= ~Ul,
              t &= ~Al,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function cc(e) {
          if (0 !== (6 & _l)) throw Error(o(327));
          Sc();
          var t = ht(e, 0);
          if (0 === (1 & t)) return ac(e, Ge()), null;
          var n = gc(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = pt(e);
            0 !== r && ((t = r), (n = ic(e, r)));
          }
          if (1 === n) throw ((n = Ll), fc(e, 0), lc(e, t), ac(e, Ge()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            jc(e, Bl, Kl),
            ac(e, Ge()),
            null
          );
        }
        function uc(e, t) {
          var n = _l;
          _l |= 1;
          try {
            return e(t);
          } finally {
            0 === (_l = n) && ((Hl = Ge() + 500), Ua && Wa());
          }
        }
        function dc(e) {
          null !== Jl && 0 === Jl.tag && 0 === (6 & _l) && Sc();
          var t = _l;
          _l |= 1;
          var n = El.transition,
            r = xt;
          try {
            if (((El.transition = null), (xt = 1), e)) return e();
          } finally {
            (xt = r), (El.transition = n), 0 === (6 & (_l = t)) && Wa();
          }
        }
        function hc() {
          (Pl = Rl.current), Na(Rl);
        }
        function fc(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Il))
            for (n = Il.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Pa();
                  break;
                case 3:
                  oi(), Na(_a), Na(Ea), di();
                  break;
                case 5:
                  si(r);
                  break;
                case 4:
                  oi();
                  break;
                case 13:
                case 19:
                  Na(li);
                  break;
                case 10:
                  So(r.type._context);
                  break;
                case 22:
                case 23:
                  hc();
              }
              n = n.return;
            }
          if (
            ((Ol = e),
            (Il = e = Rc(e.current, null)),
            (Dl = Pl = t),
            (Fl = 0),
            (Ll = null),
            (Ul = Al = zl = 0),
            (Bl = Ml = null),
            null !== To)
          ) {
            for (t = 0; t < To.length; t++)
              if (null !== (r = (n = To[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var i = o.next;
                  (o.next = a), (r.next = i);
                }
                n.pending = r;
              }
            To = null;
          }
          return e;
        }
        function pc(e, t) {
          for (;;) {
            var n = Il;
            try {
              if ((jo(), (hi.current = is), yi)) {
                for (var r = mi.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                yi = !1;
              }
              if (
                ((pi = 0),
                (gi = vi = mi = null),
                (xi = !1),
                (bi = 0),
                (Tl.current = null),
                null === n || null === n.return)
              ) {
                (Fl = 1), (Ll = t), (Il = null);
                break;
              }
              e: {
                var i = e,
                  s = n.return,
                  l = n,
                  c = t;
                if (
                  ((t = Dl),
                  (l.flags |= 32768),
                  null !== c &&
                    "object" === typeof c &&
                    "function" === typeof c.then)
                ) {
                  var u = c,
                    d = l,
                    h = d.tag;
                  if (0 === (1 & d.mode) && (0 === h || 11 === h || 15 === h)) {
                    var f = d.alternate;
                    f
                      ? ((d.updateQueue = f.updateQueue),
                        (d.memoizedState = f.memoizedState),
                        (d.lanes = f.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var p = gs(s);
                  if (null !== p) {
                    (p.flags &= -257),
                      ys(p, s, l, 0, t),
                      1 & p.mode && vs(i, u, t),
                      (c = u);
                    var m = (t = p).updateQueue;
                    if (null === m) {
                      var v = new Set();
                      v.add(c), (t.updateQueue = v);
                    } else m.add(c);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    vs(i, u, t), vc();
                    break e;
                  }
                  c = Error(o(426));
                } else if (ao && 1 & l.mode) {
                  var g = gs(s);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      ys(g, s, l, 0, t),
                      mo(us(c, l));
                    break e;
                  }
                }
                (i = c = us(c, l)),
                  4 !== Fl && (Fl = 2),
                  null === Ml ? (Ml = [i]) : Ml.push(i),
                  (i = s);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        zo(i, ps(0, c, t));
                      break e;
                    case 1:
                      l = c;
                      var y = i.type,
                        x = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== x &&
                            "function" === typeof x.componentDidCatch &&
                            (null === Vl || !Vl.has(x))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          zo(i, ms(i, l, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              wc(n);
            } catch (b) {
              (t = b), Il === n && null !== n && (Il = n = n.return);
              continue;
            }
            break;
          }
        }
        function mc() {
          var e = Cl.current;
          return (Cl.current = is), null === e ? is : e;
        }
        function vc() {
          (0 !== Fl && 3 !== Fl && 2 !== Fl) || (Fl = 4),
            null === Ol ||
              (0 === (268435455 & zl) && 0 === (268435455 & Al)) ||
              lc(Ol, Dl);
        }
        function gc(e, t) {
          var n = _l;
          _l |= 2;
          var r = mc();
          for ((Ol === e && Dl === t) || ((Kl = null), fc(e, t)); ; )
            try {
              yc();
              break;
            } catch (a) {
              pc(e, a);
            }
          if ((jo(), (_l = n), (Cl.current = r), null !== Il))
            throw Error(o(261));
          return (Ol = null), (Dl = 0), Fl;
        }
        function yc() {
          for (; null !== Il; ) bc(Il);
        }
        function xc() {
          for (; null !== Il && !Je(); ) bc(Il);
        }
        function bc(e) {
          var t = kl(e.alternate, e, Pl);
          (e.memoizedProps = e.pendingProps),
            null === t ? wc(e) : (Il = t),
            (Tl.current = null);
        }
        function wc(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Qs(n, t, Pl))) return void (Il = n);
            } else {
              if (null !== (n = Js(n, t)))
                return (n.flags &= 32767), void (Il = n);
              if (null === e) return (Fl = 6), void (Il = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Il = t);
            Il = t = e;
          } while (null !== t);
          0 === Fl && (Fl = 5);
        }
        function jc(e, t, n) {
          var r = xt,
            a = El.transition;
          try {
            (El.transition = null),
              (xt = 1),
              (function (e, t, n, r) {
                do {
                  Sc();
                } while (null !== Jl);
                if (0 !== (6 & _l)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - it(n),
                        o = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                    }
                  })(e, i),
                  e === Ol && ((Il = Ol = null), (Dl = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Ql ||
                    ((Ql = !0),
                    Oc(tt, function () {
                      return Sc(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = El.transition), (El.transition = null);
                  var s = xt;
                  xt = 1;
                  var l = _l;
                  (_l |= 4),
                    (Tl.current = null),
                    (function (e, t) {
                      if (((ea = Kt), fr((e = hr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (w) {
                                n = null;
                                break e;
                              }
                              var s = 0,
                                l = -1,
                                c = -1,
                                u = 0,
                                d = 0,
                                h = e,
                                f = null;
                              t: for (;;) {
                                for (
                                  var p;
                                  h !== n ||
                                    (0 !== a && 3 !== h.nodeType) ||
                                    (l = s + a),
                                    h !== i ||
                                      (0 !== r && 3 !== h.nodeType) ||
                                      (c = s + r),
                                    3 === h.nodeType &&
                                      (s += h.nodeValue.length),
                                    null !== (p = h.firstChild);

                                )
                                  (f = h), (h = p);
                                for (;;) {
                                  if (h === e) break t;
                                  if (
                                    (f === n && ++u === a && (l = s),
                                    f === i && ++d === r && (c = s),
                                    null !== (p = h.nextSibling))
                                  )
                                    break;
                                  f = (h = f).parentNode;
                                }
                                h = p;
                              }
                              n =
                                -1 === l || -1 === c
                                  ? null
                                  : { start: l, end: c };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Kt = !1,
                          Zs = t;
                        null !== Zs;

                      )
                        if (
                          ((e = (t = Zs).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zs = e);
                        else
                          for (; null !== Zs; ) {
                            t = Zs;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var v = m.memoizedProps,
                                        g = m.memoizedState,
                                        y = t.stateNode,
                                        x = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? v
                                            : go(t.type, v),
                                          g
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = x;
                                    }
                                    break;
                                  case 3:
                                    var b = t.stateNode.containerInfo;
                                    1 === b.nodeType
                                      ? (b.textContent = "")
                                      : 9 === b.nodeType &&
                                        b.documentElement &&
                                        b.removeChild(b.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (w) {
                              Nc(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zs = e);
                              break;
                            }
                            Zs = t.return;
                          }
                      (m = nl), (nl = !1);
                    })(e, n),
                    gl(n, e),
                    pr(ta),
                    (Kt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    xl(n, e, a),
                    $e(),
                    (_l = l),
                    (xt = s),
                    (El.transition = i);
                } else e.current = n;
                if (
                  (Ql && ((Ql = !1), (Jl = e), ($l = a)),
                  (i = e.pendingLanes),
                  0 === i && (Vl = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ac(e, Ge()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentstack: a.stack, digest: a.digest });
                if (ql) throw ((ql = !1), (e = Yl), (Yl = null), e);
                0 !== (1 & $l) && 0 !== e.tag && Sc(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Xl
                      ? Gl++
                      : ((Gl = 0), (Xl = e))
                    : (Gl = 0),
                  Wa();
              })(e, t, n, r);
          } finally {
            (El.transition = a), (xt = r);
          }
          return null;
        }
        function Sc() {
          if (null !== Jl) {
            var e = bt($l),
              t = El.transition,
              n = xt;
            try {
              if (((El.transition = null), (xt = 16 > e ? 16 : e), null === Jl))
                var r = !1;
              else {
                if (((e = Jl), (Jl = null), ($l = 0), 0 !== (6 & _l)))
                  throw Error(o(331));
                var a = _l;
                for (_l |= 4, Zs = e.current; null !== Zs; ) {
                  var i = Zs,
                    s = i.child;
                  if (0 !== (16 & Zs.flags)) {
                    var l = i.deletions;
                    if (null !== l) {
                      for (var c = 0; c < l.length; c++) {
                        var u = l[c];
                        for (Zs = u; null !== Zs; ) {
                          var d = Zs;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rl(8, d, i);
                          }
                          var h = d.child;
                          if (null !== h) (h.return = d), (Zs = h);
                          else
                            for (; null !== Zs; ) {
                              var f = (d = Zs).sibling,
                                p = d.return;
                              if ((il(d), d === u)) {
                                Zs = null;
                                break;
                              }
                              if (null !== f) {
                                (f.return = p), (Zs = f);
                                break;
                              }
                              Zs = p;
                            }
                        }
                      }
                      var m = i.alternate;
                      if (null !== m) {
                        var v = m.child;
                        if (null !== v) {
                          m.child = null;
                          do {
                            var g = v.sibling;
                            (v.sibling = null), (v = g);
                          } while (null !== v);
                        }
                      }
                      Zs = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== s)
                    (s.return = i), (Zs = s);
                  else
                    e: for (; null !== Zs; ) {
                      if (0 !== (2048 & (i = Zs).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rl(9, i, i.return);
                        }
                      var y = i.sibling;
                      if (null !== y) {
                        (y.return = i.return), (Zs = y);
                        break e;
                      }
                      Zs = i.return;
                    }
                }
                var x = e.current;
                for (Zs = x; null !== Zs; ) {
                  var b = (s = Zs).child;
                  if (0 !== (2064 & s.subtreeFlags) && null !== b)
                    (b.return = s), (Zs = b);
                  else
                    e: for (s = x; null !== Zs; ) {
                      if (0 !== (2048 & (l = Zs).flags))
                        try {
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              al(9, l);
                          }
                        } catch (j) {
                          Nc(l, l.return, j);
                        }
                      if (l === s) {
                        Zs = null;
                        break e;
                      }
                      var w = l.sibling;
                      if (null !== w) {
                        (w.return = l.return), (Zs = w);
                        break e;
                      }
                      Zs = l.return;
                    }
                }
                if (
                  ((_l = a),
                  Wa(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (j) {}
                r = !0;
              }
              return r;
            } finally {
              (xt = n), (El.transition = t);
            }
          }
          return !1;
        }
        function kc(e, t, n) {
          (e = Fo(e, (t = ps(0, (t = us(n, t)), 1)), 1)),
            (t = tc()),
            null !== e && (gt(e, 1, t), ac(e, t));
        }
        function Nc(e, t, n) {
          if (3 === e.tag) kc(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                kc(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Vl || !Vl.has(r)))
                ) {
                  (t = Fo(t, (e = ms(t, (e = us(n, e)), 1)), 1)),
                    (e = tc()),
                    null !== t && (gt(t, 1, e), ac(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cc(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = tc()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ol === e &&
              (Dl & n) === n &&
              (4 === Fl ||
              (3 === Fl && (130023424 & Dl) === Dl && 500 > Ge() - Wl)
                ? fc(e, 0)
                : (Ul |= n)),
            ac(e, t);
        }
        function Tc(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ut), 0 === (130023424 & (ut <<= 1)) && (ut = 4194304)));
          var n = tc();
          null !== (e = Oo(e, t)) && (gt(e, t, n), ac(e, n));
        }
        function Ec(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Tc(e, n);
        }
        function _c(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), Tc(e, n);
        }
        function Oc(e, t) {
          return Ve(e, t);
        }
        function Ic(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Dc(e, t, n, r) {
          return new Ic(e, t, n, r);
        }
        function Pc(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Rc(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Dc(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Fc(e, t, n, r, a, i) {
          var s = 2;
          if (((r = e), "function" === typeof e)) Pc(e) && (s = 1);
          else if ("string" === typeof e) s = 5;
          else
            e: switch (e) {
              case S:
                return Lc(n.children, a, i, t);
              case k:
                (s = 8), (a |= 8);
                break;
              case N:
                return (
                  ((e = Dc(12, n, t, 2 | a)).elementType = N), (e.lanes = i), e
                );
              case _:
                return (
                  ((e = Dc(13, n, t, a)).elementType = _), (e.lanes = i), e
                );
              case O:
                return (
                  ((e = Dc(19, n, t, a)).elementType = O), (e.lanes = i), e
                );
              case P:
                return zc(n, a, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      s = 10;
                      break e;
                    case T:
                      s = 9;
                      break e;
                    case E:
                      s = 11;
                      break e;
                    case I:
                      s = 14;
                      break e;
                    case D:
                      (s = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Dc(s, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Lc(e, t, n, r) {
          return ((e = Dc(7, e, r, t)).lanes = n), e;
        }
        function zc(e, t, n, r) {
          return (
            ((e = Dc(22, e, r, t)).elementType = P),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Ac(e, t, n) {
          return ((e = Dc(6, e, null, t)).lanes = n), e;
        }
        function Uc(e, t, n) {
          return (
            ((t = Dc(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Mc(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = vt(0)),
            (this.expirationTimes = vt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = vt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Bc(e, t, n, r, a, o, i, s, l) {
          return (
            (e = new Mc(e, t, n, s, l)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Dc(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Do(o),
            e
          );
        }
        function Wc(e) {
          if (!e) return Ta;
          e: {
            if (We((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Da(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Da(n)) return Fa(e, n, t);
          }
          return t;
        }
        function Hc(e, t, n, r, a, o, i, s, l) {
          return (
            ((e = Bc(n, r, !0, e, 0, o, 0, s, l)).context = Wc(null)),
            (n = e.current),
            ((o = Ro((r = tc()), (a = nc(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Fo(n, o, a),
            (e.current.lanes = a),
            gt(e, a, r),
            ac(e, r),
            e
          );
        }
        function Kc(e, t, n, r) {
          var a = t.current,
            o = tc(),
            i = nc(a);
          return (
            (n = Wc(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Ro(o, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Fo(a, t, i)) && (rc(e, a, i, o), Lo(e, a, i)),
            i
          );
        }
        function qc(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Yc(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Vc(e, t) {
          Yc(e, t), (e = e.alternate) && Yc(e, t);
        }
        kl = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || _a.current) bs = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (bs = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Os(t), po();
                        break;
                      case 5:
                        ii(t);
                        break;
                      case 1:
                        Da(t.type) && La(t);
                        break;
                      case 4:
                        ai(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ca(yo, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ca(li, 1 & li.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? As(e, t, n)
                            : (Ca(li, 1 & li.current),
                              null !== (e = qs(e, t, n)) ? e.sibling : null);
                        Ca(li, 1 & li.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Hs(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ca(li, li.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Ns(e, t, n);
                    }
                    return qs(e, t, n);
                  })(e, t, n)
                );
              bs = 0 !== (131072 & e.flags);
            }
          else (bs = !1), ao && 0 !== (1048576 & t.flags) && Za(t, Ya, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Ks(e, t), (e = t.pendingProps);
              var a = Ia(t, Ea.current);
              No(t, n), (a = ki(null, t, r, e, a, n));
              var i = Ni();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Da(r) ? ((i = !0), La(t)) : (i = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Do(t),
                    (a.updater = Wo),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Yo(t, r, e, n),
                    (t = _s(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    ao && i && eo(t),
                    ws(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Ks(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Pc(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === E) return 11;
                        if (e === I) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = go(r, e)),
                  a)
                ) {
                  case 0:
                    t = Ts(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Es(null, t, r, e, n);
                    break e;
                  case 11:
                    t = js(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Ss(null, t, r, go(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ts(e, t, r, (a = t.elementType === r ? a : go(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Es(e, t, r, (a = t.elementType === r ? a : go(r, a)), n)
              );
            case 3:
              e: {
                if ((Os(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (i = t.memoizedState).element),
                  Po(e, t),
                  Ao(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: s.cache,
                      pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                      transitions: s.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Is(e, t, r, n, (a = us(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Is(e, t, r, n, (a = us(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = ca(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = Xo(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((po(), r === a)) {
                    t = qs(e, t, n);
                    break e;
                  }
                  ws(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ii(t),
                null === e && co(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (s = a.children),
                na(r, a)
                  ? (s = null)
                  : null !== i && na(r, i) && (t.flags |= 32),
                Cs(e, t),
                ws(e, t, s, n),
                t.child
              );
            case 6:
              return null === e && co(t), null;
            case 13:
              return As(e, t, n);
            case 4:
              return (
                ai(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Go(t, null, r, n)) : ws(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                js(e, t, r, (a = t.elementType === r ? a : go(r, a)), n)
              );
            case 7:
              return ws(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return ws(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (i = t.memoizedProps),
                  (s = a.value),
                  Ca(yo, r._currentValue),
                  (r._currentValue = s),
                  null !== i)
                )
                  if (sr(i.value, s)) {
                    if (i.children === a.children && !_a.current) {
                      t = qs(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var l = i.dependencies;
                      if (null !== l) {
                        s = i.child;
                        for (var c = l.firstContext; null !== c; ) {
                          if (c.context === r) {
                            if (1 === i.tag) {
                              (c = Ro(-1, n & -n)).tag = 2;
                              var u = i.updateQueue;
                              if (null !== u) {
                                var d = (u = u.shared).pending;
                                null === d
                                  ? (c.next = c)
                                  : ((c.next = d.next), (d.next = c)),
                                  (u.pending = c);
                              }
                            }
                            (i.lanes |= n),
                              null !== (c = i.alternate) && (c.lanes |= n),
                              ko(i.return, n, t),
                              (l.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else if (10 === i.tag)
                        s = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (s = i.return)) throw Error(o(341));
                        (s.lanes |= n),
                          null !== (l = s.alternate) && (l.lanes |= n),
                          ko(s, n, t),
                          (s = i.sibling);
                      } else s = i.child;
                      if (null !== s) s.return = i;
                      else
                        for (s = i; null !== s; ) {
                          if (s === t) {
                            s = null;
                            break;
                          }
                          if (null !== (i = s.sibling)) {
                            (i.return = s.return), (s = i);
                            break;
                          }
                          s = s.return;
                        }
                      i = s;
                    }
                ws(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                No(t, n),
                (r = r((a = Co(a)))),
                (t.flags |= 1),
                ws(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = go((r = t.type), t.pendingProps)),
                Ss(e, t, r, (a = go(r.type, a)), n)
              );
            case 15:
              return ks(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : go(r, a)),
                Ks(e, t),
                (t.tag = 1),
                Da(r) ? ((e = !0), La(t)) : (e = !1),
                No(t, n),
                Ko(t, r, a),
                Yo(t, r, a, n),
                _s(null, t, r, !0, e, n)
              );
            case 19:
              return Hs(e, t, n);
            case 22:
              return Ns(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var Qc =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Jc(e) {
          this._internalRoot = e;
        }
        function $c(e) {
          this._internalRoot = e;
        }
        function Gc(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Xc(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zc() {}
        function eu(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var i = o;
            if ("function" === typeof a) {
              var s = a;
              a = function () {
                var e = qc(i);
                s.call(e);
              };
            }
            Kc(t, i, e, a);
          } else
            i = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = qc(i);
                    o.call(e);
                  };
                }
                var i = Hc(t, r, e, 0, null, !1, 0, "", Zc);
                return (
                  (e._reactRootContainer = i),
                  (e[pa] = i.current),
                  Wr(8 === e.nodeType ? e.parentNode : e),
                  dc(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var s = r;
                r = function () {
                  var e = qc(l);
                  s.call(e);
                };
              }
              var l = Bc(e, 0, !1, null, 0, !1, 0, "", Zc);
              return (
                (e._reactRootContainer = l),
                (e[pa] = l.current),
                Wr(8 === e.nodeType ? e.parentNode : e),
                dc(function () {
                  Kc(t, l, n, r);
                }),
                l
              );
            })(n, t, e, a, r);
          return qc(i);
        }
        ($c.prototype.render = Jc.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Kc(e, t, null, null);
          }),
          ($c.prototype.unmount = Jc.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                dc(function () {
                  Kc(null, e, null, null);
                }),
                  (t[pa] = null);
              }
            }),
          ($c.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = kt();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Pt.length && 0 !== t && t < Pt[n].priority;
                n++
              );
              Pt.splice(n, 0, e), 0 === n && zt(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    ac(t, Ge()),
                    0 === (6 & _l) && ((Hl = Ge() + 500), Wa()));
                }
                break;
              case 13:
                dc(function () {
                  var t = Oo(e, 1);
                  if (null !== t) {
                    var n = tc();
                    rc(t, e, 1, n);
                  }
                }),
                  Vc(e, 1);
            }
          }),
          (jt = function (e) {
            if (13 === e.tag) {
              var t = Oo(e, 134217728);
              if (null !== t) rc(t, e, 134217728, tc());
              Vc(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = nc(e),
                n = Oo(e, t);
              if (null !== n) rc(n, e, t, tc());
              Vc(e, t);
            }
          }),
          (kt = function () {
            return xt;
          }),
          (Nt = function (e, t) {
            var n = xt;
            try {
              return (xt = e), t();
            } finally {
              xt = n;
            }
          }),
          (je = function (e, t, n) {
            switch (t) {
              case "input":
                if ((X(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = wa(r);
                      if (!a) throw Error(o(90));
                      V(r), X(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Ee = uc),
          (_e = dc);
        var tu = {
            usingClientEntryPoint: !1,
            Events: [xa, ba, wa, Ce, Te, uc],
          },
          nu = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          ru = {
            bundleType: nu.bundleType,
            version: nu.version,
            rendererPackageName: nu.rendererPackageName,
            rendererConfig: nu.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: b.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = qe(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nu.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var au = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!au.isDisabled && au.supportsFiber)
            try {
              (at = au.inject(ru)), (ot = au);
            } catch (ue) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tu),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Gc(t)) throw Error(o(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: j,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Gc(e)) throw Error(o(299));
            var n = !1,
              r = "",
              a = Qc;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Bc(e, 1, !1, null, 0, n, 0, r, a)),
              (e[pa] = t.current),
              Wr(8 === e.nodeType ? e.parentNode : e),
              new Jc(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = qe(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return dc(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Xc(t)) throw Error(o(200));
            return eu(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Gc(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              i = "",
              s = Qc;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (s = n.onRecoverableError)),
              (t = Hc(t, null, e, 1, null != n ? n : null, a, 0, i, s)),
              (e[pa] = t.current),
              Wr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new $c(t);
          }),
          (t.render = function (e, t, n) {
            if (!Xc(t)) throw Error(o(200));
            return eu(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Xc(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (dc(function () {
                eu(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[pa] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uc),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Xc(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return eu(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: (e, t, n) => {
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: (e, t, n) => {
        var r = n(791),
          a = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          s =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function c(e, t, n) {
          var r,
            o = {},
            c = null,
            u = null;
          for (r in (void 0 !== n && (c = "" + n),
          void 0 !== t.key && (c = "" + t.key),
          void 0 !== t.ref && (u = t.ref),
          t))
            i.call(t, r) && !l.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: c,
            ref: u,
            props: o,
            _owner: s.current,
          };
        }
        (t.Fragment = o), (t.jsx = c), (t.jsxs = c);
      },
      117: (e, t) => {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          s = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          u = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          h = Symbol.for("react.lazy"),
          f = Symbol.iterator;
        var p = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          v = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || p);
        }
        function y() {}
        function x(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || p);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = g.prototype);
        var b = (x.prototype = new y());
        (b.constructor = x), m(b, g.prototype), (b.isPureReactComponent = !0);
        var w = Array.isArray,
          j = Object.prototype.hasOwnProperty,
          S = { current: null },
          k = { key: !0, ref: !0, __self: !0, __source: !0 };
        function N(e, t, r) {
          var a,
            o = {},
            i = null,
            s = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (s = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              j.call(t, a) && !k.hasOwnProperty(a) && (o[a] = t[a]);
          var l = arguments.length - 2;
          if (1 === l) o.children = r;
          else if (1 < l) {
            for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
            o.children = c;
          }
          if (e && e.defaultProps)
            for (a in (l = e.defaultProps)) void 0 === o[a] && (o[a] = l[a]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: s,
            props: o,
            _owner: S.current,
          };
        }
        function C(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var T = /\/+/g;
        function E(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function _(e, t, a, o, i) {
          var s = typeof e;
          ("undefined" !== s && "boolean" !== s) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (s) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    l = !0;
                }
            }
          if (l)
            return (
              (i = i((l = e))),
              (e = "" === o ? "." + E(l, 0) : o),
              w(i)
                ? ((a = ""),
                  null != e && (a = e.replace(T, "$&/") + "/"),
                  _(i, t, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (C(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      a +
                        (!i.key || (l && l.key === i.key)
                          ? ""
                          : ("" + i.key).replace(T, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((l = 0), (o = "" === o ? "." : o + ":"), w(e)))
            for (var c = 0; c < e.length; c++) {
              var u = o + E((s = e[c]), c);
              l += _(s, t, a, u, i);
            }
          else if (
            ((u = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (f && e[f]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof u)
          )
            for (e = u.call(e), c = 0; !(s = e.next()).done; )
              l += _((s = s.value), t, a, (u = o + E(s, c++)), i);
          else if ("object" === s)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return l;
        }
        function O(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            _(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function I(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var D = { current: null },
          P = { transition: null },
          R = {
            ReactCurrentDispatcher: D,
            ReactCurrentBatchConfig: P,
            ReactCurrentOwner: S,
          };
        (t.Children = {
          map: O,
          forEach: function (e, t, n) {
            O(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              O(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              O(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = x),
          (t.StrictMode = o),
          (t.Suspense = u),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = m({}, e.props),
              o = e.key,
              i = e.ref,
              s = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (s = S.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var l = e.type.defaultProps;
              for (c in t)
                j.call(t, c) &&
                  !k.hasOwnProperty(c) &&
                  (a[c] = void 0 === t[c] && void 0 !== l ? l[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) a.children = r;
            else if (1 < c) {
              l = Array(c);
              for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
              a.children = l;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: i,
              props: a,
              _owner: s,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: l,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: s, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = N),
          (t.createFactory = function (e) {
            var t = N.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return {
              $$typeof: h,
              _payload: { _status: -1, _result: e },
              _init: I,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = P.transition;
            P.transition = {};
            try {
              e();
            } finally {
              P.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return D.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return D.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return D.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return D.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return D.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return D.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return D.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return D.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return D.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return D.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return D.current.useRef(e);
          }),
          (t.useState = function (e) {
            return D.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return D.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return D.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: (e, t, n) => {
        e.exports = n(117);
      },
      184: (e, t, n) => {
        e.exports = n(374);
      },
      813: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var s = 2 * (r + 1) - 1,
                l = e[s],
                c = s + 1,
                u = e[c];
              if (0 > o(l, n))
                c < a && 0 > o(u, l)
                  ? ((e[r] = u), (e[c] = n), (r = c))
                  : ((e[r] = l), (e[s] = n), (r = s));
              else {
                if (!(c < a && 0 > o(u, n))) break e;
                (e[r] = u), (e[c] = n), (r = c);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var s = Date,
            l = s.now();
          t.unstable_now = function () {
            return s.now() - l;
          };
        }
        var c = [],
          u = [],
          d = 1,
          h = null,
          f = 3,
          p = !1,
          m = !1,
          v = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          x = "undefined" !== typeof setImmediate ? setImmediate : null;
        function b(e) {
          for (var t = r(u); null !== t; ) {
            if (null === t.callback) a(u);
            else {
              if (!(t.startTime <= e)) break;
              a(u), (t.sortIndex = t.expirationTime), n(c, t);
            }
            t = r(u);
          }
        }
        function w(e) {
          if (((v = !1), b(e), !m))
            if (null !== r(c)) (m = !0), P(j);
            else {
              var t = r(u);
              null !== t && R(w, t.startTime - e);
            }
        }
        function j(e, n) {
          (m = !1), v && ((v = !1), y(C), (C = -1)), (p = !0);
          var o = f;
          try {
            for (
              b(n), h = r(c);
              null !== h && (!(h.expirationTime > n) || (e && !_()));

            ) {
              var i = h.callback;
              if ("function" === typeof i) {
                (h.callback = null), (f = h.priorityLevel);
                var s = i(h.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof s
                    ? (h.callback = s)
                    : h === r(c) && a(c),
                  b(n);
              } else a(c);
              h = r(c);
            }
            if (null !== h) var l = !0;
            else {
              var d = r(u);
              null !== d && R(w, d.startTime - n), (l = !1);
            }
            return l;
          } finally {
            (h = null), (f = o), (p = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          k = !1,
          N = null,
          C = -1,
          T = 5,
          E = -1;
        function _() {
          return !(t.unstable_now() - E < T);
        }
        function O() {
          if (null !== N) {
            var e = t.unstable_now();
            E = e;
            var n = !0;
            try {
              n = N(!0, e);
            } finally {
              n ? S() : ((k = !1), (N = null));
            }
          } else k = !1;
        }
        if ("function" === typeof x)
          S = function () {
            x(O);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var I = new MessageChannel(),
            D = I.port2;
          (I.port1.onmessage = O),
            (S = function () {
              D.postMessage(null);
            });
        } else
          S = function () {
            g(O, 0);
          };
        function P(e) {
          (N = e), k || ((k = !0), S());
        }
        function R(e, n) {
          C = g(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || p || ((m = !0), P(j));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (T = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return f;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(c);
          }),
          (t.unstable_next = function (e) {
            switch (f) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = f;
            }
            var n = f;
            f = t;
            try {
              return e();
            } finally {
              f = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = f;
            f = e;
            try {
              return t();
            } finally {
              f = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? i + o : i)
                : (o = i),
              e)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (s = o + s),
                sortIndex: -1,
              }),
              o > i
                ? ((e.sortIndex = o),
                  n(u, e),
                  null === r(c) &&
                    e === r(u) &&
                    (v ? (y(C), (C = -1)) : (v = !0), R(w, o - i)))
                : ((e.sortIndex = s), n(c, e), m || p || ((m = !0), P(j))),
              e
            );
          }),
          (t.unstable_shouldYield = _),
          (t.unstable_wrapCallback = function (e) {
            var t = f;
            return function () {
              var n = f;
              f = t;
              try {
                return e.apply(this, arguments);
              } finally {
                f = n;
              }
            };
          });
      },
      296: (e, t, n) => {
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (() => {
    var e,
      t = Object.getPrototypeOf
        ? (e) => Object.getPrototypeOf(e)
        : (e) => e.__proto__;
    n.t = function (r, a) {
      if ((1 & a && (r = this(r)), 8 & a)) return r;
      if ("object" === typeof r && r) {
        if (4 & a && r.__esModule) return r;
        if (16 & a && "function" === typeof r.then) return r;
      }
      var o = Object.create(null);
      n.r(o);
      var i = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var s = 2 & a && r; "object" == typeof s && !~e.indexOf(s); s = t(s))
        Object.getOwnPropertyNames(s).forEach((e) => (i[e] = () => r[e]));
      return (i.default = () => r), n.d(o, i), o;
    };
  })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (() => {
      var e = {};
      n.r(e),
        n.d(e, {
          hasBrowserEnv: () => Ot,
          hasStandardBrowserEnv: () => It,
          hasStandardBrowserWebWorkerEnv: () => Pt,
        });
      var t,
        r = n(250),
        a = n(791),
        o = n.t(a, 2),
        i = n(164),
        s = n.t(i, 2);
      function l() {
        return (
          (l = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          l.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(t || (t = {}));
      const c = "popstate";
      function u(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function d(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function h(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function f(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          l(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? m(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function p(e) {
        let { pathname: t = "/", search: n = "", hash: r = "" } = e;
        return (
          n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
          r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
          t
        );
      }
      function m(e) {
        let t = {};
        if (e) {
          let n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          let r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function v(e, n, r, a) {
        void 0 === a && (a = {});
        let { window: o = document.defaultView, v5Compat: i = !1 } = a,
          s = o.history,
          d = t.Pop,
          m = null,
          v = g();
        function g() {
          return (s.state || { idx: null }).idx;
        }
        function y() {
          d = t.Pop;
          let e = g(),
            n = null == e ? null : e - v;
          (v = e), m && m({ action: d, location: b.location, delta: n });
        }
        function x(e) {
          let t =
              "null" !== o.location.origin
                ? o.location.origin
                : o.location.href,
            n = "string" === typeof e ? e : p(e);
          return (
            u(
              t,
              "No window.location.(origin|href) available to create URL for href: " +
                n
            ),
            new URL(n, t)
          );
        }
        null == v && ((v = 0), s.replaceState(l({}, s.state, { idx: v }), ""));
        let b = {
          get action() {
            return d;
          },
          get location() {
            return e(o, s);
          },
          listen(e) {
            if (m)
              throw new Error("A history only accepts one active listener");
            return (
              o.addEventListener(c, y),
              (m = e),
              () => {
                o.removeEventListener(c, y), (m = null);
              }
            );
          },
          createHref: (e) => n(o, e),
          createURL: x,
          encodeLocation(e) {
            let t = x(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (e, n) {
            d = t.Push;
            let a = f(b.location, e, n);
            r && r(a, e), (v = g() + 1);
            let l = h(a, v),
              c = b.createHref(a);
            try {
              s.pushState(l, "", c);
            } catch (u) {
              if (u instanceof DOMException && "DataCloneError" === u.name)
                throw u;
              o.location.assign(c);
            }
            i && m && m({ action: d, location: b.location, delta: 1 });
          },
          replace: function (e, n) {
            d = t.Replace;
            let a = f(b.location, e, n);
            r && r(a, e), (v = g());
            let o = h(a, v),
              l = b.createHref(a);
            s.replaceState(o, "", l),
              i && m && m({ action: d, location: b.location, delta: 0 });
          },
          go: (e) => s.go(e),
        };
        return b;
      }
      var g;
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(g || (g = {}));
      new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
      function y(e, t, n) {
        void 0 === n && (n = "/");
        let r = D(("string" === typeof t ? m(t) : t).pathname || "/", n);
        if (null == r) return null;
        let a = x(e);
        !(function (e) {
          e.sort((e, t) =>
            e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  let n =
                    e.length === t.length &&
                    e.slice(0, -1).every((e, n) => e === t[n]);
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map((e) => e.childrenIndex),
                  t.routesMeta.map((e) => e.childrenIndex)
                )
          );
        })(a);
        let o = null;
        for (let i = 0; null == o && i < a.length; ++i) o = _(a[i], I(r));
        return o;
      }
      function x(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = "");
        let a = (e, a, o) => {
          let i = {
            relativePath: void 0 === o ? e.path || "" : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          };
          i.relativePath.startsWith("/") &&
            (u(
              i.relativePath.startsWith(r),
              'Absolute route path "' +
                i.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
            ),
            (i.relativePath = i.relativePath.slice(r.length)));
          let s = z([r, i.relativePath]),
            l = n.concat(i);
          e.children &&
            e.children.length > 0 &&
            (u(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                s +
                '".'
            ),
            x(e.children, t, l, s)),
            (null != e.path || e.index) &&
              t.push({ path: s, score: E(s, e.index), routesMeta: l });
        };
        return (
          e.forEach((e, t) => {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?"))
              for (let r of b(e.path)) a(e, t, r);
            else a(e, t);
          }),
          t
        );
      }
      function b(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [n, ...r] = t,
          a = n.endsWith("?"),
          o = n.replace(/\?$/, "");
        if (0 === r.length) return a ? [o, ""] : [o];
        let i = b(r.join("/")),
          s = [];
        return (
          s.push(...i.map((e) => ("" === e ? o : [o, e].join("/")))),
          a && s.push(...i),
          s.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
        );
      }
      const w = /^:\w+$/,
        j = 3,
        S = 2,
        k = 1,
        N = 10,
        C = -2,
        T = (e) => "*" === e;
      function E(e, t) {
        let n = e.split("/"),
          r = n.length;
        return (
          n.some(T) && (r += C),
          t && (r += S),
          n
            .filter((e) => !T(e))
            .reduce((e, t) => e + (w.test(t) ? j : "" === t ? k : N), r)
        );
      }
      function _(e, t) {
        let { routesMeta: n } = e,
          r = {},
          a = "/",
          o = [];
        for (let i = 0; i < n.length; ++i) {
          let e = n[i],
            s = i === n.length - 1,
            l = "/" === a ? t : t.slice(a.length) || "/",
            c = O(
              { path: e.relativePath, caseSensitive: e.caseSensitive, end: s },
              l
            );
          if (!c) return null;
          Object.assign(r, c.params);
          let u = e.route;
          o.push({
            params: r,
            pathname: z([a, c.pathname]),
            pathnameBase: A(z([a, c.pathnameBase])),
            route: u,
          }),
            "/" !== c.pathnameBase && (a = z([a, c.pathnameBase]));
        }
        return o;
      }
      function O(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [n, r] = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            d(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".'
            );
            let r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                  .replace(
                    /\/:(\w+)(\?)?/g,
                    (e, t, n) => (
                      r.push({ paramName: t, isOptional: null != n }),
                      n ? "/?([^\\/]+)?" : "/([^\\/]+)"
                    )
                  );
            e.endsWith("*")
              ? (r.push({ paramName: "*" }),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
              ? (a += "\\/*$")
              : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            let o = new RegExp(a, t ? void 0 : "i");
            return [o, r];
          })(e.path, e.caseSensitive, e.end),
          a = t.match(n);
        if (!a) return null;
        let o = a[0],
          i = o.replace(/(.)\/+$/, "$1"),
          s = a.slice(1);
        return {
          params: r.reduce((e, t, n) => {
            let { paramName: r, isOptional: a } = t;
            if ("*" === r) {
              let e = s[n] || "";
              i = o.slice(0, o.length - e.length).replace(/(.)\/+$/, "$1");
            }
            const l = s[n];
            return (
              (e[r] =
                a && !l
                  ? void 0
                  : (function (e, t) {
                      try {
                        return decodeURIComponent(e);
                      } catch (n) {
                        return (
                          d(
                            !1,
                            'The value for the URL param "' +
                              t +
                              '" will not be decoded because the string "' +
                              e +
                              '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                              n +
                              ")."
                          ),
                          e
                        );
                      }
                    })(l || "", r)),
              e
            );
          }, {}),
          pathname: o,
          pathnameBase: i,
          pattern: e,
        };
      }
      function I(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            d(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ")."
            ),
            e
          );
        }
      }
      function D(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function P(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function R(e) {
        return e.filter(
          (e, t) => 0 === t || (e.route.path && e.route.path.length > 0)
        );
      }
      function F(e) {
        return R(e).map((t, n) =>
          n === e.length - 1 ? t.pathname : t.pathnameBase
        );
      }
      function L(e, t, n, r) {
        let a;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (a = m(e))
            : ((a = l({}, e)),
              u(
                !a.pathname || !a.pathname.includes("?"),
                P("?", "pathname", "search", a)
              ),
              u(
                !a.pathname || !a.pathname.includes("#"),
                P("#", "pathname", "hash", a)
              ),
              u(
                !a.search || !a.search.includes("#"),
                P("#", "search", "hash", a)
              ));
        let o,
          i = "" === e || "" === a.pathname,
          s = i ? "/" : a.pathname;
        if (null == s) o = n;
        else if (r) {
          let e = t[t.length - 1].replace(/^\//, "").split("/");
          if (s.startsWith("..")) {
            let t = s.split("/");
            for (; ".." === t[0]; ) t.shift(), e.pop();
            a.pathname = t.join("/");
          }
          o = "/" + e.join("/");
        } else {
          let e = t.length - 1;
          if (s.startsWith("..")) {
            let t = s.split("/");
            for (; ".." === t[0]; ) t.shift(), (e -= 1);
            a.pathname = t.join("/");
          }
          o = e >= 0 ? t[e] : "/";
        }
        let c = (function (e, t) {
            void 0 === t && (t = "/");
            let {
                pathname: n,
                search: r = "",
                hash: a = "",
              } = "string" === typeof e ? m(e) : e,
              o = n
                ? n.startsWith("/")
                  ? n
                  : (function (e, t) {
                      let n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach((e) => {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(n, t)
                : t;
            return { pathname: o, search: U(r), hash: M(a) };
          })(a, o),
          d = s && "/" !== s && s.endsWith("/"),
          h = (i || "." === s) && n.endsWith("/");
        return c.pathname.endsWith("/") || (!d && !h) || (c.pathname += "/"), c;
      }
      const z = (e) => e.join("/").replace(/\/\/+/g, "/"),
        A = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        U = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
        M = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
      Error;
      function B(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "boolean" === typeof e.internal &&
          "data" in e
        );
      }
      const W = ["post", "put", "patch", "delete"],
        H = (new Set(W), ["get", ...W]);
      new Set(H), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
      Symbol("deferred");
      function K() {
        return (
          (K = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          K.apply(this, arguments)
        );
      }
      const q = a.createContext(null);
      const Y = a.createContext(null);
      const V = a.createContext(null);
      const Q = a.createContext(null);
      const J = a.createContext({ outlet: null, matches: [], isDataRoute: !1 });
      const $ = a.createContext(null);
      function G() {
        return null != a.useContext(Q);
      }
      function X() {
        return G() || u(!1), a.useContext(Q).location;
      }
      function Z(e) {
        a.useContext(V).static || a.useLayoutEffect(e);
      }
      function ee() {
        let { isDataRoute: e } = a.useContext(J);
        return e
          ? (function () {
              let { router: e } = ue(le.UseNavigateStable),
                t = he(ce.UseNavigateStable),
                n = a.useRef(!1);
              return (
                Z(() => {
                  n.current = !0;
                }),
                a.useCallback(
                  function (r, a) {
                    void 0 === a && (a = {}),
                      n.current &&
                        ("number" === typeof r
                          ? e.navigate(r)
                          : e.navigate(r, K({ fromRouteId: t }, a)));
                  },
                  [e, t]
                )
              );
            })()
          : (function () {
              G() || u(!1);
              let e = a.useContext(q),
                { basename: t, navigator: n } = a.useContext(V),
                { matches: r } = a.useContext(J),
                { pathname: o } = X(),
                i = JSON.stringify(F(r)),
                s = a.useRef(!1);
              return (
                Z(() => {
                  s.current = !0;
                }),
                a.useCallback(
                  function (r, a) {
                    if ((void 0 === a && (a = {}), !s.current)) return;
                    if ("number" === typeof r) return void n.go(r);
                    let l = L(r, JSON.parse(i), o, "path" === a.relative);
                    null == e &&
                      "/" !== t &&
                      (l.pathname =
                        "/" === l.pathname ? t : z([t, l.pathname])),
                      (a.replace ? n.replace : n.push)(l, a.state, a);
                  },
                  [t, n, i, o, e]
                )
              );
            })();
      }
      function te(e, t) {
        let { relative: n } = void 0 === t ? {} : t,
          { matches: r } = a.useContext(J),
          { pathname: o } = X(),
          i = JSON.stringify(F(r));
        return a.useMemo(
          () => L(e, JSON.parse(i), o, "path" === n),
          [e, i, o, n]
        );
      }
      function ne(e, n, r) {
        G() || u(!1);
        let { navigator: o } = a.useContext(V),
          { matches: i } = a.useContext(J),
          s = i[i.length - 1],
          l = s ? s.params : {},
          c = (s && s.pathname, s ? s.pathnameBase : "/");
        s && s.route;
        let d,
          h = X();
        if (n) {
          var f;
          let e = "string" === typeof n ? m(n) : n;
          "/" === c ||
            (null == (f = e.pathname) ? void 0 : f.startsWith(c)) ||
            u(!1),
            (d = e);
        } else d = h;
        let p = d.pathname || "/",
          v = y(e, { pathname: "/" === c ? p : p.slice(c.length) || "/" });
        let g = se(
          v &&
            v.map((e) =>
              Object.assign({}, e, {
                params: Object.assign({}, l, e.params),
                pathname: z([
                  c,
                  o.encodeLocation
                    ? o.encodeLocation(e.pathname).pathname
                    : e.pathname,
                ]),
                pathnameBase:
                  "/" === e.pathnameBase
                    ? c
                    : z([
                        c,
                        o.encodeLocation
                          ? o.encodeLocation(e.pathnameBase).pathname
                          : e.pathnameBase,
                      ]),
              })
            ),
          i,
          r
        );
        return n && g
          ? a.createElement(
              Q.Provider,
              {
                value: {
                  location: K(
                    {
                      pathname: "/",
                      search: "",
                      hash: "",
                      state: null,
                      key: "default",
                    },
                    d
                  ),
                  navigationType: t.Pop,
                },
              },
              g
            )
          : g;
      }
      function re() {
        let e = (function () {
            var e;
            let t = a.useContext($),
              n = de(ce.UseRouteError),
              r = he(ce.UseRouteError);
            if (t) return t;
            return null == (e = n.errors) ? void 0 : e[r];
          })(),
          t = B(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          n = e instanceof Error ? e.stack : null,
          r = "rgba(200,200,200, 0.5)",
          o = { padding: "0.5rem", backgroundColor: r };
        return a.createElement(
          a.Fragment,
          null,
          a.createElement("h2", null, "Unexpected Application Error!"),
          a.createElement("h3", { style: { fontStyle: "italic" } }, t),
          n ? a.createElement("pre", { style: o }, n) : null,
          null
        );
      }
      const ae = a.createElement(re, null);
      class oe extends a.Component {
        constructor(e) {
          super(e),
            (this.state = {
              location: e.location,
              revalidation: e.revalidation,
              error: e.error,
            });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          return t.location !== e.location ||
            ("idle" !== t.revalidation && "idle" === e.revalidation)
            ? {
                error: e.error,
                location: e.location,
                revalidation: e.revalidation,
              }
            : {
                error: e.error || t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation,
              };
        }
        componentDidCatch(e, t) {
          console.error(
            "React Router caught the following error during render",
            e,
            t
          );
        }
        render() {
          return this.state.error
            ? a.createElement(
                J.Provider,
                { value: this.props.routeContext },
                a.createElement($.Provider, {
                  value: this.state.error,
                  children: this.props.component,
                })
              )
            : this.props.children;
        }
      }
      function ie(e) {
        let { routeContext: t, match: n, children: r } = e,
          o = a.useContext(q);
        return (
          o &&
            o.static &&
            o.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (o.staticContext._deepestRenderedBoundaryId = n.route.id),
          a.createElement(J.Provider, { value: t }, r)
        );
      }
      function se(e, t, n) {
        var r;
        if ((void 0 === t && (t = []), void 0 === n && (n = null), null == e)) {
          var o;
          if (null == (o = n) || !o.errors) return null;
          e = n.matches;
        }
        let i = e,
          s = null == (r = n) ? void 0 : r.errors;
        if (null != s) {
          let e = i.findIndex(
            (e) => e.route.id && (null == s ? void 0 : s[e.route.id])
          );
          e >= 0 || u(!1), (i = i.slice(0, Math.min(i.length, e + 1)));
        }
        return i.reduceRight((e, r, o) => {
          let l = r.route.id ? (null == s ? void 0 : s[r.route.id]) : null,
            c = null;
          n && (c = r.route.errorElement || ae);
          let u = t.concat(i.slice(0, o + 1)),
            d = () => {
              let t;
              return (
                (t = l
                  ? c
                  : r.route.Component
                  ? a.createElement(r.route.Component, null)
                  : r.route.element
                  ? r.route.element
                  : e),
                a.createElement(ie, {
                  match: r,
                  routeContext: {
                    outlet: e,
                    matches: u,
                    isDataRoute: null != n,
                  },
                  children: t,
                })
              );
            };
          return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === o)
            ? a.createElement(oe, {
                location: n.location,
                revalidation: n.revalidation,
                component: c,
                error: l,
                children: d(),
                routeContext: { outlet: null, matches: u, isDataRoute: !0 },
              })
            : d();
        }, null);
      }
      var le = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            e
          );
        })(le || {}),
        ce = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            (e.UseRouteId = "useRouteId"),
            e
          );
        })(ce || {});
      function ue(e) {
        let t = a.useContext(q);
        return t || u(!1), t;
      }
      function de(e) {
        let t = a.useContext(Y);
        return t || u(!1), t;
      }
      function he(e) {
        let t = (function (e) {
            let t = a.useContext(J);
            return t || u(!1), t;
          })(),
          n = t.matches[t.matches.length - 1];
        return n.route.id || u(!1), n.route.id;
      }
      o.startTransition;
      function fe(e) {
        u(!1);
      }
      function pe(e) {
        let {
          basename: n = "/",
          children: r = null,
          location: o,
          navigationType: i = t.Pop,
          navigator: s,
          static: l = !1,
        } = e;
        G() && u(!1);
        let c = n.replace(/^\/*/, "/"),
          d = a.useMemo(
            () => ({ basename: c, navigator: s, static: l }),
            [c, s, l]
          );
        "string" === typeof o && (o = m(o));
        let {
            pathname: h = "/",
            search: f = "",
            hash: p = "",
            state: v = null,
            key: g = "default",
          } = o,
          y = a.useMemo(() => {
            let e = D(h, c);
            return null == e
              ? null
              : {
                  location: {
                    pathname: e,
                    search: f,
                    hash: p,
                    state: v,
                    key: g,
                  },
                  navigationType: i,
                };
          }, [c, h, f, p, v, g, i]);
        return null == y
          ? null
          : a.createElement(
              V.Provider,
              { value: d },
              a.createElement(Q.Provider, { children: r, value: y })
            );
      }
      function me(e) {
        let { children: t, location: n } = e;
        return ne(ve(t), n);
      }
      new Promise(() => {});
      a.Component;
      function ve(e, t) {
        void 0 === t && (t = []);
        let n = [];
        return (
          a.Children.forEach(e, (e, r) => {
            if (!a.isValidElement(e)) return;
            let o = [...t, r];
            if (e.type === a.Fragment)
              return void n.push.apply(n, ve(e.props.children, o));
            e.type !== fe && u(!1), e.props.index && e.props.children && u(!1);
            let i = {
              id: e.props.id || o.join("-"),
              caseSensitive: e.props.caseSensitive,
              element: e.props.element,
              Component: e.props.Component,
              index: e.props.index,
              path: e.props.path,
              loader: e.props.loader,
              action: e.props.action,
              errorElement: e.props.errorElement,
              ErrorBoundary: e.props.ErrorBoundary,
              hasErrorBoundary:
                null != e.props.ErrorBoundary || null != e.props.errorElement,
              shouldRevalidate: e.props.shouldRevalidate,
              handle: e.props.handle,
              lazy: e.props.lazy,
            };
            e.props.children && (i.children = ve(e.props.children, o)),
              n.push(i);
          }),
          n
        );
      }
      function ge() {
        return (
          (ge = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          ge.apply(this, arguments)
        );
      }
      function ye(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain",
      ]);
      const xe = [
        "onClick",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
        "unstable_viewTransition",
      ];
      new Map();
      const be = o.startTransition;
      s.flushSync;
      function we(e) {
        let { basename: t, children: n, future: r, window: o } = e,
          i = a.useRef();
        var s;
        null == i.current &&
          (i.current =
            (void 0 === (s = { window: o, v5Compat: !0 }) && (s = {}),
            v(
              function (e, t) {
                let { pathname: n, search: r, hash: a } = e.location;
                return f(
                  "",
                  { pathname: n, search: r, hash: a },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default"
                );
              },
              function (e, t) {
                return "string" === typeof t ? t : p(t);
              },
              null,
              s
            )));
        let l = i.current,
          [c, u] = a.useState({ action: l.action, location: l.location }),
          { v7_startTransition: d } = r || {},
          h = a.useCallback(
            (e) => {
              d && be ? be(() => u(e)) : u(e);
            },
            [u, d]
          );
        return (
          a.useLayoutEffect(() => l.listen(h), [l, h]),
          a.createElement(pe, {
            basename: t,
            children: n,
            location: c.location,
            navigationType: c.action,
            navigator: l,
          })
        );
      }
      const je =
          "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          "undefined" !== typeof window.document.createElement,
        Se = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        ke = a.forwardRef(function (e, t) {
          let n,
            {
              onClick: r,
              relative: o,
              reloadDocument: i,
              replace: s,
              state: l,
              target: c,
              to: d,
              preventScrollReset: h,
              unstable_viewTransition: f,
            } = e,
            m = ye(e, xe),
            { basename: v } = a.useContext(V),
            g = !1;
          if ("string" === typeof d && Se.test(d) && ((n = d), je))
            try {
              let e = new URL(window.location.href),
                t = d.startsWith("//") ? new URL(e.protocol + d) : new URL(d),
                n = D(t.pathname, v);
              t.origin === e.origin && null != n
                ? (d = n + t.search + t.hash)
                : (g = !0);
            } catch (b) {}
          let y = (function (e, t) {
              let { relative: n } = void 0 === t ? {} : t;
              G() || u(!1);
              let { basename: r, navigator: o } = a.useContext(V),
                { hash: i, pathname: s, search: l } = te(e, { relative: n }),
                c = s;
              return (
                "/" !== r && (c = "/" === s ? r : z([r, s])),
                o.createHref({ pathname: c, search: l, hash: i })
              );
            })(d, { relative: o }),
            x = (function (e, t) {
              let {
                  target: n,
                  replace: r,
                  state: o,
                  preventScrollReset: i,
                  relative: s,
                  unstable_viewTransition: l,
                } = void 0 === t ? {} : t,
                c = ee(),
                u = X(),
                d = te(e, { relative: s });
              return a.useCallback(
                (t) => {
                  if (
                    (function (e, t) {
                      return (
                        0 === e.button &&
                        (!t || "_self" === t) &&
                        !(function (e) {
                          return !!(
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          );
                        })(e)
                      );
                    })(t, n)
                  ) {
                    t.preventDefault();
                    let n = void 0 !== r ? r : p(u) === p(d);
                    c(e, {
                      replace: n,
                      state: o,
                      preventScrollReset: i,
                      relative: s,
                      unstable_viewTransition: l,
                    });
                  }
                },
                [u, c, d, r, o, n, e, i, s, l]
              );
            })(d, {
              replace: s,
              state: l,
              target: c,
              preventScrollReset: h,
              relative: o,
              unstable_viewTransition: f,
            });
          return a.createElement(
            "a",
            ge({}, m, {
              href: n || y,
              onClick:
                g || i
                  ? r
                  : function (e) {
                      r && r(e), e.defaultPrevented || x(e);
                    },
              ref: t,
              target: c,
            })
          );
        });
      var Ne, Ce;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmit = "useSubmit"),
          (e.UseSubmitFetcher = "useSubmitFetcher"),
          (e.UseFetcher = "useFetcher"),
          (e.useViewTransitionState = "useViewTransitionState");
      })(Ne || (Ne = {})),
        (function (e) {
          (e.UseFetcher = "useFetcher"),
            (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(Ce || (Ce = {}));
      const Te = n.p + "static/media/thankward-logo.680b041a4a5d66425db3.png";
      var Ee = n(184);
      const _e = localStorage.getItem("sponsored"),
        Oe = () => {
          const [e, t] = (0, a.useState)(null),
            n = X();
          return (
            (0, a.useEffect)(() => {
              const e = n.pathname;
              t(e);
            }, [n]),
            (0, Ee.jsxs)("div", {
              className: "sidebarhome",
              children: [
                "1" !== _e &&
                  (0, Ee.jsxs)(Ee.Fragment, {
                    children: [
                      (0, Ee.jsx)(ke, {
                        to: "/Homepage",
                        className: "sidebar-section-logo ",
                        children: (0, Ee.jsx)("img", {
                          className: "logo",
                          style: {
                            height: "32vh",
                            marginBottom: "-4vh",
                            marginTop: "0",
                          },
                          src: Te,
                          alt: "",
                        }),
                      }),
                      (0, Ee.jsx)(ke, {
                        to: "/Homepage",
                        className: "sidebar-section-link ".concat(
                          "/Homepage" === e ? "active" : ""
                        ),
                        children: (0, Ee.jsx)("span", {
                          children: "My Digital Organizations (DO)",
                        }),
                      }),
                    ],
                  }),
                "1" === _e &&
                  (0, Ee.jsxs)(Ee.Fragment, {
                    children: [
                      (0, Ee.jsx)(ke, {
                        className: "sidebar-section-logo ",
                        children: (0, Ee.jsx)("img", {
                          className: "logo",
                          style: {
                            height: "32vh",
                            marginBottom: "-4vh",
                            marginTop: "0",
                          },
                          src: Te,
                          alt: "",
                        }),
                      }),
                      (0, Ee.jsx)(ke, {
                        className: "sidebar-section-link ".concat(
                          "/Homepage" === e ? "active" : ""
                        ),
                        children: (0, Ee.jsx)("span", {
                          children: "My Digital Organizations (DO)",
                        }),
                      }),
                    ],
                  }),
                (0, Ee.jsx)(ke, {
                  to: "/CreateDO",
                  className: "sidebar-section-link ".concat(
                    "/CreateDO" === e ? "active" : ""
                  ),
                  children: (0, Ee.jsx)("span", {
                    children: "Create a new DO",
                  }),
                }),
                "1" !== _e &&
                  (0, Ee.jsx)(ke, {
                    to: "/Sponsorize",
                    className: "sidebar-section-link ".concat(
                      "/Sponsorize" === e ? "active" : ""
                    ),
                    children: (0, Ee.jsx)("span", {
                      children: "Sponsorize a DO Creator",
                    }),
                  }),
                "1" === _e &&
                  (0, Ee.jsx)(ke, {
                    className: "sidebar-section-link ".concat(
                      "/Sponsorize" === e ? "active" : ""
                    ),
                    children: (0, Ee.jsx)("span", {
                      children: "Sponsorize a DO Creator",
                    }),
                  }),
                (0, Ee.jsxs)("button", {
                  className: "sidebar-section-link",
                  children: [
                    (0, Ee.jsx)("span", { children: "Discover DOs" }),
                    (0, Ee.jsx)("span", {
                      style: { marginLeft: "3.5vw", fontSize: "1vw" },
                      className: "soon",
                      children: "Soon",
                    }),
                  ],
                }),
                (0, Ee.jsxs)("button", {
                  className: "sidebar-section-link",
                  children: [
                    (0, Ee.jsx)("span", { children: "Discover Talents" }),
                    (0, Ee.jsx)("span", {
                      style: { marginLeft: "1.7vw", fontSize: "1vw" },
                      className: "soon",
                      children: "Soon",
                    }),
                  ],
                }),
                (0, Ee.jsx)(ke, {
                  to: "/Myprofile",
                  className: "sidebar-section-link ".concat(
                    "/Myprofile" === e ? "active" : ""
                  ),
                  children: (0, Ee.jsx)("span", { children: "Need help" }),
                }),
              ],
            })
          );
        };
      function Ie(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      const { toString: De } = Object.prototype,
        { getPrototypeOf: Pe } = Object,
        Re =
          ((Fe = Object.create(null)),
          (e) => {
            const t = De.call(e);
            return Fe[t] || (Fe[t] = t.slice(8, -1).toLowerCase());
          });
      var Fe;
      const Le = (e) => ((e = e.toLowerCase()), (t) => Re(t) === e),
        ze = (e) => (t) => typeof t === e,
        { isArray: Ae } = Array,
        Ue = ze("undefined");
      const Me = Le("ArrayBuffer");
      const Be = ze("string"),
        We = ze("function"),
        He = ze("number"),
        Ke = (e) => null !== e && "object" === typeof e,
        qe = (e) => {
          if ("object" !== Re(e)) return !1;
          const t = Pe(e);
          return (
            (null === t ||
              t === Object.prototype ||
              null === Object.getPrototypeOf(t)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        },
        Ye = Le("Date"),
        Ve = Le("File"),
        Qe = Le("Blob"),
        Je = Le("FileList"),
        $e = Le("URLSearchParams");
      function Ge(e, t) {
        let n,
          r,
          { allOwnKeys: a = !1 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null !== e && "undefined" !== typeof e)
          if (("object" !== typeof e && (e = [e]), Ae(e)))
            for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
          else {
            const r = a ? Object.getOwnPropertyNames(e) : Object.keys(e),
              o = r.length;
            let i;
            for (n = 0; n < o; n++) (i = r[n]), t.call(null, e[i], i, e);
          }
      }
      function Xe(e, t) {
        t = t.toLowerCase();
        const n = Object.keys(e);
        let r,
          a = n.length;
        for (; a-- > 0; ) if (((r = n[a]), t === r.toLowerCase())) return r;
        return null;
      }
      const Ze =
          "undefined" !== typeof globalThis
            ? globalThis
            : "undefined" !== typeof self
            ? self
            : "undefined" !== typeof window
            ? window
            : global,
        et = (e) => !Ue(e) && e !== Ze;
      const tt =
        ((nt = "undefined" !== typeof Uint8Array && Pe(Uint8Array)),
        (e) => nt && e instanceof nt);
      var nt;
      const rt = Le("HTMLFormElement"),
        at = ((e) => {
          let { hasOwnProperty: t } = e;
          return (e, n) => t.call(e, n);
        })(Object.prototype),
        ot = Le("RegExp"),
        it = (e, t) => {
          const n = Object.getOwnPropertyDescriptors(e),
            r = {};
          Ge(n, (n, a) => {
            let o;
            !1 !== (o = t(n, a, e)) && (r[a] = o || n);
          }),
            Object.defineProperties(e, r);
        },
        st = "abcdefghijklmnopqrstuvwxyz",
        lt = "0123456789",
        ct = { DIGIT: lt, ALPHA: st, ALPHA_DIGIT: st + st.toUpperCase() + lt };
      const ut = Le("AsyncFunction"),
        dt = {
          isArray: Ae,
          isArrayBuffer: Me,
          isBuffer: function (e) {
            return (
              null !== e &&
              !Ue(e) &&
              null !== e.constructor &&
              !Ue(e.constructor) &&
              We(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: (e) => {
            let t;
            return (
              e &&
              (("function" === typeof FormData && e instanceof FormData) ||
                (We(e.append) &&
                  ("formdata" === (t = Re(e)) ||
                    ("object" === t &&
                      We(e.toString) &&
                      "[object FormData]" === e.toString()))))
            );
          },
          isArrayBufferView: function (e) {
            let t;
            return (
              (t =
                "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
                  ? ArrayBuffer.isView(e)
                  : e && e.buffer && Me(e.buffer)),
              t
            );
          },
          isString: Be,
          isNumber: He,
          isBoolean: (e) => !0 === e || !1 === e,
          isObject: Ke,
          isPlainObject: qe,
          isUndefined: Ue,
          isDate: Ye,
          isFile: Ve,
          isBlob: Qe,
          isRegExp: ot,
          isFunction: We,
          isStream: (e) => Ke(e) && We(e.pipe),
          isURLSearchParams: $e,
          isTypedArray: tt,
          isFileList: Je,
          forEach: Ge,
          merge: function e() {
            const { caseless: t } = (et(this) && this) || {},
              n = {},
              r = (r, a) => {
                const o = (t && Xe(n, a)) || a;
                qe(n[o]) && qe(r)
                  ? (n[o] = e(n[o], r))
                  : qe(r)
                  ? (n[o] = e({}, r))
                  : Ae(r)
                  ? (n[o] = r.slice())
                  : (n[o] = r);
              };
            for (let a = 0, o = arguments.length; a < o; a++)
              arguments[a] && Ge(arguments[a], r);
            return n;
          },
          extend: function (e, t, n) {
            let { allOwnKeys: r } =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
            return (
              Ge(
                t,
                (t, r) => {
                  n && We(t) ? (e[r] = Ie(t, n)) : (e[r] = t);
                },
                { allOwnKeys: r }
              ),
              e
            );
          },
          trim: (e) =>
            e.trim
              ? e.trim()
              : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
          stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
          inherits: (e, t, n, r) => {
            (e.prototype = Object.create(t.prototype, r)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, "super", { value: t.prototype }),
              n && Object.assign(e.prototype, n);
          },
          toFlatObject: (e, t, n, r) => {
            let a, o, i;
            const s = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (a = Object.getOwnPropertyNames(e), o = a.length; o-- > 0; )
                (i = a[o]),
                  (r && !r(i, e, t)) || s[i] || ((t[i] = e[i]), (s[i] = !0));
              e = !1 !== n && Pe(e);
            } while (e && (!n || n(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: Re,
          kindOfTest: Le,
          endsWith: (e, t, n) => {
            (e = String(e)),
              (void 0 === n || n > e.length) && (n = e.length),
              (n -= t.length);
            const r = e.indexOf(t, n);
            return -1 !== r && r === n;
          },
          toArray: (e) => {
            if (!e) return null;
            if (Ae(e)) return e;
            let t = e.length;
            if (!He(t)) return null;
            const n = new Array(t);
            for (; t-- > 0; ) n[t] = e[t];
            return n;
          },
          forEachEntry: (e, t) => {
            const n = (e && e[Symbol.iterator]).call(e);
            let r;
            for (; (r = n.next()) && !r.done; ) {
              const n = r.value;
              t.call(e, n[0], n[1]);
            }
          },
          matchAll: (e, t) => {
            let n;
            const r = [];
            for (; null !== (n = e.exec(t)); ) r.push(n);
            return r;
          },
          isHTMLForm: rt,
          hasOwnProperty: at,
          hasOwnProp: at,
          reduceDescriptors: it,
          freezeMethods: (e) => {
            it(e, (t, n) => {
              if (We(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
                return !1;
              const r = e[n];
              We(r) &&
                ((t.enumerable = !1),
                "writable" in t
                  ? (t.writable = !1)
                  : t.set ||
                    (t.set = () => {
                      throw Error(
                        "Can not rewrite read-only method '" + n + "'"
                      );
                    }));
            });
          },
          toObjectSet: (e, t) => {
            const n = {},
              r = (e) => {
                e.forEach((e) => {
                  n[e] = !0;
                });
              };
            return Ae(e) ? r(e) : r(String(e).split(t)), n;
          },
          toCamelCase: (e) =>
            e
              .toLowerCase()
              .replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
                return t.toUpperCase() + n;
              }),
          noop: () => {},
          toFiniteNumber: (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
          findKey: Xe,
          global: Ze,
          isContextDefined: et,
          ALPHABET: ct,
          generateString: function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 16,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : ct.ALPHA_DIGIT,
              n = "";
            const { length: r } = t;
            for (; e--; ) n += t[(Math.random() * r) | 0];
            return n;
          },
          isSpecCompliantForm: function (e) {
            return !!(
              e &&
              We(e.append) &&
              "FormData" === e[Symbol.toStringTag] &&
              e[Symbol.iterator]
            );
          },
          toJSONObject: (e) => {
            const t = new Array(10),
              n = (e, r) => {
                if (Ke(e)) {
                  if (t.indexOf(e) >= 0) return;
                  if (!("toJSON" in e)) {
                    t[r] = e;
                    const a = Ae(e) ? [] : {};
                    return (
                      Ge(e, (e, t) => {
                        const o = n(e, r + 1);
                        !Ue(o) && (a[t] = o);
                      }),
                      (t[r] = void 0),
                      a
                    );
                  }
                }
                return e;
              };
            return n(e, 0);
          },
          isAsyncFn: ut,
          isThenable: (e) => e && (Ke(e) || We(e)) && We(e.then) && We(e.catch),
        };
      function ht(e, t, n, r, a) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
          (this.message = e),
          (this.name = "AxiosError"),
          t && (this.code = t),
          n && (this.config = n),
          r && (this.request = r),
          a && (this.response = a);
      }
      dt.inherits(ht, Error, {
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
            config: dt.toJSONObject(this.config),
            code: this.code,
            status:
              this.response && this.response.status
                ? this.response.status
                : null,
          };
        },
      });
      const ft = ht.prototype,
        pt = {};
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
      ].forEach((e) => {
        pt[e] = { value: e };
      }),
        Object.defineProperties(ht, pt),
        Object.defineProperty(ft, "isAxiosError", { value: !0 }),
        (ht.from = (e, t, n, r, a, o) => {
          const i = Object.create(ft);
          return (
            dt.toFlatObject(
              e,
              i,
              function (e) {
                return e !== Error.prototype;
              },
              (e) => "isAxiosError" !== e
            ),
            ht.call(i, e.message, t, n, r, a),
            (i.cause = e),
            (i.name = e.name),
            o && Object.assign(i, o),
            i
          );
        });
      const mt = ht;
      function vt(e) {
        return dt.isPlainObject(e) || dt.isArray(e);
      }
      function gt(e) {
        return dt.endsWith(e, "[]") ? e.slice(0, -2) : e;
      }
      function yt(e, t, n) {
        return e
          ? e
              .concat(t)
              .map(function (e, t) {
                return (e = gt(e)), !n && t ? "[" + e + "]" : e;
              })
              .join(n ? "." : "")
          : t;
      }
      const xt = dt.toFlatObject(dt, {}, null, function (e) {
        return /^is[A-Z]/.test(e);
      });
      const bt = function (e, t, n) {
        if (!dt.isObject(e)) throw new TypeError("target must be an object");
        t = t || new FormData();
        const r = (n = dt.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (e, t) {
              return !dt.isUndefined(t[e]);
            }
          )).metaTokens,
          a = n.visitor || c,
          o = n.dots,
          i = n.indexes,
          s =
            (n.Blob || ("undefined" !== typeof Blob && Blob)) &&
            dt.isSpecCompliantForm(t);
        if (!dt.isFunction(a))
          throw new TypeError("visitor must be a function");
        function l(e) {
          if (null === e) return "";
          if (dt.isDate(e)) return e.toISOString();
          if (!s && dt.isBlob(e))
            throw new mt("Blob is not supported. Use a Buffer instead.");
          return dt.isArrayBuffer(e) || dt.isTypedArray(e)
            ? s && "function" === typeof Blob
              ? new Blob([e])
              : Buffer.from(e)
            : e;
        }
        function c(e, n, a) {
          let s = e;
          if (e && !a && "object" === typeof e)
            if (dt.endsWith(n, "{}"))
              (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
            else if (
              (dt.isArray(e) &&
                (function (e) {
                  return dt.isArray(e) && !e.some(vt);
                })(e)) ||
              ((dt.isFileList(e) || dt.endsWith(n, "[]")) &&
                (s = dt.toArray(e)))
            )
              return (
                (n = gt(n)),
                s.forEach(function (e, r) {
                  !dt.isUndefined(e) &&
                    null !== e &&
                    t.append(
                      !0 === i ? yt([n], r, o) : null === i ? n : n + "[]",
                      l(e)
                    );
                }),
                !1
              );
          return !!vt(e) || (t.append(yt(a, n, o), l(e)), !1);
        }
        const u = [],
          d = Object.assign(xt, {
            defaultVisitor: c,
            convertValue: l,
            isVisitable: vt,
          });
        if (!dt.isObject(e)) throw new TypeError("data must be an object");
        return (
          (function e(n, r) {
            if (!dt.isUndefined(n)) {
              if (-1 !== u.indexOf(n))
                throw Error("Circular reference detected in " + r.join("."));
              u.push(n),
                dt.forEach(n, function (n, o) {
                  !0 ===
                    (!(dt.isUndefined(n) || null === n) &&
                      a.call(t, n, dt.isString(o) ? o.trim() : o, r, d)) &&
                    e(n, r ? r.concat(o) : [o]);
                }),
                u.pop();
            }
          })(e),
          t
        );
      };
      function wt(e) {
        const t = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0",
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return t[e];
        });
      }
      function jt(e, t) {
        (this._pairs = []), e && bt(e, this, t);
      }
      const St = jt.prototype;
      (St.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
        (St.toString = function (e) {
          const t = e
            ? function (t) {
                return e.call(this, t, wt);
              }
            : wt;
          return this._pairs
            .map(function (e) {
              return t(e[0]) + "=" + t(e[1]);
            }, "")
            .join("&");
        });
      const kt = jt;
      function Nt(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function Ct(e, t, n) {
        if (!t) return e;
        const r = (n && n.encode) || Nt,
          a = n && n.serialize;
        let o;
        if (
          ((o = a
            ? a(t, n)
            : dt.isURLSearchParams(t)
            ? t.toString()
            : new kt(t, n).toString(r)),
          o)
        ) {
          const t = e.indexOf("#");
          -1 !== t && (e = e.slice(0, t)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + o);
        }
        return e;
      }
      const Tt = class {
          constructor() {
            this.handlers = [];
          }
          use(e, t, n) {
            return (
              this.handlers.push({
                fulfilled: e,
                rejected: t,
                synchronous: !!n && n.synchronous,
                runWhen: n ? n.runWhen : null,
              }),
              this.handlers.length - 1
            );
          }
          eject(e) {
            this.handlers[e] && (this.handlers[e] = null);
          }
          clear() {
            this.handlers && (this.handlers = []);
          }
          forEach(e) {
            dt.forEach(this.handlers, function (t) {
              null !== t && e(t);
            });
          }
        },
        Et = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        _t = {
          isBrowser: !0,
          classes: {
            URLSearchParams:
              "undefined" !== typeof URLSearchParams ? URLSearchParams : kt,
            FormData: "undefined" !== typeof FormData ? FormData : null,
            Blob: "undefined" !== typeof Blob ? Blob : null,
          },
          protocols: ["http", "https", "file", "blob", "url", "data"],
        },
        Ot = "undefined" !== typeof window && "undefined" !== typeof document,
        It =
          ((Dt = "undefined" !== typeof navigator && navigator.product),
          Ot && ["ReactNative", "NativeScript", "NS"].indexOf(Dt) < 0);
      var Dt;
      const Pt =
          "undefined" !== typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          "function" === typeof self.importScripts,
        Rt = { ...e, ..._t };
      const Ft = function (e) {
        function t(e, n, r, a) {
          let o = e[a++];
          const i = Number.isFinite(+o),
            s = a >= e.length;
          if (((o = !o && dt.isArray(r) ? r.length : o), s))
            return dt.hasOwnProp(r, o) ? (r[o] = [r[o], n]) : (r[o] = n), !i;
          (r[o] && dt.isObject(r[o])) || (r[o] = []);
          return (
            t(e, n, r[o], a) &&
              dt.isArray(r[o]) &&
              (r[o] = (function (e) {
                const t = {},
                  n = Object.keys(e);
                let r;
                const a = n.length;
                let o;
                for (r = 0; r < a; r++) (o = n[r]), (t[o] = e[o]);
                return t;
              })(r[o])),
            !i
          );
        }
        if (dt.isFormData(e) && dt.isFunction(e.entries)) {
          const n = {};
          return (
            dt.forEachEntry(e, (e, r) => {
              t(
                (function (e) {
                  return dt
                    .matchAll(/\w+|\[(\w*)]/g, e)
                    .map((e) => ("[]" === e[0] ? "" : e[1] || e[0]));
                })(e),
                r,
                n,
                0
              );
            }),
            n
          );
        }
        return null;
      };
      const Lt = {
        transitional: Et,
        adapter: ["xhr", "http"],
        transformRequest: [
          function (e, t) {
            const n = t.getContentType() || "",
              r = n.indexOf("application/json") > -1,
              a = dt.isObject(e);
            a && dt.isHTMLForm(e) && (e = new FormData(e));
            if (dt.isFormData(e)) return r && r ? JSON.stringify(Ft(e)) : e;
            if (
              dt.isArrayBuffer(e) ||
              dt.isBuffer(e) ||
              dt.isStream(e) ||
              dt.isFile(e) ||
              dt.isBlob(e)
            )
              return e;
            if (dt.isArrayBufferView(e)) return e.buffer;
            if (dt.isURLSearchParams(e))
              return (
                t.setContentType(
                  "application/x-www-form-urlencoded;charset=utf-8",
                  !1
                ),
                e.toString()
              );
            let o;
            if (a) {
              if (n.indexOf("application/x-www-form-urlencoded") > -1)
                return (function (e, t) {
                  return bt(
                    e,
                    new Rt.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (e, t, n, r) {
                          return Rt.isNode && dt.isBuffer(e)
                            ? (this.append(t, e.toString("base64")), !1)
                            : r.defaultVisitor.apply(this, arguments);
                        },
                      },
                      t
                    )
                  );
                })(e, this.formSerializer).toString();
              if (
                (o = dt.isFileList(e)) ||
                n.indexOf("multipart/form-data") > -1
              ) {
                const t = this.env && this.env.FormData;
                return bt(
                  o ? { "files[]": e } : e,
                  t && new t(),
                  this.formSerializer
                );
              }
            }
            return a || r
              ? (t.setContentType("application/json", !1),
                (function (e, t, n) {
                  if (dt.isString(e))
                    try {
                      return (t || JSON.parse)(e), dt.trim(e);
                    } catch (r) {
                      if ("SyntaxError" !== r.name) throw r;
                    }
                  return (n || JSON.stringify)(e);
                })(e))
              : e;
          },
        ],
        transformResponse: [
          function (e) {
            const t = this.transitional || Lt.transitional,
              n = t && t.forcedJSONParsing,
              r = "json" === this.responseType;
            if (e && dt.isString(e) && ((n && !this.responseType) || r)) {
              const n = !(t && t.silentJSONParsing) && r;
              try {
                return JSON.parse(e);
              } catch (a) {
                if (n) {
                  if ("SyntaxError" === a.name)
                    throw mt.from(
                      a,
                      mt.ERR_BAD_RESPONSE,
                      this,
                      null,
                      this.response
                    );
                  throw a;
                }
              }
            }
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: Rt.classes.FormData, Blob: Rt.classes.Blob },
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: {
          common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0,
          },
        },
      };
      dt.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
        Lt.headers[e] = {};
      });
      const zt = Lt,
        At = dt.toObjectSet([
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
        ]),
        Ut = Symbol("internals");
      function Mt(e) {
        return e && String(e).trim().toLowerCase();
      }
      function Bt(e) {
        return !1 === e || null == e
          ? e
          : dt.isArray(e)
          ? e.map(Bt)
          : String(e);
      }
      function Wt(e, t, n, r, a) {
        return dt.isFunction(r)
          ? r.call(this, t, n)
          : (a && (t = n),
            dt.isString(t)
              ? dt.isString(r)
                ? -1 !== t.indexOf(r)
                : dt.isRegExp(r)
                ? r.test(t)
                : void 0
              : void 0);
      }
      class Ht {
        constructor(e) {
          e && this.set(e);
        }
        set(e, t, n) {
          const r = this;
          function a(e, t, n) {
            const a = Mt(t);
            if (!a) throw new Error("header name must be a non-empty string");
            const o = dt.findKey(r, a);
            (!o ||
              void 0 === r[o] ||
              !0 === n ||
              (void 0 === n && !1 !== r[o])) &&
              (r[o || t] = Bt(e));
          }
          const o = (e, t) => dt.forEach(e, (e, n) => a(e, n, t));
          return (
            dt.isPlainObject(e) || e instanceof this.constructor
              ? o(e, t)
              : dt.isString(e) &&
                (e = e.trim()) &&
                !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
              ? o(
                  ((e) => {
                    const t = {};
                    let n, r, a;
                    return (
                      e &&
                        e.split("\n").forEach(function (e) {
                          (a = e.indexOf(":")),
                            (n = e.substring(0, a).trim().toLowerCase()),
                            (r = e.substring(a + 1).trim()),
                            !n ||
                              (t[n] && At[n]) ||
                              ("set-cookie" === n
                                ? t[n]
                                  ? t[n].push(r)
                                  : (t[n] = [r])
                                : (t[n] = t[n] ? t[n] + ", " + r : r));
                        }),
                      t
                    );
                  })(e),
                  t
                )
              : null != e && a(t, e, n),
            this
          );
        }
        get(e, t) {
          if ((e = Mt(e))) {
            const n = dt.findKey(this, e);
            if (n) {
              const e = this[n];
              if (!t) return e;
              if (!0 === t)
                return (function (e) {
                  const t = Object.create(null),
                    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                  let r;
                  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
                  return t;
                })(e);
              if (dt.isFunction(t)) return t.call(this, e, n);
              if (dt.isRegExp(t)) return t.exec(e);
              throw new TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(e, t) {
          if ((e = Mt(e))) {
            const n = dt.findKey(this, e);
            return !(!n || void 0 === this[n] || (t && !Wt(0, this[n], n, t)));
          }
          return !1;
        }
        delete(e, t) {
          const n = this;
          let r = !1;
          function a(e) {
            if ((e = Mt(e))) {
              const a = dt.findKey(n, e);
              !a || (t && !Wt(0, n[a], a, t)) || (delete n[a], (r = !0));
            }
          }
          return dt.isArray(e) ? e.forEach(a) : a(e), r;
        }
        clear(e) {
          const t = Object.keys(this);
          let n = t.length,
            r = !1;
          for (; n--; ) {
            const a = t[n];
            (e && !Wt(0, this[a], a, e, !0)) || (delete this[a], (r = !0));
          }
          return r;
        }
        normalize(e) {
          const t = this,
            n = {};
          return (
            dt.forEach(this, (r, a) => {
              const o = dt.findKey(n, a);
              if (o) return (t[o] = Bt(r)), void delete t[a];
              const i = e
                ? (function (e) {
                    return e
                      .trim()
                      .toLowerCase()
                      .replace(
                        /([a-z\d])(\w*)/g,
                        (e, t, n) => t.toUpperCase() + n
                      );
                  })(a)
                : String(a).trim();
              i !== a && delete t[a], (t[i] = Bt(r)), (n[i] = !0);
            }),
            this
          );
        }
        concat() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.constructor.concat(this, ...t);
        }
        toJSON(e) {
          const t = Object.create(null);
          return (
            dt.forEach(this, (n, r) => {
              null != n &&
                !1 !== n &&
                (t[r] = e && dt.isArray(n) ? n.join(", ") : n);
            }),
            t
          );
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON())
            .map((e) => {
              let [t, n] = e;
              return t + ": " + n;
            })
            .join("\n");
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(e) {
          return e instanceof this ? e : new this(e);
        }
        static concat(e) {
          const t = new this(e);
          for (
            var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1;
            a < n;
            a++
          )
            r[a - 1] = arguments[a];
          return r.forEach((e) => t.set(e)), t;
        }
        static accessor(e) {
          const t = (this[Ut] = this[Ut] = { accessors: {} }).accessors,
            n = this.prototype;
          function r(e) {
            const r = Mt(e);
            t[r] ||
              (!(function (e, t) {
                const n = dt.toCamelCase(" " + t);
                ["get", "set", "has"].forEach((r) => {
                  Object.defineProperty(e, r + n, {
                    value: function (e, n, a) {
                      return this[r].call(this, t, e, n, a);
                    },
                    configurable: !0,
                  });
                });
              })(n, e),
              (t[r] = !0));
          }
          return dt.isArray(e) ? e.forEach(r) : r(e), this;
        }
      }
      Ht.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization",
      ]),
        dt.reduceDescriptors(Ht.prototype, (e, t) => {
          let { value: n } = e,
            r = t[0].toUpperCase() + t.slice(1);
          return {
            get: () => n,
            set(e) {
              this[r] = e;
            },
          };
        }),
        dt.freezeMethods(Ht);
      const Kt = Ht;
      function qt(e, t) {
        const n = this || zt,
          r = t || n,
          a = Kt.from(r.headers);
        let o = r.data;
        return (
          dt.forEach(e, function (e) {
            o = e.call(n, o, a.normalize(), t ? t.status : void 0);
          }),
          a.normalize(),
          o
        );
      }
      function Yt(e) {
        return !(!e || !e.__CANCEL__);
      }
      function Vt(e, t, n) {
        mt.call(this, null == e ? "canceled" : e, mt.ERR_CANCELED, t, n),
          (this.name = "CanceledError");
      }
      dt.inherits(Vt, mt, { __CANCEL__: !0 });
      const Qt = Vt;
      const Jt = Rt.hasStandardBrowserEnv
        ? {
            write(e, t, n, r, a, o) {
              const i = [e + "=" + encodeURIComponent(t)];
              dt.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
                dt.isString(r) && i.push("path=" + r),
                dt.isString(a) && i.push("domain=" + a),
                !0 === o && i.push("secure"),
                (document.cookie = i.join("; "));
            },
            read(e) {
              const t = document.cookie.match(
                new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
              );
              return t ? decodeURIComponent(t[3]) : null;
            },
            remove(e) {
              this.write(e, "", Date.now() - 864e5);
            },
          }
        : { write() {}, read: () => null, remove() {} };
      function $t(e, t) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
          ? (function (e, t) {
              return t
                ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "")
                : e;
            })(e, t)
          : t;
      }
      const Gt = Rt.hasStandardBrowserEnv
        ? (function () {
            const e = /(msie|trident)/i.test(navigator.userAgent),
              t = document.createElement("a");
            let n;
            function r(n) {
              let r = n;
              return (
                e && (t.setAttribute("href", r), (r = t.href)),
                t.setAttribute("href", r),
                {
                  href: t.href,
                  protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                  host: t.host,
                  search: t.search ? t.search.replace(/^\?/, "") : "",
                  hash: t.hash ? t.hash.replace(/^#/, "") : "",
                  hostname: t.hostname,
                  port: t.port,
                  pathname:
                    "/" === t.pathname.charAt(0)
                      ? t.pathname
                      : "/" + t.pathname,
                }
              );
            }
            return (
              (n = r(window.location.href)),
              function (e) {
                const t = dt.isString(e) ? r(e) : e;
                return t.protocol === n.protocol && t.host === n.host;
              }
            );
          })()
        : function () {
            return !0;
          };
      const Xt = function (e, t) {
        e = e || 10;
        const n = new Array(e),
          r = new Array(e);
        let a,
          o = 0,
          i = 0;
        return (
          (t = void 0 !== t ? t : 1e3),
          function (s) {
            const l = Date.now(),
              c = r[i];
            a || (a = l), (n[o] = s), (r[o] = l);
            let u = i,
              d = 0;
            for (; u !== o; ) (d += n[u++]), (u %= e);
            if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), l - a < t))
              return;
            const h = c && l - c;
            return h ? Math.round((1e3 * d) / h) : void 0;
          }
        );
      };
      function Zt(e, t) {
        let n = 0;
        const r = Xt(50, 250);
        return (a) => {
          const o = a.loaded,
            i = a.lengthComputable ? a.total : void 0,
            s = o - n,
            l = r(s);
          n = o;
          const c = {
            loaded: o,
            total: i,
            progress: i ? o / i : void 0,
            bytes: s,
            rate: l || void 0,
            estimated: l && i && o <= i ? (i - o) / l : void 0,
            event: a,
          };
          (c[t ? "download" : "upload"] = !0), e(c);
        };
      }
      const en = {
        http: null,
        xhr:
          "undefined" !== typeof XMLHttpRequest &&
          function (e) {
            return new Promise(function (t, n) {
              let r = e.data;
              const a = Kt.from(e.headers).normalize();
              let o,
                i,
                { responseType: s, withXSRFToken: l } = e;
              function c() {
                e.cancelToken && e.cancelToken.unsubscribe(o),
                  e.signal && e.signal.removeEventListener("abort", o);
              }
              if (dt.isFormData(r))
                if (
                  Rt.hasStandardBrowserEnv ||
                  Rt.hasStandardBrowserWebWorkerEnv
                )
                  a.setContentType(!1);
                else if (!1 !== (i = a.getContentType())) {
                  const [e, ...t] = i
                    ? i
                        .split(";")
                        .map((e) => e.trim())
                        .filter(Boolean)
                    : [];
                  a.setContentType(
                    [e || "multipart/form-data", ...t].join("; ")
                  );
                }
              let u = new XMLHttpRequest();
              if (e.auth) {
                const t = e.auth.username || "",
                  n = e.auth.password
                    ? unescape(encodeURIComponent(e.auth.password))
                    : "";
                a.set("Authorization", "Basic " + btoa(t + ":" + n));
              }
              const d = $t(e.baseURL, e.url);
              function h() {
                if (!u) return;
                const r = Kt.from(
                  "getAllResponseHeaders" in u && u.getAllResponseHeaders()
                );
                !(function (e, t, n) {
                  const r = n.config.validateStatus;
                  n.status && r && !r(n.status)
                    ? t(
                        new mt(
                          "Request failed with status code " + n.status,
                          [mt.ERR_BAD_REQUEST, mt.ERR_BAD_RESPONSE][
                            Math.floor(n.status / 100) - 4
                          ],
                          n.config,
                          n.request,
                          n
                        )
                      )
                    : e(n);
                })(
                  function (e) {
                    t(e), c();
                  },
                  function (e) {
                    n(e), c();
                  },
                  {
                    data:
                      s && "text" !== s && "json" !== s
                        ? u.response
                        : u.responseText,
                    status: u.status,
                    statusText: u.statusText,
                    headers: r,
                    config: e,
                    request: u,
                  }
                ),
                  (u = null);
              }
              if (
                (u.open(
                  e.method.toUpperCase(),
                  Ct(d, e.params, e.paramsSerializer),
                  !0
                ),
                (u.timeout = e.timeout),
                "onloadend" in u
                  ? (u.onloadend = h)
                  : (u.onreadystatechange = function () {
                      u &&
                        4 === u.readyState &&
                        (0 !== u.status ||
                          (u.responseURL &&
                            0 === u.responseURL.indexOf("file:"))) &&
                        setTimeout(h);
                    }),
                (u.onabort = function () {
                  u &&
                    (n(new mt("Request aborted", mt.ECONNABORTED, e, u)),
                    (u = null));
                }),
                (u.onerror = function () {
                  n(new mt("Network Error", mt.ERR_NETWORK, e, u)), (u = null);
                }),
                (u.ontimeout = function () {
                  let t = e.timeout
                    ? "timeout of " + e.timeout + "ms exceeded"
                    : "timeout exceeded";
                  const r = e.transitional || Et;
                  e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                    n(
                      new mt(
                        t,
                        r.clarifyTimeoutError ? mt.ETIMEDOUT : mt.ECONNABORTED,
                        e,
                        u
                      )
                    ),
                    (u = null);
                }),
                Rt.hasStandardBrowserEnv &&
                  (l && dt.isFunction(l) && (l = l(e)),
                  l || (!1 !== l && Gt(d))))
              ) {
                const t =
                  e.xsrfHeaderName &&
                  e.xsrfCookieName &&
                  Jt.read(e.xsrfCookieName);
                t && a.set(e.xsrfHeaderName, t);
              }
              void 0 === r && a.setContentType(null),
                "setRequestHeader" in u &&
                  dt.forEach(a.toJSON(), function (e, t) {
                    u.setRequestHeader(t, e);
                  }),
                dt.isUndefined(e.withCredentials) ||
                  (u.withCredentials = !!e.withCredentials),
                s && "json" !== s && (u.responseType = e.responseType),
                "function" === typeof e.onDownloadProgress &&
                  u.addEventListener("progress", Zt(e.onDownloadProgress, !0)),
                "function" === typeof e.onUploadProgress &&
                  u.upload &&
                  u.upload.addEventListener("progress", Zt(e.onUploadProgress)),
                (e.cancelToken || e.signal) &&
                  ((o = (t) => {
                    u &&
                      (n(!t || t.type ? new Qt(null, e, u) : t),
                      u.abort(),
                      (u = null));
                  }),
                  e.cancelToken && e.cancelToken.subscribe(o),
                  e.signal &&
                    (e.signal.aborted
                      ? o()
                      : e.signal.addEventListener("abort", o)));
              const f = (function (e) {
                const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return (t && t[1]) || "";
              })(d);
              f && -1 === Rt.protocols.indexOf(f)
                ? n(
                    new mt(
                      "Unsupported protocol " + f + ":",
                      mt.ERR_BAD_REQUEST,
                      e
                    )
                  )
                : u.send(r || null);
            });
          },
      };
      dt.forEach(en, (e, t) => {
        if (e) {
          try {
            Object.defineProperty(e, "name", { value: t });
          } catch (n) {}
          Object.defineProperty(e, "adapterName", { value: t });
        }
      });
      const tn = (e) => "- ".concat(e),
        nn = (e) => dt.isFunction(e) || null === e || !1 === e,
        rn = (e) => {
          e = dt.isArray(e) ? e : [e];
          const { length: t } = e;
          let n, r;
          const a = {};
          for (let o = 0; o < t; o++) {
            let t;
            if (
              ((n = e[o]),
              (r = n),
              !nn(n) && ((r = en[(t = String(n)).toLowerCase()]), void 0 === r))
            )
              throw new mt("Unknown adapter '".concat(t, "'"));
            if (r) break;
            a[t || "#" + o] = r;
          }
          if (!r) {
            const e = Object.entries(a).map((e) => {
              let [t, n] = e;
              return (
                "adapter ".concat(t, " ") +
                (!1 === n
                  ? "is not supported by the environment"
                  : "is not available in the build")
              );
            });
            let n = t
              ? e.length > 1
                ? "since :\n" + e.map(tn).join("\n")
                : " " + tn(e[0])
              : "as no adapter specified";
            throw new mt(
              "There is no suitable adapter to dispatch the request " + n,
              "ERR_NOT_SUPPORT"
            );
          }
          return r;
        };
      function an(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new Qt(null, e);
      }
      function on(e) {
        an(e),
          (e.headers = Kt.from(e.headers)),
          (e.data = qt.call(e, e.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(e.method) &&
            e.headers.setContentType("application/x-www-form-urlencoded", !1);
        return rn(e.adapter || zt.adapter)(e).then(
          function (t) {
            return (
              an(e),
              (t.data = qt.call(e, e.transformResponse, t)),
              (t.headers = Kt.from(t.headers)),
              t
            );
          },
          function (t) {
            return (
              Yt(t) ||
                (an(e),
                t &&
                  t.response &&
                  ((t.response.data = qt.call(
                    e,
                    e.transformResponse,
                    t.response
                  )),
                  (t.response.headers = Kt.from(t.response.headers)))),
              Promise.reject(t)
            );
          }
        );
      }
      const sn = (e) => (e instanceof Kt ? e.toJSON() : e);
      function ln(e, t) {
        t = t || {};
        const n = {};
        function r(e, t, n) {
          return dt.isPlainObject(e) && dt.isPlainObject(t)
            ? dt.merge.call({ caseless: n }, e, t)
            : dt.isPlainObject(t)
            ? dt.merge({}, t)
            : dt.isArray(t)
            ? t.slice()
            : t;
        }
        function a(e, t, n) {
          return dt.isUndefined(t)
            ? dt.isUndefined(e)
              ? void 0
              : r(void 0, e, n)
            : r(e, t, n);
        }
        function o(e, t) {
          if (!dt.isUndefined(t)) return r(void 0, t);
        }
        function i(e, t) {
          return dt.isUndefined(t)
            ? dt.isUndefined(e)
              ? void 0
              : r(void 0, e)
            : r(void 0, t);
        }
        function s(n, a, o) {
          return o in t ? r(n, a) : o in e ? r(void 0, n) : void 0;
        }
        const l = {
          url: o,
          method: o,
          data: o,
          baseURL: i,
          transformRequest: i,
          transformResponse: i,
          paramsSerializer: i,
          timeout: i,
          timeoutMessage: i,
          withCredentials: i,
          withXSRFToken: i,
          adapter: i,
          responseType: i,
          xsrfCookieName: i,
          xsrfHeaderName: i,
          onUploadProgress: i,
          onDownloadProgress: i,
          decompress: i,
          maxContentLength: i,
          maxBodyLength: i,
          beforeRedirect: i,
          transport: i,
          httpAgent: i,
          httpsAgent: i,
          cancelToken: i,
          socketPath: i,
          responseEncoding: i,
          validateStatus: s,
          headers: (e, t) => a(sn(e), sn(t), !0),
        };
        return (
          dt.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
            const o = l[r] || a,
              i = o(e[r], t[r], r);
            (dt.isUndefined(i) && o !== s) || (n[r] = i);
          }),
          n
        );
      }
      const cn = "1.6.2",
        un = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        (e, t) => {
          un[e] = function (n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        }
      );
      const dn = {};
      un.transitional = function (e, t, n) {
        function r(e, t) {
          return (
            "[Axios v1.6.2] Transitional option '" +
            e +
            "'" +
            t +
            (n ? ". " + n : "")
          );
        }
        return (n, a, o) => {
          if (!1 === e)
            throw new mt(
              r(a, " has been removed" + (t ? " in " + t : "")),
              mt.ERR_DEPRECATED
            );
          return (
            t &&
              !dn[a] &&
              ((dn[a] = !0),
              console.warn(
                r(
                  a,
                  " has been deprecated since v" +
                    t +
                    " and will be removed in the near future"
                )
              )),
            !e || e(n, a, o)
          );
        };
      };
      const hn = {
          assertOptions: function (e, t, n) {
            if ("object" !== typeof e)
              throw new mt(
                "options must be an object",
                mt.ERR_BAD_OPTION_VALUE
              );
            const r = Object.keys(e);
            let a = r.length;
            for (; a-- > 0; ) {
              const o = r[a],
                i = t[o];
              if (i) {
                const t = e[o],
                  n = void 0 === t || i(t, o, e);
                if (!0 !== n)
                  throw new mt(
                    "option " + o + " must be " + n,
                    mt.ERR_BAD_OPTION_VALUE
                  );
              } else if (!0 !== n)
                throw new mt("Unknown option " + o, mt.ERR_BAD_OPTION);
            }
          },
          validators: un,
        },
        fn = hn.validators;
      class pn {
        constructor(e) {
          (this.defaults = e),
            (this.interceptors = { request: new Tt(), response: new Tt() });
        }
        request(e, t) {
          "string" === typeof e ? ((t = t || {}).url = e) : (t = e || {}),
            (t = ln(this.defaults, t));
          const { transitional: n, paramsSerializer: r, headers: a } = t;
          void 0 !== n &&
            hn.assertOptions(
              n,
              {
                silentJSONParsing: fn.transitional(fn.boolean),
                forcedJSONParsing: fn.transitional(fn.boolean),
                clarifyTimeoutError: fn.transitional(fn.boolean),
              },
              !1
            ),
            null != r &&
              (dt.isFunction(r)
                ? (t.paramsSerializer = { serialize: r })
                : hn.assertOptions(
                    r,
                    { encode: fn.function, serialize: fn.function },
                    !0
                  )),
            (t.method = (
              t.method ||
              this.defaults.method ||
              "get"
            ).toLowerCase());
          let o = a && dt.merge(a.common, a[t.method]);
          a &&
            dt.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              (e) => {
                delete a[e];
              }
            ),
            (t.headers = Kt.concat(o, a));
          const i = [];
          let s = !0;
          this.interceptors.request.forEach(function (e) {
            ("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
              ((s = s && e.synchronous), i.unshift(e.fulfilled, e.rejected));
          });
          const l = [];
          let c;
          this.interceptors.response.forEach(function (e) {
            l.push(e.fulfilled, e.rejected);
          });
          let u,
            d = 0;
          if (!s) {
            const e = [on.bind(this), void 0];
            for (
              e.unshift.apply(e, i),
                e.push.apply(e, l),
                u = e.length,
                c = Promise.resolve(t);
              d < u;

            )
              c = c.then(e[d++], e[d++]);
            return c;
          }
          u = i.length;
          let h = t;
          for (d = 0; d < u; ) {
            const e = i[d++],
              t = i[d++];
            try {
              h = e(h);
            } catch (f) {
              t.call(this, f);
              break;
            }
          }
          try {
            c = on.call(this, h);
          } catch (f) {
            return Promise.reject(f);
          }
          for (d = 0, u = l.length; d < u; ) c = c.then(l[d++], l[d++]);
          return c;
        }
        getUri(e) {
          return Ct(
            $t((e = ln(this.defaults, e)).baseURL, e.url),
            e.params,
            e.paramsSerializer
          );
        }
      }
      dt.forEach(["delete", "get", "head", "options"], function (e) {
        pn.prototype[e] = function (t, n) {
          return this.request(
            ln(n || {}, { method: e, url: t, data: (n || {}).data })
          );
        };
      }),
        dt.forEach(["post", "put", "patch"], function (e) {
          function t(t) {
            return function (n, r, a) {
              return this.request(
                ln(a || {}, {
                  method: e,
                  headers: t ? { "Content-Type": "multipart/form-data" } : {},
                  url: n,
                  data: r,
                })
              );
            };
          }
          (pn.prototype[e] = t()), (pn.prototype[e + "Form"] = t(!0));
        });
      const mn = pn;
      class vn {
        constructor(e) {
          if ("function" !== typeof e)
            throw new TypeError("executor must be a function.");
          let t;
          this.promise = new Promise(function (e) {
            t = e;
          });
          const n = this;
          this.promise.then((e) => {
            if (!n._listeners) return;
            let t = n._listeners.length;
            for (; t-- > 0; ) n._listeners[t](e);
            n._listeners = null;
          }),
            (this.promise.then = (e) => {
              let t;
              const r = new Promise((e) => {
                n.subscribe(e), (t = e);
              }).then(e);
              return (
                (r.cancel = function () {
                  n.unsubscribe(t);
                }),
                r
              );
            }),
            e(function (e, r, a) {
              n.reason || ((n.reason = new Qt(e, r, a)), t(n.reason));
            });
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(e) {
          this.reason
            ? e(this.reason)
            : this._listeners
            ? this._listeners.push(e)
            : (this._listeners = [e]);
        }
        unsubscribe(e) {
          if (!this._listeners) return;
          const t = this._listeners.indexOf(e);
          -1 !== t && this._listeners.splice(t, 1);
        }
        static source() {
          let e;
          return {
            token: new vn(function (t) {
              e = t;
            }),
            cancel: e,
          };
        }
      }
      const gn = vn;
      const yn = {
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
      Object.entries(yn).forEach((e) => {
        let [t, n] = e;
        yn[n] = t;
      });
      const xn = yn;
      const bn = (function e(t) {
        const n = new mn(t),
          r = Ie(mn.prototype.request, n);
        return (
          dt.extend(r, mn.prototype, n, { allOwnKeys: !0 }),
          dt.extend(r, n, null, { allOwnKeys: !0 }),
          (r.create = function (n) {
            return e(ln(t, n));
          }),
          r
        );
      })(zt);
      (bn.Axios = mn),
        (bn.CanceledError = Qt),
        (bn.CancelToken = gn),
        (bn.isCancel = Yt),
        (bn.VERSION = cn),
        (bn.toFormData = bt),
        (bn.AxiosError = mt),
        (bn.Cancel = bn.CanceledError),
        (bn.all = function (e) {
          return Promise.all(e);
        }),
        (bn.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }),
        (bn.isAxiosError = function (e) {
          return dt.isObject(e) && !0 === e.isAxiosError;
        }),
        (bn.mergeConfig = ln),
        (bn.AxiosHeaders = Kt),
        (bn.formToJSON = (e) => Ft(dt.isHTMLForm(e) ? new FormData(e) : e)),
        (bn.getAdapter = rn),
        (bn.HttpStatusCode = xn),
        (bn.default = bn);
      const wn = bn,
        jn = (0, a.createContext)(),
        Sn = (e) => {
          let { children: t } = e;
          const [n, r] = (0, a.useState)([]),
            [o, i] = (0, a.useState)(localStorage.getItem("DOId")),
            [s, l] = (0, a.useState)([]);
          (0, a.useEffect)(() => {
            wn.get(
              "https://tkwbackendcdl.onrender.comDIO/execution?dioId=" + o
            ).then((e) => {
              l(e.data.combinedData);
            });
          }, [o]);
          const [c, u] = (0, a.useState)([]);
          (0, a.useEffect)(() => {
            const e = new EventSource(
              "".concat("https://tkwbackendcdl.onrender.com", "/events")
            );
            return (
              (e.onmessage = (e) => {
                const t = JSON.parse(e.data);
                ("NEW_EXECUTION" !== t.type &&
                  "UPDATED_EXECUTION" !== t.type) ||
                  l((e) => [...e, t.payload]);
              }),
              () => {
                e.close();
              }
            );
          }, [l]);
          const [d, h] = (0, a.useState)([]);
          return (0, Ee.jsx)(jn.Provider, {
            value: {
              tasks: n,
              addTask: (e) => {
                r((t) => [...t, e]);
              },
              dioTasks: s,
              addDIOTask: (e) => {
                l((t) => [...t, e]);
              },
              propositions: c,
              addProposition: (e) => {
                u((t) => [...t, e]);
              },
              prop: d,
              setProp: h,
              addProp: (e) => {
                h((t) => [...t, e]);
              },
              selectedDioId: o,
              selectDioId: (e) => {
                i(e);
              },
            },
            children: t,
          });
        },
        kn =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAApCAYAAABOScuyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAemSURBVHgB1VlpTFRXFD4DqAi4oYBowaU2Gpf6Q6Uu0WLc4m5do5hajbFRf9gYYyyNS4jGpLERavhh1EQqNUKjpGpjW00NBQEVI4IFKYgUpRSKlEWRTej3vXKnM2/eezOoadIvuZmZ98679zvnnnuWNyL/M9jkzcEWEBAQ1Nra2qe5uTmgc+42jHqMCoxmeQPwkddDEEYExmSbzTayR48evgMHDpTevXuLj4+PNDY2SkVFhdTU1HTgfgmuZbS0tORCvlBeEa9q4dEY60Bw3MyZM23Lli2TRYsWCcl6e3u7CFdXV8vt27fl7NmzcvXqVamsrCzH5SSMVIwO6QK6Srg3xsf9+vWbvnXrVtm1a5f07dv338lsxtN1dHTY7/N7cnKyREdHS0lJSSUuf4mRJx7CWzzHWC8vr883bNgw4sqVK7Jw4ULp2bOnJVmSa29v1+6p+/wcO3as7Nixg8oG3Lp1a9bLly99IJeP2+3uSHhq4Q/69++/8cyZMzJ//nyPHlBkoaSp5YlHjx7J3Llzpbi4uBQ/D2DUWM3rJe6xeujQoR/BEnayaovdwR1ZYtiwYXLv3j1ZsGDBUPyMwYENtJJ3Z+HVmDAqLS3NNnjwYBeyejLPnz+Xy5cvS05OjrS1tQkUlZUrV0pISIiTnKNPK8AtZO3atXL+/PmH2JlPcalJukh4YmhoaPS1a9d8Ro8ebV/IbJtjY2Pl4MGD8vTpU6frjBrr1q2To0ePCtzKkKwCo8nixYvlzp07PyCex0sXCPtjxMXHxwdv27bNTtb+kG6xJUuWyKVLl6R79+6apTj04NbfvHlTAgMDTV2FaxQUFMi0adM6mpqavsD4WS9j5sNRa9asCWboUhPRskZk9+zZo7kBYrIpWaK0tFRTjPetIsrIkSMZLm1IMFG43E0vZ2ThkG7dusXevXvXf8yYMdoFLmJklbKyMhk1apSdqBlZugUzH0jIhQsXhInGjDBl6+vrZerUqfLgwYOvMWeSo5yRhVcsX77cTlYTMtlCHBDtkwuZkeVziixJHTt2zIWoI1mCqb1zd9/HPZs7wpPWr1/vsqgRbty4ITgcWkQwA8mgGLKfgby8PKd7SlF9So+KihJfX9+3kFXHmxLGoRmHeqD/rFmzxB0UESuyRmDoU1BWNTIIUz4NB/nJYkYY2r43b9487bS7Sw5cZMCAAYb3SIJzGCEsLMxJziqxTJo0iUq9K2aEMUF4RESERxmKYMzUg/7KQVcxI+EOylWmTJlCwqGRkZE+hoQhGDhixAhTsvpIsHTpUi2bKdBiiDD2A6YH5923b59YgfOr5DRkyBBt2uzs7EBDwhDu61gu6jXmJI6Hg99Pnjxp31q6wYsXL0zJ7t69W4YPHy5mUM+pHfbz8xN0MdytAEPC0KyHv7+/y0RWVRcPKEkz7SIziRH4HGvnQ4cOGRb4hKNlHUtRkoYivoaE/1Gyw0ljTuTucKBGFlZzW7ZscSromf3mzJkj169fl8OHD5uSVWsaraOP73oWp9LT04OQy12Cuafgc+zj6MdBQUGMpW4PsVlBxOudTcInCKEl/OJkYUzcwILa4bd0FVx00KBB2mH0hKx6xkgGvZ/2CcVr7Zx0MmXosywnIVQ6dQcrV/Lk+fz8fO5y4+PHj/9S15zafLbimZmZkVaT0Ke4mHIV1rBsKnNzc6WwsFCePHmitfeU69Wrl+YW4eHhMmHCBK0VGj9+vMcdCzttyBaDl/0BJ/WDg4ND8A7hOEpBL9VhOMKxgOdBOnLkiKSmpmoEOxXWQhtTthlmzJghmzZt0moFJhijNdSuMHHcv38/8dmzZ8nqvpNLVFVVVYLQr3x/YDQRAYVk48aNMnv2bGH3rMjS4vRZHjYzkGBGRob2PN5nSFFRkRgZhJ8gyoK/HeR/cpRxOVUQyDx9+rRTkaJiJA8kw1RCQoJLB0LCZhlOKcSdUS6FaCQTJ06UxMREJ7LqkMbFxTFrZjc0NFQ7zaOfGA8+RF82E4nAn1uiJmOxziRBP9UpqLkBawfVlehByxq5Cn9fvHhRe0/BTkOR5cHfvHmzIIkdRzL6Q6wsDLTioRQG+vLycjthNpJsc/SgG7DEtDpItCpTthGo5Pbt2zWSynf37t3LHUmrra3N0ct7mSzwHaycu3PnTm0xukBWVpaLHIM63cCs21AwU0btDuMte0OC3XVSUlI13CHB6BnTNIYc/gtC1TRsid+JEye0w6aHlWU9KU8po3ya3TLrmJiYGJYHp7Ajhu/bLGeF9mNA6jNsW4B0AfRZd4dQTBSAHydCiWQzGctCAQ/+iYawFAtPx08vTqjaeXdkzWKxleVhoHMw0DmxgNvKBgtX4A1QFrYoAn7lZ+UGJMuTbtZtKJ81iiY4D19hrSRxA49KMWSaOvhXBiwbBsKhYkJWuYEVWb2bQMF6pPBoxP108QBdfgOPMBaJRT+ElewdqGo4aVmzboOtk+N9XGuDkt+ikf0G5WijeIhX+stg1apV3ikpKcwqK2Dxt9WbdSOoDprdCGVg0SrIf9+nT58fEXnqpYt47X+RkBEH19XVvcM/ZUAoHITCVA8Gq7bgkPLQ/g7FfoNFC0C8yLH6+s8JG+HAgQNaQtq/f3/H65Azwt8fwBZ2xlbJmgAAAABJRU5ErkJggg==",
        Nn = (e) => {
          let { dioData: t } = e;
          const { selectDioId: n } = (0, a.useContext)(jn),
            r = parseInt(localStorage.getItem("userId"), 10);
          return (0, Ee.jsx)("div", {
            className: "dio-list",
            children: t.map((e, t) =>
              (0, Ee.jsxs)(
                "div",
                {
                  className: "dio-item",
                  children: [
                    (0, Ee.jsxs)("div", {
                      className: "dio-text",
                      children: [
                        (0, Ee.jsx)("div", {
                          className: "type_do",
                          children: e.type,
                        }),
                        (0, Ee.jsx)("div", {
                          className: "do_name",
                          children: (0, Ee.jsxs)("h4", {
                            children: ["D.O. Name : ", e.name],
                          }),
                        }),
                        (0, Ee.jsx)("div", {
                          className: "do_description",
                          children: (0, Ee.jsx)("p", {
                            children: e.description,
                          }),
                        }),
                      ],
                    }),
                    (0, Ee.jsxs)("div", {
                      children: [
                        (0, Ee.jsx)("img", {
                          className: "photo_creator_do",
                          alt: "creatorDO",
                          src: kn,
                        }),
                        (0, Ee.jsxs)("div", {
                          className: "creator_do",
                          children: ["Creator \xa0: ", e.do_creator.name],
                        }),
                        (0, Ee.jsx)(ke, {
                          to: "/DIO",
                          children: (0, Ee.jsx)("button", {
                            className: "participate-button",
                            onClick: () => {
                              return (
                                (t = e.id),
                                (a = e.name),
                                (o = e.id_ceo),
                                n(t),
                                localStorage.setItem("DOId", t),
                                localStorage.setItem("DOName", a),
                                void (o === r
                                  ? localStorage.setItem("isCEO", "1")
                                  : localStorage.setItem("isCEO", "0"))
                              );
                              var t, a, o;
                            },
                            children: "Come in",
                          }),
                        }),
                      ],
                    }),
                  ],
                },
                e.id
              )
            ),
          });
        },
        Cn = n.p + "static/media/log-out.f290e57ed915d79cc380.png",
        Tn = (e) => {
          let {
            setShowBCTPopUp: t,
            setShowThanksPopUp: n,
            setShowCashPopUp: r,
            insideDO: o,
          } = e;
          const i = (0, a.useRef)(null),
            [s, l] = (0, a.useState)(!1),
            c = localStorage.getItem("userId"),
            [u, d] = (0, a.useState)(0),
            h = localStorage.getItem("DOId"),
            f = localStorage.getItem("do_ids");
          (0, a.useEffect)(() => {
            const e = (e) => {
              i.current && !i.current.contains(e.target) && l(!1);
            };
            return (
              document.addEventListener("mousedown", e),
              () => {
                document.removeEventListener("mousedown", e);
              }
            );
          }, [l]),
            (0, a.useEffect)(() => {
              (async () => {
                try {
                  let e;
                  o && c && h
                    ? (e = await wn.get(
                        ""
                          .concat(
                            "https://tkwbackendcdl.onrender.com",
                            "/thanks/"
                          )
                          .concat(c, "/")
                          .concat(h)
                      ))
                    : !o &&
                      c &&
                      (e = await wn.get(
                        ""
                          .concat(
                            "https://tkwbackendcdl.onrender.com",
                            "/thanks/"
                          )
                          .concat(c)
                      )),
                    e && d(e.data.totalThanks);
                } catch (e) {
                  console.error(
                    "Erreur lors de la r\xe9cup\xe9ration des thanks depuis le backend",
                    e
                  );
                }
              })();
            }, [c, h, f, o]);
          return (0, Ee.jsxs)("div", {
            className: "wallet-list",
            children: [
              (0, Ee.jsxs)("div", {
                children: [
                  (0, Ee.jsxs)("div", {
                    className: "row-container-above",
                    children: [
                      (0, Ee.jsx)("button", {
                        className: "row-item-above",
                        onClick: () => {
                          t(!0);
                        },
                        children: "My B.C.Ts  ",
                      }),
                      (0, Ee.jsx)("button", {
                        className: "row-item-above",
                        onClick: () => {
                          n(!0);
                        },
                        style: { backgroundColor: "#119b98" },
                        children: " My Thanks ",
                      }),
                      (0, Ee.jsx)("button", {
                        className: "row-item-above",
                        onClick: () => {
                          r(!0);
                        },
                        children: "My Cash",
                      }),
                    ],
                  }),
                  (0, Ee.jsxs)("div", {
                    className: "row-container",
                    children: [
                      (0, Ee.jsx)("div", {
                        className: "row-item",
                        style: { color: "red" },
                        children: "Not Yet ",
                      }),
                      (0, Ee.jsxs)("div", {
                        className: "row-item",
                        style: { backgroundColor: "#119b98" },
                        children: [" ", u, " "],
                      }),
                      (0, Ee.jsx)("div", {
                        className: "row-item",
                        style: { color: "red" },
                        children: "Not Yet",
                      }),
                    ],
                  }),
                ],
              }),
              (0, Ee.jsxs)("div", {
                children: [
                  (0, Ee.jsx)("button", {
                    className: "arrow-button",
                    onClick: () => {
                      l(!0);
                    },
                    children: (0, Ee.jsx)("img", {
                      style: {
                        height: "5.5vh",
                        width: "2.5vw",
                        marginTop: "2vh",
                      },
                      alt: "",
                      src: Cn,
                    }),
                  }),
                  s &&
                    (0, Ee.jsx)("div", {
                      className: "overlay",
                      children: (0, Ee.jsxs)("div", {
                        ref: i,
                        className: "submition-pop-up-work-peerreview",
                        children: [
                          (0, Ee.jsx)("div", {
                            className: "input-circle",
                            children: (0, Ee.jsx)("div", {
                              className: "span",
                              children: (0, Ee.jsx)("h1", {
                                style: {
                                  wordWrap: "break-word",
                                  fontFamily: "Kumbh Sans",
                                  fontSize: "2.2vw",
                                },
                                children: "Are you sure want to log out?",
                              }),
                            }),
                          }),
                          (0, Ee.jsxs)("div", {
                            className: "container-button-ceo",
                            children: [
                              (0, Ee.jsx)("button", {
                                className: "button1",
                                onClick: () => {
                                  l(!1);
                                },
                                children: "No",
                              }),
                              (0, Ee.jsx)("button", {
                                className: "button3",
                                onClick: () => {
                                  (window.location.href = "/login"), l(!1);
                                },
                                children: "Yes",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                ],
              }),
            ],
          });
        },
        En = (e) => {
          let { setShowThanksPopUp: t } = e;
          const n = (0, a.useRef)(null);
          return (
            (0, a.useEffect)(() => {
              const e = (e) => {
                n.current && !n.current.contains(e.target) && t(!1);
              };
              return (
                document.addEventListener("mousedown", e),
                () => {
                  document.removeEventListener("mousedown", e);
                }
              );
            }, [t]),
            (0, Ee.jsxs)("div", {
              ref: n,
              style: { padding: "3vh", height: "77vh" },
              className: "thanks-pop-up",
              children: [
                (0, Ee.jsx)("div", {
                  style: {
                    fontFamily: "Kumbh Sans",
                    fontSize: "2.7vh",
                    fontWeight: "700",
                    marginLeft: "2vw",
                    marginTop: "0vh",
                  },
                  children: 'The "Thanks" concept in simple terms',
                }),
                (0, Ee.jsxs)("div", {
                  style: {
                    fontFamily: "Kumbh Sans",
                    fontSize: "2.2vh",
                    marginLeft: "2vw",
                  },
                  children: [
                    "1. Recognizes and values your contributions",
                    (0, Ee.jsx)("br", {}),
                    "2. It's built on principles of universality, fairness, and freedom",
                    (0, Ee.jsx)("br", {}),
                    "3. Offers a pathway to reward your engagement with prosperity",
                    (0, Ee.jsx)("br", {}),
                    (0, Ee.jsx)("br", {}),
                  ],
                }),
                (0, Ee.jsx)("div", {
                  style: {
                    fontFamily: "Kumbh Sans",
                    fontSize: "2.2vh",
                    fontWeight: "700",
                    marginLeft: "2vw",
                  },
                  children: "Moreover",
                }),
                (0, Ee.jsxs)("div", {
                  style: {
                    fontFamily: "Kumbh Sans",
                    fontSize: "2.2vh",
                    marginLeft: "2vw",
                  },
                  children: [
                    "Thanks are a universal way to recognize and appreciate an individual's cognitive and behavioral contributions within a Digital Organization.",
                    (0, Ee.jsx)("br", {}),
                    (0, Ee.jsx)("br", {}),
                    "In concrete terms, you can earn Thanks in many ways by contributing to an organization's needs. More specifically, Thanks reward creativity,",
                    (0, Ee.jsx)("br", {}),
                    "execution, recruitment, leadership, and feedback \u2014 the 20% of human input that generates 80% of an organization's value.",
                    (0, Ee.jsx)("br", {}),
                    (0, Ee.jsx)("br", {}),
                    "It's also a key factor in determining Cash and BCT rewards within a \"Digital Organization with Twin at Stake - DOTS.\u201c",
                    (0, Ee.jsx)("br", {}),
                    (0, Ee.jsx)("br", {}),
                    'For now, MKIF has established its "Digital Organization with Twin at Stake - DOTS" and offers you the chance to earn Cash and BCT based on',
                    (0, Ee.jsx)("br", {}),
                    "your Thanks.",
                    (0, Ee.jsx)("br", {}),
                    (0, Ee.jsx)("br", {}),
                    "Invite your friends and quickly earn Thanks from MKIF.",
                    (0, Ee.jsx)("br", {}),
                    (0, Ee.jsx)("br", {}),
                    "You can also earn more MKIF Thanks by joining as a Talent, with a stake of 10% in MKIF's capital and unlimited Cash based on merit!",
                    (0, Ee.jsx)("br", {}),
                    (0, Ee.jsx)("br", {}),
                    "Send your resume along with 2 or 3 sentences about your potential contributions to: ",
                    (0, Ee.jsx)("a", {
                      href: "mailto:talent@thankward.com",
                      children: "talent@thankward.com",
                    }),
                    (0, Ee.jsx)("br", {}),
                    (0, Ee.jsx)("br", {}),
                    "Soon, the Thankward model will be available to all organizations to reward their Talents in BCT and Cash based on their individual Thanks.",
                  ],
                }),
              ],
            })
          );
        },
        _n = (e) => {
          let { setShowBCTPopUp: t } = e;
          const n = (0, a.useRef)(null);
          return (
            (0, a.useEffect)(() => {
              const e = (e) => {
                n.current && !n.current.contains(e.target) && t(!1);
              };
              return (
                document.addEventListener("mousedown", e),
                () => {
                  document.removeEventListener("mousedown", e);
                }
              );
            }, [t]),
            (0, Ee.jsxs)("div", {
              ref: n,
              className: "thanks-pop-up",
              children: [
                (0, Ee.jsx)("div", {
                  style: {
                    fontFamily: "Kumbh Sans",
                    fontSize: "2.6vh",
                    fontWeight: "700",
                    marginLeft: "2vw",
                    marginTop: "0vh",
                  },
                  children: 'The \u201cBCT" concept in simple terms',
                }),
                (0, Ee.jsxs)("div", {
                  style: {
                    fontFamily: "Kumbh Sans",
                    fontSize: "2.15vh",
                    marginLeft: "2vw",
                  },
                  children: [
                    "1. Easily become a partner in your company's success",
                    (0, Ee.jsx)("br", {}),
                    "2. Guaranteed, liquid, and achieved through talent",
                    (0, Ee.jsx)("br", {}),
                    "3. Bold, smart, and set to make history.",
                    (0, Ee.jsx)("br", {}),
                    (0, Ee.jsx)("br", {}),
                  ],
                }),
                (0, Ee.jsx)("div", {
                  style: {
                    fontFamily: "Kumbh Sans",
                    fontSize: "2.15vh",
                    fontWeight: "700",
                    marginLeft: "2vw",
                  },
                  children: "Moreover",
                }),
                (0, Ee.jsxs)("div", {
                  style: {
                    fontFamily: "Kumbh Sans",
                    fontSize: "2.15vh",
                    marginLeft: "2vw",
                  },
                  children: [
                    'Backed Cognition Token (BCT) represents a stake in a company that operates under the "Digital Organization with Twin at Stake - DOTS" model. It\'s a way of',
                    (0, Ee.jsx)("br", {}),
                    "owning a piece of the company's future, with the BCT linked to the company's capital and financial performance. By holding BCT, you benefit from the",
                    (0, Ee.jsx)("br", {}),
                    "company's growth through a unique system. This financial stake comes on top of the Cash you receive as a reward for your contributions.",
                    (0, Ee.jsx)("br", {}),
                    "Essentially, the company is funded through this innovative model, combining direct financial rewards with equity-like tokens.",
                    (0, Ee.jsx)("br", {}),
                    (0, Ee.jsx)("br", {}),
                    "Here\u2019s a straightforward example:",
                    (0, Ee.jsx)("br", {}),
                    "\u2022You've just earned your first Thanks from MKIF, the creator of Thankward.",
                    (0, Ee.jsx)("br", {}),
                    "\u2022You can earn more MKIF Thanks by referring friends who create or join Digital Organizations - DOs.",
                    (0, Ee.jsx)("br", {}),
                    "\u2022Once you have enough Thanks, you'll receive your first MKIF BCT.",
                    (0, Ee.jsx)("br", {}),
                    "\u2022To issue BCT, MKIF has secured 5% of its capital with a Foundation.",
                    (0, Ee.jsx)("br", {}),
                    "\u2022Each of your BCTs starts with a value of \u20ac10.",
                    (0, Ee.jsx)("br", {}),
                    "\u2022MKIF is committed to buying them back:",
                    (0, Ee.jsx)("br", {}),
                    "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\u2022 After a 5-year vesting period, if you request it, for \u20ac10 per BCT.",
                    (0, Ee.jsx)("br", {}),
                    "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\u2022 If a major company buys MKIF in 3 years and the value of the secured capital increases 300-fold, each BCT could be worth \u20ac3000.",
                    (0, Ee.jsx)("br", {}),
                    "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\u2022 In the near future, a BCT Exchange will allow you to sell them anytime to investors at a mutually agreeable price.",
                    (0, Ee.jsx)("br", {}),
                    (0, Ee.jsx)("br", {}),
                    'Currently, only MKIF has established its "Digital Organization with Twin at Stake - DOTS" and offers BCT based on your Thanks.',
                    (0, Ee.jsx)("br", {}),
                    (0, Ee.jsx)("br", {}),
                    "Invite your friends to take advantage of this, as the number of BCT available is limited!",
                    (0, Ee.jsx)("br", {}),
                    (0, Ee.jsx)("br", {}),
                    "You can earn additional MKIF BCT by joining as Talent, with a further 10% stake in MKIF's capital. Here again, the number of BCT is limited.",
                    (0, Ee.jsx)("br", {}),
                    "Send your resume along with 2 or 3 sentences about your potential contributions to: ",
                    (0, Ee.jsx)("a", {
                      href: "mailto:talent@thankward.com",
                      children: "talent@thankward.com",
                    }),
                    (0, Ee.jsx)("br", {}),
                    (0, Ee.jsx)("br", {}),
                    "Soon, the Thankward model will be offered to all organizations to provide their own BCT to their Talents.",
                  ],
                }),
              ],
            })
          );
        },
        On = (e) => {
          let { setShowCashPopUp: t } = e;
          const n = (0, a.useRef)(null);
          return (
            (0, a.useEffect)(() => {
              const e = (e) => {
                n.current && !n.current.contains(e.target) && t(!1);
              };
              return (
                document.addEventListener("mousedown", e),
                () => {
                  document.removeEventListener("mousedown", e);
                }
              );
            }, [t]),
            (0, Ee.jsxs)("div", {
              ref: n,
              className: "thanks-pop-up",
              children: [
                (0, Ee.jsx)("div", {
                  style: {
                    fontFamily: "Kumbh Sans",
                    fontSize: "2.6vh",
                    fontWeight: "700",
                    marginLeft: "2vw",
                    marginTop: "0vh",
                  },
                  children: 'The \u201cCash" concept in simple terms',
                }),
                (0, Ee.jsxs)("div", {
                  style: {
                    fontFamily: "Kumbh Sans",
                    fontSize: "2.15vh",
                    marginLeft: "2vw",
                  },
                  children: [
                    "1. Merit-based revenue sharing system",
                    (0, Ee.jsx)("br", {}),
                    "2. Allows a company to pay what it can, when it can",
                    (0, Ee.jsx)("br", {}),
                    "3. But turns you into a lifelong income earner",
                    (0, Ee.jsx)("br", {}),
                    (0, Ee.jsx)("br", {}),
                  ],
                }),
                (0, Ee.jsx)("div", {
                  style: {
                    fontFamily: "Kumbh Sans",
                    fontSize: "2.15vh",
                    fontWeight: "700",
                    marginLeft: "2vw",
                  },
                  children: "Moreover",
                }),
                (0, Ee.jsxs)("div", {
                  style: {
                    fontFamily: "Kumbh Sans",
                    fontSize: "2.15vh",
                    marginLeft: "2vw",
                  },
                  children: [
                    "When you earn Thanks in a Digital Organization with Twin at Stake - DOTS, you receive a monetary reward that accumulates over time. This reward is",
                    (0, Ee.jsx)("br", {}),
                    "ongoing for the life of the DOTS, calculated each month based on available funds and your merit, and it adds to the BCT you also earn through your",
                    (0, Ee.jsx)("br", {}),
                    "Thanks.",
                    (0, Ee.jsx)("br", {}),
                    (0, Ee.jsx)("br", {}),
                    "Here\u2019s a simple explanation:",
                    (0, Ee.jsx)("br", {}),
                    (0, Ee.jsx)("br", {}),
                    "\u2022 You've earned your first Thanks from the MKIF organization, which created Thankward.",
                    (0, Ee.jsx)("br", {}),
                    "\u2022 You can earn more Thanks from MKIF by referring friends who create or join Digital Organizations - DOs.",
                    (0, Ee.jsx)("br", {}),
                    "\u2022 At the start of each month, MKIF commits a certain amount of Cash to be distributed among those holding Thanks and BCT of its DOTS - Thankward. If",
                    (0, Ee.jsx)("br", {}),
                    "\xa0\xa0\xa0there's no money available, the amount is zero; otherwise, the potential reward is substantial.",
                    (0, Ee.jsx)("br", {}),
                    "\u2022 The CEO of MKIF's compensation formula is the same as yours. If the CEO receives Cash, all holders of Thanks and BCT from DOTS - Thankward benefit",
                    (0, Ee.jsx)("br", {}),
                    "\xa0\xa0\xa0proportionally to their contributions.",
                    (0, Ee.jsx)("br", {}),
                    (0, Ee.jsx)("br", {}),
                    'Currently, MKIF is the only organization that has established its "Digital Organization with Twin at Stake - DOTS" and offers Cash based on your Thanks.',
                    (0, Ee.jsx)("br", {}),
                    (0, Ee.jsx)("br", {}),
                    "Invite your friends and simply earn unlimited Cash!",
                    (0, Ee.jsx)("br", {}),
                    (0, Ee.jsx)("br", {}),
                    "Another way to earn recurring and perpetual Cash from MKIF is to become a Talent of its DOTS Thankward!",
                    (0, Ee.jsx)("br", {}),
                    (0, Ee.jsx)("br", {}),
                    "Send your resume along with 2 or 3 sentences about your potential contributions to: ",
                    (0, Ee.jsx)("a", {
                      href: "mailto:talent@thankward.com",
                      children: "talent@thankward.com",
                    }),
                    (0, Ee.jsx)("br", {}),
                    (0, Ee.jsx)("br", {}),
                    "Soon, the Thankward model will be available to all organizations to reward their Talents based on merit by sharing all available cash with them.",
                  ],
                }),
              ],
            })
          );
        },
        In = () => {
          const [e, t] = (0, a.useState)([]),
            [n, r] = (0, a.useState)(!1),
            [o, i] = (0, a.useState)(!1),
            [s, l] = (0, a.useState)(!1);
          return (
            (0, a.useEffect)(() => {
              const e = localStorage.getItem("userId");
              wn.get(
                ""
                  .concat("https://tkwbackendcdl.onrender.com", "/DIO/dioData/")
                  .concat(e)
              )
                .then((e) => {
                  const n = e.data.map((e) => ({
                    id: e.id,
                    name: e.nom_do,
                    description: e.do_description,
                    type: e.type,
                    id_ceo: e.id_ceo,
                    do_creator: {
                      name: e.do_creator_name,
                      first_name: e.do_creator_first_name,
                    },
                    member: {
                      name: e.member_name,
                      email: e.member_email,
                      first_name: e.member_first_name,
                      phone: e.member_phone,
                      address: e.member_adresse,
                    },
                  }));
                  console.log(n), t(n);
                })
                .catch((e) => {
                  console.error("Error fetching DIO data:", e);
                });
            }, []),
            (0, Ee.jsxs)("div", {
              className: "App",
              children: [
                (0, Ee.jsx)(Oe, {}),
                (0, Ee.jsxs)("div", {
                  className: "main-content",
                  children: [
                    (0, Ee.jsx)(Tn, {
                      setShowBCTPopUp: r,
                      setShowThanksPopUp: i,
                      setShowCashPopUp: l,
                      insideDO: !1,
                    }),
                    n && (0, Ee.jsx)(_n, { setShowBCTPopUp: r }),
                    o && (0, Ee.jsx)(En, { setShowThanksPopUp: i }),
                    s && (0, Ee.jsx)(On, { setShowCashPopUp: l }),
                    (0, Ee.jsx)("h4", {
                      className: "titre",
                      children: "My Digital Organizations (DO)",
                    }),
                    (0, Ee.jsx)("div", {
                      className: "diolist-container",
                      children: (0, Ee.jsx)(Nn, {
                        className: "diolist",
                        dioData: e,
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        Dn = () => {
          const [e, t] = (0, a.useState)(!1),
            [n, r] = (0, a.useState)(!1),
            [o, i] = (0, a.useState)(!1),
            [s, l] = (0, a.useState)(""),
            [c, u] = (0, a.useState)(""),
            [d, h] = (0, a.useState)(""),
            f = localStorage.getItem("userName"),
            p = localStorage.getItem("userId"),
            [m, v] = (0, a.useState)(0),
            [g, y] = (0, a.useState)(""),
            [x, b] = (0, a.useState)(""),
            [w, j] = (0, a.useState)(""),
            [S, k] = (0, a.useState)(""),
            [N, C] = (0, a.useState)(""),
            [T, E] = (0, a.useState)(""),
            [_, O] = (0, a.useState)(""),
            [I, D] = (0, a.useState)("".concat(f, " invites you to Thankward")),
            [P, R] = (0, a.useState)(
              "Hi "
                .concat(
                  c,
                  ",\nJoin me on Thankward to explore an amazing experience of collaboration.\nYou'll see, it's easy, and we earn lots of Thanks, the future of appreciation-based rewards.\nYou'll receive your password in a separate message.\nFollow the link below to sign up with your email address: "
                )
                .concat(s, "\nwww.thanksandshare.com\nSee you soon!")
            ),
            [F, L] = (0, a.useState)(
              "".concat(f, " invites you to ").concat(x)
            ),
            [z, A] = (0, a.useState)(
              "Hi "
                .concat(c, ',\nJoin me at "')
                .concat(
                  x,
                  '," an exceptional Digital Organization where you can thrive in a great\nteam and contribute to an exciting project.\nSee you soon!"\nwww.thanksandshare.com'
                )
            );
          (0, a.useEffect)(() => {
            D("".concat(f, " invites you to Thankward")),
              L("".concat(f, " invites you to ").concat(x)),
              R(
                "Hi "
                  .concat(c, " ")
                  .concat(
                    d,
                    ",\n  Join me on Thankward to explore an amazing experience of collaboration.\n  You'll see, it's easy, and we earn lots of Thanks, the future of appreciation-based rewards.\n  You'll receive your password in a separate message.\n  Follow the link below to sign up with your email address: "
                  )
                  .concat(s, "\n  www.thanksandshare.com\n  See you soon!")
              ),
              A(
                "Hi "
                  .concat(c, ',\n  Join me at "')
                  .concat(
                    x,
                    '," an exceptional Digital Organization where you can thrive in a great\n  team and contribute to an exciting project.\n  See you soon!"\n  www.thanksandshare.com'
                  )
              );
          }, [c, d, s, f, x]),
            0 === m && window.history.pushState({ question: 0 }, "");
          (0, a.useEffect)(() => {
            D("".concat(f, " invites you to Thankward")),
              R(
                "Hi "
                  .concat(c, " ")
                  .concat(
                    d,
                    ",\n  Join me on Thankward to explore an amazing experience of collaboration.\n  You'll see, it's easy, and we earn lots of Thanks, the future of appreciation-based rewards.\n  You'll receive your password in a separate message.\n  Follow the link below to sign up with your email address: "
                  )
                  .concat(s, "\n  www.thanksandshare.com\n  See you soon!")
              );
          }, [c, d, s, f]);
          (0, a.useEffect)(() => {
            const e = localStorage.getItem("userId");
            wn.get(
              ""
                .concat("https://tkwbackendcdl.onrender.com", "/DIO/dioData/")
                .concat(e)
            )
              .then((e) => {
                const t = e.data.map((e) => ({
                  id: e.id,
                  name: e.nom_do,
                  description: e.do_description,
                  type: e.type,
                  id_ceo: e.id_ceo,
                  do_creator: {
                    name: e.do_creator_name,
                    first_name: e.do_creator_first_name,
                  },
                  member: {
                    name: e.member_name,
                    email: e.member_email,
                    first_name: e.member_first_name,
                    phone: e.member_phone,
                    address: e.member_adresse,
                  },
                }));
                console.log(t);
              })
              .catch((e) => {
                console.error("Error fetching DIO data:", e);
              });
          }, []),
            (0, a.useEffect)(() => {
              const e = () => {
                const e = window.history.state;
                console.log(e.question),
                  e &&
                    void 0 !== e.question &&
                    (5 === e.question ? (v(0), console.log("yes")) : v(m - 1));
              };
              return (
                window.addEventListener("popstate", e),
                () => {
                  window.removeEventListener("popstate", e);
                }
              );
            }, [m]),
            console.log(_);
          const { selectDioId: U } = (0, a.useContext)(jn);
          return (0, Ee.jsxs)("div", {
            className: "App",
            children: [
              (0, Ee.jsx)(Oe, {}),
              (0, Ee.jsxs)("div", {
                className: "main-content-cretedo",
                children: [
                  (0, Ee.jsx)(Tn, {
                    setShowBCTPopUp: t,
                    setShowThanksPopUp: r,
                    setShowCashPopUp: i,
                    insideDO: !1,
                  }),
                  e && (0, Ee.jsx)(_n, { setShowBCTPopUp: t }),
                  n && (0, Ee.jsx)(En, { setShowThanksPopUp: r }),
                  o && (0, Ee.jsx)(On, { setShowCashPopUp: i }),
                  (0, Ee.jsx)("div", {
                    className: "actions_createdo",
                    children:
                      0 === m
                        ? (0, Ee.jsxs)(Ee.Fragment, {
                            children: [
                              (0, Ee.jsxs)("p", {
                                className: "create-do",
                                children: [
                                  "A Digital Organization is created to empower your community",
                                  (0, Ee.jsx)("br", {}),
                                  " to achieve what matters to you, together.",
                                  (0, Ee.jsx)("br", {}),
                                  "And yes, there are Rewards for your initiative !",
                                ],
                              }),
                              (0, Ee.jsxs)("div", {
                                className: "explain-do",
                                children: [
                                  (0, Ee.jsx)("div", {
                                    style: {
                                      fontFamily: "Kumbh Sans",
                                      fontSize: "3vh",
                                      fontWeight: "700",
                                      marginLeft: "2vw",
                                      marginTop: "1vh",
                                    },
                                    children: "In the D.O. you're building:",
                                  }),
                                  (0, Ee.jsxs)("div", {
                                    style: {
                                      fontFamily: "Kumbh Sans",
                                      marginLeft: "2vw",
                                    },
                                    children: [
                                      "For every 100 Thanks your team earns, you receive 5 Thanks.",
                                      (0, Ee.jsx)("br", {}),
                                      (0, Ee.jsx)("br", {}),
                                    ],
                                  }),
                                  (0, Ee.jsx)("div", {
                                    style: {
                                      fontFamily: "Kumbh Sans",
                                      fontSize: "3vh",
                                      fontWeight: "700",
                                      marginLeft: "2vw",
                                    },
                                    children:
                                      "From MKIF, the company behind Thankward:",
                                  }),
                                  (0, Ee.jsxs)("div", {
                                    style: {
                                      fontFamily: "Kumbh Sans",
                                      marginLeft: "2vw",
                                    },
                                    children: [
                                      "When your D.O. is active, you earn 10 Thanks.",
                                      (0, Ee.jsx)("br", {}),
                                      "Each time your team accumulates 10k verified Thanks, you earn 10 Thanks.",
                                      (0, Ee.jsx)("br", {}),
                                      "You receive a special bonus of 100 Thanks whenever your team reaches 100k verified",
                                      (0, Ee.jsx)("br", {}),
                                      "Thanks.",
                                    ],
                                  }),
                                ],
                              }),
                              (0, Ee.jsx)("button", {
                                className: "start-create-do",
                                onClick: () => v(1),
                                children: "Start",
                              }),
                            ],
                          })
                        : 1 === m
                        ? (0, Ee.jsxs)(Ee.Fragment, {
                            children: [
                              (0, Ee.jsx)("p", {
                                className: "create-do",
                                children:
                                  "First, describe your D.O.\u2019s activity and purpose",
                              }),
                              (0, Ee.jsx)("textarea", {
                                className: "what-will-you-do",
                                placeholder: "What will you do and why ?",
                                onChange: (e) => y(e.target.value),
                                value: g,
                              }),
                              (0, Ee.jsx)("button", {
                                className: "start-create-do",
                                onClick: () => {
                                  "" !== g.trim()
                                    ? (v(m + 1),
                                      window.history.pushState(
                                        { question: m + 1 },
                                        ""
                                      ))
                                    : alert(
                                        "Please describe your D.O.\u2019s activity."
                                      );
                                },
                                children: "Next",
                              }),
                            ],
                          })
                        : 2 === m
                        ? (0, Ee.jsxs)(Ee.Fragment, {
                            children: [
                              (0, Ee.jsx)("p", {
                                className: "create-do",
                                children:
                                  "What Is the name of your Digital Organization?",
                              }),
                              (0, Ee.jsx)("input", {
                                style: { height: "10vh" },
                                className: "what-will-you-do",
                                onChange: (e) => b(e.target.value),
                                value: x,
                                placeholder: "Choose your D.O.\u2019sTitle",
                              }),
                              (0, Ee.jsx)("button", {
                                className: "start-create-do",
                                onClick: () => {
                                  "" !== x.trim()
                                    ? (v(m + 1),
                                      window.history.pushState(
                                        { question: m + 1 },
                                        ""
                                      ))
                                    : alert("Please give a name for your D.O.");
                                },
                                children: "Next",
                              }),
                            ],
                          })
                        : 3 === m
                        ? (0, Ee.jsxs)(Ee.Fragment, {
                            children: [
                              (0, Ee.jsx)("p", {
                                className: "create-do",
                                children: "Who will Lead your D.O.?",
                              }),
                              (0, Ee.jsx)("button", {
                                style: { backgroundColor: "#71d0d9" },
                                className: "start-create-do",
                                onClick: () => v(4),
                                children: "I will do",
                              }),
                              (0, Ee.jsxs)("button", {
                                style: { backgroundColor: "gray" },
                                className: "start-create-do",
                                children: [
                                  "Someone else",
                                  (0, Ee.jsx)("span", {
                                    style: {
                                      color: "red",
                                      fontSize: "1.5vh",
                                      marginLeft: "1vw",
                                    },
                                    children: "Soon",
                                  }),
                                ],
                              }),
                              (0, Ee.jsx)("p", {
                                className: "create-do",
                                children:
                                  '"You can soon make adjustments and refine your governance."',
                              }),
                            ],
                          })
                        : 4 === m
                        ? (0, Ee.jsxs)(Ee.Fragment, {
                            children: [
                              (0, Ee.jsx)("p", {
                                className: "create-do",
                                children:
                                  "For what type of activity are you creating this DO ?",
                              }),
                              (0, Ee.jsx)("button", {
                                style: { backgroundColor: "#71d0d9" },
                                className: "start-create-do",
                                onClick: () => {
                                  j("NonProfit"),
                                    v(m + 1),
                                    window.history.pushState(
                                      { question: m + 1 },
                                      ""
                                    );
                                },
                                children: "Non-Profit",
                              }),
                              (0, Ee.jsx)("button", {
                                style: { backgroundColor: "#71d0d9" },
                                className: "start-create-do",
                                onClick: () => {
                                  j("Profit"),
                                    v(m + 1),
                                    window.history.pushState(
                                      { question: m + 1 },
                                      ""
                                    );
                                },
                                children: "Profit",
                              }),
                              (0, Ee.jsx)("button", {
                                style: { backgroundColor: "#71d0d9" },
                                className: "start-create-do",
                                onClick: () => {
                                  j("Academic"),
                                    v(m + 1),
                                    window.history.pushState(
                                      { question: m + 1 },
                                      ""
                                    );
                                },
                                children: "Academic",
                              }),
                            ],
                          })
                        : 5 === m
                        ? (0, Ee.jsxs)(Ee.Fragment, {
                            children: [
                              (0, Ee.jsx)("p", {
                                className: "create-do",
                                children:
                                  "Add a link to learn more about your D.O.",
                              }),
                              (0, Ee.jsx)("input", {
                                style: { height: "10vh" },
                                className: "what-will-you-do",
                                onChange: (e) => k(e.target.value),
                                value: S,
                                placeholder:
                                  "Website,Pitch Deck on your cloud...",
                              }),
                              (0, Ee.jsx)("button", {
                                style: { backgroundColor: "#71d0d9" },
                                className: "start-create-do",
                                onClick: () => {
                                  v(m + 1),
                                    window.history.pushState(
                                      { question: m + 1 },
                                      ""
                                    );
                                },
                                children: "Next",
                              }),
                            ],
                          })
                        : 6 === m
                        ? (0, Ee.jsxs)(Ee.Fragment, {
                            children: [
                              (0, Ee.jsx)("p", {
                                className: "create-do",
                                children:
                                  "Keywords about your activity and needs",
                              }),
                              (0, Ee.jsx)("input", {
                                style: { height: "25vh" },
                                className: "what-will-you-do",
                                onChange: (e) => C(e.target.value),
                                value: N,
                                placeholder: "Values, sector, activities...",
                              }),
                              (0, Ee.jsx)("button", {
                                style: { backgroundColor: "#71d0d9" },
                                className: "start-create-do",
                                onClick: () => {
                                  v(m + 1),
                                    window.history.pushState(
                                      { question: m + 1 },
                                      ""
                                    );
                                },
                                children: "Next",
                              }),
                            ],
                          })
                        : 7 === m
                        ? (0, Ee.jsxs)(Ee.Fragment, {
                            children: [
                              (0, Ee.jsx)("p", {
                                className: "create-do",
                                children:
                                  "What would it take to make it successful ?",
                              }),
                              (0, Ee.jsx)("input", {
                                style: { height: "30vh" },
                                className: "what-will-you-do",
                                onChange: (e) => E(e.target.value),
                                value: T,
                                placeholder: "Talents, money, luck \u263a...",
                              }),
                              (0, Ee.jsx)("button", {
                                style: { backgroundColor: "#71d0d9" },
                                className: "start-create-do",
                                onClick: () => {
                                  const e = {
                                    nameDO: x,
                                    descriptionDO: g,
                                    CeoDoId: p,
                                    typeActivityDO: w,
                                    linkDO: S,
                                    keywordsDO: N,
                                    makeitbetterDO: T,
                                  };
                                  fetch(
                                    "https://tkwbackendcdl.onrender.comCreateSponsorizeDO/createDO",
                                    {
                                      method: "POST",
                                      headers: {
                                        "Content-Type": "application/json",
                                      },
                                      body: JSON.stringify(e),
                                    }
                                  )
                                    .then((e) => {
                                      console.log("here"),
                                        console.log(e),
                                        wn
                                          .get(
                                            ""
                                              .concat(
                                                "https://tkwbackendcdl.onrender.com",
                                                "/CreateSponsorizeDO/infoDOcreated?userId="
                                              )
                                              .concat(p, "&nameDo=")
                                              .concat(x)
                                          )
                                          .then((e) => {
                                            const t = e.data;
                                            console.log(t),
                                              t && t.length > 0
                                                ? (O(t[0].id), console.log(2))
                                                : console.error(
                                                    "No data received from the server"
                                                  );
                                          })
                                          .catch((e) =>
                                            console.error(
                                              "Error fetching data:",
                                              e
                                            )
                                          );
                                    })
                                    .catch((e) => {
                                      console.error(
                                        "Erreur lors de la creation de DO :",
                                        e
                                      );
                                    }),
                                    v(m + 1),
                                    window.history.pushState(
                                      { question: m + 1 },
                                      ""
                                    );
                                },
                                children: "Next",
                              }),
                            ],
                          })
                        : 8 === m
                        ? (0, Ee.jsxs)(Ee.Fragment, {
                            children: [
                              (0, Ee.jsxs)("p", {
                                className: "create-do",
                                children: [
                                  "Congratulations on creating your D.O.!  Well done!",
                                  (0, Ee.jsx)("br", {}),
                                  "To make it active, recruit Talent to help achieve your goals.",
                                  (0, Ee.jsx)("br", {}),
                                  "And yes, there are Rewards for Co-opting Talent!",
                                ],
                              }),
                              (0, Ee.jsxs)("div", {
                                className: "explain-do",
                                children: [
                                  (0, Ee.jsx)("div", {
                                    style: {
                                      fontFamily: "Kumbh Sans",
                                      fontSize: "3vh",
                                      fontWeight: "700",
                                      marginLeft: "2vw",
                                      marginTop: "1vh",
                                    },
                                    children:
                                      "In the D.O. for which you are co-opting:",
                                  }),
                                  (0, Ee.jsxs)("div", {
                                    style: {
                                      fontFamily: "Kumbh Sans",
                                      marginLeft: "2vw",
                                    },
                                    children: [
                                      "For every 100 Thanks your Co-opted Talent earns, you receive 5 Thanks.",
                                      (0, Ee.jsx)("br", {}),
                                      (0, Ee.jsx)("br", {}),
                                    ],
                                  }),
                                  (0, Ee.jsx)("div", {
                                    style: {
                                      fontFamily: "Kumbh Sans",
                                      fontSize: "3vh",
                                      fontWeight: "700",
                                      marginLeft: "2vw",
                                    },
                                    children:
                                      "From MKIF, the company behind Thankward:",
                                  }),
                                  (0, Ee.jsxs)("div", {
                                    style: {
                                      fontFamily: "Kumbh Sans",
                                      marginLeft: "2vw",
                                    },
                                    children: [
                                      "When your Co-opted Talent joins the first time, you earn 1 Thanks.",
                                      (0, Ee.jsx)("br", {}),
                                      "Each time your Co-opted Talent accumulates 1k verified Thanks; you earn 1 Thanks.",
                                      (0, Ee.jsx)("br", {}),
                                      "You receive a special bonus of 20 Thanks whenever your Co-opted Talent reaches 10k",
                                      (0, Ee.jsx)("br", {}),
                                      "verified Thanks.",
                                    ],
                                  }),
                                ],
                              }),
                              (0, Ee.jsx)("button", {
                                style: { backgroundColor: "#71d0d9" },
                                className: "start-create-do",
                                onClick: () => {
                                  const e = {
                                    id_membre: p,
                                    id_do: _,
                                    sponsored: "0",
                                  };
                                  localStorage.setItem("sponsored", "0"),
                                    fetch(
                                      "https://tkwbackendcdl.onrender.comCreateSponsorizeDO/addDOtoCreator",
                                      {
                                        method: "POST",
                                        headers: {
                                          "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify(e),
                                      }
                                    )
                                      .then((e) => {
                                        200 === e.status &&
                                          e.json().then((e) => {
                                            localStorage.setItem(
                                              "do_ids",
                                              e.do_ids
                                            );
                                          });
                                      })
                                      .catch((e) => {
                                        console.error(
                                          "Erreur lors de la creation de DO :",
                                          e
                                        );
                                      }),
                                    v(m + 1),
                                    window.history.pushState(
                                      { question: m + 1 },
                                      ""
                                    );
                                },
                                children: "Start",
                              }),
                            ],
                          })
                        : 9 === m
                        ? (0, Ee.jsxs)(Ee.Fragment, {
                            children: [
                              (0, Ee.jsxs)("p", {
                                style: {
                                  marginBottom: "0vh",
                                  fontFamily: "Kumbh Sans",
                                },
                                className: "coopt-text",
                                children: [
                                  "Co-opting Talents is an excellent idea; it boosts your Team and accelerate your success.",
                                  (0, Ee.jsx)("br", {}),
                                  " ",
                                  (0, Ee.jsx)("br", {}),
                                  (0, Ee.jsx)("br", {}),
                                ],
                              }),
                              (0, Ee.jsxs)("div", {
                                style: { display: "flex", marginTop: "15vh" },
                                children: [
                                  (0, Ee.jsxs)("div", {
                                    style: { display: "flex" },
                                    className: "email-create-do",
                                    children: [
                                      (0, Ee.jsx)("div", {
                                        style: {
                                          marginRight: "1vh",
                                          marginTop: "3vh",
                                          fontSize: "3vh",
                                        },
                                        children: "Email",
                                      }),
                                      (0, Ee.jsx)("input", {
                                        placeholder:
                                          "Talent\u2019s email please",
                                        onChange: (e) => l(e.target.value),
                                        value: s,
                                        style: {
                                          marginLeft: "3vw",
                                          width: "20vw",
                                          fontFamily: "Kumbh Sans",
                                        },
                                      }),
                                    ],
                                  }),
                                  (0, Ee.jsx)("button", {
                                    style: {
                                      marginLeft: "7vw",
                                      marginTop: "5vh",
                                      fontSize: "3vh",
                                      fontFamily: "Kumbh Sans",
                                    },
                                    className: "start-create-do",
                                    onClick: () => {
                                      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s))
                                        return void alert(
                                          "Please enter a valid email address."
                                        );
                                      const e = _;
                                      wn
                                        .get(
                                          ""
                                            .concat(
                                              "https://tkwbackendcdl.onrender.com",
                                              "/cooptTalent/verifyMail?email="
                                            )
                                            .concat(s, "&doId=")
                                            .concat(e)
                                        )
                                        .then((e) => {
                                          const t = e.data;
                                          console.log(t),
                                            t.emailExists
                                              ? t.talentExists
                                                ? (v(15),
                                                  window.history.pushState(
                                                    { question: 15 },
                                                    ""
                                                  ),
                                                  alert(
                                                    "This talent is already in the DO."
                                                  ))
                                                : (u(t.firstName),
                                                  v(14),
                                                  window.history.pushState(
                                                    { question: 14 },
                                                    ""
                                                  ))
                                              : (v(m + 1),
                                                window.history.pushState(
                                                  { question: m + 1 },
                                                  ""
                                                ));
                                        })
                                        .catch((e) => {
                                          console.error(
                                            "Error verifying email:",
                                            e
                                          );
                                        }),
                                        v(m + 1),
                                        window.history.pushState(
                                          { question: m + 1 },
                                          ""
                                        );
                                    },
                                    children: "Next",
                                  }),
                                ],
                              }),
                            ],
                          })
                        : 10 === m
                        ? (0, Ee.jsx)(Ee.Fragment, {
                            children: (0, Ee.jsxs)("div", {
                              style: { display: "flex", marginTop: "20vh" },
                              children: [
                                (0, Ee.jsxs)("div", {
                                  style: { display: "flex" },
                                  className: "email-create-do",
                                  children: [
                                    (0, Ee.jsx)("div", {
                                      style: {
                                        marginRight: "1vh",
                                        marginTop: "3vh",
                                        fontSize: "3vh",
                                      },
                                      children: "Given Name",
                                    }),
                                    (0, Ee.jsx)("input", {
                                      style: {
                                        marginLeft: "3vw",
                                        width: "20vw",
                                        fontFamily: "Kumbh Sans",
                                      },
                                      placeholder:
                                        "Talent\u2019s First name please",
                                      onChange: (e) => u(e.target.value),
                                      value: c,
                                    }),
                                  ],
                                }),
                                (0, Ee.jsx)("button", {
                                  style: {
                                    marginLeft: "10vw",
                                    marginTop: "5vh",
                                    fontSize: "3vh",
                                  },
                                  className: "start-create-do",
                                  onClick: () => {
                                    "" !== c.trim()
                                      ? (v(m + 1),
                                        window.history.pushState(
                                          { question: m + 1 },
                                          ""
                                        ))
                                      : alert(
                                          "Please enter the Talent\u2019s First Name."
                                        );
                                  },
                                  children: "Next",
                                }),
                              ],
                            }),
                          })
                        : 11 === m
                        ? (0, Ee.jsx)(Ee.Fragment, {
                            children: (0, Ee.jsxs)("div", {
                              style: { display: "flex", marginTop: "20vh" },
                              children: [
                                (0, Ee.jsxs)("div", {
                                  style: { display: "flex" },
                                  className: "email-create-do",
                                  children: [
                                    (0, Ee.jsx)("div", {
                                      style: {
                                        marginRight: "1vh",
                                        marginTop: "3vh",
                                        fontSize: "3vh",
                                      },
                                      children: "Family Name",
                                    }),
                                    (0, Ee.jsx)("input", {
                                      style: {
                                        marginLeft: "3vw",
                                        width: "20vw",
                                        fontFamily: "Kumbh Sans",
                                      },
                                      placeholder: "Talent\u2019s Last Name",
                                      onChange: (e) => h(e.target.value),
                                      value: d,
                                    }),
                                  ],
                                }),
                                (0, Ee.jsx)("button", {
                                  style: {
                                    marginLeft: "10vw",
                                    marginTop: "5vh",
                                    fontSize: "3vh",
                                  },
                                  className: "start-create-do",
                                  onClick: () => {
                                    "" !== d.trim()
                                      ? (v(m + 1),
                                        window.history.pushState(
                                          { question: m + 1 },
                                          ""
                                        ))
                                      : alert(
                                          "Please enter the Talent\u2019s Last Name."
                                        );
                                  },
                                  children: "Next",
                                }),
                              ],
                            }),
                          })
                        : 12 === m
                        ? (0, Ee.jsx)(Ee.Fragment, {
                            children: (0, Ee.jsxs)("div", {
                              className: "notif-coopt",
                              style: { display: "grid" },
                              children: [
                                (0, Ee.jsx)("div", {
                                  className: "email-create-do",
                                  style: { marginRight: "35vw" },
                                  children: "Object : ",
                                }),
                                (0, Ee.jsx)("textarea", {
                                  style: {
                                    width: "40vw",
                                    height: "7vh",
                                    marginBottom: "0vh",
                                  },
                                  onChange: (e) => D(e.target.value),
                                  value: I,
                                }),
                                (0, Ee.jsx)("div", {
                                  className: "email-create-do",
                                  style: { marginRight: "35vw" },
                                  children: "Message : ",
                                }),
                                (0, Ee.jsx)("textarea", {
                                  style: { width: "40vw", height: "30vh" },
                                  onChange: (e) => R(e.target.value),
                                  value: P,
                                }),
                                (0, Ee.jsx)("button", {
                                  style: {
                                    marginLeft: "14vw",
                                    marginTop: "5vh",
                                    fontSize: "3vh",
                                  },
                                  className: "start-create-do",
                                  onClick: () => {
                                    v(m + 1),
                                      window.history.pushState(
                                        { question: m + 1 },
                                        ""
                                      );
                                  },
                                  children: "Send",
                                }),
                              ],
                            }),
                          })
                        : 13 === m
                        ? (0, Ee.jsx)(Ee.Fragment, {
                            children: (0, Ee.jsxs)("div", {
                              children: [
                                (0, Ee.jsxs)("p", {
                                  style: {
                                    marginTop: "10vh",
                                    fontFamily: "Kumbh Sans",
                                  },
                                  className: "coopt-text",
                                  children: [
                                    "To conclude, communicate to ",
                                    c,
                                    " his temporary password using the",
                                    (0, Ee.jsx)("br", {}),
                                    "method you usually do and remind him to check his emails:",
                                  ],
                                }),
                                (0, Ee.jsxs)("p", {
                                  style: { fontFamily: "Kumbh Sans" },
                                  className: "coopt-text",
                                  children: [
                                    "Temporary password :",
                                    (0, Ee.jsx)("br", {}),
                                    " 123456",
                                  ],
                                }),
                                (0, Ee.jsx)("button", {
                                  style: {
                                    marginLeft: "19vw",
                                    marginTop: "10vh",
                                  },
                                  className: "start-create-do",
                                  onClick: () => {
                                    const e = localStorage.getItem("userId"),
                                      t = {
                                        FirstName: c,
                                        LastName: d,
                                        Email: s,
                                        password: "123456",
                                        id_do: _,
                                        first_connection: "1",
                                        UserNameId: e,
                                        subjectMail: I,
                                        textMail: P,
                                      };
                                    fetch(
                                      "https://tkwbackendcdl.onrender.comcooptTalent/api/coopt",
                                      {
                                        method: "POST",
                                        headers: {
                                          "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify(t),
                                      }
                                    )
                                      .then((e) => {
                                        console.log("here"), console.log(e);
                                      })
                                      .catch((e) => {
                                        console.error(
                                          "Erreur lors de l'inscription :",
                                          e
                                        );
                                      }),
                                      v(15),
                                      window.history.pushState(
                                        { question: 15 },
                                        ""
                                      );
                                  },
                                  children: "Done",
                                }),
                              ],
                            }),
                          })
                        : 14 === m
                        ? (0, Ee.jsxs)(Ee.Fragment, {
                            children: [
                              (0, Ee.jsxs)("p", {
                                style: { marginBottom: "0vh" },
                                className: "create-do",
                                children: [
                                  "Oups, you can\u2019t earn Thanks from MKIF, but...",
                                  (0, Ee.jsx)("br", {}),
                                  " ",
                                  (0, Ee.jsx)("br", {}),
                                  (0, Ee.jsx)("br", {}),
                                ],
                              }),
                              (0, Ee.jsxs)("div", {
                                className: "explain-coopt",
                                children: [
                                  (0, Ee.jsxs)("div", {
                                    style: {
                                      fontFamily: "Kumbh Sans",
                                      fontSize: "3vh",
                                      fontWeight: "700",
                                      marginLeft: "2vw",
                                      marginTop: "0vh",
                                    },
                                    children: [
                                      "The email you entered is already in use, meaning ",
                                      c,
                                      " is already part of the",
                                      (0, Ee.jsx)("br", {}),
                                      "Thankward family",
                                      (0, Ee.jsx)("br", {}),
                                      (0, Ee.jsx)("br", {}),
                                    ],
                                  }),
                                  (0, Ee.jsxs)("div", {
                                    style: {
                                      fontFamily: "Kumbh Sans",
                                      marginLeft: "2vw",
                                    },
                                    children: [
                                      "However, you can still earn Thanks from your D.O. if he agrees to join. Don't forget to send",
                                      (0, Ee.jsx)("br", {}),
                                      "him a personal message.",
                                      (0, Ee.jsx)("br", {}),
                                    ],
                                  }),
                                ],
                              }),
                              (0, Ee.jsx)("div", {
                                style: { display: "flex" },
                                children: (0, Ee.jsx)("button", {
                                  style: {
                                    marginTop: "4vh",
                                    marginRight: "5vw",
                                  },
                                  className: "start-create-do",
                                  onClick: () => {
                                    const e = _,
                                      t = localStorage.getItem("userId"),
                                      n = {
                                        Email: s,
                                        id_do: e,
                                        UserNameId: t,
                                        subjectMailexist: F,
                                        textMailexist: z,
                                      };
                                    fetch(
                                      "https://tkwbackendcdl.onrender.comcooptTalent/api/cooptExsistedMember",
                                      {
                                        method: "POST",
                                        headers: {
                                          "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify(n),
                                      }
                                    )
                                      .then((e) => {
                                        console.log("here"), console.log(e);
                                      })
                                      .catch((e) => {
                                        console.error(
                                          "Erreur lors de l'inscription :",
                                          e
                                        );
                                      }),
                                      v(m + 1),
                                      window.history.pushState(
                                        { question: m + 1 },
                                        ""
                                      );
                                  },
                                  children: "Close",
                                }),
                              }),
                            ],
                          })
                        : (0, Ee.jsxs)(Ee.Fragment, {
                            children: [
                              (0, Ee.jsxs)("p", {
                                className: "create-do",
                                children: [
                                  "Do you want to co-opt other people you want collaborate with or",
                                  (0, Ee.jsx)("br", {}),
                                  "start Execution?",
                                ],
                              }),
                              (0, Ee.jsx)("button", {
                                className: "start-create-do",
                                onClick: () => {
                                  v(9),
                                    window.history.pushState(
                                      { question: 9 },
                                      ""
                                    );
                                },
                                children: "Co-opt",
                              }),
                              (0, Ee.jsx)(ke, {
                                to: "/DIO",
                                children: (0, Ee.jsx)("button", {
                                  className: "start-create-do",
                                  onClick: () => {
                                    return (
                                      (t = x),
                                      U((e = _)),
                                      localStorage.setItem("DOId", e),
                                      void localStorage.setItem("DOName", t)
                                    );
                                    var e, t;
                                  },
                                  children: "Execution",
                                }),
                              }),
                            ],
                          }),
                  }),
                ],
              }),
            ],
          });
        },
        Pn = () => {
          const [e, t] = (0, a.useState)(!1),
            [n, r] = (0, a.useState)(!1),
            [o, i] = (0, a.useState)(!1),
            [s, l] = (0, a.useState)(0),
            [c, u] = (0, a.useState)(""),
            [d, h] = (0, a.useState)(""),
            [f, p] = (0, a.useState)(""),
            m = localStorage.getItem("userName"),
            v = localStorage.getItem("userId"),
            [g, y] = (0, a.useState)("".concat(m, " invites you to Thankward")),
            [x, b] = (0, a.useState)(
              "Hi "
                .concat(
                  d,
                  ",\nJoin me on Thankward to explore an amazing experience of collaboration.\nYou'll see, it's easy, and we earn lots of Thanks, the future of appreciation-based rewards.\nYou'll receive your password in a separate message.\nFollow the link below to sign up with your email address: "
                )
                .concat(c, "\nwww.thanksandshare.com\nSee you soon!")
            );
          (0, a.useEffect)(() => {
            y("".concat(m, " invites you to Thankward")),
              b(
                "Hi "
                  .concat(d, " ")
                  .concat(
                    f,
                    ",\n  Join me on Thankward to explore an amazing experience of collaboration.\n  You'll see, it's easy, and we earn lots of Thanks, the future of appreciation-based rewards.\n  You'll receive your password in a separate message.\n  Follow the link below to sign up with your email address: "
                  )
                  .concat(c, "\n  www.thanksandshare.com\n  See you soon!")
              );
          }, [d, f, c, m]);
          (0, a.useEffect)(() => {
            const e = localStorage.getItem("userId");
            wn.get(
              ""
                .concat("https://tkwbackendcdl.onrender.com", "/DIO/dioData/")
                .concat(e)
            )
              .then((e) => {
                const t = e.data.map((e) => ({
                  id: e.id,
                  name: e.nom_do,
                  description: e.do_description,
                  type: e.type,
                  id_ceo: e.id_ceo,
                  do_creator: {
                    name: e.do_creator_name,
                    first_name: e.do_creator_first_name,
                  },
                  member: {
                    name: e.member_name,
                    email: e.member_email,
                    first_name: e.member_first_name,
                    phone: e.member_phone,
                    address: e.member_adresse,
                  },
                }));
                console.log(t);
              })
              .catch((e) => {
                console.error("Error fetching DIO data:", e);
              });
          }, []);
          return (0, Ee.jsxs)("div", {
            className: "App",
            children: [
              (0, Ee.jsx)(Oe, {}),
              (0, Ee.jsxs)("div", {
                className: "main-content",
                children: [
                  (0, Ee.jsx)(Tn, {
                    setShowBCTPopUp: t,
                    setShowThanksPopUp: r,
                    setShowCashPopUp: i,
                    insideDO: !1,
                  }),
                  e && (0, Ee.jsx)(_n, { setShowBCTPopUp: t }),
                  n && (0, Ee.jsx)(En, { setShowThanksPopUp: r }),
                  o && (0, Ee.jsx)(On, { setShowCashPopUp: i }),
                  (0, Ee.jsx)("div", {
                    className: "actions_createdo",
                    children:
                      0 === s
                        ? (0, Ee.jsxs)(Ee.Fragment, {
                            children: [
                              (0, Ee.jsxs)("p", {
                                className: "create-do",
                                children: [
                                  "Empower friend build a Digital Organization to achieve important",
                                  (0, Ee.jsx)("br", {}),
                                  "goals is admirable.",
                                  (0, Ee.jsx)("br", {}),
                                  "Plus, there are rewards for your effort!",
                                ],
                              }),
                              (0, Ee.jsxs)("div", {
                                className: "explain-do",
                                children: [
                                  (0, Ee.jsx)("div", {
                                    style: {
                                      fontFamily: "Kumbh Sans",
                                      fontSize: "3vh",
                                      fontWeight: "700",
                                      marginLeft: "2vw",
                                      marginTop: "1vh",
                                    },
                                    children:
                                      "In the D.O. your friend is building:",
                                  }),
                                  (0, Ee.jsxs)("div", {
                                    style: {
                                      fontFamily: "Kumbh Sans",
                                      marginLeft: "2vw",
                                    },
                                    children: [
                                      "For every 100 Thanks your friend earns, you receive 5 Thanks.",
                                      (0, Ee.jsx)("br", {}),
                                      "Each time your friend\u2019s team accumulates 10k verified Thanks, you earn 10 Thanks.",
                                      (0, Ee.jsx)("br", {}),
                                      (0, Ee.jsx)("br", {}),
                                      (0, Ee.jsx)("br", {}),
                                    ],
                                  }),
                                  (0, Ee.jsx)("div", {
                                    style: {
                                      fontFamily: "Kumbh Sans",
                                      fontSize: "3vh",
                                      fontWeight: "700",
                                      marginLeft: "2vw",
                                    },
                                    children:
                                      "From MKIF, the company behind Thankward:",
                                  }),
                                  (0, Ee.jsxs)("div", {
                                    style: {
                                      fontFamily: "Kumbh Sans",
                                      marginLeft: "2vw",
                                    },
                                    children: [
                                      "When your friend\u2019s D.O. is active, you earn 1 Thanks.",
                                      (0, Ee.jsx)("br", {}),
                                      "Each time your friend\u2019s team accumulates 10k verified Thanks, you earn 1 Thanks.",
                                      (0, Ee.jsx)("br", {}),
                                      "You receive a special bonus of 10 Thanks whenever your friend\u2019s team reaches 100k verified Thanks.",
                                      (0, Ee.jsx)("br", {}),
                                    ],
                                  }),
                                ],
                              }),
                              (0, Ee.jsxs)("div", {
                                style: { display: "flow", marginTop: "0vh" },
                                className: "email-create-do",
                                children: [
                                  (0, Ee.jsx)("input", {
                                    style: {
                                      marginLeft: "3vw",
                                      width: "20vw",
                                      fontFamily: "Kumbh Sans",
                                      height: "6vh",
                                      marginRight: "2vw",
                                    },
                                    placeholder:
                                      "D.O. Creator\u2019s email please",
                                    onChange: (e) => u(e.target.value),
                                    value: c,
                                  }),
                                  (0, Ee.jsx)("button", {
                                    className: "start-create-do",
                                    onClick: () => {
                                      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c))
                                        return void alert(
                                          "Please enter a valid email address."
                                        );
                                      wn.get(
                                        ""
                                          .concat(
                                            "https://tkwbackendcdl.onrender.com",
                                            "/cooptTalent/verifyMail?email="
                                          )
                                          .concat(c, "&doId=")
                                          .concat("0")
                                      )
                                        .then((e) => {
                                          const t = e.data;
                                          console.log(t),
                                            t.emailExists
                                              ? t.talentExists
                                                ? alert(
                                                    "This talent is already in the DO."
                                                  )
                                                : (h(t.firstName),
                                                  l(5),
                                                  window.history.pushState(
                                                    { question: s + 5 },
                                                    ""
                                                  ))
                                              : (l(s + 1),
                                                window.history.pushState(
                                                  { question: s + 1 },
                                                  ""
                                                ));
                                        })
                                        .catch((e) => {
                                          console.error(
                                            "Error verifying email:",
                                            e
                                          );
                                        });
                                    },
                                    children: "Start",
                                  }),
                                ],
                              }),
                            ],
                          })
                        : 1 === s
                        ? (0, Ee.jsx)(Ee.Fragment, {
                            children: (0, Ee.jsxs)("div", {
                              style: { display: "flex", marginTop: "20vh" },
                              children: [
                                (0, Ee.jsxs)("div", {
                                  style: { display: "flex" },
                                  className: "email-create-do",
                                  children: [
                                    (0, Ee.jsx)("div", {
                                      style: {
                                        marginRight: "1vh",
                                        marginTop: "3vh",
                                        fontSize: "3vh",
                                      },
                                      children: "Given Name",
                                    }),
                                    (0, Ee.jsx)("input", {
                                      style: {
                                        marginLeft: "3vw",
                                        width: "20vw",
                                        fontFamily: "Kumbh Sans",
                                      },
                                      placeholder: "Talent\u2019s First Name",
                                      onChange: (e) => h(e.target.value),
                                      value: d,
                                    }),
                                  ],
                                }),
                                (0, Ee.jsx)("button", {
                                  style: {
                                    marginLeft: "10vw",
                                    marginTop: "5vh",
                                    fontSize: "3vh",
                                  },
                                  className: "start-create-do",
                                  onClick: () => {
                                    "" !== d.trim()
                                      ? (l(s + 1),
                                        window.history.pushState(
                                          { question: s + 1 },
                                          ""
                                        ))
                                      : alert(
                                          "Please enter the Talent\u2019s First Name."
                                        );
                                  },
                                  children: "Next",
                                }),
                              ],
                            }),
                          })
                        : 2 === s
                        ? (0, Ee.jsx)(Ee.Fragment, {
                            children: (0, Ee.jsxs)("div", {
                              style: { display: "flex", marginTop: "20vh" },
                              children: [
                                (0, Ee.jsxs)("div", {
                                  style: { display: "flex" },
                                  className: "email-create-do",
                                  children: [
                                    (0, Ee.jsx)("div", {
                                      style: {
                                        marginRight: "1vh",
                                        marginTop: "3vh",
                                        fontSize: "3vh",
                                      },
                                      children: "Family Name",
                                    }),
                                    (0, Ee.jsx)("input", {
                                      style: {
                                        marginLeft: "3vw",
                                        width: "20vw",
                                        fontFamily: "Kumbh Sans",
                                      },
                                      placeholder: "Talent\u2019s Last Name",
                                      onChange: (e) => p(e.target.value),
                                      value: f,
                                    }),
                                  ],
                                }),
                                (0, Ee.jsx)("button", {
                                  style: {
                                    marginLeft: "10vw",
                                    marginTop: "5vh",
                                    fontSize: "3vh",
                                  },
                                  className: "start-create-do",
                                  onClick: () => {
                                    "" !== f.trim()
                                      ? (l(s + 1),
                                        window.history.pushState(
                                          { question: s + 1 },
                                          ""
                                        ))
                                      : alert(
                                          "Please enter the Talent\u2019s Last Name."
                                        );
                                  },
                                  children: "Next",
                                }),
                              ],
                            }),
                          })
                        : 3 === s
                        ? (0, Ee.jsx)(Ee.Fragment, {
                            children: (0, Ee.jsxs)("div", {
                              className: "notif-coopt",
                              style: { display: "grid" },
                              children: [
                                (0, Ee.jsx)("div", {
                                  className: "email-create-do",
                                  style: { marginRight: "35vw" },
                                  children: "Object : ",
                                }),
                                (0, Ee.jsx)("textarea", {
                                  style: {
                                    width: "40vw",
                                    height: "7vh",
                                    marginBottom: "0vh",
                                  },
                                  onChange: (e) => y(e.target.value),
                                  value: g,
                                }),
                                (0, Ee.jsx)("div", {
                                  className: "email-create-do",
                                  style: { marginRight: "35vw" },
                                  children: "Message : ",
                                }),
                                (0, Ee.jsx)("textarea", {
                                  style: { width: "40vw", height: "30vh" },
                                  onChange: (e) => b(e.target.value),
                                  value: x,
                                }),
                                (0, Ee.jsx)("button", {
                                  style: {
                                    marginLeft: "14vw",
                                    marginTop: "5vh",
                                    fontSize: "3vh",
                                  },
                                  className: "start-create-do",
                                  onClick: () => l(4),
                                  children: "Send",
                                }),
                              ],
                            }),
                          })
                        : 4 === s
                        ? (0, Ee.jsx)(Ee.Fragment, {
                            children: (0, Ee.jsxs)("div", {
                              children: [
                                (0, Ee.jsxs)("p", {
                                  style: { marginTop: "10vh" },
                                  className: "create-do",
                                  children: [
                                    "To conclude, communicate to ",
                                    d,
                                    " his temporary password using the",
                                    (0, Ee.jsx)("br", {}),
                                    "method you usually do and remind him to check his emails:",
                                  ],
                                }),
                                (0, Ee.jsxs)("p", {
                                  className: "create-do",
                                  children: [
                                    "Temporary password :",
                                    (0, Ee.jsx)("br", {}),
                                    " 123456",
                                  ],
                                }),
                                (0, Ee.jsx)(ke, {
                                  to: "/Homepage",
                                  children: (0, Ee.jsx)("button", {
                                    style: {
                                      marginLeft: "25vw",
                                      marginTop: "10vh",
                                    },
                                    className: "start-create-do",
                                    onClick: () => {
                                      const e = {
                                        FirstName: d,
                                        LastName: f,
                                        Email: c,
                                        password: "123456",
                                        first_connection: "1",
                                        sponsored: "1",
                                        UserNameId: v,
                                        subjectMail: g,
                                        textMail: x,
                                      };
                                      fetch(
                                        "https://tkwbackendcdl.onrender.comCreateSponsorizeDO/sponsorize",
                                        {
                                          method: "POST",
                                          headers: {
                                            "Content-Type": "application/json",
                                          },
                                          body: JSON.stringify(e),
                                        }
                                      )
                                        .then((e) => {
                                          console.log("here"), console.log(e);
                                        })
                                        .catch((e) => {
                                          console.error(
                                            "Erreur lors de l'inscription :",
                                            e
                                          );
                                        }),
                                        window.location.reload();
                                    },
                                    children: "Done",
                                  }),
                                }),
                              ],
                            }),
                          })
                        : (0, Ee.jsxs)(Ee.Fragment, {
                            children: [
                              (0, Ee.jsx)("p", {
                                className: "create-do",
                                children: "Oups, you can\u2019t earn Thanks !",
                              }),
                              (0, Ee.jsxs)("div", {
                                className: "explain-do",
                                children: [
                                  (0, Ee.jsx)("div", {
                                    style: {
                                      fontFamily: "Kumbh Sans",
                                      fontSize: "3vh",
                                      fontWeight: "700",
                                      marginLeft: "2vw",
                                      marginTop: "1vh",
                                    },
                                    children:
                                      "The email you provided already exists, so this person can start his own Digital",
                                  }),
                                  (0, Ee.jsx)("div", {
                                    style: {
                                      fontFamily: "Kumbh Sans",
                                      fontSize: "3vh",
                                      fontWeight: "700",
                                      marginLeft: "2vw",
                                    },
                                    children:
                                      "Organization when it's best for him,Thank you for thinking of him",
                                  }),
                                ],
                              }),
                              (0, Ee.jsx)("div", {
                                style: { display: "flow", marginTop: "0vh" },
                                className: "email-create-do",
                                children: (0, Ee.jsx)("button", {
                                  className: "start-create-do",
                                  onClick: () => window.location.reload(),
                                  children: "Close",
                                }),
                              }),
                            ],
                          }),
                  }),
                ],
              }),
            ],
          });
        },
        Rn = () => {
          const [e, t] = (0, a.useState)(0),
            n = localStorage.getItem("userName"),
            r = localStorage.getItem("firstName"),
            o = localStorage.getItem("email"),
            i = localStorage.getItem("userId"),
            s = localStorage.getItem("do_ids"),
            [l, c] = (0, a.useState)("".concat(o)),
            [u, d] = (0, a.useState)("".concat(r)),
            [h, f] = (0, a.useState)("".concat(n)),
            [p, m] = (0, a.useState)(""),
            [v, g] = (0, a.useState)(""),
            [y, x] = (0, a.useState)(""),
            [b, w] = (0, a.useState)(""),
            [j, S] = (0, a.useState)(""),
            [k, N] = (0, a.useState)(""),
            [C, T] = (0, a.useState)(""),
            [E, _] = (0, a.useState)(""),
            O = localStorage.getItem("userName"),
            I = localStorage.getItem("userId"),
            [D, P] = (0, a.useState)(""),
            [R, F] = (0, a.useState)(""),
            [L, z] = (0, a.useState)(""),
            [A, U] = (0, a.useState)(""),
            [M, B] = (0, a.useState)(""),
            [W, H] = (0, a.useState)(""),
            [K, q] = (0, a.useState)(""),
            [Y, V] = (0, a.useState)("".concat(O, " invites you to Thankward")),
            [Q, J] = (0, a.useState)(
              "Hi "
                .concat(
                  u,
                  ",\nJoin me on Thankward to explore an amazing experience of collaboration.\nYou'll see, it's easy, and we earn lots of Thanks, the future of appreciation-based rewards.\nYou'll receive your password in a separate message.\nFollow the link below to sign up with your email address: "
                )
                .concat(l, "\nwww.thanksandshare.com\nSee you soon!")
            ),
            [$, G] = (0, a.useState)(
              "".concat(O, " invites you to ").concat(R)
            ),
            [X, Z] = (0, a.useState)(
              "Hi "
                .concat(u, ',\nJoin me at "')
                .concat(
                  R,
                  '," an exceptional Digital Organization where you can thrive in a great\nteam and contribute to an exciting project.\nSee you soon!"\nAchraf\nwww.thanksandshare.com'
                )
            );
          (0, a.useEffect)(() => {
            V("".concat(O, " invites you to Thankward")),
              G("".concat(O, " invites you to ").concat(R)),
              J(
                "Hi "
                  .concat(u, " ")
                  .concat(
                    h,
                    ",\n  Join me on Thankward to explore an amazing experience of collaboration.\n  You'll see, it's easy, and we earn lots of Thanks, the future of appreciation-based rewards.\n  You'll receive your password in a separate message.\n  Follow the link below to sign up with your email address: "
                  )
                  .concat(l, "\n  www.thanksandshare.com\n  See you soon!")
              ),
              Z(
                "Hi "
                  .concat(u, ',\n  Join me at "')
                  .concat(
                    R,
                    '," an exceptional Digital Organization where you can thrive in a great\n  team and contribute to an exciting project.\n  See you soon!"\n  www.thanksandshare.com'
                  )
              );
          }, [u, h, l, R, O]);
          const { selectDioId: ee } = (0, a.useContext)(jn),
            te = (e) => {
              ee(e);
            };
          console.log(E);
          (0, a.useEffect)(() => {
            V("".concat(O, " invites you to Thankward")),
              J(
                "Hi "
                  .concat(u, " ")
                  .concat(
                    h,
                    ",\n    Join me on Thankward to explore an amazing experience of collaboration.\n    You'll see, it's easy, and we earn lots of Thanks, the future of appreciation-based rewards.\n    You'll receive your password in a separate message.\n    Follow the link below to sign up with your email address: "
                  )
                  .concat(l, "\n    www.thanksandshare.com\n    See you soon!")
              );
          }, [u, h, l, O]);
          (0, a.useEffect)(() => {
            const e = localStorage.getItem("userId");
            wn.get(
              ""
                .concat("https://tkwbackendcdl.onrender.com", "/DIO/dioData/")
                .concat(e)
            )
              .then((e) => {
                const t = e.data.map((e) => ({
                  id: e.id,
                  name: e.nom_do,
                  description: e.do_description,
                  type: e.type,
                  id_ceo: e.id_ceo,
                  do_creator: {
                    name: e.do_creator_name,
                    first_name: e.do_creator_first_name,
                  },
                  member: {
                    name: e.member_name,
                    email: e.member_email,
                    first_name: e.member_first_name,
                    phone: e.member_phone,
                    address: e.member_adresse,
                  },
                }));
                console.log(t);
              })
              .catch((e) => {
                console.error("Error fetching DIO data:", e);
              });
          }, []),
            (0, a.useEffect)(() => {
              const n = () => {
                const n = window.history.state;
                console.log(n.question),
                  n &&
                    void 0 !== n.question &&
                    (5 === n.question ? (t(0), console.log("yes")) : t(e - 1));
              };
              return (
                window.addEventListener("popstate", n),
                () => {
                  window.removeEventListener("popstate", n);
                }
              );
            }, [e]),
            console.log(K);
          return (0, Ee.jsx)("div", {
            className: "container",
            children: (0, Ee.jsx)("div", {
              className: "main-content",
              children: (0, Ee.jsx)("div", {
                className: "actions_coopt",
                children:
                  0 === e
                    ? (0, Ee.jsxs)(Ee.Fragment, {
                        children: [
                          (0, Ee.jsx)("div", {
                            style: { marginTop: "8vh" },
                            children: (0, Ee.jsxs)("p", {
                              className: "welcome-text",
                              children: [
                                "Welcome to Thankward.",
                                (0, Ee.jsx)("br", {}),
                                "To join ",
                                C,
                                " complete your profile",
                                (0, Ee.jsx)("br", {}),
                                " and you\u2019ll receive your first Thanks",
                              ],
                            }),
                          }),
                          (0, Ee.jsxs)("div", {
                            style: { display: "grid" },
                            children: [
                              (0, Ee.jsxs)("div", {
                                style: { display: "flex" },
                                className: "email-coopt",
                                children: [
                                  "Given Name",
                                  (0, Ee.jsx)("input", {
                                    style: { marginLeft: "15.2vw" },
                                    onChange: (e) => d(e.target.value),
                                    value: u,
                                  }),
                                ],
                              }),
                              (0, Ee.jsxs)("div", {
                                style: { display: "flex" },
                                className: "email-coopt",
                                children: [
                                  "Family Name",
                                  (0, Ee.jsx)("input", {
                                    onChange: (e) => f(e.target.value),
                                    value: h,
                                  }),
                                ],
                              }),
                              (0, Ee.jsxs)("div", {
                                style: { display: "flex" },
                                className: "email-coopt",
                                children: [
                                  "Email",
                                  (0, Ee.jsx)("input", {
                                    style: {
                                      marginLeft: "19vw",
                                      backgroundColor: "gray",
                                    },
                                    readOnly: !0,
                                    value: l,
                                  }),
                                ],
                              }),
                              (0, Ee.jsxs)("div", {
                                style: { display: "flex" },
                                children: [
                                  (0, Ee.jsx)("button", {
                                    className: "delete-my-profile",
                                    style: {
                                      fontSize: "3.5vh",
                                      height: "10vh",
                                      width: "12vw",
                                      marginTop: "10vh",
                                    },
                                    children: "Delete and exit",
                                  }),
                                  (0, Ee.jsx)("button", {
                                    className: "create-my-profile",
                                    onClick: () => {
                                      "" !== u.trim() && "" !== h.trim()
                                        ? t(1)
                                        : alert(
                                            "Please enter a valid First Name and Last Name ."
                                          );
                                    },
                                    style: {
                                      fontSize: "3.5vh",
                                      height: "10vh",
                                      width: "12vw",
                                      marginTop: "10vh",
                                    },
                                    children: "Create My profile",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      })
                    : 1 === e
                    ? (0, Ee.jsxs)(Ee.Fragment, {
                        children: [
                          (0, Ee.jsxs)("p", {
                            style: { marginTop: "10vh" },
                            className: "welcome-text",
                            children: [
                              "Great !",
                              (0, Ee.jsx)("br", {}),
                              "Choose your password",
                            ],
                          }),
                          (0, Ee.jsxs)("div", {
                            style: { display: "flex", marginTop: "25vh" },
                            children: [
                              (0, Ee.jsxs)("div", {
                                style: { display: "flex" },
                                className: "email-coopt",
                                children: [
                                  "Password you received",
                                  (0, Ee.jsx)("input", {
                                    style: {
                                      color: "black",
                                      backgroundColor: "white",
                                    },
                                    type: "password",
                                    onChange: (e) => m(e.target.value),
                                    value: p,
                                  }),
                                ],
                              }),
                              (0, Ee.jsx)("button", {
                                className: "next-button-coopt ",
                                onClick: () => {
                                  "123456" === p.trim()
                                    ? t(2)
                                    : alert("Invalid password.");
                                },
                                children: "Next",
                              }),
                            ],
                          }),
                        ],
                      })
                    : 2 === e
                    ? (0, Ee.jsxs)(Ee.Fragment, {
                        children: [
                          (0, Ee.jsxs)("p", {
                            style: { marginTop: "10vh" },
                            className: "welcome-text",
                            children: [
                              "Great !",
                              (0, Ee.jsx)("br", {}),
                              "Choose your password",
                            ],
                          }),
                          (0, Ee.jsxs)("div", {
                            style: { display: "flex", marginTop: "25vh" },
                            children: [
                              (0, Ee.jsxs)("div", {
                                style: { display: "flex" },
                                className: "email-coopt",
                                children: [
                                  "My new Password",
                                  (0, Ee.jsx)("input", {
                                    style: {
                                      color: "black",
                                      backgroundColor: "white",
                                    },
                                    onChange: (e) => g(e.target.value),
                                    type: "password",
                                    value: v,
                                  }),
                                ],
                              }),
                              (0, Ee.jsx)("button", {
                                className: "next-button-coopt ",
                                onClick: () => t(3),
                                children: "Next",
                              }),
                            ],
                          }),
                        ],
                      })
                    : 3 === e
                    ? (0, Ee.jsxs)(Ee.Fragment, {
                        children: [
                          (0, Ee.jsxs)("p", {
                            style: { marginTop: "10vh" },
                            className: "welcome-text",
                            children: [
                              "Great !",
                              (0, Ee.jsx)("br", {}),
                              "Choose your password",
                            ],
                          }),
                          (0, Ee.jsxs)("div", {
                            style: { display: "flex", marginTop: "25vh" },
                            children: [
                              (0, Ee.jsxs)("div", {
                                style: { display: "flex" },
                                className: "email-coopt",
                                children: [
                                  "I confirm my new Password",
                                  (0, Ee.jsx)("input", {
                                    style: {
                                      color: "black",
                                      backgroundColor: "white",
                                    },
                                    defaultValue: "123456",
                                    onChange: (e) => x(e.target.value),
                                    value: y,
                                    type: "password",
                                  }),
                                ],
                              }),
                              (0, Ee.jsx)("button", {
                                className: "next-button-coopt ",
                                onClick: () => {
                                  v.trim() === y.trim()
                                    ? t(4)
                                    : alert("Invalid password.");
                                },
                                children: "Next",
                              }),
                            ],
                          }),
                        ],
                      })
                    : 4 === e
                    ? (0, Ee.jsxs)(Ee.Fragment, {
                        children: [
                          (0, Ee.jsxs)("p", {
                            style: { marginTop: "10vh" },
                            className: "welcome-text",
                            children: [
                              "Excellent !",
                              (0, Ee.jsx)("br", {}),
                              "Almost finished",
                            ],
                          }),
                          (0, Ee.jsxs)("div", {
                            style: { display: "flex", marginTop: "20vh" },
                            children: [
                              (0, Ee.jsx)("div", {
                                className: "email-coopt",
                                children: (0, Ee.jsxs)("div", {
                                  className: "date-input-container",
                                  children: [
                                    (0, Ee.jsx)("label", {
                                      htmlFor: "birthdate",
                                      children: "Your birthday :",
                                    }),
                                    (0, Ee.jsx)("input", {
                                      type: "date",
                                      id: "birthdate",
                                      name: "birthdate",
                                      className: "date-input",
                                      onChange: (e) => w(e.target.value),
                                      value: b,
                                      max: new Date()
                                        .toISOString()
                                        .split("T")[0],
                                    }),
                                  ],
                                }),
                              }),
                              (0, Ee.jsx)("button", {
                                style: { marginTop: "7vh" },
                                className: "next-button-coopt",
                                onClick: () => {
                                  "" !== b.trim()
                                    ? t(5)
                                    : alert(
                                        "Please kindly enter your birthday."
                                      );
                                },
                                children: "Next",
                              }),
                            ],
                          }),
                        ],
                      })
                    : 5 === e
                    ? (0, Ee.jsxs)(Ee.Fragment, {
                        children: [
                          (0, Ee.jsxs)("p", {
                            style: { marginTop: "10vh" },
                            className: "welcome-text",
                            children: [
                              "Thank you for your perseverance!",
                              (0, Ee.jsx)("br", {}),
                              "Finally",
                            ],
                          }),
                          (0, Ee.jsxs)("div", {
                            style: { display: "flex", marginTop: "20vh" },
                            children: [
                              (0, Ee.jsx)("div", {
                                className: "email-coopt",
                                children: (0, Ee.jsxs)("div", {
                                  style: { display: "flex", marginTop: "5vh" },
                                  className: "email-coopt",
                                  children: [
                                    " Your living country",
                                    (0, Ee.jsx)("input", {
                                      placeholder: "Country",
                                      onChange: (e) => S(e.target.value),
                                      value: j,
                                    }),
                                  ],
                                }),
                              }),
                              (0, Ee.jsx)("button", {
                                className: "create-my-profile",
                                style: {
                                  fontSize: "3.5vh",
                                  height: "10vh",
                                  width: "12vw",
                                  marginTop: "7vh",
                                },
                                onClick: () => {
                                  "" !== j.trim()
                                    ? (wn
                                        .get(
                                          ""
                                            .concat(
                                              "https://tkwbackendcdl.onrender.com",
                                              "/cooptTalent/infoCoopt?userId="
                                            )
                                            .concat(i)
                                        )
                                        .then((e) => {
                                          const t = e.data;
                                          N(t.idDO),
                                            T(t[0].Docreator),
                                            _(t[0].sponsored),
                                            console.log(t),
                                            console.log(t[0].sponsored),
                                            console.log(t.idDO);
                                        })
                                        .catch((e) =>
                                          console.error(
                                            "Error fetching data:",
                                            e
                                          )
                                        ),
                                      t(6))
                                    : alert(
                                        "Please kindly enter your adresse."
                                      );
                                },
                                children: "I want my thanks",
                              }),
                            ],
                          }),
                        ],
                      })
                    : 6 === e && 0 === E
                    ? (0, Ee.jsx)(Ee.Fragment, {
                        children: (0, Ee.jsxs)("div", {
                          children: [
                            (0, Ee.jsxs)("p", {
                              style: { marginTop: "20vh", fontSize: "5vh" },
                              className: "coopt-text",
                              children: [
                                "Congratulations, You get your First Thanks!",
                                (0, Ee.jsx)("br", {}),
                                (0, Ee.jsx)("br", {}),
                                "Now, you can join Achraf and gain plenty of Thanks!",
                              ],
                            }),
                            (0, Ee.jsx)(ke, {
                              to: "/Homepage",
                              children: (0, Ee.jsx)("button", {
                                className: "create-my-profile",
                                style: {
                                  marginRight: "15vw",
                                  fontSize: "3.5vh",
                                  height: "10vh",
                                  width: "12vw",
                                },
                                onClick: () => {
                                  const e = {
                                    userId: i,
                                    FirstName: u,
                                    LastName: h,
                                    Email: l,
                                    newPassword: v,
                                    first_connection: "0",
                                    date: b,
                                    country: j,
                                  };
                                  fetch(
                                    "https://tkwbackendcdl.onrender.comcooptTalent/api/updatecoopt",
                                    {
                                      method: "POST",
                                      headers: {
                                        "Content-Type": "application/json",
                                      },
                                      body: JSON.stringify(e),
                                    }
                                  )
                                    .then((e) => {
                                      console.log("here"), console.log(e);
                                    })
                                    .catch((e) => {
                                      console.error(
                                        "Erreur lors de l'inscription :",
                                        e
                                      );
                                    }),
                                    localStorage.setItem("DOId", k),
                                    te(s);
                                },
                                children: "Come in",
                              }),
                            }),
                          ],
                        }),
                      })
                    : 6 === e
                    ? (0, Ee.jsx)(Ee.Fragment, {
                        children: (0, Ee.jsxs)("div", {
                          children: [
                            (0, Ee.jsxs)("p", {
                              style: { marginTop: "8vh", fontSize: "4vh" },
                              className: "coopt-text",
                              children: [
                                "Congratulations, You get your First Thanks!",
                                (0, Ee.jsx)("br", {}),
                                (0, Ee.jsx)("br", {}),
                                "Now you can create your Digital Organization to achieve with your community !",
                                (0, Ee.jsx)("br", {}),
                                " what matters to you, together.",
                                (0, Ee.jsx)("br", {}),
                                "And yes, there are Rewards for your initiative !",
                              ],
                            }),
                            (0, Ee.jsxs)("div", {
                              className: "explain-sponsorization",
                              children: [
                                (0, Ee.jsx)("div", {
                                  style: {
                                    fontFamily: "Kumbh Sans",
                                    fontSize: "3vh",
                                    fontWeight: "700",
                                    marginLeft: "2vw",
                                    marginTop: "1vh",
                                  },
                                  children:
                                    "In the D.O. your friend is building:",
                                }),
                                (0, Ee.jsxs)("div", {
                                  style: {
                                    fontFamily: "Kumbh Sans",
                                    marginLeft: "2vw",
                                  },
                                  children: [
                                    "For every 100 Thanks your friend earns, you receive 5 Thanks.",
                                    (0, Ee.jsx)("br", {}),
                                    "Each time your friend\u2019s team accumulates 10k verified Thanks, you earn 10 Thanks.",
                                    (0, Ee.jsx)("br", {}),
                                    (0, Ee.jsx)("br", {}),
                                    (0, Ee.jsx)("br", {}),
                                  ],
                                }),
                                (0, Ee.jsx)("div", {
                                  style: {
                                    fontFamily: "Kumbh Sans",
                                    fontSize: "3vh",
                                    fontWeight: "700",
                                    marginLeft: "2vw",
                                  },
                                  children:
                                    "From MKIF, the company behind Thankward:",
                                }),
                                (0, Ee.jsxs)("div", {
                                  style: {
                                    fontFamily: "Kumbh Sans",
                                    marginLeft: "2vw",
                                  },
                                  children: [
                                    "When your friend\u2019s D.O. is active, you earn 1 Thanks.",
                                    (0, Ee.jsx)("br", {}),
                                    "Each time your friend\u2019s team accumulates 10k verified Thanks, you earn 1 Thanks.",
                                    (0, Ee.jsx)("br", {}),
                                    "You receive a special bonus of 100 Thanks whenever your friend\u2019s team reaches 100k verified Thanks.",
                                    (0, Ee.jsx)("br", {}),
                                  ],
                                }),
                              ],
                            }),
                            (0, Ee.jsx)(ke, {
                              to: "/CreateDO",
                              children: (0, Ee.jsx)("button", {
                                className: "create-my-profile",
                                style: {
                                  marginRight: "11vw",
                                  fontSize: "3.5vh",
                                  height: "10vh",
                                  width: "12vw",
                                },
                                onClick: () => {
                                  const e = {
                                    userId: i,
                                    FirstName: u,
                                    LastName: h,
                                    Email: l,
                                    newPassword: v,
                                    first_connection: "0",
                                    date: b,
                                    country: j,
                                  };
                                  fetch(
                                    "https://tkwbackendcdl.onrender.comcooptTalent/api/updatecoopt",
                                    {
                                      method: "POST",
                                      headers: {
                                        "Content-Type": "application/json",
                                      },
                                      body: JSON.stringify(e),
                                    }
                                  )
                                    .then((e) => {
                                      console.log("here"), console.log(e);
                                    })
                                    .catch((e) => {
                                      console.error(
                                        "Erreur lors de l'inscription :",
                                        e
                                      );
                                    });
                                },
                                children: "Come in",
                              }),
                            }),
                          ],
                        }),
                      })
                    : 7 === e
                    ? (0, Ee.jsxs)(Ee.Fragment, {
                        children: [
                          (0, Ee.jsx)("p", {
                            className: "create-do",
                            style: { marginTop: "20vh" },
                            children:
                              "First, describe your D.O.\u2019s activity and purpose",
                          }),
                          (0, Ee.jsx)("textarea", {
                            className: "what-will-you-do",
                            placeholder: "What will you do and why ?",
                            onChange: (e) => P(e.target.value),
                            value: D,
                          }),
                          (0, Ee.jsx)("button", {
                            className: "create-my-profile",
                            style: {
                              marginBottom: "-15vh",
                              marginRight: "15vw",
                            },
                            onClick: () => {
                              "" !== D.trim()
                                ? (t(e + 1),
                                  window.history.pushState(
                                    { question: e + 1 },
                                    ""
                                  ))
                                : alert(
                                    "Please describe your D.O.\u2019s activity."
                                  );
                            },
                            children: "Next",
                          }),
                        ],
                      })
                    : 8 === e
                    ? (0, Ee.jsxs)(Ee.Fragment, {
                        children: [
                          (0, Ee.jsx)("p", {
                            className: "create-do",
                            style: { marginTop: "20vh" },
                            children:
                              "What Is the name of your Digital Organization?",
                          }),
                          (0, Ee.jsx)("input", {
                            style: {
                              height: "10vh",
                              width: "50vw",
                              marginRight: "10vw",
                            },
                            className: "what-will-you-do",
                            onChange: (e) => F(e.target.value),
                            value: R,
                            placeholder: "Choose your D.O.\u2019sTitle",
                          }),
                          (0, Ee.jsx)("button", {
                            className: "create-my-profile",
                            style: {
                              marginBottom: "-15vh",
                              marginRight: "10vw",
                            },
                            onClick: () => {
                              "" !== R.trim()
                                ? (t(e + 1),
                                  window.history.pushState(
                                    { question: e + 1 },
                                    ""
                                  ))
                                : alert("Please give a name for your D.O.");
                            },
                            children: "Next",
                          }),
                        ],
                      })
                    : 9 === e
                    ? (0, Ee.jsxs)(Ee.Fragment, {
                        children: [
                          (0, Ee.jsx)("p", {
                            className: "create-do",
                            style: { marginTop: "20vh" },
                            children: "Who will Lead your D.O.?",
                          }),
                          (0, Ee.jsx)("button", {
                            style: {
                              backgroundColor: "#71d0d9",
                              marginRight: "10vw",
                              height: "30vh",
                              width: "20vw",
                            },
                            className: "create-my-profile",
                            onClick: () => t(10),
                            children: "I will do",
                          }),
                          (0, Ee.jsxs)("button", {
                            style: {
                              backgroundColor: "gray",
                              marginRight: "10vw",
                              height: "30vh",
                              width: "20vw",
                            },
                            className: "create-my-profile",
                            children: [
                              "Someone else",
                              (0, Ee.jsx)("span", {
                                style: {
                                  color: "red",
                                  fontSize: "1.5vh",
                                  marginLeft: "1vw",
                                },
                                children: "Soon",
                              }),
                            ],
                          }),
                          (0, Ee.jsx)("p", {
                            className: "create-do",
                            style: { marginTop: "10vh" },
                            children:
                              '"You can soon make adjustments and refine your governance."',
                          }),
                        ],
                      })
                    : 10 === e
                    ? (0, Ee.jsxs)(Ee.Fragment, {
                        children: [
                          (0, Ee.jsx)("p", {
                            className: "create-do",
                            style: { marginTop: "20vh" },
                            children:
                              "For what type of activity are you creating this DO ?",
                          }),
                          (0, Ee.jsx)("button", {
                            style: {
                              backgroundColor: "#71d0d9",
                              marginRight: "10vw",
                              height: "30vh",
                              width: "20vw",
                            },
                            className: "create-my-profile",
                            onClick: () => {
                              z("NonProfit"),
                                t(e + 1),
                                window.history.pushState(
                                  { question: e + 1 },
                                  ""
                                );
                            },
                            children: "Non-Profit",
                          }),
                          (0, Ee.jsx)("button", {
                            style: {
                              backgroundColor: "#71d0d9",
                              marginRight: "10vw",
                              height: "30vh",
                              width: "20vw",
                            },
                            className: "create-my-profile",
                            onClick: () => {
                              z("Profit"),
                                t(e + 1),
                                window.history.pushState(
                                  { question: e + 1 },
                                  ""
                                );
                            },
                            children: "Profit",
                          }),
                          (0, Ee.jsx)("button", {
                            style: {
                              backgroundColor: "#71d0d9",
                              marginRight: "10vw",
                              height: "30vh",
                              width: "20vw",
                            },
                            className: "create-my-profile",
                            onClick: () => {
                              z("Academic"),
                                t(e + 1),
                                window.history.pushState(
                                  { question: e + 1 },
                                  ""
                                );
                            },
                            children: "Academic",
                          }),
                        ],
                      })
                    : 11 === e
                    ? (0, Ee.jsxs)(Ee.Fragment, {
                        children: [
                          (0, Ee.jsx)("p", {
                            className: "create-do",
                            style: { marginTop: "20vh" },
                            children:
                              "Add a link to learn more about your D.O.",
                          }),
                          (0, Ee.jsx)("input", {
                            style: {
                              height: "25vh",
                              width: "50vw",
                              marginRight: "10vw",
                            },
                            className: "what-will-you-do",
                            onChange: (e) => U(e.target.value),
                            value: A,
                            placeholder: "Website,Pitch Deck on your cloud...",
                          }),
                          (0, Ee.jsx)("button", {
                            style: {
                              backgroundColor: "#71d0d9",
                              marginRight: "10vw",
                              height: "20vh",
                              width: "20vw",
                            },
                            className: "create-my-profile",
                            onClick: () => {
                              t(e + 1),
                                window.history.pushState(
                                  { question: e + 1 },
                                  ""
                                );
                            },
                            children: "Next",
                          }),
                        ],
                      })
                    : 12 === e
                    ? (0, Ee.jsxs)(Ee.Fragment, {
                        children: [
                          (0, Ee.jsx)("p", {
                            className: "create-do",
                            style: { marginTop: "20vh" },
                            children: "Keywords about your activity and needs",
                          }),
                          (0, Ee.jsx)("input", {
                            style: {
                              height: "25vh",
                              width: "50vw",
                              marginRight: "10vw",
                            },
                            className: "what-will-you-do",
                            onChange: (e) => B(e.target.value),
                            value: M,
                            placeholder: "Values, sector, activities...",
                          }),
                          (0, Ee.jsx)("button", {
                            style: {
                              backgroundColor: "#71d0d9",
                              marginRight: "10vw",
                            },
                            className: "create-my-profile",
                            onClick: () => {
                              t(e + 1),
                                window.history.pushState(
                                  { question: e + 1 },
                                  ""
                                );
                            },
                            children: "Next",
                          }),
                        ],
                      })
                    : 13 === e
                    ? (0, Ee.jsxs)(Ee.Fragment, {
                        children: [
                          (0, Ee.jsx)("p", {
                            className: "create-do",
                            style: { marginTop: "20vh" },
                            children:
                              "What would it take to make it successful ?",
                          }),
                          (0, Ee.jsx)("input", {
                            style: {
                              height: "30vh",
                              width: "50vw",
                              marginRight: "10vw",
                            },
                            className: "what-will-you-do",
                            onChange: (e) => H(e.target.value),
                            value: W,
                            placeholder: "Talents, money, luck \u263a...",
                          }),
                          (0, Ee.jsx)("button", {
                            style: {
                              backgroundColor: "#71d0d9",
                              marginRight: "10vw",
                            },
                            className: "create-my-profile",
                            onClick: () => {
                              t(e + 1),
                                window.history.pushState(
                                  { question: e + 1 },
                                  ""
                                );
                            },
                            children: "Next",
                          }),
                        ],
                      })
                    : 14 === e
                    ? (0, Ee.jsxs)(Ee.Fragment, {
                        children: [
                          (0, Ee.jsxs)("p", {
                            className: "create-do",
                            style: { marginTop: "20vh" },
                            children: [
                              "Congratulations on creating your D.O.! ",
                              K,
                              " Well done!",
                              (0, Ee.jsx)("br", {}),
                              "To make it active, recruit Talent to help achieve your goals.",
                              (0, Ee.jsx)("br", {}),
                              "And yes, there are Rewards for Co-opting Talent!",
                            ],
                          }),
                          (0, Ee.jsxs)("div", {
                            className: "explain-do",
                            children: [
                              (0, Ee.jsx)("div", {
                                style: {
                                  fontFamily: "Kumbh Sans",
                                  fontSize: "3vh",
                                  fontWeight: "700",
                                  marginLeft: "2vw",
                                  marginTop: "1vh",
                                },
                                children:
                                  "In the D.O. for which you are co-opting:",
                              }),
                              (0, Ee.jsxs)("div", {
                                style: {
                                  fontFamily: "Kumbh Sans",
                                  marginLeft: "2vw",
                                },
                                children: [
                                  "For every 100 Thanks your Co-opted Talent earns, you receive 5 Thanks.",
                                  (0, Ee.jsx)("br", {}),
                                  (0, Ee.jsx)("br", {}),
                                ],
                              }),
                              (0, Ee.jsx)("div", {
                                style: {
                                  fontFamily: "Kumbh Sans",
                                  fontSize: "3vh",
                                  fontWeight: "700",
                                  marginLeft: "2vw",
                                },
                                children:
                                  "From MKIF, the company behind Thankward:",
                              }),
                              (0, Ee.jsxs)("div", {
                                style: {
                                  fontFamily: "Kumbh Sans",
                                  marginLeft: "2vw",
                                },
                                children: [
                                  "When your Co-opted Talent joins the first time, you earn 1 Thanks.",
                                  (0, Ee.jsx)("br", {}),
                                  "Each time your Co-opted Talent accumulates 1k verified Thanks; you earn 1 Thanks.",
                                  (0, Ee.jsx)("br", {}),
                                  "You receive a special bonus of 20 Thanks whenever your Co-opted Talent reaches 10k",
                                  (0, Ee.jsx)("br", {}),
                                  "verified Thanks.",
                                ],
                              }),
                            ],
                          }),
                          (0, Ee.jsx)("button", {
                            style: {
                              backgroundColor: "#71d0d9",
                              marginRight: "10vw",
                            },
                            className: "create-my-profile",
                            onClick: () => {
                              const n = {
                                nameDO: R,
                                descriptionDO: D,
                                CeoDoId: I,
                                typeActivityDO: L,
                                linkDO: A,
                                keywordsDO: M,
                                makeitbetterDO: W,
                              };
                              fetch(
                                "https://tkwbackendcdl.onrender.comCreateSponsorizeDO/createDO",
                                {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify(n),
                                }
                              )
                                .then((e) => {
                                  console.log("here"), console.log(e);
                                })
                                .catch((e) => {
                                  console.error(
                                    "Erreur lors de la creation de DO :",
                                    e
                                  );
                                }),
                                t(e + 1),
                                window.history.pushState(
                                  { question: e + 1 },
                                  ""
                                );
                            },
                            children: "Start",
                          }),
                        ],
                      })
                    : 15 === e
                    ? (0, Ee.jsxs)(Ee.Fragment, {
                        children: [
                          (0, Ee.jsxs)("p", {
                            style: {
                              marginBottom: "0vh",
                              fontFamily: "Kumbh Sans",
                              marginTop: "20vh",
                            },
                            className: "coopt-text",
                            children: [
                              "Co-opting Talents is an excellent idea; it boosts your Team and accelerate your success.",
                              (0, Ee.jsx)("br", {}),
                              " ",
                              (0, Ee.jsx)("br", {}),
                              (0, Ee.jsx)("br", {}),
                            ],
                          }),
                          (0, Ee.jsxs)("div", {
                            style: { display: "flex", marginTop: "15vh" },
                            children: [
                              (0, Ee.jsxs)("div", {
                                style: { display: "flex" },
                                className: "email-create-do",
                                children: [
                                  (0, Ee.jsx)("div", {
                                    style: {
                                      marginRight: "1vh",
                                      marginTop: "1vh",
                                      fontSize: "3vh",
                                    },
                                    children: "Email",
                                  }),
                                  (0, Ee.jsx)("input", {
                                    placeholder: "Talent\u2019s email please",
                                    onChange: (e) => c(e.target.value),
                                    value: l,
                                    style: {
                                      marginLeft: "10vw",
                                      width: "20vw",
                                      fontFamily: "Kumbh Sans",
                                    },
                                  }),
                                ],
                              }),
                              (0, Ee.jsx)("button", {
                                style: {
                                  marginLeft: "7vw",
                                  marginTop: "5vh",
                                  fontSize: "3vh",
                                  fontFamily: "Kumbh Sans",
                                },
                                className: "create-my-profile",
                                onClick: () => {
                                  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l))
                                    return void alert(
                                      "Please enter a valid email address."
                                    );
                                  wn.get(
                                    ""
                                      .concat(
                                        "https://tkwbackendcdl.onrender.com",
                                        "/CreateSponsorizeDO/infoDOcreated?userId="
                                      )
                                      .concat(I, "&nameDo=")
                                      .concat(R)
                                  )
                                    .then((e) => {
                                      const t = e.data;
                                      console.log(t),
                                        t && t.length > 0
                                          ? (q(t[0].id), console.log(2))
                                          : console.error(
                                              "No data received from the server"
                                            );
                                    })
                                    .catch((e) =>
                                      console.error("Error fetching data:", e)
                                    );
                                  const n = K;
                                  wn
                                    .get(
                                      ""
                                        .concat(
                                          "https://tkwbackendcdl.onrender.com",
                                          "/cooptTalent/verifyMail?email="
                                        )
                                        .concat(l, "&doId=")
                                        .concat(n)
                                    )
                                    .then((n) => {
                                      const r = n.data;
                                      console.log(r),
                                        r.emailExists
                                          ? r.talentExists
                                            ? alert(
                                                "This talent is already in the DO."
                                              )
                                            : (d(r.firstName),
                                              t(20),
                                              window.history.pushState(
                                                { question: 20 },
                                                ""
                                              ))
                                          : (t(e + 1),
                                            window.history.pushState(
                                              { question: e + 1 },
                                              ""
                                            ));
                                    })
                                    .catch((e) => {
                                      console.error(
                                        "Error verifying email:",
                                        e
                                      );
                                    }),
                                    t(e + 1),
                                    window.history.pushState(
                                      { question: e + 1 },
                                      ""
                                    );
                                },
                                children: "Next",
                              }),
                            ],
                          }),
                        ],
                      })
                    : 16 === e
                    ? (0, Ee.jsx)(Ee.Fragment, {
                        children: (0, Ee.jsxs)("div", {
                          style: { display: "flex", marginTop: "40vh" },
                          children: [
                            (0, Ee.jsxs)("div", {
                              style: { display: "flex" },
                              className: "email-create-do",
                              children: [
                                (0, Ee.jsx)("div", {
                                  style: {
                                    marginRight: "1vh",
                                    marginTop: "3vh",
                                    fontSize: "3vh",
                                  },
                                  children: "Given Name",
                                }),
                                (0, Ee.jsx)("input", {
                                  style: {
                                    marginLeft: "3vw",
                                    width: "20vw",
                                    fontFamily: "Kumbh Sans",
                                  },
                                  placeholder:
                                    "Talent\u2019s First name please",
                                  onChange: (e) => d(e.target.value),
                                  value: u,
                                }),
                              ],
                            }),
                            (0, Ee.jsx)("button", {
                              style: {
                                marginLeft: "10vw",
                                marginTop: "5vh",
                                fontSize: "3vh",
                              },
                              className: "start-create-do",
                              onClick: () => {
                                "" !== u.trim()
                                  ? (t(e + 1),
                                    window.history.pushState(
                                      { question: e + 1 },
                                      ""
                                    ))
                                  : alert(
                                      "Please enter the Talent\u2019s First Name."
                                    );
                              },
                              children: "Next",
                            }),
                          ],
                        }),
                      })
                    : 17 === e
                    ? (0, Ee.jsx)(Ee.Fragment, {
                        children: (0, Ee.jsxs)("div", {
                          style: { display: "flex", marginTop: "20vh" },
                          children: [
                            (0, Ee.jsxs)("div", {
                              style: { display: "flex" },
                              className: "email-create-do",
                              children: [
                                (0, Ee.jsx)("div", {
                                  style: {
                                    marginRight: "1vh",
                                    marginTop: "3vh",
                                    fontSize: "3vh",
                                  },
                                  children: "Family Name",
                                }),
                                (0, Ee.jsx)("input", {
                                  style: {
                                    marginLeft: "3vw",
                                    width: "20vw",
                                    fontFamily: "Kumbh Sans",
                                  },
                                  placeholder: "Talent\u2019s Last Name",
                                  onChange: (e) => f(e.target.value),
                                  value: h,
                                }),
                              ],
                            }),
                            (0, Ee.jsx)("button", {
                              style: {
                                marginLeft: "10vw",
                                marginTop: "5vh",
                                fontSize: "3vh",
                              },
                              className: "start-create-do",
                              onClick: () => {
                                "" !== h.trim()
                                  ? (t(e + 1),
                                    window.history.pushState(
                                      { question: e + 1 },
                                      ""
                                    ))
                                  : alert(
                                      "Please enter the Talent\u2019s Last Name."
                                    );
                              },
                              children: "Next",
                            }),
                          ],
                        }),
                      })
                    : 18 === e
                    ? (0, Ee.jsx)(Ee.Fragment, {
                        children: (0, Ee.jsxs)("div", {
                          className: "notif-coopt",
                          style: { display: "grid" },
                          children: [
                            (0, Ee.jsx)("div", {
                              className: "email-create-do",
                              style: { marginRight: "35vw" },
                              children: "Object : ",
                            }),
                            (0, Ee.jsx)("textarea", {
                              style: {
                                width: "40vw",
                                height: "7vh",
                                marginBottom: "0vh",
                              },
                              onChange: (e) => V(e.target.value),
                              value: Y,
                            }),
                            (0, Ee.jsx)("div", {
                              className: "email-create-do",
                              style: { marginRight: "35vw" },
                              children: "Message : ",
                            }),
                            (0, Ee.jsx)("textarea", {
                              style: { width: "40vw", height: "30vh" },
                              onChange: (e) => J(e.target.value),
                              value: Q,
                            }),
                            (0, Ee.jsx)("button", {
                              style: {
                                marginLeft: "14vw",
                                marginTop: "5vh",
                                fontSize: "3vh",
                              },
                              className: "start-create-do",
                              onClick: () => {
                                t(e + 1),
                                  window.history.pushState(
                                    { question: e + 1 },
                                    ""
                                  );
                              },
                              children: "Send",
                            }),
                          ],
                        }),
                      })
                    : 19 === e
                    ? (0, Ee.jsx)(Ee.Fragment, {
                        children: (0, Ee.jsxs)("div", {
                          children: [
                            (0, Ee.jsxs)("p", {
                              style: {
                                marginTop: "10vh",
                                fontFamily: "Kumbh Sans",
                              },
                              className: "coopt-text",
                              children: [
                                "To conclude, communicate to ",
                                u,
                                " his temporary password using the",
                                (0, Ee.jsx)("br", {}),
                                "method you usually do and remind him to check his emails:",
                              ],
                            }),
                            (0, Ee.jsxs)("p", {
                              style: { fontFamily: "Kumbh Sans" },
                              className: "coopt-text",
                              children: [
                                "Temporary password :",
                                (0, Ee.jsx)("br", {}),
                                " 123456",
                              ],
                            }),
                            (0, Ee.jsx)("button", {
                              style: { marginLeft: "19vw", marginTop: "10vh" },
                              className: "start-create-do",
                              onClick: () => {
                                const e = localStorage.getItem("userId"),
                                  n = {
                                    FirstName: u,
                                    LastName: h,
                                    Email: l,
                                    password: "123456",
                                    id_do: K,
                                    first_connection: "1",
                                    UserNameId: e,
                                    subjectMail: Y,
                                    textMail: Q,
                                  };
                                fetch(
                                  "https://tkwbackendcdl.onrender.comcooptTalent/api/coopt",
                                  {
                                    method: "POST",
                                    headers: {
                                      "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify(n),
                                  }
                                )
                                  .then((e) => {
                                    console.log("here"), console.log(e);
                                  })
                                  .catch((e) => {
                                    console.error(
                                      "Erreur lors de l'inscription :",
                                      e
                                    );
                                  }),
                                  t(21),
                                  window.history.pushState(
                                    { question: 21 },
                                    ""
                                  );
                              },
                              children: "Done",
                            }),
                          ],
                        }),
                      })
                    : 20 === e
                    ? (0, Ee.jsxs)(Ee.Fragment, {
                        children: [
                          (0, Ee.jsxs)("p", {
                            style: { marginBottom: "0vh" },
                            className: "create-do",
                            children: [
                              "Oups, you can\u2019t earn Thanks from MKIF, but...",
                              (0, Ee.jsx)("br", {}),
                              " ",
                              (0, Ee.jsx)("br", {}),
                              (0, Ee.jsx)("br", {}),
                            ],
                          }),
                          (0, Ee.jsxs)("div", {
                            className: "explain-coopt",
                            children: [
                              (0, Ee.jsxs)("div", {
                                style: {
                                  fontFamily: "Kumbh Sans",
                                  fontSize: "3vh",
                                  fontWeight: "700",
                                  marginLeft: "2vw",
                                  marginTop: "0vh",
                                },
                                children: [
                                  "The email you entered is already in use, meaning ",
                                  u,
                                  " is already part of the",
                                  (0, Ee.jsx)("br", {}),
                                  "Thankward family",
                                  (0, Ee.jsx)("br", {}),
                                  (0, Ee.jsx)("br", {}),
                                ],
                              }),
                              (0, Ee.jsxs)("div", {
                                style: {
                                  fontFamily: "Kumbh Sans",
                                  marginLeft: "2vw",
                                },
                                children: [
                                  "However, you can still earn Thanks from your D.O. if he agrees to join. Don't forget to send",
                                  (0, Ee.jsx)("br", {}),
                                  "him a personal message.",
                                  (0, Ee.jsx)("br", {}),
                                ],
                              }),
                            ],
                          }),
                          (0, Ee.jsx)("div", {
                            style: { display: "flex" },
                            children: (0, Ee.jsx)("button", {
                              style: { marginTop: "4vh", marginRight: "5vw" },
                              className: "start-create-do",
                              onClick: () => {
                                const n = K,
                                  r = localStorage.getItem("userId"),
                                  a = {
                                    Email: l,
                                    id_do: n,
                                    UserNameId: r,
                                    subjectMailexist: $,
                                    textMailexist: X,
                                  };
                                fetch(
                                  "https://tkwbackendcdl.onrender.comcooptTalent/api/cooptExsistedMember",
                                  {
                                    method: "POST",
                                    headers: {
                                      "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify(a),
                                  }
                                )
                                  .then((e) => {
                                    console.log("here"), console.log(e);
                                  })
                                  .catch((e) => {
                                    console.error(
                                      "Erreur lors de l'inscription :",
                                      e
                                    );
                                  }),
                                  t(e + 1),
                                  window.history.pushState(
                                    { question: e + 1 },
                                    ""
                                  );
                              },
                              children: "Close",
                            }),
                          }),
                        ],
                      })
                    : (0, Ee.jsxs)(Ee.Fragment, {
                        children: [
                          (0, Ee.jsxs)("p", {
                            className: "create-do",
                            children: [
                              "Do you want to co-opt other people you want collaborate with or",
                              (0, Ee.jsx)("br", {}),
                              "start Execution?",
                            ],
                          }),
                          (0, Ee.jsx)("button", {
                            className: "start-create-do",
                            onClick: () => {
                              const e = { id_membre: I, id_do: K };
                              fetch(
                                "https://tkwbackendcdl.onrender.comCreateSponsorizeDO/addDOtoCreator",
                                {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify(e),
                                }
                              )
                                .then((e) => {
                                  200 === e.status &&
                                    e.json().then((e) => {
                                      localStorage.setItem("do_ids", e.do_ids);
                                    });
                                })
                                .catch((e) => {
                                  console.error(
                                    "Erreur lors de la creation de DO :",
                                    e
                                  );
                                }),
                                t(15),
                                window.history.pushState({ question: 15 }, "");
                            },
                            children: "Co-opt",
                          }),
                          (0, Ee.jsx)(ke, {
                            to: "/DIO",
                            children: (0, Ee.jsx)("button", {
                              className: "start-create-do",
                              onClick: () => te(K),
                              children: "Execution",
                            }),
                          }),
                        ],
                      }),
              }),
            }),
          });
        };
      const Fn = function () {
          const [e, t] = (0, a.useState)(null),
            n = X();
          return (
            (0, a.useEffect)(() => {
              const e = n.pathname;
              t(e);
            }, [n]),
            (0, a.useEffect)(() => {
              fetch("/api/content")
                .then((e) => e.json())
                .catch((e) => console.error("Error fetching data:", e));
            }, []),
            (0, Ee.jsxs)("div", {
              className: "sidebar",
              children: [
                (0, Ee.jsx)(ke, {
                  to: "/Homepage",
                  className: "sidebar-section-logo ",
                  children: (0, Ee.jsx)("img", {
                    className: "logo",
                    style: {
                      height: "32vh",
                      marginBottom: "2vh",
                      marginTop: "0",
                    },
                    src: Te,
                    alt: "",
                  }),
                }),
                (0, Ee.jsx)(ke, {
                  to: "/DIO",
                  className: "sidebar-section-link ".concat(
                    "/DIO" === e ? "active" : ""
                  ),
                  children: (0, Ee.jsx)("span", { children: "My Feed" }),
                }),
                (0, Ee.jsx)(ke, {
                  to: "/ExecutionBoard",
                  className: "sidebar-section-link ".concat(
                    "/ExecutionBoard" === e ? "active" : ""
                  ),
                  children: (0, Ee.jsx)("span", {
                    children: "Must & Might Actions",
                  }),
                }),
                (0, Ee.jsx)(ke, {
                  to: "/Coopt",
                  className: "sidebar-section-link ".concat(
                    "/Co-opt" === e ? "active" : ""
                  ),
                  children: (0, Ee.jsx)("span", { children: "Co-opt Talent" }),
                }),
                (0, Ee.jsxs)(ke, {
                  className: "sidebar-section-link ",
                  children: [
                    (0, Ee.jsx)("span", { children: "Share your Idea" }),
                    (0, Ee.jsx)("div", {
                      style: { marginLeft: "4vw" },
                      className: "soon",
                      children: "Soon",
                    }),
                  ],
                }),
                (0, Ee.jsxs)(ke, {
                  className: "sidebar-section-link ",
                  children: [
                    (0, Ee.jsx)("span", { children: "Pilot your D.O." }),
                    (0, Ee.jsx)("div", {
                      style: { marginLeft: "4.5vw" },
                      className: "soon",
                      children: "Soon",
                    }),
                  ],
                }),
                (0, Ee.jsx)(ke, {
                  to: "/Archives",
                  className: "sidebar-section-link ".concat(
                    "/Archives" === e ? "active" : ""
                  ),
                  children: (0, Ee.jsx)("span", {
                    children: "My Achievements",
                  }),
                }),
                (0, Ee.jsx)("div", { className: "sidebar-section espace" }),
                (0, Ee.jsx)(ke, {
                  to: "/Myprofile",
                  className: "sidebar-section-link ",
                  children: (0, Ee.jsx)("span", { children: "Need help" }),
                }),
              ],
            })
          );
        },
        Ln = n.p + "static/media/hand-right.37bed83897ada8e631b5.png",
        zn = n.p + "static/media/hand-left.32666649948c61a24ed4.png";
      function An(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) e[r] = n[r];
        }
        return e;
      }
      var Un = (function e(t, n) {
        function r(e, r, a) {
          if ("undefined" !== typeof document) {
            "number" === typeof (a = An({}, n, a)).expires &&
              (a.expires = new Date(Date.now() + 864e5 * a.expires)),
              a.expires && (a.expires = a.expires.toUTCString()),
              (e = encodeURIComponent(e)
                .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                .replace(/[()]/g, escape));
            var o = "";
            for (var i in a)
              a[i] &&
                ((o += "; " + i),
                !0 !== a[i] && (o += "=" + a[i].split(";")[0]));
            return (document.cookie = e + "=" + t.write(r, e) + o);
          }
        }
        return Object.create(
          {
            set: r,
            get: function (e) {
              if ("undefined" !== typeof document && (!arguments.length || e)) {
                for (
                  var n = document.cookie ? document.cookie.split("; ") : [],
                    r = {},
                    a = 0;
                  a < n.length;
                  a++
                ) {
                  var o = n[a].split("="),
                    i = o.slice(1).join("=");
                  try {
                    var s = decodeURIComponent(o[0]);
                    if (((r[s] = t.read(i, s)), e === s)) break;
                  } catch (l) {}
                }
                return e ? r[e] : r;
              }
            },
            remove: function (e, t) {
              r(e, "", An({}, t, { expires: -1 }));
            },
            withAttributes: function (t) {
              return e(this.converter, An({}, this.attributes, t));
            },
            withConverter: function (t) {
              return e(An({}, this.converter, t), this.attributes);
            },
          },
          {
            attributes: { value: Object.freeze(n) },
            converter: { value: Object.freeze(t) },
          }
        );
      })(
        {
          read: function (e) {
            return (
              '"' === e[0] && (e = e.slice(1, -1)),
              e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
            );
          },
          write: function (e) {
            return encodeURIComponent(e).replace(
              /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
              decodeURIComponent
            );
          },
        },
        { path: "/" }
      );
      const Mn = (e) => {
          let { executionId: t, setShowPeerReview: n } = e;
          const [r, o] = (0, a.useState)(""),
            i = Un.get("token"),
            [s, l] = (0, a.useState)(0),
            [c, u] = (0, a.useState)(0),
            [d, h] = (0, a.useState)(""),
            [f, p] = (0, a.useState)(0);
          (0, a.useEffect)(() => {
            wn.get("https://tkwbackendcdl.onrender.comreview/" + t).then(
              (e) => {
                e.data.exec_content
                  ? (o(e.data.exec_content), console.log(r))
                  : (o("There is no content for this execution"),
                    console.log(r));
              }
            );
          }, [t, r]);
          const m = (e) => {
              p(1), l(e);
            },
            v = (e) => {
              p(2), u(e);
            };
          return (0, Ee.jsx)("div", {
            className: "review-container",
            children:
              0 === f
                ? (0, Ee.jsxs)(Ee.Fragment, {
                    children: [
                      (0, Ee.jsxs)("h4", {
                        style: { marginTop: "-2vh" },
                        children: [
                          " ",
                          (0, Ee.jsx)("div", {
                            style: { marginLeft: "15vw" },
                            children: "Assessment of Result Quality:",
                          }),
                          " ",
                          (0, Ee.jsx)("div", {
                            style: { fontWeight: "400", fontSize: "70%" },
                            children:
                              "evaluates if task outcomes meet or exceed expectations, focusing on effectiveness and precision. It highlights how well the work aligns with goals and benchmarks, emphasizing thoroughness and excellence.",
                          }),
                        ],
                      }),
                      (0, Ee.jsx)("h3", {
                        className: "question-peerreview",
                        style: {
                          fontSize: "1.5vw",
                          marginTop: "0vh",
                          marginBottom: "3vh",
                        },
                        children:
                          "How would you rate the quality of the result achieved by this individual's execution?",
                      }),
                      (0, Ee.jsx)("button", {
                        className: "evaluation-button",
                        style: {
                          backgroundColor: "#E7827C",
                          fontSize: "1.5vw",
                          marginBottom: "1vh",
                          marginTop: "0vh",
                        },
                        onClick: () => m(0),
                        children: (0, Ee.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          },
                          children: [
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "1.2em" },
                              children: "Basic",
                            }),
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "0.7em" },
                              children: "Meets minimum requirements",
                            }),
                          ],
                        }),
                      }),
                      (0, Ee.jsx)("button", {
                        className: "evaluation-button",
                        style: {
                          backgroundColor: "#F8BB45",
                          fontSize: "1.5vw",
                          marginBottom: "1vh",
                        },
                        onClick: () => m(1),
                        children: (0, Ee.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          },
                          children: [
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "1.2em" },
                              children: " Good",
                            }),
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "0.7em" },
                              children: "Meets all requirements well",
                            }),
                          ],
                        }),
                      }),
                      (0, Ee.jsx)("button", {
                        className: "evaluation-button",
                        style: {
                          backgroundColor: "#B0D715",
                          fontSize: "1.5vw",
                          marginBottom: "1vh",
                        },
                        onClick: () => m(2),
                        children: (0, Ee.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          },
                          children: [
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "1.2em" },
                              children: "High ",
                            }),
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "0.7em" },
                              children: "Exceeds requirements, high precision",
                            }),
                          ],
                        }),
                      }),
                      (0, Ee.jsx)("button", {
                        className: "evaluation-button",
                        style: {
                          backgroundColor: "#248D35",
                          fontSize: "1.5vw",
                          marginBottom: "1vh",
                        },
                        onClick: () => m(3),
                        children: (0, Ee.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          },
                          children: [
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "1.2em" },
                              children: "Outstanding ",
                            }),
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "0.7em" },
                              children:
                                "Far exceeds expectations, exceptional detail",
                            }),
                          ],
                        }),
                      }),
                    ],
                  })
                : 1 === f
                ? (0, Ee.jsxs)(Ee.Fragment, {
                    children: [
                      (0, Ee.jsxs)("h4", {
                        style: { marginTop: "-2vh" },
                        children: [
                          " ",
                          (0, Ee.jsx)("div", {
                            style: { marginLeft: "12vw" },
                            children: "Comprehensive Reactivity Assessment :",
                          }),
                          " ",
                          (0, Ee.jsx)("div", {
                            style: { fontWeight: "400", fontSize: "70%" },
                            children:
                              "evaluates the speed of response to execution needs, adherence to deadlines, and adaptability to new information and changes. This reflects an individual's capacity to navigate dynamic environments and deliver timely, flexible solutions.",
                          }),
                        ],
                      }),
                      (0, Ee.jsx)("h3", {
                        className: "question-peerreview",
                        style: {
                          fontSize: "1.5vw",
                          marginTop: "0vh",
                          marginBottom: "5vh",
                        },
                        children:
                          "How would you rate the execution performer overall reactivity ?",
                      }),
                      (0, Ee.jsx)("button", {
                        className: "evaluation-button",
                        style: {
                          backgroundColor: "#E7827C",
                          fontSize: "1.5vw",
                          marginBottom: "1vh",
                          marginTop: "2vh",
                        },
                        onClick: () => v(0),
                        children: (0, Ee.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          },
                          children: [
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "1.2em" },
                              children: "Responsive  ",
                            }),
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "0.7em" },
                              children: "Basic needs met",
                            }),
                          ],
                        }),
                      }),
                      (0, Ee.jsx)("button", {
                        className: "evaluation-button",
                        style: {
                          backgroundColor: "#F8BB45",
                          fontSize: "1.5vw",
                          marginBottom: "1vh",
                        },
                        onClick: () => v(1),
                        children: (0, Ee.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          },
                          children: [
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "1.2em" },
                              children: " Proactive ",
                            }),
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "0.7em" },
                              children: "Prompt, met deadlines",
                            }),
                          ],
                        }),
                      }),
                      (0, Ee.jsx)("button", {
                        className: "evaluation-button",
                        style: {
                          backgroundColor: "#B0D715",
                          fontSize: "1.5vw",
                          marginBottom: "1vh",
                        },
                        onClick: () => v(2),
                        children: (0, Ee.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          },
                          children: [
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "1.2em" },
                              children: "Agile ",
                            }),
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "0.7em" },
                              children: "Quick, seamless adaptation",
                            }),
                          ],
                        }),
                      }),
                      (0, Ee.jsx)("button", {
                        className: "evaluation-button",
                        style: {
                          backgroundColor: "#248D35",
                          fontSize: "1.5vw",
                          marginBottom: "1vh",
                        },
                        onClick: () => v(3),
                        children: (0, Ee.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          },
                          children: [
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "1.2em" },
                              children: "Exceptional",
                            }),
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "0.7em" },
                              children: "Instant, excelled adaptation",
                            }),
                          ],
                        }),
                      }),
                    ],
                  })
                : 2 === f
                ? (0, Ee.jsxs)(Ee.Fragment, {
                    children: [
                      (0, Ee.jsx)("h3", {
                        className: "result-peerreview",
                        children: "Finally",
                      }),
                      (0, Ee.jsx)("h3", {
                        className: "question-peerreview",
                        style: { textAlign: "center", fontSize: "1.5vw" },
                        children:
                          "What would it take to make the result even better ?",
                      }),
                      (0, Ee.jsx)("input", {
                        className: "input-feed",
                        type: "text",
                        placeholder: "describe it here...",
                        onChange: (e) => h(e.target.value.replace(/,/g, "")),
                        value: d,
                        maxLength: "500",
                        style: { fontSize: "70%" },
                      }),
                      (0, Ee.jsx)("div", {
                        style: {
                          display: "flex",
                          justifyContent: "center",
                          position: "absolute",
                          bottom: "12vh",
                        },
                        children: (0, Ee.jsx)("span", {
                          style: { fontSize: "2vw", cursor: "pointer" },
                          onClick: () => {
                            const e = {
                              executionId: t,
                              userId: localStorage.getItem("userId"),
                              dioId: localStorage.getItem("DOId"),
                              comments: d,
                              expectations: s,
                              reactivity: c,
                            };
                            "" !== d.trim()
                              ? wn
                                  .post(
                                    "https://tkwbackendcdl.onrender.comreview/peerReview",
                                    e,
                                    {
                                      headers: {
                                        Authorization: "Bearer ".concat(i),
                                      },
                                    }
                                  )
                                  .then((e) => {
                                    p(3);
                                  })
                              : alert(
                                  "Please give a feedback to your teammate."
                                );
                          },
                          children: "Send your feedback    \u27a1",
                        }),
                      }),
                    ],
                  })
                : (0, Ee.jsxs)(Ee.Fragment, {
                    children: [
                      (0, Ee.jsx)("h1", { children: "CONGRATULATION !" }),
                      (0, Ee.jsx)(Ee.Fragment, {
                        children: (0, Ee.jsx)("p", {
                          children:
                            "You will receive your Thanks at the end of the peer review",
                        }),
                      }),
                      (0, Ee.jsxs)("div", {
                        className: "congratulations-peer",
                        children: [
                          (0, Ee.jsx)("img", {
                            className: "lefthand_peerreview",
                            alt: "",
                            src: zn,
                          }),
                          (0, Ee.jsx)("button", {
                            className: "backtofeed-button-peer",
                            onClick: () => window.location.reload(),
                            children: "Back to Feed",
                          }),
                          (0, Ee.jsx)("img", {
                            className: "righthand_peerreview",
                            alt: "",
                            src: Ln,
                          }),
                        ],
                      }),
                    ],
                  }),
          });
        },
        Bn = (e) => {
          const [t, n] = (0, a.useState)({
            hours: Math.floor(e / 3600),
            minutes: Math.floor((e % 3600) / 60),
            seconds: e % 60,
          });
          return (
            (0, a.useEffect)(() => {
              let t,
                r = localStorage.getItem("countdownStartTime");
              (r = Date.now()), localStorage.setItem("countdownStartTime", r);
              const a = parseInt(r, 10) + 1e3 * e,
                o = () => {
                  const e = Date.now(),
                    r = Math.max(0, a - e) / 1e3,
                    o = Math.floor(r / 3600),
                    i = Math.floor((r % 3600) / 60),
                    s = Math.floor(r % 60);
                  n({ hours: o, minutes: i, seconds: s }),
                    0 === r && clearInterval(t);
                };
              return (
                o(),
                (t = setInterval(o, 1e3)),
                () => {
                  clearInterval(t);
                }
              );
            }, [e]),
            t
          );
        },
        Wn = (e) => {
          let {
            executionDescription: t,
            setShowEvaluation: n,
            executionId: r,
            executionComment: o,
            executionLink: i,
          } = e;
          const [s, l] = (0, a.useState)(0),
            [c, u] = (0, a.useState)(0),
            [d, h] = (0, a.useState)(24),
            { hours: f, minutes: p, seconds: m } = Bn(60 * d),
            [v, g] = (0, a.useState)(!0),
            y = (e) => {
              const t = Math.ceil(e);
              h(t);
            },
            x = Un.get("token");
          (0, a.useEffect)(() => {
            g(!(d < 6));
          }, [d]);
          const { addProposition: b } = (0, a.useContext)(jn),
            w = (e) => {
              u(e), l(1);
            },
            j = wn.create({ timeout: 6e4 }),
            S = async (e) => {
              try {
                if (0 !== r) {
                  let t = (
                      await j.post(
                        "https://tkwbackendcdl.onrender.comreview/selfReview",
                        {
                          userId: localStorage.getItem("userId"),
                          executionId: r,
                          comment: o,
                          difficulty: c,
                          reactivity: e,
                          userName: localStorage.getItem("userName"),
                        }
                      )
                    ).data.data.responseValue,
                    n = "In review";
                  t < 6 && (n = "Achieved");
                  const a = { DEAD1: 10, DEAD2: 15, DEAD3: 20 };
                  let s = null;
                  console.log(n, s),
                    t > 6 &&
                      (4 === c && 4 === e
                        ? (t = a.DEAD1)
                        : 10 === c || 10 === e
                        ? (t = a.DEAD2)
                        : (20 !== c && 20 !== e) || (t = a.DEAD3),
                      (s = 60 * t)),
                    y(t),
                    console.log(t, n, s),
                    l(3),
                    await j.post(
                      "https://tkwbackendcdl.onrender.comexecution/updateStatus",
                      { executionId: r, status: n, remaining_time: s, Link: i },
                      { headers: { Authorization: "Bearer ".concat(x) } }
                    );
                } else {
                  const n = await j.post(
                    "https://tkwbackendcdl.onrender.comexecution/workDone",
                    {
                      userId: localStorage.getItem("userId"),
                      executionDescription: t,
                      dioId: localStorage.getItem("DOId"),
                      status: "In review",
                      link: i,
                    },
                    { headers: { Authorization: "Bearer ".concat(x) } }
                  );
                  b(t);
                  const r = n.data.insertId,
                    a = {
                      userId: localStorage.getItem("userId"),
                      executionId: r,
                      comment: o,
                      userName: localStorage.getItem("userName"),
                      dioId: localStorage.getItem("DOId"),
                      difficulty: c,
                      reactivity: e,
                    };
                  let s = (
                      await j.post(
                        "https://tkwbackendcdl.onrender.comreview/selfReview",
                        a,
                        { headers: { Authorization: "Bearer ".concat(x) } }
                      )
                    ).data.data.responseValue,
                    u = "In review";
                  s < 6 && (u = "Achieved");
                  const d = { DEAD1: 10, DEAD2: 15, DEAD3: 20 };
                  let h = null;
                  console.log(u, h),
                    s > 6 &&
                      (4 === a.difficulty && 4 === e
                        ? (s = d.DEAD1)
                        : 10 === a.difficulty || 10 === e
                        ? (s = d.DEAD2)
                        : (20 !== a.difficulty && 20 !== e) || (s = d.DEAD3),
                      (h = 60 * s)),
                    y(s),
                    console.log(s, u, h),
                    l(3),
                    await j.post(
                      "https://tkwbackendcdl.onrender.comexecution/updateStatus",
                      { executionId: r, status: u, remaining_time: h, Link: i },
                      { headers: { Authorization: "Bearer ".concat(x) } }
                    );
                }
              } catch (n) {
                console.error("There was an error with the request:", n),
                  alert("An error occurred. Please try again.");
              }
            };
          return (0, Ee.jsx)("div", {
            className: "evaluation-container",
            children:
              0 === s
                ? (0, Ee.jsxs)(Ee.Fragment, {
                    children: [
                      (0, Ee.jsxs)("h4", {
                        children: [
                          (0, Ee.jsx)("div", {
                            style: { marginLeft: "18vw" },
                            children: "Complexity of an Execution :",
                          }),
                          " ",
                          (0, Ee.jsx)("div", {
                            style: { fontWeight: "400" },
                            children:
                              "This axis measures the inherent difficulty or complexity of the task executed, considering factors like technical difficulty, required creativity, problem-solving, and the level of skill or knowledge needed",
                          }),
                        ],
                      }),
                      (0, Ee.jsx)("h2", {
                        children: "How complex was your task?",
                      }),
                      (0, Ee.jsx)("button", {
                        className: "evaluation-button-selfreview",
                        onClick: () => w(0),
                        children: (0, Ee.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginLeft: "8.5vw",
                          },
                          children: [
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "1.2em" },
                              children: "Simple",
                            }),
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "0.7em" },
                              children: "Minimal skill needed",
                            }),
                          ],
                        }),
                      }),
                      (0, Ee.jsx)("button", {
                        className: "evaluation-button-selfreview",
                        onClick: () => w(1),
                        children: (0, Ee.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginLeft: "6.5vw",
                          },
                          children: [
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "1.2em" },
                              children: "Moderate ",
                            }),
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "0.7em" },
                              children: "Some skill and creativity needed",
                            }),
                          ],
                        }),
                      }),
                      (0, Ee.jsx)("button", {
                        className: "evaluation-button-selfreview",
                        onClick: () => w(2),
                        children: (0, Ee.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginLeft: "6vw",
                          },
                          children: [
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "1.2em" },
                              children: "Complex ",
                            }),
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "0.7em" },
                              children: "Advanced skills, creativity needed",
                            }),
                          ],
                        }),
                      }),
                      (0, Ee.jsx)("button", {
                        className: "evaluation-button-selfreview",
                        onClick: () => w(3),
                        children: (0, Ee.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginLeft: "4.5vw",
                          },
                          children: [
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "1.2em" },
                              children: "Highly Complex ",
                            }),
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "0.7em" },
                              children:
                                "Expert skills, innovative problem-solving needed",
                            }),
                          ],
                        }),
                      }),
                    ],
                  })
                : 1 === s
                ? (0, Ee.jsxs)(Ee.Fragment, {
                    children: [
                      (0, Ee.jsxs)("h4", {
                        children: [
                          (0, Ee.jsx)("div", {
                            style: { marginLeft: "18vw" },
                            children: "Repetition of an Execution :",
                          }),
                          " ",
                          (0, Ee.jsx)("div", {
                            style: { fontWeight: "400" },
                            children:
                              "This axis assesses how frequently the task is performed or its novelty. It can provide insight into the task's uniqueness and the potential for learning or improvement.",
                          }),
                        ],
                      }),
                      (0, Ee.jsx)("h2", {
                        children:
                          " How often have you done this type of task ?",
                      }),
                      (0, Ee.jsx)("button", {
                        className: "evaluation-button-selfreview",
                        onClick: () => S(0),
                        children: (0, Ee.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginLeft: "7.5vw",
                          },
                          children: [
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "1.2em" },
                              children: "Routine ",
                            }),
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "0.7em" },
                              children: "Regularly, with little change.",
                            }),
                          ],
                        }),
                      }),
                      (0, Ee.jsx)("button", {
                        className: "evaluation-button-selfreview",
                        onClick: () => S(1),
                        children: (0, Ee.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginLeft: "5vw",
                          },
                          children: [
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "1.2em" },
                              children: "Occasionally Repeated ",
                            }),
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "0.7em" },
                              children: "Sometimes, with variations.",
                            }),
                          ],
                        }),
                      }),
                      (0, Ee.jsx)("button", {
                        className: "evaluation-button-selfreview",
                        onClick: () => S(2),
                        children: (0, Ee.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginLeft: "6vw",
                          },
                          children: [
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "1.2em" },
                              children: "Rare ",
                            }),
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "0.7em" },
                              children: "Seldom, with learning opportunities.",
                            }),
                          ],
                        }),
                      }),
                      (0, Ee.jsx)("button", {
                        className: "evaluation-button-selfreview",
                        onClick: () => S(3),
                        children: (0, Ee.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginLeft: "6vw",
                          },
                          children: [
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "1.2em" },
                              children: "Novel  ",
                            }),
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "0.7em" },
                              children:
                                "First time, highest learning potential.",
                            }),
                          ],
                        }),
                      }),
                    ],
                  })
                : (0, Ee.jsxs)(Ee.Fragment, {
                    children: [
                      (0, Ee.jsx)("div", {
                        className: "congratulations-text",
                        children: "CONGRATULATION !",
                      }),
                      v
                        ? (0, Ee.jsxs)(Ee.Fragment, {
                            children: [
                              (0, Ee.jsx)("div", {
                                className: "thanks-text",
                                children: "You will see your thanks in",
                              }),
                              (0, Ee.jsx)("div", {
                                className: "thanks-text",
                                children: ""
                                  .concat(f, "H:")
                                  .concat(p, "Mn:")
                                  .concat(m, "s"),
                              }),
                            ],
                          })
                        : (0, Ee.jsxs)(Ee.Fragment, {
                            children: [
                              (0, Ee.jsx)("div", {
                                className: "thanks-text",
                                children: " You win thanks for your work",
                              }),
                              (0, Ee.jsx)("div", {
                                className: "thanks-text",
                                children: "".concat(d, " Thanks"),
                              }),
                            ],
                          }),
                      (0, Ee.jsxs)("div", {
                        className: "congratulations",
                        children: [
                          (0, Ee.jsx)("img", {
                            className: "lefthand_self",
                            alt: "lefthand",
                            src: zn,
                          }),
                          (0, Ee.jsx)("button", {
                            className: "backtofeed-button-self",
                            onClick: () => window.location.reload(),
                            children: "Back to Feed",
                          }),
                          (0, Ee.jsx)("img", {
                            className: "righthand_self",
                            alt: "righthand",
                            src: Ln,
                          }),
                        ],
                      }),
                    ],
                  }),
          });
        },
        Hn = (e) => {
          let { executionId: t, setShowEvaluation: n, setShowPopUpCEO: r } = e;
          const [o, i] = (0, a.useState)(1),
            [s, l] = (0, a.useState)(0),
            [c, u] = (0, a.useState)(0),
            [d, h] = (0, a.useState)(""),
            f = (e) => {
              l(e), i(2);
            },
            p = (e) => {
              u(e), i(3);
            },
            m = Un.get("token");
          return (0, Ee.jsx)("div", {
            className: "evaluation-container",
            children:
              0 === o
                ? (0, Ee.jsx)(Ee.Fragment, {
                    children: (0, Ee.jsx)("button", {
                      className: "evaluation-button-ceoreview",
                      onClick: () => i(1),
                      children: "Next",
                    }),
                  })
                : 1 === o
                ? (0, Ee.jsxs)(Ee.Fragment, {
                    children: [
                      (0, Ee.jsxs)("h4", {
                        style: { marginTop: "0vh" },
                        children: [
                          " ",
                          (0, Ee.jsx)("div", {
                            style: { marginLeft: "17vw", fontSize: "120%" },
                            children: "Assessment of Result Quality:",
                          }),
                          " ",
                          (0, Ee.jsx)("div", {
                            style: { fontWeight: "400", fontSize: "100%" },
                            children:
                              "evaluates if task outcomes meet or exceed expectations, focusing on effectiveness and precision. It highlights how well the work aligns with goals and benchmarks, emphasizing thoroughness and excellence.",
                          }),
                        ],
                      }),
                      (0, Ee.jsx)("h3", {
                        className: "question-peerreview",
                        style: { fontSize: "1.5vw", marginTop: "1vh" },
                        children:
                          "How would you rate the quality of the result achieved by this individual's execution?",
                      }),
                      (0, Ee.jsx)("button", {
                        className: "evaluation-button",
                        style: {
                          backgroundColor: "#E7827C",
                          fontSize: "1.5vw",
                          marginBottom: "1vh",
                          marginTop: "-3vh",
                        },
                        onClick: () => f(0),
                        children: (0, Ee.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          },
                          children: [
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "1.2em" },
                              children: "Basic",
                            }),
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "0.7em" },
                              children: "Meets minimum requirements",
                            }),
                          ],
                        }),
                      }),
                      (0, Ee.jsx)("button", {
                        className: "evaluation-button",
                        style: {
                          backgroundColor: "#F8BB45",
                          fontSize: "1.5vw",
                          marginBottom: "1vh",
                        },
                        onClick: () => f(1),
                        children: (0, Ee.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          },
                          children: [
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "1.2em" },
                              children: " Good",
                            }),
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "0.7em" },
                              children: "Meets all requirements well",
                            }),
                          ],
                        }),
                      }),
                      (0, Ee.jsx)("button", {
                        className: "evaluation-button",
                        style: {
                          backgroundColor: "#B0D715",
                          fontSize: "1.5vw",
                          marginBottom: "1vh",
                        },
                        onClick: () => f(2),
                        children: (0, Ee.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          },
                          children: [
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "1.2em" },
                              children: "High ",
                            }),
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "0.7em" },
                              children: "Exceeds requirements, high precision",
                            }),
                          ],
                        }),
                      }),
                      (0, Ee.jsx)("button", {
                        className: "evaluation-button",
                        style: {
                          backgroundColor: "#248D35",
                          fontSize: "1.5vw",
                          marginBottom: "1vh",
                        },
                        onClick: () => f(3),
                        children: (0, Ee.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          },
                          children: [
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "1.2em" },
                              children: "Outstanding ",
                            }),
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "0.7em" },
                              children:
                                "Far exceeds expectations, exceptional detail",
                            }),
                          ],
                        }),
                      }),
                    ],
                  })
                : 2 === o
                ? (0, Ee.jsxs)(Ee.Fragment, {
                    children: [
                      (0, Ee.jsxs)("h4", {
                        style: { marginTop: "0vh" },
                        children: [
                          " ",
                          (0, Ee.jsx)("div", {
                            style: { marginLeft: "15vw", fontSize: "120%" },
                            children: "Comprehensive Reactivity Assessment :",
                          }),
                          " ",
                          (0, Ee.jsx)("div", {
                            style: { fontWeight: "400", fontSize: "100%" },
                            children:
                              "evaluates the speed of response to execution needs, adherence to deadlines, and adaptability to new information and changes. This reflects an individual's capacity to navigate dynamic environments and deliver timely, flexible solutions.",
                          }),
                        ],
                      }),
                      (0, Ee.jsx)("h3", {
                        className: "question-peerreview",
                        style: { fontSize: "1.5vw" },
                        children:
                          "How would you rate the execution performer overall reactivity ?",
                      }),
                      (0, Ee.jsx)("button", {
                        className: "evaluation-button",
                        style: {
                          backgroundColor: "#E7827C",
                          fontSize: "1.5vw",
                          marginBottom: "1vh",
                          marginTop: "-3vh",
                        },
                        onClick: () => p(0),
                        children: (0, Ee.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          },
                          children: [
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "1.2em" },
                              children: "Responsive  ",
                            }),
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "0.7em" },
                              children: "Basic needs met",
                            }),
                          ],
                        }),
                      }),
                      (0, Ee.jsx)("button", {
                        className: "evaluation-button",
                        style: {
                          backgroundColor: "#F8BB45",
                          fontSize: "1.5vw",
                          marginBottom: "1vh",
                        },
                        onClick: () => p(1),
                        children: (0, Ee.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          },
                          children: [
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "1.2em" },
                              children: " Proactive ",
                            }),
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "0.7em" },
                              children: "Prompt, met deadlines",
                            }),
                          ],
                        }),
                      }),
                      (0, Ee.jsx)("button", {
                        className: "evaluation-button",
                        style: {
                          backgroundColor: "#B0D715",
                          fontSize: "1.5vw",
                          marginBottom: "1vh",
                        },
                        onClick: () => p(2),
                        children: (0, Ee.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          },
                          children: [
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "1.2em" },
                              children: "Agile ",
                            }),
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "0.7em" },
                              children: "Quick, seamless adaptation",
                            }),
                          ],
                        }),
                      }),
                      (0, Ee.jsx)("button", {
                        className: "evaluation-button",
                        style: {
                          backgroundColor: "#248D35",
                          fontSize: "1.5vw",
                          marginBottom: "1vh",
                        },
                        onClick: () => p(3),
                        children: (0, Ee.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          },
                          children: [
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "1.2em" },
                              children: "Exceptional",
                            }),
                            (0, Ee.jsx)("span", {
                              style: { fontSize: "0.7em" },
                              children: "Instant, excelled adaptation",
                            }),
                          ],
                        }),
                      }),
                    ],
                  })
                : 3 === o
                ? (0, Ee.jsxs)(Ee.Fragment, {
                    children: [
                      (0, Ee.jsx)("h3", {
                        className: "result-peerreview",
                        children: "Finally",
                      }),
                      (0, Ee.jsx)("h3", {
                        className: "question-peerreview",
                        style: { textAlign: "center", fontSize: "2.5vw" },
                        children:
                          "What would it take to make the result even better ?",
                      }),
                      (0, Ee.jsx)("input", {
                        className: "input-feed",
                        style: { fontSize: "100%" },
                        type: "text",
                        placeholder:
                          "A constructive feedback makes your teammate better and increase your collective odd of success",
                        onChange: (e) => h(e.target.value),
                        value: d,
                        maxLength: "500",
                      }),
                      (0, Ee.jsx)("div", {
                        style: {
                          display: "flex",
                          justifyContent: "center",
                          position: "absolute",
                          bottom: "120px",
                        },
                        children: (0, Ee.jsx)("span", {
                          style: { fontSize: "2.5vw", cursor: "pointer" },
                          onClick: () => {
                            const e = {
                              executionId: t,
                              userId: localStorage.getItem("userId"),
                              dioId: localStorage.getItem("DOId"),
                              comments: d,
                              expectations: s,
                              reactivity: c,
                            };
                            "" !== d.trim()
                              ? (wn.post(
                                  "https://tkwbackendcdl.onrender.comreview/ceoReview",
                                  e,
                                  {
                                    headers: {
                                      Authorization: "Bearer ".concat(m),
                                    },
                                  }
                                ),
                                i(4))
                              : alert(
                                  "Please give a feedback to your teammate."
                                );
                          },
                          children: "Next    \u27a1",
                        }),
                      }),
                    ],
                  })
                : (0, Ee.jsxs)(Ee.Fragment, {
                    children: [
                      (0, Ee.jsx)("h2", {
                        children: "Thank you for your evaluation!",
                      }),
                      (0, Ee.jsxs)("div", {
                        className: "congratulations",
                        children: [
                          (0, Ee.jsx)("img", {
                            className: "lefthand_ceoevaluation",
                            alt: "",
                            src: zn,
                          }),
                          (0, Ee.jsx)("button", {
                            className: "backtofeed-button_ceoevaluation",
                            onClick: () => window.location.reload(),
                            children: "Back to Fedd",
                          }),
                          (0, Ee.jsx)("img", {
                            className: "righthand_ceoevaluation",
                            alt: "",
                            src: Ln,
                          }),
                        ],
                      }),
                    ],
                  }),
          });
        },
        Kn = (e) => {
          let {
            setShowPopUpLink: t,
            setShowPopUpDeadlineAlreadyDone: n,
            deadline: r,
            setDeadline: o,
          } = e;
          const i = new Date().toISOString().split("T")[0],
            s = (0, a.useRef)(null);
          return (
            (0, a.useEffect)(() => {
              const e = (e) => {
                s.current && !s.current.contains(e.target) && n(!1);
              };
              return (
                document.addEventListener("mousedown", e),
                () => {
                  document.removeEventListener("mousedown", e);
                }
              );
            }, [n]),
            (0, a.useEffect)(() => {
              o(i);
            }, [o, i]),
            (0, Ee.jsxs)("div", {
              ref: s,
              className: "submition-pop-up-work",
              children: [
                (0, Ee.jsx)("h2", { children: "When did you complete that?" }),
                (0, Ee.jsxs)("div", {
                  children: [
                    (0, Ee.jsx)("h3", {
                      style: { fontFamily: "Kumbh Sans" },
                      children: "Select a date",
                    }),
                    (0, Ee.jsx)("input", {
                      type: "date",
                      id: "birthdate",
                      name: "birthdate",
                      className: "date-input",
                      onChange: (e) => {
                        o(e.target.value);
                      },
                      value: r,
                      max: i,
                    }),
                  ],
                }),
                (0, Ee.jsx)("button", {
                  className: "evaluation-button1",
                  style: { marginRight: "20vw" },
                  onClick: () => {
                    n(!1), t(!0);
                  },
                  children: "Next",
                }),
              ],
            })
          );
        },
        qn = (e) => {
          let {
            setShowPopUpLinkNotYet: t,
            setShowPopUpDeadlineNotYet: n,
            initialWorkText: r,
            setWorkText: o,
            deadline: i,
            setDeadline: s,
          } = e;
          const [l, c] = (0, a.useState)(!1),
            u = (0, a.useRef)(null);
          return (
            (0, a.useEffect)(() => {
              const e = (e) => {
                u.current && !u.current.contains(e.target) && n(!1);
              };
              return (
                document.addEventListener("mousedown", e),
                () => {
                  document.removeEventListener("mousedown", e);
                }
              );
            }, [n]),
            (0, Ee.jsxs)("div", {
              ref: u,
              className: "submition-pop-up-work",
              children: [
                (0, Ee.jsx)("h2", {
                  children: "When are you going to do that ?",
                }),
                (0, Ee.jsxs)("div", {
                  children: [
                    (0, Ee.jsx)("h3", {
                      style: { fontFamily: "Kumbh Sans" },
                      children: "Select a date",
                    }),
                    (0, Ee.jsx)("input", {
                      type: "date",
                      id: "birthdate",
                      name: "birthdate",
                      className: "date-input",
                      onChange: (e) => {
                        const t = new Date(e.target.value),
                          n = new Date();
                        n.setHours(0, 0, 0, 0), s(e.target.value), c(t >= n);
                      },
                      value: i,
                      min: new Date().toISOString().split("T")[0],
                    }),
                  ],
                }),
                (0, Ee.jsx)("button", {
                  className: "evaluation-button1",
                  style: { marginRight: "20vw" },
                  onClick: () => {
                    l
                      ? (n(!1), t(!0))
                      : alert(
                          "Please select a valid date that is today or later."
                        );
                  },
                  disabled: !l,
                  children: "Next",
                }),
              ],
            })
          );
        },
        Yn = (e) => {
          let {
            setShowPopUpDeadlineNotYet: t,
            setShowPopUpWorkNotYet: n,
            initialWorkText: r,
            setWorkText: o,
          } = e;
          const [i, s] = (0, a.useState)(r),
            l = (0, a.useRef)(null);
          return (
            (0, a.useEffect)(() => {
              const e = (e) => {
                l.current && !l.current.contains(e.target) && n(!1);
              };
              return (
                document.addEventListener("mousedown", e),
                () => {
                  document.removeEventListener("mousedown", e);
                }
              );
            }, [n]),
            (0, Ee.jsxs)("div", {
              ref: l,
              className: "submition-pop-up-work",
              children: [
                (0, Ee.jsx)("h2", {
                  children: "How are you going to do that ?",
                }),
                (0, Ee.jsx)("textarea", {
                  className: "evaluation-textarea",
                  placeholder:
                    "If you start planning your task now, you're 58% more likely to finish it on time !",
                  value: i,
                  maxLength: "500",
                  onChange: (e) => {
                    s(e.target.value), o(e.target.value);
                  },
                  onKeyDown: (e) => {
                    if ("Enter" === e.key && !e.shiftKey) {
                      e.preventDefault();
                      const { selectionStart: t, selectionEnd: n } = e.target,
                        r = i.substring(0, t) + "\n" + i.substring(n);
                      s(r), o(r), e.target.setSelectionRange(t + 1, t + 1);
                    }
                  },
                }),
                (0, Ee.jsx)("button", {
                  className: "evaluation-button1",
                  onClick: () => {
                    "" !== i.trim()
                      ? (n(!1), t(!0))
                      : alert("Please explain how will you do it.");
                  },
                  children: "Next",
                }),
              ],
            })
          );
        },
        Vn = (e) => {
          let {
            executionDescription: t,
            setShowPopUpLinkNotYet: n,
            alreadyCreated: r,
            forOthers: o,
            executionId: i,
            setExecutionId: s,
            initialWorkText: l,
            executionComment: c,
            deadline: u,
            link: d,
            setLink: h,
          } = e;
          const f = wn.create({ timeout: 6e4 }),
            p = (0, a.useRef)(null);
          return (
            (0, a.useEffect)(() => {
              const e = (e) => {
                p.current && !p.current.contains(e.target) && n(!1);
              };
              return (
                document.addEventListener("mousedown", e),
                () => {
                  document.removeEventListener("mousedown", e);
                }
              );
            }, [n]),
            (0, Ee.jsxs)("div", {
              ref: p,
              className: "submition-pop-up-link",
              children: [
                (0, Ee.jsx)("h2", { children: "Share your input" }),
                (0, Ee.jsxs)("div", {
                  children: [
                    (0, Ee.jsx)("h3", {
                      style: { marginLeft: "5vw" },
                      children: "Add Link",
                    }),
                    (0, Ee.jsx)("input", {
                      className: "evaluation-textarea_link",
                      type: "link",
                      placeholder:
                        "To your cloud folder, Git, figma, website, whatever you use to share document and knowledge  ",
                      value: d,
                      onChange: (e) => {
                        h(e.target.value);
                      },
                    }),
                    (0, Ee.jsx)("h3", {
                      style: { marginLeft: "5vw" },
                      children:
                        "High-quality input improve the final result by 33% and lead to a more positive evaluation of the end product.",
                    }),
                  ],
                }),
                (0, Ee.jsx)("button", {
                  className: "evaluation-button1",
                  onClick: async () => {
                    try {
                      if ((n(!1), !1 === r)) {
                        const e = (
                          await f.post(
                            "https://tkwbackendcdl.onrender.comexecution/workDone",
                            {
                              userId: localStorage.getItem("userId"),
                              executionDescription: t,
                              dioId: localStorage.getItem("DOId"),
                              texte: c,
                              status: "On going",
                              link: null,
                              inputLink: d,
                              deadline: u,
                            }
                          )
                        ).data.insertId;
                        console.log("executionId", e);
                        localStorage.getItem("userId"),
                          localStorage.getItem("userName"),
                          localStorage.getItem("DOId");
                      } else if (!0 === o)
                        await f.post(
                          "https://tkwbackendcdl.onrender.comexecution/alreadyCreated",
                          {
                            executionId: i,
                            userId: localStorage.getItem("userId"),
                            dioId: localStorage.getItem("DOId"),
                            texte: c,
                            status: "On going",
                            inputLink: d,
                            deadline: u,
                          }
                        );
                      else {
                        await f.post(
                          "https://tkwbackendcdl.onrender.comexecution/alreadyCreated",
                          {
                            executionId: i,
                            userId: localStorage.getItem("userId"),
                            executionDescription: t,
                            dioId: localStorage.getItem("DOId"),
                            texte: c,
                            status: "On going",
                            link: null,
                            inputLink: d,
                            deadline: u,
                          }
                        );
                        localStorage.getItem("userId"),
                          localStorage.getItem("userName"),
                          localStorage.getItem("DOId");
                      }
                      window.location.reload();
                    } catch (e) {
                      console.error("There was an error with the request:", e),
                        alert("An error occurred. Please try again.");
                    }
                  },
                  children: "I'm on it!",
                }),
              ],
            })
          );
        },
        Qn = (e) => {
          let {
            setShowPopUpLinkForOthers: t,
            setShowPopUpDeadlineForOthers: n,
            initialWorkText: r,
            setWorkText: o,
            deadline: i,
            setDeadline: s,
          } = e;
          const [l, c] = (0, a.useState)(!1),
            u = (0, a.useRef)(null);
          return (
            (0, a.useEffect)(() => {
              const e = (e) => {
                u.current && !u.current.contains(e.target) && n(!1);
              };
              return (
                document.addEventListener("mousedown", e),
                () => {
                  document.removeEventListener("mousedown", e);
                }
              );
            }, [n]),
            (0, Ee.jsxs)("div", {
              ref: u,
              className: "submition-pop-up-work",
              children: [
                (0, Ee.jsx)("h2", { children: "When is the outcome needed ?" }),
                (0, Ee.jsxs)("div", {
                  children: [
                    (0, Ee.jsx)("h3", {
                      style: { fontFamily: "Kumbh Sans" },
                      children: "Select a date",
                    }),
                    (0, Ee.jsx)("input", {
                      type: "date",
                      id: "birthdate",
                      name: "birthdate",
                      className: "date-input",
                      onChange: (e) => {
                        const t = new Date(e.target.value),
                          n = new Date();
                        n.setHours(0, 0, 0, 0), s(e.target.value), c(t >= n);
                      },
                      value: i,
                      min: new Date().toISOString().split("T")[0],
                    }),
                  ],
                }),
                (0, Ee.jsx)("button", {
                  className: "evaluation-button1",
                  style: { marginRight: "20vw" },
                  onClick: () => {
                    l
                      ? (n(!1), t(!0))
                      : alert(
                          "Please select a valid date that is today or later."
                        );
                  },
                  children: "Next",
                }),
              ],
            })
          );
        },
        Jn = (e) => {
          let {
            setShowPopUpDeadlineForOthers: t,
            setShowPopUpWorkForOthers: n,
            initialWorkText: r,
            setWorkText: o,
          } = e;
          const [i, s] = (0, a.useState)(r),
            l = (0, a.useRef)(null);
          return (
            (0, a.useEffect)(() => {
              const e = (e) => {
                l.current && !l.current.contains(e.target) && n(!1);
              };
              return (
                document.addEventListener("mousedown", e),
                () => {
                  document.removeEventListener("mousedown", e);
                }
              );
            }, [n]),
            (0, Ee.jsxs)("div", {
              ref: l,
              className: "submition-pop-up-work",
              children: [
                (0, Ee.jsx)("h2", {
                  children: "What would it take to get the expected result ?",
                }),
                (0, Ee.jsx)("textarea", {
                  className: "evaluation-textarea",
                  placeholder:
                    "Giving simple, clear, and direct instructions can improve the quality of work by 49% and reduce unnecessary back-and-forth",
                  value: i,
                  maxLength: "500",
                  onChange: (e) => {
                    s(e.target.value), o(e.target.value);
                  },
                  onKeyDown: (e) => {
                    if ("Enter" === e.key && !e.shiftKey) {
                      e.preventDefault();
                      const { selectionStart: t, selectionEnd: n } = e.target,
                        r = i.substring(0, t) + "\n" + i.substring(n);
                      s(r), o(r), e.target.setSelectionRange(t + 1, t + 1);
                    }
                  },
                }),
                (0, Ee.jsx)("button", {
                  className: "evaluation-button1",
                  onClick: () => {
                    "" !== i.trim()
                      ? (n(!1), t(!0))
                      : alert("Please explain how the talent should do it.");
                  },
                  children: "Next",
                }),
              ],
            })
          );
        },
        $n = (e) => {
          let {
            executionDescription: t,
            setShowPopUpLinkForOthers: n,
            setExecutionId: r,
            initialWorkText: o,
            executionComment: i,
            deadline: s,
            link: l,
            setLink: c,
          } = e;
          const u = wn.create({ timeout: 6e4 }),
            d = (0, a.useRef)(null);
          return (
            (0, a.useEffect)(() => {
              const e = (e) => {
                d.current && !d.current.contains(e.target) && n(!1);
              };
              return (
                document.addEventListener("mousedown", e),
                () => {
                  document.removeEventListener("mousedown", e);
                }
              );
            }, [n]),
            (0, Ee.jsxs)("div", {
              ref: d,
              className: "submition-pop-up-link",
              children: [
                (0, Ee.jsx)("h2", { children: "Share your input" }),
                (0, Ee.jsxs)("div", {
                  children: [
                    (0, Ee.jsx)("h3", {
                      style: { marginLeft: "5vw" },
                      children: "Add Link",
                    }),
                    (0, Ee.jsx)("input", {
                      className: "evaluation-textarea_link",
                      type: "link",
                      placeholder:
                        "To your cloud folder, Git, figma, website, whatever you use to share document and knowledge  ",
                      value: l,
                      onChange: (e) => {
                        c(e.target.value);
                      },
                    }),
                    (0, Ee.jsx)("h3", {
                      style: { marginLeft: "5vw" },
                      children:
                        "High-quality input improve the final result by 33% and lead to a more positive evaluation of the end product.",
                    }),
                  ],
                }),
                (0, Ee.jsx)("button", {
                  className: "evaluation-button1",
                  onClick: async () => {
                    try {
                      n(!1);
                      const e = (
                        await u.post(
                          "https://tkwbackendcdl.onrender.comexecution/workDone",
                          {
                            userId: localStorage.getItem("userId"),
                            executionDescription: t,
                            dioId: localStorage.getItem("DOId"),
                            texte: null,
                            status: "Open",
                            link: null,
                            inputLink: null,
                            instructions: i,
                            instructionsLink: l,
                            Expected_date: s,
                          }
                        )
                      ).data.insertId;
                      console.log("executionId", e);
                      localStorage.getItem("userId"),
                        localStorage.getItem("userName"),
                        localStorage.getItem("DOId");
                      window.location.reload();
                    } catch (e) {
                      console.error("There was an error with the request:", e),
                        alert("An error occurred. Please try again.");
                    }
                  },
                  children: "I'm on it!",
                }),
              ],
            })
          );
        },
        Gn = (e) => {
          let {
            createExecutionText: t,
            setCreateExecutionText: n,
            setShowPopUp: r,
          } = e;
          const a = () => {
            "" !== t && r(!0);
          };
          return (0, Ee.jsx)("div", {
            className: "input-container",
            children: (0, Ee.jsxs)("div", {
              className: "input-submit",
              children: [
                (0, Ee.jsx)("input", {
                  type: "text",
                  placeholder: "Describe what we should do...",
                  className: "message-input",
                  value: t,
                  onChange: (e) => {
                    n(e.target.value);
                  },
                  onKeyDown: (e) => {
                    "Enter" === e.key && a();
                  },
                }),
                (0, Ee.jsx)("button", {
                  type: "submit",
                  className: "send-button",
                  onClick: () => a(),
                  children: "Make it happen",
                }),
              ],
            }),
          });
        },
        Xn = (e) => {
          let {
            executionDescription: t,
            dioId: n,
            setShowPopUp: r,
            setShowPopUpWorkDone: o,
            setShowPopUpWorkForOthers: i,
          } = e;
          const s = (0, a.useRef)(null);
          return (
            (0, a.useEffect)(() => {
              const e = (e) => {
                s.current && !s.current.contains(e.target) && r(!1);
              };
              return (
                document.addEventListener("mousedown", e),
                () => {
                  document.removeEventListener("mousedown", e);
                }
              );
            }, [r]),
            (0, Ee.jsxs)("div", {
              ref: s,
              className: "submition-pop-up",
              children: [
                (0, Ee.jsx)("div", {
                  className: "who",
                  children: "Who is this for ?",
                }),
                (0, Ee.jsx)("button", {
                  className: "submitButton",
                  onClick: () => {
                    r(!1), o(!0);
                  },
                  children: "It's for me",
                }),
                (0, Ee.jsx)("button", {
                  className: "submitButton",
                  onClick: () => {
                    r(!1), i(!0);
                  },
                  children: "It's for another Talent",
                }),
              ],
            })
          );
        },
        Zn = (e) => {
          let {
            setShowPopUpWorkDone: t,
            setShowPopUpWork: n,
            setShowPopUpWorkNotYet: r,
            setExecutionId: o,
            alreadyCreated: i,
          } = e;
          const s = (0, a.useRef)(null);
          return (
            (0, a.useEffect)(() => {
              const e = (e) => {
                s.current && !s.current.contains(e.target) && t(!1);
              };
              return (
                document.addEventListener("mousedown", e),
                () => {
                  document.removeEventListener("mousedown", e);
                }
              );
            }, [t]),
            (0, Ee.jsxs)("div", {
              ref: s,
              className: "submition-pop-up",
              children: [
                (0, Ee.jsx)("div", {
                  className: "who",
                  children: "What is the status of the task ?",
                }),
                (0, Ee.jsx)("button", {
                  className: "submitButton",
                  onClick: () => {
                    t(!1), r(!0);
                  },
                  children: "Needs to be done",
                }),
                (0, Ee.jsx)("button", {
                  className: "submitButton",
                  onClick: () => {
                    t(!1), n(!0);
                  },
                  children: "Already done",
                }),
              ],
            })
          );
        },
        er = (e) => {
          let {
            setShowPopUpDeadlineAlreadyDone: t,
            setShowPopUpWork: n,
            initialWorkText: r,
            setWorkText: o,
          } = e;
          const [i, s] = (0, a.useState)(r),
            l = (0, a.useRef)(null);
          return (
            (0, a.useEffect)(() => {
              const e = (e) => {
                l.current && !l.current.contains(e.target) && n(!1);
              };
              return (
                document.addEventListener("mousedown", e),
                () => {
                  document.removeEventListener("mousedown", e);
                }
              );
            }, [n]),
            (0, Ee.jsxs)("div", {
              ref: l,
              className: "submition-pop-up-work",
              children: [
                (0, Ee.jsx)("h2", {
                  children: "How did you do and what result you obtained ?",
                }),
                (0, Ee.jsx)("textarea", {
                  className: "evaluation-textarea",
                  placeholder:
                    "If you don\u2019t showcase your work, you lose 30% of your Thanks",
                  value: i,
                  maxLength: "500",
                  onChange: (e) => {
                    s(e.target.value), o(e.target.value);
                  },
                  onKeyDown: (e) => {
                    if ("Enter" === e.key && !e.shiftKey) {
                      e.preventDefault();
                      const { selectionStart: t, selectionEnd: n } = e.target,
                        r = i.substring(0, t) + "\n" + i.substring(n);
                      s(r), o(r), e.target.setSelectionRange(t + 1, t + 1);
                    }
                  },
                }),
                (0, Ee.jsx)("button", {
                  className: "evaluation-button1",
                  onClick: () => {
                    "" !== i.trim()
                      ? (n(!1), t(!0))
                      : alert("Please explain how did you do.");
                  },
                  children: "Next",
                }),
              ],
            })
          );
        },
        tr = (e) => {
          let {
            setShowPopUpLink: t,
            setSelfReview: n,
            executionId: r,
            alreadyCreated: o,
            link: i,
            setLink: s,
          } = e;
          const l = wn.create({ timeout: 6e4 }),
            c = (0, a.useRef)(null);
          return (
            (0, a.useEffect)(() => {
              const e = (e) => {
                c.current && !c.current.contains(e.target) && t(!1);
              };
              return (
                document.addEventListener("mousedown", e),
                () => {
                  document.removeEventListener("mousedown", e);
                }
              );
            }, [t]),
            (0, Ee.jsxs)("div", {
              ref: c,
              className: "submition-pop-up-link",
              children: [
                (0, Ee.jsx)("h2", { children: "Document your work" }),
                (0, Ee.jsxs)("div", {
                  children: [
                    (0, Ee.jsx)("h3", { children: "Add Link" }),
                    (0, Ee.jsx)("input", {
                      className: "evaluation-textarea_link",
                      type: "link",
                      placeholder:
                        "To your cloud folder, Git, figma, website, whatever you use to share document and knowledge  ",
                      value: i,
                      onChange: (e) => {
                        s(e.target.value);
                      },
                    }),
                    (0, Ee.jsx)("h3", {
                      children:
                        "Good to know, sharing proof of work with your Team bring to you 45% additional Thanks !",
                    }),
                  ],
                }),
                (0, Ee.jsx)("button", {
                  className: "evaluation-button1",
                  onClick: async () => {
                    if ("" !== i.trim())
                      try {
                        !0 === o
                          ? (await l.post(
                              "https://tkwbackendcdl.onrender.comexecution/alreadyCreatedForOthers",
                              {
                                executionId: r,
                                userId: localStorage.getItem("userId"),
                                dioId: localStorage.getItem("DOId"),
                                status: "In review",
                                link: i,
                              }
                            ),
                            t(!1),
                            n(!0))
                          : (t(!1), n(!0));
                      } catch (e) {
                        console.error(
                          "There was an error with the request:",
                          e
                        ),
                          alert("An error occurred. Please try again.");
                      }
                    else alert("Please document your work");
                  },
                  children: "I want my Thanks",
                }),
              ],
            })
          );
        },
        nr = {
          fontWeight: "bold",
          justifyContent: "center",
          alignItems: "center",
        },
        rr = (e) => {
          let {
            performor: t,
            talent: n,
            status: r,
            countdown: a,
            achievementDate: o,
            description: i,
            personna: s,
            thanks: l,
            deadline: c,
            expected_date: u,
            date_rejected: d,
          } = e;
          return (0, Ee.jsxs)("div", {
            className: "header-card",
            children: [
              (0, Ee.jsxs)("div", {
                className: "header-card-left",
                children: [
                  (0, Ee.jsxs)("div", {
                    className: "first-row-card",
                    children: [
                      (0, Ee.jsxs)("div", {
                        className: "creator-card",
                        children: [
                          (0, Ee.jsx)("div", { children: "Creator :\xa0" }),
                          (0, Ee.jsxs)("div", {
                            style: nr,
                            children: [" ", n],
                          }),
                          " ",
                        ],
                      }),
                      (0, Ee.jsxs)("div", {
                        className: "statut-card",
                        style: {
                          backgroundColor:
                            "In review" === r
                              ? "#42eae6"
                              : "Achieved" === r
                              ? "#119b98"
                              : "#51b4bd",
                        },
                        children: [
                          "Status :\xa0",
                          (0, Ee.jsx)("div", { style: nr, children: r }),
                        ],
                      }),
                      (0, Ee.jsx)("div", {
                        className: "count-down-card",
                        style: {
                          backgroundColor:
                            "In review" === r
                              ? "#42eae6"
                              : "Achieved" === r
                              ? "#119b98"
                              : "#51b4bd",
                        },
                        children:
                          "In review" === r
                            ? (0, Ee.jsxs)("p", {
                                children: [
                                  "Review Countdown ",
                                  (0, Ee.jsx)("div", {
                                    style: nr,
                                    children: ""
                                      .concat(a.hours, "H:")
                                      .concat(a.minutes, "Mn"),
                                  }),
                                ],
                              })
                            : "Achieved" === r
                            ? (0, Ee.jsxs)("p", {
                                children: [
                                  "Achievement Date : ",
                                  (0, Ee.jsx)("div", {
                                    style: nr,
                                    children: o.substring(0, 10),
                                  }),
                                ],
                              })
                            : "Open" === r
                            ? (0, Ee.jsxs)("p", {
                                children: [
                                  "Expected Date : ",
                                  (0, Ee.jsx)("div", {
                                    style: nr,
                                    children: u && u.substring(0, 10),
                                  }),
                                ],
                              })
                            : "Rejected" === r
                            ? (0, Ee.jsxs)("p", {
                                children: [
                                  "Date of Closing : ",
                                  (0, Ee.jsx)("div", {
                                    style: nr,
                                    children: d && d.substring(0, 10),
                                  }),
                                ],
                              })
                            : (0, Ee.jsxs)("p", {
                                children: [
                                  " \xa0\xa0\xa0\xa0\xa0\xa0 Due Date: \xa0\xa0\xa0\xa0\xa0",
                                  (0, Ee.jsx)("div", {
                                    style: nr,
                                    children: c && c.substring(0, 10),
                                  }),
                                ],
                              }),
                      }),
                    ],
                  }),
                  (0, Ee.jsx)("div", {
                    className: "second-row-card",
                    children: (0, Ee.jsxs)("div", {
                      children: [
                        "Execution description :\xa0",
                        (0, Ee.jsx)("div", { style: nr, children: i }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, Ee.jsxs)("div", {
                className: "header-card-right",
                children: [
                  (0, Ee.jsx)("img", {
                    className: "profile-card",
                    alt: "creator",
                    src: s,
                  }),
                  (0, Ee.jsxs)("div", {
                    className: "name-card",
                    children: [
                      (0, Ee.jsx)("div", { children: "Doer :\xa0" }),
                      " ",
                      (0, Ee.jsxs)("div", {
                        style: nr,
                        children: [" ", t, " "],
                      }),
                    ],
                  }),
                  (0, Ee.jsx)("div", {
                    className: "thanks-score-card",
                    style: {
                      backgroundColor:
                        "In review" === r
                          ? "#42eae6"
                          : "Achieved" === r
                          ? "#119b98"
                          : "#51b4bd",
                    },
                    children:
                      "In review" === r
                        ? (0, Ee.jsxs)("p", {
                            children: [
                              "Thanks :\xa0",
                              (0, Ee.jsx)("div", {
                                style: nr,
                                children: " Not Yet",
                              }),
                            ],
                          })
                        : "Achieved" === r
                        ? (0, Ee.jsxs)("p", {
                            children: [
                              "Thanks :\xa0",
                              (0, Ee.jsx)("div", { style: nr, children: l }),
                              " ",
                            ],
                          })
                        : (0, Ee.jsxs)("p", {
                            children: [
                              "Thanks :\xa0",
                              (0, Ee.jsx)("div", {
                                style: nr,
                                children: " Not Yet",
                              }),
                            ],
                          }),
                  }),
                ],
              }),
            ],
          });
        },
        ar = ["Simple", "Moderate", "Complex", "Highly Complex"],
        or = ["Routine", "Occasionally Repeated", "Rare", "Novel"],
        ir = ["Basic", "Good", "High", "Outstanding"],
        sr = ["Responsive", "Proactive", "Agile", "Exceptional"],
        lr = {
          fontWeight: "bold",
          justifyContent: "center",
          alignItems: "center",
        },
        cr = (e) => {
          let {
            showDetails: t,
            status: n,
            talent: r,
            performor: a,
            userName: o,
            comments: i,
            commentsInput: s,
            link: l,
            linkInput: c,
            Instructions: u,
            linkInstructions: d,
            selfDifficulty: h,
            selfReactivity: f,
            peerReview_comments: p,
            peerReview_expectations: m,
            peerReview_reactivity: v,
            peerReview_comments_notYet: g,
            peerReviewers_ids: y,
            peerReviewers_notYet_ids: x,
            ceo_comments: b,
            ceo_expectations: w,
            ceo_reactivity: j,
            ceoFeedback_notYet: S,
            ceoFeedback_rejected: k,
            deadline: N,
            expected_date: C,
          } = e;
          return (0, Ee.jsx)("div", {
            children:
              t &&
              (0, Ee.jsxs)("div", {
                className: "additional-info",
                children: [
                  (0, Ee.jsx)("div", {
                    className: "additional-first",
                    children: (0, Ee.jsxs)("div", {
                      className: "comment-link",
                      children: [
                        (0, Ee.jsxs)("div", {
                          style: { display: "flex" },
                          children: [
                            i
                              ? (0, Ee.jsxs)("div", {
                                  className: "comments-card",
                                  children: [
                                    (0, Ee.jsx)("div", {
                                      children:
                                        "How it's done and the results: ",
                                    }),
                                    (0, Ee.jsxs)("div", {
                                      style: lr,
                                      children: [" ", i, " "],
                                    }),
                                  ],
                                })
                              : (0, Ee.jsx)(Ee.Fragment, {}),
                            null !== l && 0 !== l.trim().length
                              ? (0, Ee.jsx)("div", {
                                  className: "doc-card",
                                  style: { marginLeft: "2vw" },
                                  children: (0, Ee.jsxs)("p", {
                                    children: [
                                      "Output Doc : ",
                                      (0, Ee.jsx)("a", {
                                        href: l,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "Clic here",
                                      }),
                                      ".",
                                    ],
                                  }),
                                })
                              : (0, Ee.jsx)(Ee.Fragment, {}),
                            "Achieved" === n ||
                            "Rejected" === n ||
                            (a === o && "In review" === n)
                              ? (0, Ee.jsxs)("div", {
                                  className: "auto-eval-card",
                                  children: [
                                    (0, Ee.jsx)("div", {
                                      children: "Auto Evaluation:",
                                    }),
                                    (0, Ee.jsxs)("div", {
                                      className: "com-rep",
                                      children: [
                                        "Complexity : ",
                                        (0, Ee.jsx)("div", {
                                          style: lr,
                                          children: ar[h],
                                        }),
                                      ],
                                    }),
                                    (0, Ee.jsxs)("div", {
                                      className: "com-rep",
                                      children: [
                                        "Repetition : ",
                                        (0, Ee.jsx)("div", {
                                          style: lr,
                                          children: or[f],
                                        }),
                                        " ",
                                      ],
                                    }),
                                  ],
                                })
                              : (0, Ee.jsx)(Ee.Fragment, {}),
                          ],
                        }),
                        (0, Ee.jsxs)("div", {
                          style: { display: "flex" },
                          children: [
                            s
                              ? (0, Ee.jsxs)("div", {
                                  className: "comments-card",
                                  children: [
                                    (0, Ee.jsx)("div", {
                                      children: "The projected how : ",
                                    }),
                                    (0, Ee.jsxs)("div", {
                                      style: lr,
                                      children: [" ", s, " "],
                                    }),
                                  ],
                                })
                              : (0, Ee.jsx)(Ee.Fragment, {}),
                            null !== c && 0 !== c.trim().length
                              ? (0, Ee.jsx)("div", {
                                  className: "doc-card",
                                  style: { marginLeft: "2vw" },
                                  children: (0, Ee.jsxs)("p", {
                                    children: [
                                      "Documentation input : ",
                                      (0, Ee.jsx)("a", {
                                        href: c,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "Clic here",
                                      }),
                                      ".",
                                    ],
                                  }),
                                })
                              : (0, Ee.jsx)(Ee.Fragment, {}),
                            "On going" !== n && N
                              ? (0, Ee.jsxs)("div", {
                                  className: "doc-card",
                                  style: { marginLeft: "2vw" },
                                  children: [
                                    "Due Date : ",
                                    (0, Ee.jsx)("div", {
                                      style: lr,
                                      children: N && N.substring(0, 10),
                                    }),
                                  ],
                                })
                              : (0, Ee.jsx)(Ee.Fragment, {}),
                          ],
                        }),
                        (0, Ee.jsxs)("div", {
                          style: { display: "flex" },
                          children: [
                            u
                              ? (0, Ee.jsxs)("div", {
                                  className: "comments-card",
                                  children: [
                                    (0, Ee.jsx)("div", {
                                      children: "Instructions : ",
                                    }),
                                    (0, Ee.jsxs)("div", {
                                      style: lr,
                                      children: [" ", u, " "],
                                    }),
                                  ],
                                })
                              : (0, Ee.jsx)(Ee.Fragment, {}),
                            d
                              ? (0, Ee.jsx)("div", {
                                  className: "doc-card",
                                  style: { marginLeft: "2vw" },
                                  children: (0, Ee.jsxs)("p", {
                                    children: [
                                      "Instructions doc : ",
                                      (0, Ee.jsx)("a", {
                                        href: d,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "Clic here",
                                      }),
                                      ".",
                                    ],
                                  }),
                                })
                              : (0, Ee.jsx)(Ee.Fragment, {}),
                            "Open" !== n && C
                              ? (0, Ee.jsxs)("div", {
                                  className: "doc-card",
                                  style: { marginLeft: "2vw" },
                                  children: [
                                    "Expected Date : ",
                                    (0, Ee.jsx)("div", {
                                      style: lr,
                                      children: C && C.substring(0, 10),
                                    }),
                                  ],
                                })
                              : (0, Ee.jsx)(Ee.Fragment, {}),
                          ],
                        }),
                      ],
                    }),
                  }),
                  "Achieved" === n || "Rejected" === n
                    ? (0, Ee.jsxs)("div", {
                        className: "additional-second",
                        children: [
                          "" === b && null !== b
                            ? (0, Ee.jsx)("div", {
                                className: "ceo_comments-card",
                                children: (0, Ee.jsx)("p", {
                                  children:
                                    "No CEO FeedBack for this execution",
                                }),
                              })
                            : "" !== b && null !== b
                            ? (0, Ee.jsxs)("div", {
                                className: "ceo_comments-card",
                                children: [
                                  (0, Ee.jsxs)("div", {
                                    children: [
                                      "CEO Evaluation Comment :",
                                      (0, Ee.jsxs)("div", {
                                        style: lr,
                                        children: [" ", b, " "],
                                      }),
                                      " ",
                                    ],
                                  }),
                                  "  ",
                                ],
                              })
                            : (0, Ee.jsx)(Ee.Fragment, {}),
                          null !== w &&
                            null !== j &&
                            (0, Ee.jsxs)("div", {
                              className: "ceo-eval-card",
                              children: [
                                (0, Ee.jsx)("div", {
                                  children: "CEO Evaluation:",
                                }),
                                (0, Ee.jsxs)("div", {
                                  className: "com-rep",
                                  children: [
                                    " Result Quality :",
                                    (0, Ee.jsxs)("div", {
                                      style: lr,
                                      children: [" ", ir[w], " "],
                                    }),
                                  ],
                                }),
                                (0, Ee.jsxs)("div", {
                                  className: "com-rep",
                                  children: [
                                    "Reactivity :",
                                    (0, Ee.jsxs)("div", {
                                      style: lr,
                                      children: [" ", sr[j], " "],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          "Not Yet" === n &&
                            (0, Ee.jsxs)("div", {
                              className: "ceo-eval-card",
                              children: [
                                "CEO Evaluation (NotYet) :",
                                (0, Ee.jsxs)("div", {
                                  style: lr,
                                  children: [" ", S],
                                }),
                                " ",
                              ],
                            }),
                          "Rejected" === n &&
                            (0, Ee.jsxs)("div", {
                              className: "ceo-eval-card",
                              children: [
                                "CEO Evaluation (Rejected) :",
                                (0, Ee.jsxs)("div", {
                                  style: lr,
                                  children: [" ", k],
                                }),
                                " ",
                              ],
                            }),
                        ],
                      })
                    : (0, Ee.jsx)(Ee.Fragment, {}),
                  "Achieved" === n || "Rejected" === n
                    ? (0, Ee.jsxs)("div", {
                        className: "additional-second",
                        children: [
                          "string" === typeof p &&
                            (0, Ee.jsx)("div", {
                              className: "peer_review_comment-card",
                              children: y
                                .split(",")
                                .map((e, t) =>
                                  0 === p.split(",")[t].trim().length ||
                                  "" === p
                                    ? (0, Ee.jsx)("div", {
                                        className: "comments-peer-card",
                                        children: (0, Ee.jsxs)("p", {
                                          children: [
                                            "No Feedback for Anonyme PeerReview ",
                                            t + 1,
                                          ],
                                        }),
                                      })
                                    : (0, Ee.jsxs)("div", {
                                        className: "comments-peer-card",
                                        children: [
                                          "Anonyme PeerReview FeedBack ",
                                          t + 1,
                                          ":",
                                          (0, Ee.jsx)(
                                            "div",
                                            {
                                              style: lr,
                                              children: p.split(",")[t].trim(),
                                            },
                                            "peerComment_".concat(t)
                                          ),
                                        ],
                                      })
                                ),
                            }),
                          m &&
                            "string" === typeof m &&
                            v &&
                            "string" === typeof v &&
                            m.length > 0 &&
                            v.length > 0 &&
                            (0, Ee.jsx)("div", {
                              className: "peer_review_eva-card",
                              children: m
                                .split(",")
                                .map(
                                  (e, t) =>
                                    v.split(",")[t] &&
                                    (0, Ee.jsxs)("div", {
                                      className: "eval-peer-card",
                                      children: [
                                        "PeerReview Evaluation ",
                                        t + 1,
                                        ":",
                                        (0, Ee.jsxs)(
                                          "div",
                                          {
                                            className: "peerExpectation-card",
                                            children: [
                                              (0, Ee.jsxs)("div", {
                                                className: "com-rep",
                                                children: [
                                                  "Result Quality :",
                                                  (0, Ee.jsxs)("div", {
                                                    style: lr,
                                                    children: [
                                                      "  ",
                                                      ir[e.trim()],
                                                      " ",
                                                    ],
                                                  }),
                                                  " ",
                                                ],
                                              }),
                                              (0, Ee.jsxs)("div", {
                                                className: "com-rep",
                                                children: [
                                                  " Reactivity:",
                                                  (0, Ee.jsxs)("div", {
                                                    style: lr,
                                                    children: [
                                                      " ",
                                                      sr[
                                                        v.split(",")[t].trim()
                                                      ],
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          },
                                          "peerExpectation_".concat(t)
                                        ),
                                      ],
                                    })
                                ),
                            }),
                        ],
                      })
                    : (0, Ee.jsx)(Ee.Fragment, {}),
                  "string" === typeof g &&
                    ("Achieved" === n || "Rejected" === n) &&
                    (0, Ee.jsx)("div", {
                      className: "peer_review_comment-card",
                      children:
                        "string" === typeof g &&
                        (0, Ee.jsx)("div", {
                          className: "peer_review_comment-card",
                          children: x
                            .split(",")
                            .map((e, t) =>
                              0 === g.split(",")[t].trim().length || "" === g
                                ? (0, Ee.jsx)("div", {
                                    className: "comments-peer-card",
                                    children: (0, Ee.jsxs)("p", {
                                      children: [
                                        "No Feedback for Anonyme PeerReview ",
                                        t + 1,
                                      ],
                                    }),
                                  })
                                : (0, Ee.jsxs)("div", {
                                    className: "comments-peer-card",
                                    children: [
                                      "Anonyme PeerReview FeedBack Not Yet",
                                      t + 1,
                                      ":",
                                      (0, Ee.jsx)(
                                        "div",
                                        {
                                          style: lr,
                                          children: g.split(",")[t].trim(),
                                        },
                                        "peerComment_".concat(t)
                                      ),
                                    ],
                                  })
                            ),
                        }),
                    }),
                ],
              }),
          });
        },
        ur = (e) => {
          let {
            showDetails: t,
            toggleDetails: n,
            ceo_comments: r,
            status: a,
            id_talent: o,
            id_performer: i,
            userId: s,
            showceopop: l,
            parsedPeerReviewIds: c,
            clickreview: u,
            showsubmitworkpop: d,
            showworkpopup: h,
            id: f,
          } = e;
          const p = {
            fontWeight: "bold",
            justifyContent: "center",
            alignItems: "center",
          };
          let m = parseInt(s, 10);
          return (0, Ee.jsxs)("div", {
            className: "card-footer",
            children: [
              (0, Ee.jsx)("button", {
                className: "plus-card",
                onClick: n,
                style: { fontSize: "2vw" },
                children: t ? "-" : "+",
              }),
              "1" === localStorage.getItem("isCEO")
                ? (0, Ee.jsxs)(Ee.Fragment, {
                    children: [
                      null === r &&
                        "In review" === a &&
                        i !== parseInt(s) &&
                        (0, Ee.jsx)("button", {
                          className: "review-card",
                          onClick: () => l(f),
                          children: (0, Ee.jsx)("div", {
                            style: p,
                            children: " Evaluate it ",
                          }),
                        }),
                      "Not Yet" === a &&
                        o === parseInt(s) &&
                        (0, Ee.jsx)("button", {
                          className: "review-card",
                          children: (0, Ee.jsx)("div", {
                            style: p,
                            children: " Submit my work ",
                          }),
                        }),
                      "On going" === a &&
                        i === parseInt(s) &&
                        (0, Ee.jsx)("button", {
                          className: "review-card",
                          onClick: () => d(f),
                          children: (0, Ee.jsx)("div", {
                            style: p,
                            children: " Submit my work ",
                          }),
                        }),
                      "Open" === a &&
                        (0, Ee.jsx)("button", {
                          className: "review-card",
                          onClick: () => h(f),
                          children: (0, Ee.jsx)("div", {
                            style: p,
                            children: " It\u2019s for me ",
                          }),
                        }),
                    ],
                  })
                : (0, Ee.jsxs)(Ee.Fragment, {
                    children: [
                      !c.includes(m) &&
                        "In review" === a &&
                        i !== parseInt(s) &&
                        (0, Ee.jsx)("button", {
                          className: "review-card",
                          onClick: () => u(f),
                          children: (0, Ee.jsx)("div", {
                            style: p,
                            children: " Make a Review",
                          }),
                        }),
                      c.includes(m) &&
                        "In review" === a &&
                        i !== parseInt(s) &&
                        (0, Ee.jsx)("div", { style: p }),
                      "Open" === a &&
                        (0, Ee.jsx)("button", {
                          className: "review-card",
                          onClick: () => h(f),
                          children: (0, Ee.jsx)("div", {
                            style: p,
                            children: " It\u2019s for me ",
                          }),
                        }),
                      "Not Yet" === a &&
                        o === parseInt(s) &&
                        (0, Ee.jsx)("button", {
                          className: "review-card",
                          children: (0, Ee.jsx)("div", {
                            style: p,
                            children: " Submit my work",
                          }),
                        }),
                      "On going" === a &&
                        i === parseInt(s) &&
                        (0, Ee.jsx)("button", {
                          className: "review-card",
                          onClick: () => d(f),
                          children: (0, Ee.jsx)("div", {
                            style: p,
                            children: " Submit my work",
                          }),
                        }),
                    ],
                  }),
            ],
          });
        },
        dr = (e) => {
          let {
            id: t,
            description: n,
            talent: r,
            performor: o,
            id_talent: i,
            id_performer: s,
            thanks: l,
            status: c,
            remainingTime: u,
            deadline: d,
            comments: h,
            commentsInput: f,
            selfDifficulty: p,
            selfReactivity: m,
            clickreview: v,
            showceopop: g,
            peerReview_comments: y,
            peerReview_comments_notYet: x,
            peerReview_expectations: b,
            peerReview_reactivity: w,
            peerReviewers_ids: j,
            peerReviewers_notYet_ids: S,
            ceo_comments: k,
            ceo_expectations: N,
            ceo_reactivity: C,
            ceoFeedback_notYet: T,
            ceoFeedback_rejected: E,
            date_rejected: _,
            link: O,
            linkInput: I,
            achievement_date: D,
            isCEO: P,
            showsubmitworkpop: R,
            showworkpopup: F,
            expected_date: L,
            Instructions: z,
            linkInstructions: A,
          } = e;
          const { hours: U, minutes: M, seconds: B } = Bn(u),
            [W, H] = (0, a.useState)(!1),
            K = localStorage.getItem("userName"),
            q = localStorage.getItem("userId");
          let Y = [];
          if (
            (j &&
              "string" === typeof j &&
              "" !== j.trim() &&
              (Y = j.split(",").map((e) => parseInt(e.trim(), 10))),
            S && "string" === typeof S && "" !== S.trim())
          ) {
            const e = S.split(",").map((e) => parseInt(e.trim(), 10));
            Y = [...Y, ...e];
          }
          return (0, Ee.jsxs)("div", {
            className: "message-bubble",
            children: [
              (0, Ee.jsx)(rr, {
                performor: o,
                talent: r,
                status: c,
                countdown: { hours: U, minutes: M, seconds: B },
                achievementDate: D,
                description: n,
                personna: kn,
                thanks: l,
                deadline: d,
                expected_date: L,
                date_rejected: _,
              }),
              (0, Ee.jsxs)("div", {
                className: "second",
                children: [
                  (0, Ee.jsx)(cr, {
                    showDetails: W,
                    status: c,
                    talent: r,
                    performor: o,
                    userName: K,
                    comments: h,
                    commentsInput: f,
                    link: O,
                    linkInput: I,
                    selfDifficulty: p,
                    selfReactivity: m,
                    peerReview_comments: y,
                    peerReview_comments_notYet: x,
                    peerReview_expectations: b,
                    peerReview_reactivity: w,
                    peerReviewers_ids: j,
                    peerReviewers_notYet_ids: S,
                    ceo_comments: k,
                    ceo_expectations: N,
                    ceo_reactivity: C,
                    ceoFeedback_notYet: T,
                    ceoFeedback_rejected: E,
                    linkInstructions: A,
                    Instructions: z,
                    deadline: d,
                    expected_date: L,
                  }),
                  (0, Ee.jsx)(ur, {
                    showDetails: W,
                    toggleDetails: () => {
                      H(!W);
                    },
                    ceo_comments: k,
                    id_talent: i,
                    userId: q,
                    isCEO: P,
                    showceopop: g,
                    parsedPeerReviewIds: Y,
                    clickreview: v,
                    status: c,
                    id: t,
                    showsubmitworkpop: R,
                    showworkpopup: F,
                    id_performer: s,
                  }),
                ],
              }),
            ],
          });
        },
        hr = (e) => {
          let {
            setShowPopUpCEO: t,
            setCEOReview: n,
            setCEONotYet: r,
            setCEORejected: o,
          } = e;
          const i = (0, a.useRef)(null);
          return (
            (0, a.useEffect)(() => {
              const e = (e) => {
                i.current && !i.current.contains(e.target) && t(!1);
              };
              return (
                document.addEventListener("mousedown", e),
                () => {
                  document.removeEventListener("mousedown", e);
                }
              );
            }, [t]),
            (0, Ee.jsxs)("div", {
              ref: i,
              className: "submition-pop-up-work-ceo",
              children: [
                (0, Ee.jsx)("div", {
                  className: "input-circle",
                  children: (0, Ee.jsx)("div", {
                    className: "span",
                    children: (0, Ee.jsx)("h1", {
                      style: {
                        wordWrap: "break-word",
                        fontFamily: "Kumbh Sans",
                        fontSize: "2.2vw",
                      },
                      children:
                        " For this execution, would you like to gratify the Talent with Thanks ?",
                    }),
                  }),
                }),
                (0, Ee.jsxs)("div", {
                  className: "container-button-ceo",
                  children: [
                    (0, Ee.jsx)("button", {
                      className: "button1",
                      onClick: () => {
                        t(!1), r(!0);
                      },
                      children: "Not Yet, let him try again",
                    }),
                    (0, Ee.jsx)("button", {
                      className: "button2",
                      onClick: () => {
                        t(!1), o(!0);
                      },
                      children: "No Thanks ! Next",
                    }),
                    (0, Ee.jsx)("button", {
                      className: "button3",
                      onClick: () => {
                        t(!1), n(!0);
                      },
                      children: "He deserves Thanks !",
                    }),
                  ],
                }),
              ],
            })
          );
        },
        fr = (e) => {
          let {
            executionId: t,
            setShowEvaluation: n,
            setShowPopUpCEO: r,
            comments: a,
            feedback: o,
            setFeedback: i,
          } = e;
          const s = Un.get("token");
          return (0, Ee.jsxs)("div", {
            className: "evaluation-container",
            children: [
              (0, Ee.jsx)("h3", { children: "Finally" }),
              (0, Ee.jsx)("h3", {
                className: "better",
                children:
                  "What would it take to get the result as you expect ?",
              }),
              (0, Ee.jsx)("input", {
                className: "input-feed",
                placeholder: "describe it here...",
                value: o,
                onChange: (e) => i(e.target.value),
                maxLength: "500",
              }),
              (0, Ee.jsx)("button", {
                className: "feedback",
                onClick: () =>
                  ((e) => {
                    const n = {
                      executionId: t,
                      feedback: o,
                      status: "On going",
                    };
                    "" !== o.trim()
                      ? (wn.post(
                          "https://tkwbackendcdl.onrender.comexecution/NotYet",
                          n,
                          { headers: { Authorization: "Bearer ".concat(s) } }
                        ),
                        window.location.reload())
                      : alert("Please explain why not yet.");
                  })(),
                children: "Send Your feed back  \u27a1",
              }),
            ],
          });
        },
        pr = (e) => {
          let {
            executionId: t,
            setShowEvaluation: n,
            setShowPopUpCEO: r,
            comments: a,
            feedback: o,
            setFeedback: i,
          } = e;
          const s = Un.get("token"),
            l = wn.create({ timeout: 6e4 });
          return (0, Ee.jsxs)("div", {
            className: "evaluation-container",
            children: [
              (0, Ee.jsx)("h3", { children: "Finally" }),
              (0, Ee.jsx)("h3", {
                className: "better",
                children: "What would it take to reach your expectations ?",
              }),
              (0, Ee.jsx)("input", {
                className: "input-feed",
                placeholder:
                  "A constructive feedback makes your teammate better and increase your collective odd of success",
                value: o,
                onChange: (e) => i(e.target.value),
                maxLength: "500",
              }),
              (0, Ee.jsxs)("div", {
                className: "propose",
                children: [
                  (0, Ee.jsx)("input", {
                    className: "case",
                    type: "checkbox",
                    id: "case",
                  }),
                  (0, Ee.jsx)("label", {
                    for: "case",
                    children: "Propose it again to talents",
                  }),
                ],
              }),
              (0, Ee.jsx)("button", {
                className: "feedback_rejected",
                onClick: async (e) => {
                  try {
                    const e = document.getElementById("case").checked
                        ? "Open"
                        : "Rejected",
                      n = { executionId: t, feedback: o, status: e };
                    "" !== o.trim()
                      ? (await l.post(
                          "https://tkwbackendcdl.onrender.comexecution/Rejected",
                          n,
                          { headers: { Authorization: "Bearer ".concat(s) } }
                        ),
                        window.location.reload())
                      : alert("Please give a feedback to your teammate.");
                  } catch (n) {
                    console.error("There was an error with the request:", n),
                      alert("An error occurred. Please try again.");
                  }
                },
                children: "Send Your feed back  \u27a1",
              }),
            ],
          });
        },
        mr = (e) => {
          let {
            executionId: t,
            setShowEvaluation: n,
            setShowPopUpPeerReview: r,
            comments: a,
            feedback: o,
            setFeedback: i,
          } = e;
          const s = wn.create({ timeout: 6e4 });
          return (0, Ee.jsxs)("div", {
            className: "evaluation-container",
            children: [
              (0, Ee.jsx)("h3", { children: "Finally" }),
              (0, Ee.jsx)("h3", {
                className: "better",
                children: "What would it take to reach your expectations ? ",
              }),
              (0, Ee.jsx)("input", {
                className: "input-feed",
                placeholder:
                  "A constructive feedback makes your teammate better and increase your collective odd of success",
                value: o,
                onChange: (e) => i(e.target.value),
              }),
              (0, Ee.jsx)("button", {
                className: "feedback",
                onClick: () =>
                  (async (e) => {
                    try {
                      const e = {
                        userId: localStorage.getItem("userId"),
                        executionId: t,
                        feedback: o,
                      };
                      "" !== o.trim()
                        ? (await s.post(
                            "https://tkwbackendcdl.onrender.comexecution/peerReview_NotYet",
                            e
                          ),
                          window.location.reload())
                        : alert("Please explain why not yet.");
                    } catch (n) {
                      console.error("There was an error with the request:", n),
                        alert("An error occurred. Please try again.");
                    }
                  })(),
                children: "Share  \u27a1",
              }),
            ],
          });
        },
        vr = (e) => {
          let {
            setShowPopUpPeerReview: t,
            setPeerReview: n,
            setPeerReviewNotYet: r,
          } = e;
          const o = (0, a.useRef)(null);
          return (
            (0, a.useEffect)(() => {
              const e = (e) => {
                o.current && !o.current.contains(e.target) && t(!1);
              };
              return (
                document.addEventListener("mousedown", e),
                () => {
                  document.removeEventListener("mousedown", e);
                }
              );
            }, [t]),
            (0, Ee.jsxs)("div", {
              ref: o,
              className: "submition-pop-up-work-peerreview",
              children: [
                (0, Ee.jsx)("div", {
                  className: "input-circle",
                  children: (0, Ee.jsx)("div", {
                    className: "span",
                    children: (0, Ee.jsx)("h1", {
                      style: {
                        wordWrap: "break-word",
                        fontFamily: "Kumbh Sans",
                        fontSize: "2.2vw",
                      },
                      children:
                        "For this execution, would you like to gratify the Talent with Thanks ?",
                    }),
                  }),
                }),
                (0, Ee.jsxs)("div", {
                  className: "container-button-ceo",
                  children: [
                    (0, Ee.jsx)("button", {
                      className: "button1",
                      onClick: () => {
                        t(!1), r(!0);
                      },
                      children: "Not Yet, should try again",
                    }),
                    (0, Ee.jsx)("button", {
                      className: "button3",
                      onClick: () => {
                        t(!1), n(!0);
                      },
                      children: "He deserves Thanks !",
                    }),
                  ],
                }),
              ],
            })
          );
        },
        gr = (e) => {
          let { page: t = "workboard" } = e;
          const { dioTasks: n, selectedDioId: r } = (0, a.useContext)(jn),
            [o, i] = (0, a.useState)(!1),
            [s, l] = (0, a.useState)(!1),
            [c, u] = (0, a.useState)(!1),
            [d, h] = (0, a.useState)(!1),
            [f, p] = (0, a.useState)(!1),
            [m, v] = (0, a.useState)(!1),
            [g, y] = (0, a.useState)(!1),
            [x, b] = (0, a.useState)(""),
            [w, j] = (0, a.useState)(""),
            [S, k] = (0, a.useState)(""),
            [N, C] = (0, a.useState)("");
          let [T, E] = (0, a.useState)(null);
          const [_, O] = (0, a.useState)(!1),
            [I, D] = (0, a.useState)(!1),
            [P, R] = (0, a.useState)(!1),
            [F, L] = (0, a.useState)(!1),
            [z, A] = (0, a.useState)(!1),
            [U, M] = (0, a.useState)(!1),
            [B, W] = (0, a.useState)(!1),
            [H, K] = (0, a.useState)(!1),
            [q, Y] = (0, a.useState)(!1),
            [V, Q] = (0, a.useState)(""),
            [J, $] = (0, a.useState)(""),
            [G, X] = (0, a.useState)(""),
            [Z, ee] = (0, a.useState)("");
          let [te, ne] = (0, a.useState)(null);
          const [re, ae] = (0, a.useState)(""),
            [oe, ie] = (0, a.useState)(""),
            [se, le] = (0, a.useState)(!1),
            [ce, ue] = (0, a.useState)(!1),
            [de, he] = (0, a.useState)(!1),
            [fe, pe] = (0, a.useState)(!1);
          let [me, ve] = (0, a.useState)(null);
          const [ge, ye] = (0, a.useState)(!1),
            [xe, be] = (0, a.useState)(!1),
            [we, je] = (0, a.useState)(0),
            [Se, ke] = (0, a.useState)(!1),
            [Ne, Ce] = (0, a.useState)(!1);
          const [Te, _e] = (0, a.useState)("My Ongoing"),
            Oe = (e) => {
              _e(e.target.value);
            };
          localStorage.setItem("DOId", r);
          let Ie = n.filter((e) => {
            const t = localStorage.getItem("userName"),
              n = localStorage.getItem("userId");
            return (
              "All" === Te ||
              ("My Ongoing" === Te
                ? e.talent_name === t && "On going" === e.status_
                : "CEO Evaluation" === Te
                ? "In review" === e.status_ &&
                  e.talent_name !== t &&
                  null === e.ceo_comments
                : "Peer Review" === Te
                ? "In review" === e.status_ &&
                  e.talent_name !== t &&
                  (-1 ===
                    (null === (r = e.peer_review_ids) || void 0 === r
                      ? void 0
                      : r.indexOf(n)) ||
                    null === e.peer_review_ids)
                : "All mine" === Te
                ? e.talent_name === t
                : "My Ongoing" === Te
                ? e.talent_name === t && "On going" === e.status_
                : "My Achieved" === Te
                ? "Achieved" === e.status_ && e.talent_name === t
                : "My Rejected" !== Te ||
                  ("Rejected" === e.status_ && e.talent_name === t))
            );
            var r;
          });
          "Feed" === t && (Ie = n), Ie.sort((e, t) => e.id - t.id);
          const De = Ie.map((e) => {
              const t = {
                ...{
                  id: e.id,
                  description: e.exec_description,
                  talent: e.talent_name,
                  performor: e.performor_name,
                },
                id_talent: e.id_talent_creator,
                id_performer: e.id_talent_performor,
                status: e.status_,
                comments: e.review_comments,
                selfDifficulty: e.review_difficulty,
                selfReactivity: e.review_reactivity,
                clickreview: () =>
                  ((e, t, n) => {
                    le(!0), E(e), ve(t), ne(n);
                  })(e.id, e.talent_name, e.documentation_link),
                showceopop: () =>
                  ((e, t, n) => {
                    E(e), ye(!0), ve(t), ne(n);
                  })(e.id, e.talent_name, e.documentation_link),
                currentExecution: () => E(e.id),
                ceo_comments: e.ceo_comments,
                ceo_expectations: e.ceo_expectations,
                ceo_reactivity: e.ceo_reactivity,
                remainingTime: e.remaining_time,
                link: e.documentation_link,
                achievement_date: e.creation_date,
                thanks: e.score_thanks,
                peerReview_comments: e.peer_review_comments,
                peerReview_comments_notYet: e.peer_review_comments_notYet,
                peerReviewers_ids: e.peer_review_ids,
                peerReviewers_notYet_ids: e.peer_review_notYet_ids,
                peerReview_expectations: e.peer_review_expectations,
                peerReview_reactivity: e.peer_review_reactivity,
                ceoFeedback_notYet: e.ceo_feedback_notYet,
                ceoFeedback_rejected: e.ceo_feedback_rejected,
                peerReview_notYet_comments: e.peerReview_feedback_notYet,
                commentsInput: e.talent_comment,
                linkInput: e.input_link,
                Instructions: e.Instructions,
                linkInstructions: e.Instructions_doc,
                expected_date: e.Expected_date,
                deadline: e.deadline,
              };
              switch (e.status_) {
                case "Open":
                case "Rejected":
                case "On going":
                case "In review":
                case "Achieved":
                  return (0, Ee.jsx)(dr, {
                    ...t,
                    showsubmitworkpop:
                      "On going" === e.status_
                        ? () =>
                            ((e) => {
                              v(!0), E(e), je(e);
                            })(e.id)
                        : void 0,
                    showworkpopup:
                      "Open" === e.status_
                        ? () =>
                            ((e) => {
                              p(!0), O(!0), R(!0), E(e), je(e);
                            })(e.id)
                        : void 0,
                    date_rejected:
                      "Rejected" === e.status_ ? e.date_rejected : void 0,
                  });
                default:
                  return (0, Ee.jsx)(Ee.Fragment, {});
              }
            }),
            Pe = (0, a.useRef)(),
            Re = localStorage.getItem("DOName");
          return (
            (0, a.useEffect)(() => {
              Pe.current &&
                (Pe.current.scrollTop =
                  Pe.current.scrollHeight - Pe.current.clientHeight);
            }, [Pe.current]),
            (0, Ee.jsxs)("div", {
              className: "container1",
              children: [
                (0, Ee.jsx)(Fn, {}),
                Se
                  ? (0, Ee.jsx)(Wn, {
                      executionDescription: x,
                      setShowEvaluation: ke,
                      executionId: we,
                      executionComment: w,
                      executionLink: oe,
                    })
                  : Ne
                  ? (0, Ee.jsx)(Mn, { executionId: T, setShowPeerReview: Ce })
                  : xe
                  ? (0, Ee.jsx)(Hn, {
                      executionId: T,
                      setShowEvaluation: be,
                      comments: S,
                    })
                  : ce
                  ? (0, Ee.jsx)(fr, {
                      executionId: T,
                      feedback: re,
                      setFeedback: ae,
                    })
                  : de
                  ? (0, Ee.jsx)(pr, {
                      executionId: T,
                      feedback: re,
                      setFeedback: ae,
                    })
                  : fe
                  ? (0, Ee.jsx)(mr, {
                      executionId: T,
                      feedback: re,
                      setFeedback: ae,
                    })
                  : (0, Ee.jsxs)("div", {
                      className: "main-content",
                      children: [
                        (0, Ee.jsx)(Tn, {
                          setShowBCTPopUp: i,
                          setShowThanksPopUp: l,
                          setShowCashPopUp: u,
                          insideDO: !0,
                        }),
                        o && (0, Ee.jsx)(_n, { setShowBCTPopUp: i }),
                        s && (0, Ee.jsx)(En, { setShowThanksPopUp: l }),
                        c && (0, Ee.jsx)(On, { setShowCashPopUp: u }),
                        "Feed" === t
                          ? (0, Ee.jsx)(Ee.Fragment, {
                              children: (0, Ee.jsxs)("div", {
                                className: "execution-board",
                                children: [
                                  (0, Ee.jsx)("h1", { children: Re }),
                                  (0, Ee.jsx)("div", {
                                    className: "barre-reche",
                                    children: (0, Ee.jsx)("input", {
                                      placeholder: "Search",
                                    }),
                                  }),
                                ],
                              }),
                            })
                          : "workboard" === t
                          ? (0, Ee.jsx)(Ee.Fragment, {
                              children: (0, Ee.jsxs)("div", {
                                className: "execution-board",
                                children: [
                                  (0, Ee.jsx)("h1", { children: Re }),
                                  (0, Ee.jsxs)("div", {
                                    children: [
                                      " ",
                                      "1" === localStorage.getItem("isCEO")
                                        ? (0, Ee.jsxs)("select", {
                                            value: Te,
                                            onChange: Oe,
                                            children: [
                                              (0, Ee.jsx)("option", {
                                                value: "My Ongoing",
                                                children: "My Ongoing",
                                              }),
                                              (0, Ee.jsx)("option", {
                                                value: "CEO Evaluation",
                                                children: "CEO Evaluation",
                                              }),
                                              (0, Ee.jsx)("option", {
                                                value: "In progress",
                                                children:
                                                  "Execution Authorization",
                                              }),
                                            ],
                                          })
                                        : (0, Ee.jsxs)("select", {
                                            value: Te,
                                            onChange: Oe,
                                            children: [
                                              (0, Ee.jsx)("option", {
                                                value: "My Ongoing",
                                                children: "My Ongoing",
                                              }),
                                              (0, Ee.jsx)("option", {
                                                value: "Peer Review",
                                                children: "Peer Reviews",
                                              }),
                                            ],
                                          }),
                                      "       ",
                                    ],
                                  }),
                                ],
                              }),
                            })
                          : "archives" === t
                          ? (0, Ee.jsxs)(Ee.Fragment, {
                              children: [
                                "  ",
                                (0, Ee.jsxs)("div", {
                                  className: "execution-board",
                                  children: [
                                    (0, Ee.jsx)("h1", { children: Re }),
                                    (0, Ee.jsxs)("div", {
                                      children: [
                                        " ",
                                        (localStorage.getItem("isCEO"),
                                        (0, Ee.jsxs)("select", {
                                          value: Te,
                                          onChange: Oe,
                                          children: [
                                            (0, Ee.jsx)("option", {
                                              value: "All mine",
                                              children: "All mine",
                                            }),
                                            (0, Ee.jsx)("option", {
                                              value: "My Ongoing",
                                              children: "My Ongoing",
                                            }),
                                            (0, Ee.jsx)("option", {
                                              value: "My Achieved",
                                              children: "My Achieved",
                                            }),
                                            (0, Ee.jsx)("option", {
                                              value: "My Rejected",
                                              children: "My Rejected",
                                            }),
                                            (0, Ee.jsx)("option", {
                                              value: "My Validated",
                                              children: "My Validated",
                                            }),
                                            (0, Ee.jsx)("option", {
                                              value: "My Refused",
                                              children: "My Refused",
                                            }),
                                          ],
                                        })),
                                        " ",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : (0, Ee.jsx)(Ee.Fragment, { children: " " }),
                        (0, Ee.jsx)("div", {
                          className: "execution-container",
                          children:
                            "workboard" === t
                              ? (0, Ee.jsx)("div", {
                                  className: "messages",
                                  style: {
                                    height: "62vh",
                                    overflowY: "scroll",
                                    marginBottom: "1vh",
                                    marginLeft: "2.2vw",
                                    paddingRight: "2.8vw",
                                    scrollbarWidth: "20px",
                                    scrollbarColor: "#ccc #f4f4f4",
                                  },
                                  children: De,
                                })
                              : (0, Ee.jsx)("div", {
                                  className: "messages",
                                  ref: Pe,
                                  style: {
                                    height: "62vh",
                                    overflowY: "scroll",
                                    marginBottom: "1vh",
                                    marginLeft: "2.2vw",
                                    paddingRight: "2.8vw",
                                    scrollbarWidth: "20px",
                                    scrollbarColor: "#ccc #f4f4f4",
                                  },
                                  children: De,
                                }),
                        }),
                        (0, Ee.jsx)(Gn, {
                          createExecutionText: x,
                          setCreateExecutionText: b,
                          setShowPopUp: h,
                        }),
                        d &&
                          (0, Ee.jsx)(Xn, {
                            executionDescription: x,
                            setShowPopUp: h,
                            setShowPopUpWorkDone: p,
                            setShowPopUpWorkForOthers: W,
                          }),
                        f &&
                          (0, Ee.jsx)(Zn, {
                            setShowPopUpWorkDone: p,
                            setShowPopUpWork: v,
                            setShowPopUpWorkNotYet: L,
                            setExecutionId: je,
                            alreadyCreated: _,
                          }),
                        m &&
                          (0, Ee.jsx)(er, {
                            setShowPopUpDeadlineAlreadyDone: D,
                            setShowPopUpWork: v,
                            setSelfReview: ke,
                            initialWorkText: w,
                            setWorkText: j,
                          }),
                        I &&
                          (0, Ee.jsx)(Kn, {
                            setShowPopUpLink: y,
                            setShowPopUpDeadlineAlreadyDone: D,
                            deadline: Z,
                            setDeadline: ee,
                          }),
                        F &&
                          (0, Ee.jsx)(Yn, {
                            setShowPopUpDeadlineNotYet: A,
                            setShowPopUpWorkNotYet: L,
                            initialWorkText: w,
                            setWorkText: j,
                          }),
                        z &&
                          (0, Ee.jsx)(qn, {
                            setShowPopUpLinkNotYet: M,
                            setShowPopUpDeadlineNotYet: A,
                            setDeadline: ee,
                            initialWorkText: w,
                            setWorkText: j,
                          }),
                        B &&
                          (0, Ee.jsx)(Jn, {
                            setShowPopUpDeadlineForOthers: K,
                            setShowPopUpWorkForOthers: W,
                            initialWorkText: V,
                            setWorkText: Q,
                          }),
                        H &&
                          (0, Ee.jsx)(Qn, {
                            setShowPopUpLinkForOthers: Y,
                            setShowPopUpDeadlineForOthers: K,
                            setDeadline: X,
                            initialWorkText: V,
                            setWorkText: Q,
                          }),
                        g &&
                          (0, Ee.jsx)(tr, {
                            setShowPopUpLink: y,
                            setSelfReview: ke,
                            initialWorkText: w,
                            setWorkText: j,
                            executionComment: w,
                            link: oe,
                            setLink: ie,
                            alreadyCreated: _,
                            executionId: we,
                          }),
                        U &&
                          (0, Ee.jsx)(Vn, {
                            setShowPopUpLinkNotYet: M,
                            setExecutionId: je,
                            executionId: we,
                            initialWorkText: w,
                            executionComment: w,
                            executionDescription: x,
                            setWorkText: j,
                            deadline: Z,
                            link: oe,
                            setLink: ie,
                            alreadyCreated: _,
                            forOthers: P,
                          }),
                        q &&
                          (0, Ee.jsx)($n, {
                            setShowPopUpLinkForOthers: Y,
                            setExecutionId: je,
                            executionDescription: x,
                            initialWorkText: V,
                            executionComment: V,
                            setWorkText: Q,
                            deadline: G,
                            link: J,
                            setLink: $,
                          }),
                        ge &&
                          (0, Ee.jsx)(hr, {
                            setShowPopUpCEO: ye,
                            setCEOReview: be,
                            comments: S,
                            setComments: k,
                            executor: me,
                            link: te,
                            setCEONotYet: ue,
                            setCEORejected: he,
                          }),
                        se &&
                          (0, Ee.jsx)(vr, {
                            setShowPopUpPeerReview: le,
                            setPeerReview: Ce,
                            comments: N,
                            setComments: C,
                            executor: me,
                            link: te,
                            setPeerReviewNotYet: pe,
                          }),
                      ],
                    }),
              ],
            })
          );
        },
        yr = () => (0, Ee.jsx)(gr, { page: "Feed" }),
        xr = () => (0, Ee.jsx)(gr, { page: "archives" });
      n.p;
      class br extends a.Component {
        constructor(e) {
          super(e),
            (this.handleEmailChange = (e) => {
              this.setState({ email: e.target.value });
            }),
            (this.handlePasswordChange = (e) => {
              this.setState({ password: e.target.value });
            }),
            (this.handleLogin = () => {
              const { email: e, password: t } = this.state;
              fetch("https://tkwbackendcdl.onrender.comlogin/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: e, password: t }),
              })
                .then((e) => {
                  200 === e.status
                    ? (e.json().then((e) => {
                        localStorage.setItem("userId", e.userId),
                          localStorage.setItem("userName", e.userName),
                          localStorage.setItem("firstName", e.firstName),
                          localStorage.setItem("email", e.email),
                          localStorage.setItem("do_ids", e.do_ids),
                          localStorage.setItem("sponsored", e.sponsored),
                          Un.set("token", e.token, { secure: !0 }),
                          0 === e.first_connection
                            ? (window.location.href = "/Homepage")
                            : (window.location.href = "/Welcome");
                      }),
                      console.log(localStorage.getItem("isCEO")))
                    : alert("Identifiant ou mot de passe incorrect.");
                })
                .catch((e) => {
                  console.error("Erreur lors de la connexion :", e);
                });
            }),
            (this.state = { email: "", password: "" });
        }
        render() {
          return (0, Ee.jsxs)("div", {
            className: "login-container",
            children: [
              (0, Ee.jsx)("div", { className: "background-image" }),
              (0, Ee.jsxs)("div", {
                className: "account",
                children: [
                  (0, Ee.jsxs)("p", {
                    className: "empower-text",
                    style: { marginLeft: "10vw" },
                    children: [
                      "Simplifying your journey toward a",
                      (0, Ee.jsx)("br", {}),
                      "successful life",
                    ],
                  }),
                  (0, Ee.jsxs)("p", {
                    className: "TheWork-text",
                    children: [
                      "Powered by a cutting-edge, user-friendly tech platform,",
                      (0, Ee.jsx)("br", {}),
                      "Thankward is a universal and systemic model for wealth creation.",
                      (0, Ee.jsx)("br", {}),
                      "It enables Talents, Entrepreneurs, and Investors",
                      (0, Ee.jsx)("br", {}),
                      "to progress harmoniously towards prosperity",
                    ],
                  }),
                  (0, Ee.jsx)("p", {
                    className: "Exclusively",
                    children: "Exclusively by cooptation",
                  }),
                  (0, Ee.jsx)("p", {
                    className: "AlreadyMember ",
                    children: "Already Member ?",
                  }),
                ],
              }),
              (0, Ee.jsxs)("form", {
                className: "forme",
                children: [
                  (0, Ee.jsxs)("div", {
                    className: "form-group",
                    children: [
                      (0, Ee.jsx)("p", {
                        className: "MailAdress",
                        style: { fontSize: "2.5vh" },
                        children: "Your Email",
                      }),
                      (0, Ee.jsx)("input", {
                        type: "email",
                        value: this.state.email,
                        onChange: this.handleEmailChange,
                      }),
                    ],
                  }),
                  (0, Ee.jsxs)("div", {
                    className: "form-group",
                    children: [
                      (0, Ee.jsx)("p", {
                        className: "Password",
                        style: { fontSize: "2.5vh" },
                        children: "Your Password",
                      }),
                      (0, Ee.jsx)("input", {
                        type: "password",
                        value: this.state.password,
                        onChange: this.handlePasswordChange,
                      }),
                    ],
                  }),
                  (0, Ee.jsx)("button", {
                    className: "buttonLogin",
                    type: "button",
                    onClick: this.handleLogin,
                    children: "Welcome \u27a1",
                  }),
                ],
              }),
            ],
          });
        }
      }
      const wr = br,
        jr = n.p + "static/media/QR_code_community.a09c2d836a4860ebfdb6.png",
        Sr = () => {
          const [e, t] = (0, a.useState)(!1),
            [n, r] = (0, a.useState)(!1),
            [o, i] = (0, a.useState)(!1);
          return (0, Ee.jsxs)("div", {
            className: "container",
            children: [
              (0, Ee.jsx)(Oe, {}),
              (0, Ee.jsxs)("div", {
                className: "main-content",
                children: [
                  (0, Ee.jsx)(Tn, {
                    setShowBCTPopUp: t,
                    setShowThanksPopUp: r,
                    setShowCashPopUp: i,
                  }),
                  e && (0, Ee.jsx)(_n, { setShowBCTPopUp: t }),
                  n && (0, Ee.jsx)(En, { setShowThanksPopUp: r }),
                  o && (0, Ee.jsx)(On, { setShowCashPopUp: i }),
                  (0, Ee.jsxs)("div", {
                    className: "actions_coopt",
                    style: {
                      marginTop: "8vh",
                      alignItems: "center",
                      textAlign: "center",
                      height: "70vh",
                    },
                    children: [
                      (0, Ee.jsxs)("div", {
                        className: "explain-coopt",
                        style: {
                          marginTop: "8vh",
                          alignItems: "center",
                          textAlign: "center",
                          height: "70vh",
                        },
                        children: [
                          (0, Ee.jsxs)("div", {
                            style: {
                              fontFamily: "Kumbh Sans",
                              fontSize: "4vh",
                              fontWeight: "600",
                              marginLeft: "2vw",
                              marginTop: "0vh",
                            },
                            children: [
                              "You can choose based on your preferences",
                              (0, Ee.jsx)("br", {}),
                              "to get help",
                              (0, Ee.jsx)("br", {}),
                              (0, Ee.jsx)("br", {}),
                            ],
                          }),
                          (0, Ee.jsxs)("div", {
                            style: {
                              fontFamily: "Kumbh Sans",
                              marginLeft: "2vw",
                              fontWeight: "700",
                            },
                            children: [
                              "Email the CEO",
                              (0, Ee.jsx)("br", {}),
                              (0, Ee.jsx)("a", {
                                href: "mailto:ceo@thankward.com",
                                children: "ceo@thankward.com",
                              }),
                              (0, Ee.jsx)("br", {}),
                              (0, Ee.jsx)("br", {}),
                              (0, Ee.jsx)("br", {}),
                            ],
                          }),
                          (0, Ee.jsxs)("div", {
                            style: {
                              fontFamily: "Kumbh Sans",
                              fontWeight: "700",
                              marginLeft: "2vw",
                            },
                            children: [
                              "DM or call the CEO",
                              (0, Ee.jsx)("br", {}),
                              (0, Ee.jsx)("a", {
                                href: "tel:+33698235173",
                                children: "+336 98 23 51 73",
                              }),
                              (0, Ee.jsx)("br", {}),
                              (0, Ee.jsx)("br", {}),
                            ],
                          }),
                          (0, Ee.jsxs)("div", {
                            style: {
                              fontFamily: "Kumbh Sans",
                              marginLeft: "2vw",
                              fontWeight: "700",
                            },
                            children: [
                              "Join us on WhatsApp",
                              (0, Ee.jsx)("br", {}),
                              (0, Ee.jsx)("a", {
                                style: { marginBottom: "10vh" },
                                href: "https://chat.whatsapp.com/G1qYVopjH71AMh9xlGYMHF",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "Thankward Community",
                              }),
                              (0, Ee.jsx)("img", {
                                style: {
                                  marginLeft: "10vw",
                                  height: "10vh",
                                  width: "5vw",
                                },
                                alt: "",
                                src: jr,
                              }),
                              (0, Ee.jsx)("br", {}),
                            ],
                          }),
                        ],
                      }),
                      (0, Ee.jsx)("button", {
                        style: {
                          backgroundColor: "#71d0d9",
                          marginRight: "12vw",
                        },
                        className: "create-my-profile",
                        onClick: () => {
                          (window.location.href = "/Homepage"),
                            console.log("Le bouton a \xe9t\xe9 cliqu\xe9 !");
                        },
                        children: "Close",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        kr = () => {
          const [e, t] = (0, a.useState)(!1),
            [n, r] = (0, a.useState)(!1),
            [o, i] = (0, a.useState)(!1),
            s = localStorage.getItem("DOName"),
            l = localStorage.getItem("userName"),
            c = localStorage.getItem("userId"),
            u = localStorage.getItem("DOId"),
            [d, h] = (0, a.useState)(0),
            [f, p] = (0, a.useState)(""),
            [m, v] = (0, a.useState)(""),
            [g, y] = (0, a.useState)(""),
            [x, b] = (0, a.useState)("".concat(l, " invites you to Thankward")),
            [w, j] = (0, a.useState)(
              "Hi "
                .concat(
                  m,
                  ",\n  Join me on Thankward to explore an amazing experience of collaboration.\n  You'll see, it's easy, and we earn lots of Thanks, the future of appreciation-based rewards.\n  You'll receive your password in a separate message.\n  Follow the link below to sign up with your email address: "
                )
                .concat(f, "\n  www.thanksandshare.com\n  See you soon!")
            ),
            [S, k] = (0, a.useState)(
              "".concat(l, " invites you to ").concat(s)
            ),
            [N, C] = (0, a.useState)(
              "Hi "
                .concat(m, ',\n  Join me at "')
                .concat(
                  s,
                  '," an exceptional Digital Organization where you can thrive in a great\n  team and contribute to an exciting project.\n  See you soon!"\n  www.thanksandshare.com'
                )
            );
          (0, a.useEffect)(() => {
            b("".concat(l, " invites you to Thankward")),
              k("".concat(l, " invites you to ").concat(s)),
              j(
                "Hi "
                  .concat(m, " ")
                  .concat(
                    g,
                    ",\n    Join me on Thankward to explore an amazing experience of collaboration.\n    You'll see, it's easy, and we earn lots of Thanks, the future of appreciation-based rewards.\n    You'll receive your password in a separate message.\n    Follow the link below to sign up with your email address: "
                  )
                  .concat(f, "\n    www.thanksandshare.com\n    See you soon!")
              ),
              C(
                "Hi "
                  .concat(m, ',\n    Join me at "')
                  .concat(
                    s,
                    '," an exceptional Digital Organization where you can thrive in a great\n    team and contribute to an exciting project.\n    See you soon!"\n    www.thanksandshare.com'
                  )
              );
          }, [m, g, f, l, s]);
          0 === d && window.history.pushState({ question: 0 }, "");
          const T = window.history.state.question;
          return (
            console.log("new state : " + T),
            (0, a.useEffect)(() => {
              const e = () => {
                const e = window.history.state;
                console.log(e.question),
                  e &&
                    void 0 !== e.question &&
                    (5 === e.question ? (h(0), console.log("yes")) : h(d - 1));
              };
              return (
                window.addEventListener("popstate", e),
                () => {
                  window.removeEventListener("popstate", e);
                }
              );
            }, [d]),
            (0, Ee.jsxs)("div", {
              className: "container",
              children: [
                (0, Ee.jsx)(Fn, {}),
                (0, Ee.jsxs)("div", {
                  className: "main-content",
                  children: [
                    (0, Ee.jsx)(Tn, {
                      setShowBCTPopUp: t,
                      setShowThanksPopUp: r,
                      setShowCashPopUp: i,
                      insideDO: !0,
                    }),
                    e && (0, Ee.jsx)(_n, { setShowBCTPopUp: t }),
                    n && (0, Ee.jsx)(En, { setShowThanksPopUp: r }),
                    o && (0, Ee.jsx)(On, { setShowCashPopUp: i }),
                    (0, Ee.jsx)("div", {
                      className: "execution-board",
                      children: (0, Ee.jsx)("h1", { children: s }),
                    }),
                    (0, Ee.jsx)("div", {
                      className: "actions_coopt",
                      children:
                        0 === d
                          ? (0, Ee.jsxs)(Ee.Fragment, {
                              children: [
                                (0, Ee.jsxs)("p", {
                                  style: { marginBottom: "0vh" },
                                  className: "coopt-text",
                                  children: [
                                    "Co-opting Talents is an excellent idea; it boosts your Team and accelerate your success.",
                                    (0, Ee.jsx)("br", {}),
                                    " ",
                                    (0, Ee.jsx)("br", {}),
                                    (0, Ee.jsx)("br", {}),
                                  ],
                                }),
                                (0, Ee.jsxs)("div", {
                                  className: "explain-coopt",
                                  children: [
                                    (0, Ee.jsx)("div", {
                                      style: {
                                        fontFamily: "Kumbh Sans",
                                        fontSize: "3vh",
                                        fontWeight: "700",
                                        marginLeft: "2vw",
                                        marginTop: "0vh",
                                      },
                                      children:
                                        "for the DO (Digital Organization) that you are recruiting for :",
                                    }),
                                    (0, Ee.jsxs)("div", {
                                      style: {
                                        fontFamily: "Kumbh Sans",
                                        marginLeft: "2vw",
                                      },
                                      children: [
                                        "Every time the friend you co-opt earns 100 Thanks, you receive 5 Thanks.",
                                        (0, Ee.jsx)("br", {}),
                                        (0, Ee.jsx)("br", {}),
                                      ],
                                    }),
                                    (0, Ee.jsx)("div", {
                                      style: {
                                        fontFamily: "Kumbh Sans",
                                        fontSize: "3vh",
                                        fontWeight: "700",
                                        marginLeft: "2vw",
                                      },
                                      children:
                                        "From MKIF, the company behind Thankward:",
                                    }),
                                    (0, Ee.jsxs)("div", {
                                      style: {
                                        fontFamily: "Kumbh Sans",
                                        marginLeft: "2vw",
                                      },
                                      children: [
                                        "When your friend\u2019s D.O. is active, you earn 1 Thanks.",
                                        (0, Ee.jsx)("br", {}),
                                        "Each time your friend\u2019s team accumulates 10k verified Thanks, you earn 1 Thanks.",
                                        (0, Ee.jsx)("br", {}),
                                        "You receive a special bonus of 10 Thanks whenever your friend\u2019s team reaches 100k verified Thanks.",
                                      ],
                                    }),
                                  ],
                                }),
                                (0, Ee.jsxs)("div", {
                                  style: { display: "flex" },
                                  children: [
                                    (0, Ee.jsxs)("div", {
                                      className: "email-coopt",
                                      children: [
                                        "Email",
                                        (0, Ee.jsx)("input", {
                                          placeholder:
                                            "Talent\u2019s email please",
                                          onChange: (e) => p(e.target.value),
                                          value: f,
                                        }),
                                      ],
                                    }),
                                    (0, Ee.jsx)("button", {
                                      style: {
                                        marginTop: "9vh",
                                        marginLeft: "3vw",
                                      },
                                      className: "next-button-coopt",
                                      onClick: () => {
                                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f)
                                          ? wn
                                              .get(
                                                ""
                                                  .concat(
                                                    "https://tkwbackendcdl.onrender.com",
                                                    "/cooptTalent/verifyMail?email="
                                                  )
                                                  .concat(f, "&doId=")
                                                  .concat(u)
                                              )
                                              .then((e) => {
                                                const t = e.data;
                                                console.log(t),
                                                  t.emailExists
                                                    ? t.talentExists
                                                      ? alert(
                                                          "This talent is already in the DO."
                                                        )
                                                      : (v(t.firstName),
                                                        h(5),
                                                        window.history.pushState(
                                                          { question: d + 5 },
                                                          ""
                                                        ))
                                                    : (h(d + 1),
                                                      window.history.pushState(
                                                        { question: d + 1 },
                                                        ""
                                                      ));
                                              })
                                              .catch((e) => {
                                                console.error(
                                                  "Error verifying email:",
                                                  e
                                                );
                                              })
                                          : alert(
                                              "Please enter a valid email address."
                                            );
                                      },
                                      children: "Start",
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : 1 === d
                          ? (0, Ee.jsx)(Ee.Fragment, {
                              children: (0, Ee.jsxs)("div", {
                                style: { display: "flex", marginTop: "20vh" },
                                children: [
                                  (0, Ee.jsxs)("div", {
                                    style: { display: "flex" },
                                    className: "email-coopt",
                                    children: [
                                      (0, Ee.jsx)("div", {
                                        style: {
                                          marginRight: "0vh",
                                          marginTop: "1vh",
                                        },
                                        children: "Given Name",
                                      }),
                                      (0, Ee.jsx)("input", {
                                        placeholder: "Talent\u2019s First Name",
                                        onChange: (e) => v(e.target.value),
                                        value: m,
                                        style: { marginLeft: "3vw" },
                                      }),
                                    ],
                                  }),
                                  (0, Ee.jsx)("button", {
                                    style: {
                                      marginTop: "5vh",
                                      marginLeft: "3vw",
                                    },
                                    className: "next-button-coopt ",
                                    onClick: () => {
                                      "" !== m.trim()
                                        ? (h(d + 1),
                                          window.history.pushState(
                                            { question: d + 1 },
                                            ""
                                          ))
                                        : alert(
                                            "Please enter the Talent\u2019s First Name."
                                          );
                                    },
                                    children: "Next",
                                  }),
                                ],
                              }),
                            })
                          : 2 === d
                          ? (0, Ee.jsx)(Ee.Fragment, {
                              children: (0, Ee.jsxs)("div", {
                                style: { display: "flex", marginTop: "20vh" },
                                children: [
                                  (0, Ee.jsxs)("div", {
                                    style: { display: "flex" },
                                    className: "email-coopt",
                                    children: [
                                      (0, Ee.jsx)("div", {
                                        style: {
                                          marginRight: "0vh",
                                          marginTop: "1vh",
                                        },
                                        children: "Family Name",
                                      }),
                                      (0, Ee.jsx)("input", {
                                        placeholder: "Talent\u2019s Last Name",
                                        onChange: (e) => y(e.target.value),
                                        value: g,
                                        style: { marginLeft: "3vw" },
                                      }),
                                    ],
                                  }),
                                  (0, Ee.jsx)("button", {
                                    style: {
                                      marginTop: "5vh",
                                      marginLeft: "3vw",
                                    },
                                    className: "next-button-coopt",
                                    onClick: () => {
                                      "" !== g.trim()
                                        ? (h(d + 1),
                                          window.history.pushState(
                                            { question: d + 1 },
                                            ""
                                          ))
                                        : alert(
                                            "Please enter the Talent\u2019s Last Name."
                                          );
                                    },
                                    children: "Next",
                                  }),
                                ],
                              }),
                            })
                          : 3 === d
                          ? (0, Ee.jsx)(Ee.Fragment, {
                              children: (0, Ee.jsxs)("div", {
                                className: "notif-coopt",
                                style: { display: "grid", marginTop: "0vh" },
                                children: [
                                  (0, Ee.jsx)("div", {
                                    className: "obj-email-coopt",
                                    style: { marginRight: "35vw" },
                                    children: "Object : ",
                                  }),
                                  (0, Ee.jsx)("textarea", {
                                    style: {
                                      width: "40vw",
                                      height: "7vh",
                                      marginBottom: "1vh",
                                      fontFamily: "Kumbh Sans",
                                    },
                                    onChange: (e) => b(e.target.value),
                                    value: x,
                                  }),
                                  (0, Ee.jsx)("div", {
                                    className: "obj-email-coopt",
                                    style: { marginRight: "35vw" },
                                    children: "Message : ",
                                  }),
                                  "``",
                                  (0, Ee.jsx)("textarea", {
                                    style: {
                                      width: "40vw",
                                      height: "35vh",
                                      fontFamily: "Kumbh Sans",
                                    },
                                    onChange: (e) => j(e.target.value),
                                    value: w,
                                  }),
                                  (0, Ee.jsx)("button", {
                                    className: "next-button-coopt",
                                    onClick: () => {
                                      h(d + 1),
                                        window.history.pushState(
                                          { question: d + 1 },
                                          ""
                                        );
                                    },
                                    children: "Send",
                                  }),
                                ],
                              }),
                            })
                          : 4 === d
                          ? (0, Ee.jsx)(Ee.Fragment, {
                              children: (0, Ee.jsxs)("div", {
                                children: [
                                  (0, Ee.jsxs)("p", {
                                    style: { marginTop: "10vh" },
                                    className: "coopt-text",
                                    children: [
                                      "To conclude, communicate to ",
                                      m,
                                      " his temporary password using the",
                                      (0, Ee.jsx)("br", {}),
                                      "method you usually do and remind him to check his emails:",
                                    ],
                                  }),
                                  (0, Ee.jsxs)("p", {
                                    className: "coopt-text",
                                    children: [
                                      "Temporary password :",
                                      (0, Ee.jsx)("br", {}),
                                      " 123456",
                                    ],
                                  }),
                                  (0, Ee.jsx)("button", {
                                    style: {
                                      marginLeft: "5vw",
                                      marginTop: "10vh",
                                    },
                                    className: "next-button-coopt",
                                    onClick: () => {
                                      const e = localStorage.getItem("DOId"),
                                        t = {
                                          FirstName: m,
                                          LastName: g,
                                          Email: f,
                                          password: "123456",
                                          id_do: e,
                                          first_connection: "1",
                                          UserNameId: c,
                                          subjectMail: x,
                                          textMail: w,
                                        };
                                      fetch(
                                        "https://tkwbackendcdl.onrender.comcooptTalent/api/coopt",
                                        {
                                          method: "POST",
                                          headers: {
                                            "Content-Type": "application/json",
                                          },
                                          body: JSON.stringify(t),
                                        }
                                      )
                                        .then((e) => {
                                          console.log("here"), console.log(e);
                                        })
                                        .catch((e) => {
                                          console.error(
                                            "Erreur lors de l'inscription :",
                                            e
                                          );
                                        }),
                                        window.location.reload();
                                    },
                                    children: "Done",
                                  }),
                                ],
                              }),
                            })
                          : (0, Ee.jsxs)(Ee.Fragment, {
                              children: [
                                (0, Ee.jsxs)("p", {
                                  style: { marginBottom: "0vh" },
                                  className: "coopt-text",
                                  children: [
                                    "Oups, you can\u2019t earn Thanks from MKIF, but...",
                                    (0, Ee.jsx)("br", {}),
                                    " ",
                                    (0, Ee.jsx)("br", {}),
                                    (0, Ee.jsx)("br", {}),
                                  ],
                                }),
                                (0, Ee.jsxs)("div", {
                                  className: "explain-coopt",
                                  children: [
                                    (0, Ee.jsxs)("div", {
                                      style: {
                                        fontFamily: "Kumbh Sans",
                                        fontSize: "3vh",
                                        fontWeight: "700",
                                        marginLeft: "2vw",
                                        marginTop: "0vh",
                                      },
                                      children: [
                                        "The email you entered is already in use, meaning ",
                                        m,
                                        " is already part of the",
                                        (0, Ee.jsx)("br", {}),
                                        "Thankward family",
                                        (0, Ee.jsx)("br", {}),
                                        (0, Ee.jsx)("br", {}),
                                      ],
                                    }),
                                    (0, Ee.jsxs)("div", {
                                      style: {
                                        fontFamily: "Kumbh Sans",
                                        marginLeft: "2vw",
                                      },
                                      children: [
                                        "However, you can still earn Thanks from your D.O. if he agrees to join. Don't forget to send",
                                        (0, Ee.jsx)("br", {}),
                                        "him a personal message.",
                                        (0, Ee.jsx)("br", {}),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, Ee.jsx)("div", {
                                  style: { display: "flex" },
                                  children: (0, Ee.jsx)("button", {
                                    style: {
                                      marginTop: "12vh",
                                      marginRight: "15vw",
                                    },
                                    className: "next-button-coopt",
                                    onClick: () => {
                                      const e = localStorage.getItem("DOId"),
                                        t = {
                                          Email: f,
                                          id_do: e,
                                          UserNameId: c,
                                          subjectMailexist: S,
                                          textMailexist: N,
                                        };
                                      fetch(
                                        "https://tkwbackendcdl.onrender.comcooptTalent/api/cooptExsistedMember",
                                        {
                                          method: "POST",
                                          headers: {
                                            "Content-Type": "application/json",
                                          },
                                          body: JSON.stringify(t),
                                        }
                                      )
                                        .then((e) => {
                                          console.log("here"), console.log(e);
                                        })
                                        .catch((e) => {
                                          console.error(
                                            "Erreur lors de l'inscription :",
                                            e
                                          );
                                        }),
                                        h(0);
                                    },
                                    children: "Close",
                                  }),
                                }),
                              ],
                            }),
                    }),
                  ],
                }),
              ],
            })
          );
        };
      function Nr() {
        return (0, Ee.jsx)(Sn, {
          children: (0, Ee.jsx)(we, {
            children: (0, Ee.jsxs)(me, {
              children: [
                (0, Ee.jsx)(fe, { index: !0, element: (0, Ee.jsx)(wr, {}) }),
                (0, Ee.jsx)(fe, {
                  path: "Welcome",
                  element: (0, Ee.jsx)(Rn, {}),
                }),
                (0, Ee.jsx)(fe, {
                  path: "Homepage",
                  element: (0, Ee.jsx)(In, {}),
                }),
                (0, Ee.jsx)(fe, {
                  path: "CreateDO",
                  element: (0, Ee.jsx)(Dn, {}),
                }),
                (0, Ee.jsx)(fe, {
                  path: "Sponsorize",
                  element: (0, Ee.jsx)(Pn, {}),
                }),
                (0, Ee.jsx)(fe, { path: "DIO", element: (0, Ee.jsx)(yr, {}) }),
                (0, Ee.jsx)(fe, {
                  path: "ExecutionBoard",
                  element: (0, Ee.jsx)(gr, {}),
                }),
                (0, Ee.jsx)(fe, {
                  path: "Archives",
                  element: (0, Ee.jsx)(xr, {}),
                }),
                (0, Ee.jsx)(fe, {
                  path: "login",
                  element: (0, Ee.jsx)(wr, {}),
                }),
                (0, Ee.jsx)(fe, {
                  path: "Myprofile",
                  element: (0, Ee.jsx)(Sr, {}),
                }),
                (0, Ee.jsx)(fe, {
                  path: "Coopt",
                  element: (0, Ee.jsx)(kr, {}),
                }),
              ],
            }),
          }),
        });
      }
      r.createRoot(document.getElementById("root")).render((0, Ee.jsx)(Nr, {}));
    })();
})();
//# sourceMappingURL=main.79ce4935.js.map
