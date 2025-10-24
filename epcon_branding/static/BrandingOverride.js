import Oe, { useEffect as dr } from "react";
var N = { exports: {} }, F = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function vr() {
  if (Te) return F;
  Te = 1;
  var R = Oe, E = Symbol.for("react.element"), P = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, x = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(m, l, d) {
    var u, g = {}, O = null, $ = null;
    d !== void 0 && (O = "" + d), l.key !== void 0 && (O = "" + l.key), l.ref !== void 0 && ($ = l.ref);
    for (u in l) y.call(l, u) && !S.hasOwnProperty(u) && (g[u] = l[u]);
    if (m && m.defaultProps) for (u in l = m.defaultProps, l) g[u] === void 0 && (g[u] = l[u]);
    return { $$typeof: E, type: m, key: O, ref: $, props: g, _owner: x.current };
  }
  return F.Fragment = P, F.jsx = _, F.jsxs = _, F;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function pr() {
  return xe || (xe = 1, process.env.NODE_ENV !== "production" && (function() {
    var R = Oe, E = Symbol.for("react.element"), P = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), m = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), H = Symbol.iterator, Pe = "@@iterator";
    function je(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = H && e[H] || e[Pe];
      return typeof r == "function" ? r : null;
    }
    var j = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ke("error", e, t);
      }
    }
    function ke(e, r, t) {
      {
        var n = j.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Ae = !1, Ie = !1, De = !1, Fe = !1, We = !1, Z;
    Z = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === y || e === S || We || e === x || e === d || e === u || Fe || e === $ || Ae || Ie || De || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === g || e.$$typeof === _ || e.$$typeof === m || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Z || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function Q(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case y:
          return "Fragment";
        case P:
          return "Portal";
        case S:
          return "Profiler";
        case x:
          return "StrictMode";
        case d:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var r = e;
            return Q(r) + ".Consumer";
          case _:
            var t = e;
            return Q(t._context) + ".Provider";
          case l:
            return Ye(e, e.render, "ForwardRef");
          case g:
            var n = e.displayName || null;
            return n !== null ? n : T(e.type) || "Memo";
          case O: {
            var i = e, s = i._payload, o = i._init;
            try {
              return T(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, I = 0, ee, re, te, ne, ae, oe, ie;
    function se() {
    }
    se.__reactDisabledLog = !0;
    function Le() {
      {
        if (I === 0) {
          ee = console.log, re = console.info, te = console.warn, ne = console.error, ae = console.group, oe = console.groupCollapsed, ie = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: se,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        I++;
      }
    }
    function Me() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, e, {
              value: ee
            }),
            info: w({}, e, {
              value: re
            }),
            warn: w({}, e, {
              value: te
            }),
            error: w({}, e, {
              value: ne
            }),
            group: w({}, e, {
              value: ae
            }),
            groupCollapsed: w({}, e, {
              value: oe
            }),
            groupEnd: w({}, e, {
              value: ie
            })
          });
        }
        I < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = j.ReactCurrentDispatcher, B;
    function Y(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var q = !1, L;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      L = new Ve();
    }
    function ue(e, r) {
      if (!e || q)
        return "";
      {
        var t = L.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      q = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = U.current, U.current = null, Le();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (h) {
              n = h;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (h) {
              n = h;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (h) {
            n = h;
          }
          e();
        }
      } catch (h) {
        if (h && n && typeof h.stack == "string") {
          for (var a = h.stack.split(`
`), p = n.stack.split(`
`), c = a.length - 1, f = p.length - 1; c >= 1 && f >= 0 && a[c] !== p[f]; )
            f--;
          for (; c >= 1 && f >= 0; c--, f--)
            if (a[c] !== p[f]) {
              if (c !== 1 || f !== 1)
                do
                  if (c--, f--, f < 0 || a[c] !== p[f]) {
                    var b = `
` + a[c].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && L.set(e, b), b;
                  }
                while (c >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        q = !1, U.current = s, Me(), Error.prepareStackTrace = i;
      }
      var A = e ? e.displayName || e.name : "", C = A ? Y(A) : "";
      return typeof e == "function" && L.set(e, C), C;
    }
    function Ne(e, r, t) {
      return ue(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function M(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ue(e, Ue(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case d:
          return Y("Suspense");
        case u:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Ne(e.render);
          case g:
            return M(e.type, r, t);
          case O: {
            var n = e, i = n._payload, s = n._init;
            try {
              return M(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var D = Object.prototype.hasOwnProperty, le = {}, ce = j.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        ce.setExtraStackFrame(t);
      } else
        ce.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, i) {
      {
        var s = Function.call.bind(D);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              a = c;
            }
            a && !(a instanceof Error) && (V(i), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), V(null)), a instanceof Error && !(a.message in le) && (le[a.message] = !0, V(i), v("Failed %s type: %s", t, a.message), V(null));
          }
      }
    }
    var qe = Array.isArray;
    function J(e) {
      return qe(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ze(e) {
      try {
        return fe(e), !1;
      } catch {
        return !0;
      }
    }
    function fe(e) {
      return "" + e;
    }
    function de(e) {
      if (ze(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), fe(e);
    }
    var ve = j.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pe, me;
    function Ge(e) {
      if (D.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (D.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      typeof e.ref == "string" && ve.current;
    }
    function Ze(e, r) {
      {
        var t = function() {
          pe || (pe = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          me || (me = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, i, s, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: E,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function rr(e, r, t, n, i) {
      {
        var s, o = {}, a = null, p = null;
        t !== void 0 && (de(t), a = "" + t), Xe(r) && (de(r.key), a = "" + r.key), Ge(r) && (p = r.ref, He(r, i));
        for (s in r)
          D.call(r, s) && !Ke.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (s in c)
            o[s] === void 0 && (o[s] = c[s]);
        }
        if (a || p) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(o, f), p && Qe(o, f);
        }
        return er(e, a, p, i, n, ve.current, o);
      }
    }
    var z = j.ReactCurrentOwner, he = j.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    var K;
    K = !1;
    function G(e) {
      return typeof e == "object" && e !== null && e.$$typeof === E;
    }
    function ge() {
      {
        if (z.current) {
          var e = T(z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      return "";
    }
    var be = {};
    function nr(e) {
      {
        var r = ge();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ye(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (be[t])
          return;
        be[t] = !0;
        var n = "";
        e && e._owner && e._owner !== z.current && (n = " It was passed a child from " + T(e._owner.type) + "."), k(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function Ee(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            G(n) && ye(n, r);
          }
        else if (G(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = je(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              G(o.value) && ye(o.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = T(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !K) {
          K = !0;
          var i = T(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    var Re = {};
    function _e(e, r, t, n, i, s) {
      {
        var o = $e(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = tr();
          p ? a += p : a += ge();
          var c;
          e === null ? c = "null" : J(e) ? c = "array" : e !== void 0 && e.$$typeof === E ? (c = "<" + (T(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var f = rr(e, r, t, i, s);
        if (f == null)
          return f;
        if (o) {
          var b = r.children;
          if (b !== void 0)
            if (n)
              if (J(b)) {
                for (var A = 0; A < b.length; A++)
                  Ee(b[A], e);
                Object.freeze && Object.freeze(b);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ee(b, e);
        }
        if (D.call(r, "key")) {
          var C = T(e), h = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), X = h.length > 0 ? "{key: someKey, " + h.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Re[C + X]) {
            var cr = h.length > 0 ? "{" + h.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, X, C, cr, C), Re[C + X] = !0;
          }
        }
        return e === y ? or(f) : ar(f), f;
      }
    }
    function ir(e, r, t) {
      return _e(e, r, t, !0);
    }
    function sr(e, r, t) {
      return _e(e, r, t, !1);
    }
    var ur = sr, lr = ir;
    W.Fragment = y, W.jsx = ur, W.jsxs = lr;
  })()), W;
}
var Se;
function mr() {
  return Se || (Se = 1, process.env.NODE_ENV === "production" ? N.exports = vr() : N.exports = pr()), N.exports;
}
var we = mr();
const hr = `
  /* Target the sidebar logo text */
  [data-app-logo] .mantine-Text-root,
  [class*="AppLogo"] .mantine-Text-root,
  nav [href="/"] .mantine-Text-root,
  aside [href="/"] .mantine-Text-root,
  /* Additional selectors for the sidebar brand text */
  .mantine-AppShell-navbar [href="/"] span,
  .mantine-AppShell-navbar [href="/"] div[class*="Text"],
  /* Catch-all for InvenTree text in navigation */
  nav span:not([class*="icon"]):not([class*="Icon"]) {
    visibility: hidden !important;
    position: relative !important;
    font-size: 0 !important;
  }

  /* Inject new text using ::after */
  [data-app-logo] .mantine-Text-root::after,
  [class*="AppLogo"] .mantine-Text-root::after,
  nav [href="/"] .mantine-Text-root::after,
  aside [href="/"] .mantine-Text-root::after,
  .mantine-AppShell-navbar [href="/"] span::after,
  .mantine-AppShell-navbar [href="/"] div[class*="Text"]::after {
    content: "Epcon AIMMS" !important;
    visibility: visible !important;
    position: absolute !important;
    left: 0 !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    font-size: 1.25rem !important;
    font-weight: 600 !important;
    color: var(--mantine-color-text, #000) !important;
    white-space: nowrap !important;
  }

  /* Dark mode support */
  [data-mantine-color-scheme="dark"] [data-app-logo] .mantine-Text-root::after,
  [data-mantine-color-scheme="dark"] [class*="AppLogo"] .mantine-Text-root::after,
  [data-mantine-color-scheme="dark"] nav [href="/"] .mantine-Text-root::after,
  [data-mantine-color-scheme="dark"] aside [href="/"] .mantine-Text-root::after,
  [data-mantine-color-scheme="dark"] .mantine-AppShell-navbar [href="/"] span::after,
  [data-mantine-color-scheme="dark"] .mantine-AppShell-navbar [href="/"] div[class*="Text"]::after {
    color: var(--mantine-color-text, #fff) !important;
  }

  /* Alternative approach - directly target any text containing "InvenTree" */
  *:not(script):not(style) {
    font-size: inherit; /* Prevent interference */
  }

  /* Hide the actual InvenTree text node */
  body {
    --epcon-branding-replacement: "Epcon AIMMS";
  }
`;
function Ce({ context: R }) {
  return dr(() => {
    const E = "epcon-branding-override", P = document.getElementById(E);
    P && P.remove();
    const y = document.createElement("style");
    y.id = E, y.textContent = hr, document.head.appendChild(y);
    const x = () => {
      const m = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null
      ), l = [];
      let d;
      for (; d = m.nextNode(); )
        if (d.nodeValue && d.nodeValue.includes("InvenTree")) {
          let u = d.parentElement, g = !1;
          for (; u; ) {
            if (u.tagName === "NAV" || u.tagName === "ASIDE" || u.classList.contains("mantine-AppShell-navbar") || u.hasAttribute("data-app-logo")) {
              g = !0;
              break;
            }
            u = u.parentElement;
          }
          g && l.push(d);
        }
      l.forEach((u) => {
        u.nodeValue && (u.nodeValue = u.nodeValue.replace(/InvenTree/gi, "Epcon AIMMS"));
      });
    };
    x();
    const S = new MutationObserver((m) => {
      let l = !1;
      m.forEach((d) => {
        d.type === "childList" && d.addedNodes.length > 0 && (l = !0);
      }), l && setTimeout(x, 100);
    }), _ = document.querySelector("nav") || document.querySelector("aside");
    return _ && S.observe(_, {
      childList: !0,
      subtree: !0,
      characterData: !0
    }), () => {
      S.disconnect();
      const m = document.getElementById(E);
      m && m.remove();
    };
  }, []), null;
}
function br(R) {
  return /* @__PURE__ */ we.jsx(Ce, { context: R });
}
function yr(R) {
  return /* @__PURE__ */ we.jsx(Ce, { context: R });
}
export {
  Ce as default,
  br as renderBrandingOverride,
  yr as renderBrandingPanel
};
