(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a2, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp(a2, prop, b2[prop]);
      }
    return a2;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/htmx.org/dist/htmx.min.js
  var require_htmx_min = __commonJS({
    "node_modules/htmx.org/dist/htmx.min.js"(exports, module) {
      (function(e2, t2) {
        if (typeof define === "function" && define.amd) {
          define([], t2);
        } else if (typeof module === "object" && module.exports) {
          module.exports = t2();
        } else {
          e2.htmx = e2.htmx || t2();
        }
      })(typeof self !== "undefined" ? self : exports, function() {
        return function() {
          "use strict";
          var Q = { onLoad: F, process: zt, on: de, off: ge, trigger: ce, ajax: Nr, find: C, findAll: f, closest: v, values: function(e2, t2) {
            var r2 = dr(e2, t2 || "post");
            return r2.values;
          }, remove: _, addClass: z, removeClass: n, toggleClass: $, takeClass: W, defineExtension: Ur, removeExtension: Br, logAll: V, logNone: j, logger: null, config: { historyEnabled: true, historyCacheSize: 10, refreshOnHistoryMiss: false, defaultSwapStyle: "innerHTML", defaultSwapDelay: 0, defaultSettleDelay: 20, includeIndicatorStyles: true, indicatorClass: "htmx-indicator", requestClass: "htmx-request", addedClass: "htmx-added", settlingClass: "htmx-settling", swappingClass: "htmx-swapping", allowEval: true, allowScriptTags: true, inlineScriptNonce: "", attributesToSettle: ["class", "style", "width", "height"], withCredentials: false, timeout: 0, wsReconnectDelay: "full-jitter", wsBinaryType: "blob", disableSelector: "[hx-disable], [data-hx-disable]", useTemplateFragments: false, scrollBehavior: "smooth", defaultFocusScroll: false, getCacheBusterParam: false, globalViewTransitions: false, methodsThatUseUrlParams: ["get"], selfRequestsOnly: false, ignoreTitle: false, scrollIntoViewOnBoost: true, triggerSpecsCache: null }, parseInterval: d, _: t, createEventSource: function(e2) {
            return new EventSource(e2, { withCredentials: true });
          }, createWebSocket: function(e2) {
            var t2 = new WebSocket(e2, []);
            t2.binaryType = Q.config.wsBinaryType;
            return t2;
          }, version: "1.9.10" };
          var r = { addTriggerHandler: Lt, bodyContains: se, canAccessLocalStorage: U, findThisElement: xe, filterValues: yr, hasAttribute: o, getAttributeValue: te, getClosestAttributeValue: ne, getClosestMatch: c, getExpressionVars: Hr, getHeaders: xr, getInputValues: dr, getInternalData: ae, getSwapSpecification: wr, getTriggerSpecs: it, getTarget: ye, makeFragment: l, mergeObjects: le, makeSettleInfo: T, oobSwap: Ee, querySelectorExt: ue, selectAndSwap: je, settleImmediately: nr, shouldCancel: ut, triggerEvent: ce, triggerErrorEvent: fe, withExtensions: R };
          var w = ["get", "post", "put", "delete", "patch"];
          var i = w.map(function(e2) {
            return "[hx-" + e2 + "], [data-hx-" + e2 + "]";
          }).join(", ");
          var S = e("head"), q = e("title"), H = e("svg", true);
          function e(e2, t2 = false) {
            return new RegExp(`<${e2}(\\s[^>]*>|>)([\\s\\S]*?)<\\/${e2}>`, t2 ? "gim" : "im");
          }
          function d(e2) {
            if (e2 == void 0) {
              return void 0;
            }
            let t2 = NaN;
            if (e2.slice(-2) == "ms") {
              t2 = parseFloat(e2.slice(0, -2));
            } else if (e2.slice(-1) == "s") {
              t2 = parseFloat(e2.slice(0, -1)) * 1e3;
            } else if (e2.slice(-1) == "m") {
              t2 = parseFloat(e2.slice(0, -1)) * 1e3 * 60;
            } else {
              t2 = parseFloat(e2);
            }
            return isNaN(t2) ? void 0 : t2;
          }
          function ee(e2, t2) {
            return e2.getAttribute && e2.getAttribute(t2);
          }
          function o(e2, t2) {
            return e2.hasAttribute && (e2.hasAttribute(t2) || e2.hasAttribute("data-" + t2));
          }
          function te(e2, t2) {
            return ee(e2, t2) || ee(e2, "data-" + t2);
          }
          function u(e2) {
            return e2.parentElement;
          }
          function re() {
            return document;
          }
          function c(e2, t2) {
            while (e2 && !t2(e2)) {
              e2 = u(e2);
            }
            return e2 ? e2 : null;
          }
          function L(e2, t2, r2) {
            var n2 = te(t2, r2);
            var i2 = te(t2, "hx-disinherit");
            if (e2 !== t2 && i2 && (i2 === "*" || i2.split(" ").indexOf(r2) >= 0)) {
              return "unset";
            } else {
              return n2;
            }
          }
          function ne(t2, r2) {
            var n2 = null;
            c(t2, function(e2) {
              return n2 = L(t2, e2, r2);
            });
            if (n2 !== "unset") {
              return n2;
            }
          }
          function h(e2, t2) {
            var r2 = e2.matches || e2.matchesSelector || e2.msMatchesSelector || e2.mozMatchesSelector || e2.webkitMatchesSelector || e2.oMatchesSelector;
            return r2 && r2.call(e2, t2);
          }
          function A(e2) {
            var t2 = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
            var r2 = t2.exec(e2);
            if (r2) {
              return r2[1].toLowerCase();
            } else {
              return "";
            }
          }
          function a(e2, t2) {
            var r2 = new DOMParser();
            var n2 = r2.parseFromString(e2, "text/html");
            var i2 = n2.body;
            while (t2 > 0) {
              t2--;
              i2 = i2.firstChild;
            }
            if (i2 == null) {
              i2 = re().createDocumentFragment();
            }
            return i2;
          }
          function N(e2) {
            return /<body/.test(e2);
          }
          function l(e2) {
            var t2 = !N(e2);
            var r2 = A(e2);
            var n2 = e2;
            if (r2 === "head") {
              n2 = n2.replace(S, "");
            }
            if (Q.config.useTemplateFragments && t2) {
              var i2 = a("<body><template>" + n2 + "</template></body>", 0);
              return i2.querySelector("template").content;
            }
            switch (r2) {
              case "thead":
              case "tbody":
              case "tfoot":
              case "colgroup":
              case "caption":
                return a("<table>" + n2 + "</table>", 1);
              case "col":
                return a("<table><colgroup>" + n2 + "</colgroup></table>", 2);
              case "tr":
                return a("<table><tbody>" + n2 + "</tbody></table>", 2);
              case "td":
              case "th":
                return a("<table><tbody><tr>" + n2 + "</tr></tbody></table>", 3);
              case "script":
              case "style":
                return a("<div>" + n2 + "</div>", 1);
              default:
                return a(n2, 0);
            }
          }
          function ie(e2) {
            if (e2) {
              e2();
            }
          }
          function I(e2, t2) {
            return Object.prototype.toString.call(e2) === "[object " + t2 + "]";
          }
          function k(e2) {
            return I(e2, "Function");
          }
          function P(e2) {
            return I(e2, "Object");
          }
          function ae(e2) {
            var t2 = "htmx-internal-data";
            var r2 = e2[t2];
            if (!r2) {
              r2 = e2[t2] = {};
            }
            return r2;
          }
          function M(e2) {
            var t2 = [];
            if (e2) {
              for (var r2 = 0; r2 < e2.length; r2++) {
                t2.push(e2[r2]);
              }
            }
            return t2;
          }
          function oe(e2, t2) {
            if (e2) {
              for (var r2 = 0; r2 < e2.length; r2++) {
                t2(e2[r2]);
              }
            }
          }
          function X(e2) {
            var t2 = e2.getBoundingClientRect();
            var r2 = t2.top;
            var n2 = t2.bottom;
            return r2 < window.innerHeight && n2 >= 0;
          }
          function se(e2) {
            if (e2.getRootNode && e2.getRootNode() instanceof window.ShadowRoot) {
              return re().body.contains(e2.getRootNode().host);
            } else {
              return re().body.contains(e2);
            }
          }
          function D(e2) {
            return e2.trim().split(/\s+/);
          }
          function le(e2, t2) {
            for (var r2 in t2) {
              if (t2.hasOwnProperty(r2)) {
                e2[r2] = t2[r2];
              }
            }
            return e2;
          }
          function E(e2) {
            try {
              return JSON.parse(e2);
            } catch (e3) {
              b(e3);
              return null;
            }
          }
          function U() {
            var e2 = "htmx:localStorageTest";
            try {
              localStorage.setItem(e2, e2);
              localStorage.removeItem(e2);
              return true;
            } catch (e3) {
              return false;
            }
          }
          function B(t2) {
            try {
              var e2 = new URL(t2);
              if (e2) {
                t2 = e2.pathname + e2.search;
              }
              if (!/^\/$/.test(t2)) {
                t2 = t2.replace(/\/+$/, "");
              }
              return t2;
            } catch (e3) {
              return t2;
            }
          }
          function t(e) {
            return Tr(re().body, function() {
              return eval(e);
            });
          }
          function F(t2) {
            var e2 = Q.on("htmx:load", function(e3) {
              t2(e3.detail.elt);
            });
            return e2;
          }
          function V() {
            Q.logger = function(e2, t2, r2) {
              if (console) {
                console.log(t2, e2, r2);
              }
            };
          }
          function j() {
            Q.logger = null;
          }
          function C(e2, t2) {
            if (t2) {
              return e2.querySelector(t2);
            } else {
              return C(re(), e2);
            }
          }
          function f(e2, t2) {
            if (t2) {
              return e2.querySelectorAll(t2);
            } else {
              return f(re(), e2);
            }
          }
          function _(e2, t2) {
            e2 = g(e2);
            if (t2) {
              setTimeout(function() {
                _(e2);
                e2 = null;
              }, t2);
            } else {
              e2.parentElement.removeChild(e2);
            }
          }
          function z(e2, t2, r2) {
            e2 = g(e2);
            if (r2) {
              setTimeout(function() {
                z(e2, t2);
                e2 = null;
              }, r2);
            } else {
              e2.classList && e2.classList.add(t2);
            }
          }
          function n(e2, t2, r2) {
            e2 = g(e2);
            if (r2) {
              setTimeout(function() {
                n(e2, t2);
                e2 = null;
              }, r2);
            } else {
              if (e2.classList) {
                e2.classList.remove(t2);
                if (e2.classList.length === 0) {
                  e2.removeAttribute("class");
                }
              }
            }
          }
          function $(e2, t2) {
            e2 = g(e2);
            e2.classList.toggle(t2);
          }
          function W(e2, t2) {
            e2 = g(e2);
            oe(e2.parentElement.children, function(e3) {
              n(e3, t2);
            });
            z(e2, t2);
          }
          function v(e2, t2) {
            e2 = g(e2);
            if (e2.closest) {
              return e2.closest(t2);
            } else {
              do {
                if (e2 == null || h(e2, t2)) {
                  return e2;
                }
              } while (e2 = e2 && u(e2));
              return null;
            }
          }
          function s(e2, t2) {
            return e2.substring(0, t2.length) === t2;
          }
          function G(e2, t2) {
            return e2.substring(e2.length - t2.length) === t2;
          }
          function J(e2) {
            var t2 = e2.trim();
            if (s(t2, "<") && G(t2, "/>")) {
              return t2.substring(1, t2.length - 2);
            } else {
              return t2;
            }
          }
          function Z(e2, t2) {
            if (t2.indexOf("closest ") === 0) {
              return [v(e2, J(t2.substr(8)))];
            } else if (t2.indexOf("find ") === 0) {
              return [C(e2, J(t2.substr(5)))];
            } else if (t2 === "next") {
              return [e2.nextElementSibling];
            } else if (t2.indexOf("next ") === 0) {
              return [K(e2, J(t2.substr(5)))];
            } else if (t2 === "previous") {
              return [e2.previousElementSibling];
            } else if (t2.indexOf("previous ") === 0) {
              return [Y(e2, J(t2.substr(9)))];
            } else if (t2 === "document") {
              return [document];
            } else if (t2 === "window") {
              return [window];
            } else if (t2 === "body") {
              return [document.body];
            } else {
              return re().querySelectorAll(J(t2));
            }
          }
          var K = function(e2, t2) {
            var r2 = re().querySelectorAll(t2);
            for (var n2 = 0; n2 < r2.length; n2++) {
              var i2 = r2[n2];
              if (i2.compareDocumentPosition(e2) === Node.DOCUMENT_POSITION_PRECEDING) {
                return i2;
              }
            }
          };
          var Y = function(e2, t2) {
            var r2 = re().querySelectorAll(t2);
            for (var n2 = r2.length - 1; n2 >= 0; n2--) {
              var i2 = r2[n2];
              if (i2.compareDocumentPosition(e2) === Node.DOCUMENT_POSITION_FOLLOWING) {
                return i2;
              }
            }
          };
          function ue(e2, t2) {
            if (t2) {
              return Z(e2, t2)[0];
            } else {
              return Z(re().body, e2)[0];
            }
          }
          function g(e2) {
            if (I(e2, "String")) {
              return C(e2);
            } else {
              return e2;
            }
          }
          function ve(e2, t2, r2) {
            if (k(t2)) {
              return { target: re().body, event: e2, listener: t2 };
            } else {
              return { target: g(e2), event: t2, listener: r2 };
            }
          }
          function de(t2, r2, n2) {
            jr(function() {
              var e3 = ve(t2, r2, n2);
              e3.target.addEventListener(e3.event, e3.listener);
            });
            var e2 = k(r2);
            return e2 ? r2 : n2;
          }
          function ge(t2, r2, n2) {
            jr(function() {
              var e2 = ve(t2, r2, n2);
              e2.target.removeEventListener(e2.event, e2.listener);
            });
            return k(r2) ? r2 : n2;
          }
          var me = re().createElement("output");
          function pe(e2, t2) {
            var r2 = ne(e2, t2);
            if (r2) {
              if (r2 === "this") {
                return [xe(e2, t2)];
              } else {
                var n2 = Z(e2, r2);
                if (n2.length === 0) {
                  b('The selector "' + r2 + '" on ' + t2 + " returned no matches!");
                  return [me];
                } else {
                  return n2;
                }
              }
            }
          }
          function xe(e2, t2) {
            return c(e2, function(e3) {
              return te(e3, t2) != null;
            });
          }
          function ye(e2) {
            var t2 = ne(e2, "hx-target");
            if (t2) {
              if (t2 === "this") {
                return xe(e2, "hx-target");
              } else {
                return ue(e2, t2);
              }
            } else {
              var r2 = ae(e2);
              if (r2.boosted) {
                return re().body;
              } else {
                return e2;
              }
            }
          }
          function be(e2) {
            var t2 = Q.config.attributesToSettle;
            for (var r2 = 0; r2 < t2.length; r2++) {
              if (e2 === t2[r2]) {
                return true;
              }
            }
            return false;
          }
          function we(t2, r2) {
            oe(t2.attributes, function(e2) {
              if (!r2.hasAttribute(e2.name) && be(e2.name)) {
                t2.removeAttribute(e2.name);
              }
            });
            oe(r2.attributes, function(e2) {
              if (be(e2.name)) {
                t2.setAttribute(e2.name, e2.value);
              }
            });
          }
          function Se(e2, t2) {
            var r2 = Fr(t2);
            for (var n2 = 0; n2 < r2.length; n2++) {
              var i2 = r2[n2];
              try {
                if (i2.isInlineSwap(e2)) {
                  return true;
                }
              } catch (e3) {
                b(e3);
              }
            }
            return e2 === "outerHTML";
          }
          function Ee(e2, i2, a2) {
            var t2 = "#" + ee(i2, "id");
            var o2 = "outerHTML";
            if (e2 === "true") {
            } else if (e2.indexOf(":") > 0) {
              o2 = e2.substr(0, e2.indexOf(":"));
              t2 = e2.substr(e2.indexOf(":") + 1, e2.length);
            } else {
              o2 = e2;
            }
            var r2 = re().querySelectorAll(t2);
            if (r2) {
              oe(r2, function(e3) {
                var t3;
                var r3 = i2.cloneNode(true);
                t3 = re().createDocumentFragment();
                t3.appendChild(r3);
                if (!Se(o2, e3)) {
                  t3 = r3;
                }
                var n2 = { shouldSwap: true, target: e3, fragment: t3 };
                if (!ce(e3, "htmx:oobBeforeSwap", n2))
                  return;
                e3 = n2.target;
                if (n2["shouldSwap"]) {
                  Fe(o2, e3, e3, t3, a2);
                }
                oe(a2.elts, function(e4) {
                  ce(e4, "htmx:oobAfterSwap", n2);
                });
              });
              i2.parentNode.removeChild(i2);
            } else {
              i2.parentNode.removeChild(i2);
              fe(re().body, "htmx:oobErrorNoTarget", { content: i2 });
            }
            return e2;
          }
          function Ce(e2, t2, r2) {
            var n2 = ne(e2, "hx-select-oob");
            if (n2) {
              var i2 = n2.split(",");
              for (var a2 = 0; a2 < i2.length; a2++) {
                var o2 = i2[a2].split(":", 2);
                var s2 = o2[0].trim();
                if (s2.indexOf("#") === 0) {
                  s2 = s2.substring(1);
                }
                var l2 = o2[1] || "true";
                var u2 = t2.querySelector("#" + s2);
                if (u2) {
                  Ee(l2, u2, r2);
                }
              }
            }
            oe(f(t2, "[hx-swap-oob], [data-hx-swap-oob]"), function(e3) {
              var t3 = te(e3, "hx-swap-oob");
              if (t3 != null) {
                Ee(t3, e3, r2);
              }
            });
          }
          function Re(e2) {
            oe(f(e2, "[hx-preserve], [data-hx-preserve]"), function(e3) {
              var t2 = te(e3, "id");
              var r2 = re().getElementById(t2);
              if (r2 != null) {
                e3.parentNode.replaceChild(r2, e3);
              }
            });
          }
          function Te(o2, e2, s2) {
            oe(e2.querySelectorAll("[id]"), function(e3) {
              var t2 = ee(e3, "id");
              if (t2 && t2.length > 0) {
                var r2 = t2.replace("'", "\\'");
                var n2 = e3.tagName.replace(":", "\\:");
                var i2 = o2.querySelector(n2 + "[id='" + r2 + "']");
                if (i2 && i2 !== o2) {
                  var a2 = e3.cloneNode();
                  we(e3, i2);
                  s2.tasks.push(function() {
                    we(e3, a2);
                  });
                }
              }
            });
          }
          function Oe(e2) {
            return function() {
              n(e2, Q.config.addedClass);
              zt(e2);
              Nt(e2);
              qe(e2);
              ce(e2, "htmx:load");
            };
          }
          function qe(e2) {
            var t2 = "[autofocus]";
            var r2 = h(e2, t2) ? e2 : e2.querySelector(t2);
            if (r2 != null) {
              r2.focus();
            }
          }
          function m(e2, t2, r2, n2) {
            Te(e2, r2, n2);
            while (r2.childNodes.length > 0) {
              var i2 = r2.firstChild;
              z(i2, Q.config.addedClass);
              e2.insertBefore(i2, t2);
              if (i2.nodeType !== Node.TEXT_NODE && i2.nodeType !== Node.COMMENT_NODE) {
                n2.tasks.push(Oe(i2));
              }
            }
          }
          function He(e2, t2) {
            var r2 = 0;
            while (r2 < e2.length) {
              t2 = (t2 << 5) - t2 + e2.charCodeAt(r2++) | 0;
            }
            return t2;
          }
          function Le(e2) {
            var t2 = 0;
            if (e2.attributes) {
              for (var r2 = 0; r2 < e2.attributes.length; r2++) {
                var n2 = e2.attributes[r2];
                if (n2.value) {
                  t2 = He(n2.name, t2);
                  t2 = He(n2.value, t2);
                }
              }
            }
            return t2;
          }
          function Ae(e2) {
            var t2 = ae(e2);
            if (t2.onHandlers) {
              for (var r2 = 0; r2 < t2.onHandlers.length; r2++) {
                const n2 = t2.onHandlers[r2];
                e2.removeEventListener(n2.event, n2.listener);
              }
              delete t2.onHandlers;
            }
          }
          function Ne(e2) {
            var t2 = ae(e2);
            if (t2.timeout) {
              clearTimeout(t2.timeout);
            }
            if (t2.webSocket) {
              t2.webSocket.close();
            }
            if (t2.sseEventSource) {
              t2.sseEventSource.close();
            }
            if (t2.listenerInfos) {
              oe(t2.listenerInfos, function(e3) {
                if (e3.on) {
                  e3.on.removeEventListener(e3.trigger, e3.listener);
                }
              });
            }
            Ae(e2);
            oe(Object.keys(t2), function(e3) {
              delete t2[e3];
            });
          }
          function p(e2) {
            ce(e2, "htmx:beforeCleanupElement");
            Ne(e2);
            if (e2.children) {
              oe(e2.children, function(e3) {
                p(e3);
              });
            }
          }
          function Ie(t2, e2, r2) {
            if (t2.tagName === "BODY") {
              return Ue(t2, e2, r2);
            } else {
              var n2;
              var i2 = t2.previousSibling;
              m(u(t2), t2, e2, r2);
              if (i2 == null) {
                n2 = u(t2).firstChild;
              } else {
                n2 = i2.nextSibling;
              }
              r2.elts = r2.elts.filter(function(e3) {
                return e3 != t2;
              });
              while (n2 && n2 !== t2) {
                if (n2.nodeType === Node.ELEMENT_NODE) {
                  r2.elts.push(n2);
                }
                n2 = n2.nextElementSibling;
              }
              p(t2);
              u(t2).removeChild(t2);
            }
          }
          function ke(e2, t2, r2) {
            return m(e2, e2.firstChild, t2, r2);
          }
          function Pe(e2, t2, r2) {
            return m(u(e2), e2, t2, r2);
          }
          function Me(e2, t2, r2) {
            return m(e2, null, t2, r2);
          }
          function Xe(e2, t2, r2) {
            return m(u(e2), e2.nextSibling, t2, r2);
          }
          function De(e2, t2, r2) {
            p(e2);
            return u(e2).removeChild(e2);
          }
          function Ue(e2, t2, r2) {
            var n2 = e2.firstChild;
            m(e2, n2, t2, r2);
            if (n2) {
              while (n2.nextSibling) {
                p(n2.nextSibling);
                e2.removeChild(n2.nextSibling);
              }
              p(n2);
              e2.removeChild(n2);
            }
          }
          function Be(e2, t2, r2) {
            var n2 = r2 || ne(e2, "hx-select");
            if (n2) {
              var i2 = re().createDocumentFragment();
              oe(t2.querySelectorAll(n2), function(e3) {
                i2.appendChild(e3);
              });
              t2 = i2;
            }
            return t2;
          }
          function Fe(e2, t2, r2, n2, i2) {
            switch (e2) {
              case "none":
                return;
              case "outerHTML":
                Ie(r2, n2, i2);
                return;
              case "afterbegin":
                ke(r2, n2, i2);
                return;
              case "beforebegin":
                Pe(r2, n2, i2);
                return;
              case "beforeend":
                Me(r2, n2, i2);
                return;
              case "afterend":
                Xe(r2, n2, i2);
                return;
              case "delete":
                De(r2, n2, i2);
                return;
              default:
                var a2 = Fr(t2);
                for (var o2 = 0; o2 < a2.length; o2++) {
                  var s2 = a2[o2];
                  try {
                    var l2 = s2.handleSwap(e2, r2, n2, i2);
                    if (l2) {
                      if (typeof l2.length !== "undefined") {
                        for (var u2 = 0; u2 < l2.length; u2++) {
                          var f2 = l2[u2];
                          if (f2.nodeType !== Node.TEXT_NODE && f2.nodeType !== Node.COMMENT_NODE) {
                            i2.tasks.push(Oe(f2));
                          }
                        }
                      }
                      return;
                    }
                  } catch (e3) {
                    b(e3);
                  }
                }
                if (e2 === "innerHTML") {
                  Ue(r2, n2, i2);
                } else {
                  Fe(Q.config.defaultSwapStyle, t2, r2, n2, i2);
                }
            }
          }
          function Ve(e2) {
            if (e2.indexOf("<title") > -1) {
              var t2 = e2.replace(H, "");
              var r2 = t2.match(q);
              if (r2) {
                return r2[2];
              }
            }
          }
          function je(e2, t2, r2, n2, i2, a2) {
            i2.title = Ve(n2);
            var o2 = l(n2);
            if (o2) {
              Ce(r2, o2, i2);
              o2 = Be(r2, o2, a2);
              Re(o2);
              return Fe(e2, r2, t2, o2, i2);
            }
          }
          function _e(e2, t2, r2) {
            var n2 = e2.getResponseHeader(t2);
            if (n2.indexOf("{") === 0) {
              var i2 = E(n2);
              for (var a2 in i2) {
                if (i2.hasOwnProperty(a2)) {
                  var o2 = i2[a2];
                  if (!P(o2)) {
                    o2 = { value: o2 };
                  }
                  ce(r2, a2, o2);
                }
              }
            } else {
              var s2 = n2.split(",");
              for (var l2 = 0; l2 < s2.length; l2++) {
                ce(r2, s2[l2].trim(), []);
              }
            }
          }
          var ze = /\s/;
          var x = /[\s,]/;
          var $e = /[_$a-zA-Z]/;
          var We = /[_$a-zA-Z0-9]/;
          var Ge = ['"', "'", "/"];
          var Je = /[^\s]/;
          var Ze = /[{(]/;
          var Ke = /[})]/;
          function Ye(e2) {
            var t2 = [];
            var r2 = 0;
            while (r2 < e2.length) {
              if ($e.exec(e2.charAt(r2))) {
                var n2 = r2;
                while (We.exec(e2.charAt(r2 + 1))) {
                  r2++;
                }
                t2.push(e2.substr(n2, r2 - n2 + 1));
              } else if (Ge.indexOf(e2.charAt(r2)) !== -1) {
                var i2 = e2.charAt(r2);
                var n2 = r2;
                r2++;
                while (r2 < e2.length && e2.charAt(r2) !== i2) {
                  if (e2.charAt(r2) === "\\") {
                    r2++;
                  }
                  r2++;
                }
                t2.push(e2.substr(n2, r2 - n2 + 1));
              } else {
                var a2 = e2.charAt(r2);
                t2.push(a2);
              }
              r2++;
            }
            return t2;
          }
          function Qe(e2, t2, r2) {
            return $e.exec(e2.charAt(0)) && e2 !== "true" && e2 !== "false" && e2 !== "this" && e2 !== r2 && t2 !== ".";
          }
          function et(e2, t2, r2) {
            if (t2[0] === "[") {
              t2.shift();
              var n2 = 1;
              var i2 = " return (function(" + r2 + "){ return (";
              var a2 = null;
              while (t2.length > 0) {
                var o2 = t2[0];
                if (o2 === "]") {
                  n2--;
                  if (n2 === 0) {
                    if (a2 === null) {
                      i2 = i2 + "true";
                    }
                    t2.shift();
                    i2 += ")})";
                    try {
                      var s2 = Tr(e2, function() {
                        return Function(i2)();
                      }, function() {
                        return true;
                      });
                      s2.source = i2;
                      return s2;
                    } catch (e3) {
                      fe(re().body, "htmx:syntax:error", { error: e3, source: i2 });
                      return null;
                    }
                  }
                } else if (o2 === "[") {
                  n2++;
                }
                if (Qe(o2, a2, r2)) {
                  i2 += "((" + r2 + "." + o2 + ") ? (" + r2 + "." + o2 + ") : (window." + o2 + "))";
                } else {
                  i2 = i2 + o2;
                }
                a2 = t2.shift();
              }
            }
          }
          function y(e2, t2) {
            var r2 = "";
            while (e2.length > 0 && !t2.test(e2[0])) {
              r2 += e2.shift();
            }
            return r2;
          }
          function tt(e2) {
            var t2;
            if (e2.length > 0 && Ze.test(e2[0])) {
              e2.shift();
              t2 = y(e2, Ke).trim();
              e2.shift();
            } else {
              t2 = y(e2, x);
            }
            return t2;
          }
          var rt = "input, textarea, select";
          function nt(e2, t2, r2) {
            var n2 = [];
            var i2 = Ye(t2);
            do {
              y(i2, Je);
              var a2 = i2.length;
              var o2 = y(i2, /[,\[\s]/);
              if (o2 !== "") {
                if (o2 === "every") {
                  var s2 = { trigger: "every" };
                  y(i2, Je);
                  s2.pollInterval = d(y(i2, /[,\[\s]/));
                  y(i2, Je);
                  var l2 = et(e2, i2, "event");
                  if (l2) {
                    s2.eventFilter = l2;
                  }
                  n2.push(s2);
                } else if (o2.indexOf("sse:") === 0) {
                  n2.push({ trigger: "sse", sseEvent: o2.substr(4) });
                } else {
                  var u2 = { trigger: o2 };
                  var l2 = et(e2, i2, "event");
                  if (l2) {
                    u2.eventFilter = l2;
                  }
                  while (i2.length > 0 && i2[0] !== ",") {
                    y(i2, Je);
                    var f2 = i2.shift();
                    if (f2 === "changed") {
                      u2.changed = true;
                    } else if (f2 === "once") {
                      u2.once = true;
                    } else if (f2 === "consume") {
                      u2.consume = true;
                    } else if (f2 === "delay" && i2[0] === ":") {
                      i2.shift();
                      u2.delay = d(y(i2, x));
                    } else if (f2 === "from" && i2[0] === ":") {
                      i2.shift();
                      if (Ze.test(i2[0])) {
                        var c2 = tt(i2);
                      } else {
                        var c2 = y(i2, x);
                        if (c2 === "closest" || c2 === "find" || c2 === "next" || c2 === "previous") {
                          i2.shift();
                          var h2 = tt(i2);
                          if (h2.length > 0) {
                            c2 += " " + h2;
                          }
                        }
                      }
                      u2.from = c2;
                    } else if (f2 === "target" && i2[0] === ":") {
                      i2.shift();
                      u2.target = tt(i2);
                    } else if (f2 === "throttle" && i2[0] === ":") {
                      i2.shift();
                      u2.throttle = d(y(i2, x));
                    } else if (f2 === "queue" && i2[0] === ":") {
                      i2.shift();
                      u2.queue = y(i2, x);
                    } else if (f2 === "root" && i2[0] === ":") {
                      i2.shift();
                      u2[f2] = tt(i2);
                    } else if (f2 === "threshold" && i2[0] === ":") {
                      i2.shift();
                      u2[f2] = y(i2, x);
                    } else {
                      fe(e2, "htmx:syntax:error", { token: i2.shift() });
                    }
                  }
                  n2.push(u2);
                }
              }
              if (i2.length === a2) {
                fe(e2, "htmx:syntax:error", { token: i2.shift() });
              }
              y(i2, Je);
            } while (i2[0] === "," && i2.shift());
            if (r2) {
              r2[t2] = n2;
            }
            return n2;
          }
          function it(e2) {
            var t2 = te(e2, "hx-trigger");
            var r2 = [];
            if (t2) {
              var n2 = Q.config.triggerSpecsCache;
              r2 = n2 && n2[t2] || nt(e2, t2, n2);
            }
            if (r2.length > 0) {
              return r2;
            } else if (h(e2, "form")) {
              return [{ trigger: "submit" }];
            } else if (h(e2, 'input[type="button"], input[type="submit"]')) {
              return [{ trigger: "click" }];
            } else if (h(e2, rt)) {
              return [{ trigger: "change" }];
            } else {
              return [{ trigger: "click" }];
            }
          }
          function at(e2) {
            ae(e2).cancelled = true;
          }
          function ot(e2, t2, r2) {
            var n2 = ae(e2);
            n2.timeout = setTimeout(function() {
              if (se(e2) && n2.cancelled !== true) {
                if (!ct(r2, e2, Wt("hx:poll:trigger", { triggerSpec: r2, target: e2 }))) {
                  t2(e2);
                }
                ot(e2, t2, r2);
              }
            }, r2.pollInterval);
          }
          function st(e2) {
            return location.hostname === e2.hostname && ee(e2, "href") && ee(e2, "href").indexOf("#") !== 0;
          }
          function lt(t2, r2, e2) {
            if (t2.tagName === "A" && st(t2) && (t2.target === "" || t2.target === "_self") || t2.tagName === "FORM") {
              r2.boosted = true;
              var n2, i2;
              if (t2.tagName === "A") {
                n2 = "get";
                i2 = ee(t2, "href");
              } else {
                var a2 = ee(t2, "method");
                n2 = a2 ? a2.toLowerCase() : "get";
                if (n2 === "get") {
                }
                i2 = ee(t2, "action");
              }
              e2.forEach(function(e3) {
                ht(t2, function(e4, t3) {
                  if (v(e4, Q.config.disableSelector)) {
                    p(e4);
                    return;
                  }
                  he(n2, i2, e4, t3);
                }, r2, e3, true);
              });
            }
          }
          function ut(e2, t2) {
            if (e2.type === "submit" || e2.type === "click") {
              if (t2.tagName === "FORM") {
                return true;
              }
              if (h(t2, 'input[type="submit"], button') && v(t2, "form") !== null) {
                return true;
              }
              if (t2.tagName === "A" && t2.href && (t2.getAttribute("href") === "#" || t2.getAttribute("href").indexOf("#") !== 0)) {
                return true;
              }
            }
            return false;
          }
          function ft(e2, t2) {
            return ae(e2).boosted && e2.tagName === "A" && t2.type === "click" && (t2.ctrlKey || t2.metaKey);
          }
          function ct(e2, t2, r2) {
            var n2 = e2.eventFilter;
            if (n2) {
              try {
                return n2.call(t2, r2) !== true;
              } catch (e3) {
                fe(re().body, "htmx:eventFilter:error", { error: e3, source: n2.source });
                return true;
              }
            }
            return false;
          }
          function ht(a2, o2, e2, s2, l2) {
            var u2 = ae(a2);
            var t2;
            if (s2.from) {
              t2 = Z(a2, s2.from);
            } else {
              t2 = [a2];
            }
            if (s2.changed) {
              t2.forEach(function(e3) {
                var t3 = ae(e3);
                t3.lastValue = e3.value;
              });
            }
            oe(t2, function(n2) {
              var i2 = function(e3) {
                if (!se(a2)) {
                  n2.removeEventListener(s2.trigger, i2);
                  return;
                }
                if (ft(a2, e3)) {
                  return;
                }
                if (l2 || ut(e3, a2)) {
                  e3.preventDefault();
                }
                if (ct(s2, a2, e3)) {
                  return;
                }
                var t3 = ae(e3);
                t3.triggerSpec = s2;
                if (t3.handledFor == null) {
                  t3.handledFor = [];
                }
                if (t3.handledFor.indexOf(a2) < 0) {
                  t3.handledFor.push(a2);
                  if (s2.consume) {
                    e3.stopPropagation();
                  }
                  if (s2.target && e3.target) {
                    if (!h(e3.target, s2.target)) {
                      return;
                    }
                  }
                  if (s2.once) {
                    if (u2.triggeredOnce) {
                      return;
                    } else {
                      u2.triggeredOnce = true;
                    }
                  }
                  if (s2.changed) {
                    var r2 = ae(n2);
                    if (r2.lastValue === n2.value) {
                      return;
                    }
                    r2.lastValue = n2.value;
                  }
                  if (u2.delayed) {
                    clearTimeout(u2.delayed);
                  }
                  if (u2.throttle) {
                    return;
                  }
                  if (s2.throttle > 0) {
                    if (!u2.throttle) {
                      o2(a2, e3);
                      u2.throttle = setTimeout(function() {
                        u2.throttle = null;
                      }, s2.throttle);
                    }
                  } else if (s2.delay > 0) {
                    u2.delayed = setTimeout(function() {
                      o2(a2, e3);
                    }, s2.delay);
                  } else {
                    ce(a2, "htmx:trigger");
                    o2(a2, e3);
                  }
                }
              };
              if (e2.listenerInfos == null) {
                e2.listenerInfos = [];
              }
              e2.listenerInfos.push({ trigger: s2.trigger, listener: i2, on: n2 });
              n2.addEventListener(s2.trigger, i2);
            });
          }
          var vt = false;
          var dt = null;
          function gt() {
            if (!dt) {
              dt = function() {
                vt = true;
              };
              window.addEventListener("scroll", dt);
              setInterval(function() {
                if (vt) {
                  vt = false;
                  oe(re().querySelectorAll("[hx-trigger='revealed'],[data-hx-trigger='revealed']"), function(e2) {
                    mt(e2);
                  });
                }
              }, 200);
            }
          }
          function mt(t2) {
            if (!o(t2, "data-hx-revealed") && X(t2)) {
              t2.setAttribute("data-hx-revealed", "true");
              var e2 = ae(t2);
              if (e2.initHash) {
                ce(t2, "revealed");
              } else {
                t2.addEventListener("htmx:afterProcessNode", function(e3) {
                  ce(t2, "revealed");
                }, { once: true });
              }
            }
          }
          function pt(e2, t2, r2) {
            var n2 = D(r2);
            for (var i2 = 0; i2 < n2.length; i2++) {
              var a2 = n2[i2].split(/:(.+)/);
              if (a2[0] === "connect") {
                xt(e2, a2[1], 0);
              }
              if (a2[0] === "send") {
                bt(e2);
              }
            }
          }
          function xt(s2, r2, n2) {
            if (!se(s2)) {
              return;
            }
            if (r2.indexOf("/") == 0) {
              var e2 = location.hostname + (location.port ? ":" + location.port : "");
              if (location.protocol == "https:") {
                r2 = "wss://" + e2 + r2;
              } else if (location.protocol == "http:") {
                r2 = "ws://" + e2 + r2;
              }
            }
            var t2 = Q.createWebSocket(r2);
            t2.onerror = function(e3) {
              fe(s2, "htmx:wsError", { error: e3, socket: t2 });
              yt(s2);
            };
            t2.onclose = function(e3) {
              if ([1006, 1012, 1013].indexOf(e3.code) >= 0) {
                var t3 = wt(n2);
                setTimeout(function() {
                  xt(s2, r2, n2 + 1);
                }, t3);
              }
            };
            t2.onopen = function(e3) {
              n2 = 0;
            };
            ae(s2).webSocket = t2;
            t2.addEventListener("message", function(e3) {
              if (yt(s2)) {
                return;
              }
              var t3 = e3.data;
              R(s2, function(e4) {
                t3 = e4.transformResponse(t3, null, s2);
              });
              var r3 = T(s2);
              var n3 = l(t3);
              var i2 = M(n3.children);
              for (var a2 = 0; a2 < i2.length; a2++) {
                var o2 = i2[a2];
                Ee(te(o2, "hx-swap-oob") || "true", o2, r3);
              }
              nr(r3.tasks);
            });
          }
          function yt(e2) {
            if (!se(e2)) {
              ae(e2).webSocket.close();
              return true;
            }
          }
          function bt(u2) {
            var f2 = c(u2, function(e2) {
              return ae(e2).webSocket != null;
            });
            if (f2) {
              u2.addEventListener(it(u2)[0].trigger, function(e2) {
                var t2 = ae(f2).webSocket;
                var r2 = xr(u2, f2);
                var n2 = dr(u2, "post");
                var i2 = n2.errors;
                var a2 = n2.values;
                var o2 = Hr(u2);
                var s2 = le(a2, o2);
                var l2 = yr(s2, u2);
                l2["HEADERS"] = r2;
                if (i2 && i2.length > 0) {
                  ce(u2, "htmx:validation:halted", i2);
                  return;
                }
                t2.send(JSON.stringify(l2));
                if (ut(e2, u2)) {
                  e2.preventDefault();
                }
              });
            } else {
              fe(u2, "htmx:noWebSocketSourceError");
            }
          }
          function wt(e2) {
            var t2 = Q.config.wsReconnectDelay;
            if (typeof t2 === "function") {
              return t2(e2);
            }
            if (t2 === "full-jitter") {
              var r2 = Math.min(e2, 6);
              var n2 = 1e3 * Math.pow(2, r2);
              return n2 * Math.random();
            }
            b('htmx.config.wsReconnectDelay must either be a function or the string "full-jitter"');
          }
          function St(e2, t2, r2) {
            var n2 = D(r2);
            for (var i2 = 0; i2 < n2.length; i2++) {
              var a2 = n2[i2].split(/:(.+)/);
              if (a2[0] === "connect") {
                Et(e2, a2[1]);
              }
              if (a2[0] === "swap") {
                Ct(e2, a2[1]);
              }
            }
          }
          function Et(t2, e2) {
            var r2 = Q.createEventSource(e2);
            r2.onerror = function(e3) {
              fe(t2, "htmx:sseError", { error: e3, source: r2 });
              Tt(t2);
            };
            ae(t2).sseEventSource = r2;
          }
          function Ct(a2, o2) {
            var s2 = c(a2, Ot);
            if (s2) {
              var l2 = ae(s2).sseEventSource;
              var u2 = function(e2) {
                if (Tt(s2)) {
                  return;
                }
                if (!se(a2)) {
                  l2.removeEventListener(o2, u2);
                  return;
                }
                var t2 = e2.data;
                R(a2, function(e3) {
                  t2 = e3.transformResponse(t2, null, a2);
                });
                var r2 = wr(a2);
                var n2 = ye(a2);
                var i2 = T(a2);
                je(r2.swapStyle, n2, a2, t2, i2);
                nr(i2.tasks);
                ce(a2, "htmx:sseMessage", e2);
              };
              ae(a2).sseListener = u2;
              l2.addEventListener(o2, u2);
            } else {
              fe(a2, "htmx:noSSESourceError");
            }
          }
          function Rt(e2, t2, r2) {
            var n2 = c(e2, Ot);
            if (n2) {
              var i2 = ae(n2).sseEventSource;
              var a2 = function() {
                if (!Tt(n2)) {
                  if (se(e2)) {
                    t2(e2);
                  } else {
                    i2.removeEventListener(r2, a2);
                  }
                }
              };
              ae(e2).sseListener = a2;
              i2.addEventListener(r2, a2);
            } else {
              fe(e2, "htmx:noSSESourceError");
            }
          }
          function Tt(e2) {
            if (!se(e2)) {
              ae(e2).sseEventSource.close();
              return true;
            }
          }
          function Ot(e2) {
            return ae(e2).sseEventSource != null;
          }
          function qt(e2, t2, r2, n2) {
            var i2 = function() {
              if (!r2.loaded) {
                r2.loaded = true;
                t2(e2);
              }
            };
            if (n2 > 0) {
              setTimeout(i2, n2);
            } else {
              i2();
            }
          }
          function Ht(t2, i2, e2) {
            var a2 = false;
            oe(w, function(r2) {
              if (o(t2, "hx-" + r2)) {
                var n2 = te(t2, "hx-" + r2);
                a2 = true;
                i2.path = n2;
                i2.verb = r2;
                e2.forEach(function(e3) {
                  Lt(t2, e3, i2, function(e4, t3) {
                    if (v(e4, Q.config.disableSelector)) {
                      p(e4);
                      return;
                    }
                    he(r2, n2, e4, t3);
                  });
                });
              }
            });
            return a2;
          }
          function Lt(n2, e2, t2, r2) {
            if (e2.sseEvent) {
              Rt(n2, r2, e2.sseEvent);
            } else if (e2.trigger === "revealed") {
              gt();
              ht(n2, r2, t2, e2);
              mt(n2);
            } else if (e2.trigger === "intersect") {
              var i2 = {};
              if (e2.root) {
                i2.root = ue(n2, e2.root);
              }
              if (e2.threshold) {
                i2.threshold = parseFloat(e2.threshold);
              }
              var a2 = new IntersectionObserver(function(e3) {
                for (var t3 = 0; t3 < e3.length; t3++) {
                  var r3 = e3[t3];
                  if (r3.isIntersecting) {
                    ce(n2, "intersect");
                    break;
                  }
                }
              }, i2);
              a2.observe(n2);
              ht(n2, r2, t2, e2);
            } else if (e2.trigger === "load") {
              if (!ct(e2, n2, Wt("load", { elt: n2 }))) {
                qt(n2, r2, t2, e2.delay);
              }
            } else if (e2.pollInterval > 0) {
              t2.polling = true;
              ot(n2, r2, e2);
            } else {
              ht(n2, r2, t2, e2);
            }
          }
          function At(e2) {
            if (Q.config.allowScriptTags && (e2.type === "text/javascript" || e2.type === "module" || e2.type === "")) {
              var t2 = re().createElement("script");
              oe(e2.attributes, function(e3) {
                t2.setAttribute(e3.name, e3.value);
              });
              t2.textContent = e2.textContent;
              t2.async = false;
              if (Q.config.inlineScriptNonce) {
                t2.nonce = Q.config.inlineScriptNonce;
              }
              var r2 = e2.parentElement;
              try {
                r2.insertBefore(t2, e2);
              } catch (e3) {
                b(e3);
              } finally {
                if (e2.parentElement) {
                  e2.parentElement.removeChild(e2);
                }
              }
            }
          }
          function Nt(e2) {
            if (h(e2, "script")) {
              At(e2);
            }
            oe(f(e2, "script"), function(e3) {
              At(e3);
            });
          }
          function It(e2) {
            var t2 = e2.attributes;
            for (var r2 = 0; r2 < t2.length; r2++) {
              var n2 = t2[r2].name;
              if (s(n2, "hx-on:") || s(n2, "data-hx-on:") || s(n2, "hx-on-") || s(n2, "data-hx-on-")) {
                return true;
              }
            }
            return false;
          }
          function kt(e2) {
            var t2 = null;
            var r2 = [];
            if (It(e2)) {
              r2.push(e2);
            }
            if (document.evaluate) {
              var n2 = document.evaluate('.//*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") or starts-with(name(), "hx-on-") or starts-with(name(), "data-hx-on-") ]]', e2);
              while (t2 = n2.iterateNext())
                r2.push(t2);
            } else {
              var i2 = e2.getElementsByTagName("*");
              for (var a2 = 0; a2 < i2.length; a2++) {
                if (It(i2[a2])) {
                  r2.push(i2[a2]);
                }
              }
            }
            return r2;
          }
          function Pt(e2) {
            if (e2.querySelectorAll) {
              var t2 = ", [hx-boost] a, [data-hx-boost] a, a[hx-boost], a[data-hx-boost]";
              var r2 = e2.querySelectorAll(i + t2 + ", form, [type='submit'], [hx-sse], [data-hx-sse], [hx-ws], [data-hx-ws], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger], [hx-on], [data-hx-on]");
              return r2;
            } else {
              return [];
            }
          }
          function Mt(e2) {
            var t2 = v(e2.target, "button, input[type='submit']");
            var r2 = Dt(e2);
            if (r2) {
              r2.lastButtonClicked = t2;
            }
          }
          function Xt(e2) {
            var t2 = Dt(e2);
            if (t2) {
              t2.lastButtonClicked = null;
            }
          }
          function Dt(e2) {
            var t2 = v(e2.target, "button, input[type='submit']");
            if (!t2) {
              return;
            }
            var r2 = g("#" + ee(t2, "form")) || v(t2, "form");
            if (!r2) {
              return;
            }
            return ae(r2);
          }
          function Ut(e2) {
            e2.addEventListener("click", Mt);
            e2.addEventListener("focusin", Mt);
            e2.addEventListener("focusout", Xt);
          }
          function Bt(e2) {
            var t2 = Ye(e2);
            var r2 = 0;
            for (var n2 = 0; n2 < t2.length; n2++) {
              const i2 = t2[n2];
              if (i2 === "{") {
                r2++;
              } else if (i2 === "}") {
                r2--;
              }
            }
            return r2;
          }
          function Ft(t2, e2, r2) {
            var n2 = ae(t2);
            if (!Array.isArray(n2.onHandlers)) {
              n2.onHandlers = [];
            }
            var i2;
            var a2 = function(e3) {
              return Tr(t2, function() {
                if (!i2) {
                  i2 = new Function("event", r2);
                }
                i2.call(t2, e3);
              });
            };
            t2.addEventListener(e2, a2);
            n2.onHandlers.push({ event: e2, listener: a2 });
          }
          function Vt(e2) {
            var t2 = te(e2, "hx-on");
            if (t2) {
              var r2 = {};
              var n2 = t2.split("\n");
              var i2 = null;
              var a2 = 0;
              while (n2.length > 0) {
                var o2 = n2.shift();
                var s2 = o2.match(/^\s*([a-zA-Z:\-\.]+:)(.*)/);
                if (a2 === 0 && s2) {
                  o2.split(":");
                  i2 = s2[1].slice(0, -1);
                  r2[i2] = s2[2];
                } else {
                  r2[i2] += o2;
                }
                a2 += Bt(o2);
              }
              for (var l2 in r2) {
                Ft(e2, l2, r2[l2]);
              }
            }
          }
          function jt(e2) {
            Ae(e2);
            for (var t2 = 0; t2 < e2.attributes.length; t2++) {
              var r2 = e2.attributes[t2].name;
              var n2 = e2.attributes[t2].value;
              if (s(r2, "hx-on") || s(r2, "data-hx-on")) {
                var i2 = r2.indexOf("-on") + 3;
                var a2 = r2.slice(i2, i2 + 1);
                if (a2 === "-" || a2 === ":") {
                  var o2 = r2.slice(i2 + 1);
                  if (s(o2, ":")) {
                    o2 = "htmx" + o2;
                  } else if (s(o2, "-")) {
                    o2 = "htmx:" + o2.slice(1);
                  } else if (s(o2, "htmx-")) {
                    o2 = "htmx:" + o2.slice(5);
                  }
                  Ft(e2, o2, n2);
                }
              }
            }
          }
          function _t(t2) {
            if (v(t2, Q.config.disableSelector)) {
              p(t2);
              return;
            }
            var r2 = ae(t2);
            if (r2.initHash !== Le(t2)) {
              Ne(t2);
              r2.initHash = Le(t2);
              Vt(t2);
              ce(t2, "htmx:beforeProcessNode");
              if (t2.value) {
                r2.lastValue = t2.value;
              }
              var e2 = it(t2);
              var n2 = Ht(t2, r2, e2);
              if (!n2) {
                if (ne(t2, "hx-boost") === "true") {
                  lt(t2, r2, e2);
                } else if (o(t2, "hx-trigger")) {
                  e2.forEach(function(e3) {
                    Lt(t2, e3, r2, function() {
                    });
                  });
                }
              }
              if (t2.tagName === "FORM" || ee(t2, "type") === "submit" && o(t2, "form")) {
                Ut(t2);
              }
              var i2 = te(t2, "hx-sse");
              if (i2) {
                St(t2, r2, i2);
              }
              var a2 = te(t2, "hx-ws");
              if (a2) {
                pt(t2, r2, a2);
              }
              ce(t2, "htmx:afterProcessNode");
            }
          }
          function zt(e2) {
            e2 = g(e2);
            if (v(e2, Q.config.disableSelector)) {
              p(e2);
              return;
            }
            _t(e2);
            oe(Pt(e2), function(e3) {
              _t(e3);
            });
            oe(kt(e2), jt);
          }
          function $t(e2) {
            return e2.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
          }
          function Wt(e2, t2) {
            var r2;
            if (window.CustomEvent && typeof window.CustomEvent === "function") {
              r2 = new CustomEvent(e2, { bubbles: true, cancelable: true, detail: t2 });
            } else {
              r2 = re().createEvent("CustomEvent");
              r2.initCustomEvent(e2, true, true, t2);
            }
            return r2;
          }
          function fe(e2, t2, r2) {
            ce(e2, t2, le({ error: t2 }, r2));
          }
          function Gt(e2) {
            return e2 === "htmx:afterProcessNode";
          }
          function R(e2, t2) {
            oe(Fr(e2), function(e3) {
              try {
                t2(e3);
              } catch (e4) {
                b(e4);
              }
            });
          }
          function b(e2) {
            if (console.error) {
              console.error(e2);
            } else if (console.log) {
              console.log("ERROR: ", e2);
            }
          }
          function ce(e2, t2, r2) {
            e2 = g(e2);
            if (r2 == null) {
              r2 = {};
            }
            r2["elt"] = e2;
            var n2 = Wt(t2, r2);
            if (Q.logger && !Gt(t2)) {
              Q.logger(e2, t2, r2);
            }
            if (r2.error) {
              b(r2.error);
              ce(e2, "htmx:error", { errorInfo: r2 });
            }
            var i2 = e2.dispatchEvent(n2);
            var a2 = $t(t2);
            if (i2 && a2 !== t2) {
              var o2 = Wt(a2, n2.detail);
              i2 = i2 && e2.dispatchEvent(o2);
            }
            R(e2, function(e3) {
              i2 = i2 && (e3.onEvent(t2, n2) !== false && !n2.defaultPrevented);
            });
            return i2;
          }
          var Jt = location.pathname + location.search;
          function Zt() {
            var e2 = re().querySelector("[hx-history-elt],[data-hx-history-elt]");
            return e2 || re().body;
          }
          function Kt(e2, t2, r2, n2) {
            if (!U()) {
              return;
            }
            if (Q.config.historyCacheSize <= 0) {
              localStorage.removeItem("htmx-history-cache");
              return;
            }
            e2 = B(e2);
            var i2 = E(localStorage.getItem("htmx-history-cache")) || [];
            for (var a2 = 0; a2 < i2.length; a2++) {
              if (i2[a2].url === e2) {
                i2.splice(a2, 1);
                break;
              }
            }
            var o2 = { url: e2, content: t2, title: r2, scroll: n2 };
            ce(re().body, "htmx:historyItemCreated", { item: o2, cache: i2 });
            i2.push(o2);
            while (i2.length > Q.config.historyCacheSize) {
              i2.shift();
            }
            while (i2.length > 0) {
              try {
                localStorage.setItem("htmx-history-cache", JSON.stringify(i2));
                break;
              } catch (e3) {
                fe(re().body, "htmx:historyCacheError", { cause: e3, cache: i2 });
                i2.shift();
              }
            }
          }
          function Yt(e2) {
            if (!U()) {
              return null;
            }
            e2 = B(e2);
            var t2 = E(localStorage.getItem("htmx-history-cache")) || [];
            for (var r2 = 0; r2 < t2.length; r2++) {
              if (t2[r2].url === e2) {
                return t2[r2];
              }
            }
            return null;
          }
          function Qt(e2) {
            var t2 = Q.config.requestClass;
            var r2 = e2.cloneNode(true);
            oe(f(r2, "." + t2), function(e3) {
              n(e3, t2);
            });
            return r2.innerHTML;
          }
          function er() {
            var e2 = Zt();
            var t2 = Jt || location.pathname + location.search;
            var r2;
            try {
              r2 = re().querySelector('[hx-history="false" i],[data-hx-history="false" i]');
            } catch (e3) {
              r2 = re().querySelector('[hx-history="false"],[data-hx-history="false"]');
            }
            if (!r2) {
              ce(re().body, "htmx:beforeHistorySave", { path: t2, historyElt: e2 });
              Kt(t2, Qt(e2), re().title, window.scrollY);
            }
            if (Q.config.historyEnabled)
              history.replaceState({ htmx: true }, re().title, window.location.href);
          }
          function tr(e2) {
            if (Q.config.getCacheBusterParam) {
              e2 = e2.replace(/org\.htmx\.cache-buster=[^&]*&?/, "");
              if (G(e2, "&") || G(e2, "?")) {
                e2 = e2.slice(0, -1);
              }
            }
            if (Q.config.historyEnabled) {
              history.pushState({ htmx: true }, "", e2);
            }
            Jt = e2;
          }
          function rr(e2) {
            if (Q.config.historyEnabled)
              history.replaceState({ htmx: true }, "", e2);
            Jt = e2;
          }
          function nr(e2) {
            oe(e2, function(e3) {
              e3.call();
            });
          }
          function ir(a2) {
            var e2 = new XMLHttpRequest();
            var o2 = { path: a2, xhr: e2 };
            ce(re().body, "htmx:historyCacheMiss", o2);
            e2.open("GET", a2, true);
            e2.setRequestHeader("HX-Request", "true");
            e2.setRequestHeader("HX-History-Restore-Request", "true");
            e2.setRequestHeader("HX-Current-URL", re().location.href);
            e2.onload = function() {
              if (this.status >= 200 && this.status < 400) {
                ce(re().body, "htmx:historyCacheMissLoad", o2);
                var e3 = l(this.response);
                e3 = e3.querySelector("[hx-history-elt],[data-hx-history-elt]") || e3;
                var t2 = Zt();
                var r2 = T(t2);
                var n2 = Ve(this.response);
                if (n2) {
                  var i2 = C("title");
                  if (i2) {
                    i2.innerHTML = n2;
                  } else {
                    window.document.title = n2;
                  }
                }
                Ue(t2, e3, r2);
                nr(r2.tasks);
                Jt = a2;
                ce(re().body, "htmx:historyRestore", { path: a2, cacheMiss: true, serverResponse: this.response });
              } else {
                fe(re().body, "htmx:historyCacheMissLoadError", o2);
              }
            };
            e2.send();
          }
          function ar(e2) {
            er();
            e2 = e2 || location.pathname + location.search;
            var t2 = Yt(e2);
            if (t2) {
              var r2 = l(t2.content);
              var n2 = Zt();
              var i2 = T(n2);
              Ue(n2, r2, i2);
              nr(i2.tasks);
              document.title = t2.title;
              setTimeout(function() {
                window.scrollTo(0, t2.scroll);
              }, 0);
              Jt = e2;
              ce(re().body, "htmx:historyRestore", { path: e2, item: t2 });
            } else {
              if (Q.config.refreshOnHistoryMiss) {
                window.location.reload(true);
              } else {
                ir(e2);
              }
            }
          }
          function or(e2) {
            var t2 = pe(e2, "hx-indicator");
            if (t2 == null) {
              t2 = [e2];
            }
            oe(t2, function(e3) {
              var t3 = ae(e3);
              t3.requestCount = (t3.requestCount || 0) + 1;
              e3.classList["add"].call(e3.classList, Q.config.requestClass);
            });
            return t2;
          }
          function sr(e2) {
            var t2 = pe(e2, "hx-disabled-elt");
            if (t2 == null) {
              t2 = [];
            }
            oe(t2, function(e3) {
              var t3 = ae(e3);
              t3.requestCount = (t3.requestCount || 0) + 1;
              e3.setAttribute("disabled", "");
            });
            return t2;
          }
          function lr(e2, t2) {
            oe(e2, function(e3) {
              var t3 = ae(e3);
              t3.requestCount = (t3.requestCount || 0) - 1;
              if (t3.requestCount === 0) {
                e3.classList["remove"].call(e3.classList, Q.config.requestClass);
              }
            });
            oe(t2, function(e3) {
              var t3 = ae(e3);
              t3.requestCount = (t3.requestCount || 0) - 1;
              if (t3.requestCount === 0) {
                e3.removeAttribute("disabled");
              }
            });
          }
          function ur(e2, t2) {
            for (var r2 = 0; r2 < e2.length; r2++) {
              var n2 = e2[r2];
              if (n2.isSameNode(t2)) {
                return true;
              }
            }
            return false;
          }
          function fr(e2) {
            if (e2.name === "" || e2.name == null || e2.disabled || v(e2, "fieldset[disabled]")) {
              return false;
            }
            if (e2.type === "button" || e2.type === "submit" || e2.tagName === "image" || e2.tagName === "reset" || e2.tagName === "file") {
              return false;
            }
            if (e2.type === "checkbox" || e2.type === "radio") {
              return e2.checked;
            }
            return true;
          }
          function cr(e2, t2, r2) {
            if (e2 != null && t2 != null) {
              var n2 = r2[e2];
              if (n2 === void 0) {
                r2[e2] = t2;
              } else if (Array.isArray(n2)) {
                if (Array.isArray(t2)) {
                  r2[e2] = n2.concat(t2);
                } else {
                  n2.push(t2);
                }
              } else {
                if (Array.isArray(t2)) {
                  r2[e2] = [n2].concat(t2);
                } else {
                  r2[e2] = [n2, t2];
                }
              }
            }
          }
          function hr(t2, r2, n2, e2, i2) {
            if (e2 == null || ur(t2, e2)) {
              return;
            } else {
              t2.push(e2);
            }
            if (fr(e2)) {
              var a2 = ee(e2, "name");
              var o2 = e2.value;
              if (e2.multiple && e2.tagName === "SELECT") {
                o2 = M(e2.querySelectorAll("option:checked")).map(function(e3) {
                  return e3.value;
                });
              }
              if (e2.files) {
                o2 = M(e2.files);
              }
              cr(a2, o2, r2);
              if (i2) {
                vr(e2, n2);
              }
            }
            if (h(e2, "form")) {
              var s2 = e2.elements;
              oe(s2, function(e3) {
                hr(t2, r2, n2, e3, i2);
              });
            }
          }
          function vr(e2, t2) {
            if (e2.willValidate) {
              ce(e2, "htmx:validation:validate");
              if (!e2.checkValidity()) {
                t2.push({ elt: e2, message: e2.validationMessage, validity: e2.validity });
                ce(e2, "htmx:validation:failed", { message: e2.validationMessage, validity: e2.validity });
              }
            }
          }
          function dr(e2, t2) {
            var r2 = [];
            var n2 = {};
            var i2 = {};
            var a2 = [];
            var o2 = ae(e2);
            if (o2.lastButtonClicked && !se(o2.lastButtonClicked)) {
              o2.lastButtonClicked = null;
            }
            var s2 = h(e2, "form") && e2.noValidate !== true || te(e2, "hx-validate") === "true";
            if (o2.lastButtonClicked) {
              s2 = s2 && o2.lastButtonClicked.formNoValidate !== true;
            }
            if (t2 !== "get") {
              hr(r2, i2, a2, v(e2, "form"), s2);
            }
            hr(r2, n2, a2, e2, s2);
            if (o2.lastButtonClicked || e2.tagName === "BUTTON" || e2.tagName === "INPUT" && ee(e2, "type") === "submit") {
              var l2 = o2.lastButtonClicked || e2;
              var u2 = ee(l2, "name");
              cr(u2, l2.value, i2);
            }
            var f2 = pe(e2, "hx-include");
            oe(f2, function(e3) {
              hr(r2, n2, a2, e3, s2);
              if (!h(e3, "form")) {
                oe(e3.querySelectorAll(rt), function(e4) {
                  hr(r2, n2, a2, e4, s2);
                });
              }
            });
            n2 = le(n2, i2);
            return { errors: a2, values: n2 };
          }
          function gr(e2, t2, r2) {
            if (e2 !== "") {
              e2 += "&";
            }
            if (String(r2) === "[object Object]") {
              r2 = JSON.stringify(r2);
            }
            var n2 = encodeURIComponent(r2);
            e2 += encodeURIComponent(t2) + "=" + n2;
            return e2;
          }
          function mr(e2) {
            var t2 = "";
            for (var r2 in e2) {
              if (e2.hasOwnProperty(r2)) {
                var n2 = e2[r2];
                if (Array.isArray(n2)) {
                  oe(n2, function(e3) {
                    t2 = gr(t2, r2, e3);
                  });
                } else {
                  t2 = gr(t2, r2, n2);
                }
              }
            }
            return t2;
          }
          function pr(e2) {
            var t2 = new FormData();
            for (var r2 in e2) {
              if (e2.hasOwnProperty(r2)) {
                var n2 = e2[r2];
                if (Array.isArray(n2)) {
                  oe(n2, function(e3) {
                    t2.append(r2, e3);
                  });
                } else {
                  t2.append(r2, n2);
                }
              }
            }
            return t2;
          }
          function xr(e2, t2, r2) {
            var n2 = { "HX-Request": "true", "HX-Trigger": ee(e2, "id"), "HX-Trigger-Name": ee(e2, "name"), "HX-Target": te(t2, "id"), "HX-Current-URL": re().location.href };
            Rr(e2, "hx-headers", false, n2);
            if (r2 !== void 0) {
              n2["HX-Prompt"] = r2;
            }
            if (ae(e2).boosted) {
              n2["HX-Boosted"] = "true";
            }
            return n2;
          }
          function yr(t2, e2) {
            var r2 = ne(e2, "hx-params");
            if (r2) {
              if (r2 === "none") {
                return {};
              } else if (r2 === "*") {
                return t2;
              } else if (r2.indexOf("not ") === 0) {
                oe(r2.substr(4).split(","), function(e3) {
                  e3 = e3.trim();
                  delete t2[e3];
                });
                return t2;
              } else {
                var n2 = {};
                oe(r2.split(","), function(e3) {
                  e3 = e3.trim();
                  n2[e3] = t2[e3];
                });
                return n2;
              }
            } else {
              return t2;
            }
          }
          function br(e2) {
            return ee(e2, "href") && ee(e2, "href").indexOf("#") >= 0;
          }
          function wr(e2, t2) {
            var r2 = t2 ? t2 : ne(e2, "hx-swap");
            var n2 = { swapStyle: ae(e2).boosted ? "innerHTML" : Q.config.defaultSwapStyle, swapDelay: Q.config.defaultSwapDelay, settleDelay: Q.config.defaultSettleDelay };
            if (Q.config.scrollIntoViewOnBoost && ae(e2).boosted && !br(e2)) {
              n2["show"] = "top";
            }
            if (r2) {
              var i2 = D(r2);
              if (i2.length > 0) {
                for (var a2 = 0; a2 < i2.length; a2++) {
                  var o2 = i2[a2];
                  if (o2.indexOf("swap:") === 0) {
                    n2["swapDelay"] = d(o2.substr(5));
                  } else if (o2.indexOf("settle:") === 0) {
                    n2["settleDelay"] = d(o2.substr(7));
                  } else if (o2.indexOf("transition:") === 0) {
                    n2["transition"] = o2.substr(11) === "true";
                  } else if (o2.indexOf("ignoreTitle:") === 0) {
                    n2["ignoreTitle"] = o2.substr(12) === "true";
                  } else if (o2.indexOf("scroll:") === 0) {
                    var s2 = o2.substr(7);
                    var l2 = s2.split(":");
                    var u2 = l2.pop();
                    var f2 = l2.length > 0 ? l2.join(":") : null;
                    n2["scroll"] = u2;
                    n2["scrollTarget"] = f2;
                  } else if (o2.indexOf("show:") === 0) {
                    var c2 = o2.substr(5);
                    var l2 = c2.split(":");
                    var h2 = l2.pop();
                    var f2 = l2.length > 0 ? l2.join(":") : null;
                    n2["show"] = h2;
                    n2["showTarget"] = f2;
                  } else if (o2.indexOf("focus-scroll:") === 0) {
                    var v2 = o2.substr("focus-scroll:".length);
                    n2["focusScroll"] = v2 == "true";
                  } else if (a2 == 0) {
                    n2["swapStyle"] = o2;
                  } else {
                    b("Unknown modifier in hx-swap: " + o2);
                  }
                }
              }
            }
            return n2;
          }
          function Sr(e2) {
            return ne(e2, "hx-encoding") === "multipart/form-data" || h(e2, "form") && ee(e2, "enctype") === "multipart/form-data";
          }
          function Er(t2, r2, n2) {
            var i2 = null;
            R(r2, function(e2) {
              if (i2 == null) {
                i2 = e2.encodeParameters(t2, n2, r2);
              }
            });
            if (i2 != null) {
              return i2;
            } else {
              if (Sr(r2)) {
                return pr(n2);
              } else {
                return mr(n2);
              }
            }
          }
          function T(e2) {
            return { tasks: [], elts: [e2] };
          }
          function Cr(e2, t2) {
            var r2 = e2[0];
            var n2 = e2[e2.length - 1];
            if (t2.scroll) {
              var i2 = null;
              if (t2.scrollTarget) {
                i2 = ue(r2, t2.scrollTarget);
              }
              if (t2.scroll === "top" && (r2 || i2)) {
                i2 = i2 || r2;
                i2.scrollTop = 0;
              }
              if (t2.scroll === "bottom" && (n2 || i2)) {
                i2 = i2 || n2;
                i2.scrollTop = i2.scrollHeight;
              }
            }
            if (t2.show) {
              var i2 = null;
              if (t2.showTarget) {
                var a2 = t2.showTarget;
                if (t2.showTarget === "window") {
                  a2 = "body";
                }
                i2 = ue(r2, a2);
              }
              if (t2.show === "top" && (r2 || i2)) {
                i2 = i2 || r2;
                i2.scrollIntoView({ block: "start", behavior: Q.config.scrollBehavior });
              }
              if (t2.show === "bottom" && (n2 || i2)) {
                i2 = i2 || n2;
                i2.scrollIntoView({ block: "end", behavior: Q.config.scrollBehavior });
              }
            }
          }
          function Rr(e2, t2, r2, n2) {
            if (n2 == null) {
              n2 = {};
            }
            if (e2 == null) {
              return n2;
            }
            var i2 = te(e2, t2);
            if (i2) {
              var a2 = i2.trim();
              var o2 = r2;
              if (a2 === "unset") {
                return null;
              }
              if (a2.indexOf("javascript:") === 0) {
                a2 = a2.substr(11);
                o2 = true;
              } else if (a2.indexOf("js:") === 0) {
                a2 = a2.substr(3);
                o2 = true;
              }
              if (a2.indexOf("{") !== 0) {
                a2 = "{" + a2 + "}";
              }
              var s2;
              if (o2) {
                s2 = Tr(e2, function() {
                  return Function("return (" + a2 + ")")();
                }, {});
              } else {
                s2 = E(a2);
              }
              for (var l2 in s2) {
                if (s2.hasOwnProperty(l2)) {
                  if (n2[l2] == null) {
                    n2[l2] = s2[l2];
                  }
                }
              }
            }
            return Rr(u(e2), t2, r2, n2);
          }
          function Tr(e2, t2, r2) {
            if (Q.config.allowEval) {
              return t2();
            } else {
              fe(e2, "htmx:evalDisallowedError");
              return r2;
            }
          }
          function Or(e2, t2) {
            return Rr(e2, "hx-vars", true, t2);
          }
          function qr(e2, t2) {
            return Rr(e2, "hx-vals", false, t2);
          }
          function Hr(e2) {
            return le(Or(e2), qr(e2));
          }
          function Lr(t2, r2, n2) {
            if (n2 !== null) {
              try {
                t2.setRequestHeader(r2, n2);
              } catch (e2) {
                t2.setRequestHeader(r2, encodeURIComponent(n2));
                t2.setRequestHeader(r2 + "-URI-AutoEncoded", "true");
              }
            }
          }
          function Ar(t2) {
            if (t2.responseURL && typeof URL !== "undefined") {
              try {
                var e2 = new URL(t2.responseURL);
                return e2.pathname + e2.search;
              } catch (e3) {
                fe(re().body, "htmx:badResponseUrl", { url: t2.responseURL });
              }
            }
          }
          function O(e2, t2) {
            return t2.test(e2.getAllResponseHeaders());
          }
          function Nr(e2, t2, r2) {
            e2 = e2.toLowerCase();
            if (r2) {
              if (r2 instanceof Element || I(r2, "String")) {
                return he(e2, t2, null, null, { targetOverride: g(r2), returnPromise: true });
              } else {
                return he(e2, t2, g(r2.source), r2.event, { handler: r2.handler, headers: r2.headers, values: r2.values, targetOverride: g(r2.target), swapOverride: r2.swap, select: r2.select, returnPromise: true });
              }
            } else {
              return he(e2, t2, null, null, { returnPromise: true });
            }
          }
          function Ir(e2) {
            var t2 = [];
            while (e2) {
              t2.push(e2);
              e2 = e2.parentElement;
            }
            return t2;
          }
          function kr(e2, t2, r2) {
            var n2;
            var i2;
            if (typeof URL === "function") {
              i2 = new URL(t2, document.location.href);
              var a2 = document.location.origin;
              n2 = a2 === i2.origin;
            } else {
              i2 = t2;
              n2 = s(t2, document.location.origin);
            }
            if (Q.config.selfRequestsOnly) {
              if (!n2) {
                return false;
              }
            }
            return ce(e2, "htmx:validateUrl", le({ url: i2, sameHost: n2 }, r2));
          }
          function he(t2, r2, n2, i2, a2, e2) {
            var o2 = null;
            var s2 = null;
            a2 = a2 != null ? a2 : {};
            if (a2.returnPromise && typeof Promise !== "undefined") {
              var l2 = new Promise(function(e3, t3) {
                o2 = e3;
                s2 = t3;
              });
            }
            if (n2 == null) {
              n2 = re().body;
            }
            var M2 = a2.handler || Mr;
            var X2 = a2.select || null;
            if (!se(n2)) {
              ie(o2);
              return l2;
            }
            var u2 = a2.targetOverride || ye(n2);
            if (u2 == null || u2 == me) {
              fe(n2, "htmx:targetError", { target: te(n2, "hx-target") });
              ie(s2);
              return l2;
            }
            var f2 = ae(n2);
            var c2 = f2.lastButtonClicked;
            if (c2) {
              var h2 = ee(c2, "formaction");
              if (h2 != null) {
                r2 = h2;
              }
              var v2 = ee(c2, "formmethod");
              if (v2 != null) {
                if (v2.toLowerCase() !== "dialog") {
                  t2 = v2;
                }
              }
            }
            var d2 = ne(n2, "hx-confirm");
            if (e2 === void 0) {
              var D2 = function(e3) {
                return he(t2, r2, n2, i2, a2, !!e3);
              };
              var U2 = { target: u2, elt: n2, path: r2, verb: t2, triggeringEvent: i2, etc: a2, issueRequest: D2, question: d2 };
              if (ce(n2, "htmx:confirm", U2) === false) {
                ie(o2);
                return l2;
              }
            }
            var g2 = n2;
            var m2 = ne(n2, "hx-sync");
            var p2 = null;
            var x2 = false;
            if (m2) {
              var B2 = m2.split(":");
              var F2 = B2[0].trim();
              if (F2 === "this") {
                g2 = xe(n2, "hx-sync");
              } else {
                g2 = ue(n2, F2);
              }
              m2 = (B2[1] || "drop").trim();
              f2 = ae(g2);
              if (m2 === "drop" && f2.xhr && f2.abortable !== true) {
                ie(o2);
                return l2;
              } else if (m2 === "abort") {
                if (f2.xhr) {
                  ie(o2);
                  return l2;
                } else {
                  x2 = true;
                }
              } else if (m2 === "replace") {
                ce(g2, "htmx:abort");
              } else if (m2.indexOf("queue") === 0) {
                var V2 = m2.split(" ");
                p2 = (V2[1] || "last").trim();
              }
            }
            if (f2.xhr) {
              if (f2.abortable) {
                ce(g2, "htmx:abort");
              } else {
                if (p2 == null) {
                  if (i2) {
                    var y2 = ae(i2);
                    if (y2 && y2.triggerSpec && y2.triggerSpec.queue) {
                      p2 = y2.triggerSpec.queue;
                    }
                  }
                  if (p2 == null) {
                    p2 = "last";
                  }
                }
                if (f2.queuedRequests == null) {
                  f2.queuedRequests = [];
                }
                if (p2 === "first" && f2.queuedRequests.length === 0) {
                  f2.queuedRequests.push(function() {
                    he(t2, r2, n2, i2, a2);
                  });
                } else if (p2 === "all") {
                  f2.queuedRequests.push(function() {
                    he(t2, r2, n2, i2, a2);
                  });
                } else if (p2 === "last") {
                  f2.queuedRequests = [];
                  f2.queuedRequests.push(function() {
                    he(t2, r2, n2, i2, a2);
                  });
                }
                ie(o2);
                return l2;
              }
            }
            var b2 = new XMLHttpRequest();
            f2.xhr = b2;
            f2.abortable = x2;
            var w2 = function() {
              f2.xhr = null;
              f2.abortable = false;
              if (f2.queuedRequests != null && f2.queuedRequests.length > 0) {
                var e3 = f2.queuedRequests.shift();
                e3();
              }
            };
            var j2 = ne(n2, "hx-prompt");
            if (j2) {
              var S2 = prompt(j2);
              if (S2 === null || !ce(n2, "htmx:prompt", { prompt: S2, target: u2 })) {
                ie(o2);
                w2();
                return l2;
              }
            }
            if (d2 && !e2) {
              if (!confirm(d2)) {
                ie(o2);
                w2();
                return l2;
              }
            }
            var E2 = xr(n2, u2, S2);
            if (t2 !== "get" && !Sr(n2)) {
              E2["Content-Type"] = "application/x-www-form-urlencoded";
            }
            if (a2.headers) {
              E2 = le(E2, a2.headers);
            }
            var _2 = dr(n2, t2);
            var C2 = _2.errors;
            var R2 = _2.values;
            if (a2.values) {
              R2 = le(R2, a2.values);
            }
            var z2 = Hr(n2);
            var $2 = le(R2, z2);
            var T2 = yr($2, n2);
            if (Q.config.getCacheBusterParam && t2 === "get") {
              T2["org.htmx.cache-buster"] = ee(u2, "id") || "true";
            }
            if (r2 == null || r2 === "") {
              r2 = re().location.href;
            }
            var O2 = Rr(n2, "hx-request");
            var W2 = ae(n2).boosted;
            var q2 = Q.config.methodsThatUseUrlParams.indexOf(t2) >= 0;
            var H2 = { boosted: W2, useUrlParams: q2, parameters: T2, unfilteredParameters: $2, headers: E2, target: u2, verb: t2, errors: C2, withCredentials: a2.credentials || O2.credentials || Q.config.withCredentials, timeout: a2.timeout || O2.timeout || Q.config.timeout, path: r2, triggeringEvent: i2 };
            if (!ce(n2, "htmx:configRequest", H2)) {
              ie(o2);
              w2();
              return l2;
            }
            r2 = H2.path;
            t2 = H2.verb;
            E2 = H2.headers;
            T2 = H2.parameters;
            C2 = H2.errors;
            q2 = H2.useUrlParams;
            if (C2 && C2.length > 0) {
              ce(n2, "htmx:validation:halted", H2);
              ie(o2);
              w2();
              return l2;
            }
            var G2 = r2.split("#");
            var J2 = G2[0];
            var L2 = G2[1];
            var A2 = r2;
            if (q2) {
              A2 = J2;
              var Z2 = Object.keys(T2).length !== 0;
              if (Z2) {
                if (A2.indexOf("?") < 0) {
                  A2 += "?";
                } else {
                  A2 += "&";
                }
                A2 += mr(T2);
                if (L2) {
                  A2 += "#" + L2;
                }
              }
            }
            if (!kr(n2, A2, H2)) {
              fe(n2, "htmx:invalidPath", H2);
              ie(s2);
              return l2;
            }
            b2.open(t2.toUpperCase(), A2, true);
            b2.overrideMimeType("text/html");
            b2.withCredentials = H2.withCredentials;
            b2.timeout = H2.timeout;
            if (O2.noHeaders) {
            } else {
              for (var N2 in E2) {
                if (E2.hasOwnProperty(N2)) {
                  var K2 = E2[N2];
                  Lr(b2, N2, K2);
                }
              }
            }
            var I2 = { xhr: b2, target: u2, requestConfig: H2, etc: a2, boosted: W2, select: X2, pathInfo: { requestPath: r2, finalRequestPath: A2, anchor: L2 } };
            b2.onload = function() {
              try {
                var e3 = Ir(n2);
                I2.pathInfo.responsePath = Ar(b2);
                M2(n2, I2);
                lr(k2, P2);
                ce(n2, "htmx:afterRequest", I2);
                ce(n2, "htmx:afterOnLoad", I2);
                if (!se(n2)) {
                  var t3 = null;
                  while (e3.length > 0 && t3 == null) {
                    var r3 = e3.shift();
                    if (se(r3)) {
                      t3 = r3;
                    }
                  }
                  if (t3) {
                    ce(t3, "htmx:afterRequest", I2);
                    ce(t3, "htmx:afterOnLoad", I2);
                  }
                }
                ie(o2);
                w2();
              } catch (e4) {
                fe(n2, "htmx:onLoadError", le({ error: e4 }, I2));
                throw e4;
              }
            };
            b2.onerror = function() {
              lr(k2, P2);
              fe(n2, "htmx:afterRequest", I2);
              fe(n2, "htmx:sendError", I2);
              ie(s2);
              w2();
            };
            b2.onabort = function() {
              lr(k2, P2);
              fe(n2, "htmx:afterRequest", I2);
              fe(n2, "htmx:sendAbort", I2);
              ie(s2);
              w2();
            };
            b2.ontimeout = function() {
              lr(k2, P2);
              fe(n2, "htmx:afterRequest", I2);
              fe(n2, "htmx:timeout", I2);
              ie(s2);
              w2();
            };
            if (!ce(n2, "htmx:beforeRequest", I2)) {
              ie(o2);
              w2();
              return l2;
            }
            var k2 = or(n2);
            var P2 = sr(n2);
            oe(["loadstart", "loadend", "progress", "abort"], function(t3) {
              oe([b2, b2.upload], function(e3) {
                e3.addEventListener(t3, function(e4) {
                  ce(n2, "htmx:xhr:" + t3, { lengthComputable: e4.lengthComputable, loaded: e4.loaded, total: e4.total });
                });
              });
            });
            ce(n2, "htmx:beforeSend", I2);
            var Y2 = q2 ? null : Er(b2, n2, T2);
            b2.send(Y2);
            return l2;
          }
          function Pr(e2, t2) {
            var r2 = t2.xhr;
            var n2 = null;
            var i2 = null;
            if (O(r2, /HX-Push:/i)) {
              n2 = r2.getResponseHeader("HX-Push");
              i2 = "push";
            } else if (O(r2, /HX-Push-Url:/i)) {
              n2 = r2.getResponseHeader("HX-Push-Url");
              i2 = "push";
            } else if (O(r2, /HX-Replace-Url:/i)) {
              n2 = r2.getResponseHeader("HX-Replace-Url");
              i2 = "replace";
            }
            if (n2) {
              if (n2 === "false") {
                return {};
              } else {
                return { type: i2, path: n2 };
              }
            }
            var a2 = t2.pathInfo.finalRequestPath;
            var o2 = t2.pathInfo.responsePath;
            var s2 = ne(e2, "hx-push-url");
            var l2 = ne(e2, "hx-replace-url");
            var u2 = ae(e2).boosted;
            var f2 = null;
            var c2 = null;
            if (s2) {
              f2 = "push";
              c2 = s2;
            } else if (l2) {
              f2 = "replace";
              c2 = l2;
            } else if (u2) {
              f2 = "push";
              c2 = o2 || a2;
            }
            if (c2) {
              if (c2 === "false") {
                return {};
              }
              if (c2 === "true") {
                c2 = o2 || a2;
              }
              if (t2.pathInfo.anchor && c2.indexOf("#") === -1) {
                c2 = c2 + "#" + t2.pathInfo.anchor;
              }
              return { type: f2, path: c2 };
            } else {
              return {};
            }
          }
          function Mr(l2, u2) {
            var f2 = u2.xhr;
            var c2 = u2.target;
            var e2 = u2.etc;
            var t2 = u2.requestConfig;
            var h2 = u2.select;
            if (!ce(l2, "htmx:beforeOnLoad", u2))
              return;
            if (O(f2, /HX-Trigger:/i)) {
              _e(f2, "HX-Trigger", l2);
            }
            if (O(f2, /HX-Location:/i)) {
              er();
              var r2 = f2.getResponseHeader("HX-Location");
              var v2;
              if (r2.indexOf("{") === 0) {
                v2 = E(r2);
                r2 = v2["path"];
                delete v2["path"];
              }
              Nr("GET", r2, v2).then(function() {
                tr(r2);
              });
              return;
            }
            var n2 = O(f2, /HX-Refresh:/i) && "true" === f2.getResponseHeader("HX-Refresh");
            if (O(f2, /HX-Redirect:/i)) {
              location.href = f2.getResponseHeader("HX-Redirect");
              n2 && location.reload();
              return;
            }
            if (n2) {
              location.reload();
              return;
            }
            if (O(f2, /HX-Retarget:/i)) {
              if (f2.getResponseHeader("HX-Retarget") === "this") {
                u2.target = l2;
              } else {
                u2.target = ue(l2, f2.getResponseHeader("HX-Retarget"));
              }
            }
            var d2 = Pr(l2, u2);
            var i2 = f2.status >= 200 && f2.status < 400 && f2.status !== 204;
            var g2 = f2.response;
            var a2 = f2.status >= 400;
            var m2 = Q.config.ignoreTitle;
            var o2 = le({ shouldSwap: i2, serverResponse: g2, isError: a2, ignoreTitle: m2 }, u2);
            if (!ce(c2, "htmx:beforeSwap", o2))
              return;
            c2 = o2.target;
            g2 = o2.serverResponse;
            a2 = o2.isError;
            m2 = o2.ignoreTitle;
            u2.target = c2;
            u2.failed = a2;
            u2.successful = !a2;
            if (o2.shouldSwap) {
              if (f2.status === 286) {
                at(l2);
              }
              R(l2, function(e3) {
                g2 = e3.transformResponse(g2, f2, l2);
              });
              if (d2.type) {
                er();
              }
              var s2 = e2.swapOverride;
              if (O(f2, /HX-Reswap:/i)) {
                s2 = f2.getResponseHeader("HX-Reswap");
              }
              var v2 = wr(l2, s2);
              if (v2.hasOwnProperty("ignoreTitle")) {
                m2 = v2.ignoreTitle;
              }
              c2.classList.add(Q.config.swappingClass);
              var p2 = null;
              var x2 = null;
              var y2 = function() {
                try {
                  var e3 = document.activeElement;
                  var t3 = {};
                  try {
                    t3 = { elt: e3, start: e3 ? e3.selectionStart : null, end: e3 ? e3.selectionEnd : null };
                  } catch (e4) {
                  }
                  var r3;
                  if (h2) {
                    r3 = h2;
                  }
                  if (O(f2, /HX-Reselect:/i)) {
                    r3 = f2.getResponseHeader("HX-Reselect");
                  }
                  if (d2.type) {
                    ce(re().body, "htmx:beforeHistoryUpdate", le({ history: d2 }, u2));
                    if (d2.type === "push") {
                      tr(d2.path);
                      ce(re().body, "htmx:pushedIntoHistory", { path: d2.path });
                    } else {
                      rr(d2.path);
                      ce(re().body, "htmx:replacedInHistory", { path: d2.path });
                    }
                  }
                  var n3 = T(c2);
                  je(v2.swapStyle, c2, l2, g2, n3, r3);
                  if (t3.elt && !se(t3.elt) && ee(t3.elt, "id")) {
                    var i3 = document.getElementById(ee(t3.elt, "id"));
                    var a3 = { preventScroll: v2.focusScroll !== void 0 ? !v2.focusScroll : !Q.config.defaultFocusScroll };
                    if (i3) {
                      if (t3.start && i3.setSelectionRange) {
                        try {
                          i3.setSelectionRange(t3.start, t3.end);
                        } catch (e4) {
                        }
                      }
                      i3.focus(a3);
                    }
                  }
                  c2.classList.remove(Q.config.swappingClass);
                  oe(n3.elts, function(e4) {
                    if (e4.classList) {
                      e4.classList.add(Q.config.settlingClass);
                    }
                    ce(e4, "htmx:afterSwap", u2);
                  });
                  if (O(f2, /HX-Trigger-After-Swap:/i)) {
                    var o3 = l2;
                    if (!se(l2)) {
                      o3 = re().body;
                    }
                    _e(f2, "HX-Trigger-After-Swap", o3);
                  }
                  var s3 = function() {
                    oe(n3.tasks, function(e5) {
                      e5.call();
                    });
                    oe(n3.elts, function(e5) {
                      if (e5.classList) {
                        e5.classList.remove(Q.config.settlingClass);
                      }
                      ce(e5, "htmx:afterSettle", u2);
                    });
                    if (u2.pathInfo.anchor) {
                      var e4 = re().getElementById(u2.pathInfo.anchor);
                      if (e4) {
                        e4.scrollIntoView({ block: "start", behavior: "auto" });
                      }
                    }
                    if (n3.title && !m2) {
                      var t4 = C("title");
                      if (t4) {
                        t4.innerHTML = n3.title;
                      } else {
                        window.document.title = n3.title;
                      }
                    }
                    Cr(n3.elts, v2);
                    if (O(f2, /HX-Trigger-After-Settle:/i)) {
                      var r4 = l2;
                      if (!se(l2)) {
                        r4 = re().body;
                      }
                      _e(f2, "HX-Trigger-After-Settle", r4);
                    }
                    ie(p2);
                  };
                  if (v2.settleDelay > 0) {
                    setTimeout(s3, v2.settleDelay);
                  } else {
                    s3();
                  }
                } catch (e4) {
                  fe(l2, "htmx:swapError", u2);
                  ie(x2);
                  throw e4;
                }
              };
              var b2 = Q.config.globalViewTransitions;
              if (v2.hasOwnProperty("transition")) {
                b2 = v2.transition;
              }
              if (b2 && ce(l2, "htmx:beforeTransition", u2) && typeof Promise !== "undefined" && document.startViewTransition) {
                var w2 = new Promise(function(e3, t3) {
                  p2 = e3;
                  x2 = t3;
                });
                var S2 = y2;
                y2 = function() {
                  document.startViewTransition(function() {
                    S2();
                    return w2;
                  });
                };
              }
              if (v2.swapDelay > 0) {
                setTimeout(y2, v2.swapDelay);
              } else {
                y2();
              }
            }
            if (a2) {
              fe(l2, "htmx:responseError", le({ error: "Response Status Error Code " + f2.status + " from " + u2.pathInfo.requestPath }, u2));
            }
          }
          var Xr = {};
          function Dr() {
            return { init: function(e2) {
              return null;
            }, onEvent: function(e2, t2) {
              return true;
            }, transformResponse: function(e2, t2, r2) {
              return e2;
            }, isInlineSwap: function(e2) {
              return false;
            }, handleSwap: function(e2, t2, r2, n2) {
              return false;
            }, encodeParameters: function(e2, t2, r2) {
              return null;
            } };
          }
          function Ur(e2, t2) {
            if (t2.init) {
              t2.init(r);
            }
            Xr[e2] = le(Dr(), t2);
          }
          function Br(e2) {
            delete Xr[e2];
          }
          function Fr(e2, r2, n2) {
            if (e2 == void 0) {
              return r2;
            }
            if (r2 == void 0) {
              r2 = [];
            }
            if (n2 == void 0) {
              n2 = [];
            }
            var t2 = te(e2, "hx-ext");
            if (t2) {
              oe(t2.split(","), function(e3) {
                e3 = e3.replace(/ /g, "");
                if (e3.slice(0, 7) == "ignore:") {
                  n2.push(e3.slice(7));
                  return;
                }
                if (n2.indexOf(e3) < 0) {
                  var t3 = Xr[e3];
                  if (t3 && r2.indexOf(t3) < 0) {
                    r2.push(t3);
                  }
                }
              });
            }
            return Fr(u(e2), r2, n2);
          }
          var Vr = false;
          re().addEventListener("DOMContentLoaded", function() {
            Vr = true;
          });
          function jr(e2) {
            if (Vr || re().readyState === "complete") {
              e2();
            } else {
              re().addEventListener("DOMContentLoaded", e2);
            }
          }
          function _r() {
            if (Q.config.includeIndicatorStyles !== false) {
              re().head.insertAdjacentHTML("beforeend", "<style>                      ." + Q.config.indicatorClass + "{opacity:0}                      ." + Q.config.requestClass + " ." + Q.config.indicatorClass + "{opacity:1; transition: opacity 200ms ease-in;}                      ." + Q.config.requestClass + "." + Q.config.indicatorClass + "{opacity:1; transition: opacity 200ms ease-in;}                    </style>");
            }
          }
          function zr() {
            var e2 = re().querySelector('meta[name="htmx-config"]');
            if (e2) {
              return E(e2.content);
            } else {
              return null;
            }
          }
          function $r() {
            var e2 = zr();
            if (e2) {
              Q.config = le(Q.config, e2);
            }
          }
          jr(function() {
            $r();
            _r();
            var e2 = re().body;
            zt(e2);
            var t2 = re().querySelectorAll("[hx-trigger='restored'],[data-hx-trigger='restored']");
            e2.addEventListener("htmx:abort", function(e3) {
              var t3 = e3.target;
              var r3 = ae(t3);
              if (r3 && r3.xhr) {
                r3.xhr.abort();
              }
            });
            const r2 = window.onpopstate ? window.onpopstate.bind(window) : null;
            window.onpopstate = function(e3) {
              if (e3.state && e3.state.htmx) {
                ar();
                oe(t2, function(e4) {
                  ce(e4, "htmx:restored", { document: re(), triggerEvent: ce });
                });
              } else {
                if (r2) {
                  r2(e3);
                }
              }
            };
            setTimeout(function() {
              ce(e2, "htmx:load", {});
              e2 = null;
            }, 0);
          });
          return Q;
        }();
      });
    }
  });

  // node_modules/alpinejs/dist/module.esm.js
  var flushPending = false;
  var flushing = false;
  var queue = [];
  var lastFlushedIndex = -1;
  function scheduler(callback) {
    queueJob(callback);
  }
  function queueJob(job) {
    if (!queue.includes(job))
      queue.push(job);
    queueFlush();
  }
  function dequeueJob(job) {
    let index = queue.indexOf(job);
    if (index !== -1 && index > lastFlushedIndex)
      queue.splice(index, 1);
  }
  function queueFlush() {
    if (!flushing && !flushPending) {
      flushPending = true;
      queueMicrotask(flushJobs);
    }
  }
  function flushJobs() {
    flushPending = false;
    flushing = true;
    for (let i2 = 0; i2 < queue.length; i2++) {
      queue[i2]();
      lastFlushedIndex = i2;
    }
    queue.length = 0;
    lastFlushedIndex = -1;
    flushing = false;
  }
  var reactive;
  var effect;
  var release;
  var raw;
  var shouldSchedule = true;
  function disableEffectScheduling(callback) {
    shouldSchedule = false;
    callback();
    shouldSchedule = true;
  }
  function setReactivityEngine(engine) {
    reactive = engine.reactive;
    release = engine.release;
    effect = (callback) => engine.effect(callback, { scheduler: (task) => {
      if (shouldSchedule) {
        scheduler(task);
      } else {
        task();
      }
    } });
    raw = engine.raw;
  }
  function overrideEffect(override) {
    effect = override;
  }
  function elementBoundEffect(el) {
    let cleanup2 = () => {
    };
    let wrappedEffect = (callback) => {
      let effectReference = effect(callback);
      if (!el._x_effects) {
        el._x_effects = /* @__PURE__ */ new Set();
        el._x_runEffects = () => {
          el._x_effects.forEach((i2) => i2());
        };
      }
      el._x_effects.add(effectReference);
      cleanup2 = () => {
        if (effectReference === void 0)
          return;
        el._x_effects.delete(effectReference);
        release(effectReference);
      };
      return effectReference;
    };
    return [wrappedEffect, () => {
      cleanup2();
    }];
  }
  function dispatch(el, name, detail = {}) {
    el.dispatchEvent(
      new CustomEvent(name, {
        detail,
        bubbles: true,
        // Allows events to pass the shadow DOM barrier.
        composed: true,
        cancelable: true
      })
    );
  }
  function walk(el, callback) {
    if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
      Array.from(el.children).forEach((el2) => walk(el2, callback));
      return;
    }
    let skip = false;
    callback(el, () => skip = true);
    if (skip)
      return;
    let node = el.firstElementChild;
    while (node) {
      walk(node, callback, false);
      node = node.nextElementSibling;
    }
  }
  function warn(message, ...args) {
    console.warn(`Alpine Warning: ${message}`, ...args);
  }
  var started = false;
  function start() {
    if (started)
      warn("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems.");
    started = true;
    if (!document.body)
      warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
    dispatch(document, "alpine:init");
    dispatch(document, "alpine:initializing");
    startObservingMutations();
    onElAdded((el) => initTree(el, walk));
    onElRemoved((el) => destroyTree(el));
    onAttributesAdded((el, attrs) => {
      directives(el, attrs).forEach((handle) => handle());
    });
    let outNestedComponents = (el) => !closestRoot(el.parentElement, true);
    Array.from(document.querySelectorAll(allSelectors().join(","))).filter(outNestedComponents).forEach((el) => {
      initTree(el);
    });
    dispatch(document, "alpine:initialized");
  }
  var rootSelectorCallbacks = [];
  var initSelectorCallbacks = [];
  function rootSelectors() {
    return rootSelectorCallbacks.map((fn) => fn());
  }
  function allSelectors() {
    return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn) => fn());
  }
  function addRootSelector(selectorCallback) {
    rootSelectorCallbacks.push(selectorCallback);
  }
  function addInitSelector(selectorCallback) {
    initSelectorCallbacks.push(selectorCallback);
  }
  function closestRoot(el, includeInitSelectors = false) {
    return findClosest(el, (element) => {
      const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
      if (selectors.some((selector) => element.matches(selector)))
        return true;
    });
  }
  function findClosest(el, callback) {
    if (!el)
      return;
    if (callback(el))
      return el;
    if (el._x_teleportBack)
      el = el._x_teleportBack;
    if (!el.parentElement)
      return;
    return findClosest(el.parentElement, callback);
  }
  function isRoot(el) {
    return rootSelectors().some((selector) => el.matches(selector));
  }
  var initInterceptors = [];
  function interceptInit(callback) {
    initInterceptors.push(callback);
  }
  function initTree(el, walker = walk, intercept = () => {
  }) {
    deferHandlingDirectives(() => {
      walker(el, (el2, skip) => {
        intercept(el2, skip);
        initInterceptors.forEach((i2) => i2(el2, skip));
        directives(el2, el2.attributes).forEach((handle) => handle());
        el2._x_ignore && skip();
      });
    });
  }
  function destroyTree(root) {
    walk(root, (el) => {
      cleanupAttributes(el);
      cleanupElement(el);
    });
  }
  var onAttributeAddeds = [];
  var onElRemoveds = [];
  var onElAddeds = [];
  function onElAdded(callback) {
    onElAddeds.push(callback);
  }
  function onElRemoved(el, callback) {
    if (typeof callback === "function") {
      if (!el._x_cleanups)
        el._x_cleanups = [];
      el._x_cleanups.push(callback);
    } else {
      callback = el;
      onElRemoveds.push(callback);
    }
  }
  function onAttributesAdded(callback) {
    onAttributeAddeds.push(callback);
  }
  function onAttributeRemoved(el, name, callback) {
    if (!el._x_attributeCleanups)
      el._x_attributeCleanups = {};
    if (!el._x_attributeCleanups[name])
      el._x_attributeCleanups[name] = [];
    el._x_attributeCleanups[name].push(callback);
  }
  function cleanupAttributes(el, names) {
    if (!el._x_attributeCleanups)
      return;
    Object.entries(el._x_attributeCleanups).forEach(([name, value]) => {
      if (names === void 0 || names.includes(name)) {
        value.forEach((i2) => i2());
        delete el._x_attributeCleanups[name];
      }
    });
  }
  function cleanupElement(el) {
    if (el._x_cleanups) {
      while (el._x_cleanups.length)
        el._x_cleanups.pop()();
    }
  }
  var observer = new MutationObserver(onMutate);
  var currentlyObserving = false;
  function startObservingMutations() {
    observer.observe(document, { subtree: true, childList: true, attributes: true, attributeOldValue: true });
    currentlyObserving = true;
  }
  function stopObservingMutations() {
    flushObserver();
    observer.disconnect();
    currentlyObserving = false;
  }
  var recordQueue = [];
  var willProcessRecordQueue = false;
  function flushObserver() {
    recordQueue = recordQueue.concat(observer.takeRecords());
    if (recordQueue.length && !willProcessRecordQueue) {
      willProcessRecordQueue = true;
      queueMicrotask(() => {
        processRecordQueue();
        willProcessRecordQueue = false;
      });
    }
  }
  function processRecordQueue() {
    onMutate(recordQueue);
    recordQueue.length = 0;
  }
  function mutateDom(callback) {
    if (!currentlyObserving)
      return callback();
    stopObservingMutations();
    let result = callback();
    startObservingMutations();
    return result;
  }
  var isCollecting = false;
  var deferredMutations = [];
  function deferMutations() {
    isCollecting = true;
  }
  function flushAndStopDeferringMutations() {
    isCollecting = false;
    onMutate(deferredMutations);
    deferredMutations = [];
  }
  function onMutate(mutations) {
    if (isCollecting) {
      deferredMutations = deferredMutations.concat(mutations);
      return;
    }
    let addedNodes = [];
    let removedNodes = [];
    let addedAttributes = /* @__PURE__ */ new Map();
    let removedAttributes = /* @__PURE__ */ new Map();
    for (let i2 = 0; i2 < mutations.length; i2++) {
      if (mutations[i2].target._x_ignoreMutationObserver)
        continue;
      if (mutations[i2].type === "childList") {
        mutations[i2].addedNodes.forEach((node) => node.nodeType === 1 && addedNodes.push(node));
        mutations[i2].removedNodes.forEach((node) => node.nodeType === 1 && removedNodes.push(node));
      }
      if (mutations[i2].type === "attributes") {
        let el = mutations[i2].target;
        let name = mutations[i2].attributeName;
        let oldValue = mutations[i2].oldValue;
        let add2 = () => {
          if (!addedAttributes.has(el))
            addedAttributes.set(el, []);
          addedAttributes.get(el).push({ name, value: el.getAttribute(name) });
        };
        let remove = () => {
          if (!removedAttributes.has(el))
            removedAttributes.set(el, []);
          removedAttributes.get(el).push(name);
        };
        if (el.hasAttribute(name) && oldValue === null) {
          add2();
        } else if (el.hasAttribute(name)) {
          remove();
          add2();
        } else {
          remove();
        }
      }
    }
    removedAttributes.forEach((attrs, el) => {
      cleanupAttributes(el, attrs);
    });
    addedAttributes.forEach((attrs, el) => {
      onAttributeAddeds.forEach((i2) => i2(el, attrs));
    });
    for (let node of removedNodes) {
      if (addedNodes.includes(node))
        continue;
      onElRemoveds.forEach((i2) => i2(node));
      destroyTree(node);
    }
    addedNodes.forEach((node) => {
      node._x_ignoreSelf = true;
      node._x_ignore = true;
    });
    for (let node of addedNodes) {
      if (removedNodes.includes(node))
        continue;
      if (!node.isConnected)
        continue;
      delete node._x_ignoreSelf;
      delete node._x_ignore;
      onElAddeds.forEach((i2) => i2(node));
      node._x_ignore = true;
      node._x_ignoreSelf = true;
    }
    addedNodes.forEach((node) => {
      delete node._x_ignoreSelf;
      delete node._x_ignore;
    });
    addedNodes = null;
    removedNodes = null;
    addedAttributes = null;
    removedAttributes = null;
  }
  function scope(node) {
    return mergeProxies(closestDataStack(node));
  }
  function addScopeToNode(node, data2, referenceNode) {
    node._x_dataStack = [data2, ...closestDataStack(referenceNode || node)];
    return () => {
      node._x_dataStack = node._x_dataStack.filter((i2) => i2 !== data2);
    };
  }
  function closestDataStack(node) {
    if (node._x_dataStack)
      return node._x_dataStack;
    if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) {
      return closestDataStack(node.host);
    }
    if (!node.parentNode) {
      return [];
    }
    return closestDataStack(node.parentNode);
  }
  function mergeProxies(objects) {
    return new Proxy({ objects }, mergeProxyTrap);
  }
  var mergeProxyTrap = {
    ownKeys({ objects }) {
      return Array.from(
        new Set(objects.flatMap((i2) => Object.keys(i2)))
      );
    },
    has({ objects }, name) {
      if (name == Symbol.unscopables)
        return false;
      return objects.some(
        (obj) => Object.prototype.hasOwnProperty.call(obj, name)
      );
    },
    get({ objects }, name, thisProxy) {
      if (name == "toJSON")
        return collapseProxies;
      return Reflect.get(
        objects.find(
          (obj) => Object.prototype.hasOwnProperty.call(obj, name)
        ) || {},
        name,
        thisProxy
      );
    },
    set({ objects }, name, value, thisProxy) {
      const target = objects.find(
        (obj) => Object.prototype.hasOwnProperty.call(obj, name)
      ) || objects[objects.length - 1];
      const descriptor = Object.getOwnPropertyDescriptor(target, name);
      if ((descriptor == null ? void 0 : descriptor.set) && (descriptor == null ? void 0 : descriptor.get))
        return Reflect.set(target, name, value, thisProxy);
      return Reflect.set(target, name, value);
    }
  };
  function collapseProxies() {
    let keys = Reflect.ownKeys(this);
    return keys.reduce((acc, key) => {
      acc[key] = Reflect.get(this, key);
      return acc;
    }, {});
  }
  function initInterceptors2(data2) {
    let isObject2 = (val) => typeof val === "object" && !Array.isArray(val) && val !== null;
    let recurse = (obj, basePath = "") => {
      Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value, enumerable }]) => {
        if (enumerable === false || value === void 0)
          return;
        let path = basePath === "" ? key : `${basePath}.${key}`;
        if (typeof value === "object" && value !== null && value._x_interceptor) {
          obj[key] = value.initialize(data2, path, key);
        } else {
          if (isObject2(value) && value !== obj && !(value instanceof Element)) {
            recurse(value, path);
          }
        }
      });
    };
    return recurse(data2);
  }
  function interceptor(callback, mutateObj = () => {
  }) {
    let obj = {
      initialValue: void 0,
      _x_interceptor: true,
      initialize(data2, path, key) {
        return callback(this.initialValue, () => get(data2, path), (value) => set(data2, path, value), path, key);
      }
    };
    mutateObj(obj);
    return (initialValue) => {
      if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
        let initialize = obj.initialize.bind(obj);
        obj.initialize = (data2, path, key) => {
          let innerValue = initialValue.initialize(data2, path, key);
          obj.initialValue = innerValue;
          return initialize(data2, path, key);
        };
      } else {
        obj.initialValue = initialValue;
      }
      return obj;
    };
  }
  function get(obj, path) {
    return path.split(".").reduce((carry, segment) => carry[segment], obj);
  }
  function set(obj, path, value) {
    if (typeof path === "string")
      path = path.split(".");
    if (path.length === 1)
      obj[path[0]] = value;
    else if (path.length === 0)
      throw error;
    else {
      if (obj[path[0]])
        return set(obj[path[0]], path.slice(1), value);
      else {
        obj[path[0]] = {};
        return set(obj[path[0]], path.slice(1), value);
      }
    }
  }
  var magics = {};
  function magic(name, callback) {
    magics[name] = callback;
  }
  function injectMagics(obj, el) {
    Object.entries(magics).forEach(([name, callback]) => {
      let memoizedUtilities = null;
      function getUtilities() {
        if (memoizedUtilities) {
          return memoizedUtilities;
        } else {
          let [utilities, cleanup2] = getElementBoundUtilities(el);
          memoizedUtilities = __spreadValues({ interceptor }, utilities);
          onElRemoved(el, cleanup2);
          return memoizedUtilities;
        }
      }
      Object.defineProperty(obj, `$${name}`, {
        get() {
          return callback(el, getUtilities());
        },
        enumerable: false
      });
    });
    return obj;
  }
  function tryCatch(el, expression, callback, ...args) {
    try {
      return callback(...args);
    } catch (e2) {
      handleError(e2, el, expression);
    }
  }
  function handleError(error2, el, expression = void 0) {
    Object.assign(error2, { el, expression });
    console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
    setTimeout(() => {
      throw error2;
    }, 0);
  }
  var shouldAutoEvaluateFunctions = true;
  function dontAutoEvaluateFunctions(callback) {
    let cache = shouldAutoEvaluateFunctions;
    shouldAutoEvaluateFunctions = false;
    let result = callback();
    shouldAutoEvaluateFunctions = cache;
    return result;
  }
  function evaluate(el, expression, extras = {}) {
    let result;
    evaluateLater(el, expression)((value) => result = value, extras);
    return result;
  }
  function evaluateLater(...args) {
    return theEvaluatorFunction(...args);
  }
  var theEvaluatorFunction = normalEvaluator;
  function setEvaluator(newEvaluator) {
    theEvaluatorFunction = newEvaluator;
  }
  function normalEvaluator(el, expression) {
    let overriddenMagics = {};
    injectMagics(overriddenMagics, el);
    let dataStack = [overriddenMagics, ...closestDataStack(el)];
    let evaluator = typeof expression === "function" ? generateEvaluatorFromFunction(dataStack, expression) : generateEvaluatorFromString(dataStack, expression, el);
    return tryCatch.bind(null, el, expression, evaluator);
  }
  function generateEvaluatorFromFunction(dataStack, func) {
    return (receiver = () => {
    }, { scope: scope2 = {}, params = [] } = {}) => {
      let result = func.apply(mergeProxies([scope2, ...dataStack]), params);
      runIfTypeOfFunction(receiver, result);
    };
  }
  var evaluatorMemo = {};
  function generateFunctionFromString(expression, el) {
    if (evaluatorMemo[expression]) {
      return evaluatorMemo[expression];
    }
    let AsyncFunction = Object.getPrototypeOf(async function() {
    }).constructor;
    let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression.trim()) || /^(let|const)\s/.test(expression.trim()) ? `(async()=>{ ${expression} })()` : expression;
    const safeAsyncFunction = () => {
      try {
        let func2 = new AsyncFunction(
          ["__self", "scope"],
          `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`
        );
        Object.defineProperty(func2, "name", {
          value: `[Alpine] ${expression}`
        });
        return func2;
      } catch (error2) {
        handleError(error2, el, expression);
        return Promise.resolve();
      }
    };
    let func = safeAsyncFunction();
    evaluatorMemo[expression] = func;
    return func;
  }
  function generateEvaluatorFromString(dataStack, expression, el) {
    let func = generateFunctionFromString(expression, el);
    return (receiver = () => {
    }, { scope: scope2 = {}, params = [] } = {}) => {
      func.result = void 0;
      func.finished = false;
      let completeScope = mergeProxies([scope2, ...dataStack]);
      if (typeof func === "function") {
        let promise = func(func, completeScope).catch((error2) => handleError(error2, el, expression));
        if (func.finished) {
          runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
          func.result = void 0;
        } else {
          promise.then((result) => {
            runIfTypeOfFunction(receiver, result, completeScope, params, el);
          }).catch((error2) => handleError(error2, el, expression)).finally(() => func.result = void 0);
        }
      }
    };
  }
  function runIfTypeOfFunction(receiver, value, scope2, params, el) {
    if (shouldAutoEvaluateFunctions && typeof value === "function") {
      let result = value.apply(scope2, params);
      if (result instanceof Promise) {
        result.then((i2) => runIfTypeOfFunction(receiver, i2, scope2, params)).catch((error2) => handleError(error2, el, value));
      } else {
        receiver(result);
      }
    } else if (typeof value === "object" && value instanceof Promise) {
      value.then((i2) => receiver(i2));
    } else {
      receiver(value);
    }
  }
  var prefixAsString = "x-";
  function prefix(subject = "") {
    return prefixAsString + subject;
  }
  function setPrefix(newPrefix) {
    prefixAsString = newPrefix;
  }
  var directiveHandlers = {};
  function directive(name, callback) {
    directiveHandlers[name] = callback;
    return {
      before(directive2) {
        if (!directiveHandlers[directive2]) {
          console.warn(
            "Cannot find directive `${directive}`. `${name}` will use the default order of execution"
          );
          return;
        }
        const pos = directiveOrder.indexOf(directive2);
        directiveOrder.splice(pos >= 0 ? pos : directiveOrder.indexOf("DEFAULT"), 0, name);
      }
    };
  }
  function directives(el, attributes, originalAttributeOverride) {
    attributes = Array.from(attributes);
    if (el._x_virtualDirectives) {
      let vAttributes = Object.entries(el._x_virtualDirectives).map(([name, value]) => ({ name, value }));
      let staticAttributes = attributesOnly(vAttributes);
      vAttributes = vAttributes.map((attribute) => {
        if (staticAttributes.find((attr) => attr.name === attribute.name)) {
          return {
            name: `x-bind:${attribute.name}`,
            value: `"${attribute.value}"`
          };
        }
        return attribute;
      });
      attributes = attributes.concat(vAttributes);
    }
    let transformedAttributeMap = {};
    let directives2 = attributes.map(toTransformedAttributes((newName, oldName) => transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
    return directives2.map((directive2) => {
      return getDirectiveHandler(el, directive2);
    });
  }
  function attributesOnly(attributes) {
    return Array.from(attributes).map(toTransformedAttributes()).filter((attr) => !outNonAlpineAttributes(attr));
  }
  var isDeferringHandlers = false;
  var directiveHandlerStacks = /* @__PURE__ */ new Map();
  var currentHandlerStackKey = Symbol();
  function deferHandlingDirectives(callback) {
    isDeferringHandlers = true;
    let key = Symbol();
    currentHandlerStackKey = key;
    directiveHandlerStacks.set(key, []);
    let flushHandlers = () => {
      while (directiveHandlerStacks.get(key).length)
        directiveHandlerStacks.get(key).shift()();
      directiveHandlerStacks.delete(key);
    };
    let stopDeferring = () => {
      isDeferringHandlers = false;
      flushHandlers();
    };
    callback(flushHandlers);
    stopDeferring();
  }
  function getElementBoundUtilities(el) {
    let cleanups = [];
    let cleanup2 = (callback) => cleanups.push(callback);
    let [effect3, cleanupEffect] = elementBoundEffect(el);
    cleanups.push(cleanupEffect);
    let utilities = {
      Alpine: alpine_default,
      effect: effect3,
      cleanup: cleanup2,
      evaluateLater: evaluateLater.bind(evaluateLater, el),
      evaluate: evaluate.bind(evaluate, el)
    };
    let doCleanup = () => cleanups.forEach((i2) => i2());
    return [utilities, doCleanup];
  }
  function getDirectiveHandler(el, directive2) {
    let noop = () => {
    };
    let handler4 = directiveHandlers[directive2.type] || noop;
    let [utilities, cleanup2] = getElementBoundUtilities(el);
    onAttributeRemoved(el, directive2.original, cleanup2);
    let fullHandler = () => {
      if (el._x_ignore || el._x_ignoreSelf)
        return;
      handler4.inline && handler4.inline(el, directive2, utilities);
      handler4 = handler4.bind(handler4, el, directive2, utilities);
      isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler4) : handler4();
    };
    fullHandler.runCleanups = cleanup2;
    return fullHandler;
  }
  var startingWith = (subject, replacement) => ({ name, value }) => {
    if (name.startsWith(subject))
      name = name.replace(subject, replacement);
    return { name, value };
  };
  var into = (i2) => i2;
  function toTransformedAttributes(callback = () => {
  }) {
    return ({ name, value }) => {
      let { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform) => {
        return transform(carry);
      }, { name, value });
      if (newName !== name)
        callback(newName, name);
      return { name: newName, value: newValue };
    };
  }
  var attributeTransformers = [];
  function mapAttributes(callback) {
    attributeTransformers.push(callback);
  }
  function outNonAlpineAttributes({ name }) {
    return alpineAttributeRegex().test(name);
  }
  var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
  function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
    return ({ name, value }) => {
      let typeMatch = name.match(alpineAttributeRegex());
      let valueMatch = name.match(/:([a-zA-Z0-9\-_:]+)/);
      let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
      let original = originalAttributeOverride || transformedAttributeMap[name] || name;
      return {
        type: typeMatch ? typeMatch[1] : null,
        value: valueMatch ? valueMatch[1] : null,
        modifiers: modifiers.map((i2) => i2.replace(".", "")),
        expression: value,
        original
      };
    };
  }
  var DEFAULT = "DEFAULT";
  var directiveOrder = [
    "ignore",
    "ref",
    "data",
    "id",
    "anchor",
    "bind",
    "init",
    "for",
    "model",
    "modelable",
    "transition",
    "show",
    "if",
    DEFAULT,
    "teleport"
  ];
  function byPriority(a2, b2) {
    let typeA = directiveOrder.indexOf(a2.type) === -1 ? DEFAULT : a2.type;
    let typeB = directiveOrder.indexOf(b2.type) === -1 ? DEFAULT : b2.type;
    return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
  }
  var tickStack = [];
  var isHolding = false;
  function nextTick(callback = () => {
  }) {
    queueMicrotask(() => {
      isHolding || setTimeout(() => {
        releaseNextTicks();
      });
    });
    return new Promise((res) => {
      tickStack.push(() => {
        callback();
        res();
      });
    });
  }
  function releaseNextTicks() {
    isHolding = false;
    while (tickStack.length)
      tickStack.shift()();
  }
  function holdNextTicks() {
    isHolding = true;
  }
  function setClasses(el, value) {
    if (Array.isArray(value)) {
      return setClassesFromString(el, value.join(" "));
    } else if (typeof value === "object" && value !== null) {
      return setClassesFromObject(el, value);
    } else if (typeof value === "function") {
      return setClasses(el, value());
    }
    return setClassesFromString(el, value);
  }
  function setClassesFromString(el, classString) {
    let split = (classString2) => classString2.split(" ").filter(Boolean);
    let missingClasses = (classString2) => classString2.split(" ").filter((i2) => !el.classList.contains(i2)).filter(Boolean);
    let addClassesAndReturnUndo = (classes) => {
      el.classList.add(...classes);
      return () => {
        el.classList.remove(...classes);
      };
    };
    classString = classString === true ? classString = "" : classString || "";
    return addClassesAndReturnUndo(missingClasses(classString));
  }
  function setClassesFromObject(el, classObject) {
    let split = (classString) => classString.split(" ").filter(Boolean);
    let forAdd = Object.entries(classObject).flatMap(([classString, bool]) => bool ? split(classString) : false).filter(Boolean);
    let forRemove = Object.entries(classObject).flatMap(([classString, bool]) => !bool ? split(classString) : false).filter(Boolean);
    let added = [];
    let removed = [];
    forRemove.forEach((i2) => {
      if (el.classList.contains(i2)) {
        el.classList.remove(i2);
        removed.push(i2);
      }
    });
    forAdd.forEach((i2) => {
      if (!el.classList.contains(i2)) {
        el.classList.add(i2);
        added.push(i2);
      }
    });
    return () => {
      removed.forEach((i2) => el.classList.add(i2));
      added.forEach((i2) => el.classList.remove(i2));
    };
  }
  function setStyles(el, value) {
    if (typeof value === "object" && value !== null) {
      return setStylesFromObject(el, value);
    }
    return setStylesFromString(el, value);
  }
  function setStylesFromObject(el, value) {
    let previousStyles = {};
    Object.entries(value).forEach(([key, value2]) => {
      previousStyles[key] = el.style[key];
      if (!key.startsWith("--")) {
        key = kebabCase(key);
      }
      el.style.setProperty(key, value2);
    });
    setTimeout(() => {
      if (el.style.length === 0) {
        el.removeAttribute("style");
      }
    });
    return () => {
      setStyles(el, previousStyles);
    };
  }
  function setStylesFromString(el, value) {
    let cache = el.getAttribute("style", value);
    el.setAttribute("style", value);
    return () => {
      el.setAttribute("style", cache || "");
    };
  }
  function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }
  function once(callback, fallback = () => {
  }) {
    let called = false;
    return function() {
      if (!called) {
        called = true;
        callback.apply(this, arguments);
      } else {
        fallback.apply(this, arguments);
      }
    };
  }
  directive("transition", (el, { value, modifiers, expression }, { evaluate: evaluate2 }) => {
    if (typeof expression === "function")
      expression = evaluate2(expression);
    if (expression === false)
      return;
    if (!expression || typeof expression === "boolean") {
      registerTransitionsFromHelper(el, modifiers, value);
    } else {
      registerTransitionsFromClassString(el, expression, value);
    }
  });
  function registerTransitionsFromClassString(el, classString, stage) {
    registerTransitionObject(el, setClasses, "");
    let directiveStorageMap = {
      "enter": (classes) => {
        el._x_transition.enter.during = classes;
      },
      "enter-start": (classes) => {
        el._x_transition.enter.start = classes;
      },
      "enter-end": (classes) => {
        el._x_transition.enter.end = classes;
      },
      "leave": (classes) => {
        el._x_transition.leave.during = classes;
      },
      "leave-start": (classes) => {
        el._x_transition.leave.start = classes;
      },
      "leave-end": (classes) => {
        el._x_transition.leave.end = classes;
      }
    };
    directiveStorageMap[stage](classString);
  }
  function registerTransitionsFromHelper(el, modifiers, stage) {
    registerTransitionObject(el, setStyles);
    let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
    let transitioningIn = doesntSpecify || modifiers.includes("in") || ["enter"].includes(stage);
    let transitioningOut = doesntSpecify || modifiers.includes("out") || ["leave"].includes(stage);
    if (modifiers.includes("in") && !doesntSpecify) {
      modifiers = modifiers.filter((i2, index) => index < modifiers.indexOf("out"));
    }
    if (modifiers.includes("out") && !doesntSpecify) {
      modifiers = modifiers.filter((i2, index) => index > modifiers.indexOf("out"));
    }
    let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
    let wantsOpacity = wantsAll || modifiers.includes("opacity");
    let wantsScale = wantsAll || modifiers.includes("scale");
    let opacityValue = wantsOpacity ? 0 : 1;
    let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
    let delay = modifierValue(modifiers, "delay", 0) / 1e3;
    let origin = modifierValue(modifiers, "origin", "center");
    let property = "opacity, transform";
    let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
    let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
    let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
    if (transitioningIn) {
      el._x_transition.enter.during = {
        transformOrigin: origin,
        transitionDelay: `${delay}s`,
        transitionProperty: property,
        transitionDuration: `${durationIn}s`,
        transitionTimingFunction: easing
      };
      el._x_transition.enter.start = {
        opacity: opacityValue,
        transform: `scale(${scaleValue})`
      };
      el._x_transition.enter.end = {
        opacity: 1,
        transform: `scale(1)`
      };
    }
    if (transitioningOut) {
      el._x_transition.leave.during = {
        transformOrigin: origin,
        transitionDelay: `${delay}s`,
        transitionProperty: property,
        transitionDuration: `${durationOut}s`,
        transitionTimingFunction: easing
      };
      el._x_transition.leave.start = {
        opacity: 1,
        transform: `scale(1)`
      };
      el._x_transition.leave.end = {
        opacity: opacityValue,
        transform: `scale(${scaleValue})`
      };
    }
  }
  function registerTransitionObject(el, setFunction, defaultValue = {}) {
    if (!el._x_transition)
      el._x_transition = {
        enter: { during: defaultValue, start: defaultValue, end: defaultValue },
        leave: { during: defaultValue, start: defaultValue, end: defaultValue },
        in(before = () => {
        }, after = () => {
        }) {
          transition(el, setFunction, {
            during: this.enter.during,
            start: this.enter.start,
            end: this.enter.end
          }, before, after);
        },
        out(before = () => {
        }, after = () => {
        }) {
          transition(el, setFunction, {
            during: this.leave.during,
            start: this.leave.start,
            end: this.leave.end
          }, before, after);
        }
      };
  }
  window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
    const nextTick2 = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
    let clickAwayCompatibleShow = () => nextTick2(show);
    if (value) {
      if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) {
        el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
      } else {
        el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
      }
      return;
    }
    el._x_hidePromise = el._x_transition ? new Promise((resolve, reject) => {
      el._x_transition.out(() => {
      }, () => resolve(hide));
      el._x_transitioning && el._x_transitioning.beforeCancel(() => reject({ isFromCancelledTransition: true }));
    }) : Promise.resolve(hide);
    queueMicrotask(() => {
      let closest = closestHide(el);
      if (closest) {
        if (!closest._x_hideChildren)
          closest._x_hideChildren = [];
        closest._x_hideChildren.push(el);
      } else {
        nextTick2(() => {
          let hideAfterChildren = (el2) => {
            let carry = Promise.all([
              el2._x_hidePromise,
              ...(el2._x_hideChildren || []).map(hideAfterChildren)
            ]).then(([i2]) => i2());
            delete el2._x_hidePromise;
            delete el2._x_hideChildren;
            return carry;
          };
          hideAfterChildren(el).catch((e2) => {
            if (!e2.isFromCancelledTransition)
              throw e2;
          });
        });
      }
    });
  };
  function closestHide(el) {
    let parent = el.parentNode;
    if (!parent)
      return;
    return parent._x_hidePromise ? parent : closestHide(parent);
  }
  function transition(el, setFunction, { during, start: start2, end } = {}, before = () => {
  }, after = () => {
  }) {
    if (el._x_transitioning)
      el._x_transitioning.cancel();
    if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
      before();
      after();
      return;
    }
    let undoStart, undoDuring, undoEnd;
    performTransition(el, {
      start() {
        undoStart = setFunction(el, start2);
      },
      during() {
        undoDuring = setFunction(el, during);
      },
      before,
      end() {
        undoStart();
        undoEnd = setFunction(el, end);
      },
      after,
      cleanup() {
        undoDuring();
        undoEnd();
      }
    });
  }
  function performTransition(el, stages) {
    let interrupted, reachedBefore, reachedEnd;
    let finish = once(() => {
      mutateDom(() => {
        interrupted = true;
        if (!reachedBefore)
          stages.before();
        if (!reachedEnd) {
          stages.end();
          releaseNextTicks();
        }
        stages.after();
        if (el.isConnected)
          stages.cleanup();
        delete el._x_transitioning;
      });
    });
    el._x_transitioning = {
      beforeCancels: [],
      beforeCancel(callback) {
        this.beforeCancels.push(callback);
      },
      cancel: once(function() {
        while (this.beforeCancels.length) {
          this.beforeCancels.shift()();
        }
        ;
        finish();
      }),
      finish
    };
    mutateDom(() => {
      stages.start();
      stages.during();
    });
    holdNextTicks();
    requestAnimationFrame(() => {
      if (interrupted)
        return;
      let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
      let delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
      if (duration === 0)
        duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
      mutateDom(() => {
        stages.before();
      });
      reachedBefore = true;
      requestAnimationFrame(() => {
        if (interrupted)
          return;
        mutateDom(() => {
          stages.end();
        });
        releaseNextTicks();
        setTimeout(el._x_transitioning.finish, duration + delay);
        reachedEnd = true;
      });
    });
  }
  function modifierValue(modifiers, key, fallback) {
    if (modifiers.indexOf(key) === -1)
      return fallback;
    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue)
      return fallback;
    if (key === "scale") {
      if (isNaN(rawValue))
        return fallback;
    }
    if (key === "duration" || key === "delay") {
      let match = rawValue.match(/([0-9]+)ms/);
      if (match)
        return match[1];
    }
    if (key === "origin") {
      if (["top", "right", "left", "center", "bottom"].includes(modifiers[modifiers.indexOf(key) + 2])) {
        return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(" ");
      }
    }
    return rawValue;
  }
  var isCloning = false;
  function skipDuringClone(callback, fallback = () => {
  }) {
    return (...args) => isCloning ? fallback(...args) : callback(...args);
  }
  function onlyDuringClone(callback) {
    return (...args) => isCloning && callback(...args);
  }
  var interceptors = [];
  function interceptClone(callback) {
    interceptors.push(callback);
  }
  function cloneNode(from, to) {
    interceptors.forEach((i2) => i2(from, to));
    isCloning = true;
    dontRegisterReactiveSideEffects(() => {
      initTree(to, (el, callback) => {
        callback(el, () => {
        });
      });
    });
    isCloning = false;
  }
  var isCloningLegacy = false;
  function clone(oldEl, newEl) {
    if (!newEl._x_dataStack)
      newEl._x_dataStack = oldEl._x_dataStack;
    isCloning = true;
    isCloningLegacy = true;
    dontRegisterReactiveSideEffects(() => {
      cloneTree(newEl);
    });
    isCloning = false;
    isCloningLegacy = false;
  }
  function cloneTree(el) {
    let hasRunThroughFirstEl = false;
    let shallowWalker = (el2, callback) => {
      walk(el2, (el3, skip) => {
        if (hasRunThroughFirstEl && isRoot(el3))
          return skip();
        hasRunThroughFirstEl = true;
        callback(el3, skip);
      });
    };
    initTree(el, shallowWalker);
  }
  function dontRegisterReactiveSideEffects(callback) {
    let cache = effect;
    overrideEffect((callback2, el) => {
      let storedEffect = cache(callback2);
      release(storedEffect);
      return () => {
      };
    });
    callback();
    overrideEffect(cache);
  }
  function bind(el, name, value, modifiers = []) {
    if (!el._x_bindings)
      el._x_bindings = reactive({});
    el._x_bindings[name] = value;
    name = modifiers.includes("camel") ? camelCase(name) : name;
    switch (name) {
      case "value":
        bindInputValue(el, value);
        break;
      case "style":
        bindStyles(el, value);
        break;
      case "class":
        bindClasses(el, value);
        break;
      case "selected":
      case "checked":
        bindAttributeAndProperty(el, name, value);
        break;
      default:
        bindAttribute(el, name, value);
        break;
    }
  }
  function bindInputValue(el, value) {
    if (el.type === "radio") {
      if (el.attributes.value === void 0) {
        el.value = value;
      }
      if (window.fromModel) {
        if (typeof value === "boolean") {
          el.checked = safeParseBoolean(el.value) === value;
        } else {
          el.checked = checkedAttrLooseCompare(el.value, value);
        }
      }
    } else if (el.type === "checkbox") {
      if (Number.isInteger(value)) {
        el.value = value;
      } else if (!Array.isArray(value) && typeof value !== "boolean" && ![null, void 0].includes(value)) {
        el.value = String(value);
      } else {
        if (Array.isArray(value)) {
          el.checked = value.some((val) => checkedAttrLooseCompare(val, el.value));
        } else {
          el.checked = !!value;
        }
      }
    } else if (el.tagName === "SELECT") {
      updateSelect(el, value);
    } else {
      if (el.value === value)
        return;
      el.value = value === void 0 ? "" : value;
    }
  }
  function bindClasses(el, value) {
    if (el._x_undoAddedClasses)
      el._x_undoAddedClasses();
    el._x_undoAddedClasses = setClasses(el, value);
  }
  function bindStyles(el, value) {
    if (el._x_undoAddedStyles)
      el._x_undoAddedStyles();
    el._x_undoAddedStyles = setStyles(el, value);
  }
  function bindAttributeAndProperty(el, name, value) {
    bindAttribute(el, name, value);
    setPropertyIfChanged(el, name, value);
  }
  function bindAttribute(el, name, value) {
    if ([null, void 0, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
      el.removeAttribute(name);
    } else {
      if (isBooleanAttr(name))
        value = name;
      setIfChanged(el, name, value);
    }
  }
  function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) {
      el.setAttribute(attrName, value);
    }
  }
  function setPropertyIfChanged(el, propName, value) {
    if (el[propName] !== value) {
      el[propName] = value;
    }
  }
  function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map((value2) => {
      return value2 + "";
    });
    Array.from(el.options).forEach((option) => {
      option.selected = arrayWrappedValue.includes(option.value);
    });
  }
  function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
  }
  function safeParseBoolean(rawValue) {
    if ([1, "1", "true", "on", "yes", true].includes(rawValue)) {
      return true;
    }
    if ([0, "0", "false", "off", "no", false].includes(rawValue)) {
      return false;
    }
    return rawValue ? Boolean(rawValue) : null;
  }
  function isBooleanAttr(attrName) {
    const booleanAttributes = [
      "disabled",
      "checked",
      "required",
      "readonly",
      "hidden",
      "open",
      "selected",
      "autofocus",
      "itemscope",
      "multiple",
      "novalidate",
      "allowfullscreen",
      "allowpaymentrequest",
      "formnovalidate",
      "autoplay",
      "controls",
      "loop",
      "muted",
      "playsinline",
      "default",
      "ismap",
      "reversed",
      "async",
      "defer",
      "nomodule"
    ];
    return booleanAttributes.includes(attrName);
  }
  function attributeShouldntBePreservedIfFalsy(name) {
    return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(name);
  }
  function getBinding(el, name, fallback) {
    if (el._x_bindings && el._x_bindings[name] !== void 0)
      return el._x_bindings[name];
    return getAttributeBinding(el, name, fallback);
  }
  function extractProp(el, name, fallback, extract = true) {
    if (el._x_bindings && el._x_bindings[name] !== void 0)
      return el._x_bindings[name];
    if (el._x_inlineBindings && el._x_inlineBindings[name] !== void 0) {
      let binding = el._x_inlineBindings[name];
      binding.extract = extract;
      return dontAutoEvaluateFunctions(() => {
        return evaluate(el, binding.expression);
      });
    }
    return getAttributeBinding(el, name, fallback);
  }
  function getAttributeBinding(el, name, fallback) {
    let attr = el.getAttribute(name);
    if (attr === null)
      return typeof fallback === "function" ? fallback() : fallback;
    if (attr === "")
      return true;
    if (isBooleanAttr(name)) {
      return !![name, "true"].includes(attr);
    }
    return attr;
  }
  function debounce(func, wait) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      let context = this, args = arguments;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  function entangle({ get: outerGet, set: outerSet }, { get: innerGet, set: innerSet }) {
    let firstRun = true;
    let outerHash;
    let reference = effect(() => {
      const outer = outerGet();
      const inner = innerGet();
      if (firstRun) {
        innerSet(cloneIfObject(outer));
        firstRun = false;
        outerHash = JSON.stringify(outer);
      } else {
        const outerHashLatest = JSON.stringify(outer);
        if (outerHashLatest !== outerHash) {
          innerSet(cloneIfObject(outer));
          outerHash = outerHashLatest;
        } else {
          outerSet(cloneIfObject(inner));
          outerHash = JSON.stringify(inner);
        }
      }
      JSON.stringify(innerGet());
      JSON.stringify(outerGet());
    });
    return () => {
      release(reference);
    };
  }
  function cloneIfObject(value) {
    return typeof value === "object" ? JSON.parse(JSON.stringify(value)) : value;
  }
  function plugin(callback) {
    let callbacks = Array.isArray(callback) ? callback : [callback];
    callbacks.forEach((i2) => i2(alpine_default));
  }
  var stores = {};
  var isReactive = false;
  function store(name, value) {
    if (!isReactive) {
      stores = reactive(stores);
      isReactive = true;
    }
    if (value === void 0) {
      return stores[name];
    }
    stores[name] = value;
    if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") {
      stores[name].init();
    }
    initInterceptors2(stores[name]);
  }
  function getStores() {
    return stores;
  }
  var binds = {};
  function bind2(name, bindings) {
    let getBindings = typeof bindings !== "function" ? () => bindings : bindings;
    if (name instanceof Element) {
      return applyBindingsObject(name, getBindings());
    } else {
      binds[name] = getBindings;
    }
    return () => {
    };
  }
  function injectBindingProviders(obj) {
    Object.entries(binds).forEach(([name, callback]) => {
      Object.defineProperty(obj, name, {
        get() {
          return (...args) => {
            return callback(...args);
          };
        }
      });
    });
    return obj;
  }
  function applyBindingsObject(el, obj, original) {
    let cleanupRunners = [];
    while (cleanupRunners.length)
      cleanupRunners.pop()();
    let attributes = Object.entries(obj).map(([name, value]) => ({ name, value }));
    let staticAttributes = attributesOnly(attributes);
    attributes = attributes.map((attribute) => {
      if (staticAttributes.find((attr) => attr.name === attribute.name)) {
        return {
          name: `x-bind:${attribute.name}`,
          value: `"${attribute.value}"`
        };
      }
      return attribute;
    });
    directives(el, attributes, original).map((handle) => {
      cleanupRunners.push(handle.runCleanups);
      handle();
    });
    return () => {
      while (cleanupRunners.length)
        cleanupRunners.pop()();
    };
  }
  var datas = {};
  function data(name, callback) {
    datas[name] = callback;
  }
  function injectDataProviders(obj, context) {
    Object.entries(datas).forEach(([name, callback]) => {
      Object.defineProperty(obj, name, {
        get() {
          return (...args) => {
            return callback.bind(context)(...args);
          };
        },
        enumerable: false
      });
    });
    return obj;
  }
  var Alpine = {
    get reactive() {
      return reactive;
    },
    get release() {
      return release;
    },
    get effect() {
      return effect;
    },
    get raw() {
      return raw;
    },
    version: "3.13.3",
    flushAndStopDeferringMutations,
    dontAutoEvaluateFunctions,
    disableEffectScheduling,
    startObservingMutations,
    stopObservingMutations,
    setReactivityEngine,
    onAttributeRemoved,
    onAttributesAdded,
    closestDataStack,
    skipDuringClone,
    onlyDuringClone,
    addRootSelector,
    addInitSelector,
    interceptClone,
    addScopeToNode,
    deferMutations,
    mapAttributes,
    evaluateLater,
    interceptInit,
    setEvaluator,
    mergeProxies,
    extractProp,
    findClosest,
    onElRemoved,
    closestRoot,
    destroyTree,
    interceptor,
    // INTERNAL: not public API and is subject to change without major release.
    transition,
    // INTERNAL
    setStyles,
    // INTERNAL
    mutateDom,
    directive,
    entangle,
    throttle,
    debounce,
    evaluate,
    initTree,
    nextTick,
    prefixed: prefix,
    prefix: setPrefix,
    plugin,
    magic,
    store,
    start,
    clone,
    // INTERNAL
    cloneNode,
    // INTERNAL
    bound: getBinding,
    $data: scope,
    walk,
    data,
    bind: bind2
  };
  var alpine_default = Alpine;
  function makeMap(str, expectsLowerCase) {
    const map = /* @__PURE__ */ Object.create(null);
    const list = str.split(",");
    for (let i2 = 0; i2 < list.length; i2++) {
      map[list[i2]] = true;
    }
    return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
  }
  var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
  var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
  var EMPTY_OBJ = true ? Object.freeze({}) : {};
  var EMPTY_ARR = true ? Object.freeze([]) : [];
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty.call(val, key);
  var isArray = Array.isArray;
  var isMap = (val) => toTypeString(val) === "[object Map]";
  var isString = (val) => typeof val === "string";
  var isSymbol = (val) => typeof val === "symbol";
  var isObject = (val) => val !== null && typeof val === "object";
  var objectToString = Object.prototype.toString;
  var toTypeString = (value) => objectToString.call(value);
  var toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
  var cacheStringFunction = (fn) => {
    const cache = /* @__PURE__ */ Object.create(null);
    return (str) => {
      const hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  };
  var camelizeRE = /-(\w)/g;
  var camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_2, c2) => c2 ? c2.toUpperCase() : "");
  });
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
  var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
  var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
  var hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
  var targetMap = /* @__PURE__ */ new WeakMap();
  var effectStack = [];
  var activeEffect;
  var ITERATE_KEY = Symbol(true ? "iterate" : "");
  var MAP_KEY_ITERATE_KEY = Symbol(true ? "Map key iterate" : "");
  function isEffect(fn) {
    return fn && fn._isEffect === true;
  }
  function effect2(fn, options = EMPTY_OBJ) {
    if (isEffect(fn)) {
      fn = fn.raw;
    }
    const effect3 = createReactiveEffect(fn, options);
    if (!options.lazy) {
      effect3();
    }
    return effect3;
  }
  function stop(effect3) {
    if (effect3.active) {
      cleanup(effect3);
      if (effect3.options.onStop) {
        effect3.options.onStop();
      }
      effect3.active = false;
    }
  }
  var uid = 0;
  function createReactiveEffect(fn, options) {
    const effect3 = function reactiveEffect() {
      if (!effect3.active) {
        return fn();
      }
      if (!effectStack.includes(effect3)) {
        cleanup(effect3);
        try {
          enableTracking();
          effectStack.push(effect3);
          activeEffect = effect3;
          return fn();
        } finally {
          effectStack.pop();
          resetTracking();
          activeEffect = effectStack[effectStack.length - 1];
        }
      }
    };
    effect3.id = uid++;
    effect3.allowRecurse = !!options.allowRecurse;
    effect3._isEffect = true;
    effect3.active = true;
    effect3.raw = fn;
    effect3.deps = [];
    effect3.options = options;
    return effect3;
  }
  function cleanup(effect3) {
    const { deps } = effect3;
    if (deps.length) {
      for (let i2 = 0; i2 < deps.length; i2++) {
        deps[i2].delete(effect3);
      }
      deps.length = 0;
    }
  }
  var shouldTrack = true;
  var trackStack = [];
  function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
  }
  function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
  }
  function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
  }
  function track(target, type, key) {
    if (!shouldTrack || activeEffect === void 0) {
      return;
    }
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = /* @__PURE__ */ new Set());
    }
    if (!dep.has(activeEffect)) {
      dep.add(activeEffect);
      activeEffect.deps.push(dep);
      if (activeEffect.options.onTrack) {
        activeEffect.options.onTrack({
          effect: activeEffect,
          target,
          type,
          key
        });
      }
    }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
      return;
    }
    const effects = /* @__PURE__ */ new Set();
    const add2 = (effectsToAdd) => {
      if (effectsToAdd) {
        effectsToAdd.forEach((effect3) => {
          if (effect3 !== activeEffect || effect3.allowRecurse) {
            effects.add(effect3);
          }
        });
      }
    };
    if (type === "clear") {
      depsMap.forEach(add2);
    } else if (key === "length" && isArray(target)) {
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 >= newValue) {
          add2(dep);
        }
      });
    } else {
      if (key !== void 0) {
        add2(depsMap.get(key));
      }
      switch (type) {
        case "add":
          if (!isArray(target)) {
            add2(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isIntegerKey(key)) {
            add2(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!isArray(target)) {
            add2(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            add2(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
    const run = (effect3) => {
      if (effect3.options.onTrigger) {
        effect3.options.onTrigger({
          effect: effect3,
          target,
          key,
          type,
          newValue,
          oldValue,
          oldTarget
        });
      }
      if (effect3.options.scheduler) {
        effect3.options.scheduler(effect3);
      } else {
        effect3();
      }
    };
    effects.forEach(run);
  }
  var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
  var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
  var get2 = /* @__PURE__ */ createGetter();
  var readonlyGet = /* @__PURE__ */ createGetter(true);
  var arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
  function createArrayInstrumentations() {
    const instrumentations = {};
    ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
      instrumentations[key] = function(...args) {
        const arr = toRaw(this);
        for (let i2 = 0, l2 = this.length; i2 < l2; i2++) {
          track(arr, "get", i2 + "");
        }
        const res = arr[key](...args);
        if (res === -1 || res === false) {
          return arr[key](...args.map(toRaw));
        } else {
          return res;
        }
      };
    });
    ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
      instrumentations[key] = function(...args) {
        pauseTracking();
        const res = toRaw(this)[key].apply(this, args);
        resetTracking();
        return res;
      };
    });
    return instrumentations;
  }
  function createGetter(isReadonly = false, shallow = false) {
    return function get3(target, key, receiver) {
      if (key === "__v_isReactive") {
        return !isReadonly;
      } else if (key === "__v_isReadonly") {
        return isReadonly;
      } else if (key === "__v_raw" && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
        return target;
      }
      const targetIsArray = isArray(target);
      if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      const res = Reflect.get(target, key, receiver);
      if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        return res;
      }
      if (!isReadonly) {
        track(target, "get", key);
      }
      if (shallow) {
        return res;
      }
      if (isRef(res)) {
        const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
        return shouldUnwrap ? res.value : res;
      }
      if (isObject(res)) {
        return isReadonly ? readonly(res) : reactive2(res);
      }
      return res;
    };
  }
  var set2 = /* @__PURE__ */ createSetter();
  function createSetter(shallow = false) {
    return function set3(target, key, value, receiver) {
      let oldValue = target[key];
      if (!shallow) {
        value = toRaw(value);
        oldValue = toRaw(oldValue);
        if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        }
      }
      const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
      const result = Reflect.set(target, key, value, receiver);
      if (target === toRaw(receiver)) {
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
      }
      return result;
    };
  }
  function deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  function ownKeys(target) {
    track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
  }
  var mutableHandlers = {
    get: get2,
    set: set2,
    deleteProperty,
    has,
    ownKeys
  };
  var readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
      if (true) {
        console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    },
    deleteProperty(target, key) {
      if (true) {
        console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    }
  };
  var toReactive = (value) => isObject(value) ? reactive2(value) : value;
  var toReadonly = (value) => isObject(value) ? readonly(value) : value;
  var toShallow = (value) => value;
  var getProto = (v2) => Reflect.getPrototypeOf(v2);
  function get$1(target, key, isReadonly = false, isShallow = false) {
    target = target[
      "__v_raw"
      /* RAW */
    ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly && track(rawTarget, "get", key);
    }
    !isReadonly && track(rawTarget, "get", rawKey);
    const { has: has2 } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) {
      return wrap(target.get(key));
    } else if (has2.call(rawTarget, rawKey)) {
      return wrap(target.get(rawKey));
    } else if (target !== rawTarget) {
      target.get(key);
    }
  }
  function has$1(key, isReadonly = false) {
    const target = this[
      "__v_raw"
      /* RAW */
    ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly && track(rawTarget, "has", key);
    }
    !isReadonly && track(rawTarget, "has", rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
  }
  function size(target, isReadonly = false) {
    target = target[
      "__v_raw"
      /* RAW */
    ];
    !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
  }
  function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
      target.add(value);
      trigger(target, "add", value, value);
    }
    return this;
  }
  function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (true) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3.call(target, key);
    target.set(key, value);
    if (!hadKey) {
      trigger(target, "add", key, value);
    } else if (hasChanged(value, oldValue)) {
      trigger(target, "set", key, value, oldValue);
    }
    return this;
  }
  function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (true) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3 ? get3.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = true ? isMap(target) ? new Map(target) : new Set(target) : void 0;
    const result = target.clear();
    if (hadItems) {
      trigger(target, "clear", void 0, void 0, oldTarget);
    }
    return result;
  }
  function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
      const observed = this;
      const target = observed[
        "__v_raw"
        /* RAW */
      ];
      const rawTarget = toRaw(target);
      const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
      !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    };
  }
  function createIterableMethod(method, isReadonly, isShallow) {
    return function(...args) {
      const target = this[
        "__v_raw"
        /* RAW */
      ];
      const rawTarget = toRaw(target);
      const targetIsMap = isMap(rawTarget);
      const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
      const isKeyOnly = method === "keys" && targetIsMap;
      const innerIterator = target[method](...args);
      const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
      !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
      return {
        // iterator protocol
        next() {
          const { value, done } = innerIterator.next();
          return done ? { value, done } : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        },
        // iterable protocol
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function createReadonlyMethod(type) {
    return function(...args) {
      if (true) {
        const key = args[0] ? `on key "${args[0]}" ` : ``;
        console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
      }
      return type === "delete" ? false : this;
    };
  }
  function createInstrumentations() {
    const mutableInstrumentations2 = {
      get(key) {
        return get$1(this, key);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add,
      set: set$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, false)
    };
    const shallowInstrumentations2 = {
      get(key) {
        return get$1(this, key, false, true);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add,
      set: set$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, true)
    };
    const readonlyInstrumentations2 = {
      get(key) {
        return get$1(this, key, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod(
        "add"
        /* ADD */
      ),
      set: createReadonlyMethod(
        "set"
        /* SET */
      ),
      delete: createReadonlyMethod(
        "delete"
        /* DELETE */
      ),
      clear: createReadonlyMethod(
        "clear"
        /* CLEAR */
      ),
      forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations2 = {
      get(key) {
        return get$1(this, key, true, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod(
        "add"
        /* ADD */
      ),
      set: createReadonlyMethod(
        "set"
        /* SET */
      ),
      delete: createReadonlyMethod(
        "delete"
        /* DELETE */
      ),
      clear: createReadonlyMethod(
        "clear"
        /* CLEAR */
      ),
      forEach: createForEach(true, true)
    };
    const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
    iteratorMethods.forEach((method) => {
      mutableInstrumentations2[method] = createIterableMethod(method, false, false);
      readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
      shallowInstrumentations2[method] = createIterableMethod(method, false, true);
      shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
    });
    return [
      mutableInstrumentations2,
      readonlyInstrumentations2,
      shallowInstrumentations2,
      shallowReadonlyInstrumentations2
    ];
  }
  var [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
  function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver) => {
      if (key === "__v_isReactive") {
        return !isReadonly;
      } else if (key === "__v_isReadonly") {
        return isReadonly;
      } else if (key === "__v_raw") {
        return target;
      }
      return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
  }
  var mutableCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, false)
  };
  var readonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, false)
  };
  function checkIdentityKeys(target, has2, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has2.call(target, rawKey)) {
      const type = toRawType(target);
      console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
  }
  var reactiveMap = /* @__PURE__ */ new WeakMap();
  var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
  var readonlyMap = /* @__PURE__ */ new WeakMap();
  var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
  function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function getTargetType(value) {
    return value[
      "__v_skip"
      /* SKIP */
    ] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
  }
  function reactive2(target) {
    if (target && target[
      "__v_isReadonly"
      /* IS_READONLY */
    ]) {
      return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
  }
  function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
  }
  function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
      if (true) {
        console.warn(`value cannot be made reactive: ${String(target)}`);
      }
      return target;
    }
    if (target[
      "__v_raw"
      /* RAW */
    ] && !(isReadonly && target[
      "__v_isReactive"
      /* IS_REACTIVE */
    ])) {
      return target;
    }
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
      return existingProxy;
    }
    const targetType = getTargetType(target);
    if (targetType === 0) {
      return target;
    }
    const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
  }
  function toRaw(observed) {
    return observed && toRaw(observed[
      "__v_raw"
      /* RAW */
    ]) || observed;
  }
  function isRef(r2) {
    return Boolean(r2 && r2.__v_isRef === true);
  }
  magic("nextTick", () => nextTick);
  magic("dispatch", (el) => dispatch.bind(dispatch, el));
  magic("watch", (el, { evaluateLater: evaluateLater2, effect: effect3 }) => (key, callback) => {
    let evaluate2 = evaluateLater2(key);
    let firstTime = true;
    let oldValue;
    let effectReference = effect3(() => evaluate2((value) => {
      JSON.stringify(value);
      if (!firstTime) {
        queueMicrotask(() => {
          callback(value, oldValue);
          oldValue = value;
        });
      } else {
        oldValue = value;
      }
      firstTime = false;
    }));
    el._x_effects.delete(effectReference);
  });
  magic("store", getStores);
  magic("data", (el) => scope(el));
  magic("root", (el) => closestRoot(el));
  magic("refs", (el) => {
    if (el._x_refs_proxy)
      return el._x_refs_proxy;
    el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
    return el._x_refs_proxy;
  });
  function getArrayOfRefObject(el) {
    let refObjects = [];
    let currentEl = el;
    while (currentEl) {
      if (currentEl._x_refs)
        refObjects.push(currentEl._x_refs);
      currentEl = currentEl.parentNode;
    }
    return refObjects;
  }
  var globalIdMemo = {};
  function findAndIncrementId(name) {
    if (!globalIdMemo[name])
      globalIdMemo[name] = 0;
    return ++globalIdMemo[name];
  }
  function closestIdRoot(el, name) {
    return findClosest(el, (element) => {
      if (element._x_ids && element._x_ids[name])
        return true;
    });
  }
  function setIdRoot(el, name) {
    if (!el._x_ids)
      el._x_ids = {};
    if (!el._x_ids[name])
      el._x_ids[name] = findAndIncrementId(name);
  }
  magic("id", (el) => (name, key = null) => {
    let root = closestIdRoot(el, name);
    let id = root ? root._x_ids[name] : findAndIncrementId(name);
    return key ? `${name}-${id}-${key}` : `${name}-${id}`;
  });
  magic("el", (el) => el);
  warnMissingPluginMagic("Focus", "focus", "focus");
  warnMissingPluginMagic("Persist", "persist", "persist");
  function warnMissingPluginMagic(name, magicName, slug) {
    magic(magicName, (el) => warn(`You can't use [$${magicName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
  }
  directive("modelable", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2, cleanup: cleanup2 }) => {
    let func = evaluateLater2(expression);
    let innerGet = () => {
      let result;
      func((i2) => result = i2);
      return result;
    };
    let evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`);
    let innerSet = (val) => evaluateInnerSet(() => {
    }, { scope: { "__placeholder": val } });
    let initialValue = innerGet();
    innerSet(initialValue);
    queueMicrotask(() => {
      if (!el._x_model)
        return;
      el._x_removeModelListeners["default"]();
      let outerGet = el._x_model.get;
      let outerSet = el._x_model.set;
      let releaseEntanglement = entangle(
        {
          get() {
            return outerGet();
          },
          set(value) {
            outerSet(value);
          }
        },
        {
          get() {
            return innerGet();
          },
          set(value) {
            innerSet(value);
          }
        }
      );
      cleanup2(releaseEntanglement);
    });
  });
  directive("teleport", (el, { modifiers, expression }, { cleanup: cleanup2 }) => {
    if (el.tagName.toLowerCase() !== "template")
      warn("x-teleport can only be used on a <template> tag", el);
    let target = getTarget(expression);
    let clone2 = el.content.cloneNode(true).firstElementChild;
    el._x_teleport = clone2;
    clone2._x_teleportBack = el;
    el.setAttribute("data-teleport-template", true);
    clone2.setAttribute("data-teleport-target", true);
    if (el._x_forwardEvents) {
      el._x_forwardEvents.forEach((eventName) => {
        clone2.addEventListener(eventName, (e2) => {
          e2.stopPropagation();
          el.dispatchEvent(new e2.constructor(e2.type, e2));
        });
      });
    }
    addScopeToNode(clone2, {}, el);
    let placeInDom = (clone3, target2, modifiers2) => {
      if (modifiers2.includes("prepend")) {
        target2.parentNode.insertBefore(clone3, target2);
      } else if (modifiers2.includes("append")) {
        target2.parentNode.insertBefore(clone3, target2.nextSibling);
      } else {
        target2.appendChild(clone3);
      }
    };
    mutateDom(() => {
      placeInDom(clone2, target, modifiers);
      initTree(clone2);
      clone2._x_ignore = true;
    });
    el._x_teleportPutBack = () => {
      let target2 = getTarget(expression);
      mutateDom(() => {
        placeInDom(el._x_teleport, target2, modifiers);
      });
    };
    cleanup2(() => clone2.remove());
  });
  var teleportContainerDuringClone = document.createElement("div");
  function getTarget(expression) {
    let target = skipDuringClone(() => {
      return document.querySelector(expression);
    }, () => {
      return teleportContainerDuringClone;
    })();
    if (!target)
      warn(`Cannot find x-teleport element for selector: "${expression}"`);
    return target;
  }
  var handler = () => {
  };
  handler.inline = (el, { modifiers }, { cleanup: cleanup2 }) => {
    modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
    cleanup2(() => {
      modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
    });
  };
  directive("ignore", handler);
  directive("effect", skipDuringClone((el, { expression }, { effect: effect3 }) => {
    effect3(evaluateLater(el, expression));
  }));
  function on(el, event, modifiers, callback) {
    let listenerTarget = el;
    let handler4 = (e2) => callback(e2);
    let options = {};
    let wrapHandler = (callback2, wrapper) => (e2) => wrapper(callback2, e2);
    if (modifiers.includes("dot"))
      event = dotSyntax(event);
    if (modifiers.includes("camel"))
      event = camelCase2(event);
    if (modifiers.includes("passive"))
      options.passive = true;
    if (modifiers.includes("capture"))
      options.capture = true;
    if (modifiers.includes("window"))
      listenerTarget = window;
    if (modifiers.includes("document"))
      listenerTarget = document;
    if (modifiers.includes("debounce")) {
      let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
      let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
      handler4 = debounce(handler4, wait);
    }
    if (modifiers.includes("throttle")) {
      let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
      let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
      handler4 = throttle(handler4, wait);
    }
    if (modifiers.includes("prevent"))
      handler4 = wrapHandler(handler4, (next, e2) => {
        e2.preventDefault();
        next(e2);
      });
    if (modifiers.includes("stop"))
      handler4 = wrapHandler(handler4, (next, e2) => {
        e2.stopPropagation();
        next(e2);
      });
    if (modifiers.includes("self"))
      handler4 = wrapHandler(handler4, (next, e2) => {
        e2.target === el && next(e2);
      });
    if (modifiers.includes("away") || modifiers.includes("outside")) {
      listenerTarget = document;
      handler4 = wrapHandler(handler4, (next, e2) => {
        if (el.contains(e2.target))
          return;
        if (e2.target.isConnected === false)
          return;
        if (el.offsetWidth < 1 && el.offsetHeight < 1)
          return;
        if (el._x_isShown === false)
          return;
        next(e2);
      });
    }
    if (modifiers.includes("once")) {
      handler4 = wrapHandler(handler4, (next, e2) => {
        next(e2);
        listenerTarget.removeEventListener(event, handler4, options);
      });
    }
    handler4 = wrapHandler(handler4, (next, e2) => {
      if (isKeyEvent(event)) {
        if (isListeningForASpecificKeyThatHasntBeenPressed(e2, modifiers)) {
          return;
        }
      }
      next(e2);
    });
    listenerTarget.addEventListener(event, handler4, options);
    return () => {
      listenerTarget.removeEventListener(event, handler4, options);
    };
  }
  function dotSyntax(subject) {
    return subject.replace(/-/g, ".");
  }
  function camelCase2(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function kebabCase2(subject) {
    if ([" ", "_"].includes(
      subject
    ))
      return subject;
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
  }
  function isKeyEvent(event) {
    return ["keydown", "keyup"].includes(event);
  }
  function isListeningForASpecificKeyThatHasntBeenPressed(e2, modifiers) {
    let keyModifiers = modifiers.filter((i2) => {
      return !["window", "document", "prevent", "stop", "once", "capture"].includes(i2);
    });
    if (keyModifiers.includes("debounce")) {
      let debounceIndex = keyModifiers.indexOf("debounce");
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.includes("throttle")) {
      let debounceIndex = keyModifiers.indexOf("throttle");
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.length === 0)
      return false;
    if (keyModifiers.length === 1 && keyToModifiers(e2.key).includes(keyModifiers[0]))
      return false;
    const systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier) => keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter((i2) => !selectedSystemKeyModifiers.includes(i2));
    if (selectedSystemKeyModifiers.length > 0) {
      const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier) => {
        if (modifier === "cmd" || modifier === "super")
          modifier = "meta";
        return e2[`${modifier}Key`];
      });
      if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
        if (keyToModifiers(e2.key).includes(keyModifiers[0]))
          return false;
      }
    }
    return true;
  }
  function keyToModifiers(key) {
    if (!key)
      return [];
    key = kebabCase2(key);
    let modifierToKeyMap = {
      "ctrl": "control",
      "slash": "/",
      "space": " ",
      "spacebar": " ",
      "cmd": "meta",
      "esc": "escape",
      "up": "arrow-up",
      "down": "arrow-down",
      "left": "arrow-left",
      "right": "arrow-right",
      "period": ".",
      "equal": "=",
      "minus": "-",
      "underscore": "_"
    };
    modifierToKeyMap[key] = key;
    return Object.keys(modifierToKeyMap).map((modifier) => {
      if (modifierToKeyMap[modifier] === key)
        return modifier;
    }).filter((modifier) => modifier);
  }
  directive("model", (el, { modifiers, expression }, { effect: effect3, cleanup: cleanup2 }) => {
    let scopeTarget = el;
    if (modifiers.includes("parent")) {
      scopeTarget = el.parentNode;
    }
    let evaluateGet = evaluateLater(scopeTarget, expression);
    let evaluateSet;
    if (typeof expression === "string") {
      evaluateSet = evaluateLater(scopeTarget, `${expression} = __placeholder`);
    } else if (typeof expression === "function" && typeof expression() === "string") {
      evaluateSet = evaluateLater(scopeTarget, `${expression()} = __placeholder`);
    } else {
      evaluateSet = () => {
      };
    }
    let getValue = () => {
      let result;
      evaluateGet((value) => result = value);
      return isGetterSetter(result) ? result.get() : result;
    };
    let setValue = (value) => {
      let result;
      evaluateGet((value2) => result = value2);
      if (isGetterSetter(result)) {
        result.set(value);
      } else {
        evaluateSet(() => {
        }, {
          scope: { "__placeholder": value }
        });
      }
    };
    if (typeof expression === "string" && el.type === "radio") {
      mutateDom(() => {
        if (!el.hasAttribute("name"))
          el.setAttribute("name", expression);
      });
    }
    var event = el.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
    let removeListener = isCloning ? () => {
    } : on(el, event, modifiers, (e2) => {
      setValue(getInputValue(el, modifiers, e2, getValue()));
    });
    if (modifiers.includes("fill")) {
      if ([null, ""].includes(getValue()) || el.type === "checkbox" && Array.isArray(getValue())) {
        el.dispatchEvent(new Event(event, {}));
      }
    }
    if (!el._x_removeModelListeners)
      el._x_removeModelListeners = {};
    el._x_removeModelListeners["default"] = removeListener;
    cleanup2(() => el._x_removeModelListeners["default"]());
    if (el.form) {
      let removeResetListener = on(el.form, "reset", [], (e2) => {
        nextTick(() => el._x_model && el._x_model.set(el.value));
      });
      cleanup2(() => removeResetListener());
    }
    el._x_model = {
      get() {
        return getValue();
      },
      set(value) {
        setValue(value);
      }
    };
    el._x_forceModelUpdate = (value) => {
      if (value === void 0 && typeof expression === "string" && expression.match(/\./))
        value = "";
      window.fromModel = true;
      mutateDom(() => bind(el, "value", value));
      delete window.fromModel;
    };
    effect3(() => {
      let value = getValue();
      if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el))
        return;
      el._x_forceModelUpdate(value);
    });
  });
  function getInputValue(el, modifiers, event, currentValue) {
    return mutateDom(() => {
      if (event instanceof CustomEvent && event.detail !== void 0)
        return event.detail !== null && event.detail !== void 0 ? event.detail : event.target.value;
      else if (el.type === "checkbox") {
        if (Array.isArray(currentValue)) {
          let newValue = null;
          if (modifiers.includes("number")) {
            newValue = safeParseNumber(event.target.value);
          } else if (modifiers.includes("boolean")) {
            newValue = safeParseBoolean(event.target.value);
          } else {
            newValue = event.target.value;
          }
          return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter((el2) => !checkedAttrLooseCompare2(el2, newValue));
        } else {
          return event.target.checked;
        }
      } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
        if (modifiers.includes("number")) {
          return Array.from(event.target.selectedOptions).map((option) => {
            let rawValue = option.value || option.text;
            return safeParseNumber(rawValue);
          });
        } else if (modifiers.includes("boolean")) {
          return Array.from(event.target.selectedOptions).map((option) => {
            let rawValue = option.value || option.text;
            return safeParseBoolean(rawValue);
          });
        }
        return Array.from(event.target.selectedOptions).map((option) => {
          return option.value || option.text;
        });
      } else {
        if (modifiers.includes("number")) {
          return safeParseNumber(event.target.value);
        } else if (modifiers.includes("boolean")) {
          return safeParseBoolean(event.target.value);
        }
        return modifiers.includes("trim") ? event.target.value.trim() : event.target.value;
      }
    });
  }
  function safeParseNumber(rawValue) {
    let number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric2(number) ? number : rawValue;
  }
  function checkedAttrLooseCompare2(valueA, valueB) {
    return valueA == valueB;
  }
  function isNumeric2(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function isGetterSetter(value) {
    return value !== null && typeof value === "object" && typeof value.get === "function" && typeof value.set === "function";
  }
  directive("cloak", (el) => queueMicrotask(() => mutateDom(() => el.removeAttribute(prefix("cloak")))));
  addInitSelector(() => `[${prefix("init")}]`);
  directive("init", skipDuringClone((el, { expression }, { evaluate: evaluate2 }) => {
    if (typeof expression === "string") {
      return !!expression.trim() && evaluate2(expression, {}, false);
    }
    return evaluate2(expression, {}, false);
  }));
  directive("text", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let evaluate2 = evaluateLater2(expression);
    effect3(() => {
      evaluate2((value) => {
        mutateDom(() => {
          el.textContent = value;
        });
      });
    });
  });
  directive("html", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let evaluate2 = evaluateLater2(expression);
    effect3(() => {
      evaluate2((value) => {
        mutateDom(() => {
          el.innerHTML = value;
          el._x_ignoreSelf = true;
          initTree(el);
          delete el._x_ignoreSelf;
        });
      });
    });
  });
  mapAttributes(startingWith(":", into(prefix("bind:"))));
  var handler2 = (el, { value, modifiers, expression, original }, { effect: effect3 }) => {
    if (!value) {
      let bindingProviders = {};
      injectBindingProviders(bindingProviders);
      let getBindings = evaluateLater(el, expression);
      getBindings((bindings) => {
        applyBindingsObject(el, bindings, original);
      }, { scope: bindingProviders });
      return;
    }
    if (value === "key")
      return storeKeyForXFor(el, expression);
    if (el._x_inlineBindings && el._x_inlineBindings[value] && el._x_inlineBindings[value].extract) {
      return;
    }
    let evaluate2 = evaluateLater(el, expression);
    effect3(() => evaluate2((result) => {
      if (result === void 0 && typeof expression === "string" && expression.match(/\./)) {
        result = "";
      }
      mutateDom(() => bind(el, value, result, modifiers));
    }));
  };
  handler2.inline = (el, { value, modifiers, expression }) => {
    if (!value)
      return;
    if (!el._x_inlineBindings)
      el._x_inlineBindings = {};
    el._x_inlineBindings[value] = { expression, extract: false };
  };
  directive("bind", handler2);
  function storeKeyForXFor(el, expression) {
    el._x_keyExpression = expression;
  }
  addRootSelector(() => `[${prefix("data")}]`);
  directive("data", (el, { expression }, { cleanup: cleanup2 }) => {
    if (shouldSkipRegisteringDataDuringClone(el))
      return;
    expression = expression === "" ? "{}" : expression;
    let magicContext = {};
    injectMagics(magicContext, el);
    let dataProviderContext = {};
    injectDataProviders(dataProviderContext, magicContext);
    let data2 = evaluate(el, expression, { scope: dataProviderContext });
    if (data2 === void 0 || data2 === true)
      data2 = {};
    injectMagics(data2, el);
    let reactiveData = reactive(data2);
    initInterceptors2(reactiveData);
    let undo = addScopeToNode(el, reactiveData);
    reactiveData["init"] && evaluate(el, reactiveData["init"]);
    cleanup2(() => {
      reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
      undo();
    });
  });
  interceptClone((from, to) => {
    if (from._x_dataStack) {
      to._x_dataStack = from._x_dataStack;
      to.setAttribute("data-has-alpine-state", true);
    }
  });
  function shouldSkipRegisteringDataDuringClone(el) {
    if (!isCloning)
      return false;
    if (isCloningLegacy)
      return true;
    return el.hasAttribute("data-has-alpine-state");
  }
  directive("show", (el, { modifiers, expression }, { effect: effect3 }) => {
    let evaluate2 = evaluateLater(el, expression);
    if (!el._x_doHide)
      el._x_doHide = () => {
        mutateDom(() => {
          el.style.setProperty("display", "none", modifiers.includes("important") ? "important" : void 0);
        });
      };
    if (!el._x_doShow)
      el._x_doShow = () => {
        mutateDom(() => {
          if (el.style.length === 1 && el.style.display === "none") {
            el.removeAttribute("style");
          } else {
            el.style.removeProperty("display");
          }
        });
      };
    let hide = () => {
      el._x_doHide();
      el._x_isShown = false;
    };
    let show = () => {
      el._x_doShow();
      el._x_isShown = true;
    };
    let clickAwayCompatibleShow = () => setTimeout(show);
    let toggle = once(
      (value) => value ? show() : hide(),
      (value) => {
        if (typeof el._x_toggleAndCascadeWithTransitions === "function") {
          el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
        } else {
          value ? clickAwayCompatibleShow() : hide();
        }
      }
    );
    let oldValue;
    let firstTime = true;
    effect3(() => evaluate2((value) => {
      if (!firstTime && value === oldValue)
        return;
      if (modifiers.includes("immediate"))
        value ? clickAwayCompatibleShow() : hide();
      toggle(value);
      oldValue = value;
      firstTime = false;
    }));
  });
  directive("for", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
    let iteratorNames = parseForExpression(expression);
    let evaluateItems = evaluateLater(el, iteratorNames.items);
    let evaluateKey = evaluateLater(
      el,
      // the x-bind:key expression is stored for our use instead of evaluated.
      el._x_keyExpression || "index"
    );
    el._x_prevKeys = [];
    el._x_lookup = {};
    effect3(() => loop(el, iteratorNames, evaluateItems, evaluateKey));
    cleanup2(() => {
      Object.values(el._x_lookup).forEach((el2) => el2.remove());
      delete el._x_prevKeys;
      delete el._x_lookup;
    });
  });
  function loop(el, iteratorNames, evaluateItems, evaluateKey) {
    let isObject2 = (i2) => typeof i2 === "object" && !Array.isArray(i2);
    let templateEl = el;
    evaluateItems((items) => {
      if (isNumeric3(items) && items >= 0) {
        items = Array.from(Array(items).keys(), (i2) => i2 + 1);
      }
      if (items === void 0)
        items = [];
      let lookup = el._x_lookup;
      let prevKeys = el._x_prevKeys;
      let scopes = [];
      let keys = [];
      if (isObject2(items)) {
        items = Object.entries(items).map(([key, value]) => {
          let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
          evaluateKey((value2) => keys.push(value2), { scope: __spreadValues({ index: key }, scope2) });
          scopes.push(scope2);
        });
      } else {
        for (let i2 = 0; i2 < items.length; i2++) {
          let scope2 = getIterationScopeVariables(iteratorNames, items[i2], i2, items);
          evaluateKey((value) => keys.push(value), { scope: __spreadValues({ index: i2 }, scope2) });
          scopes.push(scope2);
        }
      }
      let adds = [];
      let moves = [];
      let removes = [];
      let sames = [];
      for (let i2 = 0; i2 < prevKeys.length; i2++) {
        let key = prevKeys[i2];
        if (keys.indexOf(key) === -1)
          removes.push(key);
      }
      prevKeys = prevKeys.filter((key) => !removes.includes(key));
      let lastKey = "template";
      for (let i2 = 0; i2 < keys.length; i2++) {
        let key = keys[i2];
        let prevIndex = prevKeys.indexOf(key);
        if (prevIndex === -1) {
          prevKeys.splice(i2, 0, key);
          adds.push([lastKey, i2]);
        } else if (prevIndex !== i2) {
          let keyInSpot = prevKeys.splice(i2, 1)[0];
          let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
          prevKeys.splice(i2, 0, keyForSpot);
          prevKeys.splice(prevIndex, 0, keyInSpot);
          moves.push([keyInSpot, keyForSpot]);
        } else {
          sames.push(key);
        }
        lastKey = key;
      }
      for (let i2 = 0; i2 < removes.length; i2++) {
        let key = removes[i2];
        if (!!lookup[key]._x_effects) {
          lookup[key]._x_effects.forEach(dequeueJob);
        }
        lookup[key].remove();
        lookup[key] = null;
        delete lookup[key];
      }
      for (let i2 = 0; i2 < moves.length; i2++) {
        let [keyInSpot, keyForSpot] = moves[i2];
        let elInSpot = lookup[keyInSpot];
        let elForSpot = lookup[keyForSpot];
        let marker = document.createElement("div");
        mutateDom(() => {
          if (!elForSpot)
            warn(`x-for ":key" is undefined or invalid`, templateEl);
          elForSpot.after(marker);
          elInSpot.after(elForSpot);
          elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
          marker.before(elInSpot);
          elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
          marker.remove();
        });
        elForSpot._x_refreshXForScope(scopes[keys.indexOf(keyForSpot)]);
      }
      for (let i2 = 0; i2 < adds.length; i2++) {
        let [lastKey2, index] = adds[i2];
        let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
        if (lastEl._x_currentIfEl)
          lastEl = lastEl._x_currentIfEl;
        let scope2 = scopes[index];
        let key = keys[index];
        let clone2 = document.importNode(templateEl.content, true).firstElementChild;
        let reactiveScope = reactive(scope2);
        addScopeToNode(clone2, reactiveScope, templateEl);
        clone2._x_refreshXForScope = (newScope) => {
          Object.entries(newScope).forEach(([key2, value]) => {
            reactiveScope[key2] = value;
          });
        };
        mutateDom(() => {
          lastEl.after(clone2);
          initTree(clone2);
        });
        if (typeof key === "object") {
          warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
        }
        lookup[key] = clone2;
      }
      for (let i2 = 0; i2 < sames.length; i2++) {
        lookup[sames[i2]]._x_refreshXForScope(scopes[keys.indexOf(sames[i2])]);
      }
      templateEl._x_prevKeys = keys;
    });
  }
  function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\s*\(|\)\s*$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = expression.match(forAliasRE);
    if (!inMatch)
      return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].replace(stripParensRE, "").trim();
    let iteratorMatch = item.match(forIteratorRE);
    if (iteratorMatch) {
      res.item = item.replace(forIteratorRE, "").trim();
      res.index = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.collection = iteratorMatch[2].trim();
      }
    } else {
      res.item = item;
    }
    return res;
  }
  function getIterationScopeVariables(iteratorNames, item, index, items) {
    let scopeVariables = {};
    if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
      let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i2) => i2.trim());
      names.forEach((name, i2) => {
        scopeVariables[name] = item[i2];
      });
    } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
      let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i2) => i2.trim());
      names.forEach((name) => {
        scopeVariables[name] = item[name];
      });
    } else {
      scopeVariables[iteratorNames.item] = item;
    }
    if (iteratorNames.index)
      scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection)
      scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
  }
  function isNumeric3(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function handler3() {
  }
  handler3.inline = (el, { expression }, { cleanup: cleanup2 }) => {
    let root = closestRoot(el);
    if (!root._x_refs)
      root._x_refs = {};
    root._x_refs[expression] = el;
    cleanup2(() => delete root._x_refs[expression]);
  };
  directive("ref", handler3);
  directive("if", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
    if (el.tagName.toLowerCase() !== "template")
      warn("x-if can only be used on a <template> tag", el);
    let evaluate2 = evaluateLater(el, expression);
    let show = () => {
      if (el._x_currentIfEl)
        return el._x_currentIfEl;
      let clone2 = el.content.cloneNode(true).firstElementChild;
      addScopeToNode(clone2, {}, el);
      mutateDom(() => {
        el.after(clone2);
        initTree(clone2);
      });
      el._x_currentIfEl = clone2;
      el._x_undoIf = () => {
        walk(clone2, (node) => {
          if (!!node._x_effects) {
            node._x_effects.forEach(dequeueJob);
          }
        });
        clone2.remove();
        delete el._x_currentIfEl;
      };
      return clone2;
    };
    let hide = () => {
      if (!el._x_undoIf)
        return;
      el._x_undoIf();
      delete el._x_undoIf;
    };
    effect3(() => evaluate2((value) => {
      value ? show() : hide();
    }));
    cleanup2(() => el._x_undoIf && el._x_undoIf());
  });
  directive("id", (el, { expression }, { evaluate: evaluate2 }) => {
    let names = evaluate2(expression);
    names.forEach((name) => setIdRoot(el, name));
  });
  mapAttributes(startingWith("@", into(prefix("on:"))));
  directive("on", skipDuringClone((el, { value, modifiers, expression }, { cleanup: cleanup2 }) => {
    let evaluate2 = expression ? evaluateLater(el, expression) : () => {
    };
    if (el.tagName.toLowerCase() === "template") {
      if (!el._x_forwardEvents)
        el._x_forwardEvents = [];
      if (!el._x_forwardEvents.includes(value))
        el._x_forwardEvents.push(value);
    }
    let removeListener = on(el, value, modifiers, (e2) => {
      evaluate2(() => {
      }, { scope: { "$event": e2 }, params: [e2] });
    });
    cleanup2(() => removeListener());
  }));
  warnMissingPluginDirective("Collapse", "collapse", "collapse");
  warnMissingPluginDirective("Intersect", "intersect", "intersect");
  warnMissingPluginDirective("Focus", "trap", "focus");
  warnMissingPluginDirective("Mask", "mask", "mask");
  function warnMissingPluginDirective(name, directiveName, slug) {
    directive(directiveName, (el) => warn(`You can't use [x-${directiveName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
  }
  alpine_default.setEvaluator(normalEvaluator);
  alpine_default.setReactivityEngine({ reactive: reactive2, effect: effect2, release: stop, raw: toRaw });
  var src_default = alpine_default;
  var module_default = src_default;

  // node_modules/@alpinejs/persist/dist/module.esm.js
  function src_default2(Alpine2) {
    let persist = () => {
      let alias;
      let storage;
      try {
        storage = localStorage;
      } catch (e2) {
        console.error(e2);
        console.warn("Alpine: $persist is using temporary storage since localStorage is unavailable.");
        let dummy = /* @__PURE__ */ new Map();
        storage = {
          getItem: dummy.get.bind(dummy),
          setItem: dummy.set.bind(dummy)
        };
      }
      return Alpine2.interceptor((initialValue, getter, setter, path, key) => {
        let lookup = alias || `_x_${path}`;
        let initial = storageHas(lookup, storage) ? storageGet(lookup, storage) : initialValue;
        setter(initial);
        Alpine2.effect(() => {
          let value = getter();
          storageSet(lookup, value, storage);
          setter(value);
        });
        return initial;
      }, (func) => {
        func.as = (key) => {
          alias = key;
          return func;
        }, func.using = (target) => {
          storage = target;
          return func;
        };
      });
    };
    Object.defineProperty(Alpine2, "$persist", { get: () => persist() });
    Alpine2.magic("persist", persist);
    Alpine2.persist = (key, { get: get3, set: set3 }, storage = localStorage) => {
      let initial = storageHas(key, storage) ? storageGet(key, storage) : get3();
      set3(initial);
      Alpine2.effect(() => {
        let value = get3();
        storageSet(key, value, storage);
        set3(value);
      });
    };
  }
  function storageHas(key, storage) {
    return storage.getItem(key) !== null;
  }
  function storageGet(key, storage) {
    return JSON.parse(storage.getItem(key, storage));
  }
  function storageSet(key, value, storage) {
    storage.setItem(key, JSON.stringify(value));
  }
  var module_default2 = src_default2;

  // assets/js/main.js
  var import_htmx = __toESM(require_htmx_min());
  window.Htmx = import_htmx.default;
  window.Alpine = module_default;
  module_default.plugin(module_default2);
  module_default.store("lemmario", { "orderBy": module_default.$persist("time") });
  module_default.start();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL2h0bXgub3JnL2Rpc3QvaHRteC5taW4uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2FscGluZWpzL2Rpc3QvbW9kdWxlLmVzbS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvQGFscGluZWpzL3BlcnNpc3QvZGlzdC9tb2R1bGUuZXNtLmpzIiwgIm1haW4uanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIihmdW5jdGlvbihlLHQpe2lmKHR5cGVvZiBkZWZpbmU9PT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQpe2RlZmluZShbXSx0KX1lbHNlIGlmKHR5cGVvZiBtb2R1bGU9PT1cIm9iamVjdFwiJiZtb2R1bGUuZXhwb3J0cyl7bW9kdWxlLmV4cG9ydHM9dCgpfWVsc2V7ZS5odG14PWUuaHRteHx8dCgpfX0pKHR5cGVvZiBzZWxmIT09XCJ1bmRlZmluZWRcIj9zZWxmOnRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgUT17b25Mb2FkOkYscHJvY2Vzczp6dCxvbjpkZSxvZmY6Z2UsdHJpZ2dlcjpjZSxhamF4Ok5yLGZpbmQ6QyxmaW5kQWxsOmYsY2xvc2VzdDp2LHZhbHVlczpmdW5jdGlvbihlLHQpe3ZhciByPWRyKGUsdHx8XCJwb3N0XCIpO3JldHVybiByLnZhbHVlc30scmVtb3ZlOl8sYWRkQ2xhc3M6eixyZW1vdmVDbGFzczpuLHRvZ2dsZUNsYXNzOiQsdGFrZUNsYXNzOlcsZGVmaW5lRXh0ZW5zaW9uOlVyLHJlbW92ZUV4dGVuc2lvbjpCcixsb2dBbGw6Vixsb2dOb25lOmosbG9nZ2VyOm51bGwsY29uZmlnOntoaXN0b3J5RW5hYmxlZDp0cnVlLGhpc3RvcnlDYWNoZVNpemU6MTAscmVmcmVzaE9uSGlzdG9yeU1pc3M6ZmFsc2UsZGVmYXVsdFN3YXBTdHlsZTpcImlubmVySFRNTFwiLGRlZmF1bHRTd2FwRGVsYXk6MCxkZWZhdWx0U2V0dGxlRGVsYXk6MjAsaW5jbHVkZUluZGljYXRvclN0eWxlczp0cnVlLGluZGljYXRvckNsYXNzOlwiaHRteC1pbmRpY2F0b3JcIixyZXF1ZXN0Q2xhc3M6XCJodG14LXJlcXVlc3RcIixhZGRlZENsYXNzOlwiaHRteC1hZGRlZFwiLHNldHRsaW5nQ2xhc3M6XCJodG14LXNldHRsaW5nXCIsc3dhcHBpbmdDbGFzczpcImh0bXgtc3dhcHBpbmdcIixhbGxvd0V2YWw6dHJ1ZSxhbGxvd1NjcmlwdFRhZ3M6dHJ1ZSxpbmxpbmVTY3JpcHROb25jZTpcIlwiLGF0dHJpYnV0ZXNUb1NldHRsZTpbXCJjbGFzc1wiLFwic3R5bGVcIixcIndpZHRoXCIsXCJoZWlnaHRcIl0sd2l0aENyZWRlbnRpYWxzOmZhbHNlLHRpbWVvdXQ6MCx3c1JlY29ubmVjdERlbGF5OlwiZnVsbC1qaXR0ZXJcIix3c0JpbmFyeVR5cGU6XCJibG9iXCIsZGlzYWJsZVNlbGVjdG9yOlwiW2h4LWRpc2FibGVdLCBbZGF0YS1oeC1kaXNhYmxlXVwiLHVzZVRlbXBsYXRlRnJhZ21lbnRzOmZhbHNlLHNjcm9sbEJlaGF2aW9yOlwic21vb3RoXCIsZGVmYXVsdEZvY3VzU2Nyb2xsOmZhbHNlLGdldENhY2hlQnVzdGVyUGFyYW06ZmFsc2UsZ2xvYmFsVmlld1RyYW5zaXRpb25zOmZhbHNlLG1ldGhvZHNUaGF0VXNlVXJsUGFyYW1zOltcImdldFwiXSxzZWxmUmVxdWVzdHNPbmx5OmZhbHNlLGlnbm9yZVRpdGxlOmZhbHNlLHNjcm9sbEludG9WaWV3T25Cb29zdDp0cnVlLHRyaWdnZXJTcGVjc0NhY2hlOm51bGx9LHBhcnNlSW50ZXJ2YWw6ZCxfOnQsY3JlYXRlRXZlbnRTb3VyY2U6ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBFdmVudFNvdXJjZShlLHt3aXRoQ3JlZGVudGlhbHM6dHJ1ZX0pfSxjcmVhdGVXZWJTb2NrZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9bmV3IFdlYlNvY2tldChlLFtdKTt0LmJpbmFyeVR5cGU9US5jb25maWcud3NCaW5hcnlUeXBlO3JldHVybiB0fSx2ZXJzaW9uOlwiMS45LjEwXCJ9O3ZhciByPXthZGRUcmlnZ2VySGFuZGxlcjpMdCxib2R5Q29udGFpbnM6c2UsY2FuQWNjZXNzTG9jYWxTdG9yYWdlOlUsZmluZFRoaXNFbGVtZW50OnhlLGZpbHRlclZhbHVlczp5cixoYXNBdHRyaWJ1dGU6byxnZXRBdHRyaWJ1dGVWYWx1ZTp0ZSxnZXRDbG9zZXN0QXR0cmlidXRlVmFsdWU6bmUsZ2V0Q2xvc2VzdE1hdGNoOmMsZ2V0RXhwcmVzc2lvblZhcnM6SHIsZ2V0SGVhZGVyczp4cixnZXRJbnB1dFZhbHVlczpkcixnZXRJbnRlcm5hbERhdGE6YWUsZ2V0U3dhcFNwZWNpZmljYXRpb246d3IsZ2V0VHJpZ2dlclNwZWNzOml0LGdldFRhcmdldDp5ZSxtYWtlRnJhZ21lbnQ6bCxtZXJnZU9iamVjdHM6bGUsbWFrZVNldHRsZUluZm86VCxvb2JTd2FwOkVlLHF1ZXJ5U2VsZWN0b3JFeHQ6dWUsc2VsZWN0QW5kU3dhcDpqZSxzZXR0bGVJbW1lZGlhdGVseTpucixzaG91bGRDYW5jZWw6dXQsdHJpZ2dlckV2ZW50OmNlLHRyaWdnZXJFcnJvckV2ZW50OmZlLHdpdGhFeHRlbnNpb25zOlJ9O3ZhciB3PVtcImdldFwiLFwicG9zdFwiLFwicHV0XCIsXCJkZWxldGVcIixcInBhdGNoXCJdO3ZhciBpPXcubWFwKGZ1bmN0aW9uKGUpe3JldHVyblwiW2h4LVwiK2UrXCJdLCBbZGF0YS1oeC1cIitlK1wiXVwifSkuam9pbihcIiwgXCIpO3ZhciBTPWUoXCJoZWFkXCIpLHE9ZShcInRpdGxlXCIpLEg9ZShcInN2Z1wiLHRydWUpO2Z1bmN0aW9uIGUoZSx0PWZhbHNlKXtyZXR1cm4gbmV3IFJlZ0V4cChgPCR7ZX0oXFxcXHNbXj5dKj58PikoW1xcXFxzXFxcXFNdKj8pPFxcXFwvJHtlfT5gLHQ/XCJnaW1cIjpcImltXCIpfWZ1bmN0aW9uIGQoZSl7aWYoZT09dW5kZWZpbmVkKXtyZXR1cm4gdW5kZWZpbmVkfWxldCB0PU5hTjtpZihlLnNsaWNlKC0yKT09XCJtc1wiKXt0PXBhcnNlRmxvYXQoZS5zbGljZSgwLC0yKSl9ZWxzZSBpZihlLnNsaWNlKC0xKT09XCJzXCIpe3Q9cGFyc2VGbG9hdChlLnNsaWNlKDAsLTEpKSoxZTN9ZWxzZSBpZihlLnNsaWNlKC0xKT09XCJtXCIpe3Q9cGFyc2VGbG9hdChlLnNsaWNlKDAsLTEpKSoxZTMqNjB9ZWxzZXt0PXBhcnNlRmxvYXQoZSl9cmV0dXJuIGlzTmFOKHQpP3VuZGVmaW5lZDp0fWZ1bmN0aW9uIGVlKGUsdCl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlJiZlLmdldEF0dHJpYnV0ZSh0KX1mdW5jdGlvbiBvKGUsdCl7cmV0dXJuIGUuaGFzQXR0cmlidXRlJiYoZS5oYXNBdHRyaWJ1dGUodCl8fGUuaGFzQXR0cmlidXRlKFwiZGF0YS1cIit0KSl9ZnVuY3Rpb24gdGUoZSx0KXtyZXR1cm4gZWUoZSx0KXx8ZWUoZSxcImRhdGEtXCIrdCl9ZnVuY3Rpb24gdShlKXtyZXR1cm4gZS5wYXJlbnRFbGVtZW50fWZ1bmN0aW9uIHJlKCl7cmV0dXJuIGRvY3VtZW50fWZ1bmN0aW9uIGMoZSx0KXt3aGlsZShlJiYhdChlKSl7ZT11KGUpfXJldHVybiBlP2U6bnVsbH1mdW5jdGlvbiBMKGUsdCxyKXt2YXIgbj10ZSh0LHIpO3ZhciBpPXRlKHQsXCJoeC1kaXNpbmhlcml0XCIpO2lmKGUhPT10JiZpJiYoaT09PVwiKlwifHxpLnNwbGl0KFwiIFwiKS5pbmRleE9mKHIpPj0wKSl7cmV0dXJuXCJ1bnNldFwifWVsc2V7cmV0dXJuIG59fWZ1bmN0aW9uIG5lKHQscil7dmFyIG49bnVsbDtjKHQsZnVuY3Rpb24oZSl7cmV0dXJuIG49TCh0LGUscil9KTtpZihuIT09XCJ1bnNldFwiKXtyZXR1cm4gbn19ZnVuY3Rpb24gaChlLHQpe3ZhciByPWUubWF0Y2hlc3x8ZS5tYXRjaGVzU2VsZWN0b3J8fGUubXNNYXRjaGVzU2VsZWN0b3J8fGUubW96TWF0Y2hlc1NlbGVjdG9yfHxlLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8ZS5vTWF0Y2hlc1NlbGVjdG9yO3JldHVybiByJiZyLmNhbGwoZSx0KX1mdW5jdGlvbiBBKGUpe3ZhciB0PS88KFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKikvaTt2YXIgcj10LmV4ZWMoZSk7aWYocil7cmV0dXJuIHJbMV0udG9Mb3dlckNhc2UoKX1lbHNle3JldHVyblwiXCJ9fWZ1bmN0aW9uIGEoZSx0KXt2YXIgcj1uZXcgRE9NUGFyc2VyO3ZhciBuPXIucGFyc2VGcm9tU3RyaW5nKGUsXCJ0ZXh0L2h0bWxcIik7dmFyIGk9bi5ib2R5O3doaWxlKHQ+MCl7dC0tO2k9aS5maXJzdENoaWxkfWlmKGk9PW51bGwpe2k9cmUoKS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCl9cmV0dXJuIGl9ZnVuY3Rpb24gTihlKXtyZXR1cm4vPGJvZHkvLnRlc3QoZSl9ZnVuY3Rpb24gbChlKXt2YXIgdD0hTihlKTt2YXIgcj1BKGUpO3ZhciBuPWU7aWYocj09PVwiaGVhZFwiKXtuPW4ucmVwbGFjZShTLFwiXCIpfWlmKFEuY29uZmlnLnVzZVRlbXBsYXRlRnJhZ21lbnRzJiZ0KXt2YXIgaT1hKFwiPGJvZHk+PHRlbXBsYXRlPlwiK24rXCI8L3RlbXBsYXRlPjwvYm9keT5cIiwwKTtyZXR1cm4gaS5xdWVyeVNlbGVjdG9yKFwidGVtcGxhdGVcIikuY29udGVudH1zd2l0Y2gocil7Y2FzZVwidGhlYWRcIjpjYXNlXCJ0Ym9keVwiOmNhc2VcInRmb290XCI6Y2FzZVwiY29sZ3JvdXBcIjpjYXNlXCJjYXB0aW9uXCI6cmV0dXJuIGEoXCI8dGFibGU+XCIrbitcIjwvdGFibGU+XCIsMSk7Y2FzZVwiY29sXCI6cmV0dXJuIGEoXCI8dGFibGU+PGNvbGdyb3VwPlwiK24rXCI8L2NvbGdyb3VwPjwvdGFibGU+XCIsMik7Y2FzZVwidHJcIjpyZXR1cm4gYShcIjx0YWJsZT48dGJvZHk+XCIrbitcIjwvdGJvZHk+PC90YWJsZT5cIiwyKTtjYXNlXCJ0ZFwiOmNhc2VcInRoXCI6cmV0dXJuIGEoXCI8dGFibGU+PHRib2R5Pjx0cj5cIituK1wiPC90cj48L3Rib2R5PjwvdGFibGU+XCIsMyk7Y2FzZVwic2NyaXB0XCI6Y2FzZVwic3R5bGVcIjpyZXR1cm4gYShcIjxkaXY+XCIrbitcIjwvZGl2PlwiLDEpO2RlZmF1bHQ6cmV0dXJuIGEobiwwKX19ZnVuY3Rpb24gaWUoZSl7aWYoZSl7ZSgpfX1mdW5jdGlvbiBJKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKT09PVwiW29iamVjdCBcIit0K1wiXVwifWZ1bmN0aW9uIGsoZSl7cmV0dXJuIEkoZSxcIkZ1bmN0aW9uXCIpfWZ1bmN0aW9uIFAoZSl7cmV0dXJuIEkoZSxcIk9iamVjdFwiKX1mdW5jdGlvbiBhZShlKXt2YXIgdD1cImh0bXgtaW50ZXJuYWwtZGF0YVwiO3ZhciByPWVbdF07aWYoIXIpe3I9ZVt0XT17fX1yZXR1cm4gcn1mdW5jdGlvbiBNKGUpe3ZhciB0PVtdO2lmKGUpe2Zvcih2YXIgcj0wO3I8ZS5sZW5ndGg7cisrKXt0LnB1c2goZVtyXSl9fXJldHVybiB0fWZ1bmN0aW9uIG9lKGUsdCl7aWYoZSl7Zm9yKHZhciByPTA7cjxlLmxlbmd0aDtyKyspe3QoZVtyXSl9fX1mdW5jdGlvbiBYKGUpe3ZhciB0PWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7dmFyIHI9dC50b3A7dmFyIG49dC5ib3R0b207cmV0dXJuIHI8d2luZG93LmlubmVySGVpZ2h0JiZuPj0wfWZ1bmN0aW9uIHNlKGUpe2lmKGUuZ2V0Um9vdE5vZGUmJmUuZ2V0Um9vdE5vZGUoKWluc3RhbmNlb2Ygd2luZG93LlNoYWRvd1Jvb3Qpe3JldHVybiByZSgpLmJvZHkuY29udGFpbnMoZS5nZXRSb290Tm9kZSgpLmhvc3QpfWVsc2V7cmV0dXJuIHJlKCkuYm9keS5jb250YWlucyhlKX19ZnVuY3Rpb24gRChlKXtyZXR1cm4gZS50cmltKCkuc3BsaXQoL1xccysvKX1mdW5jdGlvbiBsZShlLHQpe2Zvcih2YXIgciBpbiB0KXtpZih0Lmhhc093blByb3BlcnR5KHIpKXtlW3JdPXRbcl19fXJldHVybiBlfWZ1bmN0aW9uIEUoZSl7dHJ5e3JldHVybiBKU09OLnBhcnNlKGUpfWNhdGNoKGUpe2IoZSk7cmV0dXJuIG51bGx9fWZ1bmN0aW9uIFUoKXt2YXIgZT1cImh0bXg6bG9jYWxTdG9yYWdlVGVzdFwiO3RyeXtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShlLGUpO2xvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGUpO3JldHVybiB0cnVlfWNhdGNoKGUpe3JldHVybiBmYWxzZX19ZnVuY3Rpb24gQih0KXt0cnl7dmFyIGU9bmV3IFVSTCh0KTtpZihlKXt0PWUucGF0aG5hbWUrZS5zZWFyY2h9aWYoIS9eXFwvJC8udGVzdCh0KSl7dD10LnJlcGxhY2UoL1xcLyskLyxcIlwiKX1yZXR1cm4gdH1jYXRjaChlKXtyZXR1cm4gdH19ZnVuY3Rpb24gdChlKXtyZXR1cm4gVHIocmUoKS5ib2R5LGZ1bmN0aW9uKCl7cmV0dXJuIGV2YWwoZSl9KX1mdW5jdGlvbiBGKHQpe3ZhciBlPVEub24oXCJodG14OmxvYWRcIixmdW5jdGlvbihlKXt0KGUuZGV0YWlsLmVsdCl9KTtyZXR1cm4gZX1mdW5jdGlvbiBWKCl7US5sb2dnZXI9ZnVuY3Rpb24oZSx0LHIpe2lmKGNvbnNvbGUpe2NvbnNvbGUubG9nKHQsZSxyKX19fWZ1bmN0aW9uIGooKXtRLmxvZ2dlcj1udWxsfWZ1bmN0aW9uIEMoZSx0KXtpZih0KXtyZXR1cm4gZS5xdWVyeVNlbGVjdG9yKHQpfWVsc2V7cmV0dXJuIEMocmUoKSxlKX19ZnVuY3Rpb24gZihlLHQpe2lmKHQpe3JldHVybiBlLnF1ZXJ5U2VsZWN0b3JBbGwodCl9ZWxzZXtyZXR1cm4gZihyZSgpLGUpfX1mdW5jdGlvbiBfKGUsdCl7ZT1nKGUpO2lmKHQpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtfKGUpO2U9bnVsbH0sdCl9ZWxzZXtlLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZSl9fWZ1bmN0aW9uIHooZSx0LHIpe2U9ZyhlKTtpZihyKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7eihlLHQpO2U9bnVsbH0scil9ZWxzZXtlLmNsYXNzTGlzdCYmZS5jbGFzc0xpc3QuYWRkKHQpfX1mdW5jdGlvbiBuKGUsdCxyKXtlPWcoZSk7aWYocil7c2V0VGltZW91dChmdW5jdGlvbigpe24oZSx0KTtlPW51bGx9LHIpfWVsc2V7aWYoZS5jbGFzc0xpc3Qpe2UuY2xhc3NMaXN0LnJlbW92ZSh0KTtpZihlLmNsYXNzTGlzdC5sZW5ndGg9PT0wKXtlLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpfX19fWZ1bmN0aW9uICQoZSx0KXtlPWcoZSk7ZS5jbGFzc0xpc3QudG9nZ2xlKHQpfWZ1bmN0aW9uIFcoZSx0KXtlPWcoZSk7b2UoZS5wYXJlbnRFbGVtZW50LmNoaWxkcmVuLGZ1bmN0aW9uKGUpe24oZSx0KX0pO3ooZSx0KX1mdW5jdGlvbiB2KGUsdCl7ZT1nKGUpO2lmKGUuY2xvc2VzdCl7cmV0dXJuIGUuY2xvc2VzdCh0KX1lbHNle2Rve2lmKGU9PW51bGx8fGgoZSx0KSl7cmV0dXJuIGV9fXdoaWxlKGU9ZSYmdShlKSk7cmV0dXJuIG51bGx9fWZ1bmN0aW9uIHMoZSx0KXtyZXR1cm4gZS5zdWJzdHJpbmcoMCx0Lmxlbmd0aCk9PT10fWZ1bmN0aW9uIEcoZSx0KXtyZXR1cm4gZS5zdWJzdHJpbmcoZS5sZW5ndGgtdC5sZW5ndGgpPT09dH1mdW5jdGlvbiBKKGUpe3ZhciB0PWUudHJpbSgpO2lmKHModCxcIjxcIikmJkcodCxcIi8+XCIpKXtyZXR1cm4gdC5zdWJzdHJpbmcoMSx0Lmxlbmd0aC0yKX1lbHNle3JldHVybiB0fX1mdW5jdGlvbiBaKGUsdCl7aWYodC5pbmRleE9mKFwiY2xvc2VzdCBcIik9PT0wKXtyZXR1cm5bdihlLEoodC5zdWJzdHIoOCkpKV19ZWxzZSBpZih0LmluZGV4T2YoXCJmaW5kIFwiKT09PTApe3JldHVybltDKGUsSih0LnN1YnN0cig1KSkpXX1lbHNlIGlmKHQ9PT1cIm5leHRcIil7cmV0dXJuW2UubmV4dEVsZW1lbnRTaWJsaW5nXX1lbHNlIGlmKHQuaW5kZXhPZihcIm5leHQgXCIpPT09MCl7cmV0dXJuW0soZSxKKHQuc3Vic3RyKDUpKSldfWVsc2UgaWYodD09PVwicHJldmlvdXNcIil7cmV0dXJuW2UucHJldmlvdXNFbGVtZW50U2libGluZ119ZWxzZSBpZih0LmluZGV4T2YoXCJwcmV2aW91cyBcIik9PT0wKXtyZXR1cm5bWShlLEoodC5zdWJzdHIoOSkpKV19ZWxzZSBpZih0PT09XCJkb2N1bWVudFwiKXtyZXR1cm5bZG9jdW1lbnRdfWVsc2UgaWYodD09PVwid2luZG93XCIpe3JldHVyblt3aW5kb3ddfWVsc2UgaWYodD09PVwiYm9keVwiKXtyZXR1cm5bZG9jdW1lbnQuYm9keV19ZWxzZXtyZXR1cm4gcmUoKS5xdWVyeVNlbGVjdG9yQWxsKEoodCkpfX12YXIgSz1mdW5jdGlvbihlLHQpe3ZhciByPXJlKCkucXVlcnlTZWxlY3RvckFsbCh0KTtmb3IodmFyIG49MDtuPHIubGVuZ3RoO24rKyl7dmFyIGk9cltuXTtpZihpLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGUpPT09Tm9kZS5ET0NVTUVOVF9QT1NJVElPTl9QUkVDRURJTkcpe3JldHVybiBpfX19O3ZhciBZPWZ1bmN0aW9uKGUsdCl7dmFyIHI9cmUoKS5xdWVyeVNlbGVjdG9yQWxsKHQpO2Zvcih2YXIgbj1yLmxlbmd0aC0xO24+PTA7bi0tKXt2YXIgaT1yW25dO2lmKGkuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZSk9PT1Ob2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0ZPTExPV0lORyl7cmV0dXJuIGl9fX07ZnVuY3Rpb24gdWUoZSx0KXtpZih0KXtyZXR1cm4gWihlLHQpWzBdfWVsc2V7cmV0dXJuIFoocmUoKS5ib2R5LGUpWzBdfX1mdW5jdGlvbiBnKGUpe2lmKEkoZSxcIlN0cmluZ1wiKSl7cmV0dXJuIEMoZSl9ZWxzZXtyZXR1cm4gZX19ZnVuY3Rpb24gdmUoZSx0LHIpe2lmKGsodCkpe3JldHVybnt0YXJnZXQ6cmUoKS5ib2R5LGV2ZW50OmUsbGlzdGVuZXI6dH19ZWxzZXtyZXR1cm57dGFyZ2V0OmcoZSksZXZlbnQ6dCxsaXN0ZW5lcjpyfX19ZnVuY3Rpb24gZGUodCxyLG4pe2pyKGZ1bmN0aW9uKCl7dmFyIGU9dmUodCxyLG4pO2UudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZS5ldmVudCxlLmxpc3RlbmVyKX0pO3ZhciBlPWsocik7cmV0dXJuIGU/cjpufWZ1bmN0aW9uIGdlKHQscixuKXtqcihmdW5jdGlvbigpe3ZhciBlPXZlKHQscixuKTtlLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGUuZXZlbnQsZS5saXN0ZW5lcil9KTtyZXR1cm4gayhyKT9yOm59dmFyIG1lPXJlKCkuY3JlYXRlRWxlbWVudChcIm91dHB1dFwiKTtmdW5jdGlvbiBwZShlLHQpe3ZhciByPW5lKGUsdCk7aWYocil7aWYocj09PVwidGhpc1wiKXtyZXR1cm5beGUoZSx0KV19ZWxzZXt2YXIgbj1aKGUscik7aWYobi5sZW5ndGg9PT0wKXtiKCdUaGUgc2VsZWN0b3IgXCInK3IrJ1wiIG9uICcrdCtcIiByZXR1cm5lZCBubyBtYXRjaGVzIVwiKTtyZXR1cm5bbWVdfWVsc2V7cmV0dXJuIG59fX19ZnVuY3Rpb24geGUoZSx0KXtyZXR1cm4gYyhlLGZ1bmN0aW9uKGUpe3JldHVybiB0ZShlLHQpIT1udWxsfSl9ZnVuY3Rpb24geWUoZSl7dmFyIHQ9bmUoZSxcImh4LXRhcmdldFwiKTtpZih0KXtpZih0PT09XCJ0aGlzXCIpe3JldHVybiB4ZShlLFwiaHgtdGFyZ2V0XCIpfWVsc2V7cmV0dXJuIHVlKGUsdCl9fWVsc2V7dmFyIHI9YWUoZSk7aWYoci5ib29zdGVkKXtyZXR1cm4gcmUoKS5ib2R5fWVsc2V7cmV0dXJuIGV9fX1mdW5jdGlvbiBiZShlKXt2YXIgdD1RLmNvbmZpZy5hdHRyaWJ1dGVzVG9TZXR0bGU7Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspe2lmKGU9PT10W3JdKXtyZXR1cm4gdHJ1ZX19cmV0dXJuIGZhbHNlfWZ1bmN0aW9uIHdlKHQscil7b2UodC5hdHRyaWJ1dGVzLGZ1bmN0aW9uKGUpe2lmKCFyLmhhc0F0dHJpYnV0ZShlLm5hbWUpJiZiZShlLm5hbWUpKXt0LnJlbW92ZUF0dHJpYnV0ZShlLm5hbWUpfX0pO29lKHIuYXR0cmlidXRlcyxmdW5jdGlvbihlKXtpZihiZShlLm5hbWUpKXt0LnNldEF0dHJpYnV0ZShlLm5hbWUsZS52YWx1ZSl9fSl9ZnVuY3Rpb24gU2UoZSx0KXt2YXIgcj1Gcih0KTtmb3IodmFyIG49MDtuPHIubGVuZ3RoO24rKyl7dmFyIGk9cltuXTt0cnl7aWYoaS5pc0lubGluZVN3YXAoZSkpe3JldHVybiB0cnVlfX1jYXRjaChlKXtiKGUpfX1yZXR1cm4gZT09PVwib3V0ZXJIVE1MXCJ9ZnVuY3Rpb24gRWUoZSxpLGEpe3ZhciB0PVwiI1wiK2VlKGksXCJpZFwiKTt2YXIgbz1cIm91dGVySFRNTFwiO2lmKGU9PT1cInRydWVcIil7fWVsc2UgaWYoZS5pbmRleE9mKFwiOlwiKT4wKXtvPWUuc3Vic3RyKDAsZS5pbmRleE9mKFwiOlwiKSk7dD1lLnN1YnN0cihlLmluZGV4T2YoXCI6XCIpKzEsZS5sZW5ndGgpfWVsc2V7bz1lfXZhciByPXJlKCkucXVlcnlTZWxlY3RvckFsbCh0KTtpZihyKXtvZShyLGZ1bmN0aW9uKGUpe3ZhciB0O3ZhciByPWkuY2xvbmVOb2RlKHRydWUpO3Q9cmUoKS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7dC5hcHBlbmRDaGlsZChyKTtpZighU2UobyxlKSl7dD1yfXZhciBuPXtzaG91bGRTd2FwOnRydWUsdGFyZ2V0OmUsZnJhZ21lbnQ6dH07aWYoIWNlKGUsXCJodG14Om9vYkJlZm9yZVN3YXBcIixuKSlyZXR1cm47ZT1uLnRhcmdldDtpZihuW1wic2hvdWxkU3dhcFwiXSl7RmUobyxlLGUsdCxhKX1vZShhLmVsdHMsZnVuY3Rpb24oZSl7Y2UoZSxcImh0bXg6b29iQWZ0ZXJTd2FwXCIsbil9KX0pO2kucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpKX1lbHNle2kucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpKTtmZShyZSgpLmJvZHksXCJodG14Om9vYkVycm9yTm9UYXJnZXRcIix7Y29udGVudDppfSl9cmV0dXJuIGV9ZnVuY3Rpb24gQ2UoZSx0LHIpe3ZhciBuPW5lKGUsXCJoeC1zZWxlY3Qtb29iXCIpO2lmKG4pe3ZhciBpPW4uc3BsaXQoXCIsXCIpO2Zvcih2YXIgYT0wO2E8aS5sZW5ndGg7YSsrKXt2YXIgbz1pW2FdLnNwbGl0KFwiOlwiLDIpO3ZhciBzPW9bMF0udHJpbSgpO2lmKHMuaW5kZXhPZihcIiNcIik9PT0wKXtzPXMuc3Vic3RyaW5nKDEpfXZhciBsPW9bMV18fFwidHJ1ZVwiO3ZhciB1PXQucXVlcnlTZWxlY3RvcihcIiNcIitzKTtpZih1KXtFZShsLHUscil9fX1vZShmKHQsXCJbaHgtc3dhcC1vb2JdLCBbZGF0YS1oeC1zd2FwLW9vYl1cIiksZnVuY3Rpb24oZSl7dmFyIHQ9dGUoZSxcImh4LXN3YXAtb29iXCIpO2lmKHQhPW51bGwpe0VlKHQsZSxyKX19KX1mdW5jdGlvbiBSZShlKXtvZShmKGUsXCJbaHgtcHJlc2VydmVdLCBbZGF0YS1oeC1wcmVzZXJ2ZV1cIiksZnVuY3Rpb24oZSl7dmFyIHQ9dGUoZSxcImlkXCIpO3ZhciByPXJlKCkuZ2V0RWxlbWVudEJ5SWQodCk7aWYociE9bnVsbCl7ZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChyLGUpfX0pfWZ1bmN0aW9uIFRlKG8sZSxzKXtvZShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWRdXCIpLGZ1bmN0aW9uKGUpe3ZhciB0PWVlKGUsXCJpZFwiKTtpZih0JiZ0Lmxlbmd0aD4wKXt2YXIgcj10LnJlcGxhY2UoXCInXCIsXCJcXFxcJ1wiKTt2YXIgbj1lLnRhZ05hbWUucmVwbGFjZShcIjpcIixcIlxcXFw6XCIpO3ZhciBpPW8ucXVlcnlTZWxlY3RvcihuK1wiW2lkPSdcIityK1wiJ11cIik7aWYoaSYmaSE9PW8pe3ZhciBhPWUuY2xvbmVOb2RlKCk7d2UoZSxpKTtzLnRhc2tzLnB1c2goZnVuY3Rpb24oKXt3ZShlLGEpfSl9fX0pfWZ1bmN0aW9uIE9lKGUpe3JldHVybiBmdW5jdGlvbigpe24oZSxRLmNvbmZpZy5hZGRlZENsYXNzKTt6dChlKTtOdChlKTtxZShlKTtjZShlLFwiaHRteDpsb2FkXCIpfX1mdW5jdGlvbiBxZShlKXt2YXIgdD1cIlthdXRvZm9jdXNdXCI7dmFyIHI9aChlLHQpP2U6ZS5xdWVyeVNlbGVjdG9yKHQpO2lmKHIhPW51bGwpe3IuZm9jdXMoKX19ZnVuY3Rpb24gbShlLHQscixuKXtUZShlLHIsbik7d2hpbGUoci5jaGlsZE5vZGVzLmxlbmd0aD4wKXt2YXIgaT1yLmZpcnN0Q2hpbGQ7eihpLFEuY29uZmlnLmFkZGVkQ2xhc3MpO2UuaW5zZXJ0QmVmb3JlKGksdCk7aWYoaS5ub2RlVHlwZSE9PU5vZGUuVEVYVF9OT0RFJiZpLm5vZGVUeXBlIT09Tm9kZS5DT01NRU5UX05PREUpe24udGFza3MucHVzaChPZShpKSl9fX1mdW5jdGlvbiBIZShlLHQpe3ZhciByPTA7d2hpbGUocjxlLmxlbmd0aCl7dD0odDw8NSktdCtlLmNoYXJDb2RlQXQocisrKXwwfXJldHVybiB0fWZ1bmN0aW9uIExlKGUpe3ZhciB0PTA7aWYoZS5hdHRyaWJ1dGVzKXtmb3IodmFyIHI9MDtyPGUuYXR0cmlidXRlcy5sZW5ndGg7cisrKXt2YXIgbj1lLmF0dHJpYnV0ZXNbcl07aWYobi52YWx1ZSl7dD1IZShuLm5hbWUsdCk7dD1IZShuLnZhbHVlLHQpfX19cmV0dXJuIHR9ZnVuY3Rpb24gQWUoZSl7dmFyIHQ9YWUoZSk7aWYodC5vbkhhbmRsZXJzKXtmb3IodmFyIHI9MDtyPHQub25IYW5kbGVycy5sZW5ndGg7cisrKXtjb25zdCBuPXQub25IYW5kbGVyc1tyXTtlLnJlbW92ZUV2ZW50TGlzdGVuZXIobi5ldmVudCxuLmxpc3RlbmVyKX1kZWxldGUgdC5vbkhhbmRsZXJzfX1mdW5jdGlvbiBOZShlKXt2YXIgdD1hZShlKTtpZih0LnRpbWVvdXQpe2NsZWFyVGltZW91dCh0LnRpbWVvdXQpfWlmKHQud2ViU29ja2V0KXt0LndlYlNvY2tldC5jbG9zZSgpfWlmKHQuc3NlRXZlbnRTb3VyY2Upe3Quc3NlRXZlbnRTb3VyY2UuY2xvc2UoKX1pZih0Lmxpc3RlbmVySW5mb3Mpe29lKHQubGlzdGVuZXJJbmZvcyxmdW5jdGlvbihlKXtpZihlLm9uKXtlLm9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoZS50cmlnZ2VyLGUubGlzdGVuZXIpfX0pfUFlKGUpO29lKE9iamVjdC5rZXlzKHQpLGZ1bmN0aW9uKGUpe2RlbGV0ZSB0W2VdfSl9ZnVuY3Rpb24gcChlKXtjZShlLFwiaHRteDpiZWZvcmVDbGVhbnVwRWxlbWVudFwiKTtOZShlKTtpZihlLmNoaWxkcmVuKXtvZShlLmNoaWxkcmVuLGZ1bmN0aW9uKGUpe3AoZSl9KX19ZnVuY3Rpb24gSWUodCxlLHIpe2lmKHQudGFnTmFtZT09PVwiQk9EWVwiKXtyZXR1cm4gVWUodCxlLHIpfWVsc2V7dmFyIG47dmFyIGk9dC5wcmV2aW91c1NpYmxpbmc7bSh1KHQpLHQsZSxyKTtpZihpPT1udWxsKXtuPXUodCkuZmlyc3RDaGlsZH1lbHNle249aS5uZXh0U2libGluZ31yLmVsdHM9ci5lbHRzLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZSE9dH0pO3doaWxlKG4mJm4hPT10KXtpZihuLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUpe3IuZWx0cy5wdXNoKG4pfW49bi5uZXh0RWxlbWVudFNpYmxpbmd9cCh0KTt1KHQpLnJlbW92ZUNoaWxkKHQpfX1mdW5jdGlvbiBrZShlLHQscil7cmV0dXJuIG0oZSxlLmZpcnN0Q2hpbGQsdCxyKX1mdW5jdGlvbiBQZShlLHQscil7cmV0dXJuIG0odShlKSxlLHQscil9ZnVuY3Rpb24gTWUoZSx0LHIpe3JldHVybiBtKGUsbnVsbCx0LHIpfWZ1bmN0aW9uIFhlKGUsdCxyKXtyZXR1cm4gbSh1KGUpLGUubmV4dFNpYmxpbmcsdCxyKX1mdW5jdGlvbiBEZShlLHQscil7cChlKTtyZXR1cm4gdShlKS5yZW1vdmVDaGlsZChlKX1mdW5jdGlvbiBVZShlLHQscil7dmFyIG49ZS5maXJzdENoaWxkO20oZSxuLHQscik7aWYobil7d2hpbGUobi5uZXh0U2libGluZyl7cChuLm5leHRTaWJsaW5nKTtlLnJlbW92ZUNoaWxkKG4ubmV4dFNpYmxpbmcpfXAobik7ZS5yZW1vdmVDaGlsZChuKX19ZnVuY3Rpb24gQmUoZSx0LHIpe3ZhciBuPXJ8fG5lKGUsXCJoeC1zZWxlY3RcIik7aWYobil7dmFyIGk9cmUoKS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7b2UodC5xdWVyeVNlbGVjdG9yQWxsKG4pLGZ1bmN0aW9uKGUpe2kuYXBwZW5kQ2hpbGQoZSl9KTt0PWl9cmV0dXJuIHR9ZnVuY3Rpb24gRmUoZSx0LHIsbixpKXtzd2l0Y2goZSl7Y2FzZVwibm9uZVwiOnJldHVybjtjYXNlXCJvdXRlckhUTUxcIjpJZShyLG4saSk7cmV0dXJuO2Nhc2VcImFmdGVyYmVnaW5cIjprZShyLG4saSk7cmV0dXJuO2Nhc2VcImJlZm9yZWJlZ2luXCI6UGUocixuLGkpO3JldHVybjtjYXNlXCJiZWZvcmVlbmRcIjpNZShyLG4saSk7cmV0dXJuO2Nhc2VcImFmdGVyZW5kXCI6WGUocixuLGkpO3JldHVybjtjYXNlXCJkZWxldGVcIjpEZShyLG4saSk7cmV0dXJuO2RlZmF1bHQ6dmFyIGE9RnIodCk7Zm9yKHZhciBvPTA7bzxhLmxlbmd0aDtvKyspe3ZhciBzPWFbb107dHJ5e3ZhciBsPXMuaGFuZGxlU3dhcChlLHIsbixpKTtpZihsKXtpZih0eXBlb2YgbC5sZW5ndGghPT1cInVuZGVmaW5lZFwiKXtmb3IodmFyIHU9MDt1PGwubGVuZ3RoO3UrKyl7dmFyIGY9bFt1XTtpZihmLm5vZGVUeXBlIT09Tm9kZS5URVhUX05PREUmJmYubm9kZVR5cGUhPT1Ob2RlLkNPTU1FTlRfTk9ERSl7aS50YXNrcy5wdXNoKE9lKGYpKX19fXJldHVybn19Y2F0Y2goZSl7YihlKX19aWYoZT09PVwiaW5uZXJIVE1MXCIpe1VlKHIsbixpKX1lbHNle0ZlKFEuY29uZmlnLmRlZmF1bHRTd2FwU3R5bGUsdCxyLG4saSl9fX1mdW5jdGlvbiBWZShlKXtpZihlLmluZGV4T2YoXCI8dGl0bGVcIik+LTEpe3ZhciB0PWUucmVwbGFjZShILFwiXCIpO3ZhciByPXQubWF0Y2gocSk7aWYocil7cmV0dXJuIHJbMl19fX1mdW5jdGlvbiBqZShlLHQscixuLGksYSl7aS50aXRsZT1WZShuKTt2YXIgbz1sKG4pO2lmKG8pe0NlKHIsbyxpKTtvPUJlKHIsbyxhKTtSZShvKTtyZXR1cm4gRmUoZSxyLHQsbyxpKX19ZnVuY3Rpb24gX2UoZSx0LHIpe3ZhciBuPWUuZ2V0UmVzcG9uc2VIZWFkZXIodCk7aWYobi5pbmRleE9mKFwie1wiKT09PTApe3ZhciBpPUUobik7Zm9yKHZhciBhIGluIGkpe2lmKGkuaGFzT3duUHJvcGVydHkoYSkpe3ZhciBvPWlbYV07aWYoIVAobykpe289e3ZhbHVlOm99fWNlKHIsYSxvKX19fWVsc2V7dmFyIHM9bi5zcGxpdChcIixcIik7Zm9yKHZhciBsPTA7bDxzLmxlbmd0aDtsKyspe2NlKHIsc1tsXS50cmltKCksW10pfX19dmFyIHplPS9cXHMvO3ZhciB4PS9bXFxzLF0vO3ZhciAkZT0vW18kYS16QS1aXS87dmFyIFdlPS9bXyRhLXpBLVowLTldLzt2YXIgR2U9WydcIicsXCInXCIsXCIvXCJdO3ZhciBKZT0vW15cXHNdLzt2YXIgWmU9L1t7KF0vO3ZhciBLZT0vW30pXS87ZnVuY3Rpb24gWWUoZSl7dmFyIHQ9W107dmFyIHI9MDt3aGlsZShyPGUubGVuZ3RoKXtpZigkZS5leGVjKGUuY2hhckF0KHIpKSl7dmFyIG49cjt3aGlsZShXZS5leGVjKGUuY2hhckF0KHIrMSkpKXtyKyt9dC5wdXNoKGUuc3Vic3RyKG4sci1uKzEpKX1lbHNlIGlmKEdlLmluZGV4T2YoZS5jaGFyQXQocikpIT09LTEpe3ZhciBpPWUuY2hhckF0KHIpO3ZhciBuPXI7cisrO3doaWxlKHI8ZS5sZW5ndGgmJmUuY2hhckF0KHIpIT09aSl7aWYoZS5jaGFyQXQocik9PT1cIlxcXFxcIil7cisrfXIrK310LnB1c2goZS5zdWJzdHIobixyLW4rMSkpfWVsc2V7dmFyIGE9ZS5jaGFyQXQocik7dC5wdXNoKGEpfXIrK31yZXR1cm4gdH1mdW5jdGlvbiBRZShlLHQscil7cmV0dXJuICRlLmV4ZWMoZS5jaGFyQXQoMCkpJiZlIT09XCJ0cnVlXCImJmUhPT1cImZhbHNlXCImJmUhPT1cInRoaXNcIiYmZSE9PXImJnQhPT1cIi5cIn1mdW5jdGlvbiBldChlLHQscil7aWYodFswXT09PVwiW1wiKXt0LnNoaWZ0KCk7dmFyIG49MTt2YXIgaT1cIiByZXR1cm4gKGZ1bmN0aW9uKFwiK3IrXCIpeyByZXR1cm4gKFwiO3ZhciBhPW51bGw7d2hpbGUodC5sZW5ndGg+MCl7dmFyIG89dFswXTtpZihvPT09XCJdXCIpe24tLTtpZihuPT09MCl7aWYoYT09PW51bGwpe2k9aStcInRydWVcIn10LnNoaWZ0KCk7aSs9XCIpfSlcIjt0cnl7dmFyIHM9VHIoZSxmdW5jdGlvbigpe3JldHVybiBGdW5jdGlvbihpKSgpfSxmdW5jdGlvbigpe3JldHVybiB0cnVlfSk7cy5zb3VyY2U9aTtyZXR1cm4gc31jYXRjaChlKXtmZShyZSgpLmJvZHksXCJodG14OnN5bnRheDplcnJvclwiLHtlcnJvcjplLHNvdXJjZTppfSk7cmV0dXJuIG51bGx9fX1lbHNlIGlmKG89PT1cIltcIil7bisrfWlmKFFlKG8sYSxyKSl7aSs9XCIoKFwiK3IrXCIuXCIrbytcIikgPyAoXCIrcitcIi5cIitvK1wiKSA6ICh3aW5kb3cuXCIrbytcIikpXCJ9ZWxzZXtpPWkrb31hPXQuc2hpZnQoKX19fWZ1bmN0aW9uIHkoZSx0KXt2YXIgcj1cIlwiO3doaWxlKGUubGVuZ3RoPjAmJiF0LnRlc3QoZVswXSkpe3IrPWUuc2hpZnQoKX1yZXR1cm4gcn1mdW5jdGlvbiB0dChlKXt2YXIgdDtpZihlLmxlbmd0aD4wJiZaZS50ZXN0KGVbMF0pKXtlLnNoaWZ0KCk7dD15KGUsS2UpLnRyaW0oKTtlLnNoaWZ0KCl9ZWxzZXt0PXkoZSx4KX1yZXR1cm4gdH12YXIgcnQ9XCJpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdFwiO2Z1bmN0aW9uIG50KGUsdCxyKXt2YXIgbj1bXTt2YXIgaT1ZZSh0KTtkb3t5KGksSmUpO3ZhciBhPWkubGVuZ3RoO3ZhciBvPXkoaSwvWyxcXFtcXHNdLyk7aWYobyE9PVwiXCIpe2lmKG89PT1cImV2ZXJ5XCIpe3ZhciBzPXt0cmlnZ2VyOlwiZXZlcnlcIn07eShpLEplKTtzLnBvbGxJbnRlcnZhbD1kKHkoaSwvWyxcXFtcXHNdLykpO3koaSxKZSk7dmFyIGw9ZXQoZSxpLFwiZXZlbnRcIik7aWYobCl7cy5ldmVudEZpbHRlcj1sfW4ucHVzaChzKX1lbHNlIGlmKG8uaW5kZXhPZihcInNzZTpcIik9PT0wKXtuLnB1c2goe3RyaWdnZXI6XCJzc2VcIixzc2VFdmVudDpvLnN1YnN0cig0KX0pfWVsc2V7dmFyIHU9e3RyaWdnZXI6b307dmFyIGw9ZXQoZSxpLFwiZXZlbnRcIik7aWYobCl7dS5ldmVudEZpbHRlcj1sfXdoaWxlKGkubGVuZ3RoPjAmJmlbMF0hPT1cIixcIil7eShpLEplKTt2YXIgZj1pLnNoaWZ0KCk7aWYoZj09PVwiY2hhbmdlZFwiKXt1LmNoYW5nZWQ9dHJ1ZX1lbHNlIGlmKGY9PT1cIm9uY2VcIil7dS5vbmNlPXRydWV9ZWxzZSBpZihmPT09XCJjb25zdW1lXCIpe3UuY29uc3VtZT10cnVlfWVsc2UgaWYoZj09PVwiZGVsYXlcIiYmaVswXT09PVwiOlwiKXtpLnNoaWZ0KCk7dS5kZWxheT1kKHkoaSx4KSl9ZWxzZSBpZihmPT09XCJmcm9tXCImJmlbMF09PT1cIjpcIil7aS5zaGlmdCgpO2lmKFplLnRlc3QoaVswXSkpe3ZhciBjPXR0KGkpfWVsc2V7dmFyIGM9eShpLHgpO2lmKGM9PT1cImNsb3Nlc3RcInx8Yz09PVwiZmluZFwifHxjPT09XCJuZXh0XCJ8fGM9PT1cInByZXZpb3VzXCIpe2kuc2hpZnQoKTt2YXIgaD10dChpKTtpZihoLmxlbmd0aD4wKXtjKz1cIiBcIitofX19dS5mcm9tPWN9ZWxzZSBpZihmPT09XCJ0YXJnZXRcIiYmaVswXT09PVwiOlwiKXtpLnNoaWZ0KCk7dS50YXJnZXQ9dHQoaSl9ZWxzZSBpZihmPT09XCJ0aHJvdHRsZVwiJiZpWzBdPT09XCI6XCIpe2kuc2hpZnQoKTt1LnRocm90dGxlPWQoeShpLHgpKX1lbHNlIGlmKGY9PT1cInF1ZXVlXCImJmlbMF09PT1cIjpcIil7aS5zaGlmdCgpO3UucXVldWU9eShpLHgpfWVsc2UgaWYoZj09PVwicm9vdFwiJiZpWzBdPT09XCI6XCIpe2kuc2hpZnQoKTt1W2ZdPXR0KGkpfWVsc2UgaWYoZj09PVwidGhyZXNob2xkXCImJmlbMF09PT1cIjpcIil7aS5zaGlmdCgpO3VbZl09eShpLHgpfWVsc2V7ZmUoZSxcImh0bXg6c3ludGF4OmVycm9yXCIse3Rva2VuOmkuc2hpZnQoKX0pfX1uLnB1c2godSl9fWlmKGkubGVuZ3RoPT09YSl7ZmUoZSxcImh0bXg6c3ludGF4OmVycm9yXCIse3Rva2VuOmkuc2hpZnQoKX0pfXkoaSxKZSl9d2hpbGUoaVswXT09PVwiLFwiJiZpLnNoaWZ0KCkpO2lmKHIpe3JbdF09bn1yZXR1cm4gbn1mdW5jdGlvbiBpdChlKXt2YXIgdD10ZShlLFwiaHgtdHJpZ2dlclwiKTt2YXIgcj1bXTtpZih0KXt2YXIgbj1RLmNvbmZpZy50cmlnZ2VyU3BlY3NDYWNoZTtyPW4mJm5bdF18fG50KGUsdCxuKX1pZihyLmxlbmd0aD4wKXtyZXR1cm4gcn1lbHNlIGlmKGgoZSxcImZvcm1cIikpe3JldHVyblt7dHJpZ2dlcjpcInN1Ym1pdFwifV19ZWxzZSBpZihoKGUsJ2lucHV0W3R5cGU9XCJidXR0b25cIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nKSl7cmV0dXJuW3t0cmlnZ2VyOlwiY2xpY2tcIn1dfWVsc2UgaWYoaChlLHJ0KSl7cmV0dXJuW3t0cmlnZ2VyOlwiY2hhbmdlXCJ9XX1lbHNle3JldHVyblt7dHJpZ2dlcjpcImNsaWNrXCJ9XX19ZnVuY3Rpb24gYXQoZSl7YWUoZSkuY2FuY2VsbGVkPXRydWV9ZnVuY3Rpb24gb3QoZSx0LHIpe3ZhciBuPWFlKGUpO24udGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aWYoc2UoZSkmJm4uY2FuY2VsbGVkIT09dHJ1ZSl7aWYoIWN0KHIsZSxXdChcImh4OnBvbGw6dHJpZ2dlclwiLHt0cmlnZ2VyU3BlYzpyLHRhcmdldDplfSkpKXt0KGUpfW90KGUsdCxyKX19LHIucG9sbEludGVydmFsKX1mdW5jdGlvbiBzdChlKXtyZXR1cm4gbG9jYXRpb24uaG9zdG5hbWU9PT1lLmhvc3RuYW1lJiZlZShlLFwiaHJlZlwiKSYmZWUoZSxcImhyZWZcIikuaW5kZXhPZihcIiNcIikhPT0wfWZ1bmN0aW9uIGx0KHQscixlKXtpZih0LnRhZ05hbWU9PT1cIkFcIiYmc3QodCkmJih0LnRhcmdldD09PVwiXCJ8fHQudGFyZ2V0PT09XCJfc2VsZlwiKXx8dC50YWdOYW1lPT09XCJGT1JNXCIpe3IuYm9vc3RlZD10cnVlO3ZhciBuLGk7aWYodC50YWdOYW1lPT09XCJBXCIpe249XCJnZXRcIjtpPWVlKHQsXCJocmVmXCIpfWVsc2V7dmFyIGE9ZWUodCxcIm1ldGhvZFwiKTtuPWE/YS50b0xvd2VyQ2FzZSgpOlwiZ2V0XCI7aWYobj09PVwiZ2V0XCIpe31pPWVlKHQsXCJhY3Rpb25cIil9ZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2h0KHQsZnVuY3Rpb24oZSx0KXtpZih2KGUsUS5jb25maWcuZGlzYWJsZVNlbGVjdG9yKSl7cChlKTtyZXR1cm59aGUobixpLGUsdCl9LHIsZSx0cnVlKX0pfX1mdW5jdGlvbiB1dChlLHQpe2lmKGUudHlwZT09PVwic3VibWl0XCJ8fGUudHlwZT09PVwiY2xpY2tcIil7aWYodC50YWdOYW1lPT09XCJGT1JNXCIpe3JldHVybiB0cnVlfWlmKGgodCwnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSwgYnV0dG9uJykmJnYodCxcImZvcm1cIikhPT1udWxsKXtyZXR1cm4gdHJ1ZX1pZih0LnRhZ05hbWU9PT1cIkFcIiYmdC5ocmVmJiYodC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpPT09XCIjXCJ8fHQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5pbmRleE9mKFwiI1wiKSE9PTApKXtyZXR1cm4gdHJ1ZX19cmV0dXJuIGZhbHNlfWZ1bmN0aW9uIGZ0KGUsdCl7cmV0dXJuIGFlKGUpLmJvb3N0ZWQmJmUudGFnTmFtZT09PVwiQVwiJiZ0LnR5cGU9PT1cImNsaWNrXCImJih0LmN0cmxLZXl8fHQubWV0YUtleSl9ZnVuY3Rpb24gY3QoZSx0LHIpe3ZhciBuPWUuZXZlbnRGaWx0ZXI7aWYobil7dHJ5e3JldHVybiBuLmNhbGwodCxyKSE9PXRydWV9Y2F0Y2goZSl7ZmUocmUoKS5ib2R5LFwiaHRteDpldmVudEZpbHRlcjplcnJvclwiLHtlcnJvcjplLHNvdXJjZTpuLnNvdXJjZX0pO3JldHVybiB0cnVlfX1yZXR1cm4gZmFsc2V9ZnVuY3Rpb24gaHQoYSxvLGUscyxsKXt2YXIgdT1hZShhKTt2YXIgdDtpZihzLmZyb20pe3Q9WihhLHMuZnJvbSl9ZWxzZXt0PVthXX1pZihzLmNoYW5nZWQpe3QuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1hZShlKTt0Lmxhc3RWYWx1ZT1lLnZhbHVlfSl9b2UodCxmdW5jdGlvbihuKXt2YXIgaT1mdW5jdGlvbihlKXtpZighc2UoYSkpe24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihzLnRyaWdnZXIsaSk7cmV0dXJufWlmKGZ0KGEsZSkpe3JldHVybn1pZihsfHx1dChlLGEpKXtlLnByZXZlbnREZWZhdWx0KCl9aWYoY3QocyxhLGUpKXtyZXR1cm59dmFyIHQ9YWUoZSk7dC50cmlnZ2VyU3BlYz1zO2lmKHQuaGFuZGxlZEZvcj09bnVsbCl7dC5oYW5kbGVkRm9yPVtdfWlmKHQuaGFuZGxlZEZvci5pbmRleE9mKGEpPDApe3QuaGFuZGxlZEZvci5wdXNoKGEpO2lmKHMuY29uc3VtZSl7ZS5zdG9wUHJvcGFnYXRpb24oKX1pZihzLnRhcmdldCYmZS50YXJnZXQpe2lmKCFoKGUudGFyZ2V0LHMudGFyZ2V0KSl7cmV0dXJufX1pZihzLm9uY2Upe2lmKHUudHJpZ2dlcmVkT25jZSl7cmV0dXJufWVsc2V7dS50cmlnZ2VyZWRPbmNlPXRydWV9fWlmKHMuY2hhbmdlZCl7dmFyIHI9YWUobik7aWYoci5sYXN0VmFsdWU9PT1uLnZhbHVlKXtyZXR1cm59ci5sYXN0VmFsdWU9bi52YWx1ZX1pZih1LmRlbGF5ZWQpe2NsZWFyVGltZW91dCh1LmRlbGF5ZWQpfWlmKHUudGhyb3R0bGUpe3JldHVybn1pZihzLnRocm90dGxlPjApe2lmKCF1LnRocm90dGxlKXtvKGEsZSk7dS50aHJvdHRsZT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dS50aHJvdHRsZT1udWxsfSxzLnRocm90dGxlKX19ZWxzZSBpZihzLmRlbGF5PjApe3UuZGVsYXllZD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7byhhLGUpfSxzLmRlbGF5KX1lbHNle2NlKGEsXCJodG14OnRyaWdnZXJcIik7byhhLGUpfX19O2lmKGUubGlzdGVuZXJJbmZvcz09bnVsbCl7ZS5saXN0ZW5lckluZm9zPVtdfWUubGlzdGVuZXJJbmZvcy5wdXNoKHt0cmlnZ2VyOnMudHJpZ2dlcixsaXN0ZW5lcjppLG9uOm59KTtuLmFkZEV2ZW50TGlzdGVuZXIocy50cmlnZ2VyLGkpfSl9dmFyIHZ0PWZhbHNlO3ZhciBkdD1udWxsO2Z1bmN0aW9uIGd0KCl7aWYoIWR0KXtkdD1mdW5jdGlvbigpe3Z0PXRydWV9O3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsZHQpO3NldEludGVydmFsKGZ1bmN0aW9uKCl7aWYodnQpe3Z0PWZhbHNlO29lKHJlKCkucXVlcnlTZWxlY3RvckFsbChcIltoeC10cmlnZ2VyPSdyZXZlYWxlZCddLFtkYXRhLWh4LXRyaWdnZXI9J3JldmVhbGVkJ11cIiksZnVuY3Rpb24oZSl7bXQoZSl9KX19LDIwMCl9fWZ1bmN0aW9uIG10KHQpe2lmKCFvKHQsXCJkYXRhLWh4LXJldmVhbGVkXCIpJiZYKHQpKXt0LnNldEF0dHJpYnV0ZShcImRhdGEtaHgtcmV2ZWFsZWRcIixcInRydWVcIik7dmFyIGU9YWUodCk7aWYoZS5pbml0SGFzaCl7Y2UodCxcInJldmVhbGVkXCIpfWVsc2V7dC5hZGRFdmVudExpc3RlbmVyKFwiaHRteDphZnRlclByb2Nlc3NOb2RlXCIsZnVuY3Rpb24oZSl7Y2UodCxcInJldmVhbGVkXCIpfSx7b25jZTp0cnVlfSl9fX1mdW5jdGlvbiBwdChlLHQscil7dmFyIG49RChyKTtmb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIGE9bltpXS5zcGxpdCgvOiguKykvKTtpZihhWzBdPT09XCJjb25uZWN0XCIpe3h0KGUsYVsxXSwwKX1pZihhWzBdPT09XCJzZW5kXCIpe2J0KGUpfX19ZnVuY3Rpb24geHQocyxyLG4pe2lmKCFzZShzKSl7cmV0dXJufWlmKHIuaW5kZXhPZihcIi9cIik9PTApe3ZhciBlPWxvY2F0aW9uLmhvc3RuYW1lKyhsb2NhdGlvbi5wb3J0P1wiOlwiK2xvY2F0aW9uLnBvcnQ6XCJcIik7aWYobG9jYXRpb24ucHJvdG9jb2w9PVwiaHR0cHM6XCIpe3I9XCJ3c3M6Ly9cIitlK3J9ZWxzZSBpZihsb2NhdGlvbi5wcm90b2NvbD09XCJodHRwOlwiKXtyPVwid3M6Ly9cIitlK3J9fXZhciB0PVEuY3JlYXRlV2ViU29ja2V0KHIpO3Qub25lcnJvcj1mdW5jdGlvbihlKXtmZShzLFwiaHRteDp3c0Vycm9yXCIse2Vycm9yOmUsc29ja2V0OnR9KTt5dChzKX07dC5vbmNsb3NlPWZ1bmN0aW9uKGUpe2lmKFsxMDA2LDEwMTIsMTAxM10uaW5kZXhPZihlLmNvZGUpPj0wKXt2YXIgdD13dChuKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7eHQocyxyLG4rMSl9LHQpfX07dC5vbm9wZW49ZnVuY3Rpb24oZSl7bj0wfTthZShzKS53ZWJTb2NrZXQ9dDt0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsZnVuY3Rpb24oZSl7aWYoeXQocykpe3JldHVybn12YXIgdD1lLmRhdGE7UihzLGZ1bmN0aW9uKGUpe3Q9ZS50cmFuc2Zvcm1SZXNwb25zZSh0LG51bGwscyl9KTt2YXIgcj1UKHMpO3ZhciBuPWwodCk7dmFyIGk9TShuLmNoaWxkcmVuKTtmb3IodmFyIGE9MDthPGkubGVuZ3RoO2ErKyl7dmFyIG89aVthXTtFZSh0ZShvLFwiaHgtc3dhcC1vb2JcIil8fFwidHJ1ZVwiLG8scil9bnIoci50YXNrcyl9KX1mdW5jdGlvbiB5dChlKXtpZighc2UoZSkpe2FlKGUpLndlYlNvY2tldC5jbG9zZSgpO3JldHVybiB0cnVlfX1mdW5jdGlvbiBidCh1KXt2YXIgZj1jKHUsZnVuY3Rpb24oZSl7cmV0dXJuIGFlKGUpLndlYlNvY2tldCE9bnVsbH0pO2lmKGYpe3UuYWRkRXZlbnRMaXN0ZW5lcihpdCh1KVswXS50cmlnZ2VyLGZ1bmN0aW9uKGUpe3ZhciB0PWFlKGYpLndlYlNvY2tldDt2YXIgcj14cih1LGYpO3ZhciBuPWRyKHUsXCJwb3N0XCIpO3ZhciBpPW4uZXJyb3JzO3ZhciBhPW4udmFsdWVzO3ZhciBvPUhyKHUpO3ZhciBzPWxlKGEsbyk7dmFyIGw9eXIocyx1KTtsW1wiSEVBREVSU1wiXT1yO2lmKGkmJmkubGVuZ3RoPjApe2NlKHUsXCJodG14OnZhbGlkYXRpb246aGFsdGVkXCIsaSk7cmV0dXJufXQuc2VuZChKU09OLnN0cmluZ2lmeShsKSk7aWYodXQoZSx1KSl7ZS5wcmV2ZW50RGVmYXVsdCgpfX0pfWVsc2V7ZmUodSxcImh0bXg6bm9XZWJTb2NrZXRTb3VyY2VFcnJvclwiKX19ZnVuY3Rpb24gd3QoZSl7dmFyIHQ9US5jb25maWcud3NSZWNvbm5lY3REZWxheTtpZih0eXBlb2YgdD09PVwiZnVuY3Rpb25cIil7cmV0dXJuIHQoZSl9aWYodD09PVwiZnVsbC1qaXR0ZXJcIil7dmFyIHI9TWF0aC5taW4oZSw2KTt2YXIgbj0xZTMqTWF0aC5wb3coMixyKTtyZXR1cm4gbipNYXRoLnJhbmRvbSgpfWIoJ2h0bXguY29uZmlnLndzUmVjb25uZWN0RGVsYXkgbXVzdCBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciB0aGUgc3RyaW5nIFwiZnVsbC1qaXR0ZXJcIicpfWZ1bmN0aW9uIFN0KGUsdCxyKXt2YXIgbj1EKHIpO2Zvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgYT1uW2ldLnNwbGl0KC86KC4rKS8pO2lmKGFbMF09PT1cImNvbm5lY3RcIil7RXQoZSxhWzFdKX1pZihhWzBdPT09XCJzd2FwXCIpe0N0KGUsYVsxXSl9fX1mdW5jdGlvbiBFdCh0LGUpe3ZhciByPVEuY3JlYXRlRXZlbnRTb3VyY2UoZSk7ci5vbmVycm9yPWZ1bmN0aW9uKGUpe2ZlKHQsXCJodG14OnNzZUVycm9yXCIse2Vycm9yOmUsc291cmNlOnJ9KTtUdCh0KX07YWUodCkuc3NlRXZlbnRTb3VyY2U9cn1mdW5jdGlvbiBDdChhLG8pe3ZhciBzPWMoYSxPdCk7aWYocyl7dmFyIGw9YWUocykuc3NlRXZlbnRTb3VyY2U7dmFyIHU9ZnVuY3Rpb24oZSl7aWYoVHQocykpe3JldHVybn1pZighc2UoYSkpe2wucmVtb3ZlRXZlbnRMaXN0ZW5lcihvLHUpO3JldHVybn12YXIgdD1lLmRhdGE7UihhLGZ1bmN0aW9uKGUpe3Q9ZS50cmFuc2Zvcm1SZXNwb25zZSh0LG51bGwsYSl9KTt2YXIgcj13cihhKTt2YXIgbj15ZShhKTt2YXIgaT1UKGEpO2plKHIuc3dhcFN0eWxlLG4sYSx0LGkpO25yKGkudGFza3MpO2NlKGEsXCJodG14OnNzZU1lc3NhZ2VcIixlKX07YWUoYSkuc3NlTGlzdGVuZXI9dTtsLmFkZEV2ZW50TGlzdGVuZXIobyx1KX1lbHNle2ZlKGEsXCJodG14Om5vU1NFU291cmNlRXJyb3JcIil9fWZ1bmN0aW9uIFJ0KGUsdCxyKXt2YXIgbj1jKGUsT3QpO2lmKG4pe3ZhciBpPWFlKG4pLnNzZUV2ZW50U291cmNlO3ZhciBhPWZ1bmN0aW9uKCl7aWYoIVR0KG4pKXtpZihzZShlKSl7dChlKX1lbHNle2kucmVtb3ZlRXZlbnRMaXN0ZW5lcihyLGEpfX19O2FlKGUpLnNzZUxpc3RlbmVyPWE7aS5hZGRFdmVudExpc3RlbmVyKHIsYSl9ZWxzZXtmZShlLFwiaHRteDpub1NTRVNvdXJjZUVycm9yXCIpfX1mdW5jdGlvbiBUdChlKXtpZighc2UoZSkpe2FlKGUpLnNzZUV2ZW50U291cmNlLmNsb3NlKCk7cmV0dXJuIHRydWV9fWZ1bmN0aW9uIE90KGUpe3JldHVybiBhZShlKS5zc2VFdmVudFNvdXJjZSE9bnVsbH1mdW5jdGlvbiBxdChlLHQscixuKXt2YXIgaT1mdW5jdGlvbigpe2lmKCFyLmxvYWRlZCl7ci5sb2FkZWQ9dHJ1ZTt0KGUpfX07aWYobj4wKXtzZXRUaW1lb3V0KGksbil9ZWxzZXtpKCl9fWZ1bmN0aW9uIEh0KHQsaSxlKXt2YXIgYT1mYWxzZTtvZSh3LGZ1bmN0aW9uKHIpe2lmKG8odCxcImh4LVwiK3IpKXt2YXIgbj10ZSh0LFwiaHgtXCIrcik7YT10cnVlO2kucGF0aD1uO2kudmVyYj1yO2UuZm9yRWFjaChmdW5jdGlvbihlKXtMdCh0LGUsaSxmdW5jdGlvbihlLHQpe2lmKHYoZSxRLmNvbmZpZy5kaXNhYmxlU2VsZWN0b3IpKXtwKGUpO3JldHVybn1oZShyLG4sZSx0KX0pfSl9fSk7cmV0dXJuIGF9ZnVuY3Rpb24gTHQobixlLHQscil7aWYoZS5zc2VFdmVudCl7UnQobixyLGUuc3NlRXZlbnQpfWVsc2UgaWYoZS50cmlnZ2VyPT09XCJyZXZlYWxlZFwiKXtndCgpO2h0KG4scix0LGUpO210KG4pfWVsc2UgaWYoZS50cmlnZ2VyPT09XCJpbnRlcnNlY3RcIil7dmFyIGk9e307aWYoZS5yb290KXtpLnJvb3Q9dWUobixlLnJvb3QpfWlmKGUudGhyZXNob2xkKXtpLnRocmVzaG9sZD1wYXJzZUZsb2F0KGUudGhyZXNob2xkKX12YXIgYT1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe3ZhciByPWVbdF07aWYoci5pc0ludGVyc2VjdGluZyl7Y2UobixcImludGVyc2VjdFwiKTticmVha319fSxpKTthLm9ic2VydmUobik7aHQobixyLHQsZSl9ZWxzZSBpZihlLnRyaWdnZXI9PT1cImxvYWRcIil7aWYoIWN0KGUsbixXdChcImxvYWRcIix7ZWx0Om59KSkpe3F0KG4scix0LGUuZGVsYXkpfX1lbHNlIGlmKGUucG9sbEludGVydmFsPjApe3QucG9sbGluZz10cnVlO290KG4scixlKX1lbHNle2h0KG4scix0LGUpfX1mdW5jdGlvbiBBdChlKXtpZihRLmNvbmZpZy5hbGxvd1NjcmlwdFRhZ3MmJihlLnR5cGU9PT1cInRleHQvamF2YXNjcmlwdFwifHxlLnR5cGU9PT1cIm1vZHVsZVwifHxlLnR5cGU9PT1cIlwiKSl7dmFyIHQ9cmUoKS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO29lKGUuYXR0cmlidXRlcyxmdW5jdGlvbihlKXt0LnNldEF0dHJpYnV0ZShlLm5hbWUsZS52YWx1ZSl9KTt0LnRleHRDb250ZW50PWUudGV4dENvbnRlbnQ7dC5hc3luYz1mYWxzZTtpZihRLmNvbmZpZy5pbmxpbmVTY3JpcHROb25jZSl7dC5ub25jZT1RLmNvbmZpZy5pbmxpbmVTY3JpcHROb25jZX12YXIgcj1lLnBhcmVudEVsZW1lbnQ7dHJ5e3IuaW5zZXJ0QmVmb3JlKHQsZSl9Y2F0Y2goZSl7YihlKX1maW5hbGx5e2lmKGUucGFyZW50RWxlbWVudCl7ZS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGUpfX19fWZ1bmN0aW9uIE50KGUpe2lmKGgoZSxcInNjcmlwdFwiKSl7QXQoZSl9b2UoZihlLFwic2NyaXB0XCIpLGZ1bmN0aW9uKGUpe0F0KGUpfSl9ZnVuY3Rpb24gSXQoZSl7dmFyIHQ9ZS5hdHRyaWJ1dGVzO2Zvcih2YXIgcj0wO3I8dC5sZW5ndGg7cisrKXt2YXIgbj10W3JdLm5hbWU7aWYocyhuLFwiaHgtb246XCIpfHxzKG4sXCJkYXRhLWh4LW9uOlwiKXx8cyhuLFwiaHgtb24tXCIpfHxzKG4sXCJkYXRhLWh4LW9uLVwiKSl7cmV0dXJuIHRydWV9fXJldHVybiBmYWxzZX1mdW5jdGlvbiBrdChlKXt2YXIgdD1udWxsO3ZhciByPVtdO2lmKEl0KGUpKXtyLnB1c2goZSl9aWYoZG9jdW1lbnQuZXZhbHVhdGUpe3ZhciBuPWRvY3VtZW50LmV2YWx1YXRlKCcuLy8qW0AqWyBzdGFydHMtd2l0aChuYW1lKCksIFwiaHgtb246XCIpIG9yIHN0YXJ0cy13aXRoKG5hbWUoKSwgXCJkYXRhLWh4LW9uOlwiKSBvcicrJyBzdGFydHMtd2l0aChuYW1lKCksIFwiaHgtb24tXCIpIG9yIHN0YXJ0cy13aXRoKG5hbWUoKSwgXCJkYXRhLWh4LW9uLVwiKSBdXScsZSk7d2hpbGUodD1uLml0ZXJhdGVOZXh0KCkpci5wdXNoKHQpfWVsc2V7dmFyIGk9ZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIik7Zm9yKHZhciBhPTA7YTxpLmxlbmd0aDthKyspe2lmKEl0KGlbYV0pKXtyLnB1c2goaVthXSl9fX1yZXR1cm4gcn1mdW5jdGlvbiBQdChlKXtpZihlLnF1ZXJ5U2VsZWN0b3JBbGwpe3ZhciB0PVwiLCBbaHgtYm9vc3RdIGEsIFtkYXRhLWh4LWJvb3N0XSBhLCBhW2h4LWJvb3N0XSwgYVtkYXRhLWh4LWJvb3N0XVwiO3ZhciByPWUucXVlcnlTZWxlY3RvckFsbChpK3QrXCIsIGZvcm0sIFt0eXBlPSdzdWJtaXQnXSwgW2h4LXNzZV0sIFtkYXRhLWh4LXNzZV0sIFtoeC13c10sXCIrXCIgW2RhdGEtaHgtd3NdLCBbaHgtZXh0XSwgW2RhdGEtaHgtZXh0XSwgW2h4LXRyaWdnZXJdLCBbZGF0YS1oeC10cmlnZ2VyXSwgW2h4LW9uXSwgW2RhdGEtaHgtb25dXCIpO3JldHVybiByfWVsc2V7cmV0dXJuW119fWZ1bmN0aW9uIE10KGUpe3ZhciB0PXYoZS50YXJnZXQsXCJidXR0b24sIGlucHV0W3R5cGU9J3N1Ym1pdCddXCIpO3ZhciByPUR0KGUpO2lmKHIpe3IubGFzdEJ1dHRvbkNsaWNrZWQ9dH19ZnVuY3Rpb24gWHQoZSl7dmFyIHQ9RHQoZSk7aWYodCl7dC5sYXN0QnV0dG9uQ2xpY2tlZD1udWxsfX1mdW5jdGlvbiBEdChlKXt2YXIgdD12KGUudGFyZ2V0LFwiYnV0dG9uLCBpbnB1dFt0eXBlPSdzdWJtaXQnXVwiKTtpZighdCl7cmV0dXJufXZhciByPWcoXCIjXCIrZWUodCxcImZvcm1cIikpfHx2KHQsXCJmb3JtXCIpO2lmKCFyKXtyZXR1cm59cmV0dXJuIGFlKHIpfWZ1bmN0aW9uIFV0KGUpe2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsTXQpO2UuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIixNdCk7ZS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIixYdCl9ZnVuY3Rpb24gQnQoZSl7dmFyIHQ9WWUoZSk7dmFyIHI9MDtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7Y29uc3QgaT10W25dO2lmKGk9PT1cIntcIil7cisrfWVsc2UgaWYoaT09PVwifVwiKXtyLS19fXJldHVybiByfWZ1bmN0aW9uIEZ0KHQsZSxyKXt2YXIgbj1hZSh0KTtpZighQXJyYXkuaXNBcnJheShuLm9uSGFuZGxlcnMpKXtuLm9uSGFuZGxlcnM9W119dmFyIGk7dmFyIGE9ZnVuY3Rpb24oZSl7cmV0dXJuIFRyKHQsZnVuY3Rpb24oKXtpZighaSl7aT1uZXcgRnVuY3Rpb24oXCJldmVudFwiLHIpfWkuY2FsbCh0LGUpfSl9O3QuYWRkRXZlbnRMaXN0ZW5lcihlLGEpO24ub25IYW5kbGVycy5wdXNoKHtldmVudDplLGxpc3RlbmVyOmF9KX1mdW5jdGlvbiBWdChlKXt2YXIgdD10ZShlLFwiaHgtb25cIik7aWYodCl7dmFyIHI9e307dmFyIG49dC5zcGxpdChcIlxcblwiKTt2YXIgaT1udWxsO3ZhciBhPTA7d2hpbGUobi5sZW5ndGg+MCl7dmFyIG89bi5zaGlmdCgpO3ZhciBzPW8ubWF0Y2goL15cXHMqKFthLXpBLVo6XFwtXFwuXSs6KSguKikvKTtpZihhPT09MCYmcyl7by5zcGxpdChcIjpcIik7aT1zWzFdLnNsaWNlKDAsLTEpO3JbaV09c1syXX1lbHNle3JbaV0rPW99YSs9QnQobyl9Zm9yKHZhciBsIGluIHIpe0Z0KGUsbCxyW2xdKX19fWZ1bmN0aW9uIGp0KGUpe0FlKGUpO2Zvcih2YXIgdD0wO3Q8ZS5hdHRyaWJ1dGVzLmxlbmd0aDt0Kyspe3ZhciByPWUuYXR0cmlidXRlc1t0XS5uYW1lO3ZhciBuPWUuYXR0cmlidXRlc1t0XS52YWx1ZTtpZihzKHIsXCJoeC1vblwiKXx8cyhyLFwiZGF0YS1oeC1vblwiKSl7dmFyIGk9ci5pbmRleE9mKFwiLW9uXCIpKzM7dmFyIGE9ci5zbGljZShpLGkrMSk7aWYoYT09PVwiLVwifHxhPT09XCI6XCIpe3ZhciBvPXIuc2xpY2UoaSsxKTtpZihzKG8sXCI6XCIpKXtvPVwiaHRteFwiK299ZWxzZSBpZihzKG8sXCItXCIpKXtvPVwiaHRteDpcIitvLnNsaWNlKDEpfWVsc2UgaWYocyhvLFwiaHRteC1cIikpe289XCJodG14OlwiK28uc2xpY2UoNSl9RnQoZSxvLG4pfX19fWZ1bmN0aW9uIF90KHQpe2lmKHYodCxRLmNvbmZpZy5kaXNhYmxlU2VsZWN0b3IpKXtwKHQpO3JldHVybn12YXIgcj1hZSh0KTtpZihyLmluaXRIYXNoIT09TGUodCkpe05lKHQpO3IuaW5pdEhhc2g9TGUodCk7VnQodCk7Y2UodCxcImh0bXg6YmVmb3JlUHJvY2Vzc05vZGVcIik7aWYodC52YWx1ZSl7ci5sYXN0VmFsdWU9dC52YWx1ZX12YXIgZT1pdCh0KTt2YXIgbj1IdCh0LHIsZSk7aWYoIW4pe2lmKG5lKHQsXCJoeC1ib29zdFwiKT09PVwidHJ1ZVwiKXtsdCh0LHIsZSl9ZWxzZSBpZihvKHQsXCJoeC10cmlnZ2VyXCIpKXtlLmZvckVhY2goZnVuY3Rpb24oZSl7THQodCxlLHIsZnVuY3Rpb24oKXt9KX0pfX1pZih0LnRhZ05hbWU9PT1cIkZPUk1cInx8ZWUodCxcInR5cGVcIik9PT1cInN1Ym1pdFwiJiZvKHQsXCJmb3JtXCIpKXtVdCh0KX12YXIgaT10ZSh0LFwiaHgtc3NlXCIpO2lmKGkpe1N0KHQscixpKX12YXIgYT10ZSh0LFwiaHgtd3NcIik7aWYoYSl7cHQodCxyLGEpfWNlKHQsXCJodG14OmFmdGVyUHJvY2Vzc05vZGVcIil9fWZ1bmN0aW9uIHp0KGUpe2U9ZyhlKTtpZih2KGUsUS5jb25maWcuZGlzYWJsZVNlbGVjdG9yKSl7cChlKTtyZXR1cm59X3QoZSk7b2UoUHQoZSksZnVuY3Rpb24oZSl7X3QoZSl9KTtvZShrdChlKSxqdCl9ZnVuY3Rpb24gJHQoZSl7cmV0dXJuIGUucmVwbGFjZSgvKFthLXowLTldKShbQS1aXSkvZyxcIiQxLSQyXCIpLnRvTG93ZXJDYXNlKCl9ZnVuY3Rpb24gV3QoZSx0KXt2YXIgcjtpZih3aW5kb3cuQ3VzdG9tRXZlbnQmJnR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQ9PT1cImZ1bmN0aW9uXCIpe3I9bmV3IEN1c3RvbUV2ZW50KGUse2J1YmJsZXM6dHJ1ZSxjYW5jZWxhYmxlOnRydWUsZGV0YWlsOnR9KX1lbHNle3I9cmUoKS5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO3IuaW5pdEN1c3RvbUV2ZW50KGUsdHJ1ZSx0cnVlLHQpfXJldHVybiByfWZ1bmN0aW9uIGZlKGUsdCxyKXtjZShlLHQsbGUoe2Vycm9yOnR9LHIpKX1mdW5jdGlvbiBHdChlKXtyZXR1cm4gZT09PVwiaHRteDphZnRlclByb2Nlc3NOb2RlXCJ9ZnVuY3Rpb24gUihlLHQpe29lKEZyKGUpLGZ1bmN0aW9uKGUpe3RyeXt0KGUpfWNhdGNoKGUpe2IoZSl9fSl9ZnVuY3Rpb24gYihlKXtpZihjb25zb2xlLmVycm9yKXtjb25zb2xlLmVycm9yKGUpfWVsc2UgaWYoY29uc29sZS5sb2cpe2NvbnNvbGUubG9nKFwiRVJST1I6IFwiLGUpfX1mdW5jdGlvbiBjZShlLHQscil7ZT1nKGUpO2lmKHI9PW51bGwpe3I9e319cltcImVsdFwiXT1lO3ZhciBuPVd0KHQscik7aWYoUS5sb2dnZXImJiFHdCh0KSl7US5sb2dnZXIoZSx0LHIpfWlmKHIuZXJyb3Ipe2Ioci5lcnJvcik7Y2UoZSxcImh0bXg6ZXJyb3JcIix7ZXJyb3JJbmZvOnJ9KX12YXIgaT1lLmRpc3BhdGNoRXZlbnQobik7dmFyIGE9JHQodCk7aWYoaSYmYSE9PXQpe3ZhciBvPVd0KGEsbi5kZXRhaWwpO2k9aSYmZS5kaXNwYXRjaEV2ZW50KG8pfVIoZSxmdW5jdGlvbihlKXtpPWkmJihlLm9uRXZlbnQodCxuKSE9PWZhbHNlJiYhbi5kZWZhdWx0UHJldmVudGVkKX0pO3JldHVybiBpfXZhciBKdD1sb2NhdGlvbi5wYXRobmFtZStsb2NhdGlvbi5zZWFyY2g7ZnVuY3Rpb24gWnQoKXt2YXIgZT1yZSgpLnF1ZXJ5U2VsZWN0b3IoXCJbaHgtaGlzdG9yeS1lbHRdLFtkYXRhLWh4LWhpc3RvcnktZWx0XVwiKTtyZXR1cm4gZXx8cmUoKS5ib2R5fWZ1bmN0aW9uIEt0KGUsdCxyLG4pe2lmKCFVKCkpe3JldHVybn1pZihRLmNvbmZpZy5oaXN0b3J5Q2FjaGVTaXplPD0wKXtsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImh0bXgtaGlzdG9yeS1jYWNoZVwiKTtyZXR1cm59ZT1CKGUpO3ZhciBpPUUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJodG14LWhpc3RvcnktY2FjaGVcIikpfHxbXTtmb3IodmFyIGE9MDthPGkubGVuZ3RoO2ErKyl7aWYoaVthXS51cmw9PT1lKXtpLnNwbGljZShhLDEpO2JyZWFrfX12YXIgbz17dXJsOmUsY29udGVudDp0LHRpdGxlOnIsc2Nyb2xsOm59O2NlKHJlKCkuYm9keSxcImh0bXg6aGlzdG9yeUl0ZW1DcmVhdGVkXCIse2l0ZW06byxjYWNoZTppfSk7aS5wdXNoKG8pO3doaWxlKGkubGVuZ3RoPlEuY29uZmlnLmhpc3RvcnlDYWNoZVNpemUpe2kuc2hpZnQoKX13aGlsZShpLmxlbmd0aD4wKXt0cnl7bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJodG14LWhpc3RvcnktY2FjaGVcIixKU09OLnN0cmluZ2lmeShpKSk7YnJlYWt9Y2F0Y2goZSl7ZmUocmUoKS5ib2R5LFwiaHRteDpoaXN0b3J5Q2FjaGVFcnJvclwiLHtjYXVzZTplLGNhY2hlOml9KTtpLnNoaWZ0KCl9fX1mdW5jdGlvbiBZdChlKXtpZighVSgpKXtyZXR1cm4gbnVsbH1lPUIoZSk7dmFyIHQ9RShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImh0bXgtaGlzdG9yeS1jYWNoZVwiKSl8fFtdO2Zvcih2YXIgcj0wO3I8dC5sZW5ndGg7cisrKXtpZih0W3JdLnVybD09PWUpe3JldHVybiB0W3JdfX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBRdChlKXt2YXIgdD1RLmNvbmZpZy5yZXF1ZXN0Q2xhc3M7dmFyIHI9ZS5jbG9uZU5vZGUodHJ1ZSk7b2UoZihyLFwiLlwiK3QpLGZ1bmN0aW9uKGUpe24oZSx0KX0pO3JldHVybiByLmlubmVySFRNTH1mdW5jdGlvbiBlcigpe3ZhciBlPVp0KCk7dmFyIHQ9SnR8fGxvY2F0aW9uLnBhdGhuYW1lK2xvY2F0aW9uLnNlYXJjaDt2YXIgcjt0cnl7cj1yZSgpLnF1ZXJ5U2VsZWN0b3IoJ1toeC1oaXN0b3J5PVwiZmFsc2VcIiBpXSxbZGF0YS1oeC1oaXN0b3J5PVwiZmFsc2VcIiBpXScpfWNhdGNoKGUpe3I9cmUoKS5xdWVyeVNlbGVjdG9yKCdbaHgtaGlzdG9yeT1cImZhbHNlXCJdLFtkYXRhLWh4LWhpc3Rvcnk9XCJmYWxzZVwiXScpfWlmKCFyKXtjZShyZSgpLmJvZHksXCJodG14OmJlZm9yZUhpc3RvcnlTYXZlXCIse3BhdGg6dCxoaXN0b3J5RWx0OmV9KTtLdCh0LFF0KGUpLHJlKCkudGl0bGUsd2luZG93LnNjcm9sbFkpfWlmKFEuY29uZmlnLmhpc3RvcnlFbmFibGVkKWhpc3RvcnkucmVwbGFjZVN0YXRlKHtodG14OnRydWV9LHJlKCkudGl0bGUsd2luZG93LmxvY2F0aW9uLmhyZWYpfWZ1bmN0aW9uIHRyKGUpe2lmKFEuY29uZmlnLmdldENhY2hlQnVzdGVyUGFyYW0pe2U9ZS5yZXBsYWNlKC9vcmdcXC5odG14XFwuY2FjaGUtYnVzdGVyPVteJl0qJj8vLFwiXCIpO2lmKEcoZSxcIiZcIil8fEcoZSxcIj9cIikpe2U9ZS5zbGljZSgwLC0xKX19aWYoUS5jb25maWcuaGlzdG9yeUVuYWJsZWQpe2hpc3RvcnkucHVzaFN0YXRlKHtodG14OnRydWV9LFwiXCIsZSl9SnQ9ZX1mdW5jdGlvbiBycihlKXtpZihRLmNvbmZpZy5oaXN0b3J5RW5hYmxlZCloaXN0b3J5LnJlcGxhY2VTdGF0ZSh7aHRteDp0cnVlfSxcIlwiLGUpO0p0PWV9ZnVuY3Rpb24gbnIoZSl7b2UoZSxmdW5jdGlvbihlKXtlLmNhbGwoKX0pfWZ1bmN0aW9uIGlyKGEpe3ZhciBlPW5ldyBYTUxIdHRwUmVxdWVzdDt2YXIgbz17cGF0aDphLHhocjplfTtjZShyZSgpLmJvZHksXCJodG14Omhpc3RvcnlDYWNoZU1pc3NcIixvKTtlLm9wZW4oXCJHRVRcIixhLHRydWUpO2Uuc2V0UmVxdWVzdEhlYWRlcihcIkhYLVJlcXVlc3RcIixcInRydWVcIik7ZS5zZXRSZXF1ZXN0SGVhZGVyKFwiSFgtSGlzdG9yeS1SZXN0b3JlLVJlcXVlc3RcIixcInRydWVcIik7ZS5zZXRSZXF1ZXN0SGVhZGVyKFwiSFgtQ3VycmVudC1VUkxcIixyZSgpLmxvY2F0aW9uLmhyZWYpO2Uub25sb2FkPWZ1bmN0aW9uKCl7aWYodGhpcy5zdGF0dXM+PTIwMCYmdGhpcy5zdGF0dXM8NDAwKXtjZShyZSgpLmJvZHksXCJodG14Omhpc3RvcnlDYWNoZU1pc3NMb2FkXCIsbyk7dmFyIGU9bCh0aGlzLnJlc3BvbnNlKTtlPWUucXVlcnlTZWxlY3RvcihcIltoeC1oaXN0b3J5LWVsdF0sW2RhdGEtaHgtaGlzdG9yeS1lbHRdXCIpfHxlO3ZhciB0PVp0KCk7dmFyIHI9VCh0KTt2YXIgbj1WZSh0aGlzLnJlc3BvbnNlKTtpZihuKXt2YXIgaT1DKFwidGl0bGVcIik7aWYoaSl7aS5pbm5lckhUTUw9bn1lbHNle3dpbmRvdy5kb2N1bWVudC50aXRsZT1ufX1VZSh0LGUscik7bnIoci50YXNrcyk7SnQ9YTtjZShyZSgpLmJvZHksXCJodG14Omhpc3RvcnlSZXN0b3JlXCIse3BhdGg6YSxjYWNoZU1pc3M6dHJ1ZSxzZXJ2ZXJSZXNwb25zZTp0aGlzLnJlc3BvbnNlfSl9ZWxzZXtmZShyZSgpLmJvZHksXCJodG14Omhpc3RvcnlDYWNoZU1pc3NMb2FkRXJyb3JcIixvKX19O2Uuc2VuZCgpfWZ1bmN0aW9uIGFyKGUpe2VyKCk7ZT1lfHxsb2NhdGlvbi5wYXRobmFtZStsb2NhdGlvbi5zZWFyY2g7dmFyIHQ9WXQoZSk7aWYodCl7dmFyIHI9bCh0LmNvbnRlbnQpO3ZhciBuPVp0KCk7dmFyIGk9VChuKTtVZShuLHIsaSk7bnIoaS50YXNrcyk7ZG9jdW1lbnQudGl0bGU9dC50aXRsZTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7d2luZG93LnNjcm9sbFRvKDAsdC5zY3JvbGwpfSwwKTtKdD1lO2NlKHJlKCkuYm9keSxcImh0bXg6aGlzdG9yeVJlc3RvcmVcIix7cGF0aDplLGl0ZW06dH0pfWVsc2V7aWYoUS5jb25maWcucmVmcmVzaE9uSGlzdG9yeU1pc3Mpe3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSl9ZWxzZXtpcihlKX19fWZ1bmN0aW9uIG9yKGUpe3ZhciB0PXBlKGUsXCJoeC1pbmRpY2F0b3JcIik7aWYodD09bnVsbCl7dD1bZV19b2UodCxmdW5jdGlvbihlKXt2YXIgdD1hZShlKTt0LnJlcXVlc3RDb3VudD0odC5yZXF1ZXN0Q291bnR8fDApKzE7ZS5jbGFzc0xpc3RbXCJhZGRcIl0uY2FsbChlLmNsYXNzTGlzdCxRLmNvbmZpZy5yZXF1ZXN0Q2xhc3MpfSk7cmV0dXJuIHR9ZnVuY3Rpb24gc3IoZSl7dmFyIHQ9cGUoZSxcImh4LWRpc2FibGVkLWVsdFwiKTtpZih0PT1udWxsKXt0PVtdfW9lKHQsZnVuY3Rpb24oZSl7dmFyIHQ9YWUoZSk7dC5yZXF1ZXN0Q291bnQ9KHQucmVxdWVzdENvdW50fHwwKSsxO2Uuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIixcIlwiKX0pO3JldHVybiB0fWZ1bmN0aW9uIGxyKGUsdCl7b2UoZSxmdW5jdGlvbihlKXt2YXIgdD1hZShlKTt0LnJlcXVlc3RDb3VudD0odC5yZXF1ZXN0Q291bnR8fDApLTE7aWYodC5yZXF1ZXN0Q291bnQ9PT0wKXtlLmNsYXNzTGlzdFtcInJlbW92ZVwiXS5jYWxsKGUuY2xhc3NMaXN0LFEuY29uZmlnLnJlcXVlc3RDbGFzcyl9fSk7b2UodCxmdW5jdGlvbihlKXt2YXIgdD1hZShlKTt0LnJlcXVlc3RDb3VudD0odC5yZXF1ZXN0Q291bnR8fDApLTE7aWYodC5yZXF1ZXN0Q291bnQ9PT0wKXtlLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpfX0pfWZ1bmN0aW9uIHVyKGUsdCl7Zm9yKHZhciByPTA7cjxlLmxlbmd0aDtyKyspe3ZhciBuPWVbcl07aWYobi5pc1NhbWVOb2RlKHQpKXtyZXR1cm4gdHJ1ZX19cmV0dXJuIGZhbHNlfWZ1bmN0aW9uIGZyKGUpe2lmKGUubmFtZT09PVwiXCJ8fGUubmFtZT09bnVsbHx8ZS5kaXNhYmxlZHx8dihlLFwiZmllbGRzZXRbZGlzYWJsZWRdXCIpKXtyZXR1cm4gZmFsc2V9aWYoZS50eXBlPT09XCJidXR0b25cInx8ZS50eXBlPT09XCJzdWJtaXRcInx8ZS50YWdOYW1lPT09XCJpbWFnZVwifHxlLnRhZ05hbWU9PT1cInJlc2V0XCJ8fGUudGFnTmFtZT09PVwiZmlsZVwiKXtyZXR1cm4gZmFsc2V9aWYoZS50eXBlPT09XCJjaGVja2JveFwifHxlLnR5cGU9PT1cInJhZGlvXCIpe3JldHVybiBlLmNoZWNrZWR9cmV0dXJuIHRydWV9ZnVuY3Rpb24gY3IoZSx0LHIpe2lmKGUhPW51bGwmJnQhPW51bGwpe3ZhciBuPXJbZV07aWYobj09PXVuZGVmaW5lZCl7cltlXT10fWVsc2UgaWYoQXJyYXkuaXNBcnJheShuKSl7aWYoQXJyYXkuaXNBcnJheSh0KSl7cltlXT1uLmNvbmNhdCh0KX1lbHNle24ucHVzaCh0KX19ZWxzZXtpZihBcnJheS5pc0FycmF5KHQpKXtyW2VdPVtuXS5jb25jYXQodCl9ZWxzZXtyW2VdPVtuLHRdfX19fWZ1bmN0aW9uIGhyKHQscixuLGUsaSl7aWYoZT09bnVsbHx8dXIodCxlKSl7cmV0dXJufWVsc2V7dC5wdXNoKGUpfWlmKGZyKGUpKXt2YXIgYT1lZShlLFwibmFtZVwiKTt2YXIgbz1lLnZhbHVlO2lmKGUubXVsdGlwbGUmJmUudGFnTmFtZT09PVwiU0VMRUNUXCIpe289TShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb246Y2hlY2tlZFwiKSkubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBlLnZhbHVlfSl9aWYoZS5maWxlcyl7bz1NKGUuZmlsZXMpfWNyKGEsbyxyKTtpZihpKXt2cihlLG4pfX1pZihoKGUsXCJmb3JtXCIpKXt2YXIgcz1lLmVsZW1lbnRzO29lKHMsZnVuY3Rpb24oZSl7aHIodCxyLG4sZSxpKX0pfX1mdW5jdGlvbiB2cihlLHQpe2lmKGUud2lsbFZhbGlkYXRlKXtjZShlLFwiaHRteDp2YWxpZGF0aW9uOnZhbGlkYXRlXCIpO2lmKCFlLmNoZWNrVmFsaWRpdHkoKSl7dC5wdXNoKHtlbHQ6ZSxtZXNzYWdlOmUudmFsaWRhdGlvbk1lc3NhZ2UsdmFsaWRpdHk6ZS52YWxpZGl0eX0pO2NlKGUsXCJodG14OnZhbGlkYXRpb246ZmFpbGVkXCIse21lc3NhZ2U6ZS52YWxpZGF0aW9uTWVzc2FnZSx2YWxpZGl0eTplLnZhbGlkaXR5fSl9fX1mdW5jdGlvbiBkcihlLHQpe3ZhciByPVtdO3ZhciBuPXt9O3ZhciBpPXt9O3ZhciBhPVtdO3ZhciBvPWFlKGUpO2lmKG8ubGFzdEJ1dHRvbkNsaWNrZWQmJiFzZShvLmxhc3RCdXR0b25DbGlja2VkKSl7by5sYXN0QnV0dG9uQ2xpY2tlZD1udWxsfXZhciBzPWgoZSxcImZvcm1cIikmJmUubm9WYWxpZGF0ZSE9PXRydWV8fHRlKGUsXCJoeC12YWxpZGF0ZVwiKT09PVwidHJ1ZVwiO2lmKG8ubGFzdEJ1dHRvbkNsaWNrZWQpe3M9cyYmby5sYXN0QnV0dG9uQ2xpY2tlZC5mb3JtTm9WYWxpZGF0ZSE9PXRydWV9aWYodCE9PVwiZ2V0XCIpe2hyKHIsaSxhLHYoZSxcImZvcm1cIikscyl9aHIocixuLGEsZSxzKTtpZihvLmxhc3RCdXR0b25DbGlja2VkfHxlLnRhZ05hbWU9PT1cIkJVVFRPTlwifHxlLnRhZ05hbWU9PT1cIklOUFVUXCImJmVlKGUsXCJ0eXBlXCIpPT09XCJzdWJtaXRcIil7dmFyIGw9by5sYXN0QnV0dG9uQ2xpY2tlZHx8ZTt2YXIgdT1lZShsLFwibmFtZVwiKTtjcih1LGwudmFsdWUsaSl9dmFyIGY9cGUoZSxcImh4LWluY2x1ZGVcIik7b2UoZixmdW5jdGlvbihlKXtocihyLG4sYSxlLHMpO2lmKCFoKGUsXCJmb3JtXCIpKXtvZShlLnF1ZXJ5U2VsZWN0b3JBbGwocnQpLGZ1bmN0aW9uKGUpe2hyKHIsbixhLGUscyl9KX19KTtuPWxlKG4saSk7cmV0dXJue2Vycm9yczphLHZhbHVlczpufX1mdW5jdGlvbiBncihlLHQscil7aWYoZSE9PVwiXCIpe2UrPVwiJlwifWlmKFN0cmluZyhyKT09PVwiW29iamVjdCBPYmplY3RdXCIpe3I9SlNPTi5zdHJpbmdpZnkocil9dmFyIG49ZW5jb2RlVVJJQ29tcG9uZW50KHIpO2UrPWVuY29kZVVSSUNvbXBvbmVudCh0KStcIj1cIituO3JldHVybiBlfWZ1bmN0aW9uIG1yKGUpe3ZhciB0PVwiXCI7Zm9yKHZhciByIGluIGUpe2lmKGUuaGFzT3duUHJvcGVydHkocikpe3ZhciBuPWVbcl07aWYoQXJyYXkuaXNBcnJheShuKSl7b2UobixmdW5jdGlvbihlKXt0PWdyKHQscixlKX0pfWVsc2V7dD1ncih0LHIsbil9fX1yZXR1cm4gdH1mdW5jdGlvbiBwcihlKXt2YXIgdD1uZXcgRm9ybURhdGE7Zm9yKHZhciByIGluIGUpe2lmKGUuaGFzT3duUHJvcGVydHkocikpe3ZhciBuPWVbcl07aWYoQXJyYXkuaXNBcnJheShuKSl7b2UobixmdW5jdGlvbihlKXt0LmFwcGVuZChyLGUpfSl9ZWxzZXt0LmFwcGVuZChyLG4pfX19cmV0dXJuIHR9ZnVuY3Rpb24geHIoZSx0LHIpe3ZhciBuPXtcIkhYLVJlcXVlc3RcIjpcInRydWVcIixcIkhYLVRyaWdnZXJcIjplZShlLFwiaWRcIiksXCJIWC1UcmlnZ2VyLU5hbWVcIjplZShlLFwibmFtZVwiKSxcIkhYLVRhcmdldFwiOnRlKHQsXCJpZFwiKSxcIkhYLUN1cnJlbnQtVVJMXCI6cmUoKS5sb2NhdGlvbi5ocmVmfTtScihlLFwiaHgtaGVhZGVyc1wiLGZhbHNlLG4pO2lmKHIhPT11bmRlZmluZWQpe25bXCJIWC1Qcm9tcHRcIl09cn1pZihhZShlKS5ib29zdGVkKXtuW1wiSFgtQm9vc3RlZFwiXT1cInRydWVcIn1yZXR1cm4gbn1mdW5jdGlvbiB5cih0LGUpe3ZhciByPW5lKGUsXCJoeC1wYXJhbXNcIik7aWYocil7aWYocj09PVwibm9uZVwiKXtyZXR1cm57fX1lbHNlIGlmKHI9PT1cIipcIil7cmV0dXJuIHR9ZWxzZSBpZihyLmluZGV4T2YoXCJub3QgXCIpPT09MCl7b2Uoci5zdWJzdHIoNCkuc3BsaXQoXCIsXCIpLGZ1bmN0aW9uKGUpe2U9ZS50cmltKCk7ZGVsZXRlIHRbZV19KTtyZXR1cm4gdH1lbHNle3ZhciBuPXt9O29lKHIuc3BsaXQoXCIsXCIpLGZ1bmN0aW9uKGUpe2U9ZS50cmltKCk7bltlXT10W2VdfSk7cmV0dXJuIG59fWVsc2V7cmV0dXJuIHR9fWZ1bmN0aW9uIGJyKGUpe3JldHVybiBlZShlLFwiaHJlZlwiKSYmZWUoZSxcImhyZWZcIikuaW5kZXhPZihcIiNcIik+PTB9ZnVuY3Rpb24gd3IoZSx0KXt2YXIgcj10P3Q6bmUoZSxcImh4LXN3YXBcIik7dmFyIG49e3N3YXBTdHlsZTphZShlKS5ib29zdGVkP1wiaW5uZXJIVE1MXCI6US5jb25maWcuZGVmYXVsdFN3YXBTdHlsZSxzd2FwRGVsYXk6US5jb25maWcuZGVmYXVsdFN3YXBEZWxheSxzZXR0bGVEZWxheTpRLmNvbmZpZy5kZWZhdWx0U2V0dGxlRGVsYXl9O2lmKFEuY29uZmlnLnNjcm9sbEludG9WaWV3T25Cb29zdCYmYWUoZSkuYm9vc3RlZCYmIWJyKGUpKXtuW1wic2hvd1wiXT1cInRvcFwifWlmKHIpe3ZhciBpPUQocik7aWYoaS5sZW5ndGg+MCl7Zm9yKHZhciBhPTA7YTxpLmxlbmd0aDthKyspe3ZhciBvPWlbYV07aWYoby5pbmRleE9mKFwic3dhcDpcIik9PT0wKXtuW1wic3dhcERlbGF5XCJdPWQoby5zdWJzdHIoNSkpfWVsc2UgaWYoby5pbmRleE9mKFwic2V0dGxlOlwiKT09PTApe25bXCJzZXR0bGVEZWxheVwiXT1kKG8uc3Vic3RyKDcpKX1lbHNlIGlmKG8uaW5kZXhPZihcInRyYW5zaXRpb246XCIpPT09MCl7bltcInRyYW5zaXRpb25cIl09by5zdWJzdHIoMTEpPT09XCJ0cnVlXCJ9ZWxzZSBpZihvLmluZGV4T2YoXCJpZ25vcmVUaXRsZTpcIik9PT0wKXtuW1wiaWdub3JlVGl0bGVcIl09by5zdWJzdHIoMTIpPT09XCJ0cnVlXCJ9ZWxzZSBpZihvLmluZGV4T2YoXCJzY3JvbGw6XCIpPT09MCl7dmFyIHM9by5zdWJzdHIoNyk7dmFyIGw9cy5zcGxpdChcIjpcIik7dmFyIHU9bC5wb3AoKTt2YXIgZj1sLmxlbmd0aD4wP2wuam9pbihcIjpcIik6bnVsbDtuW1wic2Nyb2xsXCJdPXU7bltcInNjcm9sbFRhcmdldFwiXT1mfWVsc2UgaWYoby5pbmRleE9mKFwic2hvdzpcIik9PT0wKXt2YXIgYz1vLnN1YnN0cig1KTt2YXIgbD1jLnNwbGl0KFwiOlwiKTt2YXIgaD1sLnBvcCgpO3ZhciBmPWwubGVuZ3RoPjA/bC5qb2luKFwiOlwiKTpudWxsO25bXCJzaG93XCJdPWg7bltcInNob3dUYXJnZXRcIl09Zn1lbHNlIGlmKG8uaW5kZXhPZihcImZvY3VzLXNjcm9sbDpcIik9PT0wKXt2YXIgdj1vLnN1YnN0cihcImZvY3VzLXNjcm9sbDpcIi5sZW5ndGgpO25bXCJmb2N1c1Njcm9sbFwiXT12PT1cInRydWVcIn1lbHNlIGlmKGE9PTApe25bXCJzd2FwU3R5bGVcIl09b31lbHNle2IoXCJVbmtub3duIG1vZGlmaWVyIGluIGh4LXN3YXA6IFwiK28pfX19fXJldHVybiBufWZ1bmN0aW9uIFNyKGUpe3JldHVybiBuZShlLFwiaHgtZW5jb2RpbmdcIik9PT1cIm11bHRpcGFydC9mb3JtLWRhdGFcInx8aChlLFwiZm9ybVwiKSYmZWUoZSxcImVuY3R5cGVcIik9PT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIn1mdW5jdGlvbiBFcih0LHIsbil7dmFyIGk9bnVsbDtSKHIsZnVuY3Rpb24oZSl7aWYoaT09bnVsbCl7aT1lLmVuY29kZVBhcmFtZXRlcnModCxuLHIpfX0pO2lmKGkhPW51bGwpe3JldHVybiBpfWVsc2V7aWYoU3Iocikpe3JldHVybiBwcihuKX1lbHNle3JldHVybiBtcihuKX19fWZ1bmN0aW9uIFQoZSl7cmV0dXJue3Rhc2tzOltdLGVsdHM6W2VdfX1mdW5jdGlvbiBDcihlLHQpe3ZhciByPWVbMF07dmFyIG49ZVtlLmxlbmd0aC0xXTtpZih0LnNjcm9sbCl7dmFyIGk9bnVsbDtpZih0LnNjcm9sbFRhcmdldCl7aT11ZShyLHQuc2Nyb2xsVGFyZ2V0KX1pZih0LnNjcm9sbD09PVwidG9wXCImJihyfHxpKSl7aT1pfHxyO2kuc2Nyb2xsVG9wPTB9aWYodC5zY3JvbGw9PT1cImJvdHRvbVwiJiYobnx8aSkpe2k9aXx8bjtpLnNjcm9sbFRvcD1pLnNjcm9sbEhlaWdodH19aWYodC5zaG93KXt2YXIgaT1udWxsO2lmKHQuc2hvd1RhcmdldCl7dmFyIGE9dC5zaG93VGFyZ2V0O2lmKHQuc2hvd1RhcmdldD09PVwid2luZG93XCIpe2E9XCJib2R5XCJ9aT11ZShyLGEpfWlmKHQuc2hvdz09PVwidG9wXCImJihyfHxpKSl7aT1pfHxyO2kuc2Nyb2xsSW50b1ZpZXcoe2Jsb2NrOlwic3RhcnRcIixiZWhhdmlvcjpRLmNvbmZpZy5zY3JvbGxCZWhhdmlvcn0pfWlmKHQuc2hvdz09PVwiYm90dG9tXCImJihufHxpKSl7aT1pfHxuO2kuc2Nyb2xsSW50b1ZpZXcoe2Jsb2NrOlwiZW5kXCIsYmVoYXZpb3I6US5jb25maWcuc2Nyb2xsQmVoYXZpb3J9KX19fWZ1bmN0aW9uIFJyKGUsdCxyLG4pe2lmKG49PW51bGwpe249e319aWYoZT09bnVsbCl7cmV0dXJuIG59dmFyIGk9dGUoZSx0KTtpZihpKXt2YXIgYT1pLnRyaW0oKTt2YXIgbz1yO2lmKGE9PT1cInVuc2V0XCIpe3JldHVybiBudWxsfWlmKGEuaW5kZXhPZihcImphdmFzY3JpcHQ6XCIpPT09MCl7YT1hLnN1YnN0cigxMSk7bz10cnVlfWVsc2UgaWYoYS5pbmRleE9mKFwianM6XCIpPT09MCl7YT1hLnN1YnN0cigzKTtvPXRydWV9aWYoYS5pbmRleE9mKFwie1wiKSE9PTApe2E9XCJ7XCIrYStcIn1cIn12YXIgcztpZihvKXtzPVRyKGUsZnVuY3Rpb24oKXtyZXR1cm4gRnVuY3Rpb24oXCJyZXR1cm4gKFwiK2ErXCIpXCIpKCl9LHt9KX1lbHNle3M9RShhKX1mb3IodmFyIGwgaW4gcyl7aWYocy5oYXNPd25Qcm9wZXJ0eShsKSl7aWYobltsXT09bnVsbCl7bltsXT1zW2xdfX19fXJldHVybiBScih1KGUpLHQscixuKX1mdW5jdGlvbiBUcihlLHQscil7aWYoUS5jb25maWcuYWxsb3dFdmFsKXtyZXR1cm4gdCgpfWVsc2V7ZmUoZSxcImh0bXg6ZXZhbERpc2FsbG93ZWRFcnJvclwiKTtyZXR1cm4gcn19ZnVuY3Rpb24gT3IoZSx0KXtyZXR1cm4gUnIoZSxcImh4LXZhcnNcIix0cnVlLHQpfWZ1bmN0aW9uIHFyKGUsdCl7cmV0dXJuIFJyKGUsXCJoeC12YWxzXCIsZmFsc2UsdCl9ZnVuY3Rpb24gSHIoZSl7cmV0dXJuIGxlKE9yKGUpLHFyKGUpKX1mdW5jdGlvbiBMcih0LHIsbil7aWYobiE9PW51bGwpe3RyeXt0LnNldFJlcXVlc3RIZWFkZXIocixuKX1jYXRjaChlKXt0LnNldFJlcXVlc3RIZWFkZXIocixlbmNvZGVVUklDb21wb25lbnQobikpO3Quc2V0UmVxdWVzdEhlYWRlcihyK1wiLVVSSS1BdXRvRW5jb2RlZFwiLFwidHJ1ZVwiKX19fWZ1bmN0aW9uIEFyKHQpe2lmKHQucmVzcG9uc2VVUkwmJnR5cGVvZiBVUkwhPT1cInVuZGVmaW5lZFwiKXt0cnl7dmFyIGU9bmV3IFVSTCh0LnJlc3BvbnNlVVJMKTtyZXR1cm4gZS5wYXRobmFtZStlLnNlYXJjaH1jYXRjaChlKXtmZShyZSgpLmJvZHksXCJodG14OmJhZFJlc3BvbnNlVXJsXCIse3VybDp0LnJlc3BvbnNlVVJMfSl9fX1mdW5jdGlvbiBPKGUsdCl7cmV0dXJuIHQudGVzdChlLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKX1mdW5jdGlvbiBOcihlLHQscil7ZT1lLnRvTG93ZXJDYXNlKCk7aWYocil7aWYociBpbnN0YW5jZW9mIEVsZW1lbnR8fEkocixcIlN0cmluZ1wiKSl7cmV0dXJuIGhlKGUsdCxudWxsLG51bGwse3RhcmdldE92ZXJyaWRlOmcocikscmV0dXJuUHJvbWlzZTp0cnVlfSl9ZWxzZXtyZXR1cm4gaGUoZSx0LGcoci5zb3VyY2UpLHIuZXZlbnQse2hhbmRsZXI6ci5oYW5kbGVyLGhlYWRlcnM6ci5oZWFkZXJzLHZhbHVlczpyLnZhbHVlcyx0YXJnZXRPdmVycmlkZTpnKHIudGFyZ2V0KSxzd2FwT3ZlcnJpZGU6ci5zd2FwLHNlbGVjdDpyLnNlbGVjdCxyZXR1cm5Qcm9taXNlOnRydWV9KX19ZWxzZXtyZXR1cm4gaGUoZSx0LG51bGwsbnVsbCx7cmV0dXJuUHJvbWlzZTp0cnVlfSl9fWZ1bmN0aW9uIElyKGUpe3ZhciB0PVtdO3doaWxlKGUpe3QucHVzaChlKTtlPWUucGFyZW50RWxlbWVudH1yZXR1cm4gdH1mdW5jdGlvbiBrcihlLHQscil7dmFyIG47dmFyIGk7aWYodHlwZW9mIFVSTD09PVwiZnVuY3Rpb25cIil7aT1uZXcgVVJMKHQsZG9jdW1lbnQubG9jYXRpb24uaHJlZik7dmFyIGE9ZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luO249YT09PWkub3JpZ2lufWVsc2V7aT10O249cyh0LGRvY3VtZW50LmxvY2F0aW9uLm9yaWdpbil9aWYoUS5jb25maWcuc2VsZlJlcXVlc3RzT25seSl7aWYoIW4pe3JldHVybiBmYWxzZX19cmV0dXJuIGNlKGUsXCJodG14OnZhbGlkYXRlVXJsXCIsbGUoe3VybDppLHNhbWVIb3N0Om59LHIpKX1mdW5jdGlvbiBoZSh0LHIsbixpLGEsZSl7dmFyIG89bnVsbDt2YXIgcz1udWxsO2E9YSE9bnVsbD9hOnt9O2lmKGEucmV0dXJuUHJvbWlzZSYmdHlwZW9mIFByb21pc2UhPT1cInVuZGVmaW5lZFwiKXt2YXIgbD1uZXcgUHJvbWlzZShmdW5jdGlvbihlLHQpe289ZTtzPXR9KX1pZihuPT1udWxsKXtuPXJlKCkuYm9keX12YXIgTT1hLmhhbmRsZXJ8fE1yO3ZhciBYPWEuc2VsZWN0fHxudWxsO2lmKCFzZShuKSl7aWUobyk7cmV0dXJuIGx9dmFyIHU9YS50YXJnZXRPdmVycmlkZXx8eWUobik7aWYodT09bnVsbHx8dT09bWUpe2ZlKG4sXCJodG14OnRhcmdldEVycm9yXCIse3RhcmdldDp0ZShuLFwiaHgtdGFyZ2V0XCIpfSk7aWUocyk7cmV0dXJuIGx9dmFyIGY9YWUobik7dmFyIGM9Zi5sYXN0QnV0dG9uQ2xpY2tlZDtpZihjKXt2YXIgaD1lZShjLFwiZm9ybWFjdGlvblwiKTtpZihoIT1udWxsKXtyPWh9dmFyIHY9ZWUoYyxcImZvcm1tZXRob2RcIik7aWYodiE9bnVsbCl7aWYodi50b0xvd2VyQ2FzZSgpIT09XCJkaWFsb2dcIil7dD12fX19dmFyIGQ9bmUobixcImh4LWNvbmZpcm1cIik7aWYoZT09PXVuZGVmaW5lZCl7dmFyIEQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGhlKHQscixuLGksYSwhIWUpfTt2YXIgVT17dGFyZ2V0OnUsZWx0Om4scGF0aDpyLHZlcmI6dCx0cmlnZ2VyaW5nRXZlbnQ6aSxldGM6YSxpc3N1ZVJlcXVlc3Q6RCxxdWVzdGlvbjpkfTtpZihjZShuLFwiaHRteDpjb25maXJtXCIsVSk9PT1mYWxzZSl7aWUobyk7cmV0dXJuIGx9fXZhciBnPW47dmFyIG09bmUobixcImh4LXN5bmNcIik7dmFyIHA9bnVsbDt2YXIgeD1mYWxzZTtpZihtKXt2YXIgQj1tLnNwbGl0KFwiOlwiKTt2YXIgRj1CWzBdLnRyaW0oKTtpZihGPT09XCJ0aGlzXCIpe2c9eGUobixcImh4LXN5bmNcIil9ZWxzZXtnPXVlKG4sRil9bT0oQlsxXXx8XCJkcm9wXCIpLnRyaW0oKTtmPWFlKGcpO2lmKG09PT1cImRyb3BcIiYmZi54aHImJmYuYWJvcnRhYmxlIT09dHJ1ZSl7aWUobyk7cmV0dXJuIGx9ZWxzZSBpZihtPT09XCJhYm9ydFwiKXtpZihmLnhocil7aWUobyk7cmV0dXJuIGx9ZWxzZXt4PXRydWV9fWVsc2UgaWYobT09PVwicmVwbGFjZVwiKXtjZShnLFwiaHRteDphYm9ydFwiKX1lbHNlIGlmKG0uaW5kZXhPZihcInF1ZXVlXCIpPT09MCl7dmFyIFY9bS5zcGxpdChcIiBcIik7cD0oVlsxXXx8XCJsYXN0XCIpLnRyaW0oKX19aWYoZi54aHIpe2lmKGYuYWJvcnRhYmxlKXtjZShnLFwiaHRteDphYm9ydFwiKX1lbHNle2lmKHA9PW51bGwpe2lmKGkpe3ZhciB5PWFlKGkpO2lmKHkmJnkudHJpZ2dlclNwZWMmJnkudHJpZ2dlclNwZWMucXVldWUpe3A9eS50cmlnZ2VyU3BlYy5xdWV1ZX19aWYocD09bnVsbCl7cD1cImxhc3RcIn19aWYoZi5xdWV1ZWRSZXF1ZXN0cz09bnVsbCl7Zi5xdWV1ZWRSZXF1ZXN0cz1bXX1pZihwPT09XCJmaXJzdFwiJiZmLnF1ZXVlZFJlcXVlc3RzLmxlbmd0aD09PTApe2YucXVldWVkUmVxdWVzdHMucHVzaChmdW5jdGlvbigpe2hlKHQscixuLGksYSl9KX1lbHNlIGlmKHA9PT1cImFsbFwiKXtmLnF1ZXVlZFJlcXVlc3RzLnB1c2goZnVuY3Rpb24oKXtoZSh0LHIsbixpLGEpfSl9ZWxzZSBpZihwPT09XCJsYXN0XCIpe2YucXVldWVkUmVxdWVzdHM9W107Zi5xdWV1ZWRSZXF1ZXN0cy5wdXNoKGZ1bmN0aW9uKCl7aGUodCxyLG4saSxhKX0pfWllKG8pO3JldHVybiBsfX12YXIgYj1uZXcgWE1MSHR0cFJlcXVlc3Q7Zi54aHI9YjtmLmFib3J0YWJsZT14O3ZhciB3PWZ1bmN0aW9uKCl7Zi54aHI9bnVsbDtmLmFib3J0YWJsZT1mYWxzZTtpZihmLnF1ZXVlZFJlcXVlc3RzIT1udWxsJiZmLnF1ZXVlZFJlcXVlc3RzLmxlbmd0aD4wKXt2YXIgZT1mLnF1ZXVlZFJlcXVlc3RzLnNoaWZ0KCk7ZSgpfX07dmFyIGo9bmUobixcImh4LXByb21wdFwiKTtpZihqKXt2YXIgUz1wcm9tcHQoaik7aWYoUz09PW51bGx8fCFjZShuLFwiaHRteDpwcm9tcHRcIix7cHJvbXB0OlMsdGFyZ2V0OnV9KSl7aWUobyk7dygpO3JldHVybiBsfX1pZihkJiYhZSl7aWYoIWNvbmZpcm0oZCkpe2llKG8pO3coKTtyZXR1cm4gbH19dmFyIEU9eHIobix1LFMpO2lmKHQhPT1cImdldFwiJiYhU3Iobikpe0VbXCJDb250ZW50LVR5cGVcIl09XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIn1pZihhLmhlYWRlcnMpe0U9bGUoRSxhLmhlYWRlcnMpfXZhciBfPWRyKG4sdCk7dmFyIEM9Xy5lcnJvcnM7dmFyIFI9Xy52YWx1ZXM7aWYoYS52YWx1ZXMpe1I9bGUoUixhLnZhbHVlcyl9dmFyIHo9SHIobik7dmFyICQ9bGUoUix6KTt2YXIgVD15cigkLG4pO2lmKFEuY29uZmlnLmdldENhY2hlQnVzdGVyUGFyYW0mJnQ9PT1cImdldFwiKXtUW1wib3JnLmh0bXguY2FjaGUtYnVzdGVyXCJdPWVlKHUsXCJpZFwiKXx8XCJ0cnVlXCJ9aWYocj09bnVsbHx8cj09PVwiXCIpe3I9cmUoKS5sb2NhdGlvbi5ocmVmfXZhciBPPVJyKG4sXCJoeC1yZXF1ZXN0XCIpO3ZhciBXPWFlKG4pLmJvb3N0ZWQ7dmFyIHE9US5jb25maWcubWV0aG9kc1RoYXRVc2VVcmxQYXJhbXMuaW5kZXhPZih0KT49MDt2YXIgSD17Ym9vc3RlZDpXLHVzZVVybFBhcmFtczpxLHBhcmFtZXRlcnM6VCx1bmZpbHRlcmVkUGFyYW1ldGVyczokLGhlYWRlcnM6RSx0YXJnZXQ6dSx2ZXJiOnQsZXJyb3JzOkMsd2l0aENyZWRlbnRpYWxzOmEuY3JlZGVudGlhbHN8fE8uY3JlZGVudGlhbHN8fFEuY29uZmlnLndpdGhDcmVkZW50aWFscyx0aW1lb3V0OmEudGltZW91dHx8Ty50aW1lb3V0fHxRLmNvbmZpZy50aW1lb3V0LHBhdGg6cix0cmlnZ2VyaW5nRXZlbnQ6aX07aWYoIWNlKG4sXCJodG14OmNvbmZpZ1JlcXVlc3RcIixIKSl7aWUobyk7dygpO3JldHVybiBsfXI9SC5wYXRoO3Q9SC52ZXJiO0U9SC5oZWFkZXJzO1Q9SC5wYXJhbWV0ZXJzO0M9SC5lcnJvcnM7cT1ILnVzZVVybFBhcmFtcztpZihDJiZDLmxlbmd0aD4wKXtjZShuLFwiaHRteDp2YWxpZGF0aW9uOmhhbHRlZFwiLEgpO2llKG8pO3coKTtyZXR1cm4gbH12YXIgRz1yLnNwbGl0KFwiI1wiKTt2YXIgSj1HWzBdO3ZhciBMPUdbMV07dmFyIEE9cjtpZihxKXtBPUo7dmFyIFo9T2JqZWN0LmtleXMoVCkubGVuZ3RoIT09MDtpZihaKXtpZihBLmluZGV4T2YoXCI/XCIpPDApe0ErPVwiP1wifWVsc2V7QSs9XCImXCJ9QSs9bXIoVCk7aWYoTCl7QSs9XCIjXCIrTH19fWlmKCFrcihuLEEsSCkpe2ZlKG4sXCJodG14OmludmFsaWRQYXRoXCIsSCk7aWUocyk7cmV0dXJuIGx9Yi5vcGVuKHQudG9VcHBlckNhc2UoKSxBLHRydWUpO2Iub3ZlcnJpZGVNaW1lVHlwZShcInRleHQvaHRtbFwiKTtiLndpdGhDcmVkZW50aWFscz1ILndpdGhDcmVkZW50aWFscztiLnRpbWVvdXQ9SC50aW1lb3V0O2lmKE8ubm9IZWFkZXJzKXt9ZWxzZXtmb3IodmFyIE4gaW4gRSl7aWYoRS5oYXNPd25Qcm9wZXJ0eShOKSl7dmFyIEs9RVtOXTtMcihiLE4sSyl9fX12YXIgST17eGhyOmIsdGFyZ2V0OnUscmVxdWVzdENvbmZpZzpILGV0YzphLGJvb3N0ZWQ6VyxzZWxlY3Q6WCxwYXRoSW5mbzp7cmVxdWVzdFBhdGg6cixmaW5hbFJlcXVlc3RQYXRoOkEsYW5jaG9yOkx9fTtiLm9ubG9hZD1mdW5jdGlvbigpe3RyeXt2YXIgZT1JcihuKTtJLnBhdGhJbmZvLnJlc3BvbnNlUGF0aD1BcihiKTtNKG4sSSk7bHIoayxQKTtjZShuLFwiaHRteDphZnRlclJlcXVlc3RcIixJKTtjZShuLFwiaHRteDphZnRlck9uTG9hZFwiLEkpO2lmKCFzZShuKSl7dmFyIHQ9bnVsbDt3aGlsZShlLmxlbmd0aD4wJiZ0PT1udWxsKXt2YXIgcj1lLnNoaWZ0KCk7aWYoc2Uocikpe3Q9cn19aWYodCl7Y2UodCxcImh0bXg6YWZ0ZXJSZXF1ZXN0XCIsSSk7Y2UodCxcImh0bXg6YWZ0ZXJPbkxvYWRcIixJKX19aWUobyk7dygpfWNhdGNoKGUpe2ZlKG4sXCJodG14Om9uTG9hZEVycm9yXCIsbGUoe2Vycm9yOmV9LEkpKTt0aHJvdyBlfX07Yi5vbmVycm9yPWZ1bmN0aW9uKCl7bHIoayxQKTtmZShuLFwiaHRteDphZnRlclJlcXVlc3RcIixJKTtmZShuLFwiaHRteDpzZW5kRXJyb3JcIixJKTtpZShzKTt3KCl9O2Iub25hYm9ydD1mdW5jdGlvbigpe2xyKGssUCk7ZmUobixcImh0bXg6YWZ0ZXJSZXF1ZXN0XCIsSSk7ZmUobixcImh0bXg6c2VuZEFib3J0XCIsSSk7aWUocyk7dygpfTtiLm9udGltZW91dD1mdW5jdGlvbigpe2xyKGssUCk7ZmUobixcImh0bXg6YWZ0ZXJSZXF1ZXN0XCIsSSk7ZmUobixcImh0bXg6dGltZW91dFwiLEkpO2llKHMpO3coKX07aWYoIWNlKG4sXCJodG14OmJlZm9yZVJlcXVlc3RcIixJKSl7aWUobyk7dygpO3JldHVybiBsfXZhciBrPW9yKG4pO3ZhciBQPXNyKG4pO29lKFtcImxvYWRzdGFydFwiLFwibG9hZGVuZFwiLFwicHJvZ3Jlc3NcIixcImFib3J0XCJdLGZ1bmN0aW9uKHQpe29lKFtiLGIudXBsb2FkXSxmdW5jdGlvbihlKXtlLmFkZEV2ZW50TGlzdGVuZXIodCxmdW5jdGlvbihlKXtjZShuLFwiaHRteDp4aHI6XCIrdCx7bGVuZ3RoQ29tcHV0YWJsZTplLmxlbmd0aENvbXB1dGFibGUsbG9hZGVkOmUubG9hZGVkLHRvdGFsOmUudG90YWx9KX0pfSl9KTtjZShuLFwiaHRteDpiZWZvcmVTZW5kXCIsSSk7dmFyIFk9cT9udWxsOkVyKGIsbixUKTtiLnNlbmQoWSk7cmV0dXJuIGx9ZnVuY3Rpb24gUHIoZSx0KXt2YXIgcj10Lnhocjt2YXIgbj1udWxsO3ZhciBpPW51bGw7aWYoTyhyLC9IWC1QdXNoOi9pKSl7bj1yLmdldFJlc3BvbnNlSGVhZGVyKFwiSFgtUHVzaFwiKTtpPVwicHVzaFwifWVsc2UgaWYoTyhyLC9IWC1QdXNoLVVybDovaSkpe249ci5nZXRSZXNwb25zZUhlYWRlcihcIkhYLVB1c2gtVXJsXCIpO2k9XCJwdXNoXCJ9ZWxzZSBpZihPKHIsL0hYLVJlcGxhY2UtVXJsOi9pKSl7bj1yLmdldFJlc3BvbnNlSGVhZGVyKFwiSFgtUmVwbGFjZS1VcmxcIik7aT1cInJlcGxhY2VcIn1pZihuKXtpZihuPT09XCJmYWxzZVwiKXtyZXR1cm57fX1lbHNle3JldHVybnt0eXBlOmkscGF0aDpufX19dmFyIGE9dC5wYXRoSW5mby5maW5hbFJlcXVlc3RQYXRoO3ZhciBvPXQucGF0aEluZm8ucmVzcG9uc2VQYXRoO3ZhciBzPW5lKGUsXCJoeC1wdXNoLXVybFwiKTt2YXIgbD1uZShlLFwiaHgtcmVwbGFjZS11cmxcIik7dmFyIHU9YWUoZSkuYm9vc3RlZDt2YXIgZj1udWxsO3ZhciBjPW51bGw7aWYocyl7Zj1cInB1c2hcIjtjPXN9ZWxzZSBpZihsKXtmPVwicmVwbGFjZVwiO2M9bH1lbHNlIGlmKHUpe2Y9XCJwdXNoXCI7Yz1vfHxhfWlmKGMpe2lmKGM9PT1cImZhbHNlXCIpe3JldHVybnt9fWlmKGM9PT1cInRydWVcIil7Yz1vfHxhfWlmKHQucGF0aEluZm8uYW5jaG9yJiZjLmluZGV4T2YoXCIjXCIpPT09LTEpe2M9YytcIiNcIit0LnBhdGhJbmZvLmFuY2hvcn1yZXR1cm57dHlwZTpmLHBhdGg6Y319ZWxzZXtyZXR1cm57fX19ZnVuY3Rpb24gTXIobCx1KXt2YXIgZj11Lnhocjt2YXIgYz11LnRhcmdldDt2YXIgZT11LmV0Yzt2YXIgdD11LnJlcXVlc3RDb25maWc7dmFyIGg9dS5zZWxlY3Q7aWYoIWNlKGwsXCJodG14OmJlZm9yZU9uTG9hZFwiLHUpKXJldHVybjtpZihPKGYsL0hYLVRyaWdnZXI6L2kpKXtfZShmLFwiSFgtVHJpZ2dlclwiLGwpfWlmKE8oZiwvSFgtTG9jYXRpb246L2kpKXtlcigpO3ZhciByPWYuZ2V0UmVzcG9uc2VIZWFkZXIoXCJIWC1Mb2NhdGlvblwiKTt2YXIgdjtpZihyLmluZGV4T2YoXCJ7XCIpPT09MCl7dj1FKHIpO3I9dltcInBhdGhcIl07ZGVsZXRlIHZbXCJwYXRoXCJdfU5yKFwiR0VUXCIscix2KS50aGVuKGZ1bmN0aW9uKCl7dHIocil9KTtyZXR1cm59dmFyIG49TyhmLC9IWC1SZWZyZXNoOi9pKSYmXCJ0cnVlXCI9PT1mLmdldFJlc3BvbnNlSGVhZGVyKFwiSFgtUmVmcmVzaFwiKTtpZihPKGYsL0hYLVJlZGlyZWN0Oi9pKSl7bG9jYXRpb24uaHJlZj1mLmdldFJlc3BvbnNlSGVhZGVyKFwiSFgtUmVkaXJlY3RcIik7biYmbG9jYXRpb24ucmVsb2FkKCk7cmV0dXJufWlmKG4pe2xvY2F0aW9uLnJlbG9hZCgpO3JldHVybn1pZihPKGYsL0hYLVJldGFyZ2V0Oi9pKSl7aWYoZi5nZXRSZXNwb25zZUhlYWRlcihcIkhYLVJldGFyZ2V0XCIpPT09XCJ0aGlzXCIpe3UudGFyZ2V0PWx9ZWxzZXt1LnRhcmdldD11ZShsLGYuZ2V0UmVzcG9uc2VIZWFkZXIoXCJIWC1SZXRhcmdldFwiKSl9fXZhciBkPVByKGwsdSk7dmFyIGk9Zi5zdGF0dXM+PTIwMCYmZi5zdGF0dXM8NDAwJiZmLnN0YXR1cyE9PTIwNDt2YXIgZz1mLnJlc3BvbnNlO3ZhciBhPWYuc3RhdHVzPj00MDA7dmFyIG09US5jb25maWcuaWdub3JlVGl0bGU7dmFyIG89bGUoe3Nob3VsZFN3YXA6aSxzZXJ2ZXJSZXNwb25zZTpnLGlzRXJyb3I6YSxpZ25vcmVUaXRsZTptfSx1KTtpZighY2UoYyxcImh0bXg6YmVmb3JlU3dhcFwiLG8pKXJldHVybjtjPW8udGFyZ2V0O2c9by5zZXJ2ZXJSZXNwb25zZTthPW8uaXNFcnJvcjttPW8uaWdub3JlVGl0bGU7dS50YXJnZXQ9Yzt1LmZhaWxlZD1hO3Uuc3VjY2Vzc2Z1bD0hYTtpZihvLnNob3VsZFN3YXApe2lmKGYuc3RhdHVzPT09Mjg2KXthdChsKX1SKGwsZnVuY3Rpb24oZSl7Zz1lLnRyYW5zZm9ybVJlc3BvbnNlKGcsZixsKX0pO2lmKGQudHlwZSl7ZXIoKX12YXIgcz1lLnN3YXBPdmVycmlkZTtpZihPKGYsL0hYLVJlc3dhcDovaSkpe3M9Zi5nZXRSZXNwb25zZUhlYWRlcihcIkhYLVJlc3dhcFwiKX12YXIgdj13cihsLHMpO2lmKHYuaGFzT3duUHJvcGVydHkoXCJpZ25vcmVUaXRsZVwiKSl7bT12Lmlnbm9yZVRpdGxlfWMuY2xhc3NMaXN0LmFkZChRLmNvbmZpZy5zd2FwcGluZ0NsYXNzKTt2YXIgcD1udWxsO3ZhciB4PW51bGw7dmFyIHk9ZnVuY3Rpb24oKXt0cnl7dmFyIGU9ZG9jdW1lbnQuYWN0aXZlRWxlbWVudDt2YXIgdD17fTt0cnl7dD17ZWx0OmUsc3RhcnQ6ZT9lLnNlbGVjdGlvblN0YXJ0Om51bGwsZW5kOmU/ZS5zZWxlY3Rpb25FbmQ6bnVsbH19Y2F0Y2goZSl7fXZhciByO2lmKGgpe3I9aH1pZihPKGYsL0hYLVJlc2VsZWN0Oi9pKSl7cj1mLmdldFJlc3BvbnNlSGVhZGVyKFwiSFgtUmVzZWxlY3RcIil9aWYoZC50eXBlKXtjZShyZSgpLmJvZHksXCJodG14OmJlZm9yZUhpc3RvcnlVcGRhdGVcIixsZSh7aGlzdG9yeTpkfSx1KSk7aWYoZC50eXBlPT09XCJwdXNoXCIpe3RyKGQucGF0aCk7Y2UocmUoKS5ib2R5LFwiaHRteDpwdXNoZWRJbnRvSGlzdG9yeVwiLHtwYXRoOmQucGF0aH0pfWVsc2V7cnIoZC5wYXRoKTtjZShyZSgpLmJvZHksXCJodG14OnJlcGxhY2VkSW5IaXN0b3J5XCIse3BhdGg6ZC5wYXRofSl9fXZhciBuPVQoYyk7amUodi5zd2FwU3R5bGUsYyxsLGcsbixyKTtpZih0LmVsdCYmIXNlKHQuZWx0KSYmZWUodC5lbHQsXCJpZFwiKSl7dmFyIGk9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWUodC5lbHQsXCJpZFwiKSk7dmFyIGE9e3ByZXZlbnRTY3JvbGw6di5mb2N1c1Njcm9sbCE9PXVuZGVmaW5lZD8hdi5mb2N1c1Njcm9sbDohUS5jb25maWcuZGVmYXVsdEZvY3VzU2Nyb2xsfTtpZihpKXtpZih0LnN0YXJ0JiZpLnNldFNlbGVjdGlvblJhbmdlKXt0cnl7aS5zZXRTZWxlY3Rpb25SYW5nZSh0LnN0YXJ0LHQuZW5kKX1jYXRjaChlKXt9fWkuZm9jdXMoYSl9fWMuY2xhc3NMaXN0LnJlbW92ZShRLmNvbmZpZy5zd2FwcGluZ0NsYXNzKTtvZShuLmVsdHMsZnVuY3Rpb24oZSl7aWYoZS5jbGFzc0xpc3Qpe2UuY2xhc3NMaXN0LmFkZChRLmNvbmZpZy5zZXR0bGluZ0NsYXNzKX1jZShlLFwiaHRteDphZnRlclN3YXBcIix1KX0pO2lmKE8oZiwvSFgtVHJpZ2dlci1BZnRlci1Td2FwOi9pKSl7dmFyIG89bDtpZighc2UobCkpe289cmUoKS5ib2R5fV9lKGYsXCJIWC1UcmlnZ2VyLUFmdGVyLVN3YXBcIixvKX12YXIgcz1mdW5jdGlvbigpe29lKG4udGFza3MsZnVuY3Rpb24oZSl7ZS5jYWxsKCl9KTtvZShuLmVsdHMsZnVuY3Rpb24oZSl7aWYoZS5jbGFzc0xpc3Qpe2UuY2xhc3NMaXN0LnJlbW92ZShRLmNvbmZpZy5zZXR0bGluZ0NsYXNzKX1jZShlLFwiaHRteDphZnRlclNldHRsZVwiLHUpfSk7aWYodS5wYXRoSW5mby5hbmNob3Ipe3ZhciBlPXJlKCkuZ2V0RWxlbWVudEJ5SWQodS5wYXRoSW5mby5hbmNob3IpO2lmKGUpe2Uuc2Nyb2xsSW50b1ZpZXcoe2Jsb2NrOlwic3RhcnRcIixiZWhhdmlvcjpcImF1dG9cIn0pfX1pZihuLnRpdGxlJiYhbSl7dmFyIHQ9QyhcInRpdGxlXCIpO2lmKHQpe3QuaW5uZXJIVE1MPW4udGl0bGV9ZWxzZXt3aW5kb3cuZG9jdW1lbnQudGl0bGU9bi50aXRsZX19Q3Iobi5lbHRzLHYpO2lmKE8oZiwvSFgtVHJpZ2dlci1BZnRlci1TZXR0bGU6L2kpKXt2YXIgcj1sO2lmKCFzZShsKSl7cj1yZSgpLmJvZHl9X2UoZixcIkhYLVRyaWdnZXItQWZ0ZXItU2V0dGxlXCIscil9aWUocCl9O2lmKHYuc2V0dGxlRGVsYXk+MCl7c2V0VGltZW91dChzLHYuc2V0dGxlRGVsYXkpfWVsc2V7cygpfX1jYXRjaChlKXtmZShsLFwiaHRteDpzd2FwRXJyb3JcIix1KTtpZSh4KTt0aHJvdyBlfX07dmFyIGI9US5jb25maWcuZ2xvYmFsVmlld1RyYW5zaXRpb25zO2lmKHYuaGFzT3duUHJvcGVydHkoXCJ0cmFuc2l0aW9uXCIpKXtiPXYudHJhbnNpdGlvbn1pZihiJiZjZShsLFwiaHRteDpiZWZvcmVUcmFuc2l0aW9uXCIsdSkmJnR5cGVvZiBQcm9taXNlIT09XCJ1bmRlZmluZWRcIiYmZG9jdW1lbnQuc3RhcnRWaWV3VHJhbnNpdGlvbil7dmFyIHc9bmV3IFByb21pc2UoZnVuY3Rpb24oZSx0KXtwPWU7eD10fSk7dmFyIFM9eTt5PWZ1bmN0aW9uKCl7ZG9jdW1lbnQuc3RhcnRWaWV3VHJhbnNpdGlvbihmdW5jdGlvbigpe1MoKTtyZXR1cm4gd30pfX1pZih2LnN3YXBEZWxheT4wKXtzZXRUaW1lb3V0KHksdi5zd2FwRGVsYXkpfWVsc2V7eSgpfX1pZihhKXtmZShsLFwiaHRteDpyZXNwb25zZUVycm9yXCIsbGUoe2Vycm9yOlwiUmVzcG9uc2UgU3RhdHVzIEVycm9yIENvZGUgXCIrZi5zdGF0dXMrXCIgZnJvbSBcIit1LnBhdGhJbmZvLnJlcXVlc3RQYXRofSx1KSl9fXZhciBYcj17fTtmdW5jdGlvbiBEcigpe3JldHVybntpbml0OmZ1bmN0aW9uKGUpe3JldHVybiBudWxsfSxvbkV2ZW50OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRydWV9LHRyYW5zZm9ybVJlc3BvbnNlOmZ1bmN0aW9uKGUsdCxyKXtyZXR1cm4gZX0saXNJbmxpbmVTd2FwOmZ1bmN0aW9uKGUpe3JldHVybiBmYWxzZX0saGFuZGxlU3dhcDpmdW5jdGlvbihlLHQscixuKXtyZXR1cm4gZmFsc2V9LGVuY29kZVBhcmFtZXRlcnM6ZnVuY3Rpb24oZSx0LHIpe3JldHVybiBudWxsfX19ZnVuY3Rpb24gVXIoZSx0KXtpZih0LmluaXQpe3QuaW5pdChyKX1YcltlXT1sZShEcigpLHQpfWZ1bmN0aW9uIEJyKGUpe2RlbGV0ZSBYcltlXX1mdW5jdGlvbiBGcihlLHIsbil7aWYoZT09dW5kZWZpbmVkKXtyZXR1cm4gcn1pZihyPT11bmRlZmluZWQpe3I9W119aWYobj09dW5kZWZpbmVkKXtuPVtdfXZhciB0PXRlKGUsXCJoeC1leHRcIik7aWYodCl7b2UodC5zcGxpdChcIixcIiksZnVuY3Rpb24oZSl7ZT1lLnJlcGxhY2UoLyAvZyxcIlwiKTtpZihlLnNsaWNlKDAsNyk9PVwiaWdub3JlOlwiKXtuLnB1c2goZS5zbGljZSg3KSk7cmV0dXJufWlmKG4uaW5kZXhPZihlKTwwKXt2YXIgdD1YcltlXTtpZih0JiZyLmluZGV4T2YodCk8MCl7ci5wdXNoKHQpfX19KX1yZXR1cm4gRnIodShlKSxyLG4pfXZhciBWcj1mYWxzZTtyZSgpLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZnVuY3Rpb24oKXtWcj10cnVlfSk7ZnVuY3Rpb24ganIoZSl7aWYoVnJ8fHJlKCkucmVhZHlTdGF0ZT09PVwiY29tcGxldGVcIil7ZSgpfWVsc2V7cmUoKS5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGUpfX1mdW5jdGlvbiBfcigpe2lmKFEuY29uZmlnLmluY2x1ZGVJbmRpY2F0b3JTdHlsZXMhPT1mYWxzZSl7cmUoKS5oZWFkLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLFwiPHN0eWxlPiAgICAgICAgICAgICAgICAgICAgICAuXCIrUS5jb25maWcuaW5kaWNhdG9yQ2xhc3MrXCJ7b3BhY2l0eTowfSAgICAgICAgICAgICAgICAgICAgICAuXCIrUS5jb25maWcucmVxdWVzdENsYXNzK1wiIC5cIitRLmNvbmZpZy5pbmRpY2F0b3JDbGFzcytcIntvcGFjaXR5OjE7IHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgZWFzZS1pbjt9ICAgICAgICAgICAgICAgICAgICAgIC5cIitRLmNvbmZpZy5yZXF1ZXN0Q2xhc3MrXCIuXCIrUS5jb25maWcuaW5kaWNhdG9yQ2xhc3MrXCJ7b3BhY2l0eToxOyB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGVhc2UtaW47fSAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cIil9fWZ1bmN0aW9uIHpyKCl7dmFyIGU9cmUoKS5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJodG14LWNvbmZpZ1wiXScpO2lmKGUpe3JldHVybiBFKGUuY29udGVudCl9ZWxzZXtyZXR1cm4gbnVsbH19ZnVuY3Rpb24gJHIoKXt2YXIgZT16cigpO2lmKGUpe1EuY29uZmlnPWxlKFEuY29uZmlnLGUpfX1qcihmdW5jdGlvbigpeyRyKCk7X3IoKTt2YXIgZT1yZSgpLmJvZHk7enQoZSk7dmFyIHQ9cmUoKS5xdWVyeVNlbGVjdG9yQWxsKFwiW2h4LXRyaWdnZXI9J3Jlc3RvcmVkJ10sW2RhdGEtaHgtdHJpZ2dlcj0ncmVzdG9yZWQnXVwiKTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJodG14OmFib3J0XCIsZnVuY3Rpb24oZSl7dmFyIHQ9ZS50YXJnZXQ7dmFyIHI9YWUodCk7aWYociYmci54aHIpe3IueGhyLmFib3J0KCl9fSk7Y29uc3Qgcj13aW5kb3cub25wb3BzdGF0ZT93aW5kb3cub25wb3BzdGF0ZS5iaW5kKHdpbmRvdyk6bnVsbDt3aW5kb3cub25wb3BzdGF0ZT1mdW5jdGlvbihlKXtpZihlLnN0YXRlJiZlLnN0YXRlLmh0bXgpe2FyKCk7b2UodCxmdW5jdGlvbihlKXtjZShlLFwiaHRteDpyZXN0b3JlZFwiLHtkb2N1bWVudDpyZSgpLHRyaWdnZXJFdmVudDpjZX0pfSl9ZWxzZXtpZihyKXtyKGUpfX19O3NldFRpbWVvdXQoZnVuY3Rpb24oKXtjZShlLFwiaHRteDpsb2FkXCIse30pO2U9bnVsbH0sMCl9KTtyZXR1cm4gUX0oKX0pOyIsICIvLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvc2NoZWR1bGVyLmpzXG52YXIgZmx1c2hQZW5kaW5nID0gZmFsc2U7XG52YXIgZmx1c2hpbmcgPSBmYWxzZTtcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGxhc3RGbHVzaGVkSW5kZXggPSAtMTtcbmZ1bmN0aW9uIHNjaGVkdWxlcihjYWxsYmFjaykge1xuICBxdWV1ZUpvYihjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBxdWV1ZUpvYihqb2IpIHtcbiAgaWYgKCFxdWV1ZS5pbmNsdWRlcyhqb2IpKVxuICAgIHF1ZXVlLnB1c2goam9iKTtcbiAgcXVldWVGbHVzaCgpO1xufVxuZnVuY3Rpb24gZGVxdWV1ZUpvYihqb2IpIHtcbiAgbGV0IGluZGV4ID0gcXVldWUuaW5kZXhPZihqb2IpO1xuICBpZiAoaW5kZXggIT09IC0xICYmIGluZGV4ID4gbGFzdEZsdXNoZWRJbmRleClcbiAgICBxdWV1ZS5zcGxpY2UoaW5kZXgsIDEpO1xufVxuZnVuY3Rpb24gcXVldWVGbHVzaCgpIHtcbiAgaWYgKCFmbHVzaGluZyAmJiAhZmx1c2hQZW5kaW5nKSB7XG4gICAgZmx1c2hQZW5kaW5nID0gdHJ1ZTtcbiAgICBxdWV1ZU1pY3JvdGFzayhmbHVzaEpvYnMpO1xuICB9XG59XG5mdW5jdGlvbiBmbHVzaEpvYnMoKSB7XG4gIGZsdXNoUGVuZGluZyA9IGZhbHNlO1xuICBmbHVzaGluZyA9IHRydWU7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICBxdWV1ZVtpXSgpO1xuICAgIGxhc3RGbHVzaGVkSW5kZXggPSBpO1xuICB9XG4gIHF1ZXVlLmxlbmd0aCA9IDA7XG4gIGxhc3RGbHVzaGVkSW5kZXggPSAtMTtcbiAgZmx1c2hpbmcgPSBmYWxzZTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3JlYWN0aXZpdHkuanNcbnZhciByZWFjdGl2ZTtcbnZhciBlZmZlY3Q7XG52YXIgcmVsZWFzZTtcbnZhciByYXc7XG52YXIgc2hvdWxkU2NoZWR1bGUgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUVmZmVjdFNjaGVkdWxpbmcoY2FsbGJhY2spIHtcbiAgc2hvdWxkU2NoZWR1bGUgPSBmYWxzZTtcbiAgY2FsbGJhY2soKTtcbiAgc2hvdWxkU2NoZWR1bGUgPSB0cnVlO1xufVxuZnVuY3Rpb24gc2V0UmVhY3Rpdml0eUVuZ2luZShlbmdpbmUpIHtcbiAgcmVhY3RpdmUgPSBlbmdpbmUucmVhY3RpdmU7XG4gIHJlbGVhc2UgPSBlbmdpbmUucmVsZWFzZTtcbiAgZWZmZWN0ID0gKGNhbGxiYWNrKSA9PiBlbmdpbmUuZWZmZWN0KGNhbGxiYWNrLCB7IHNjaGVkdWxlcjogKHRhc2spID0+IHtcbiAgICBpZiAoc2hvdWxkU2NoZWR1bGUpIHtcbiAgICAgIHNjaGVkdWxlcih0YXNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFzaygpO1xuICAgIH1cbiAgfSB9KTtcbiAgcmF3ID0gZW5naW5lLnJhdztcbn1cbmZ1bmN0aW9uIG92ZXJyaWRlRWZmZWN0KG92ZXJyaWRlKSB7XG4gIGVmZmVjdCA9IG92ZXJyaWRlO1xufVxuZnVuY3Rpb24gZWxlbWVudEJvdW5kRWZmZWN0KGVsKSB7XG4gIGxldCBjbGVhbnVwMiA9ICgpID0+IHtcbiAgfTtcbiAgbGV0IHdyYXBwZWRFZmZlY3QgPSAoY2FsbGJhY2spID0+IHtcbiAgICBsZXQgZWZmZWN0UmVmZXJlbmNlID0gZWZmZWN0KGNhbGxiYWNrKTtcbiAgICBpZiAoIWVsLl94X2VmZmVjdHMpIHtcbiAgICAgIGVsLl94X2VmZmVjdHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICAgICAgZWwuX3hfcnVuRWZmZWN0cyA9ICgpID0+IHtcbiAgICAgICAgZWwuX3hfZWZmZWN0cy5mb3JFYWNoKChpKSA9PiBpKCkpO1xuICAgICAgfTtcbiAgICB9XG4gICAgZWwuX3hfZWZmZWN0cy5hZGQoZWZmZWN0UmVmZXJlbmNlKTtcbiAgICBjbGVhbnVwMiA9ICgpID0+IHtcbiAgICAgIGlmIChlZmZlY3RSZWZlcmVuY2UgPT09IHZvaWQgMClcbiAgICAgICAgcmV0dXJuO1xuICAgICAgZWwuX3hfZWZmZWN0cy5kZWxldGUoZWZmZWN0UmVmZXJlbmNlKTtcbiAgICAgIHJlbGVhc2UoZWZmZWN0UmVmZXJlbmNlKTtcbiAgICB9O1xuICAgIHJldHVybiBlZmZlY3RSZWZlcmVuY2U7XG4gIH07XG4gIHJldHVybiBbd3JhcHBlZEVmZmVjdCwgKCkgPT4ge1xuICAgIGNsZWFudXAyKCk7XG4gIH1dO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvZGlzcGF0Y2guanNcbmZ1bmN0aW9uIGRpc3BhdGNoKGVsLCBuYW1lLCBkZXRhaWwgPSB7fSkge1xuICBlbC5kaXNwYXRjaEV2ZW50KFxuICAgIG5ldyBDdXN0b21FdmVudChuYW1lLCB7XG4gICAgICBkZXRhaWwsXG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgLy8gQWxsb3dzIGV2ZW50cyB0byBwYXNzIHRoZSBzaGFkb3cgRE9NIGJhcnJpZXIuXG4gICAgICBjb21wb3NlZDogdHJ1ZSxcbiAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICB9KVxuICApO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvd2Fsay5qc1xuZnVuY3Rpb24gd2FsayhlbCwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBTaGFkb3dSb290ID09PSBcImZ1bmN0aW9uXCIgJiYgZWwgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG4gICAgQXJyYXkuZnJvbShlbC5jaGlsZHJlbikuZm9yRWFjaCgoZWwyKSA9PiB3YWxrKGVsMiwgY2FsbGJhY2spKTtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IHNraXAgPSBmYWxzZTtcbiAgY2FsbGJhY2soZWwsICgpID0+IHNraXAgPSB0cnVlKTtcbiAgaWYgKHNraXApXG4gICAgcmV0dXJuO1xuICBsZXQgbm9kZSA9IGVsLmZpcnN0RWxlbWVudENoaWxkO1xuICB3aGlsZSAobm9kZSkge1xuICAgIHdhbGsobm9kZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICBub2RlID0gbm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIH1cbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL3dhcm4uanNcbmZ1bmN0aW9uIHdhcm4obWVzc2FnZSwgLi4uYXJncykge1xuICBjb25zb2xlLndhcm4oYEFscGluZSBXYXJuaW5nOiAke21lc3NhZ2V9YCwgLi4uYXJncyk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9saWZlY3ljbGUuanNcbnZhciBzdGFydGVkID0gZmFsc2U7XG5mdW5jdGlvbiBzdGFydCgpIHtcbiAgaWYgKHN0YXJ0ZWQpXG4gICAgd2FybihcIkFscGluZSBoYXMgYWxyZWFkeSBiZWVuIGluaXRpYWxpemVkIG9uIHRoaXMgcGFnZS4gQ2FsbGluZyBBbHBpbmUuc3RhcnQoKSBtb3JlIHRoYW4gb25jZSBjYW4gY2F1c2UgcHJvYmxlbXMuXCIpO1xuICBzdGFydGVkID0gdHJ1ZTtcbiAgaWYgKCFkb2N1bWVudC5ib2R5KVxuICAgIHdhcm4oXCJVbmFibGUgdG8gaW5pdGlhbGl6ZS4gVHJ5aW5nIHRvIGxvYWQgQWxwaW5lIGJlZm9yZSBgPGJvZHk+YCBpcyBhdmFpbGFibGUuIERpZCB5b3UgZm9yZ2V0IHRvIGFkZCBgZGVmZXJgIGluIEFscGluZSdzIGA8c2NyaXB0PmAgdGFnP1wiKTtcbiAgZGlzcGF0Y2goZG9jdW1lbnQsIFwiYWxwaW5lOmluaXRcIik7XG4gIGRpc3BhdGNoKGRvY3VtZW50LCBcImFscGluZTppbml0aWFsaXppbmdcIik7XG4gIHN0YXJ0T2JzZXJ2aW5nTXV0YXRpb25zKCk7XG4gIG9uRWxBZGRlZCgoZWwpID0+IGluaXRUcmVlKGVsLCB3YWxrKSk7XG4gIG9uRWxSZW1vdmVkKChlbCkgPT4gZGVzdHJveVRyZWUoZWwpKTtcbiAgb25BdHRyaWJ1dGVzQWRkZWQoKGVsLCBhdHRycykgPT4ge1xuICAgIGRpcmVjdGl2ZXMoZWwsIGF0dHJzKS5mb3JFYWNoKChoYW5kbGUpID0+IGhhbmRsZSgpKTtcbiAgfSk7XG4gIGxldCBvdXROZXN0ZWRDb21wb25lbnRzID0gKGVsKSA9PiAhY2xvc2VzdFJvb3QoZWwucGFyZW50RWxlbWVudCwgdHJ1ZSk7XG4gIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChhbGxTZWxlY3RvcnMoKS5qb2luKFwiLFwiKSkpLmZpbHRlcihvdXROZXN0ZWRDb21wb25lbnRzKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGluaXRUcmVlKGVsKTtcbiAgfSk7XG4gIGRpc3BhdGNoKGRvY3VtZW50LCBcImFscGluZTppbml0aWFsaXplZFwiKTtcbn1cbnZhciByb290U2VsZWN0b3JDYWxsYmFja3MgPSBbXTtcbnZhciBpbml0U2VsZWN0b3JDYWxsYmFja3MgPSBbXTtcbmZ1bmN0aW9uIHJvb3RTZWxlY3RvcnMoKSB7XG4gIHJldHVybiByb290U2VsZWN0b3JDYWxsYmFja3MubWFwKChmbikgPT4gZm4oKSk7XG59XG5mdW5jdGlvbiBhbGxTZWxlY3RvcnMoKSB7XG4gIHJldHVybiByb290U2VsZWN0b3JDYWxsYmFja3MuY29uY2F0KGluaXRTZWxlY3RvckNhbGxiYWNrcykubWFwKChmbikgPT4gZm4oKSk7XG59XG5mdW5jdGlvbiBhZGRSb290U2VsZWN0b3Ioc2VsZWN0b3JDYWxsYmFjaykge1xuICByb290U2VsZWN0b3JDYWxsYmFja3MucHVzaChzZWxlY3RvckNhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIGFkZEluaXRTZWxlY3RvcihzZWxlY3RvckNhbGxiYWNrKSB7XG4gIGluaXRTZWxlY3RvckNhbGxiYWNrcy5wdXNoKHNlbGVjdG9yQ2FsbGJhY2spO1xufVxuZnVuY3Rpb24gY2xvc2VzdFJvb3QoZWwsIGluY2x1ZGVJbml0U2VsZWN0b3JzID0gZmFsc2UpIHtcbiAgcmV0dXJuIGZpbmRDbG9zZXN0KGVsLCAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdG9ycyA9IGluY2x1ZGVJbml0U2VsZWN0b3JzID8gYWxsU2VsZWN0b3JzKCkgOiByb290U2VsZWN0b3JzKCk7XG4gICAgaWYgKHNlbGVjdG9ycy5zb21lKChzZWxlY3RvcikgPT4gZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkpXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG59XG5mdW5jdGlvbiBmaW5kQ2xvc2VzdChlbCwgY2FsbGJhY2spIHtcbiAgaWYgKCFlbClcbiAgICByZXR1cm47XG4gIGlmIChjYWxsYmFjayhlbCkpXG4gICAgcmV0dXJuIGVsO1xuICBpZiAoZWwuX3hfdGVsZXBvcnRCYWNrKVxuICAgIGVsID0gZWwuX3hfdGVsZXBvcnRCYWNrO1xuICBpZiAoIWVsLnBhcmVudEVsZW1lbnQpXG4gICAgcmV0dXJuO1xuICByZXR1cm4gZmluZENsb3Nlc3QoZWwucGFyZW50RWxlbWVudCwgY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gaXNSb290KGVsKSB7XG4gIHJldHVybiByb290U2VsZWN0b3JzKCkuc29tZSgoc2VsZWN0b3IpID0+IGVsLm1hdGNoZXMoc2VsZWN0b3IpKTtcbn1cbnZhciBpbml0SW50ZXJjZXB0b3JzID0gW107XG5mdW5jdGlvbiBpbnRlcmNlcHRJbml0KGNhbGxiYWNrKSB7XG4gIGluaXRJbnRlcmNlcHRvcnMucHVzaChjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBpbml0VHJlZShlbCwgd2Fsa2VyID0gd2FsaywgaW50ZXJjZXB0ID0gKCkgPT4ge1xufSkge1xuICBkZWZlckhhbmRsaW5nRGlyZWN0aXZlcygoKSA9PiB7XG4gICAgd2Fsa2VyKGVsLCAoZWwyLCBza2lwKSA9PiB7XG4gICAgICBpbnRlcmNlcHQoZWwyLCBza2lwKTtcbiAgICAgIGluaXRJbnRlcmNlcHRvcnMuZm9yRWFjaCgoaSkgPT4gaShlbDIsIHNraXApKTtcbiAgICAgIGRpcmVjdGl2ZXMoZWwyLCBlbDIuYXR0cmlidXRlcykuZm9yRWFjaCgoaGFuZGxlKSA9PiBoYW5kbGUoKSk7XG4gICAgICBlbDIuX3hfaWdub3JlICYmIHNraXAoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBkZXN0cm95VHJlZShyb290KSB7XG4gIHdhbGsocm9vdCwgKGVsKSA9PiB7XG4gICAgY2xlYW51cEF0dHJpYnV0ZXMoZWwpO1xuICAgIGNsZWFudXBFbGVtZW50KGVsKTtcbiAgfSk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tdXRhdGlvbi5qc1xudmFyIG9uQXR0cmlidXRlQWRkZWRzID0gW107XG52YXIgb25FbFJlbW92ZWRzID0gW107XG52YXIgb25FbEFkZGVkcyA9IFtdO1xuZnVuY3Rpb24gb25FbEFkZGVkKGNhbGxiYWNrKSB7XG4gIG9uRWxBZGRlZHMucHVzaChjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBvbkVsUmVtb3ZlZChlbCwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgaWYgKCFlbC5feF9jbGVhbnVwcylcbiAgICAgIGVsLl94X2NsZWFudXBzID0gW107XG4gICAgZWwuX3hfY2xlYW51cHMucHVzaChjYWxsYmFjayk7XG4gIH0gZWxzZSB7XG4gICAgY2FsbGJhY2sgPSBlbDtcbiAgICBvbkVsUmVtb3ZlZHMucHVzaChjYWxsYmFjayk7XG4gIH1cbn1cbmZ1bmN0aW9uIG9uQXR0cmlidXRlc0FkZGVkKGNhbGxiYWNrKSB7XG4gIG9uQXR0cmlidXRlQWRkZWRzLnB1c2goY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gb25BdHRyaWJ1dGVSZW1vdmVkKGVsLCBuYW1lLCBjYWxsYmFjaykge1xuICBpZiAoIWVsLl94X2F0dHJpYnV0ZUNsZWFudXBzKVxuICAgIGVsLl94X2F0dHJpYnV0ZUNsZWFudXBzID0ge307XG4gIGlmICghZWwuX3hfYXR0cmlidXRlQ2xlYW51cHNbbmFtZV0pXG4gICAgZWwuX3hfYXR0cmlidXRlQ2xlYW51cHNbbmFtZV0gPSBbXTtcbiAgZWwuX3hfYXR0cmlidXRlQ2xlYW51cHNbbmFtZV0ucHVzaChjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBjbGVhbnVwQXR0cmlidXRlcyhlbCwgbmFtZXMpIHtcbiAgaWYgKCFlbC5feF9hdHRyaWJ1dGVDbGVhbnVwcylcbiAgICByZXR1cm47XG4gIE9iamVjdC5lbnRyaWVzKGVsLl94X2F0dHJpYnV0ZUNsZWFudXBzKS5mb3JFYWNoKChbbmFtZSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKG5hbWVzID09PSB2b2lkIDAgfHwgbmFtZXMuaW5jbHVkZXMobmFtZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGkpID0+IGkoKSk7XG4gICAgICBkZWxldGUgZWwuX3hfYXR0cmlidXRlQ2xlYW51cHNbbmFtZV07XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIGNsZWFudXBFbGVtZW50KGVsKSB7XG4gIGlmIChlbC5feF9jbGVhbnVwcykge1xuICAgIHdoaWxlIChlbC5feF9jbGVhbnVwcy5sZW5ndGgpXG4gICAgICBlbC5feF9jbGVhbnVwcy5wb3AoKSgpO1xuICB9XG59XG52YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihvbk11dGF0ZSk7XG52YXIgY3VycmVudGx5T2JzZXJ2aW5nID0gZmFsc2U7XG5mdW5jdGlvbiBzdGFydE9ic2VydmluZ011dGF0aW9ucygpIHtcbiAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudCwgeyBzdWJ0cmVlOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIGF0dHJpYnV0ZXM6IHRydWUsIGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlIH0pO1xuICBjdXJyZW50bHlPYnNlcnZpbmcgPSB0cnVlO1xufVxuZnVuY3Rpb24gc3RvcE9ic2VydmluZ011dGF0aW9ucygpIHtcbiAgZmx1c2hPYnNlcnZlcigpO1xuICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIGN1cnJlbnRseU9ic2VydmluZyA9IGZhbHNlO1xufVxudmFyIHJlY29yZFF1ZXVlID0gW107XG52YXIgd2lsbFByb2Nlc3NSZWNvcmRRdWV1ZSA9IGZhbHNlO1xuZnVuY3Rpb24gZmx1c2hPYnNlcnZlcigpIHtcbiAgcmVjb3JkUXVldWUgPSByZWNvcmRRdWV1ZS5jb25jYXQob2JzZXJ2ZXIudGFrZVJlY29yZHMoKSk7XG4gIGlmIChyZWNvcmRRdWV1ZS5sZW5ndGggJiYgIXdpbGxQcm9jZXNzUmVjb3JkUXVldWUpIHtcbiAgICB3aWxsUHJvY2Vzc1JlY29yZFF1ZXVlID0gdHJ1ZTtcbiAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICBwcm9jZXNzUmVjb3JkUXVldWUoKTtcbiAgICAgIHdpbGxQcm9jZXNzUmVjb3JkUXVldWUgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24gcHJvY2Vzc1JlY29yZFF1ZXVlKCkge1xuICBvbk11dGF0ZShyZWNvcmRRdWV1ZSk7XG4gIHJlY29yZFF1ZXVlLmxlbmd0aCA9IDA7XG59XG5mdW5jdGlvbiBtdXRhdGVEb20oY2FsbGJhY2spIHtcbiAgaWYgKCFjdXJyZW50bHlPYnNlcnZpbmcpXG4gICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gIHN0b3BPYnNlcnZpbmdNdXRhdGlvbnMoKTtcbiAgbGV0IHJlc3VsdCA9IGNhbGxiYWNrKCk7XG4gIHN0YXJ0T2JzZXJ2aW5nTXV0YXRpb25zKCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG52YXIgaXNDb2xsZWN0aW5nID0gZmFsc2U7XG52YXIgZGVmZXJyZWRNdXRhdGlvbnMgPSBbXTtcbmZ1bmN0aW9uIGRlZmVyTXV0YXRpb25zKCkge1xuICBpc0NvbGxlY3RpbmcgPSB0cnVlO1xufVxuZnVuY3Rpb24gZmx1c2hBbmRTdG9wRGVmZXJyaW5nTXV0YXRpb25zKCkge1xuICBpc0NvbGxlY3RpbmcgPSBmYWxzZTtcbiAgb25NdXRhdGUoZGVmZXJyZWRNdXRhdGlvbnMpO1xuICBkZWZlcnJlZE11dGF0aW9ucyA9IFtdO1xufVxuZnVuY3Rpb24gb25NdXRhdGUobXV0YXRpb25zKSB7XG4gIGlmIChpc0NvbGxlY3RpbmcpIHtcbiAgICBkZWZlcnJlZE11dGF0aW9ucyA9IGRlZmVycmVkTXV0YXRpb25zLmNvbmNhdChtdXRhdGlvbnMpO1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgYWRkZWROb2RlcyA9IFtdO1xuICBsZXQgcmVtb3ZlZE5vZGVzID0gW107XG4gIGxldCBhZGRlZEF0dHJpYnV0ZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICBsZXQgcmVtb3ZlZEF0dHJpYnV0ZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChtdXRhdGlvbnNbaV0udGFyZ2V0Ll94X2lnbm9yZU11dGF0aW9uT2JzZXJ2ZXIpXG4gICAgICBjb250aW51ZTtcbiAgICBpZiAobXV0YXRpb25zW2ldLnR5cGUgPT09IFwiY2hpbGRMaXN0XCIpIHtcbiAgICAgIG11dGF0aW9uc1tpXS5hZGRlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IG5vZGUubm9kZVR5cGUgPT09IDEgJiYgYWRkZWROb2Rlcy5wdXNoKG5vZGUpKTtcbiAgICAgIG11dGF0aW9uc1tpXS5yZW1vdmVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4gbm9kZS5ub2RlVHlwZSA9PT0gMSAmJiByZW1vdmVkTm9kZXMucHVzaChub2RlKSk7XG4gICAgfVxuICAgIGlmIChtdXRhdGlvbnNbaV0udHlwZSA9PT0gXCJhdHRyaWJ1dGVzXCIpIHtcbiAgICAgIGxldCBlbCA9IG11dGF0aW9uc1tpXS50YXJnZXQ7XG4gICAgICBsZXQgbmFtZSA9IG11dGF0aW9uc1tpXS5hdHRyaWJ1dGVOYW1lO1xuICAgICAgbGV0IG9sZFZhbHVlID0gbXV0YXRpb25zW2ldLm9sZFZhbHVlO1xuICAgICAgbGV0IGFkZDIgPSAoKSA9PiB7XG4gICAgICAgIGlmICghYWRkZWRBdHRyaWJ1dGVzLmhhcyhlbCkpXG4gICAgICAgICAgYWRkZWRBdHRyaWJ1dGVzLnNldChlbCwgW10pO1xuICAgICAgICBhZGRlZEF0dHJpYnV0ZXMuZ2V0KGVsKS5wdXNoKHsgbmFtZSwgdmFsdWU6IGVsLmdldEF0dHJpYnV0ZShuYW1lKSB9KTtcbiAgICAgIH07XG4gICAgICBsZXQgcmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXJlbW92ZWRBdHRyaWJ1dGVzLmhhcyhlbCkpXG4gICAgICAgICAgcmVtb3ZlZEF0dHJpYnV0ZXMuc2V0KGVsLCBbXSk7XG4gICAgICAgIHJlbW92ZWRBdHRyaWJ1dGVzLmdldChlbCkucHVzaChuYW1lKTtcbiAgICAgIH07XG4gICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKG5hbWUpICYmIG9sZFZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIGFkZDIoKTtcbiAgICAgIH0gZWxzZSBpZiAoZWwuaGFzQXR0cmlidXRlKG5hbWUpKSB7XG4gICAgICAgIHJlbW92ZSgpO1xuICAgICAgICBhZGQyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmVtb3ZlZEF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cnMsIGVsKSA9PiB7XG4gICAgY2xlYW51cEF0dHJpYnV0ZXMoZWwsIGF0dHJzKTtcbiAgfSk7XG4gIGFkZGVkQXR0cmlidXRlcy5mb3JFYWNoKChhdHRycywgZWwpID0+IHtcbiAgICBvbkF0dHJpYnV0ZUFkZGVkcy5mb3JFYWNoKChpKSA9PiBpKGVsLCBhdHRycykpO1xuICB9KTtcbiAgZm9yIChsZXQgbm9kZSBvZiByZW1vdmVkTm9kZXMpIHtcbiAgICBpZiAoYWRkZWROb2Rlcy5pbmNsdWRlcyhub2RlKSlcbiAgICAgIGNvbnRpbnVlO1xuICAgIG9uRWxSZW1vdmVkcy5mb3JFYWNoKChpKSA9PiBpKG5vZGUpKTtcbiAgICBkZXN0cm95VHJlZShub2RlKTtcbiAgfVxuICBhZGRlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICBub2RlLl94X2lnbm9yZVNlbGYgPSB0cnVlO1xuICAgIG5vZGUuX3hfaWdub3JlID0gdHJ1ZTtcbiAgfSk7XG4gIGZvciAobGV0IG5vZGUgb2YgYWRkZWROb2Rlcykge1xuICAgIGlmIChyZW1vdmVkTm9kZXMuaW5jbHVkZXMobm9kZSkpXG4gICAgICBjb250aW51ZTtcbiAgICBpZiAoIW5vZGUuaXNDb25uZWN0ZWQpXG4gICAgICBjb250aW51ZTtcbiAgICBkZWxldGUgbm9kZS5feF9pZ25vcmVTZWxmO1xuICAgIGRlbGV0ZSBub2RlLl94X2lnbm9yZTtcbiAgICBvbkVsQWRkZWRzLmZvckVhY2goKGkpID0+IGkobm9kZSkpO1xuICAgIG5vZGUuX3hfaWdub3JlID0gdHJ1ZTtcbiAgICBub2RlLl94X2lnbm9yZVNlbGYgPSB0cnVlO1xuICB9XG4gIGFkZGVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgIGRlbGV0ZSBub2RlLl94X2lnbm9yZVNlbGY7XG4gICAgZGVsZXRlIG5vZGUuX3hfaWdub3JlO1xuICB9KTtcbiAgYWRkZWROb2RlcyA9IG51bGw7XG4gIHJlbW92ZWROb2RlcyA9IG51bGw7XG4gIGFkZGVkQXR0cmlidXRlcyA9IG51bGw7XG4gIHJlbW92ZWRBdHRyaWJ1dGVzID0gbnVsbDtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3Njb3BlLmpzXG5mdW5jdGlvbiBzY29wZShub2RlKSB7XG4gIHJldHVybiBtZXJnZVByb3hpZXMoY2xvc2VzdERhdGFTdGFjayhub2RlKSk7XG59XG5mdW5jdGlvbiBhZGRTY29wZVRvTm9kZShub2RlLCBkYXRhMiwgcmVmZXJlbmNlTm9kZSkge1xuICBub2RlLl94X2RhdGFTdGFjayA9IFtkYXRhMiwgLi4uY2xvc2VzdERhdGFTdGFjayhyZWZlcmVuY2VOb2RlIHx8IG5vZGUpXTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBub2RlLl94X2RhdGFTdGFjayA9IG5vZGUuX3hfZGF0YVN0YWNrLmZpbHRlcigoaSkgPT4gaSAhPT0gZGF0YTIpO1xuICB9O1xufVxuZnVuY3Rpb24gY2xvc2VzdERhdGFTdGFjayhub2RlKSB7XG4gIGlmIChub2RlLl94X2RhdGFTdGFjaylcbiAgICByZXR1cm4gbm9kZS5feF9kYXRhU3RhY2s7XG4gIGlmICh0eXBlb2YgU2hhZG93Um9vdCA9PT0gXCJmdW5jdGlvblwiICYmIG5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG4gICAgcmV0dXJuIGNsb3Nlc3REYXRhU3RhY2sobm9kZS5ob3N0KTtcbiAgfVxuICBpZiAoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICByZXR1cm4gY2xvc2VzdERhdGFTdGFjayhub2RlLnBhcmVudE5vZGUpO1xufVxuZnVuY3Rpb24gbWVyZ2VQcm94aWVzKG9iamVjdHMpIHtcbiAgcmV0dXJuIG5ldyBQcm94eSh7IG9iamVjdHMgfSwgbWVyZ2VQcm94eVRyYXApO1xufVxudmFyIG1lcmdlUHJveHlUcmFwID0ge1xuICBvd25LZXlzKHsgb2JqZWN0cyB9KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oXG4gICAgICBuZXcgU2V0KG9iamVjdHMuZmxhdE1hcCgoaSkgPT4gT2JqZWN0LmtleXMoaSkpKVxuICAgICk7XG4gIH0sXG4gIGhhcyh7IG9iamVjdHMgfSwgbmFtZSkge1xuICAgIGlmIChuYW1lID09IFN5bWJvbC51bnNjb3BhYmxlcylcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gb2JqZWN0cy5zb21lKFxuICAgICAgKG9iaikgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgbmFtZSlcbiAgICApO1xuICB9LFxuICBnZXQoeyBvYmplY3RzIH0sIG5hbWUsIHRoaXNQcm94eSkge1xuICAgIGlmIChuYW1lID09IFwidG9KU09OXCIpXG4gICAgICByZXR1cm4gY29sbGFwc2VQcm94aWVzO1xuICAgIHJldHVybiBSZWZsZWN0LmdldChcbiAgICAgIG9iamVjdHMuZmluZChcbiAgICAgICAgKG9iaikgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgbmFtZSlcbiAgICAgICkgfHwge30sXG4gICAgICBuYW1lLFxuICAgICAgdGhpc1Byb3h5XG4gICAgKTtcbiAgfSxcbiAgc2V0KHsgb2JqZWN0cyB9LCBuYW1lLCB2YWx1ZSwgdGhpc1Byb3h5KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gb2JqZWN0cy5maW5kKFxuICAgICAgKG9iaikgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgbmFtZSlcbiAgICApIHx8IG9iamVjdHNbb2JqZWN0cy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIG5hbWUpO1xuICAgIGlmIChkZXNjcmlwdG9yPy5zZXQgJiYgZGVzY3JpcHRvcj8uZ2V0KVxuICAgICAgcmV0dXJuIFJlZmxlY3Quc2V0KHRhcmdldCwgbmFtZSwgdmFsdWUsIHRoaXNQcm94eSk7XG4gICAgcmV0dXJuIFJlZmxlY3Quc2V0KHRhcmdldCwgbmFtZSwgdmFsdWUpO1xuICB9XG59O1xuZnVuY3Rpb24gY29sbGFwc2VQcm94aWVzKCkge1xuICBsZXQga2V5cyA9IFJlZmxlY3Qub3duS2V5cyh0aGlzKTtcbiAgcmV0dXJuIGtleXMucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGFjY1trZXldID0gUmVmbGVjdC5nZXQodGhpcywga2V5KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9pbnRlcmNlcHRvci5qc1xuZnVuY3Rpb24gaW5pdEludGVyY2VwdG9yczIoZGF0YTIpIHtcbiAgbGV0IGlzT2JqZWN0MiA9ICh2YWwpID0+IHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkodmFsKSAmJiB2YWwgIT09IG51bGw7XG4gIGxldCByZWN1cnNlID0gKG9iaiwgYmFzZVBhdGggPSBcIlwiKSA9PiB7XG4gICAgT2JqZWN0LmVudHJpZXMoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqKSkuZm9yRWFjaCgoW2tleSwgeyB2YWx1ZSwgZW51bWVyYWJsZSB9XSkgPT4ge1xuICAgICAgaWYgKGVudW1lcmFibGUgPT09IGZhbHNlIHx8IHZhbHVlID09PSB2b2lkIDApXG4gICAgICAgIHJldHVybjtcbiAgICAgIGxldCBwYXRoID0gYmFzZVBhdGggPT09IFwiXCIgPyBrZXkgOiBgJHtiYXNlUGF0aH0uJHtrZXl9YDtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUuX3hfaW50ZXJjZXB0b3IpIHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZS5pbml0aWFsaXplKGRhdGEyLCBwYXRoLCBrZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzT2JqZWN0Mih2YWx1ZSkgJiYgdmFsdWUgIT09IG9iaiAmJiAhKHZhbHVlIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgICAgICByZWN1cnNlKHZhbHVlLCBwYXRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICByZXR1cm4gcmVjdXJzZShkYXRhMik7XG59XG5mdW5jdGlvbiBpbnRlcmNlcHRvcihjYWxsYmFjaywgbXV0YXRlT2JqID0gKCkgPT4ge1xufSkge1xuICBsZXQgb2JqID0ge1xuICAgIGluaXRpYWxWYWx1ZTogdm9pZCAwLFxuICAgIF94X2ludGVyY2VwdG9yOiB0cnVlLFxuICAgIGluaXRpYWxpemUoZGF0YTIsIHBhdGgsIGtleSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKHRoaXMuaW5pdGlhbFZhbHVlLCAoKSA9PiBnZXQoZGF0YTIsIHBhdGgpLCAodmFsdWUpID0+IHNldChkYXRhMiwgcGF0aCwgdmFsdWUpLCBwYXRoLCBrZXkpO1xuICAgIH1cbiAgfTtcbiAgbXV0YXRlT2JqKG9iaik7XG4gIHJldHVybiAoaW5pdGlhbFZhbHVlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBpbml0aWFsVmFsdWUgPT09IFwib2JqZWN0XCIgJiYgaW5pdGlhbFZhbHVlICE9PSBudWxsICYmIGluaXRpYWxWYWx1ZS5feF9pbnRlcmNlcHRvcikge1xuICAgICAgbGV0IGluaXRpYWxpemUgPSBvYmouaW5pdGlhbGl6ZS5iaW5kKG9iaik7XG4gICAgICBvYmouaW5pdGlhbGl6ZSA9IChkYXRhMiwgcGF0aCwga2V5KSA9PiB7XG4gICAgICAgIGxldCBpbm5lclZhbHVlID0gaW5pdGlhbFZhbHVlLmluaXRpYWxpemUoZGF0YTIsIHBhdGgsIGtleSk7XG4gICAgICAgIG9iai5pbml0aWFsVmFsdWUgPSBpbm5lclZhbHVlO1xuICAgICAgICByZXR1cm4gaW5pdGlhbGl6ZShkYXRhMiwgcGF0aCwga2V5KTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5pbml0aWFsVmFsdWUgPSBpbml0aWFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH07XG59XG5mdW5jdGlvbiBnZXQob2JqLCBwYXRoKSB7XG4gIHJldHVybiBwYXRoLnNwbGl0KFwiLlwiKS5yZWR1Y2UoKGNhcnJ5LCBzZWdtZW50KSA9PiBjYXJyeVtzZWdtZW50XSwgb2JqKTtcbn1cbmZ1bmN0aW9uIHNldChvYmosIHBhdGgsIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gXCJzdHJpbmdcIilcbiAgICBwYXRoID0gcGF0aC5zcGxpdChcIi5cIik7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMSlcbiAgICBvYmpbcGF0aFswXV0gPSB2YWx1ZTtcbiAgZWxzZSBpZiAocGF0aC5sZW5ndGggPT09IDApXG4gICAgdGhyb3cgZXJyb3I7XG4gIGVsc2Uge1xuICAgIGlmIChvYmpbcGF0aFswXV0pXG4gICAgICByZXR1cm4gc2V0KG9ialtwYXRoWzBdXSwgcGF0aC5zbGljZSgxKSwgdmFsdWUpO1xuICAgIGVsc2Uge1xuICAgICAgb2JqW3BhdGhbMF1dID0ge307XG4gICAgICByZXR1cm4gc2V0KG9ialtwYXRoWzBdXSwgcGF0aC5zbGljZSgxKSwgdmFsdWUpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLmpzXG52YXIgbWFnaWNzID0ge307XG5mdW5jdGlvbiBtYWdpYyhuYW1lLCBjYWxsYmFjaykge1xuICBtYWdpY3NbbmFtZV0gPSBjYWxsYmFjaztcbn1cbmZ1bmN0aW9uIGluamVjdE1hZ2ljcyhvYmosIGVsKSB7XG4gIE9iamVjdC5lbnRyaWVzKG1hZ2ljcykuZm9yRWFjaCgoW25hbWUsIGNhbGxiYWNrXSkgPT4ge1xuICAgIGxldCBtZW1vaXplZFV0aWxpdGllcyA9IG51bGw7XG4gICAgZnVuY3Rpb24gZ2V0VXRpbGl0aWVzKCkge1xuICAgICAgaWYgKG1lbW9pemVkVXRpbGl0aWVzKSB7XG4gICAgICAgIHJldHVybiBtZW1vaXplZFV0aWxpdGllcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBbdXRpbGl0aWVzLCBjbGVhbnVwMl0gPSBnZXRFbGVtZW50Qm91bmRVdGlsaXRpZXMoZWwpO1xuICAgICAgICBtZW1vaXplZFV0aWxpdGllcyA9IHsgaW50ZXJjZXB0b3IsIC4uLnV0aWxpdGllcyB9O1xuICAgICAgICBvbkVsUmVtb3ZlZChlbCwgY2xlYW51cDIpO1xuICAgICAgICByZXR1cm4gbWVtb2l6ZWRVdGlsaXRpZXM7XG4gICAgICB9XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGAkJHtuYW1lfWAsIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVsLCBnZXRVdGlsaXRpZXMoKSk7XG4gICAgICB9LFxuICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBvYmo7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy91dGlscy9lcnJvci5qc1xuZnVuY3Rpb24gdHJ5Q2F0Y2goZWwsIGV4cHJlc3Npb24sIGNhbGxiYWNrLCAuLi5hcmdzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKC4uLmFyZ3MpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaGFuZGxlRXJyb3IoZSwgZWwsIGV4cHJlc3Npb24pO1xuICB9XG59XG5mdW5jdGlvbiBoYW5kbGVFcnJvcihlcnJvcjIsIGVsLCBleHByZXNzaW9uID0gdm9pZCAwKSB7XG4gIE9iamVjdC5hc3NpZ24oZXJyb3IyLCB7IGVsLCBleHByZXNzaW9uIH0pO1xuICBjb25zb2xlLndhcm4oYEFscGluZSBFeHByZXNzaW9uIEVycm9yOiAke2Vycm9yMi5tZXNzYWdlfVxuXG4ke2V4cHJlc3Npb24gPyAnRXhwcmVzc2lvbjogXCInICsgZXhwcmVzc2lvbiArICdcIlxcblxcbicgOiBcIlwifWAsIGVsKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdGhyb3cgZXJyb3IyO1xuICB9LCAwKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2V2YWx1YXRvci5qc1xudmFyIHNob3VsZEF1dG9FdmFsdWF0ZUZ1bmN0aW9ucyA9IHRydWU7XG5mdW5jdGlvbiBkb250QXV0b0V2YWx1YXRlRnVuY3Rpb25zKGNhbGxiYWNrKSB7XG4gIGxldCBjYWNoZSA9IHNob3VsZEF1dG9FdmFsdWF0ZUZ1bmN0aW9ucztcbiAgc2hvdWxkQXV0b0V2YWx1YXRlRnVuY3Rpb25zID0gZmFsc2U7XG4gIGxldCByZXN1bHQgPSBjYWxsYmFjaygpO1xuICBzaG91bGRBdXRvRXZhbHVhdGVGdW5jdGlvbnMgPSBjYWNoZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGV2YWx1YXRlKGVsLCBleHByZXNzaW9uLCBleHRyYXMgPSB7fSkge1xuICBsZXQgcmVzdWx0O1xuICBldmFsdWF0ZUxhdGVyKGVsLCBleHByZXNzaW9uKSgodmFsdWUpID0+IHJlc3VsdCA9IHZhbHVlLCBleHRyYXMpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZXZhbHVhdGVMYXRlciguLi5hcmdzKSB7XG4gIHJldHVybiB0aGVFdmFsdWF0b3JGdW5jdGlvbiguLi5hcmdzKTtcbn1cbnZhciB0aGVFdmFsdWF0b3JGdW5jdGlvbiA9IG5vcm1hbEV2YWx1YXRvcjtcbmZ1bmN0aW9uIHNldEV2YWx1YXRvcihuZXdFdmFsdWF0b3IpIHtcbiAgdGhlRXZhbHVhdG9yRnVuY3Rpb24gPSBuZXdFdmFsdWF0b3I7XG59XG5mdW5jdGlvbiBub3JtYWxFdmFsdWF0b3IoZWwsIGV4cHJlc3Npb24pIHtcbiAgbGV0IG92ZXJyaWRkZW5NYWdpY3MgPSB7fTtcbiAgaW5qZWN0TWFnaWNzKG92ZXJyaWRkZW5NYWdpY3MsIGVsKTtcbiAgbGV0IGRhdGFTdGFjayA9IFtvdmVycmlkZGVuTWFnaWNzLCAuLi5jbG9zZXN0RGF0YVN0YWNrKGVsKV07XG4gIGxldCBldmFsdWF0b3IgPSB0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJmdW5jdGlvblwiID8gZ2VuZXJhdGVFdmFsdWF0b3JGcm9tRnVuY3Rpb24oZGF0YVN0YWNrLCBleHByZXNzaW9uKSA6IGdlbmVyYXRlRXZhbHVhdG9yRnJvbVN0cmluZyhkYXRhU3RhY2ssIGV4cHJlc3Npb24sIGVsKTtcbiAgcmV0dXJuIHRyeUNhdGNoLmJpbmQobnVsbCwgZWwsIGV4cHJlc3Npb24sIGV2YWx1YXRvcik7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUV2YWx1YXRvckZyb21GdW5jdGlvbihkYXRhU3RhY2ssIGZ1bmMpIHtcbiAgcmV0dXJuIChyZWNlaXZlciA9ICgpID0+IHtcbiAgfSwgeyBzY29wZTogc2NvcGUyID0ge30sIHBhcmFtcyA9IFtdIH0gPSB7fSkgPT4ge1xuICAgIGxldCByZXN1bHQgPSBmdW5jLmFwcGx5KG1lcmdlUHJveGllcyhbc2NvcGUyLCAuLi5kYXRhU3RhY2tdKSwgcGFyYW1zKTtcbiAgICBydW5JZlR5cGVPZkZ1bmN0aW9uKHJlY2VpdmVyLCByZXN1bHQpO1xuICB9O1xufVxudmFyIGV2YWx1YXRvck1lbW8gPSB7fTtcbmZ1bmN0aW9uIGdlbmVyYXRlRnVuY3Rpb25Gcm9tU3RyaW5nKGV4cHJlc3Npb24sIGVsKSB7XG4gIGlmIChldmFsdWF0b3JNZW1vW2V4cHJlc3Npb25dKSB7XG4gICAgcmV0dXJuIGV2YWx1YXRvck1lbW9bZXhwcmVzc2lvbl07XG4gIH1cbiAgbGV0IEFzeW5jRnVuY3Rpb24gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXN5bmMgZnVuY3Rpb24oKSB7XG4gIH0pLmNvbnN0cnVjdG9yO1xuICBsZXQgcmlnaHRTaWRlU2FmZUV4cHJlc3Npb24gPSAvXltcXG5cXHNdKmlmLipcXCguKlxcKS8udGVzdChleHByZXNzaW9uLnRyaW0oKSkgfHwgL14obGV0fGNvbnN0KVxccy8udGVzdChleHByZXNzaW9uLnRyaW0oKSkgPyBgKGFzeW5jKCk9PnsgJHtleHByZXNzaW9ufSB9KSgpYCA6IGV4cHJlc3Npb247XG4gIGNvbnN0IHNhZmVBc3luY0Z1bmN0aW9uID0gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZnVuYzIgPSBuZXcgQXN5bmNGdW5jdGlvbihcbiAgICAgICAgW1wiX19zZWxmXCIsIFwic2NvcGVcIl0sXG4gICAgICAgIGB3aXRoIChzY29wZSkgeyBfX3NlbGYucmVzdWx0ID0gJHtyaWdodFNpZGVTYWZlRXhwcmVzc2lvbn0gfTsgX19zZWxmLmZpbmlzaGVkID0gdHJ1ZTsgcmV0dXJuIF9fc2VsZi5yZXN1bHQ7YFxuICAgICAgKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jMiwgXCJuYW1lXCIsIHtcbiAgICAgICAgdmFsdWU6IGBbQWxwaW5lXSAke2V4cHJlc3Npb259YFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZnVuYzI7XG4gICAgfSBjYXRjaCAoZXJyb3IyKSB7XG4gICAgICBoYW5kbGVFcnJvcihlcnJvcjIsIGVsLCBleHByZXNzaW9uKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG4gIH07XG4gIGxldCBmdW5jID0gc2FmZUFzeW5jRnVuY3Rpb24oKTtcbiAgZXZhbHVhdG9yTWVtb1tleHByZXNzaW9uXSA9IGZ1bmM7XG4gIHJldHVybiBmdW5jO1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVFdmFsdWF0b3JGcm9tU3RyaW5nKGRhdGFTdGFjaywgZXhwcmVzc2lvbiwgZWwpIHtcbiAgbGV0IGZ1bmMgPSBnZW5lcmF0ZUZ1bmN0aW9uRnJvbVN0cmluZyhleHByZXNzaW9uLCBlbCk7XG4gIHJldHVybiAocmVjZWl2ZXIgPSAoKSA9PiB7XG4gIH0sIHsgc2NvcGU6IHNjb3BlMiA9IHt9LCBwYXJhbXMgPSBbXSB9ID0ge30pID0+IHtcbiAgICBmdW5jLnJlc3VsdCA9IHZvaWQgMDtcbiAgICBmdW5jLmZpbmlzaGVkID0gZmFsc2U7XG4gICAgbGV0IGNvbXBsZXRlU2NvcGUgPSBtZXJnZVByb3hpZXMoW3Njb3BlMiwgLi4uZGF0YVN0YWNrXSk7XG4gICAgaWYgKHR5cGVvZiBmdW5jID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGxldCBwcm9taXNlID0gZnVuYyhmdW5jLCBjb21wbGV0ZVNjb3BlKS5jYXRjaCgoZXJyb3IyKSA9PiBoYW5kbGVFcnJvcihlcnJvcjIsIGVsLCBleHByZXNzaW9uKSk7XG4gICAgICBpZiAoZnVuYy5maW5pc2hlZCkge1xuICAgICAgICBydW5JZlR5cGVPZkZ1bmN0aW9uKHJlY2VpdmVyLCBmdW5jLnJlc3VsdCwgY29tcGxldGVTY29wZSwgcGFyYW1zLCBlbCk7XG4gICAgICAgIGZ1bmMucmVzdWx0ID0gdm9pZCAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICBydW5JZlR5cGVPZkZ1bmN0aW9uKHJlY2VpdmVyLCByZXN1bHQsIGNvbXBsZXRlU2NvcGUsIHBhcmFtcywgZWwpO1xuICAgICAgICB9KS5jYXRjaCgoZXJyb3IyKSA9PiBoYW5kbGVFcnJvcihlcnJvcjIsIGVsLCBleHByZXNzaW9uKSkuZmluYWxseSgoKSA9PiBmdW5jLnJlc3VsdCA9IHZvaWQgMCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gcnVuSWZUeXBlT2ZGdW5jdGlvbihyZWNlaXZlciwgdmFsdWUsIHNjb3BlMiwgcGFyYW1zLCBlbCkge1xuICBpZiAoc2hvdWxkQXV0b0V2YWx1YXRlRnVuY3Rpb25zICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgbGV0IHJlc3VsdCA9IHZhbHVlLmFwcGx5KHNjb3BlMiwgcGFyYW1zKTtcbiAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgcmVzdWx0LnRoZW4oKGkpID0+IHJ1bklmVHlwZU9mRnVuY3Rpb24ocmVjZWl2ZXIsIGksIHNjb3BlMiwgcGFyYW1zKSkuY2F0Y2goKGVycm9yMikgPT4gaGFuZGxlRXJyb3IoZXJyb3IyLCBlbCwgdmFsdWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVjZWl2ZXIocmVzdWx0KTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgIHZhbHVlLnRoZW4oKGkpID0+IHJlY2VpdmVyKGkpKTtcbiAgfSBlbHNlIHtcbiAgICByZWNlaXZlcih2YWx1ZSk7XG4gIH1cbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMuanNcbnZhciBwcmVmaXhBc1N0cmluZyA9IFwieC1cIjtcbmZ1bmN0aW9uIHByZWZpeChzdWJqZWN0ID0gXCJcIikge1xuICByZXR1cm4gcHJlZml4QXNTdHJpbmcgKyBzdWJqZWN0O1xufVxuZnVuY3Rpb24gc2V0UHJlZml4KG5ld1ByZWZpeCkge1xuICBwcmVmaXhBc1N0cmluZyA9IG5ld1ByZWZpeDtcbn1cbnZhciBkaXJlY3RpdmVIYW5kbGVycyA9IHt9O1xuZnVuY3Rpb24gZGlyZWN0aXZlKG5hbWUsIGNhbGxiYWNrKSB7XG4gIGRpcmVjdGl2ZUhhbmRsZXJzW25hbWVdID0gY2FsbGJhY2s7XG4gIHJldHVybiB7XG4gICAgYmVmb3JlKGRpcmVjdGl2ZTIpIHtcbiAgICAgIGlmICghZGlyZWN0aXZlSGFuZGxlcnNbZGlyZWN0aXZlMl0pIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIFwiQ2Fubm90IGZpbmQgZGlyZWN0aXZlIGAke2RpcmVjdGl2ZX1gLiBgJHtuYW1lfWAgd2lsbCB1c2UgdGhlIGRlZmF1bHQgb3JkZXIgb2YgZXhlY3V0aW9uXCJcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgcG9zID0gZGlyZWN0aXZlT3JkZXIuaW5kZXhPZihkaXJlY3RpdmUyKTtcbiAgICAgIGRpcmVjdGl2ZU9yZGVyLnNwbGljZShwb3MgPj0gMCA/IHBvcyA6IGRpcmVjdGl2ZU9yZGVyLmluZGV4T2YoXCJERUZBVUxUXCIpLCAwLCBuYW1lKTtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBkaXJlY3RpdmVzKGVsLCBhdHRyaWJ1dGVzLCBvcmlnaW5hbEF0dHJpYnV0ZU92ZXJyaWRlKSB7XG4gIGF0dHJpYnV0ZXMgPSBBcnJheS5mcm9tKGF0dHJpYnV0ZXMpO1xuICBpZiAoZWwuX3hfdmlydHVhbERpcmVjdGl2ZXMpIHtcbiAgICBsZXQgdkF0dHJpYnV0ZXMgPSBPYmplY3QuZW50cmllcyhlbC5feF92aXJ0dWFsRGlyZWN0aXZlcykubWFwKChbbmFtZSwgdmFsdWVdKSA9PiAoeyBuYW1lLCB2YWx1ZSB9KSk7XG4gICAgbGV0IHN0YXRpY0F0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzT25seSh2QXR0cmlidXRlcyk7XG4gICAgdkF0dHJpYnV0ZXMgPSB2QXR0cmlidXRlcy5tYXAoKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgaWYgKHN0YXRpY0F0dHJpYnV0ZXMuZmluZCgoYXR0cikgPT4gYXR0ci5uYW1lID09PSBhdHRyaWJ1dGUubmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBuYW1lOiBgeC1iaW5kOiR7YXR0cmlidXRlLm5hbWV9YCxcbiAgICAgICAgICB2YWx1ZTogYFwiJHthdHRyaWJ1dGUudmFsdWV9XCJgXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gYXR0cmlidXRlO1xuICAgIH0pO1xuICAgIGF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzLmNvbmNhdCh2QXR0cmlidXRlcyk7XG4gIH1cbiAgbGV0IHRyYW5zZm9ybWVkQXR0cmlidXRlTWFwID0ge307XG4gIGxldCBkaXJlY3RpdmVzMiA9IGF0dHJpYnV0ZXMubWFwKHRvVHJhbnNmb3JtZWRBdHRyaWJ1dGVzKChuZXdOYW1lLCBvbGROYW1lKSA9PiB0cmFuc2Zvcm1lZEF0dHJpYnV0ZU1hcFtuZXdOYW1lXSA9IG9sZE5hbWUpKS5maWx0ZXIob3V0Tm9uQWxwaW5lQXR0cmlidXRlcykubWFwKHRvUGFyc2VkRGlyZWN0aXZlcyh0cmFuc2Zvcm1lZEF0dHJpYnV0ZU1hcCwgb3JpZ2luYWxBdHRyaWJ1dGVPdmVycmlkZSkpLnNvcnQoYnlQcmlvcml0eSk7XG4gIHJldHVybiBkaXJlY3RpdmVzMi5tYXAoKGRpcmVjdGl2ZTIpID0+IHtcbiAgICByZXR1cm4gZ2V0RGlyZWN0aXZlSGFuZGxlcihlbCwgZGlyZWN0aXZlMik7XG4gIH0pO1xufVxuZnVuY3Rpb24gYXR0cmlidXRlc09ubHkoYXR0cmlidXRlcykge1xuICByZXR1cm4gQXJyYXkuZnJvbShhdHRyaWJ1dGVzKS5tYXAodG9UcmFuc2Zvcm1lZEF0dHJpYnV0ZXMoKSkuZmlsdGVyKChhdHRyKSA9PiAhb3V0Tm9uQWxwaW5lQXR0cmlidXRlcyhhdHRyKSk7XG59XG52YXIgaXNEZWZlcnJpbmdIYW5kbGVycyA9IGZhbHNlO1xudmFyIGRpcmVjdGl2ZUhhbmRsZXJTdGFja3MgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIGN1cnJlbnRIYW5kbGVyU3RhY2tLZXkgPSBTeW1ib2woKTtcbmZ1bmN0aW9uIGRlZmVySGFuZGxpbmdEaXJlY3RpdmVzKGNhbGxiYWNrKSB7XG4gIGlzRGVmZXJyaW5nSGFuZGxlcnMgPSB0cnVlO1xuICBsZXQga2V5ID0gU3ltYm9sKCk7XG4gIGN1cnJlbnRIYW5kbGVyU3RhY2tLZXkgPSBrZXk7XG4gIGRpcmVjdGl2ZUhhbmRsZXJTdGFja3Muc2V0KGtleSwgW10pO1xuICBsZXQgZmx1c2hIYW5kbGVycyA9ICgpID0+IHtcbiAgICB3aGlsZSAoZGlyZWN0aXZlSGFuZGxlclN0YWNrcy5nZXQoa2V5KS5sZW5ndGgpXG4gICAgICBkaXJlY3RpdmVIYW5kbGVyU3RhY2tzLmdldChrZXkpLnNoaWZ0KCkoKTtcbiAgICBkaXJlY3RpdmVIYW5kbGVyU3RhY2tzLmRlbGV0ZShrZXkpO1xuICB9O1xuICBsZXQgc3RvcERlZmVycmluZyA9ICgpID0+IHtcbiAgICBpc0RlZmVycmluZ0hhbmRsZXJzID0gZmFsc2U7XG4gICAgZmx1c2hIYW5kbGVycygpO1xuICB9O1xuICBjYWxsYmFjayhmbHVzaEhhbmRsZXJzKTtcbiAgc3RvcERlZmVycmluZygpO1xufVxuZnVuY3Rpb24gZ2V0RWxlbWVudEJvdW5kVXRpbGl0aWVzKGVsKSB7XG4gIGxldCBjbGVhbnVwcyA9IFtdO1xuICBsZXQgY2xlYW51cDIgPSAoY2FsbGJhY2spID0+IGNsZWFudXBzLnB1c2goY2FsbGJhY2spO1xuICBsZXQgW2VmZmVjdDMsIGNsZWFudXBFZmZlY3RdID0gZWxlbWVudEJvdW5kRWZmZWN0KGVsKTtcbiAgY2xlYW51cHMucHVzaChjbGVhbnVwRWZmZWN0KTtcbiAgbGV0IHV0aWxpdGllcyA9IHtcbiAgICBBbHBpbmU6IGFscGluZV9kZWZhdWx0LFxuICAgIGVmZmVjdDogZWZmZWN0MyxcbiAgICBjbGVhbnVwOiBjbGVhbnVwMixcbiAgICBldmFsdWF0ZUxhdGVyOiBldmFsdWF0ZUxhdGVyLmJpbmQoZXZhbHVhdGVMYXRlciwgZWwpLFxuICAgIGV2YWx1YXRlOiBldmFsdWF0ZS5iaW5kKGV2YWx1YXRlLCBlbClcbiAgfTtcbiAgbGV0IGRvQ2xlYW51cCA9ICgpID0+IGNsZWFudXBzLmZvckVhY2goKGkpID0+IGkoKSk7XG4gIHJldHVybiBbdXRpbGl0aWVzLCBkb0NsZWFudXBdO1xufVxuZnVuY3Rpb24gZ2V0RGlyZWN0aXZlSGFuZGxlcihlbCwgZGlyZWN0aXZlMikge1xuICBsZXQgbm9vcCA9ICgpID0+IHtcbiAgfTtcbiAgbGV0IGhhbmRsZXI0ID0gZGlyZWN0aXZlSGFuZGxlcnNbZGlyZWN0aXZlMi50eXBlXSB8fCBub29wO1xuICBsZXQgW3V0aWxpdGllcywgY2xlYW51cDJdID0gZ2V0RWxlbWVudEJvdW5kVXRpbGl0aWVzKGVsKTtcbiAgb25BdHRyaWJ1dGVSZW1vdmVkKGVsLCBkaXJlY3RpdmUyLm9yaWdpbmFsLCBjbGVhbnVwMik7XG4gIGxldCBmdWxsSGFuZGxlciA9ICgpID0+IHtcbiAgICBpZiAoZWwuX3hfaWdub3JlIHx8IGVsLl94X2lnbm9yZVNlbGYpXG4gICAgICByZXR1cm47XG4gICAgaGFuZGxlcjQuaW5saW5lICYmIGhhbmRsZXI0LmlubGluZShlbCwgZGlyZWN0aXZlMiwgdXRpbGl0aWVzKTtcbiAgICBoYW5kbGVyNCA9IGhhbmRsZXI0LmJpbmQoaGFuZGxlcjQsIGVsLCBkaXJlY3RpdmUyLCB1dGlsaXRpZXMpO1xuICAgIGlzRGVmZXJyaW5nSGFuZGxlcnMgPyBkaXJlY3RpdmVIYW5kbGVyU3RhY2tzLmdldChjdXJyZW50SGFuZGxlclN0YWNrS2V5KS5wdXNoKGhhbmRsZXI0KSA6IGhhbmRsZXI0KCk7XG4gIH07XG4gIGZ1bGxIYW5kbGVyLnJ1bkNsZWFudXBzID0gY2xlYW51cDI7XG4gIHJldHVybiBmdWxsSGFuZGxlcjtcbn1cbnZhciBzdGFydGluZ1dpdGggPSAoc3ViamVjdCwgcmVwbGFjZW1lbnQpID0+ICh7IG5hbWUsIHZhbHVlIH0pID0+IHtcbiAgaWYgKG5hbWUuc3RhcnRzV2l0aChzdWJqZWN0KSlcbiAgICBuYW1lID0gbmFtZS5yZXBsYWNlKHN1YmplY3QsIHJlcGxhY2VtZW50KTtcbiAgcmV0dXJuIHsgbmFtZSwgdmFsdWUgfTtcbn07XG52YXIgaW50byA9IChpKSA9PiBpO1xuZnVuY3Rpb24gdG9UcmFuc2Zvcm1lZEF0dHJpYnV0ZXMoY2FsbGJhY2sgPSAoKSA9PiB7XG59KSB7XG4gIHJldHVybiAoeyBuYW1lLCB2YWx1ZSB9KSA9PiB7XG4gICAgbGV0IHsgbmFtZTogbmV3TmFtZSwgdmFsdWU6IG5ld1ZhbHVlIH0gPSBhdHRyaWJ1dGVUcmFuc2Zvcm1lcnMucmVkdWNlKChjYXJyeSwgdHJhbnNmb3JtKSA9PiB7XG4gICAgICByZXR1cm4gdHJhbnNmb3JtKGNhcnJ5KTtcbiAgICB9LCB7IG5hbWUsIHZhbHVlIH0pO1xuICAgIGlmIChuZXdOYW1lICE9PSBuYW1lKVxuICAgICAgY2FsbGJhY2sobmV3TmFtZSwgbmFtZSk7XG4gICAgcmV0dXJuIHsgbmFtZTogbmV3TmFtZSwgdmFsdWU6IG5ld1ZhbHVlIH07XG4gIH07XG59XG52YXIgYXR0cmlidXRlVHJhbnNmb3JtZXJzID0gW107XG5mdW5jdGlvbiBtYXBBdHRyaWJ1dGVzKGNhbGxiYWNrKSB7XG4gIGF0dHJpYnV0ZVRyYW5zZm9ybWVycy5wdXNoKGNhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIG91dE5vbkFscGluZUF0dHJpYnV0ZXMoeyBuYW1lIH0pIHtcbiAgcmV0dXJuIGFscGluZUF0dHJpYnV0ZVJlZ2V4KCkudGVzdChuYW1lKTtcbn1cbnZhciBhbHBpbmVBdHRyaWJ1dGVSZWdleCA9ICgpID0+IG5ldyBSZWdFeHAoYF4ke3ByZWZpeEFzU3RyaW5nfShbXjpeLl0rKVxcXFxiYCk7XG5mdW5jdGlvbiB0b1BhcnNlZERpcmVjdGl2ZXModHJhbnNmb3JtZWRBdHRyaWJ1dGVNYXAsIG9yaWdpbmFsQXR0cmlidXRlT3ZlcnJpZGUpIHtcbiAgcmV0dXJuICh7IG5hbWUsIHZhbHVlIH0pID0+IHtcbiAgICBsZXQgdHlwZU1hdGNoID0gbmFtZS5tYXRjaChhbHBpbmVBdHRyaWJ1dGVSZWdleCgpKTtcbiAgICBsZXQgdmFsdWVNYXRjaCA9IG5hbWUubWF0Y2goLzooW2EtekEtWjAtOVxcLV86XSspLyk7XG4gICAgbGV0IG1vZGlmaWVycyA9IG5hbWUubWF0Y2goL1xcLlteLlxcXV0rKD89W15cXF1dKiQpL2cpIHx8IFtdO1xuICAgIGxldCBvcmlnaW5hbCA9IG9yaWdpbmFsQXR0cmlidXRlT3ZlcnJpZGUgfHwgdHJhbnNmb3JtZWRBdHRyaWJ1dGVNYXBbbmFtZV0gfHwgbmFtZTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdHlwZU1hdGNoID8gdHlwZU1hdGNoWzFdIDogbnVsbCxcbiAgICAgIHZhbHVlOiB2YWx1ZU1hdGNoID8gdmFsdWVNYXRjaFsxXSA6IG51bGwsXG4gICAgICBtb2RpZmllcnM6IG1vZGlmaWVycy5tYXAoKGkpID0+IGkucmVwbGFjZShcIi5cIiwgXCJcIikpLFxuICAgICAgZXhwcmVzc2lvbjogdmFsdWUsXG4gICAgICBvcmlnaW5hbFxuICAgIH07XG4gIH07XG59XG52YXIgREVGQVVMVCA9IFwiREVGQVVMVFwiO1xudmFyIGRpcmVjdGl2ZU9yZGVyID0gW1xuICBcImlnbm9yZVwiLFxuICBcInJlZlwiLFxuICBcImRhdGFcIixcbiAgXCJpZFwiLFxuICBcImFuY2hvclwiLFxuICBcImJpbmRcIixcbiAgXCJpbml0XCIsXG4gIFwiZm9yXCIsXG4gIFwibW9kZWxcIixcbiAgXCJtb2RlbGFibGVcIixcbiAgXCJ0cmFuc2l0aW9uXCIsXG4gIFwic2hvd1wiLFxuICBcImlmXCIsXG4gIERFRkFVTFQsXG4gIFwidGVsZXBvcnRcIlxuXTtcbmZ1bmN0aW9uIGJ5UHJpb3JpdHkoYSwgYikge1xuICBsZXQgdHlwZUEgPSBkaXJlY3RpdmVPcmRlci5pbmRleE9mKGEudHlwZSkgPT09IC0xID8gREVGQVVMVCA6IGEudHlwZTtcbiAgbGV0IHR5cGVCID0gZGlyZWN0aXZlT3JkZXIuaW5kZXhPZihiLnR5cGUpID09PSAtMSA/IERFRkFVTFQgOiBiLnR5cGU7XG4gIHJldHVybiBkaXJlY3RpdmVPcmRlci5pbmRleE9mKHR5cGVBKSAtIGRpcmVjdGl2ZU9yZGVyLmluZGV4T2YodHlwZUIpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbmV4dFRpY2suanNcbnZhciB0aWNrU3RhY2sgPSBbXTtcbnZhciBpc0hvbGRpbmcgPSBmYWxzZTtcbmZ1bmN0aW9uIG5leHRUaWNrKGNhbGxiYWNrID0gKCkgPT4ge1xufSkge1xuICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgaXNIb2xkaW5nIHx8IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVsZWFzZU5leHRUaWNrcygpO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IHtcbiAgICB0aWNrU3RhY2sucHVzaCgoKSA9PiB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgICAgcmVzKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gcmVsZWFzZU5leHRUaWNrcygpIHtcbiAgaXNIb2xkaW5nID0gZmFsc2U7XG4gIHdoaWxlICh0aWNrU3RhY2subGVuZ3RoKVxuICAgIHRpY2tTdGFjay5zaGlmdCgpKCk7XG59XG5mdW5jdGlvbiBob2xkTmV4dFRpY2tzKCkge1xuICBpc0hvbGRpbmcgPSB0cnVlO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvY2xhc3Nlcy5qc1xuZnVuY3Rpb24gc2V0Q2xhc3NlcyhlbCwgdmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHNldENsYXNzZXNGcm9tU3RyaW5nKGVsLCB2YWx1ZS5qb2luKFwiIFwiKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHNldENsYXNzZXNGcm9tT2JqZWN0KGVsLCB2YWx1ZSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gc2V0Q2xhc3NlcyhlbCwgdmFsdWUoKSk7XG4gIH1cbiAgcmV0dXJuIHNldENsYXNzZXNGcm9tU3RyaW5nKGVsLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBzZXRDbGFzc2VzRnJvbVN0cmluZyhlbCwgY2xhc3NTdHJpbmcpIHtcbiAgbGV0IHNwbGl0ID0gKGNsYXNzU3RyaW5nMikgPT4gY2xhc3NTdHJpbmcyLnNwbGl0KFwiIFwiKS5maWx0ZXIoQm9vbGVhbik7XG4gIGxldCBtaXNzaW5nQ2xhc3NlcyA9IChjbGFzc1N0cmluZzIpID0+IGNsYXNzU3RyaW5nMi5zcGxpdChcIiBcIikuZmlsdGVyKChpKSA9PiAhZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGkpKS5maWx0ZXIoQm9vbGVhbik7XG4gIGxldCBhZGRDbGFzc2VzQW5kUmV0dXJuVW5kbyA9IChjbGFzc2VzKSA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSguLi5jbGFzc2VzKTtcbiAgICB9O1xuICB9O1xuICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nID09PSB0cnVlID8gY2xhc3NTdHJpbmcgPSBcIlwiIDogY2xhc3NTdHJpbmcgfHwgXCJcIjtcbiAgcmV0dXJuIGFkZENsYXNzZXNBbmRSZXR1cm5VbmRvKG1pc3NpbmdDbGFzc2VzKGNsYXNzU3RyaW5nKSk7XG59XG5mdW5jdGlvbiBzZXRDbGFzc2VzRnJvbU9iamVjdChlbCwgY2xhc3NPYmplY3QpIHtcbiAgbGV0IHNwbGl0ID0gKGNsYXNzU3RyaW5nKSA9PiBjbGFzc1N0cmluZy5zcGxpdChcIiBcIikuZmlsdGVyKEJvb2xlYW4pO1xuICBsZXQgZm9yQWRkID0gT2JqZWN0LmVudHJpZXMoY2xhc3NPYmplY3QpLmZsYXRNYXAoKFtjbGFzc1N0cmluZywgYm9vbF0pID0+IGJvb2wgPyBzcGxpdChjbGFzc1N0cmluZykgOiBmYWxzZSkuZmlsdGVyKEJvb2xlYW4pO1xuICBsZXQgZm9yUmVtb3ZlID0gT2JqZWN0LmVudHJpZXMoY2xhc3NPYmplY3QpLmZsYXRNYXAoKFtjbGFzc1N0cmluZywgYm9vbF0pID0+ICFib29sID8gc3BsaXQoY2xhc3NTdHJpbmcpIDogZmFsc2UpLmZpbHRlcihCb29sZWFuKTtcbiAgbGV0IGFkZGVkID0gW107XG4gIGxldCByZW1vdmVkID0gW107XG4gIGZvclJlbW92ZS5mb3JFYWNoKChpKSA9PiB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhpKSkge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShpKTtcbiAgICAgIHJlbW92ZWQucHVzaChpKTtcbiAgICB9XG4gIH0pO1xuICBmb3JBZGQuZm9yRWFjaCgoaSkgPT4ge1xuICAgIGlmICghZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGkpKSB7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKGkpO1xuICAgICAgYWRkZWQucHVzaChpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHJlbW92ZWQuZm9yRWFjaCgoaSkgPT4gZWwuY2xhc3NMaXN0LmFkZChpKSk7XG4gICAgYWRkZWQuZm9yRWFjaCgoaSkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShpKSk7XG4gIH07XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy91dGlscy9zdHlsZXMuanNcbmZ1bmN0aW9uIHNldFN0eWxlcyhlbCwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgIHJldHVybiBzZXRTdHlsZXNGcm9tT2JqZWN0KGVsLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHNldFN0eWxlc0Zyb21TdHJpbmcoZWwsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHNldFN0eWxlc0Zyb21PYmplY3QoZWwsIHZhbHVlKSB7XG4gIGxldCBwcmV2aW91c1N0eWxlcyA9IHt9O1xuICBPYmplY3QuZW50cmllcyh2YWx1ZSkuZm9yRWFjaCgoW2tleSwgdmFsdWUyXSkgPT4ge1xuICAgIHByZXZpb3VzU3R5bGVzW2tleV0gPSBlbC5zdHlsZVtrZXldO1xuICAgIGlmICgha2V5LnN0YXJ0c1dpdGgoXCItLVwiKSkge1xuICAgICAga2V5ID0ga2ViYWJDYXNlKGtleSk7XG4gICAgfVxuICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUyKTtcbiAgfSk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmIChlbC5zdHlsZS5sZW5ndGggPT09IDApIHtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgc2V0U3R5bGVzKGVsLCBwcmV2aW91c1N0eWxlcyk7XG4gIH07XG59XG5mdW5jdGlvbiBzZXRTdHlsZXNGcm9tU3RyaW5nKGVsLCB2YWx1ZSkge1xuICBsZXQgY2FjaGUgPSBlbC5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCB2YWx1ZSk7XG4gIGVsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIHZhbHVlKTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBjYWNoZSB8fCBcIlwiKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGtlYmFiQ2FzZShzdWJqZWN0KSB7XG4gIHJldHVybiBzdWJqZWN0LnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csIFwiJDEtJDJcIikudG9Mb3dlckNhc2UoKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL29uY2UuanNcbmZ1bmN0aW9uIG9uY2UoY2FsbGJhY2ssIGZhbGxiYWNrID0gKCkgPT4ge1xufSkge1xuICBsZXQgY2FsbGVkID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9O1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LXRyYW5zaXRpb24uanNcbmRpcmVjdGl2ZShcInRyYW5zaXRpb25cIiwgKGVsLCB7IHZhbHVlLCBtb2RpZmllcnMsIGV4cHJlc3Npb24gfSwgeyBldmFsdWF0ZTogZXZhbHVhdGUyIH0pID0+IHtcbiAgaWYgKHR5cGVvZiBleHByZXNzaW9uID09PSBcImZ1bmN0aW9uXCIpXG4gICAgZXhwcmVzc2lvbiA9IGV2YWx1YXRlMihleHByZXNzaW9uKTtcbiAgaWYgKGV4cHJlc3Npb24gPT09IGZhbHNlKVxuICAgIHJldHVybjtcbiAgaWYgKCFleHByZXNzaW9uIHx8IHR5cGVvZiBleHByZXNzaW9uID09PSBcImJvb2xlYW5cIikge1xuICAgIHJlZ2lzdGVyVHJhbnNpdGlvbnNGcm9tSGVscGVyKGVsLCBtb2RpZmllcnMsIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICByZWdpc3RlclRyYW5zaXRpb25zRnJvbUNsYXNzU3RyaW5nKGVsLCBleHByZXNzaW9uLCB2YWx1ZSk7XG4gIH1cbn0pO1xuZnVuY3Rpb24gcmVnaXN0ZXJUcmFuc2l0aW9uc0Zyb21DbGFzc1N0cmluZyhlbCwgY2xhc3NTdHJpbmcsIHN0YWdlKSB7XG4gIHJlZ2lzdGVyVHJhbnNpdGlvbk9iamVjdChlbCwgc2V0Q2xhc3NlcywgXCJcIik7XG4gIGxldCBkaXJlY3RpdmVTdG9yYWdlTWFwID0ge1xuICAgIFwiZW50ZXJcIjogKGNsYXNzZXMpID0+IHtcbiAgICAgIGVsLl94X3RyYW5zaXRpb24uZW50ZXIuZHVyaW5nID0gY2xhc3NlcztcbiAgICB9LFxuICAgIFwiZW50ZXItc3RhcnRcIjogKGNsYXNzZXMpID0+IHtcbiAgICAgIGVsLl94X3RyYW5zaXRpb24uZW50ZXIuc3RhcnQgPSBjbGFzc2VzO1xuICAgIH0sXG4gICAgXCJlbnRlci1lbmRcIjogKGNsYXNzZXMpID0+IHtcbiAgICAgIGVsLl94X3RyYW5zaXRpb24uZW50ZXIuZW5kID0gY2xhc3NlcztcbiAgICB9LFxuICAgIFwibGVhdmVcIjogKGNsYXNzZXMpID0+IHtcbiAgICAgIGVsLl94X3RyYW5zaXRpb24ubGVhdmUuZHVyaW5nID0gY2xhc3NlcztcbiAgICB9LFxuICAgIFwibGVhdmUtc3RhcnRcIjogKGNsYXNzZXMpID0+IHtcbiAgICAgIGVsLl94X3RyYW5zaXRpb24ubGVhdmUuc3RhcnQgPSBjbGFzc2VzO1xuICAgIH0sXG4gICAgXCJsZWF2ZS1lbmRcIjogKGNsYXNzZXMpID0+IHtcbiAgICAgIGVsLl94X3RyYW5zaXRpb24ubGVhdmUuZW5kID0gY2xhc3NlcztcbiAgICB9XG4gIH07XG4gIGRpcmVjdGl2ZVN0b3JhZ2VNYXBbc3RhZ2VdKGNsYXNzU3RyaW5nKTtcbn1cbmZ1bmN0aW9uIHJlZ2lzdGVyVHJhbnNpdGlvbnNGcm9tSGVscGVyKGVsLCBtb2RpZmllcnMsIHN0YWdlKSB7XG4gIHJlZ2lzdGVyVHJhbnNpdGlvbk9iamVjdChlbCwgc2V0U3R5bGVzKTtcbiAgbGV0IGRvZXNudFNwZWNpZnkgPSAhbW9kaWZpZXJzLmluY2x1ZGVzKFwiaW5cIikgJiYgIW1vZGlmaWVycy5pbmNsdWRlcyhcIm91dFwiKSAmJiAhc3RhZ2U7XG4gIGxldCB0cmFuc2l0aW9uaW5nSW4gPSBkb2VzbnRTcGVjaWZ5IHx8IG1vZGlmaWVycy5pbmNsdWRlcyhcImluXCIpIHx8IFtcImVudGVyXCJdLmluY2x1ZGVzKHN0YWdlKTtcbiAgbGV0IHRyYW5zaXRpb25pbmdPdXQgPSBkb2VzbnRTcGVjaWZ5IHx8IG1vZGlmaWVycy5pbmNsdWRlcyhcIm91dFwiKSB8fCBbXCJsZWF2ZVwiXS5pbmNsdWRlcyhzdGFnZSk7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJpblwiKSAmJiAhZG9lc250U3BlY2lmeSkge1xuICAgIG1vZGlmaWVycyA9IG1vZGlmaWVycy5maWx0ZXIoKGksIGluZGV4KSA9PiBpbmRleCA8IG1vZGlmaWVycy5pbmRleE9mKFwib3V0XCIpKTtcbiAgfVxuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwib3V0XCIpICYmICFkb2VzbnRTcGVjaWZ5KSB7XG4gICAgbW9kaWZpZXJzID0gbW9kaWZpZXJzLmZpbHRlcigoaSwgaW5kZXgpID0+IGluZGV4ID4gbW9kaWZpZXJzLmluZGV4T2YoXCJvdXRcIikpO1xuICB9XG4gIGxldCB3YW50c0FsbCA9ICFtb2RpZmllcnMuaW5jbHVkZXMoXCJvcGFjaXR5XCIpICYmICFtb2RpZmllcnMuaW5jbHVkZXMoXCJzY2FsZVwiKTtcbiAgbGV0IHdhbnRzT3BhY2l0eSA9IHdhbnRzQWxsIHx8IG1vZGlmaWVycy5pbmNsdWRlcyhcIm9wYWNpdHlcIik7XG4gIGxldCB3YW50c1NjYWxlID0gd2FudHNBbGwgfHwgbW9kaWZpZXJzLmluY2x1ZGVzKFwic2NhbGVcIik7XG4gIGxldCBvcGFjaXR5VmFsdWUgPSB3YW50c09wYWNpdHkgPyAwIDogMTtcbiAgbGV0IHNjYWxlVmFsdWUgPSB3YW50c1NjYWxlID8gbW9kaWZpZXJWYWx1ZShtb2RpZmllcnMsIFwic2NhbGVcIiwgOTUpIC8gMTAwIDogMTtcbiAgbGV0IGRlbGF5ID0gbW9kaWZpZXJWYWx1ZShtb2RpZmllcnMsIFwiZGVsYXlcIiwgMCkgLyAxZTM7XG4gIGxldCBvcmlnaW4gPSBtb2RpZmllclZhbHVlKG1vZGlmaWVycywgXCJvcmlnaW5cIiwgXCJjZW50ZXJcIik7XG4gIGxldCBwcm9wZXJ0eSA9IFwib3BhY2l0eSwgdHJhbnNmb3JtXCI7XG4gIGxldCBkdXJhdGlvbkluID0gbW9kaWZpZXJWYWx1ZShtb2RpZmllcnMsIFwiZHVyYXRpb25cIiwgMTUwKSAvIDFlMztcbiAgbGV0IGR1cmF0aW9uT3V0ID0gbW9kaWZpZXJWYWx1ZShtb2RpZmllcnMsIFwiZHVyYXRpb25cIiwgNzUpIC8gMWUzO1xuICBsZXQgZWFzaW5nID0gYGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKWA7XG4gIGlmICh0cmFuc2l0aW9uaW5nSW4pIHtcbiAgICBlbC5feF90cmFuc2l0aW9uLmVudGVyLmR1cmluZyA9IHtcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogb3JpZ2luLFxuICAgICAgdHJhbnNpdGlvbkRlbGF5OiBgJHtkZWxheX1zYCxcbiAgICAgIHRyYW5zaXRpb25Qcm9wZXJ0eTogcHJvcGVydHksXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IGAke2R1cmF0aW9uSW59c2AsXG4gICAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IGVhc2luZ1xuICAgIH07XG4gICAgZWwuX3hfdHJhbnNpdGlvbi5lbnRlci5zdGFydCA9IHtcbiAgICAgIG9wYWNpdHk6IG9wYWNpdHlWYWx1ZSxcbiAgICAgIHRyYW5zZm9ybTogYHNjYWxlKCR7c2NhbGVWYWx1ZX0pYFxuICAgIH07XG4gICAgZWwuX3hfdHJhbnNpdGlvbi5lbnRlci5lbmQgPSB7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgdHJhbnNmb3JtOiBgc2NhbGUoMSlgXG4gICAgfTtcbiAgfVxuICBpZiAodHJhbnNpdGlvbmluZ091dCkge1xuICAgIGVsLl94X3RyYW5zaXRpb24ubGVhdmUuZHVyaW5nID0ge1xuICAgICAgdHJhbnNmb3JtT3JpZ2luOiBvcmlnaW4sXG4gICAgICB0cmFuc2l0aW9uRGVsYXk6IGAke2RlbGF5fXNgLFxuICAgICAgdHJhbnNpdGlvblByb3BlcnR5OiBwcm9wZXJ0eSxcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogYCR7ZHVyYXRpb25PdXR9c2AsXG4gICAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IGVhc2luZ1xuICAgIH07XG4gICAgZWwuX3hfdHJhbnNpdGlvbi5sZWF2ZS5zdGFydCA9IHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB0cmFuc2Zvcm06IGBzY2FsZSgxKWBcbiAgICB9O1xuICAgIGVsLl94X3RyYW5zaXRpb24ubGVhdmUuZW5kID0ge1xuICAgICAgb3BhY2l0eTogb3BhY2l0eVZhbHVlLFxuICAgICAgdHJhbnNmb3JtOiBgc2NhbGUoJHtzY2FsZVZhbHVlfSlgXG4gICAgfTtcbiAgfVxufVxuZnVuY3Rpb24gcmVnaXN0ZXJUcmFuc2l0aW9uT2JqZWN0KGVsLCBzZXRGdW5jdGlvbiwgZGVmYXVsdFZhbHVlID0ge30pIHtcbiAgaWYgKCFlbC5feF90cmFuc2l0aW9uKVxuICAgIGVsLl94X3RyYW5zaXRpb24gPSB7XG4gICAgICBlbnRlcjogeyBkdXJpbmc6IGRlZmF1bHRWYWx1ZSwgc3RhcnQ6IGRlZmF1bHRWYWx1ZSwgZW5kOiBkZWZhdWx0VmFsdWUgfSxcbiAgICAgIGxlYXZlOiB7IGR1cmluZzogZGVmYXVsdFZhbHVlLCBzdGFydDogZGVmYXVsdFZhbHVlLCBlbmQ6IGRlZmF1bHRWYWx1ZSB9LFxuICAgICAgaW4oYmVmb3JlID0gKCkgPT4ge1xuICAgICAgfSwgYWZ0ZXIgPSAoKSA9PiB7XG4gICAgICB9KSB7XG4gICAgICAgIHRyYW5zaXRpb24oZWwsIHNldEZ1bmN0aW9uLCB7XG4gICAgICAgICAgZHVyaW5nOiB0aGlzLmVudGVyLmR1cmluZyxcbiAgICAgICAgICBzdGFydDogdGhpcy5lbnRlci5zdGFydCxcbiAgICAgICAgICBlbmQ6IHRoaXMuZW50ZXIuZW5kXG4gICAgICAgIH0sIGJlZm9yZSwgYWZ0ZXIpO1xuICAgICAgfSxcbiAgICAgIG91dChiZWZvcmUgPSAoKSA9PiB7XG4gICAgICB9LCBhZnRlciA9ICgpID0+IHtcbiAgICAgIH0pIHtcbiAgICAgICAgdHJhbnNpdGlvbihlbCwgc2V0RnVuY3Rpb24sIHtcbiAgICAgICAgICBkdXJpbmc6IHRoaXMubGVhdmUuZHVyaW5nLFxuICAgICAgICAgIHN0YXJ0OiB0aGlzLmxlYXZlLnN0YXJ0LFxuICAgICAgICAgIGVuZDogdGhpcy5sZWF2ZS5lbmRcbiAgICAgICAgfSwgYmVmb3JlLCBhZnRlcik7XG4gICAgICB9XG4gICAgfTtcbn1cbndpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5feF90b2dnbGVBbmRDYXNjYWRlV2l0aFRyYW5zaXRpb25zID0gZnVuY3Rpb24oZWwsIHZhbHVlLCBzaG93LCBoaWRlKSB7XG4gIGNvbnN0IG5leHRUaWNrMiA9IGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gXCJ2aXNpYmxlXCIgPyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgOiBzZXRUaW1lb3V0O1xuICBsZXQgY2xpY2tBd2F5Q29tcGF0aWJsZVNob3cgPSAoKSA9PiBuZXh0VGljazIoc2hvdyk7XG4gIGlmICh2YWx1ZSkge1xuICAgIGlmIChlbC5feF90cmFuc2l0aW9uICYmIChlbC5feF90cmFuc2l0aW9uLmVudGVyIHx8IGVsLl94X3RyYW5zaXRpb24ubGVhdmUpKSB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uLmVudGVyICYmIChPYmplY3QuZW50cmllcyhlbC5feF90cmFuc2l0aW9uLmVudGVyLmR1cmluZykubGVuZ3RoIHx8IE9iamVjdC5lbnRyaWVzKGVsLl94X3RyYW5zaXRpb24uZW50ZXIuc3RhcnQpLmxlbmd0aCB8fCBPYmplY3QuZW50cmllcyhlbC5feF90cmFuc2l0aW9uLmVudGVyLmVuZCkubGVuZ3RoKSA/IGVsLl94X3RyYW5zaXRpb24uaW4oc2hvdykgOiBjbGlja0F3YXlDb21wYXRpYmxlU2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uID8gZWwuX3hfdHJhbnNpdGlvbi5pbihzaG93KSA6IGNsaWNrQXdheUNvbXBhdGlibGVTaG93KCk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICBlbC5feF9oaWRlUHJvbWlzZSA9IGVsLl94X3RyYW5zaXRpb24gPyBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgZWwuX3hfdHJhbnNpdGlvbi5vdXQoKCkgPT4ge1xuICAgIH0sICgpID0+IHJlc29sdmUoaGlkZSkpO1xuICAgIGVsLl94X3RyYW5zaXRpb25pbmcgJiYgZWwuX3hfdHJhbnNpdGlvbmluZy5iZWZvcmVDYW5jZWwoKCkgPT4gcmVqZWN0KHsgaXNGcm9tQ2FuY2VsbGVkVHJhbnNpdGlvbjogdHJ1ZSB9KSk7XG4gIH0pIDogUHJvbWlzZS5yZXNvbHZlKGhpZGUpO1xuICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgbGV0IGNsb3Nlc3QgPSBjbG9zZXN0SGlkZShlbCk7XG4gICAgaWYgKGNsb3Nlc3QpIHtcbiAgICAgIGlmICghY2xvc2VzdC5feF9oaWRlQ2hpbGRyZW4pXG4gICAgICAgIGNsb3Nlc3QuX3hfaGlkZUNoaWxkcmVuID0gW107XG4gICAgICBjbG9zZXN0Ll94X2hpZGVDaGlsZHJlbi5wdXNoKGVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dFRpY2syKCgpID0+IHtcbiAgICAgICAgbGV0IGhpZGVBZnRlckNoaWxkcmVuID0gKGVsMikgPT4ge1xuICAgICAgICAgIGxldCBjYXJyeSA9IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGVsMi5feF9oaWRlUHJvbWlzZSxcbiAgICAgICAgICAgIC4uLihlbDIuX3hfaGlkZUNoaWxkcmVuIHx8IFtdKS5tYXAoaGlkZUFmdGVyQ2hpbGRyZW4pXG4gICAgICAgICAgXSkudGhlbigoW2ldKSA9PiBpKCkpO1xuICAgICAgICAgIGRlbGV0ZSBlbDIuX3hfaGlkZVByb21pc2U7XG4gICAgICAgICAgZGVsZXRlIGVsMi5feF9oaWRlQ2hpbGRyZW47XG4gICAgICAgICAgcmV0dXJuIGNhcnJ5O1xuICAgICAgICB9O1xuICAgICAgICBoaWRlQWZ0ZXJDaGlsZHJlbihlbCkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICBpZiAoIWUuaXNGcm9tQ2FuY2VsbGVkVHJhbnNpdGlvbilcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn07XG5mdW5jdGlvbiBjbG9zZXN0SGlkZShlbCkge1xuICBsZXQgcGFyZW50ID0gZWwucGFyZW50Tm9kZTtcbiAgaWYgKCFwYXJlbnQpXG4gICAgcmV0dXJuO1xuICByZXR1cm4gcGFyZW50Ll94X2hpZGVQcm9taXNlID8gcGFyZW50IDogY2xvc2VzdEhpZGUocGFyZW50KTtcbn1cbmZ1bmN0aW9uIHRyYW5zaXRpb24oZWwsIHNldEZ1bmN0aW9uLCB7IGR1cmluZywgc3RhcnQ6IHN0YXJ0MiwgZW5kIH0gPSB7fSwgYmVmb3JlID0gKCkgPT4ge1xufSwgYWZ0ZXIgPSAoKSA9PiB7XG59KSB7XG4gIGlmIChlbC5feF90cmFuc2l0aW9uaW5nKVxuICAgIGVsLl94X3RyYW5zaXRpb25pbmcuY2FuY2VsKCk7XG4gIGlmIChPYmplY3Qua2V5cyhkdXJpbmcpLmxlbmd0aCA9PT0gMCAmJiBPYmplY3Qua2V5cyhzdGFydDIpLmxlbmd0aCA9PT0gMCAmJiBPYmplY3Qua2V5cyhlbmQpLmxlbmd0aCA9PT0gMCkge1xuICAgIGJlZm9yZSgpO1xuICAgIGFmdGVyKCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCB1bmRvU3RhcnQsIHVuZG9EdXJpbmcsIHVuZG9FbmQ7XG4gIHBlcmZvcm1UcmFuc2l0aW9uKGVsLCB7XG4gICAgc3RhcnQoKSB7XG4gICAgICB1bmRvU3RhcnQgPSBzZXRGdW5jdGlvbihlbCwgc3RhcnQyKTtcbiAgICB9LFxuICAgIGR1cmluZygpIHtcbiAgICAgIHVuZG9EdXJpbmcgPSBzZXRGdW5jdGlvbihlbCwgZHVyaW5nKTtcbiAgICB9LFxuICAgIGJlZm9yZSxcbiAgICBlbmQoKSB7XG4gICAgICB1bmRvU3RhcnQoKTtcbiAgICAgIHVuZG9FbmQgPSBzZXRGdW5jdGlvbihlbCwgZW5kKTtcbiAgICB9LFxuICAgIGFmdGVyLFxuICAgIGNsZWFudXAoKSB7XG4gICAgICB1bmRvRHVyaW5nKCk7XG4gICAgICB1bmRvRW5kKCk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIHBlcmZvcm1UcmFuc2l0aW9uKGVsLCBzdGFnZXMpIHtcbiAgbGV0IGludGVycnVwdGVkLCByZWFjaGVkQmVmb3JlLCByZWFjaGVkRW5kO1xuICBsZXQgZmluaXNoID0gb25jZSgoKSA9PiB7XG4gICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgIGludGVycnVwdGVkID0gdHJ1ZTtcbiAgICAgIGlmICghcmVhY2hlZEJlZm9yZSlcbiAgICAgICAgc3RhZ2VzLmJlZm9yZSgpO1xuICAgICAgaWYgKCFyZWFjaGVkRW5kKSB7XG4gICAgICAgIHN0YWdlcy5lbmQoKTtcbiAgICAgICAgcmVsZWFzZU5leHRUaWNrcygpO1xuICAgICAgfVxuICAgICAgc3RhZ2VzLmFmdGVyKCk7XG4gICAgICBpZiAoZWwuaXNDb25uZWN0ZWQpXG4gICAgICAgIHN0YWdlcy5jbGVhbnVwKCk7XG4gICAgICBkZWxldGUgZWwuX3hfdHJhbnNpdGlvbmluZztcbiAgICB9KTtcbiAgfSk7XG4gIGVsLl94X3RyYW5zaXRpb25pbmcgPSB7XG4gICAgYmVmb3JlQ2FuY2VsczogW10sXG4gICAgYmVmb3JlQ2FuY2VsKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmJlZm9yZUNhbmNlbHMucHVzaChjYWxsYmFjayk7XG4gICAgfSxcbiAgICBjYW5jZWw6IG9uY2UoZnVuY3Rpb24oKSB7XG4gICAgICB3aGlsZSAodGhpcy5iZWZvcmVDYW5jZWxzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmJlZm9yZUNhbmNlbHMuc2hpZnQoKSgpO1xuICAgICAgfVxuICAgICAgO1xuICAgICAgZmluaXNoKCk7XG4gICAgfSksXG4gICAgZmluaXNoXG4gIH07XG4gIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgc3RhZ2VzLnN0YXJ0KCk7XG4gICAgc3RhZ2VzLmR1cmluZygpO1xuICB9KTtcbiAgaG9sZE5leHRUaWNrcygpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIGlmIChpbnRlcnJ1cHRlZClcbiAgICAgIHJldHVybjtcbiAgICBsZXQgZHVyYXRpb24gPSBOdW1iZXIoZ2V0Q29tcHV0ZWRTdHlsZShlbCkudHJhbnNpdGlvbkR1cmF0aW9uLnJlcGxhY2UoLywuKi8sIFwiXCIpLnJlcGxhY2UoXCJzXCIsIFwiXCIpKSAqIDFlMztcbiAgICBsZXQgZGVsYXkgPSBOdW1iZXIoZ2V0Q29tcHV0ZWRTdHlsZShlbCkudHJhbnNpdGlvbkRlbGF5LnJlcGxhY2UoLywuKi8sIFwiXCIpLnJlcGxhY2UoXCJzXCIsIFwiXCIpKSAqIDFlMztcbiAgICBpZiAoZHVyYXRpb24gPT09IDApXG4gICAgICBkdXJhdGlvbiA9IE51bWJlcihnZXRDb21wdXRlZFN0eWxlKGVsKS5hbmltYXRpb25EdXJhdGlvbi5yZXBsYWNlKFwic1wiLCBcIlwiKSkgKiAxZTM7XG4gICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgIHN0YWdlcy5iZWZvcmUoKTtcbiAgICB9KTtcbiAgICByZWFjaGVkQmVmb3JlID0gdHJ1ZTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgaWYgKGludGVycnVwdGVkKVxuICAgICAgICByZXR1cm47XG4gICAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgICBzdGFnZXMuZW5kKCk7XG4gICAgICB9KTtcbiAgICAgIHJlbGVhc2VOZXh0VGlja3MoKTtcbiAgICAgIHNldFRpbWVvdXQoZWwuX3hfdHJhbnNpdGlvbmluZy5maW5pc2gsIGR1cmF0aW9uICsgZGVsYXkpO1xuICAgICAgcmVhY2hlZEVuZCA9IHRydWU7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gbW9kaWZpZXJWYWx1ZShtb2RpZmllcnMsIGtleSwgZmFsbGJhY2spIHtcbiAgaWYgKG1vZGlmaWVycy5pbmRleE9mKGtleSkgPT09IC0xKVxuICAgIHJldHVybiBmYWxsYmFjaztcbiAgY29uc3QgcmF3VmFsdWUgPSBtb2RpZmllcnNbbW9kaWZpZXJzLmluZGV4T2Yoa2V5KSArIDFdO1xuICBpZiAoIXJhd1ZhbHVlKVxuICAgIHJldHVybiBmYWxsYmFjaztcbiAgaWYgKGtleSA9PT0gXCJzY2FsZVwiKSB7XG4gICAgaWYgKGlzTmFOKHJhd1ZhbHVlKSlcbiAgICAgIHJldHVybiBmYWxsYmFjaztcbiAgfVxuICBpZiAoa2V5ID09PSBcImR1cmF0aW9uXCIgfHwga2V5ID09PSBcImRlbGF5XCIpIHtcbiAgICBsZXQgbWF0Y2ggPSByYXdWYWx1ZS5tYXRjaCgvKFswLTldKyltcy8pO1xuICAgIGlmIChtYXRjaClcbiAgICAgIHJldHVybiBtYXRjaFsxXTtcbiAgfVxuICBpZiAoa2V5ID09PSBcIm9yaWdpblwiKSB7XG4gICAgaWYgKFtcInRvcFwiLCBcInJpZ2h0XCIsIFwibGVmdFwiLCBcImNlbnRlclwiLCBcImJvdHRvbVwiXS5pbmNsdWRlcyhtb2RpZmllcnNbbW9kaWZpZXJzLmluZGV4T2Yoa2V5KSArIDJdKSkge1xuICAgICAgcmV0dXJuIFtyYXdWYWx1ZSwgbW9kaWZpZXJzW21vZGlmaWVycy5pbmRleE9mKGtleSkgKyAyXV0uam9pbihcIiBcIik7XG4gICAgfVxuICB9XG4gIHJldHVybiByYXdWYWx1ZTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2Nsb25lLmpzXG52YXIgaXNDbG9uaW5nID0gZmFsc2U7XG5mdW5jdGlvbiBza2lwRHVyaW5nQ2xvbmUoY2FsbGJhY2ssIGZhbGxiYWNrID0gKCkgPT4ge1xufSkge1xuICByZXR1cm4gKC4uLmFyZ3MpID0+IGlzQ2xvbmluZyA/IGZhbGxiYWNrKC4uLmFyZ3MpIDogY2FsbGJhY2soLi4uYXJncyk7XG59XG5mdW5jdGlvbiBvbmx5RHVyaW5nQ2xvbmUoY2FsbGJhY2spIHtcbiAgcmV0dXJuICguLi5hcmdzKSA9PiBpc0Nsb25pbmcgJiYgY2FsbGJhY2soLi4uYXJncyk7XG59XG52YXIgaW50ZXJjZXB0b3JzID0gW107XG5mdW5jdGlvbiBpbnRlcmNlcHRDbG9uZShjYWxsYmFjaykge1xuICBpbnRlcmNlcHRvcnMucHVzaChjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBjbG9uZU5vZGUoZnJvbSwgdG8pIHtcbiAgaW50ZXJjZXB0b3JzLmZvckVhY2goKGkpID0+IGkoZnJvbSwgdG8pKTtcbiAgaXNDbG9uaW5nID0gdHJ1ZTtcbiAgZG9udFJlZ2lzdGVyUmVhY3RpdmVTaWRlRWZmZWN0cygoKSA9PiB7XG4gICAgaW5pdFRyZWUodG8sIChlbCwgY2FsbGJhY2spID0+IHtcbiAgICAgIGNhbGxiYWNrKGVsLCAoKSA9PiB7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIGlzQ2xvbmluZyA9IGZhbHNlO1xufVxudmFyIGlzQ2xvbmluZ0xlZ2FjeSA9IGZhbHNlO1xuZnVuY3Rpb24gY2xvbmUob2xkRWwsIG5ld0VsKSB7XG4gIGlmICghbmV3RWwuX3hfZGF0YVN0YWNrKVxuICAgIG5ld0VsLl94X2RhdGFTdGFjayA9IG9sZEVsLl94X2RhdGFTdGFjaztcbiAgaXNDbG9uaW5nID0gdHJ1ZTtcbiAgaXNDbG9uaW5nTGVnYWN5ID0gdHJ1ZTtcbiAgZG9udFJlZ2lzdGVyUmVhY3RpdmVTaWRlRWZmZWN0cygoKSA9PiB7XG4gICAgY2xvbmVUcmVlKG5ld0VsKTtcbiAgfSk7XG4gIGlzQ2xvbmluZyA9IGZhbHNlO1xuICBpc0Nsb25pbmdMZWdhY3kgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIGNsb25lVHJlZShlbCkge1xuICBsZXQgaGFzUnVuVGhyb3VnaEZpcnN0RWwgPSBmYWxzZTtcbiAgbGV0IHNoYWxsb3dXYWxrZXIgPSAoZWwyLCBjYWxsYmFjaykgPT4ge1xuICAgIHdhbGsoZWwyLCAoZWwzLCBza2lwKSA9PiB7XG4gICAgICBpZiAoaGFzUnVuVGhyb3VnaEZpcnN0RWwgJiYgaXNSb290KGVsMykpXG4gICAgICAgIHJldHVybiBza2lwKCk7XG4gICAgICBoYXNSdW5UaHJvdWdoRmlyc3RFbCA9IHRydWU7XG4gICAgICBjYWxsYmFjayhlbDMsIHNraXApO1xuICAgIH0pO1xuICB9O1xuICBpbml0VHJlZShlbCwgc2hhbGxvd1dhbGtlcik7XG59XG5mdW5jdGlvbiBkb250UmVnaXN0ZXJSZWFjdGl2ZVNpZGVFZmZlY3RzKGNhbGxiYWNrKSB7XG4gIGxldCBjYWNoZSA9IGVmZmVjdDtcbiAgb3ZlcnJpZGVFZmZlY3QoKGNhbGxiYWNrMiwgZWwpID0+IHtcbiAgICBsZXQgc3RvcmVkRWZmZWN0ID0gY2FjaGUoY2FsbGJhY2syKTtcbiAgICByZWxlYXNlKHN0b3JlZEVmZmVjdCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICB9O1xuICB9KTtcbiAgY2FsbGJhY2soKTtcbiAgb3ZlcnJpZGVFZmZlY3QoY2FjaGUpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvYmluZC5qc1xuZnVuY3Rpb24gYmluZChlbCwgbmFtZSwgdmFsdWUsIG1vZGlmaWVycyA9IFtdKSB7XG4gIGlmICghZWwuX3hfYmluZGluZ3MpXG4gICAgZWwuX3hfYmluZGluZ3MgPSByZWFjdGl2ZSh7fSk7XG4gIGVsLl94X2JpbmRpbmdzW25hbWVdID0gdmFsdWU7XG4gIG5hbWUgPSBtb2RpZmllcnMuaW5jbHVkZXMoXCJjYW1lbFwiKSA/IGNhbWVsQ2FzZShuYW1lKSA6IG5hbWU7XG4gIHN3aXRjaCAobmFtZSkge1xuICAgIGNhc2UgXCJ2YWx1ZVwiOlxuICAgICAgYmluZElucHV0VmFsdWUoZWwsIHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzdHlsZVwiOlxuICAgICAgYmluZFN0eWxlcyhlbCwgdmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNsYXNzXCI6XG4gICAgICBiaW5kQ2xhc3NlcyhlbCwgdmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInNlbGVjdGVkXCI6XG4gICAgY2FzZSBcImNoZWNrZWRcIjpcbiAgICAgIGJpbmRBdHRyaWJ1dGVBbmRQcm9wZXJ0eShlbCwgbmFtZSwgdmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJpbmRBdHRyaWJ1dGUoZWwsIG5hbWUsIHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5mdW5jdGlvbiBiaW5kSW5wdXRWYWx1ZShlbCwgdmFsdWUpIHtcbiAgaWYgKGVsLnR5cGUgPT09IFwicmFkaW9cIikge1xuICAgIGlmIChlbC5hdHRyaWJ1dGVzLnZhbHVlID09PSB2b2lkIDApIHtcbiAgICAgIGVsLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGlmICh3aW5kb3cuZnJvbU1vZGVsKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICBlbC5jaGVja2VkID0gc2FmZVBhcnNlQm9vbGVhbihlbC52YWx1ZSkgPT09IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwuY2hlY2tlZCA9IGNoZWNrZWRBdHRyTG9vc2VDb21wYXJlKGVsLnZhbHVlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGVsLnR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSkge1xuICAgICAgZWwudmFsdWUgPSB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgIT09IFwiYm9vbGVhblwiICYmICFbbnVsbCwgdm9pZCAwXS5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgIGVsLnZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGVsLmNoZWNrZWQgPSB2YWx1ZS5zb21lKCh2YWwpID0+IGNoZWNrZWRBdHRyTG9vc2VDb21wYXJlKHZhbCwgZWwudmFsdWUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLmNoZWNrZWQgPSAhIXZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChlbC50YWdOYW1lID09PSBcIlNFTEVDVFwiKSB7XG4gICAgdXBkYXRlU2VsZWN0KGVsLCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGVsLnZhbHVlID09PSB2YWx1ZSlcbiAgICAgIHJldHVybjtcbiAgICBlbC52YWx1ZSA9IHZhbHVlID09PSB2b2lkIDAgPyBcIlwiIDogdmFsdWU7XG4gIH1cbn1cbmZ1bmN0aW9uIGJpbmRDbGFzc2VzKGVsLCB2YWx1ZSkge1xuICBpZiAoZWwuX3hfdW5kb0FkZGVkQ2xhc3NlcylcbiAgICBlbC5feF91bmRvQWRkZWRDbGFzc2VzKCk7XG4gIGVsLl94X3VuZG9BZGRlZENsYXNzZXMgPSBzZXRDbGFzc2VzKGVsLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBiaW5kU3R5bGVzKGVsLCB2YWx1ZSkge1xuICBpZiAoZWwuX3hfdW5kb0FkZGVkU3R5bGVzKVxuICAgIGVsLl94X3VuZG9BZGRlZFN0eWxlcygpO1xuICBlbC5feF91bmRvQWRkZWRTdHlsZXMgPSBzZXRTdHlsZXMoZWwsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGJpbmRBdHRyaWJ1dGVBbmRQcm9wZXJ0eShlbCwgbmFtZSwgdmFsdWUpIHtcbiAgYmluZEF0dHJpYnV0ZShlbCwgbmFtZSwgdmFsdWUpO1xuICBzZXRQcm9wZXJ0eUlmQ2hhbmdlZChlbCwgbmFtZSwgdmFsdWUpO1xufVxuZnVuY3Rpb24gYmluZEF0dHJpYnV0ZShlbCwgbmFtZSwgdmFsdWUpIHtcbiAgaWYgKFtudWxsLCB2b2lkIDAsIGZhbHNlXS5pbmNsdWRlcyh2YWx1ZSkgJiYgYXR0cmlidXRlU2hvdWxkbnRCZVByZXNlcnZlZElmRmFsc3kobmFtZSkpIHtcbiAgICBlbC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGlzQm9vbGVhbkF0dHIobmFtZSkpXG4gICAgICB2YWx1ZSA9IG5hbWU7XG4gICAgc2V0SWZDaGFuZ2VkKGVsLCBuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHNldElmQ2hhbmdlZChlbCwgYXR0ck5hbWUsIHZhbHVlKSB7XG4gIGlmIChlbC5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpICE9IHZhbHVlKSB7XG4gICAgZWwuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCB2YWx1ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHNldFByb3BlcnR5SWZDaGFuZ2VkKGVsLCBwcm9wTmFtZSwgdmFsdWUpIHtcbiAgaWYgKGVsW3Byb3BOYW1lXSAhPT0gdmFsdWUpIHtcbiAgICBlbFtwcm9wTmFtZV0gPSB2YWx1ZTtcbiAgfVxufVxuZnVuY3Rpb24gdXBkYXRlU2VsZWN0KGVsLCB2YWx1ZSkge1xuICBjb25zdCBhcnJheVdyYXBwZWRWYWx1ZSA9IFtdLmNvbmNhdCh2YWx1ZSkubWFwKCh2YWx1ZTIpID0+IHtcbiAgICByZXR1cm4gdmFsdWUyICsgXCJcIjtcbiAgfSk7XG4gIEFycmF5LmZyb20oZWwub3B0aW9ucykuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgb3B0aW9uLnNlbGVjdGVkID0gYXJyYXlXcmFwcGVkVmFsdWUuaW5jbHVkZXMob3B0aW9uLnZhbHVlKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBjYW1lbENhc2Uoc3ViamVjdCkge1xuICByZXR1cm4gc3ViamVjdC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLy0oXFx3KS9nLCAobWF0Y2gsIGNoYXIpID0+IGNoYXIudG9VcHBlckNhc2UoKSk7XG59XG5mdW5jdGlvbiBjaGVja2VkQXR0ckxvb3NlQ29tcGFyZSh2YWx1ZUEsIHZhbHVlQikge1xuICByZXR1cm4gdmFsdWVBID09IHZhbHVlQjtcbn1cbmZ1bmN0aW9uIHNhZmVQYXJzZUJvb2xlYW4ocmF3VmFsdWUpIHtcbiAgaWYgKFsxLCBcIjFcIiwgXCJ0cnVlXCIsIFwib25cIiwgXCJ5ZXNcIiwgdHJ1ZV0uaW5jbHVkZXMocmF3VmFsdWUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKFswLCBcIjBcIiwgXCJmYWxzZVwiLCBcIm9mZlwiLCBcIm5vXCIsIGZhbHNlXS5pbmNsdWRlcyhyYXdWYWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHJhd1ZhbHVlID8gQm9vbGVhbihyYXdWYWx1ZSkgOiBudWxsO1xufVxuZnVuY3Rpb24gaXNCb29sZWFuQXR0cihhdHRyTmFtZSkge1xuICBjb25zdCBib29sZWFuQXR0cmlidXRlcyA9IFtcbiAgICBcImRpc2FibGVkXCIsXG4gICAgXCJjaGVja2VkXCIsXG4gICAgXCJyZXF1aXJlZFwiLFxuICAgIFwicmVhZG9ubHlcIixcbiAgICBcImhpZGRlblwiLFxuICAgIFwib3BlblwiLFxuICAgIFwic2VsZWN0ZWRcIixcbiAgICBcImF1dG9mb2N1c1wiLFxuICAgIFwiaXRlbXNjb3BlXCIsXG4gICAgXCJtdWx0aXBsZVwiLFxuICAgIFwibm92YWxpZGF0ZVwiLFxuICAgIFwiYWxsb3dmdWxsc2NyZWVuXCIsXG4gICAgXCJhbGxvd3BheW1lbnRyZXF1ZXN0XCIsXG4gICAgXCJmb3Jtbm92YWxpZGF0ZVwiLFxuICAgIFwiYXV0b3BsYXlcIixcbiAgICBcImNvbnRyb2xzXCIsXG4gICAgXCJsb29wXCIsXG4gICAgXCJtdXRlZFwiLFxuICAgIFwicGxheXNpbmxpbmVcIixcbiAgICBcImRlZmF1bHRcIixcbiAgICBcImlzbWFwXCIsXG4gICAgXCJyZXZlcnNlZFwiLFxuICAgIFwiYXN5bmNcIixcbiAgICBcImRlZmVyXCIsXG4gICAgXCJub21vZHVsZVwiXG4gIF07XG4gIHJldHVybiBib29sZWFuQXR0cmlidXRlcy5pbmNsdWRlcyhhdHRyTmFtZSk7XG59XG5mdW5jdGlvbiBhdHRyaWJ1dGVTaG91bGRudEJlUHJlc2VydmVkSWZGYWxzeShuYW1lKSB7XG4gIHJldHVybiAhW1wiYXJpYS1wcmVzc2VkXCIsIFwiYXJpYS1jaGVja2VkXCIsIFwiYXJpYS1leHBhbmRlZFwiLCBcImFyaWEtc2VsZWN0ZWRcIl0uaW5jbHVkZXMobmFtZSk7XG59XG5mdW5jdGlvbiBnZXRCaW5kaW5nKGVsLCBuYW1lLCBmYWxsYmFjaykge1xuICBpZiAoZWwuX3hfYmluZGluZ3MgJiYgZWwuX3hfYmluZGluZ3NbbmFtZV0gIT09IHZvaWQgMClcbiAgICByZXR1cm4gZWwuX3hfYmluZGluZ3NbbmFtZV07XG4gIHJldHVybiBnZXRBdHRyaWJ1dGVCaW5kaW5nKGVsLCBuYW1lLCBmYWxsYmFjayk7XG59XG5mdW5jdGlvbiBleHRyYWN0UHJvcChlbCwgbmFtZSwgZmFsbGJhY2ssIGV4dHJhY3QgPSB0cnVlKSB7XG4gIGlmIChlbC5feF9iaW5kaW5ncyAmJiBlbC5feF9iaW5kaW5nc1tuYW1lXSAhPT0gdm9pZCAwKVxuICAgIHJldHVybiBlbC5feF9iaW5kaW5nc1tuYW1lXTtcbiAgaWYgKGVsLl94X2lubGluZUJpbmRpbmdzICYmIGVsLl94X2lubGluZUJpbmRpbmdzW25hbWVdICE9PSB2b2lkIDApIHtcbiAgICBsZXQgYmluZGluZyA9IGVsLl94X2lubGluZUJpbmRpbmdzW25hbWVdO1xuICAgIGJpbmRpbmcuZXh0cmFjdCA9IGV4dHJhY3Q7XG4gICAgcmV0dXJuIGRvbnRBdXRvRXZhbHVhdGVGdW5jdGlvbnMoKCkgPT4ge1xuICAgICAgcmV0dXJuIGV2YWx1YXRlKGVsLCBiaW5kaW5nLmV4cHJlc3Npb24pO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBnZXRBdHRyaWJ1dGVCaW5kaW5nKGVsLCBuYW1lLCBmYWxsYmFjayk7XG59XG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGVCaW5kaW5nKGVsLCBuYW1lLCBmYWxsYmFjaykge1xuICBsZXQgYXR0ciA9IGVsLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgaWYgKGF0dHIgPT09IG51bGwpXG4gICAgcmV0dXJuIHR5cGVvZiBmYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiID8gZmFsbGJhY2soKSA6IGZhbGxiYWNrO1xuICBpZiAoYXR0ciA9PT0gXCJcIilcbiAgICByZXR1cm4gdHJ1ZTtcbiAgaWYgKGlzQm9vbGVhbkF0dHIobmFtZSkpIHtcbiAgICByZXR1cm4gISFbbmFtZSwgXCJ0cnVlXCJdLmluY2x1ZGVzKGF0dHIpO1xuICB9XG4gIHJldHVybiBhdHRyO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvZGVib3VuY2UuanNcbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQpIHtcbiAgdmFyIHRpbWVvdXQ7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICB9O1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvdGhyb3R0bGUuanNcbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIGxpbWl0KSB7XG4gIGxldCBpblRocm90dGxlO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgIGlmICghaW5UaHJvdHRsZSkge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGluVGhyb3R0bGUgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBpblRocm90dGxlID0gZmFsc2UsIGxpbWl0KTtcbiAgICB9XG4gIH07XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9lbnRhbmdsZS5qc1xuZnVuY3Rpb24gZW50YW5nbGUoeyBnZXQ6IG91dGVyR2V0LCBzZXQ6IG91dGVyU2V0IH0sIHsgZ2V0OiBpbm5lckdldCwgc2V0OiBpbm5lclNldCB9KSB7XG4gIGxldCBmaXJzdFJ1biA9IHRydWU7XG4gIGxldCBvdXRlckhhc2g7XG4gIGxldCByZWZlcmVuY2UgPSBlZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG91dGVyID0gb3V0ZXJHZXQoKTtcbiAgICBjb25zdCBpbm5lciA9IGlubmVyR2V0KCk7XG4gICAgaWYgKGZpcnN0UnVuKSB7XG4gICAgICBpbm5lclNldChjbG9uZUlmT2JqZWN0KG91dGVyKSk7XG4gICAgICBmaXJzdFJ1biA9IGZhbHNlO1xuICAgICAgb3V0ZXJIYXNoID0gSlNPTi5zdHJpbmdpZnkob3V0ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvdXRlckhhc2hMYXRlc3QgPSBKU09OLnN0cmluZ2lmeShvdXRlcik7XG4gICAgICBpZiAob3V0ZXJIYXNoTGF0ZXN0ICE9PSBvdXRlckhhc2gpIHtcbiAgICAgICAgaW5uZXJTZXQoY2xvbmVJZk9iamVjdChvdXRlcikpO1xuICAgICAgICBvdXRlckhhc2ggPSBvdXRlckhhc2hMYXRlc3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXRlclNldChjbG9uZUlmT2JqZWN0KGlubmVyKSk7XG4gICAgICAgIG91dGVySGFzaCA9IEpTT04uc3RyaW5naWZ5KGlubmVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgSlNPTi5zdHJpbmdpZnkoaW5uZXJHZXQoKSk7XG4gICAgSlNPTi5zdHJpbmdpZnkob3V0ZXJHZXQoKSk7XG4gIH0pO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHJlbGVhc2UocmVmZXJlbmNlKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGNsb25lSWZPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiA/IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsdWUpKSA6IHZhbHVlO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvcGx1Z2luLmpzXG5mdW5jdGlvbiBwbHVnaW4oY2FsbGJhY2spIHtcbiAgbGV0IGNhbGxiYWNrcyA9IEFycmF5LmlzQXJyYXkoY2FsbGJhY2spID8gY2FsbGJhY2sgOiBbY2FsbGJhY2tdO1xuICBjYWxsYmFja3MuZm9yRWFjaCgoaSkgPT4gaShhbHBpbmVfZGVmYXVsdCkpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvc3RvcmUuanNcbnZhciBzdG9yZXMgPSB7fTtcbnZhciBpc1JlYWN0aXZlID0gZmFsc2U7XG5mdW5jdGlvbiBzdG9yZShuYW1lLCB2YWx1ZSkge1xuICBpZiAoIWlzUmVhY3RpdmUpIHtcbiAgICBzdG9yZXMgPSByZWFjdGl2ZShzdG9yZXMpO1xuICAgIGlzUmVhY3RpdmUgPSB0cnVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuIHN0b3Jlc1tuYW1lXTtcbiAgfVxuICBzdG9yZXNbbmFtZV0gPSB2YWx1ZTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcImluaXRcIikgJiYgdHlwZW9mIHZhbHVlLmluaXQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHN0b3Jlc1tuYW1lXS5pbml0KCk7XG4gIH1cbiAgaW5pdEludGVyY2VwdG9yczIoc3RvcmVzW25hbWVdKTtcbn1cbmZ1bmN0aW9uIGdldFN0b3JlcygpIHtcbiAgcmV0dXJuIHN0b3Jlcztcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2JpbmRzLmpzXG52YXIgYmluZHMgPSB7fTtcbmZ1bmN0aW9uIGJpbmQyKG5hbWUsIGJpbmRpbmdzKSB7XG4gIGxldCBnZXRCaW5kaW5ncyA9IHR5cGVvZiBiaW5kaW5ncyAhPT0gXCJmdW5jdGlvblwiID8gKCkgPT4gYmluZGluZ3MgOiBiaW5kaW5ncztcbiAgaWYgKG5hbWUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgcmV0dXJuIGFwcGx5QmluZGluZ3NPYmplY3QobmFtZSwgZ2V0QmluZGluZ3MoKSk7XG4gIH0gZWxzZSB7XG4gICAgYmluZHNbbmFtZV0gPSBnZXRCaW5kaW5ncztcbiAgfVxuICByZXR1cm4gKCkgPT4ge1xuICB9O1xufVxuZnVuY3Rpb24gaW5qZWN0QmluZGluZ1Byb3ZpZGVycyhvYmopIHtcbiAgT2JqZWN0LmVudHJpZXMoYmluZHMpLmZvckVhY2goKFtuYW1lLCBjYWxsYmFja10pID0+IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBuYW1lLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjayguLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBhcHBseUJpbmRpbmdzT2JqZWN0KGVsLCBvYmosIG9yaWdpbmFsKSB7XG4gIGxldCBjbGVhbnVwUnVubmVycyA9IFtdO1xuICB3aGlsZSAoY2xlYW51cFJ1bm5lcnMubGVuZ3RoKVxuICAgIGNsZWFudXBSdW5uZXJzLnBvcCgpKCk7XG4gIGxldCBhdHRyaWJ1dGVzID0gT2JqZWN0LmVudHJpZXMob2JqKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+ICh7IG5hbWUsIHZhbHVlIH0pKTtcbiAgbGV0IHN0YXRpY0F0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzT25seShhdHRyaWJ1dGVzKTtcbiAgYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXMubWFwKChhdHRyaWJ1dGUpID0+IHtcbiAgICBpZiAoc3RhdGljQXR0cmlidXRlcy5maW5kKChhdHRyKSA9PiBhdHRyLm5hbWUgPT09IGF0dHJpYnV0ZS5uYW1lKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogYHgtYmluZDoke2F0dHJpYnV0ZS5uYW1lfWAsXG4gICAgICAgIHZhbHVlOiBgXCIke2F0dHJpYnV0ZS52YWx1ZX1cImBcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBhdHRyaWJ1dGU7XG4gIH0pO1xuICBkaXJlY3RpdmVzKGVsLCBhdHRyaWJ1dGVzLCBvcmlnaW5hbCkubWFwKChoYW5kbGUpID0+IHtcbiAgICBjbGVhbnVwUnVubmVycy5wdXNoKGhhbmRsZS5ydW5DbGVhbnVwcyk7XG4gICAgaGFuZGxlKCk7XG4gIH0pO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHdoaWxlIChjbGVhbnVwUnVubmVycy5sZW5ndGgpXG4gICAgICBjbGVhbnVwUnVubmVycy5wb3AoKSgpO1xuICB9O1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGF0YXMuanNcbnZhciBkYXRhcyA9IHt9O1xuZnVuY3Rpb24gZGF0YShuYW1lLCBjYWxsYmFjaykge1xuICBkYXRhc1tuYW1lXSA9IGNhbGxiYWNrO1xufVxuZnVuY3Rpb24gaW5qZWN0RGF0YVByb3ZpZGVycyhvYmosIGNvbnRleHQpIHtcbiAgT2JqZWN0LmVudHJpZXMoZGF0YXMpLmZvckVhY2goKFtuYW1lLCBjYWxsYmFja10pID0+IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBuYW1lLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjay5iaW5kKGNvbnRleHQpKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gb2JqO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvYWxwaW5lLmpzXG52YXIgQWxwaW5lID0ge1xuICBnZXQgcmVhY3RpdmUoKSB7XG4gICAgcmV0dXJuIHJlYWN0aXZlO1xuICB9LFxuICBnZXQgcmVsZWFzZSgpIHtcbiAgICByZXR1cm4gcmVsZWFzZTtcbiAgfSxcbiAgZ2V0IGVmZmVjdCgpIHtcbiAgICByZXR1cm4gZWZmZWN0O1xuICB9LFxuICBnZXQgcmF3KCkge1xuICAgIHJldHVybiByYXc7XG4gIH0sXG4gIHZlcnNpb246IFwiMy4xMy4zXCIsXG4gIGZsdXNoQW5kU3RvcERlZmVycmluZ011dGF0aW9ucyxcbiAgZG9udEF1dG9FdmFsdWF0ZUZ1bmN0aW9ucyxcbiAgZGlzYWJsZUVmZmVjdFNjaGVkdWxpbmcsXG4gIHN0YXJ0T2JzZXJ2aW5nTXV0YXRpb25zLFxuICBzdG9wT2JzZXJ2aW5nTXV0YXRpb25zLFxuICBzZXRSZWFjdGl2aXR5RW5naW5lLFxuICBvbkF0dHJpYnV0ZVJlbW92ZWQsXG4gIG9uQXR0cmlidXRlc0FkZGVkLFxuICBjbG9zZXN0RGF0YVN0YWNrLFxuICBza2lwRHVyaW5nQ2xvbmUsXG4gIG9ubHlEdXJpbmdDbG9uZSxcbiAgYWRkUm9vdFNlbGVjdG9yLFxuICBhZGRJbml0U2VsZWN0b3IsXG4gIGludGVyY2VwdENsb25lLFxuICBhZGRTY29wZVRvTm9kZSxcbiAgZGVmZXJNdXRhdGlvbnMsXG4gIG1hcEF0dHJpYnV0ZXMsXG4gIGV2YWx1YXRlTGF0ZXIsXG4gIGludGVyY2VwdEluaXQsXG4gIHNldEV2YWx1YXRvcixcbiAgbWVyZ2VQcm94aWVzLFxuICBleHRyYWN0UHJvcCxcbiAgZmluZENsb3Nlc3QsXG4gIG9uRWxSZW1vdmVkLFxuICBjbG9zZXN0Um9vdCxcbiAgZGVzdHJveVRyZWUsXG4gIGludGVyY2VwdG9yLFxuICAvLyBJTlRFUk5BTDogbm90IHB1YmxpYyBBUEkgYW5kIGlzIHN1YmplY3QgdG8gY2hhbmdlIHdpdGhvdXQgbWFqb3IgcmVsZWFzZS5cbiAgdHJhbnNpdGlvbixcbiAgLy8gSU5URVJOQUxcbiAgc2V0U3R5bGVzLFxuICAvLyBJTlRFUk5BTFxuICBtdXRhdGVEb20sXG4gIGRpcmVjdGl2ZSxcbiAgZW50YW5nbGUsXG4gIHRocm90dGxlLFxuICBkZWJvdW5jZSxcbiAgZXZhbHVhdGUsXG4gIGluaXRUcmVlLFxuICBuZXh0VGljayxcbiAgcHJlZml4ZWQ6IHByZWZpeCxcbiAgcHJlZml4OiBzZXRQcmVmaXgsXG4gIHBsdWdpbixcbiAgbWFnaWMsXG4gIHN0b3JlLFxuICBzdGFydCxcbiAgY2xvbmUsXG4gIC8vIElOVEVSTkFMXG4gIGNsb25lTm9kZSxcbiAgLy8gSU5URVJOQUxcbiAgYm91bmQ6IGdldEJpbmRpbmcsXG4gICRkYXRhOiBzY29wZSxcbiAgd2FsayxcbiAgZGF0YSxcbiAgYmluZDogYmluZDJcbn07XG52YXIgYWxwaW5lX2RlZmF1bHQgPSBBbHBpbmU7XG5cbi8vIG5vZGVfbW9kdWxlcy9AdnVlL3NoYXJlZC9kaXN0L3NoYXJlZC5lc20tYnVuZGxlci5qc1xuZnVuY3Rpb24gbWFrZU1hcChzdHIsIGV4cGVjdHNMb3dlckNhc2UpIHtcbiAgY29uc3QgbWFwID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGNvbnN0IGxpc3QgPSBzdHIuc3BsaXQoXCIsXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBtYXBbbGlzdFtpXV0gPSB0cnVlO1xuICB9XG4gIHJldHVybiBleHBlY3RzTG93ZXJDYXNlID8gKHZhbCkgPT4gISFtYXBbdmFsLnRvTG93ZXJDYXNlKCldIDogKHZhbCkgPT4gISFtYXBbdmFsXTtcbn1cbnZhciBzcGVjaWFsQm9vbGVhbkF0dHJzID0gYGl0ZW1zY29wZSxhbGxvd2Z1bGxzY3JlZW4sZm9ybW5vdmFsaWRhdGUsaXNtYXAsbm9tb2R1bGUsbm92YWxpZGF0ZSxyZWFkb25seWA7XG52YXIgaXNCb29sZWFuQXR0cjIgPSAvKiBAX19QVVJFX18gKi8gbWFrZU1hcChzcGVjaWFsQm9vbGVhbkF0dHJzICsgYCxhc3luYyxhdXRvZm9jdXMsYXV0b3BsYXksY29udHJvbHMsZGVmYXVsdCxkZWZlcixkaXNhYmxlZCxoaWRkZW4sbG9vcCxvcGVuLHJlcXVpcmVkLHJldmVyc2VkLHNjb3BlZCxzZWFtbGVzcyxjaGVja2VkLG11dGVkLG11bHRpcGxlLHNlbGVjdGVkYCk7XG52YXIgRU1QVFlfT0JKID0gdHJ1ZSA/IE9iamVjdC5mcmVlemUoe30pIDoge307XG52YXIgRU1QVFlfQVJSID0gdHJ1ZSA/IE9iamVjdC5mcmVlemUoW10pIDogW107XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIGhhc093biA9ICh2YWwsIGtleSkgPT4gaGFzT3duUHJvcGVydHkuY2FsbCh2YWwsIGtleSk7XG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG52YXIgaXNNYXAgPSAodmFsKSA9PiB0b1R5cGVTdHJpbmcodmFsKSA9PT0gXCJbb2JqZWN0IE1hcF1cIjtcbnZhciBpc1N0cmluZyA9ICh2YWwpID0+IHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCI7XG52YXIgaXNTeW1ib2wgPSAodmFsKSA9PiB0eXBlb2YgdmFsID09PSBcInN5bWJvbFwiO1xudmFyIGlzT2JqZWN0ID0gKHZhbCkgPT4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCI7XG52YXIgb2JqZWN0VG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIHRvVHlwZVN0cmluZyA9ICh2YWx1ZSkgPT4gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG52YXIgdG9SYXdUeXBlID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0b1R5cGVTdHJpbmcodmFsdWUpLnNsaWNlKDgsIC0xKTtcbn07XG52YXIgaXNJbnRlZ2VyS2V5ID0gKGtleSkgPT4gaXNTdHJpbmcoa2V5KSAmJiBrZXkgIT09IFwiTmFOXCIgJiYga2V5WzBdICE9PSBcIi1cIiAmJiBcIlwiICsgcGFyc2VJbnQoa2V5LCAxMCkgPT09IGtleTtcbnZhciBjYWNoZVN0cmluZ0Z1bmN0aW9uID0gKGZuKSA9PiB7XG4gIGNvbnN0IGNhY2hlID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHJldHVybiAoc3RyKSA9PiB7XG4gICAgY29uc3QgaGl0ID0gY2FjaGVbc3RyXTtcbiAgICByZXR1cm4gaGl0IHx8IChjYWNoZVtzdHJdID0gZm4oc3RyKSk7XG4gIH07XG59O1xudmFyIGNhbWVsaXplUkUgPSAvLShcXHcpL2c7XG52YXIgY2FtZWxpemUgPSBjYWNoZVN0cmluZ0Z1bmN0aW9uKChzdHIpID0+IHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGNhbWVsaXplUkUsIChfLCBjKSA9PiBjID8gYy50b1VwcGVyQ2FzZSgpIDogXCJcIik7XG59KTtcbnZhciBoeXBoZW5hdGVSRSA9IC9cXEIoW0EtWl0pL2c7XG52YXIgaHlwaGVuYXRlID0gY2FjaGVTdHJpbmdGdW5jdGlvbigoc3RyKSA9PiBzdHIucmVwbGFjZShoeXBoZW5hdGVSRSwgXCItJDFcIikudG9Mb3dlckNhc2UoKSk7XG52YXIgY2FwaXRhbGl6ZSA9IGNhY2hlU3RyaW5nRnVuY3Rpb24oKHN0cikgPT4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpKTtcbnZhciB0b0hhbmRsZXJLZXkgPSBjYWNoZVN0cmluZ0Z1bmN0aW9uKChzdHIpID0+IHN0ciA/IGBvbiR7Y2FwaXRhbGl6ZShzdHIpfWAgOiBgYCk7XG52YXIgaGFzQ2hhbmdlZCA9ICh2YWx1ZSwgb2xkVmFsdWUpID0+IHZhbHVlICE9PSBvbGRWYWx1ZSAmJiAodmFsdWUgPT09IHZhbHVlIHx8IG9sZFZhbHVlID09PSBvbGRWYWx1ZSk7XG5cbi8vIG5vZGVfbW9kdWxlcy9AdnVlL3JlYWN0aXZpdHkvZGlzdC9yZWFjdGl2aXR5LmVzbS1idW5kbGVyLmpzXG52YXIgdGFyZ2V0TWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgZWZmZWN0U3RhY2sgPSBbXTtcbnZhciBhY3RpdmVFZmZlY3Q7XG52YXIgSVRFUkFURV9LRVkgPSBTeW1ib2wodHJ1ZSA/IFwiaXRlcmF0ZVwiIDogXCJcIik7XG52YXIgTUFQX0tFWV9JVEVSQVRFX0tFWSA9IFN5bWJvbCh0cnVlID8gXCJNYXAga2V5IGl0ZXJhdGVcIiA6IFwiXCIpO1xuZnVuY3Rpb24gaXNFZmZlY3QoZm4pIHtcbiAgcmV0dXJuIGZuICYmIGZuLl9pc0VmZmVjdCA9PT0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGVmZmVjdDIoZm4sIG9wdGlvbnMgPSBFTVBUWV9PQkopIHtcbiAgaWYgKGlzRWZmZWN0KGZuKSkge1xuICAgIGZuID0gZm4ucmF3O1xuICB9XG4gIGNvbnN0IGVmZmVjdDMgPSBjcmVhdGVSZWFjdGl2ZUVmZmVjdChmbiwgb3B0aW9ucyk7XG4gIGlmICghb3B0aW9ucy5sYXp5KSB7XG4gICAgZWZmZWN0MygpO1xuICB9XG4gIHJldHVybiBlZmZlY3QzO1xufVxuZnVuY3Rpb24gc3RvcChlZmZlY3QzKSB7XG4gIGlmIChlZmZlY3QzLmFjdGl2ZSkge1xuICAgIGNsZWFudXAoZWZmZWN0Myk7XG4gICAgaWYgKGVmZmVjdDMub3B0aW9ucy5vblN0b3ApIHtcbiAgICAgIGVmZmVjdDMub3B0aW9ucy5vblN0b3AoKTtcbiAgICB9XG4gICAgZWZmZWN0My5hY3RpdmUgPSBmYWxzZTtcbiAgfVxufVxudmFyIHVpZCA9IDA7XG5mdW5jdGlvbiBjcmVhdGVSZWFjdGl2ZUVmZmVjdChmbiwgb3B0aW9ucykge1xuICBjb25zdCBlZmZlY3QzID0gZnVuY3Rpb24gcmVhY3RpdmVFZmZlY3QoKSB7XG4gICAgaWYgKCFlZmZlY3QzLmFjdGl2ZSkge1xuICAgICAgcmV0dXJuIGZuKCk7XG4gICAgfVxuICAgIGlmICghZWZmZWN0U3RhY2suaW5jbHVkZXMoZWZmZWN0MykpIHtcbiAgICAgIGNsZWFudXAoZWZmZWN0Myk7XG4gICAgICB0cnkge1xuICAgICAgICBlbmFibGVUcmFja2luZygpO1xuICAgICAgICBlZmZlY3RTdGFjay5wdXNoKGVmZmVjdDMpO1xuICAgICAgICBhY3RpdmVFZmZlY3QgPSBlZmZlY3QzO1xuICAgICAgICByZXR1cm4gZm4oKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGVmZmVjdFN0YWNrLnBvcCgpO1xuICAgICAgICByZXNldFRyYWNraW5nKCk7XG4gICAgICAgIGFjdGl2ZUVmZmVjdCA9IGVmZmVjdFN0YWNrW2VmZmVjdFN0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgZWZmZWN0My5pZCA9IHVpZCsrO1xuICBlZmZlY3QzLmFsbG93UmVjdXJzZSA9ICEhb3B0aW9ucy5hbGxvd1JlY3Vyc2U7XG4gIGVmZmVjdDMuX2lzRWZmZWN0ID0gdHJ1ZTtcbiAgZWZmZWN0My5hY3RpdmUgPSB0cnVlO1xuICBlZmZlY3QzLnJhdyA9IGZuO1xuICBlZmZlY3QzLmRlcHMgPSBbXTtcbiAgZWZmZWN0My5vcHRpb25zID0gb3B0aW9ucztcbiAgcmV0dXJuIGVmZmVjdDM7XG59XG5mdW5jdGlvbiBjbGVhbnVwKGVmZmVjdDMpIHtcbiAgY29uc3QgeyBkZXBzIH0gPSBlZmZlY3QzO1xuICBpZiAoZGVwcy5sZW5ndGgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlcHNbaV0uZGVsZXRlKGVmZmVjdDMpO1xuICAgIH1cbiAgICBkZXBzLmxlbmd0aCA9IDA7XG4gIH1cbn1cbnZhciBzaG91bGRUcmFjayA9IHRydWU7XG52YXIgdHJhY2tTdGFjayA9IFtdO1xuZnVuY3Rpb24gcGF1c2VUcmFja2luZygpIHtcbiAgdHJhY2tTdGFjay5wdXNoKHNob3VsZFRyYWNrKTtcbiAgc2hvdWxkVHJhY2sgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIGVuYWJsZVRyYWNraW5nKCkge1xuICB0cmFja1N0YWNrLnB1c2goc2hvdWxkVHJhY2spO1xuICBzaG91bGRUcmFjayA9IHRydWU7XG59XG5mdW5jdGlvbiByZXNldFRyYWNraW5nKCkge1xuICBjb25zdCBsYXN0ID0gdHJhY2tTdGFjay5wb3AoKTtcbiAgc2hvdWxkVHJhY2sgPSBsYXN0ID09PSB2b2lkIDAgPyB0cnVlIDogbGFzdDtcbn1cbmZ1bmN0aW9uIHRyYWNrKHRhcmdldCwgdHlwZSwga2V5KSB7XG4gIGlmICghc2hvdWxkVHJhY2sgfHwgYWN0aXZlRWZmZWN0ID09PSB2b2lkIDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IGRlcHNNYXAgPSB0YXJnZXRNYXAuZ2V0KHRhcmdldCk7XG4gIGlmICghZGVwc01hcCkge1xuICAgIHRhcmdldE1hcC5zZXQodGFyZ2V0LCBkZXBzTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSk7XG4gIH1cbiAgbGV0IGRlcCA9IGRlcHNNYXAuZ2V0KGtleSk7XG4gIGlmICghZGVwKSB7XG4gICAgZGVwc01hcC5zZXQoa2V5LCBkZXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpKTtcbiAgfVxuICBpZiAoIWRlcC5oYXMoYWN0aXZlRWZmZWN0KSkge1xuICAgIGRlcC5hZGQoYWN0aXZlRWZmZWN0KTtcbiAgICBhY3RpdmVFZmZlY3QuZGVwcy5wdXNoKGRlcCk7XG4gICAgaWYgKGFjdGl2ZUVmZmVjdC5vcHRpb25zLm9uVHJhY2spIHtcbiAgICAgIGFjdGl2ZUVmZmVjdC5vcHRpb25zLm9uVHJhY2soe1xuICAgICAgICBlZmZlY3Q6IGFjdGl2ZUVmZmVjdCxcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgICB0eXBlLFxuICAgICAgICBrZXlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gdHJpZ2dlcih0YXJnZXQsIHR5cGUsIGtleSwgbmV3VmFsdWUsIG9sZFZhbHVlLCBvbGRUYXJnZXQpIHtcbiAgY29uc3QgZGVwc01hcCA9IHRhcmdldE1hcC5nZXQodGFyZ2V0KTtcbiAgaWYgKCFkZXBzTWFwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGVmZmVjdHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICBjb25zdCBhZGQyID0gKGVmZmVjdHNUb0FkZCkgPT4ge1xuICAgIGlmIChlZmZlY3RzVG9BZGQpIHtcbiAgICAgIGVmZmVjdHNUb0FkZC5mb3JFYWNoKChlZmZlY3QzKSA9PiB7XG4gICAgICAgIGlmIChlZmZlY3QzICE9PSBhY3RpdmVFZmZlY3QgfHwgZWZmZWN0My5hbGxvd1JlY3Vyc2UpIHtcbiAgICAgICAgICBlZmZlY3RzLmFkZChlZmZlY3QzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBpZiAodHlwZSA9PT0gXCJjbGVhclwiKSB7XG4gICAgZGVwc01hcC5mb3JFYWNoKGFkZDIpO1xuICB9IGVsc2UgaWYgKGtleSA9PT0gXCJsZW5ndGhcIiAmJiBpc0FycmF5KHRhcmdldCkpIHtcbiAgICBkZXBzTWFwLmZvckVhY2goKGRlcCwga2V5MikgPT4ge1xuICAgICAgaWYgKGtleTIgPT09IFwibGVuZ3RoXCIgfHwga2V5MiA+PSBuZXdWYWx1ZSkge1xuICAgICAgICBhZGQyKGRlcCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGtleSAhPT0gdm9pZCAwKSB7XG4gICAgICBhZGQyKGRlcHNNYXAuZ2V0KGtleSkpO1xuICAgIH1cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgXCJhZGRcIjpcbiAgICAgICAgaWYgKCFpc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgICBhZGQyKGRlcHNNYXAuZ2V0KElURVJBVEVfS0VZKSk7XG4gICAgICAgICAgaWYgKGlzTWFwKHRhcmdldCkpIHtcbiAgICAgICAgICAgIGFkZDIoZGVwc01hcC5nZXQoTUFQX0tFWV9JVEVSQVRFX0tFWSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpc0ludGVnZXJLZXkoa2V5KSkge1xuICAgICAgICAgIGFkZDIoZGVwc01hcC5nZXQoXCJsZW5ndGhcIikpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImRlbGV0ZVwiOlxuICAgICAgICBpZiAoIWlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICAgIGFkZDIoZGVwc01hcC5nZXQoSVRFUkFURV9LRVkpKTtcbiAgICAgICAgICBpZiAoaXNNYXAodGFyZ2V0KSkge1xuICAgICAgICAgICAgYWRkMihkZXBzTWFwLmdldChNQVBfS0VZX0lURVJBVEVfS0VZKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInNldFwiOlxuICAgICAgICBpZiAoaXNNYXAodGFyZ2V0KSkge1xuICAgICAgICAgIGFkZDIoZGVwc01hcC5nZXQoSVRFUkFURV9LRVkpKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgY29uc3QgcnVuID0gKGVmZmVjdDMpID0+IHtcbiAgICBpZiAoZWZmZWN0My5vcHRpb25zLm9uVHJpZ2dlcikge1xuICAgICAgZWZmZWN0My5vcHRpb25zLm9uVHJpZ2dlcih7XG4gICAgICAgIGVmZmVjdDogZWZmZWN0MyxcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgICBrZXksXG4gICAgICAgIHR5cGUsXG4gICAgICAgIG5ld1ZhbHVlLFxuICAgICAgICBvbGRWYWx1ZSxcbiAgICAgICAgb2xkVGFyZ2V0XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGVmZmVjdDMub3B0aW9ucy5zY2hlZHVsZXIpIHtcbiAgICAgIGVmZmVjdDMub3B0aW9ucy5zY2hlZHVsZXIoZWZmZWN0Myk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVmZmVjdDMoKTtcbiAgICB9XG4gIH07XG4gIGVmZmVjdHMuZm9yRWFjaChydW4pO1xufVxudmFyIGlzTm9uVHJhY2thYmxlS2V5cyA9IC8qIEBfX1BVUkVfXyAqLyBtYWtlTWFwKGBfX3Byb3RvX18sX192X2lzUmVmLF9faXNWdWVgKTtcbnZhciBidWlsdEluU3ltYm9scyA9IG5ldyBTZXQoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoU3ltYm9sKS5tYXAoKGtleSkgPT4gU3ltYm9sW2tleV0pLmZpbHRlcihpc1N5bWJvbCkpO1xudmFyIGdldDIgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlR2V0dGVyKCk7XG52YXIgcmVhZG9ubHlHZXQgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlR2V0dGVyKHRydWUpO1xudmFyIGFycmF5SW5zdHJ1bWVudGF0aW9ucyA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVBcnJheUluc3RydW1lbnRhdGlvbnMoKTtcbmZ1bmN0aW9uIGNyZWF0ZUFycmF5SW5zdHJ1bWVudGF0aW9ucygpIHtcbiAgY29uc3QgaW5zdHJ1bWVudGF0aW9ucyA9IHt9O1xuICBbXCJpbmNsdWRlc1wiLCBcImluZGV4T2ZcIiwgXCJsYXN0SW5kZXhPZlwiXS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpbnN0cnVtZW50YXRpb25zW2tleV0gPSBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgICBjb25zdCBhcnIgPSB0b1Jhdyh0aGlzKTtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdHJhY2soYXJyLCBcImdldFwiLCBpICsgXCJcIik7XG4gICAgICB9XG4gICAgICBjb25zdCByZXMgPSBhcnJba2V5XSguLi5hcmdzKTtcbiAgICAgIGlmIChyZXMgPT09IC0xIHx8IHJlcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGFycltrZXldKC4uLmFyZ3MubWFwKHRvUmF3KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfVxuICAgIH07XG4gIH0pO1xuICBbXCJwdXNoXCIsIFwicG9wXCIsIFwic2hpZnRcIiwgXCJ1bnNoaWZ0XCIsIFwic3BsaWNlXCJdLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGluc3RydW1lbnRhdGlvbnNba2V5XSA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgIHBhdXNlVHJhY2tpbmcoKTtcbiAgICAgIGNvbnN0IHJlcyA9IHRvUmF3KHRoaXMpW2tleV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICByZXNldFRyYWNraW5nKCk7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH07XG4gIH0pO1xuICByZXR1cm4gaW5zdHJ1bWVudGF0aW9ucztcbn1cbmZ1bmN0aW9uIGNyZWF0ZUdldHRlcihpc1JlYWRvbmx5ID0gZmFsc2UsIHNoYWxsb3cgPSBmYWxzZSkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0Myh0YXJnZXQsIGtleSwgcmVjZWl2ZXIpIHtcbiAgICBpZiAoa2V5ID09PSBcIl9fdl9pc1JlYWN0aXZlXCIpIHtcbiAgICAgIHJldHVybiAhaXNSZWFkb25seTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJfX3ZfaXNSZWFkb25seVwiKSB7XG4gICAgICByZXR1cm4gaXNSZWFkb25seTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJfX3ZfcmF3XCIgJiYgcmVjZWl2ZXIgPT09IChpc1JlYWRvbmx5ID8gc2hhbGxvdyA/IHNoYWxsb3dSZWFkb25seU1hcCA6IHJlYWRvbmx5TWFwIDogc2hhbGxvdyA/IHNoYWxsb3dSZWFjdGl2ZU1hcCA6IHJlYWN0aXZlTWFwKS5nZXQodGFyZ2V0KSkge1xuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0SXNBcnJheSA9IGlzQXJyYXkodGFyZ2V0KTtcbiAgICBpZiAoIWlzUmVhZG9ubHkgJiYgdGFyZ2V0SXNBcnJheSAmJiBoYXNPd24oYXJyYXlJbnN0cnVtZW50YXRpb25zLCBrZXkpKSB7XG4gICAgICByZXR1cm4gUmVmbGVjdC5nZXQoYXJyYXlJbnN0cnVtZW50YXRpb25zLCBrZXksIHJlY2VpdmVyKTtcbiAgICB9XG4gICAgY29uc3QgcmVzID0gUmVmbGVjdC5nZXQodGFyZ2V0LCBrZXksIHJlY2VpdmVyKTtcbiAgICBpZiAoaXNTeW1ib2woa2V5KSA/IGJ1aWx0SW5TeW1ib2xzLmhhcyhrZXkpIDogaXNOb25UcmFja2FibGVLZXlzKGtleSkpIHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIGlmICghaXNSZWFkb25seSkge1xuICAgICAgdHJhY2sodGFyZ2V0LCBcImdldFwiLCBrZXkpO1xuICAgIH1cbiAgICBpZiAoc2hhbGxvdykge1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgaWYgKGlzUmVmKHJlcykpIHtcbiAgICAgIGNvbnN0IHNob3VsZFVud3JhcCA9ICF0YXJnZXRJc0FycmF5IHx8ICFpc0ludGVnZXJLZXkoa2V5KTtcbiAgICAgIHJldHVybiBzaG91bGRVbndyYXAgPyByZXMudmFsdWUgOiByZXM7XG4gICAgfVxuICAgIGlmIChpc09iamVjdChyZXMpKSB7XG4gICAgICByZXR1cm4gaXNSZWFkb25seSA/IHJlYWRvbmx5KHJlcykgOiByZWFjdGl2ZTIocmVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcbn1cbnZhciBzZXQyID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZVNldHRlcigpO1xuZnVuY3Rpb24gY3JlYXRlU2V0dGVyKHNoYWxsb3cgPSBmYWxzZSkge1xuICByZXR1cm4gZnVuY3Rpb24gc2V0Myh0YXJnZXQsIGtleSwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgbGV0IG9sZFZhbHVlID0gdGFyZ2V0W2tleV07XG4gICAgaWYgKCFzaGFsbG93KSB7XG4gICAgICB2YWx1ZSA9IHRvUmF3KHZhbHVlKTtcbiAgICAgIG9sZFZhbHVlID0gdG9SYXcob2xkVmFsdWUpO1xuICAgICAgaWYgKCFpc0FycmF5KHRhcmdldCkgJiYgaXNSZWYob2xkVmFsdWUpICYmICFpc1JlZih2YWx1ZSkpIHtcbiAgICAgICAgb2xkVmFsdWUudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGhhZEtleSA9IGlzQXJyYXkodGFyZ2V0KSAmJiBpc0ludGVnZXJLZXkoa2V5KSA/IE51bWJlcihrZXkpIDwgdGFyZ2V0Lmxlbmd0aCA6IGhhc093bih0YXJnZXQsIGtleSk7XG4gICAgY29uc3QgcmVzdWx0ID0gUmVmbGVjdC5zZXQodGFyZ2V0LCBrZXksIHZhbHVlLCByZWNlaXZlcik7XG4gICAgaWYgKHRhcmdldCA9PT0gdG9SYXcocmVjZWl2ZXIpKSB7XG4gICAgICBpZiAoIWhhZEtleSkge1xuICAgICAgICB0cmlnZ2VyKHRhcmdldCwgXCJhZGRcIiwga2V5LCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGhhc0NoYW5nZWQodmFsdWUsIG9sZFZhbHVlKSkge1xuICAgICAgICB0cmlnZ2VyKHRhcmdldCwgXCJzZXRcIiwga2V5LCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuZnVuY3Rpb24gZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBrZXkpIHtcbiAgY29uc3QgaGFkS2V5ID0gaGFzT3duKHRhcmdldCwga2V5KTtcbiAgY29uc3Qgb2xkVmFsdWUgPSB0YXJnZXRba2V5XTtcbiAgY29uc3QgcmVzdWx0ID0gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0YXJnZXQsIGtleSk7XG4gIGlmIChyZXN1bHQgJiYgaGFkS2V5KSB7XG4gICAgdHJpZ2dlcih0YXJnZXQsIFwiZGVsZXRlXCIsIGtleSwgdm9pZCAwLCBvbGRWYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGhhcyh0YXJnZXQsIGtleSkge1xuICBjb25zdCByZXN1bHQgPSBSZWZsZWN0Lmhhcyh0YXJnZXQsIGtleSk7XG4gIGlmICghaXNTeW1ib2woa2V5KSB8fCAhYnVpbHRJblN5bWJvbHMuaGFzKGtleSkpIHtcbiAgICB0cmFjayh0YXJnZXQsIFwiaGFzXCIsIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG93bktleXModGFyZ2V0KSB7XG4gIHRyYWNrKHRhcmdldCwgXCJpdGVyYXRlXCIsIGlzQXJyYXkodGFyZ2V0KSA/IFwibGVuZ3RoXCIgOiBJVEVSQVRFX0tFWSk7XG4gIHJldHVybiBSZWZsZWN0Lm93bktleXModGFyZ2V0KTtcbn1cbnZhciBtdXRhYmxlSGFuZGxlcnMgPSB7XG4gIGdldDogZ2V0MixcbiAgc2V0OiBzZXQyLFxuICBkZWxldGVQcm9wZXJ0eSxcbiAgaGFzLFxuICBvd25LZXlzXG59O1xudmFyIHJlYWRvbmx5SGFuZGxlcnMgPSB7XG4gIGdldDogcmVhZG9ubHlHZXQsXG4gIHNldCh0YXJnZXQsIGtleSkge1xuICAgIGlmICh0cnVlKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFNldCBvcGVyYXRpb24gb24ga2V5IFwiJHtTdHJpbmcoa2V5KX1cIiBmYWlsZWQ6IHRhcmdldCBpcyByZWFkb25seS5gLCB0YXJnZXQpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBrZXkpIHtcbiAgICBpZiAodHJ1ZSkge1xuICAgICAgY29uc29sZS53YXJuKGBEZWxldGUgb3BlcmF0aW9uIG9uIGtleSBcIiR7U3RyaW5nKGtleSl9XCIgZmFpbGVkOiB0YXJnZXQgaXMgcmVhZG9ubHkuYCwgdGFyZ2V0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG52YXIgdG9SZWFjdGl2ZSA9ICh2YWx1ZSkgPT4gaXNPYmplY3QodmFsdWUpID8gcmVhY3RpdmUyKHZhbHVlKSA6IHZhbHVlO1xudmFyIHRvUmVhZG9ubHkgPSAodmFsdWUpID0+IGlzT2JqZWN0KHZhbHVlKSA/IHJlYWRvbmx5KHZhbHVlKSA6IHZhbHVlO1xudmFyIHRvU2hhbGxvdyA9ICh2YWx1ZSkgPT4gdmFsdWU7XG52YXIgZ2V0UHJvdG8gPSAodikgPT4gUmVmbGVjdC5nZXRQcm90b3R5cGVPZih2KTtcbmZ1bmN0aW9uIGdldCQxKHRhcmdldCwga2V5LCBpc1JlYWRvbmx5ID0gZmFsc2UsIGlzU2hhbGxvdyA9IGZhbHNlKSB7XG4gIHRhcmdldCA9IHRhcmdldFtcbiAgICBcIl9fdl9yYXdcIlxuICAgIC8qIFJBVyAqL1xuICBdO1xuICBjb25zdCByYXdUYXJnZXQgPSB0b1Jhdyh0YXJnZXQpO1xuICBjb25zdCByYXdLZXkgPSB0b1JhdyhrZXkpO1xuICBpZiAoa2V5ICE9PSByYXdLZXkpIHtcbiAgICAhaXNSZWFkb25seSAmJiB0cmFjayhyYXdUYXJnZXQsIFwiZ2V0XCIsIGtleSk7XG4gIH1cbiAgIWlzUmVhZG9ubHkgJiYgdHJhY2socmF3VGFyZ2V0LCBcImdldFwiLCByYXdLZXkpO1xuICBjb25zdCB7IGhhczogaGFzMiB9ID0gZ2V0UHJvdG8ocmF3VGFyZ2V0KTtcbiAgY29uc3Qgd3JhcCA9IGlzU2hhbGxvdyA/IHRvU2hhbGxvdyA6IGlzUmVhZG9ubHkgPyB0b1JlYWRvbmx5IDogdG9SZWFjdGl2ZTtcbiAgaWYgKGhhczIuY2FsbChyYXdUYXJnZXQsIGtleSkpIHtcbiAgICByZXR1cm4gd3JhcCh0YXJnZXQuZ2V0KGtleSkpO1xuICB9IGVsc2UgaWYgKGhhczIuY2FsbChyYXdUYXJnZXQsIHJhd0tleSkpIHtcbiAgICByZXR1cm4gd3JhcCh0YXJnZXQuZ2V0KHJhd0tleSkpO1xuICB9IGVsc2UgaWYgKHRhcmdldCAhPT0gcmF3VGFyZ2V0KSB7XG4gICAgdGFyZ2V0LmdldChrZXkpO1xuICB9XG59XG5mdW5jdGlvbiBoYXMkMShrZXksIGlzUmVhZG9ubHkgPSBmYWxzZSkge1xuICBjb25zdCB0YXJnZXQgPSB0aGlzW1xuICAgIFwiX192X3Jhd1wiXG4gICAgLyogUkFXICovXG4gIF07XG4gIGNvbnN0IHJhd1RhcmdldCA9IHRvUmF3KHRhcmdldCk7XG4gIGNvbnN0IHJhd0tleSA9IHRvUmF3KGtleSk7XG4gIGlmIChrZXkgIT09IHJhd0tleSkge1xuICAgICFpc1JlYWRvbmx5ICYmIHRyYWNrKHJhd1RhcmdldCwgXCJoYXNcIiwga2V5KTtcbiAgfVxuICAhaXNSZWFkb25seSAmJiB0cmFjayhyYXdUYXJnZXQsIFwiaGFzXCIsIHJhd0tleSk7XG4gIHJldHVybiBrZXkgPT09IHJhd0tleSA/IHRhcmdldC5oYXMoa2V5KSA6IHRhcmdldC5oYXMoa2V5KSB8fCB0YXJnZXQuaGFzKHJhd0tleSk7XG59XG5mdW5jdGlvbiBzaXplKHRhcmdldCwgaXNSZWFkb25seSA9IGZhbHNlKSB7XG4gIHRhcmdldCA9IHRhcmdldFtcbiAgICBcIl9fdl9yYXdcIlxuICAgIC8qIFJBVyAqL1xuICBdO1xuICAhaXNSZWFkb25seSAmJiB0cmFjayh0b1Jhdyh0YXJnZXQpLCBcIml0ZXJhdGVcIiwgSVRFUkFURV9LRVkpO1xuICByZXR1cm4gUmVmbGVjdC5nZXQodGFyZ2V0LCBcInNpemVcIiwgdGFyZ2V0KTtcbn1cbmZ1bmN0aW9uIGFkZCh2YWx1ZSkge1xuICB2YWx1ZSA9IHRvUmF3KHZhbHVlKTtcbiAgY29uc3QgdGFyZ2V0ID0gdG9SYXcodGhpcyk7XG4gIGNvbnN0IHByb3RvID0gZ2V0UHJvdG8odGFyZ2V0KTtcbiAgY29uc3QgaGFkS2V5ID0gcHJvdG8uaGFzLmNhbGwodGFyZ2V0LCB2YWx1ZSk7XG4gIGlmICghaGFkS2V5KSB7XG4gICAgdGFyZ2V0LmFkZCh2YWx1ZSk7XG4gICAgdHJpZ2dlcih0YXJnZXQsIFwiYWRkXCIsIHZhbHVlLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5mdW5jdGlvbiBzZXQkMShrZXksIHZhbHVlKSB7XG4gIHZhbHVlID0gdG9SYXcodmFsdWUpO1xuICBjb25zdCB0YXJnZXQgPSB0b1Jhdyh0aGlzKTtcbiAgY29uc3QgeyBoYXM6IGhhczIsIGdldDogZ2V0MyB9ID0gZ2V0UHJvdG8odGFyZ2V0KTtcbiAgbGV0IGhhZEtleSA9IGhhczIuY2FsbCh0YXJnZXQsIGtleSk7XG4gIGlmICghaGFkS2V5KSB7XG4gICAga2V5ID0gdG9SYXcoa2V5KTtcbiAgICBoYWRLZXkgPSBoYXMyLmNhbGwodGFyZ2V0LCBrZXkpO1xuICB9IGVsc2UgaWYgKHRydWUpIHtcbiAgICBjaGVja0lkZW50aXR5S2V5cyh0YXJnZXQsIGhhczIsIGtleSk7XG4gIH1cbiAgY29uc3Qgb2xkVmFsdWUgPSBnZXQzLmNhbGwodGFyZ2V0LCBrZXkpO1xuICB0YXJnZXQuc2V0KGtleSwgdmFsdWUpO1xuICBpZiAoIWhhZEtleSkge1xuICAgIHRyaWdnZXIodGFyZ2V0LCBcImFkZFwiLCBrZXksIHZhbHVlKTtcbiAgfSBlbHNlIGlmIChoYXNDaGFuZ2VkKHZhbHVlLCBvbGRWYWx1ZSkpIHtcbiAgICB0cmlnZ2VyKHRhcmdldCwgXCJzZXRcIiwga2V5LCB2YWx1ZSwgb2xkVmFsdWUpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gZGVsZXRlRW50cnkoa2V5KSB7XG4gIGNvbnN0IHRhcmdldCA9IHRvUmF3KHRoaXMpO1xuICBjb25zdCB7IGhhczogaGFzMiwgZ2V0OiBnZXQzIH0gPSBnZXRQcm90byh0YXJnZXQpO1xuICBsZXQgaGFkS2V5ID0gaGFzMi5jYWxsKHRhcmdldCwga2V5KTtcbiAgaWYgKCFoYWRLZXkpIHtcbiAgICBrZXkgPSB0b1JhdyhrZXkpO1xuICAgIGhhZEtleSA9IGhhczIuY2FsbCh0YXJnZXQsIGtleSk7XG4gIH0gZWxzZSBpZiAodHJ1ZSkge1xuICAgIGNoZWNrSWRlbnRpdHlLZXlzKHRhcmdldCwgaGFzMiwga2V5KTtcbiAgfVxuICBjb25zdCBvbGRWYWx1ZSA9IGdldDMgPyBnZXQzLmNhbGwodGFyZ2V0LCBrZXkpIDogdm9pZCAwO1xuICBjb25zdCByZXN1bHQgPSB0YXJnZXQuZGVsZXRlKGtleSk7XG4gIGlmIChoYWRLZXkpIHtcbiAgICB0cmlnZ2VyKHRhcmdldCwgXCJkZWxldGVcIiwga2V5LCB2b2lkIDAsIG9sZFZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gY2xlYXIoKSB7XG4gIGNvbnN0IHRhcmdldCA9IHRvUmF3KHRoaXMpO1xuICBjb25zdCBoYWRJdGVtcyA9IHRhcmdldC5zaXplICE9PSAwO1xuICBjb25zdCBvbGRUYXJnZXQgPSB0cnVlID8gaXNNYXAodGFyZ2V0KSA/IG5ldyBNYXAodGFyZ2V0KSA6IG5ldyBTZXQodGFyZ2V0KSA6IHZvaWQgMDtcbiAgY29uc3QgcmVzdWx0ID0gdGFyZ2V0LmNsZWFyKCk7XG4gIGlmIChoYWRJdGVtcykge1xuICAgIHRyaWdnZXIodGFyZ2V0LCBcImNsZWFyXCIsIHZvaWQgMCwgdm9pZCAwLCBvbGRUYXJnZXQpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBjcmVhdGVGb3JFYWNoKGlzUmVhZG9ubHksIGlzU2hhbGxvdykge1xuICByZXR1cm4gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIGNvbnN0IG9ic2VydmVkID0gdGhpcztcbiAgICBjb25zdCB0YXJnZXQgPSBvYnNlcnZlZFtcbiAgICAgIFwiX192X3Jhd1wiXG4gICAgICAvKiBSQVcgKi9cbiAgICBdO1xuICAgIGNvbnN0IHJhd1RhcmdldCA9IHRvUmF3KHRhcmdldCk7XG4gICAgY29uc3Qgd3JhcCA9IGlzU2hhbGxvdyA/IHRvU2hhbGxvdyA6IGlzUmVhZG9ubHkgPyB0b1JlYWRvbmx5IDogdG9SZWFjdGl2ZTtcbiAgICAhaXNSZWFkb25seSAmJiB0cmFjayhyYXdUYXJnZXQsIFwiaXRlcmF0ZVwiLCBJVEVSQVRFX0tFWSk7XG4gICAgcmV0dXJuIHRhcmdldC5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICByZXR1cm4gY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB3cmFwKHZhbHVlKSwgd3JhcChrZXkpLCBvYnNlcnZlZCk7XG4gICAgfSk7XG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVJdGVyYWJsZU1ldGhvZChtZXRob2QsIGlzUmVhZG9ubHksIGlzU2hhbGxvdykge1xuICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXNbXG4gICAgICBcIl9fdl9yYXdcIlxuICAgICAgLyogUkFXICovXG4gICAgXTtcbiAgICBjb25zdCByYXdUYXJnZXQgPSB0b1Jhdyh0YXJnZXQpO1xuICAgIGNvbnN0IHRhcmdldElzTWFwID0gaXNNYXAocmF3VGFyZ2V0KTtcbiAgICBjb25zdCBpc1BhaXIgPSBtZXRob2QgPT09IFwiZW50cmllc1wiIHx8IG1ldGhvZCA9PT0gU3ltYm9sLml0ZXJhdG9yICYmIHRhcmdldElzTWFwO1xuICAgIGNvbnN0IGlzS2V5T25seSA9IG1ldGhvZCA9PT0gXCJrZXlzXCIgJiYgdGFyZ2V0SXNNYXA7XG4gICAgY29uc3QgaW5uZXJJdGVyYXRvciA9IHRhcmdldFttZXRob2RdKC4uLmFyZ3MpO1xuICAgIGNvbnN0IHdyYXAgPSBpc1NoYWxsb3cgPyB0b1NoYWxsb3cgOiBpc1JlYWRvbmx5ID8gdG9SZWFkb25seSA6IHRvUmVhY3RpdmU7XG4gICAgIWlzUmVhZG9ubHkgJiYgdHJhY2socmF3VGFyZ2V0LCBcIml0ZXJhdGVcIiwgaXNLZXlPbmx5ID8gTUFQX0tFWV9JVEVSQVRFX0tFWSA6IElURVJBVEVfS0VZKTtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gaXRlcmF0b3IgcHJvdG9jb2xcbiAgICAgIG5leHQoKSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIGRvbmUgfSA9IGlubmVySXRlcmF0b3IubmV4dCgpO1xuICAgICAgICByZXR1cm4gZG9uZSA/IHsgdmFsdWUsIGRvbmUgfSA6IHtcbiAgICAgICAgICB2YWx1ZTogaXNQYWlyID8gW3dyYXAodmFsdWVbMF0pLCB3cmFwKHZhbHVlWzFdKV0gOiB3cmFwKHZhbHVlKSxcbiAgICAgICAgICBkb25lXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgLy8gaXRlcmFibGUgcHJvdG9jb2xcbiAgICAgIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9O1xuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlUmVhZG9ubHlNZXRob2QodHlwZSkge1xuICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgIGlmICh0cnVlKSB7XG4gICAgICBjb25zdCBrZXkgPSBhcmdzWzBdID8gYG9uIGtleSBcIiR7YXJnc1swXX1cIiBgIDogYGA7XG4gICAgICBjb25zb2xlLndhcm4oYCR7Y2FwaXRhbGl6ZSh0eXBlKX0gb3BlcmF0aW9uICR7a2V5fWZhaWxlZDogdGFyZ2V0IGlzIHJlYWRvbmx5LmAsIHRvUmF3KHRoaXMpKTtcbiAgICB9XG4gICAgcmV0dXJuIHR5cGUgPT09IFwiZGVsZXRlXCIgPyBmYWxzZSA6IHRoaXM7XG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVJbnN0cnVtZW50YXRpb25zKCkge1xuICBjb25zdCBtdXRhYmxlSW5zdHJ1bWVudGF0aW9uczIgPSB7XG4gICAgZ2V0KGtleSkge1xuICAgICAgcmV0dXJuIGdldCQxKHRoaXMsIGtleSk7XG4gICAgfSxcbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIHJldHVybiBzaXplKHRoaXMpO1xuICAgIH0sXG4gICAgaGFzOiBoYXMkMSxcbiAgICBhZGQsXG4gICAgc2V0OiBzZXQkMSxcbiAgICBkZWxldGU6IGRlbGV0ZUVudHJ5LFxuICAgIGNsZWFyLFxuICAgIGZvckVhY2g6IGNyZWF0ZUZvckVhY2goZmFsc2UsIGZhbHNlKVxuICB9O1xuICBjb25zdCBzaGFsbG93SW5zdHJ1bWVudGF0aW9uczIgPSB7XG4gICAgZ2V0KGtleSkge1xuICAgICAgcmV0dXJuIGdldCQxKHRoaXMsIGtleSwgZmFsc2UsIHRydWUpO1xuICAgIH0sXG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICByZXR1cm4gc2l6ZSh0aGlzKTtcbiAgICB9LFxuICAgIGhhczogaGFzJDEsXG4gICAgYWRkLFxuICAgIHNldDogc2V0JDEsXG4gICAgZGVsZXRlOiBkZWxldGVFbnRyeSxcbiAgICBjbGVhcixcbiAgICBmb3JFYWNoOiBjcmVhdGVGb3JFYWNoKGZhbHNlLCB0cnVlKVxuICB9O1xuICBjb25zdCByZWFkb25seUluc3RydW1lbnRhdGlvbnMyID0ge1xuICAgIGdldChrZXkpIHtcbiAgICAgIHJldHVybiBnZXQkMSh0aGlzLCBrZXksIHRydWUpO1xuICAgIH0sXG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICByZXR1cm4gc2l6ZSh0aGlzLCB0cnVlKTtcbiAgICB9LFxuICAgIGhhcyhrZXkpIHtcbiAgICAgIHJldHVybiBoYXMkMS5jYWxsKHRoaXMsIGtleSwgdHJ1ZSk7XG4gICAgfSxcbiAgICBhZGQ6IGNyZWF0ZVJlYWRvbmx5TWV0aG9kKFxuICAgICAgXCJhZGRcIlxuICAgICAgLyogQUREICovXG4gICAgKSxcbiAgICBzZXQ6IGNyZWF0ZVJlYWRvbmx5TWV0aG9kKFxuICAgICAgXCJzZXRcIlxuICAgICAgLyogU0VUICovXG4gICAgKSxcbiAgICBkZWxldGU6IGNyZWF0ZVJlYWRvbmx5TWV0aG9kKFxuICAgICAgXCJkZWxldGVcIlxuICAgICAgLyogREVMRVRFICovXG4gICAgKSxcbiAgICBjbGVhcjogY3JlYXRlUmVhZG9ubHlNZXRob2QoXG4gICAgICBcImNsZWFyXCJcbiAgICAgIC8qIENMRUFSICovXG4gICAgKSxcbiAgICBmb3JFYWNoOiBjcmVhdGVGb3JFYWNoKHRydWUsIGZhbHNlKVxuICB9O1xuICBjb25zdCBzaGFsbG93UmVhZG9ubHlJbnN0cnVtZW50YXRpb25zMiA9IHtcbiAgICBnZXQoa2V5KSB7XG4gICAgICByZXR1cm4gZ2V0JDEodGhpcywga2V5LCB0cnVlLCB0cnVlKTtcbiAgICB9LFxuICAgIGdldCBzaXplKCkge1xuICAgICAgcmV0dXJuIHNpemUodGhpcywgdHJ1ZSk7XG4gICAgfSxcbiAgICBoYXMoa2V5KSB7XG4gICAgICByZXR1cm4gaGFzJDEuY2FsbCh0aGlzLCBrZXksIHRydWUpO1xuICAgIH0sXG4gICAgYWRkOiBjcmVhdGVSZWFkb25seU1ldGhvZChcbiAgICAgIFwiYWRkXCJcbiAgICAgIC8qIEFERCAqL1xuICAgICksXG4gICAgc2V0OiBjcmVhdGVSZWFkb25seU1ldGhvZChcbiAgICAgIFwic2V0XCJcbiAgICAgIC8qIFNFVCAqL1xuICAgICksXG4gICAgZGVsZXRlOiBjcmVhdGVSZWFkb25seU1ldGhvZChcbiAgICAgIFwiZGVsZXRlXCJcbiAgICAgIC8qIERFTEVURSAqL1xuICAgICksXG4gICAgY2xlYXI6IGNyZWF0ZVJlYWRvbmx5TWV0aG9kKFxuICAgICAgXCJjbGVhclwiXG4gICAgICAvKiBDTEVBUiAqL1xuICAgICksXG4gICAgZm9yRWFjaDogY3JlYXRlRm9yRWFjaCh0cnVlLCB0cnVlKVxuICB9O1xuICBjb25zdCBpdGVyYXRvck1ldGhvZHMgPSBbXCJrZXlzXCIsIFwidmFsdWVzXCIsIFwiZW50cmllc1wiLCBTeW1ib2wuaXRlcmF0b3JdO1xuICBpdGVyYXRvck1ldGhvZHMuZm9yRWFjaCgobWV0aG9kKSA9PiB7XG4gICAgbXV0YWJsZUluc3RydW1lbnRhdGlvbnMyW21ldGhvZF0gPSBjcmVhdGVJdGVyYWJsZU1ldGhvZChtZXRob2QsIGZhbHNlLCBmYWxzZSk7XG4gICAgcmVhZG9ubHlJbnN0cnVtZW50YXRpb25zMlttZXRob2RdID0gY3JlYXRlSXRlcmFibGVNZXRob2QobWV0aG9kLCB0cnVlLCBmYWxzZSk7XG4gICAgc2hhbGxvd0luc3RydW1lbnRhdGlvbnMyW21ldGhvZF0gPSBjcmVhdGVJdGVyYWJsZU1ldGhvZChtZXRob2QsIGZhbHNlLCB0cnVlKTtcbiAgICBzaGFsbG93UmVhZG9ubHlJbnN0cnVtZW50YXRpb25zMlttZXRob2RdID0gY3JlYXRlSXRlcmFibGVNZXRob2QobWV0aG9kLCB0cnVlLCB0cnVlKTtcbiAgfSk7XG4gIHJldHVybiBbXG4gICAgbXV0YWJsZUluc3RydW1lbnRhdGlvbnMyLFxuICAgIHJlYWRvbmx5SW5zdHJ1bWVudGF0aW9uczIsXG4gICAgc2hhbGxvd0luc3RydW1lbnRhdGlvbnMyLFxuICAgIHNoYWxsb3dSZWFkb25seUluc3RydW1lbnRhdGlvbnMyXG4gIF07XG59XG52YXIgW211dGFibGVJbnN0cnVtZW50YXRpb25zLCByZWFkb25seUluc3RydW1lbnRhdGlvbnMsIHNoYWxsb3dJbnN0cnVtZW50YXRpb25zLCBzaGFsbG93UmVhZG9ubHlJbnN0cnVtZW50YXRpb25zXSA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVJbnN0cnVtZW50YXRpb25zKCk7XG5mdW5jdGlvbiBjcmVhdGVJbnN0cnVtZW50YXRpb25HZXR0ZXIoaXNSZWFkb25seSwgc2hhbGxvdykge1xuICBjb25zdCBpbnN0cnVtZW50YXRpb25zID0gc2hhbGxvdyA/IGlzUmVhZG9ubHkgPyBzaGFsbG93UmVhZG9ubHlJbnN0cnVtZW50YXRpb25zIDogc2hhbGxvd0luc3RydW1lbnRhdGlvbnMgOiBpc1JlYWRvbmx5ID8gcmVhZG9ubHlJbnN0cnVtZW50YXRpb25zIDogbXV0YWJsZUluc3RydW1lbnRhdGlvbnM7XG4gIHJldHVybiAodGFyZ2V0LCBrZXksIHJlY2VpdmVyKSA9PiB7XG4gICAgaWYgKGtleSA9PT0gXCJfX3ZfaXNSZWFjdGl2ZVwiKSB7XG4gICAgICByZXR1cm4gIWlzUmVhZG9ubHk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IFwiX192X2lzUmVhZG9ubHlcIikge1xuICAgICAgcmV0dXJuIGlzUmVhZG9ubHk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IFwiX192X3Jhd1wiKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cbiAgICByZXR1cm4gUmVmbGVjdC5nZXQoaGFzT3duKGluc3RydW1lbnRhdGlvbnMsIGtleSkgJiYga2V5IGluIHRhcmdldCA/IGluc3RydW1lbnRhdGlvbnMgOiB0YXJnZXQsIGtleSwgcmVjZWl2ZXIpO1xuICB9O1xufVxudmFyIG11dGFibGVDb2xsZWN0aW9uSGFuZGxlcnMgPSB7XG4gIGdldDogLyogQF9fUFVSRV9fICovIGNyZWF0ZUluc3RydW1lbnRhdGlvbkdldHRlcihmYWxzZSwgZmFsc2UpXG59O1xudmFyIHJlYWRvbmx5Q29sbGVjdGlvbkhhbmRsZXJzID0ge1xuICBnZXQ6IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVJbnN0cnVtZW50YXRpb25HZXR0ZXIodHJ1ZSwgZmFsc2UpXG59O1xuZnVuY3Rpb24gY2hlY2tJZGVudGl0eUtleXModGFyZ2V0LCBoYXMyLCBrZXkpIHtcbiAgY29uc3QgcmF3S2V5ID0gdG9SYXcoa2V5KTtcbiAgaWYgKHJhd0tleSAhPT0ga2V5ICYmIGhhczIuY2FsbCh0YXJnZXQsIHJhd0tleSkpIHtcbiAgICBjb25zdCB0eXBlID0gdG9SYXdUeXBlKHRhcmdldCk7XG4gICAgY29uc29sZS53YXJuKGBSZWFjdGl2ZSAke3R5cGV9IGNvbnRhaW5zIGJvdGggdGhlIHJhdyBhbmQgcmVhY3RpdmUgdmVyc2lvbnMgb2YgdGhlIHNhbWUgb2JqZWN0JHt0eXBlID09PSBgTWFwYCA/IGAgYXMga2V5c2AgOiBgYH0sIHdoaWNoIGNhbiBsZWFkIHRvIGluY29uc2lzdGVuY2llcy4gQXZvaWQgZGlmZmVyZW50aWF0aW5nIGJldHdlZW4gdGhlIHJhdyBhbmQgcmVhY3RpdmUgdmVyc2lvbnMgb2YgYW4gb2JqZWN0IGFuZCBvbmx5IHVzZSB0aGUgcmVhY3RpdmUgdmVyc2lvbiBpZiBwb3NzaWJsZS5gKTtcbiAgfVxufVxudmFyIHJlYWN0aXZlTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgc2hhbGxvd1JlYWN0aXZlTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgcmVhZG9ubHlNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBzaGFsbG93UmVhZG9ubHlNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbmZ1bmN0aW9uIHRhcmdldFR5cGVNYXAocmF3VHlwZSkge1xuICBzd2l0Y2ggKHJhd1R5cGUpIHtcbiAgICBjYXNlIFwiT2JqZWN0XCI6XG4gICAgY2FzZSBcIkFycmF5XCI6XG4gICAgICByZXR1cm4gMTtcbiAgICBjYXNlIFwiTWFwXCI6XG4gICAgY2FzZSBcIlNldFwiOlxuICAgIGNhc2UgXCJXZWFrTWFwXCI6XG4gICAgY2FzZSBcIldlYWtTZXRcIjpcbiAgICAgIHJldHVybiAyO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gMDtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0VGFyZ2V0VHlwZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWVbXG4gICAgXCJfX3Zfc2tpcFwiXG4gICAgLyogU0tJUCAqL1xuICBdIHx8ICFPYmplY3QuaXNFeHRlbnNpYmxlKHZhbHVlKSA/IDAgOiB0YXJnZXRUeXBlTWFwKHRvUmF3VHlwZSh2YWx1ZSkpO1xufVxuZnVuY3Rpb24gcmVhY3RpdmUyKHRhcmdldCkge1xuICBpZiAodGFyZ2V0ICYmIHRhcmdldFtcbiAgICBcIl9fdl9pc1JlYWRvbmx5XCJcbiAgICAvKiBJU19SRUFET05MWSAqL1xuICBdKSB7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuICByZXR1cm4gY3JlYXRlUmVhY3RpdmVPYmplY3QodGFyZ2V0LCBmYWxzZSwgbXV0YWJsZUhhbmRsZXJzLCBtdXRhYmxlQ29sbGVjdGlvbkhhbmRsZXJzLCByZWFjdGl2ZU1hcCk7XG59XG5mdW5jdGlvbiByZWFkb25seSh0YXJnZXQpIHtcbiAgcmV0dXJuIGNyZWF0ZVJlYWN0aXZlT2JqZWN0KHRhcmdldCwgdHJ1ZSwgcmVhZG9ubHlIYW5kbGVycywgcmVhZG9ubHlDb2xsZWN0aW9uSGFuZGxlcnMsIHJlYWRvbmx5TWFwKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJlYWN0aXZlT2JqZWN0KHRhcmdldCwgaXNSZWFkb25seSwgYmFzZUhhbmRsZXJzLCBjb2xsZWN0aW9uSGFuZGxlcnMsIHByb3h5TWFwKSB7XG4gIGlmICghaXNPYmplY3QodGFyZ2V0KSkge1xuICAgIGlmICh0cnVlKSB7XG4gICAgICBjb25zb2xlLndhcm4oYHZhbHVlIGNhbm5vdCBiZSBtYWRlIHJlYWN0aXZlOiAke1N0cmluZyh0YXJnZXQpfWApO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG4gIGlmICh0YXJnZXRbXG4gICAgXCJfX3ZfcmF3XCJcbiAgICAvKiBSQVcgKi9cbiAgXSAmJiAhKGlzUmVhZG9ubHkgJiYgdGFyZ2V0W1xuICAgIFwiX192X2lzUmVhY3RpdmVcIlxuICAgIC8qIElTX1JFQUNUSVZFICovXG4gIF0pKSB7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuICBjb25zdCBleGlzdGluZ1Byb3h5ID0gcHJveHlNYXAuZ2V0KHRhcmdldCk7XG4gIGlmIChleGlzdGluZ1Byb3h5KSB7XG4gICAgcmV0dXJuIGV4aXN0aW5nUHJveHk7XG4gIH1cbiAgY29uc3QgdGFyZ2V0VHlwZSA9IGdldFRhcmdldFR5cGUodGFyZ2V0KTtcbiAgaWYgKHRhcmdldFR5cGUgPT09IDApIHtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG4gIGNvbnN0IHByb3h5ID0gbmV3IFByb3h5KHRhcmdldCwgdGFyZ2V0VHlwZSA9PT0gMiA/IGNvbGxlY3Rpb25IYW5kbGVycyA6IGJhc2VIYW5kbGVycyk7XG4gIHByb3h5TWFwLnNldCh0YXJnZXQsIHByb3h5KTtcbiAgcmV0dXJuIHByb3h5O1xufVxuZnVuY3Rpb24gdG9SYXcob2JzZXJ2ZWQpIHtcbiAgcmV0dXJuIG9ic2VydmVkICYmIHRvUmF3KG9ic2VydmVkW1xuICAgIFwiX192X3Jhd1wiXG4gICAgLyogUkFXICovXG4gIF0pIHx8IG9ic2VydmVkO1xufVxuZnVuY3Rpb24gaXNSZWYocikge1xuICByZXR1cm4gQm9vbGVhbihyICYmIHIuX192X2lzUmVmID09PSB0cnVlKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy8kbmV4dFRpY2suanNcbm1hZ2ljKFwibmV4dFRpY2tcIiwgKCkgPT4gbmV4dFRpY2spO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyRkaXNwYXRjaC5qc1xubWFnaWMoXCJkaXNwYXRjaFwiLCAoZWwpID0+IGRpc3BhdGNoLmJpbmQoZGlzcGF0Y2gsIGVsKSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MvJHdhdGNoLmpzXG5tYWdpYyhcIndhdGNoXCIsIChlbCwgeyBldmFsdWF0ZUxhdGVyOiBldmFsdWF0ZUxhdGVyMiwgZWZmZWN0OiBlZmZlY3QzIH0pID0+IChrZXksIGNhbGxiYWNrKSA9PiB7XG4gIGxldCBldmFsdWF0ZTIgPSBldmFsdWF0ZUxhdGVyMihrZXkpO1xuICBsZXQgZmlyc3RUaW1lID0gdHJ1ZTtcbiAgbGV0IG9sZFZhbHVlO1xuICBsZXQgZWZmZWN0UmVmZXJlbmNlID0gZWZmZWN0MygoKSA9PiBldmFsdWF0ZTIoKHZhbHVlKSA9PiB7XG4gICAgSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgIGlmICghZmlyc3RUaW1lKSB7XG4gICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICAgIGNhbGxiYWNrKHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgIG9sZFZhbHVlID0gdmFsdWU7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2xkVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZmlyc3RUaW1lID0gZmFsc2U7XG4gIH0pKTtcbiAgZWwuX3hfZWZmZWN0cy5kZWxldGUoZWZmZWN0UmVmZXJlbmNlKTtcbn0pO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyRzdG9yZS5qc1xubWFnaWMoXCJzdG9yZVwiLCBnZXRTdG9yZXMpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyRkYXRhLmpzXG5tYWdpYyhcImRhdGFcIiwgKGVsKSA9PiBzY29wZShlbCkpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyRyb290LmpzXG5tYWdpYyhcInJvb3RcIiwgKGVsKSA9PiBjbG9zZXN0Um9vdChlbCkpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyRyZWZzLmpzXG5tYWdpYyhcInJlZnNcIiwgKGVsKSA9PiB7XG4gIGlmIChlbC5feF9yZWZzX3Byb3h5KVxuICAgIHJldHVybiBlbC5feF9yZWZzX3Byb3h5O1xuICBlbC5feF9yZWZzX3Byb3h5ID0gbWVyZ2VQcm94aWVzKGdldEFycmF5T2ZSZWZPYmplY3QoZWwpKTtcbiAgcmV0dXJuIGVsLl94X3JlZnNfcHJveHk7XG59KTtcbmZ1bmN0aW9uIGdldEFycmF5T2ZSZWZPYmplY3QoZWwpIHtcbiAgbGV0IHJlZk9iamVjdHMgPSBbXTtcbiAgbGV0IGN1cnJlbnRFbCA9IGVsO1xuICB3aGlsZSAoY3VycmVudEVsKSB7XG4gICAgaWYgKGN1cnJlbnRFbC5feF9yZWZzKVxuICAgICAgcmVmT2JqZWN0cy5wdXNoKGN1cnJlbnRFbC5feF9yZWZzKTtcbiAgICBjdXJyZW50RWwgPSBjdXJyZW50RWwucGFyZW50Tm9kZTtcbiAgfVxuICByZXR1cm4gcmVmT2JqZWN0cztcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2lkcy5qc1xudmFyIGdsb2JhbElkTWVtbyA9IHt9O1xuZnVuY3Rpb24gZmluZEFuZEluY3JlbWVudElkKG5hbWUpIHtcbiAgaWYgKCFnbG9iYWxJZE1lbW9bbmFtZV0pXG4gICAgZ2xvYmFsSWRNZW1vW25hbWVdID0gMDtcbiAgcmV0dXJuICsrZ2xvYmFsSWRNZW1vW25hbWVdO1xufVxuZnVuY3Rpb24gY2xvc2VzdElkUm9vdChlbCwgbmFtZSkge1xuICByZXR1cm4gZmluZENsb3Nlc3QoZWwsIChlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQuX3hfaWRzICYmIGVsZW1lbnQuX3hfaWRzW25hbWVdKVxuICAgICAgcmV0dXJuIHRydWU7XG4gIH0pO1xufVxuZnVuY3Rpb24gc2V0SWRSb290KGVsLCBuYW1lKSB7XG4gIGlmICghZWwuX3hfaWRzKVxuICAgIGVsLl94X2lkcyA9IHt9O1xuICBpZiAoIWVsLl94X2lkc1tuYW1lXSlcbiAgICBlbC5feF9pZHNbbmFtZV0gPSBmaW5kQW5kSW5jcmVtZW50SWQobmFtZSk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MvJGlkLmpzXG5tYWdpYyhcImlkXCIsIChlbCkgPT4gKG5hbWUsIGtleSA9IG51bGwpID0+IHtcbiAgbGV0IHJvb3QgPSBjbG9zZXN0SWRSb290KGVsLCBuYW1lKTtcbiAgbGV0IGlkID0gcm9vdCA/IHJvb3QuX3hfaWRzW25hbWVdIDogZmluZEFuZEluY3JlbWVudElkKG5hbWUpO1xuICByZXR1cm4ga2V5ID8gYCR7bmFtZX0tJHtpZH0tJHtrZXl9YCA6IGAke25hbWV9LSR7aWR9YDtcbn0pO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyRlbC5qc1xubWFnaWMoXCJlbFwiLCAoZWwpID0+IGVsKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy9pbmRleC5qc1xud2Fybk1pc3NpbmdQbHVnaW5NYWdpYyhcIkZvY3VzXCIsIFwiZm9jdXNcIiwgXCJmb2N1c1wiKTtcbndhcm5NaXNzaW5nUGx1Z2luTWFnaWMoXCJQZXJzaXN0XCIsIFwicGVyc2lzdFwiLCBcInBlcnNpc3RcIik7XG5mdW5jdGlvbiB3YXJuTWlzc2luZ1BsdWdpbk1hZ2ljKG5hbWUsIG1hZ2ljTmFtZSwgc2x1Zykge1xuICBtYWdpYyhtYWdpY05hbWUsIChlbCkgPT4gd2FybihgWW91IGNhbid0IHVzZSBbJCR7bWFnaWNOYW1lfV0gd2l0aG91dCBmaXJzdCBpbnN0YWxsaW5nIHRoZSBcIiR7bmFtZX1cIiBwbHVnaW4gaGVyZTogaHR0cHM6Ly9hbHBpbmVqcy5kZXYvcGx1Z2lucy8ke3NsdWd9YCwgZWwpKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1tb2RlbGFibGUuanNcbmRpcmVjdGl2ZShcIm1vZGVsYWJsZVwiLCAoZWwsIHsgZXhwcmVzc2lvbiB9LCB7IGVmZmVjdDogZWZmZWN0MywgZXZhbHVhdGVMYXRlcjogZXZhbHVhdGVMYXRlcjIsIGNsZWFudXA6IGNsZWFudXAyIH0pID0+IHtcbiAgbGV0IGZ1bmMgPSBldmFsdWF0ZUxhdGVyMihleHByZXNzaW9uKTtcbiAgbGV0IGlubmVyR2V0ID0gKCkgPT4ge1xuICAgIGxldCByZXN1bHQ7XG4gICAgZnVuYygoaSkgPT4gcmVzdWx0ID0gaSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbGV0IGV2YWx1YXRlSW5uZXJTZXQgPSBldmFsdWF0ZUxhdGVyMihgJHtleHByZXNzaW9ufSA9IF9fcGxhY2Vob2xkZXJgKTtcbiAgbGV0IGlubmVyU2V0ID0gKHZhbCkgPT4gZXZhbHVhdGVJbm5lclNldCgoKSA9PiB7XG4gIH0sIHsgc2NvcGU6IHsgXCJfX3BsYWNlaG9sZGVyXCI6IHZhbCB9IH0pO1xuICBsZXQgaW5pdGlhbFZhbHVlID0gaW5uZXJHZXQoKTtcbiAgaW5uZXJTZXQoaW5pdGlhbFZhbHVlKTtcbiAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgIGlmICghZWwuX3hfbW9kZWwpXG4gICAgICByZXR1cm47XG4gICAgZWwuX3hfcmVtb3ZlTW9kZWxMaXN0ZW5lcnNbXCJkZWZhdWx0XCJdKCk7XG4gICAgbGV0IG91dGVyR2V0ID0gZWwuX3hfbW9kZWwuZ2V0O1xuICAgIGxldCBvdXRlclNldCA9IGVsLl94X21vZGVsLnNldDtcbiAgICBsZXQgcmVsZWFzZUVudGFuZ2xlbWVudCA9IGVudGFuZ2xlKFxuICAgICAge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIG91dGVyR2V0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgIG91dGVyU2V0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBpbm5lckdldCgpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICBpbm5lclNldCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICAgIGNsZWFudXAyKHJlbGVhc2VFbnRhbmdsZW1lbnQpO1xuICB9KTtcbn0pO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LXRlbGVwb3J0LmpzXG5kaXJlY3RpdmUoXCJ0ZWxlcG9ydFwiLCAoZWwsIHsgbW9kaWZpZXJzLCBleHByZXNzaW9uIH0sIHsgY2xlYW51cDogY2xlYW51cDIgfSkgPT4ge1xuICBpZiAoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSBcInRlbXBsYXRlXCIpXG4gICAgd2FybihcIngtdGVsZXBvcnQgY2FuIG9ubHkgYmUgdXNlZCBvbiBhIDx0ZW1wbGF0ZT4gdGFnXCIsIGVsKTtcbiAgbGV0IHRhcmdldCA9IGdldFRhcmdldChleHByZXNzaW9uKTtcbiAgbGV0IGNsb25lMiA9IGVsLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpLmZpcnN0RWxlbWVudENoaWxkO1xuICBlbC5feF90ZWxlcG9ydCA9IGNsb25lMjtcbiAgY2xvbmUyLl94X3RlbGVwb3J0QmFjayA9IGVsO1xuICBlbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRlbGVwb3J0LXRlbXBsYXRlXCIsIHRydWUpO1xuICBjbG9uZTIuc2V0QXR0cmlidXRlKFwiZGF0YS10ZWxlcG9ydC10YXJnZXRcIiwgdHJ1ZSk7XG4gIGlmIChlbC5feF9mb3J3YXJkRXZlbnRzKSB7XG4gICAgZWwuX3hfZm9yd2FyZEV2ZW50cy5mb3JFYWNoKChldmVudE5hbWUpID0+IHtcbiAgICAgIGNsb25lMi5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZWwuZGlzcGF0Y2hFdmVudChuZXcgZS5jb25zdHJ1Y3RvcihlLnR5cGUsIGUpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGFkZFNjb3BlVG9Ob2RlKGNsb25lMiwge30sIGVsKTtcbiAgbGV0IHBsYWNlSW5Eb20gPSAoY2xvbmUzLCB0YXJnZXQyLCBtb2RpZmllcnMyKSA9PiB7XG4gICAgaWYgKG1vZGlmaWVyczIuaW5jbHVkZXMoXCJwcmVwZW5kXCIpKSB7XG4gICAgICB0YXJnZXQyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNsb25lMywgdGFyZ2V0Mik7XG4gICAgfSBlbHNlIGlmIChtb2RpZmllcnMyLmluY2x1ZGVzKFwiYXBwZW5kXCIpKSB7XG4gICAgICB0YXJnZXQyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNsb25lMywgdGFyZ2V0Mi5uZXh0U2libGluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldDIuYXBwZW5kQ2hpbGQoY2xvbmUzKTtcbiAgICB9XG4gIH07XG4gIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgcGxhY2VJbkRvbShjbG9uZTIsIHRhcmdldCwgbW9kaWZpZXJzKTtcbiAgICBpbml0VHJlZShjbG9uZTIpO1xuICAgIGNsb25lMi5feF9pZ25vcmUgPSB0cnVlO1xuICB9KTtcbiAgZWwuX3hfdGVsZXBvcnRQdXRCYWNrID0gKCkgPT4ge1xuICAgIGxldCB0YXJnZXQyID0gZ2V0VGFyZ2V0KGV4cHJlc3Npb24pO1xuICAgIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgICBwbGFjZUluRG9tKGVsLl94X3RlbGVwb3J0LCB0YXJnZXQyLCBtb2RpZmllcnMpO1xuICAgIH0pO1xuICB9O1xuICBjbGVhbnVwMigoKSA9PiBjbG9uZTIucmVtb3ZlKCkpO1xufSk7XG52YXIgdGVsZXBvcnRDb250YWluZXJEdXJpbmdDbG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5mdW5jdGlvbiBnZXRUYXJnZXQoZXhwcmVzc2lvbikge1xuICBsZXQgdGFyZ2V0ID0gc2tpcER1cmluZ0Nsb25lKCgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihleHByZXNzaW9uKTtcbiAgfSwgKCkgPT4ge1xuICAgIHJldHVybiB0ZWxlcG9ydENvbnRhaW5lckR1cmluZ0Nsb25lO1xuICB9KSgpO1xuICBpZiAoIXRhcmdldClcbiAgICB3YXJuKGBDYW5ub3QgZmluZCB4LXRlbGVwb3J0IGVsZW1lbnQgZm9yIHNlbGVjdG9yOiBcIiR7ZXhwcmVzc2lvbn1cImApO1xuICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWlnbm9yZS5qc1xudmFyIGhhbmRsZXIgPSAoKSA9PiB7XG59O1xuaGFuZGxlci5pbmxpbmUgPSAoZWwsIHsgbW9kaWZpZXJzIH0sIHsgY2xlYW51cDogY2xlYW51cDIgfSkgPT4ge1xuICBtb2RpZmllcnMuaW5jbHVkZXMoXCJzZWxmXCIpID8gZWwuX3hfaWdub3JlU2VsZiA9IHRydWUgOiBlbC5feF9pZ25vcmUgPSB0cnVlO1xuICBjbGVhbnVwMigoKSA9PiB7XG4gICAgbW9kaWZpZXJzLmluY2x1ZGVzKFwic2VsZlwiKSA/IGRlbGV0ZSBlbC5feF9pZ25vcmVTZWxmIDogZGVsZXRlIGVsLl94X2lnbm9yZTtcbiAgfSk7XG59O1xuZGlyZWN0aXZlKFwiaWdub3JlXCIsIGhhbmRsZXIpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWVmZmVjdC5qc1xuZGlyZWN0aXZlKFwiZWZmZWN0XCIsIHNraXBEdXJpbmdDbG9uZSgoZWwsIHsgZXhwcmVzc2lvbiB9LCB7IGVmZmVjdDogZWZmZWN0MyB9KSA9PiB7XG4gIGVmZmVjdDMoZXZhbHVhdGVMYXRlcihlbCwgZXhwcmVzc2lvbikpO1xufSkpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvb24uanNcbmZ1bmN0aW9uIG9uKGVsLCBldmVudCwgbW9kaWZpZXJzLCBjYWxsYmFjaykge1xuICBsZXQgbGlzdGVuZXJUYXJnZXQgPSBlbDtcbiAgbGV0IGhhbmRsZXI0ID0gKGUpID0+IGNhbGxiYWNrKGUpO1xuICBsZXQgb3B0aW9ucyA9IHt9O1xuICBsZXQgd3JhcEhhbmRsZXIgPSAoY2FsbGJhY2syLCB3cmFwcGVyKSA9PiAoZSkgPT4gd3JhcHBlcihjYWxsYmFjazIsIGUpO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiZG90XCIpKVxuICAgIGV2ZW50ID0gZG90U3ludGF4KGV2ZW50KTtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImNhbWVsXCIpKVxuICAgIGV2ZW50ID0gY2FtZWxDYXNlMihldmVudCk7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJwYXNzaXZlXCIpKVxuICAgIG9wdGlvbnMucGFzc2l2ZSA9IHRydWU7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJjYXB0dXJlXCIpKVxuICAgIG9wdGlvbnMuY2FwdHVyZSA9IHRydWU7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJ3aW5kb3dcIikpXG4gICAgbGlzdGVuZXJUYXJnZXQgPSB3aW5kb3c7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJkb2N1bWVudFwiKSlcbiAgICBsaXN0ZW5lclRhcmdldCA9IGRvY3VtZW50O1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiZGVib3VuY2VcIikpIHtcbiAgICBsZXQgbmV4dE1vZGlmaWVyID0gbW9kaWZpZXJzW21vZGlmaWVycy5pbmRleE9mKFwiZGVib3VuY2VcIikgKyAxXSB8fCBcImludmFsaWQtd2FpdFwiO1xuICAgIGxldCB3YWl0ID0gaXNOdW1lcmljKG5leHRNb2RpZmllci5zcGxpdChcIm1zXCIpWzBdKSA/IE51bWJlcihuZXh0TW9kaWZpZXIuc3BsaXQoXCJtc1wiKVswXSkgOiAyNTA7XG4gICAgaGFuZGxlcjQgPSBkZWJvdW5jZShoYW5kbGVyNCwgd2FpdCk7XG4gIH1cbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcInRocm90dGxlXCIpKSB7XG4gICAgbGV0IG5leHRNb2RpZmllciA9IG1vZGlmaWVyc1ttb2RpZmllcnMuaW5kZXhPZihcInRocm90dGxlXCIpICsgMV0gfHwgXCJpbnZhbGlkLXdhaXRcIjtcbiAgICBsZXQgd2FpdCA9IGlzTnVtZXJpYyhuZXh0TW9kaWZpZXIuc3BsaXQoXCJtc1wiKVswXSkgPyBOdW1iZXIobmV4dE1vZGlmaWVyLnNwbGl0KFwibXNcIilbMF0pIDogMjUwO1xuICAgIGhhbmRsZXI0ID0gdGhyb3R0bGUoaGFuZGxlcjQsIHdhaXQpO1xuICB9XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJwcmV2ZW50XCIpKVxuICAgIGhhbmRsZXI0ID0gd3JhcEhhbmRsZXIoaGFuZGxlcjQsIChuZXh0LCBlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBuZXh0KGUpO1xuICAgIH0pO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwic3RvcFwiKSlcbiAgICBoYW5kbGVyNCA9IHdyYXBIYW5kbGVyKGhhbmRsZXI0LCAobmV4dCwgZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIG5leHQoZSk7XG4gICAgfSk7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJzZWxmXCIpKVxuICAgIGhhbmRsZXI0ID0gd3JhcEhhbmRsZXIoaGFuZGxlcjQsIChuZXh0LCBlKSA9PiB7XG4gICAgICBlLnRhcmdldCA9PT0gZWwgJiYgbmV4dChlKTtcbiAgICB9KTtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImF3YXlcIikgfHwgbW9kaWZpZXJzLmluY2x1ZGVzKFwib3V0c2lkZVwiKSkge1xuICAgIGxpc3RlbmVyVGFyZ2V0ID0gZG9jdW1lbnQ7XG4gICAgaGFuZGxlcjQgPSB3cmFwSGFuZGxlcihoYW5kbGVyNCwgKG5leHQsIGUpID0+IHtcbiAgICAgIGlmIChlbC5jb250YWlucyhlLnRhcmdldCkpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGlmIChlLnRhcmdldC5pc0Nvbm5lY3RlZCA9PT0gZmFsc2UpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGlmIChlbC5vZmZzZXRXaWR0aCA8IDEgJiYgZWwub2Zmc2V0SGVpZ2h0IDwgMSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgaWYgKGVsLl94X2lzU2hvd24gPT09IGZhbHNlKVxuICAgICAgICByZXR1cm47XG4gICAgICBuZXh0KGUpO1xuICAgIH0pO1xuICB9XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJvbmNlXCIpKSB7XG4gICAgaGFuZGxlcjQgPSB3cmFwSGFuZGxlcihoYW5kbGVyNCwgKG5leHQsIGUpID0+IHtcbiAgICAgIG5leHQoZSk7XG4gICAgICBsaXN0ZW5lclRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyNCwgb3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cbiAgaGFuZGxlcjQgPSB3cmFwSGFuZGxlcihoYW5kbGVyNCwgKG5leHQsIGUpID0+IHtcbiAgICBpZiAoaXNLZXlFdmVudChldmVudCkpIHtcbiAgICAgIGlmIChpc0xpc3RlbmluZ0ZvckFTcGVjaWZpY0tleVRoYXRIYXNudEJlZW5QcmVzc2VkKGUsIG1vZGlmaWVycykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBuZXh0KGUpO1xuICB9KTtcbiAgbGlzdGVuZXJUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcjQsIG9wdGlvbnMpO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGxpc3RlbmVyVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXI0LCBvcHRpb25zKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGRvdFN5bnRheChzdWJqZWN0KSB7XG4gIHJldHVybiBzdWJqZWN0LnJlcGxhY2UoLy0vZywgXCIuXCIpO1xufVxuZnVuY3Rpb24gY2FtZWxDYXNlMihzdWJqZWN0KSB7XG4gIHJldHVybiBzdWJqZWN0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvLShcXHcpL2csIChtYXRjaCwgY2hhcikgPT4gY2hhci50b1VwcGVyQ2FzZSgpKTtcbn1cbmZ1bmN0aW9uIGlzTnVtZXJpYyhzdWJqZWN0KSB7XG4gIHJldHVybiAhQXJyYXkuaXNBcnJheShzdWJqZWN0KSAmJiAhaXNOYU4oc3ViamVjdCk7XG59XG5mdW5jdGlvbiBrZWJhYkNhc2UyKHN1YmplY3QpIHtcbiAgaWYgKFtcIiBcIiwgXCJfXCJdLmluY2x1ZGVzKFxuICAgIHN1YmplY3RcbiAgKSlcbiAgICByZXR1cm4gc3ViamVjdDtcbiAgcmV0dXJuIHN1YmplY3QucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMS0kMlwiKS5yZXBsYWNlKC9bX1xcc10vLCBcIi1cIikudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIGlzS2V5RXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuIFtcImtleWRvd25cIiwgXCJrZXl1cFwiXS5pbmNsdWRlcyhldmVudCk7XG59XG5mdW5jdGlvbiBpc0xpc3RlbmluZ0ZvckFTcGVjaWZpY0tleVRoYXRIYXNudEJlZW5QcmVzc2VkKGUsIG1vZGlmaWVycykge1xuICBsZXQga2V5TW9kaWZpZXJzID0gbW9kaWZpZXJzLmZpbHRlcigoaSkgPT4ge1xuICAgIHJldHVybiAhW1wid2luZG93XCIsIFwiZG9jdW1lbnRcIiwgXCJwcmV2ZW50XCIsIFwic3RvcFwiLCBcIm9uY2VcIiwgXCJjYXB0dXJlXCJdLmluY2x1ZGVzKGkpO1xuICB9KTtcbiAgaWYgKGtleU1vZGlmaWVycy5pbmNsdWRlcyhcImRlYm91bmNlXCIpKSB7XG4gICAgbGV0IGRlYm91bmNlSW5kZXggPSBrZXlNb2RpZmllcnMuaW5kZXhPZihcImRlYm91bmNlXCIpO1xuICAgIGtleU1vZGlmaWVycy5zcGxpY2UoZGVib3VuY2VJbmRleCwgaXNOdW1lcmljKChrZXlNb2RpZmllcnNbZGVib3VuY2VJbmRleCArIDFdIHx8IFwiaW52YWxpZC13YWl0XCIpLnNwbGl0KFwibXNcIilbMF0pID8gMiA6IDEpO1xuICB9XG4gIGlmIChrZXlNb2RpZmllcnMuaW5jbHVkZXMoXCJ0aHJvdHRsZVwiKSkge1xuICAgIGxldCBkZWJvdW5jZUluZGV4ID0ga2V5TW9kaWZpZXJzLmluZGV4T2YoXCJ0aHJvdHRsZVwiKTtcbiAgICBrZXlNb2RpZmllcnMuc3BsaWNlKGRlYm91bmNlSW5kZXgsIGlzTnVtZXJpYygoa2V5TW9kaWZpZXJzW2RlYm91bmNlSW5kZXggKyAxXSB8fCBcImludmFsaWQtd2FpdFwiKS5zcGxpdChcIm1zXCIpWzBdKSA/IDIgOiAxKTtcbiAgfVxuICBpZiAoa2V5TW9kaWZpZXJzLmxlbmd0aCA9PT0gMClcbiAgICByZXR1cm4gZmFsc2U7XG4gIGlmIChrZXlNb2RpZmllcnMubGVuZ3RoID09PSAxICYmIGtleVRvTW9kaWZpZXJzKGUua2V5KS5pbmNsdWRlcyhrZXlNb2RpZmllcnNbMF0pKVxuICAgIHJldHVybiBmYWxzZTtcbiAgY29uc3Qgc3lzdGVtS2V5TW9kaWZpZXJzID0gW1wiY3RybFwiLCBcInNoaWZ0XCIsIFwiYWx0XCIsIFwibWV0YVwiLCBcImNtZFwiLCBcInN1cGVyXCJdO1xuICBjb25zdCBzZWxlY3RlZFN5c3RlbUtleU1vZGlmaWVycyA9IHN5c3RlbUtleU1vZGlmaWVycy5maWx0ZXIoKG1vZGlmaWVyKSA9PiBrZXlNb2RpZmllcnMuaW5jbHVkZXMobW9kaWZpZXIpKTtcbiAga2V5TW9kaWZpZXJzID0ga2V5TW9kaWZpZXJzLmZpbHRlcigoaSkgPT4gIXNlbGVjdGVkU3lzdGVtS2V5TW9kaWZpZXJzLmluY2x1ZGVzKGkpKTtcbiAgaWYgKHNlbGVjdGVkU3lzdGVtS2V5TW9kaWZpZXJzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBhY3RpdmVseVByZXNzZWRLZXlNb2RpZmllcnMgPSBzZWxlY3RlZFN5c3RlbUtleU1vZGlmaWVycy5maWx0ZXIoKG1vZGlmaWVyKSA9PiB7XG4gICAgICBpZiAobW9kaWZpZXIgPT09IFwiY21kXCIgfHwgbW9kaWZpZXIgPT09IFwic3VwZXJcIilcbiAgICAgICAgbW9kaWZpZXIgPSBcIm1ldGFcIjtcbiAgICAgIHJldHVybiBlW2Ake21vZGlmaWVyfUtleWBdO1xuICAgIH0pO1xuICAgIGlmIChhY3RpdmVseVByZXNzZWRLZXlNb2RpZmllcnMubGVuZ3RoID09PSBzZWxlY3RlZFN5c3RlbUtleU1vZGlmaWVycy5sZW5ndGgpIHtcbiAgICAgIGlmIChrZXlUb01vZGlmaWVycyhlLmtleSkuaW5jbHVkZXMoa2V5TW9kaWZpZXJzWzBdKSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGtleVRvTW9kaWZpZXJzKGtleSkge1xuICBpZiAoIWtleSlcbiAgICByZXR1cm4gW107XG4gIGtleSA9IGtlYmFiQ2FzZTIoa2V5KTtcbiAgbGV0IG1vZGlmaWVyVG9LZXlNYXAgPSB7XG4gICAgXCJjdHJsXCI6IFwiY29udHJvbFwiLFxuICAgIFwic2xhc2hcIjogXCIvXCIsXG4gICAgXCJzcGFjZVwiOiBcIiBcIixcbiAgICBcInNwYWNlYmFyXCI6IFwiIFwiLFxuICAgIFwiY21kXCI6IFwibWV0YVwiLFxuICAgIFwiZXNjXCI6IFwiZXNjYXBlXCIsXG4gICAgXCJ1cFwiOiBcImFycm93LXVwXCIsXG4gICAgXCJkb3duXCI6IFwiYXJyb3ctZG93blwiLFxuICAgIFwibGVmdFwiOiBcImFycm93LWxlZnRcIixcbiAgICBcInJpZ2h0XCI6IFwiYXJyb3ctcmlnaHRcIixcbiAgICBcInBlcmlvZFwiOiBcIi5cIixcbiAgICBcImVxdWFsXCI6IFwiPVwiLFxuICAgIFwibWludXNcIjogXCItXCIsXG4gICAgXCJ1bmRlcnNjb3JlXCI6IFwiX1wiXG4gIH07XG4gIG1vZGlmaWVyVG9LZXlNYXBba2V5XSA9IGtleTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG1vZGlmaWVyVG9LZXlNYXApLm1hcCgobW9kaWZpZXIpID0+IHtcbiAgICBpZiAobW9kaWZpZXJUb0tleU1hcFttb2RpZmllcl0gPT09IGtleSlcbiAgICAgIHJldHVybiBtb2RpZmllcjtcbiAgfSkuZmlsdGVyKChtb2RpZmllcikgPT4gbW9kaWZpZXIpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LW1vZGVsLmpzXG5kaXJlY3RpdmUoXCJtb2RlbFwiLCAoZWwsIHsgbW9kaWZpZXJzLCBleHByZXNzaW9uIH0sIHsgZWZmZWN0OiBlZmZlY3QzLCBjbGVhbnVwOiBjbGVhbnVwMiB9KSA9PiB7XG4gIGxldCBzY29wZVRhcmdldCA9IGVsO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwicGFyZW50XCIpKSB7XG4gICAgc2NvcGVUYXJnZXQgPSBlbC5wYXJlbnROb2RlO1xuICB9XG4gIGxldCBldmFsdWF0ZUdldCA9IGV2YWx1YXRlTGF0ZXIoc2NvcGVUYXJnZXQsIGV4cHJlc3Npb24pO1xuICBsZXQgZXZhbHVhdGVTZXQ7XG4gIGlmICh0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJzdHJpbmdcIikge1xuICAgIGV2YWx1YXRlU2V0ID0gZXZhbHVhdGVMYXRlcihzY29wZVRhcmdldCwgYCR7ZXhwcmVzc2lvbn0gPSBfX3BsYWNlaG9sZGVyYCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cHJlc3Npb24gPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgZXhwcmVzc2lvbigpID09PSBcInN0cmluZ1wiKSB7XG4gICAgZXZhbHVhdGVTZXQgPSBldmFsdWF0ZUxhdGVyKHNjb3BlVGFyZ2V0LCBgJHtleHByZXNzaW9uKCl9ID0gX19wbGFjZWhvbGRlcmApO1xuICB9IGVsc2Uge1xuICAgIGV2YWx1YXRlU2V0ID0gKCkgPT4ge1xuICAgIH07XG4gIH1cbiAgbGV0IGdldFZhbHVlID0gKCkgPT4ge1xuICAgIGxldCByZXN1bHQ7XG4gICAgZXZhbHVhdGVHZXQoKHZhbHVlKSA9PiByZXN1bHQgPSB2YWx1ZSk7XG4gICAgcmV0dXJuIGlzR2V0dGVyU2V0dGVyKHJlc3VsdCkgPyByZXN1bHQuZ2V0KCkgOiByZXN1bHQ7XG4gIH07XG4gIGxldCBzZXRWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuICAgIGxldCByZXN1bHQ7XG4gICAgZXZhbHVhdGVHZXQoKHZhbHVlMikgPT4gcmVzdWx0ID0gdmFsdWUyKTtcbiAgICBpZiAoaXNHZXR0ZXJTZXR0ZXIocmVzdWx0KSkge1xuICAgICAgcmVzdWx0LnNldCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2YWx1YXRlU2V0KCgpID0+IHtcbiAgICAgIH0sIHtcbiAgICAgICAgc2NvcGU6IHsgXCJfX3BsYWNlaG9sZGVyXCI6IHZhbHVlIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgaWYgKHR5cGVvZiBleHByZXNzaW9uID09PSBcInN0cmluZ1wiICYmIGVsLnR5cGUgPT09IFwicmFkaW9cIikge1xuICAgIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgICBpZiAoIWVsLmhhc0F0dHJpYnV0ZShcIm5hbWVcIikpXG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgZXhwcmVzc2lvbik7XG4gICAgfSk7XG4gIH1cbiAgdmFyIGV2ZW50ID0gZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInNlbGVjdFwiIHx8IFtcImNoZWNrYm94XCIsIFwicmFkaW9cIl0uaW5jbHVkZXMoZWwudHlwZSkgfHwgbW9kaWZpZXJzLmluY2x1ZGVzKFwibGF6eVwiKSA/IFwiY2hhbmdlXCIgOiBcImlucHV0XCI7XG4gIGxldCByZW1vdmVMaXN0ZW5lciA9IGlzQ2xvbmluZyA/ICgpID0+IHtcbiAgfSA6IG9uKGVsLCBldmVudCwgbW9kaWZpZXJzLCAoZSkgPT4ge1xuICAgIHNldFZhbHVlKGdldElucHV0VmFsdWUoZWwsIG1vZGlmaWVycywgZSwgZ2V0VmFsdWUoKSkpO1xuICB9KTtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImZpbGxcIikpIHtcbiAgICBpZiAoW251bGwsIFwiXCJdLmluY2x1ZGVzKGdldFZhbHVlKCkpIHx8IGVsLnR5cGUgPT09IFwiY2hlY2tib3hcIiAmJiBBcnJheS5pc0FycmF5KGdldFZhbHVlKCkpKSB7XG4gICAgICBlbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChldmVudCwge30pKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFlbC5feF9yZW1vdmVNb2RlbExpc3RlbmVycylcbiAgICBlbC5feF9yZW1vdmVNb2RlbExpc3RlbmVycyA9IHt9O1xuICBlbC5feF9yZW1vdmVNb2RlbExpc3RlbmVyc1tcImRlZmF1bHRcIl0gPSByZW1vdmVMaXN0ZW5lcjtcbiAgY2xlYW51cDIoKCkgPT4gZWwuX3hfcmVtb3ZlTW9kZWxMaXN0ZW5lcnNbXCJkZWZhdWx0XCJdKCkpO1xuICBpZiAoZWwuZm9ybSkge1xuICAgIGxldCByZW1vdmVSZXNldExpc3RlbmVyID0gb24oZWwuZm9ybSwgXCJyZXNldFwiLCBbXSwgKGUpID0+IHtcbiAgICAgIG5leHRUaWNrKCgpID0+IGVsLl94X21vZGVsICYmIGVsLl94X21vZGVsLnNldChlbC52YWx1ZSkpO1xuICAgIH0pO1xuICAgIGNsZWFudXAyKCgpID0+IHJlbW92ZVJlc2V0TGlzdGVuZXIoKSk7XG4gIH1cbiAgZWwuX3hfbW9kZWwgPSB7XG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIGdldFZhbHVlKCk7XG4gICAgfSxcbiAgICBzZXQodmFsdWUpIHtcbiAgICAgIHNldFZhbHVlKHZhbHVlKTtcbiAgICB9XG4gIH07XG4gIGVsLl94X2ZvcmNlTW9kZWxVcGRhdGUgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUgPT09IHZvaWQgMCAmJiB0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJzdHJpbmdcIiAmJiBleHByZXNzaW9uLm1hdGNoKC9cXC4vKSlcbiAgICAgIHZhbHVlID0gXCJcIjtcbiAgICB3aW5kb3cuZnJvbU1vZGVsID0gdHJ1ZTtcbiAgICBtdXRhdGVEb20oKCkgPT4gYmluZChlbCwgXCJ2YWx1ZVwiLCB2YWx1ZSkpO1xuICAgIGRlbGV0ZSB3aW5kb3cuZnJvbU1vZGVsO1xuICB9O1xuICBlZmZlY3QzKCgpID0+IHtcbiAgICBsZXQgdmFsdWUgPSBnZXRWYWx1ZSgpO1xuICAgIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJ1bmludHJ1c2l2ZVwiKSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmlzU2FtZU5vZGUoZWwpKVxuICAgICAgcmV0dXJuO1xuICAgIGVsLl94X2ZvcmNlTW9kZWxVcGRhdGUodmFsdWUpO1xuICB9KTtcbn0pO1xuZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZShlbCwgbW9kaWZpZXJzLCBldmVudCwgY3VycmVudFZhbHVlKSB7XG4gIHJldHVybiBtdXRhdGVEb20oKCkgPT4ge1xuICAgIGlmIChldmVudCBpbnN0YW5jZW9mIEN1c3RvbUV2ZW50ICYmIGV2ZW50LmRldGFpbCAhPT0gdm9pZCAwKVxuICAgICAgcmV0dXJuIGV2ZW50LmRldGFpbCAhPT0gbnVsbCAmJiBldmVudC5kZXRhaWwgIT09IHZvaWQgMCA/IGV2ZW50LmRldGFpbCA6IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBlbHNlIGlmIChlbC50eXBlID09PSBcImNoZWNrYm94XCIpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGN1cnJlbnRWYWx1ZSkpIHtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gbnVsbDtcbiAgICAgICAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcIm51bWJlclwiKSkge1xuICAgICAgICAgIG5ld1ZhbHVlID0gc2FmZVBhcnNlTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiYm9vbGVhblwiKSkge1xuICAgICAgICAgIG5ld1ZhbHVlID0gc2FmZVBhcnNlQm9vbGVhbihldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1ZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBldmVudC50YXJnZXQuY2hlY2tlZCA/IGN1cnJlbnRWYWx1ZS5jb25jYXQoW25ld1ZhbHVlXSkgOiBjdXJyZW50VmFsdWUuZmlsdGVyKChlbDIpID0+ICFjaGVja2VkQXR0ckxvb3NlQ29tcGFyZTIoZWwyLCBuZXdWYWx1ZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInNlbGVjdFwiICYmIGVsLm11bHRpcGxlKSB7XG4gICAgICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwibnVtYmVyXCIpKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5zZWxlY3RlZE9wdGlvbnMpLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgbGV0IHJhd1ZhbHVlID0gb3B0aW9uLnZhbHVlIHx8IG9wdGlvbi50ZXh0O1xuICAgICAgICAgIHJldHVybiBzYWZlUGFyc2VOdW1iZXIocmF3VmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiYm9vbGVhblwiKSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShldmVudC50YXJnZXQuc2VsZWN0ZWRPcHRpb25zKS5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICAgIGxldCByYXdWYWx1ZSA9IG9wdGlvbi52YWx1ZSB8fCBvcHRpb24udGV4dDtcbiAgICAgICAgICByZXR1cm4gc2FmZVBhcnNlQm9vbGVhbihyYXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LnNlbGVjdGVkT3B0aW9ucykubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbi52YWx1ZSB8fCBvcHRpb24udGV4dDtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwibnVtYmVyXCIpKSB7XG4gICAgICAgIHJldHVybiBzYWZlUGFyc2VOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiYm9vbGVhblwiKSkge1xuICAgICAgICByZXR1cm4gc2FmZVBhcnNlQm9vbGVhbihldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1vZGlmaWVycy5pbmNsdWRlcyhcInRyaW1cIikgPyBldmVudC50YXJnZXQudmFsdWUudHJpbSgpIDogZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBzYWZlUGFyc2VOdW1iZXIocmF3VmFsdWUpIHtcbiAgbGV0IG51bWJlciA9IHJhd1ZhbHVlID8gcGFyc2VGbG9hdChyYXdWYWx1ZSkgOiBudWxsO1xuICByZXR1cm4gaXNOdW1lcmljMihudW1iZXIpID8gbnVtYmVyIDogcmF3VmFsdWU7XG59XG5mdW5jdGlvbiBjaGVja2VkQXR0ckxvb3NlQ29tcGFyZTIodmFsdWVBLCB2YWx1ZUIpIHtcbiAgcmV0dXJuIHZhbHVlQSA9PSB2YWx1ZUI7XG59XG5mdW5jdGlvbiBpc051bWVyaWMyKHN1YmplY3QpIHtcbiAgcmV0dXJuICFBcnJheS5pc0FycmF5KHN1YmplY3QpICYmICFpc05hTihzdWJqZWN0KTtcbn1cbmZ1bmN0aW9uIGlzR2V0dGVyU2V0dGVyKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlLmdldCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiB2YWx1ZS5zZXQgPT09IFwiZnVuY3Rpb25cIjtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1jbG9hay5qc1xuZGlyZWN0aXZlKFwiY2xvYWtcIiwgKGVsKSA9PiBxdWV1ZU1pY3JvdGFzaygoKSA9PiBtdXRhdGVEb20oKCkgPT4gZWwucmVtb3ZlQXR0cmlidXRlKHByZWZpeChcImNsb2FrXCIpKSkpKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1pbml0LmpzXG5hZGRJbml0U2VsZWN0b3IoKCkgPT4gYFske3ByZWZpeChcImluaXRcIil9XWApO1xuZGlyZWN0aXZlKFwiaW5pdFwiLCBza2lwRHVyaW5nQ2xvbmUoKGVsLCB7IGV4cHJlc3Npb24gfSwgeyBldmFsdWF0ZTogZXZhbHVhdGUyIH0pID0+IHtcbiAgaWYgKHR5cGVvZiBleHByZXNzaW9uID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuICEhZXhwcmVzc2lvbi50cmltKCkgJiYgZXZhbHVhdGUyKGV4cHJlc3Npb24sIHt9LCBmYWxzZSk7XG4gIH1cbiAgcmV0dXJuIGV2YWx1YXRlMihleHByZXNzaW9uLCB7fSwgZmFsc2UpO1xufSkpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LXRleHQuanNcbmRpcmVjdGl2ZShcInRleHRcIiwgKGVsLCB7IGV4cHJlc3Npb24gfSwgeyBlZmZlY3Q6IGVmZmVjdDMsIGV2YWx1YXRlTGF0ZXI6IGV2YWx1YXRlTGF0ZXIyIH0pID0+IHtcbiAgbGV0IGV2YWx1YXRlMiA9IGV2YWx1YXRlTGF0ZXIyKGV4cHJlc3Npb24pO1xuICBlZmZlY3QzKCgpID0+IHtcbiAgICBldmFsdWF0ZTIoKHZhbHVlKSA9PiB7XG4gICAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgICBlbC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtaHRtbC5qc1xuZGlyZWN0aXZlKFwiaHRtbFwiLCAoZWwsIHsgZXhwcmVzc2lvbiB9LCB7IGVmZmVjdDogZWZmZWN0MywgZXZhbHVhdGVMYXRlcjogZXZhbHVhdGVMYXRlcjIgfSkgPT4ge1xuICBsZXQgZXZhbHVhdGUyID0gZXZhbHVhdGVMYXRlcjIoZXhwcmVzc2lvbik7XG4gIGVmZmVjdDMoKCkgPT4ge1xuICAgIGV2YWx1YXRlMigodmFsdWUpID0+IHtcbiAgICAgIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgICAgIGVsLmlubmVySFRNTCA9IHZhbHVlO1xuICAgICAgICBlbC5feF9pZ25vcmVTZWxmID0gdHJ1ZTtcbiAgICAgICAgaW5pdFRyZWUoZWwpO1xuICAgICAgICBkZWxldGUgZWwuX3hfaWdub3JlU2VsZjtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWJpbmQuanNcbm1hcEF0dHJpYnV0ZXMoc3RhcnRpbmdXaXRoKFwiOlwiLCBpbnRvKHByZWZpeChcImJpbmQ6XCIpKSkpO1xudmFyIGhhbmRsZXIyID0gKGVsLCB7IHZhbHVlLCBtb2RpZmllcnMsIGV4cHJlc3Npb24sIG9yaWdpbmFsIH0sIHsgZWZmZWN0OiBlZmZlY3QzIH0pID0+IHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIGxldCBiaW5kaW5nUHJvdmlkZXJzID0ge307XG4gICAgaW5qZWN0QmluZGluZ1Byb3ZpZGVycyhiaW5kaW5nUHJvdmlkZXJzKTtcbiAgICBsZXQgZ2V0QmluZGluZ3MgPSBldmFsdWF0ZUxhdGVyKGVsLCBleHByZXNzaW9uKTtcbiAgICBnZXRCaW5kaW5ncygoYmluZGluZ3MpID0+IHtcbiAgICAgIGFwcGx5QmluZGluZ3NPYmplY3QoZWwsIGJpbmRpbmdzLCBvcmlnaW5hbCk7XG4gICAgfSwgeyBzY29wZTogYmluZGluZ1Byb3ZpZGVycyB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHZhbHVlID09PSBcImtleVwiKVxuICAgIHJldHVybiBzdG9yZUtleUZvclhGb3IoZWwsIGV4cHJlc3Npb24pO1xuICBpZiAoZWwuX3hfaW5saW5lQmluZGluZ3MgJiYgZWwuX3hfaW5saW5lQmluZGluZ3NbdmFsdWVdICYmIGVsLl94X2lubGluZUJpbmRpbmdzW3ZhbHVlXS5leHRyYWN0KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBldmFsdWF0ZTIgPSBldmFsdWF0ZUxhdGVyKGVsLCBleHByZXNzaW9uKTtcbiAgZWZmZWN0MygoKSA9PiBldmFsdWF0ZTIoKHJlc3VsdCkgPT4ge1xuICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCAmJiB0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJzdHJpbmdcIiAmJiBleHByZXNzaW9uLm1hdGNoKC9cXC4vKSkge1xuICAgICAgcmVzdWx0ID0gXCJcIjtcbiAgICB9XG4gICAgbXV0YXRlRG9tKCgpID0+IGJpbmQoZWwsIHZhbHVlLCByZXN1bHQsIG1vZGlmaWVycykpO1xuICB9KSk7XG59O1xuaGFuZGxlcjIuaW5saW5lID0gKGVsLCB7IHZhbHVlLCBtb2RpZmllcnMsIGV4cHJlc3Npb24gfSkgPT4ge1xuICBpZiAoIXZhbHVlKVxuICAgIHJldHVybjtcbiAgaWYgKCFlbC5feF9pbmxpbmVCaW5kaW5ncylcbiAgICBlbC5feF9pbmxpbmVCaW5kaW5ncyA9IHt9O1xuICBlbC5feF9pbmxpbmVCaW5kaW5nc1t2YWx1ZV0gPSB7IGV4cHJlc3Npb24sIGV4dHJhY3Q6IGZhbHNlIH07XG59O1xuZGlyZWN0aXZlKFwiYmluZFwiLCBoYW5kbGVyMik7XG5mdW5jdGlvbiBzdG9yZUtleUZvclhGb3IoZWwsIGV4cHJlc3Npb24pIHtcbiAgZWwuX3hfa2V5RXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtZGF0YS5qc1xuYWRkUm9vdFNlbGVjdG9yKCgpID0+IGBbJHtwcmVmaXgoXCJkYXRhXCIpfV1gKTtcbmRpcmVjdGl2ZShcImRhdGFcIiwgKGVsLCB7IGV4cHJlc3Npb24gfSwgeyBjbGVhbnVwOiBjbGVhbnVwMiB9KSA9PiB7XG4gIGlmIChzaG91bGRTa2lwUmVnaXN0ZXJpbmdEYXRhRHVyaW5nQ2xvbmUoZWwpKVxuICAgIHJldHVybjtcbiAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb24gPT09IFwiXCIgPyBcInt9XCIgOiBleHByZXNzaW9uO1xuICBsZXQgbWFnaWNDb250ZXh0ID0ge307XG4gIGluamVjdE1hZ2ljcyhtYWdpY0NvbnRleHQsIGVsKTtcbiAgbGV0IGRhdGFQcm92aWRlckNvbnRleHQgPSB7fTtcbiAgaW5qZWN0RGF0YVByb3ZpZGVycyhkYXRhUHJvdmlkZXJDb250ZXh0LCBtYWdpY0NvbnRleHQpO1xuICBsZXQgZGF0YTIgPSBldmFsdWF0ZShlbCwgZXhwcmVzc2lvbiwgeyBzY29wZTogZGF0YVByb3ZpZGVyQ29udGV4dCB9KTtcbiAgaWYgKGRhdGEyID09PSB2b2lkIDAgfHwgZGF0YTIgPT09IHRydWUpXG4gICAgZGF0YTIgPSB7fTtcbiAgaW5qZWN0TWFnaWNzKGRhdGEyLCBlbCk7XG4gIGxldCByZWFjdGl2ZURhdGEgPSByZWFjdGl2ZShkYXRhMik7XG4gIGluaXRJbnRlcmNlcHRvcnMyKHJlYWN0aXZlRGF0YSk7XG4gIGxldCB1bmRvID0gYWRkU2NvcGVUb05vZGUoZWwsIHJlYWN0aXZlRGF0YSk7XG4gIHJlYWN0aXZlRGF0YVtcImluaXRcIl0gJiYgZXZhbHVhdGUoZWwsIHJlYWN0aXZlRGF0YVtcImluaXRcIl0pO1xuICBjbGVhbnVwMigoKSA9PiB7XG4gICAgcmVhY3RpdmVEYXRhW1wiZGVzdHJveVwiXSAmJiBldmFsdWF0ZShlbCwgcmVhY3RpdmVEYXRhW1wiZGVzdHJveVwiXSk7XG4gICAgdW5kbygpO1xuICB9KTtcbn0pO1xuaW50ZXJjZXB0Q2xvbmUoKGZyb20sIHRvKSA9PiB7XG4gIGlmIChmcm9tLl94X2RhdGFTdGFjaykge1xuICAgIHRvLl94X2RhdGFTdGFjayA9IGZyb20uX3hfZGF0YVN0YWNrO1xuICAgIHRvLnNldEF0dHJpYnV0ZShcImRhdGEtaGFzLWFscGluZS1zdGF0ZVwiLCB0cnVlKTtcbiAgfVxufSk7XG5mdW5jdGlvbiBzaG91bGRTa2lwUmVnaXN0ZXJpbmdEYXRhRHVyaW5nQ2xvbmUoZWwpIHtcbiAgaWYgKCFpc0Nsb25pbmcpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBpZiAoaXNDbG9uaW5nTGVnYWN5KVxuICAgIHJldHVybiB0cnVlO1xuICByZXR1cm4gZWwuaGFzQXR0cmlidXRlKFwiZGF0YS1oYXMtYWxwaW5lLXN0YXRlXCIpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LXNob3cuanNcbmRpcmVjdGl2ZShcInNob3dcIiwgKGVsLCB7IG1vZGlmaWVycywgZXhwcmVzc2lvbiB9LCB7IGVmZmVjdDogZWZmZWN0MyB9KSA9PiB7XG4gIGxldCBldmFsdWF0ZTIgPSBldmFsdWF0ZUxhdGVyKGVsLCBleHByZXNzaW9uKTtcbiAgaWYgKCFlbC5feF9kb0hpZGUpXG4gICAgZWwuX3hfZG9IaWRlID0gKCkgPT4ge1xuICAgICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoXCJkaXNwbGF5XCIsIFwibm9uZVwiLCBtb2RpZmllcnMuaW5jbHVkZXMoXCJpbXBvcnRhbnRcIikgPyBcImltcG9ydGFudFwiIDogdm9pZCAwKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIGlmICghZWwuX3hfZG9TaG93KVxuICAgIGVsLl94X2RvU2hvdyA9ICgpID0+IHtcbiAgICAgIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgICAgIGlmIChlbC5zdHlsZS5sZW5ndGggPT09IDEgJiYgZWwuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImRpc3BsYXlcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gIGxldCBoaWRlID0gKCkgPT4ge1xuICAgIGVsLl94X2RvSGlkZSgpO1xuICAgIGVsLl94X2lzU2hvd24gPSBmYWxzZTtcbiAgfTtcbiAgbGV0IHNob3cgPSAoKSA9PiB7XG4gICAgZWwuX3hfZG9TaG93KCk7XG4gICAgZWwuX3hfaXNTaG93biA9IHRydWU7XG4gIH07XG4gIGxldCBjbGlja0F3YXlDb21wYXRpYmxlU2hvdyA9ICgpID0+IHNldFRpbWVvdXQoc2hvdyk7XG4gIGxldCB0b2dnbGUgPSBvbmNlKFxuICAgICh2YWx1ZSkgPT4gdmFsdWUgPyBzaG93KCkgOiBoaWRlKCksXG4gICAgKHZhbHVlKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGVsLl94X3RvZ2dsZUFuZENhc2NhZGVXaXRoVHJhbnNpdGlvbnMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBlbC5feF90b2dnbGVBbmRDYXNjYWRlV2l0aFRyYW5zaXRpb25zKGVsLCB2YWx1ZSwgc2hvdywgaGlkZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA/IGNsaWNrQXdheUNvbXBhdGlibGVTaG93KCkgOiBoaWRlKCk7XG4gICAgICB9XG4gICAgfVxuICApO1xuICBsZXQgb2xkVmFsdWU7XG4gIGxldCBmaXJzdFRpbWUgPSB0cnVlO1xuICBlZmZlY3QzKCgpID0+IGV2YWx1YXRlMigodmFsdWUpID0+IHtcbiAgICBpZiAoIWZpcnN0VGltZSAmJiB2YWx1ZSA9PT0gb2xkVmFsdWUpXG4gICAgICByZXR1cm47XG4gICAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImltbWVkaWF0ZVwiKSlcbiAgICAgIHZhbHVlID8gY2xpY2tBd2F5Q29tcGF0aWJsZVNob3coKSA6IGhpZGUoKTtcbiAgICB0b2dnbGUodmFsdWUpO1xuICAgIG9sZFZhbHVlID0gdmFsdWU7XG4gICAgZmlyc3RUaW1lID0gZmFsc2U7XG4gIH0pKTtcbn0pO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWZvci5qc1xuZGlyZWN0aXZlKFwiZm9yXCIsIChlbCwgeyBleHByZXNzaW9uIH0sIHsgZWZmZWN0OiBlZmZlY3QzLCBjbGVhbnVwOiBjbGVhbnVwMiB9KSA9PiB7XG4gIGxldCBpdGVyYXRvck5hbWVzID0gcGFyc2VGb3JFeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuICBsZXQgZXZhbHVhdGVJdGVtcyA9IGV2YWx1YXRlTGF0ZXIoZWwsIGl0ZXJhdG9yTmFtZXMuaXRlbXMpO1xuICBsZXQgZXZhbHVhdGVLZXkgPSBldmFsdWF0ZUxhdGVyKFxuICAgIGVsLFxuICAgIC8vIHRoZSB4LWJpbmQ6a2V5IGV4cHJlc3Npb24gaXMgc3RvcmVkIGZvciBvdXIgdXNlIGluc3RlYWQgb2YgZXZhbHVhdGVkLlxuICAgIGVsLl94X2tleUV4cHJlc3Npb24gfHwgXCJpbmRleFwiXG4gICk7XG4gIGVsLl94X3ByZXZLZXlzID0gW107XG4gIGVsLl94X2xvb2t1cCA9IHt9O1xuICBlZmZlY3QzKCgpID0+IGxvb3AoZWwsIGl0ZXJhdG9yTmFtZXMsIGV2YWx1YXRlSXRlbXMsIGV2YWx1YXRlS2V5KSk7XG4gIGNsZWFudXAyKCgpID0+IHtcbiAgICBPYmplY3QudmFsdWVzKGVsLl94X2xvb2t1cCkuZm9yRWFjaCgoZWwyKSA9PiBlbDIucmVtb3ZlKCkpO1xuICAgIGRlbGV0ZSBlbC5feF9wcmV2S2V5cztcbiAgICBkZWxldGUgZWwuX3hfbG9va3VwO1xuICB9KTtcbn0pO1xuZnVuY3Rpb24gbG9vcChlbCwgaXRlcmF0b3JOYW1lcywgZXZhbHVhdGVJdGVtcywgZXZhbHVhdGVLZXkpIHtcbiAgbGV0IGlzT2JqZWN0MiA9IChpKSA9PiB0eXBlb2YgaSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShpKTtcbiAgbGV0IHRlbXBsYXRlRWwgPSBlbDtcbiAgZXZhbHVhdGVJdGVtcygoaXRlbXMpID0+IHtcbiAgICBpZiAoaXNOdW1lcmljMyhpdGVtcykgJiYgaXRlbXMgPj0gMCkge1xuICAgICAgaXRlbXMgPSBBcnJheS5mcm9tKEFycmF5KGl0ZW1zKS5rZXlzKCksIChpKSA9PiBpICsgMSk7XG4gICAgfVxuICAgIGlmIChpdGVtcyA9PT0gdm9pZCAwKVxuICAgICAgaXRlbXMgPSBbXTtcbiAgICBsZXQgbG9va3VwID0gZWwuX3hfbG9va3VwO1xuICAgIGxldCBwcmV2S2V5cyA9IGVsLl94X3ByZXZLZXlzO1xuICAgIGxldCBzY29wZXMgPSBbXTtcbiAgICBsZXQga2V5cyA9IFtdO1xuICAgIGlmIChpc09iamVjdDIoaXRlbXMpKSB7XG4gICAgICBpdGVtcyA9IE9iamVjdC5lbnRyaWVzKGl0ZW1zKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBsZXQgc2NvcGUyID0gZ2V0SXRlcmF0aW9uU2NvcGVWYXJpYWJsZXMoaXRlcmF0b3JOYW1lcywgdmFsdWUsIGtleSwgaXRlbXMpO1xuICAgICAgICBldmFsdWF0ZUtleSgodmFsdWUyKSA9PiBrZXlzLnB1c2godmFsdWUyKSwgeyBzY29wZTogeyBpbmRleDoga2V5LCAuLi5zY29wZTIgfSB9KTtcbiAgICAgICAgc2NvcGVzLnB1c2goc2NvcGUyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzY29wZTIgPSBnZXRJdGVyYXRpb25TY29wZVZhcmlhYmxlcyhpdGVyYXRvck5hbWVzLCBpdGVtc1tpXSwgaSwgaXRlbXMpO1xuICAgICAgICBldmFsdWF0ZUtleSgodmFsdWUpID0+IGtleXMucHVzaCh2YWx1ZSksIHsgc2NvcGU6IHsgaW5kZXg6IGksIC4uLnNjb3BlMiB9IH0pO1xuICAgICAgICBzY29wZXMucHVzaChzY29wZTIpO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgYWRkcyA9IFtdO1xuICAgIGxldCBtb3ZlcyA9IFtdO1xuICAgIGxldCByZW1vdmVzID0gW107XG4gICAgbGV0IHNhbWVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmV2S2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGtleSA9IHByZXZLZXlzW2ldO1xuICAgICAgaWYgKGtleXMuaW5kZXhPZihrZXkpID09PSAtMSlcbiAgICAgICAgcmVtb3Zlcy5wdXNoKGtleSk7XG4gICAgfVxuICAgIHByZXZLZXlzID0gcHJldktleXMuZmlsdGVyKChrZXkpID0+ICFyZW1vdmVzLmluY2x1ZGVzKGtleSkpO1xuICAgIGxldCBsYXN0S2V5ID0gXCJ0ZW1wbGF0ZVwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICBsZXQgcHJldkluZGV4ID0gcHJldktleXMuaW5kZXhPZihrZXkpO1xuICAgICAgaWYgKHByZXZJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgcHJldktleXMuc3BsaWNlKGksIDAsIGtleSk7XG4gICAgICAgIGFkZHMucHVzaChbbGFzdEtleSwgaV0pO1xuICAgICAgfSBlbHNlIGlmIChwcmV2SW5kZXggIT09IGkpIHtcbiAgICAgICAgbGV0IGtleUluU3BvdCA9IHByZXZLZXlzLnNwbGljZShpLCAxKVswXTtcbiAgICAgICAgbGV0IGtleUZvclNwb3QgPSBwcmV2S2V5cy5zcGxpY2UocHJldkluZGV4IC0gMSwgMSlbMF07XG4gICAgICAgIHByZXZLZXlzLnNwbGljZShpLCAwLCBrZXlGb3JTcG90KTtcbiAgICAgICAgcHJldktleXMuc3BsaWNlKHByZXZJbmRleCwgMCwga2V5SW5TcG90KTtcbiAgICAgICAgbW92ZXMucHVzaChba2V5SW5TcG90LCBrZXlGb3JTcG90XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzYW1lcy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgICBsYXN0S2V5ID0ga2V5O1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbW92ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSByZW1vdmVzW2ldO1xuICAgICAgaWYgKCEhbG9va3VwW2tleV0uX3hfZWZmZWN0cykge1xuICAgICAgICBsb29rdXBba2V5XS5feF9lZmZlY3RzLmZvckVhY2goZGVxdWV1ZUpvYik7XG4gICAgICB9XG4gICAgICBsb29rdXBba2V5XS5yZW1vdmUoKTtcbiAgICAgIGxvb2t1cFtrZXldID0gbnVsbDtcbiAgICAgIGRlbGV0ZSBsb29rdXBba2V5XTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3Zlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IFtrZXlJblNwb3QsIGtleUZvclNwb3RdID0gbW92ZXNbaV07XG4gICAgICBsZXQgZWxJblNwb3QgPSBsb29rdXBba2V5SW5TcG90XTtcbiAgICAgIGxldCBlbEZvclNwb3QgPSBsb29rdXBba2V5Rm9yU3BvdF07XG4gICAgICBsZXQgbWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgICAgIGlmICghZWxGb3JTcG90KVxuICAgICAgICAgIHdhcm4oYHgtZm9yIFwiOmtleVwiIGlzIHVuZGVmaW5lZCBvciBpbnZhbGlkYCwgdGVtcGxhdGVFbCk7XG4gICAgICAgIGVsRm9yU3BvdC5hZnRlcihtYXJrZXIpO1xuICAgICAgICBlbEluU3BvdC5hZnRlcihlbEZvclNwb3QpO1xuICAgICAgICBlbEZvclNwb3QuX3hfY3VycmVudElmRWwgJiYgZWxGb3JTcG90LmFmdGVyKGVsRm9yU3BvdC5feF9jdXJyZW50SWZFbCk7XG4gICAgICAgIG1hcmtlci5iZWZvcmUoZWxJblNwb3QpO1xuICAgICAgICBlbEluU3BvdC5feF9jdXJyZW50SWZFbCAmJiBlbEluU3BvdC5hZnRlcihlbEluU3BvdC5feF9jdXJyZW50SWZFbCk7XG4gICAgICAgIG1hcmtlci5yZW1vdmUoKTtcbiAgICAgIH0pO1xuICAgICAgZWxGb3JTcG90Ll94X3JlZnJlc2hYRm9yU2NvcGUoc2NvcGVzW2tleXMuaW5kZXhPZihrZXlGb3JTcG90KV0pO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBbbGFzdEtleTIsIGluZGV4XSA9IGFkZHNbaV07XG4gICAgICBsZXQgbGFzdEVsID0gbGFzdEtleTIgPT09IFwidGVtcGxhdGVcIiA/IHRlbXBsYXRlRWwgOiBsb29rdXBbbGFzdEtleTJdO1xuICAgICAgaWYgKGxhc3RFbC5feF9jdXJyZW50SWZFbClcbiAgICAgICAgbGFzdEVsID0gbGFzdEVsLl94X2N1cnJlbnRJZkVsO1xuICAgICAgbGV0IHNjb3BlMiA9IHNjb3Blc1tpbmRleF07XG4gICAgICBsZXQga2V5ID0ga2V5c1tpbmRleF07XG4gICAgICBsZXQgY2xvbmUyID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZUVsLmNvbnRlbnQsIHRydWUpLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgbGV0IHJlYWN0aXZlU2NvcGUgPSByZWFjdGl2ZShzY29wZTIpO1xuICAgICAgYWRkU2NvcGVUb05vZGUoY2xvbmUyLCByZWFjdGl2ZVNjb3BlLCB0ZW1wbGF0ZUVsKTtcbiAgICAgIGNsb25lMi5feF9yZWZyZXNoWEZvclNjb3BlID0gKG5ld1Njb3BlKSA9PiB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKG5ld1Njb3BlKS5mb3JFYWNoKChba2V5MiwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgcmVhY3RpdmVTY29wZVtrZXkyXSA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgICBsYXN0RWwuYWZ0ZXIoY2xvbmUyKTtcbiAgICAgICAgaW5pdFRyZWUoY2xvbmUyKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHR5cGVvZiBrZXkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgd2FybihcIngtZm9yIGtleSBjYW5ub3QgYmUgYW4gb2JqZWN0LCBpdCBtdXN0IGJlIGEgc3RyaW5nIG9yIGFuIGludGVnZXJcIiwgdGVtcGxhdGVFbCk7XG4gICAgICB9XG4gICAgICBsb29rdXBba2V5XSA9IGNsb25lMjtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgbG9va3VwW3NhbWVzW2ldXS5feF9yZWZyZXNoWEZvclNjb3BlKHNjb3Blc1trZXlzLmluZGV4T2Yoc2FtZXNbaV0pXSk7XG4gICAgfVxuICAgIHRlbXBsYXRlRWwuX3hfcHJldktleXMgPSBrZXlzO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHBhcnNlRm9yRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gIGxldCBmb3JJdGVyYXRvclJFID0gLywoW14sXFx9XFxdXSopKD86LChbXixcXH1cXF1dKikpPyQvO1xuICBsZXQgc3RyaXBQYXJlbnNSRSA9IC9eXFxzKlxcKHxcXClcXHMqJC9nO1xuICBsZXQgZm9yQWxpYXNSRSA9IC8oW1xcc1xcU10qPylcXHMrKD86aW58b2YpXFxzKyhbXFxzXFxTXSopLztcbiAgbGV0IGluTWF0Y2ggPSBleHByZXNzaW9uLm1hdGNoKGZvckFsaWFzUkUpO1xuICBpZiAoIWluTWF0Y2gpXG4gICAgcmV0dXJuO1xuICBsZXQgcmVzID0ge307XG4gIHJlcy5pdGVtcyA9IGluTWF0Y2hbMl0udHJpbSgpO1xuICBsZXQgaXRlbSA9IGluTWF0Y2hbMV0ucmVwbGFjZShzdHJpcFBhcmVuc1JFLCBcIlwiKS50cmltKCk7XG4gIGxldCBpdGVyYXRvck1hdGNoID0gaXRlbS5tYXRjaChmb3JJdGVyYXRvclJFKTtcbiAgaWYgKGl0ZXJhdG9yTWF0Y2gpIHtcbiAgICByZXMuaXRlbSA9IGl0ZW0ucmVwbGFjZShmb3JJdGVyYXRvclJFLCBcIlwiKS50cmltKCk7XG4gICAgcmVzLmluZGV4ID0gaXRlcmF0b3JNYXRjaFsxXS50cmltKCk7XG4gICAgaWYgKGl0ZXJhdG9yTWF0Y2hbMl0pIHtcbiAgICAgIHJlcy5jb2xsZWN0aW9uID0gaXRlcmF0b3JNYXRjaFsyXS50cmltKCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcy5pdGVtID0gaXRlbTtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuZnVuY3Rpb24gZ2V0SXRlcmF0aW9uU2NvcGVWYXJpYWJsZXMoaXRlcmF0b3JOYW1lcywgaXRlbSwgaW5kZXgsIGl0ZW1zKSB7XG4gIGxldCBzY29wZVZhcmlhYmxlcyA9IHt9O1xuICBpZiAoL15cXFsuKlxcXSQvLnRlc3QoaXRlcmF0b3JOYW1lcy5pdGVtKSAmJiBBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG4gICAgbGV0IG5hbWVzID0gaXRlcmF0b3JOYW1lcy5pdGVtLnJlcGxhY2UoXCJbXCIsIFwiXCIpLnJlcGxhY2UoXCJdXCIsIFwiXCIpLnNwbGl0KFwiLFwiKS5tYXAoKGkpID0+IGkudHJpbSgpKTtcbiAgICBuYW1lcy5mb3JFYWNoKChuYW1lLCBpKSA9PiB7XG4gICAgICBzY29wZVZhcmlhYmxlc1tuYW1lXSA9IGl0ZW1baV07XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoL15cXHsuKlxcfSQvLnRlc3QoaXRlcmF0b3JOYW1lcy5pdGVtKSAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSAmJiB0eXBlb2YgaXRlbSA9PT0gXCJvYmplY3RcIikge1xuICAgIGxldCBuYW1lcyA9IGl0ZXJhdG9yTmFtZXMuaXRlbS5yZXBsYWNlKFwie1wiLCBcIlwiKS5yZXBsYWNlKFwifVwiLCBcIlwiKS5zcGxpdChcIixcIikubWFwKChpKSA9PiBpLnRyaW0oKSk7XG4gICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgc2NvcGVWYXJpYWJsZXNbbmFtZV0gPSBpdGVtW25hbWVdO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHNjb3BlVmFyaWFibGVzW2l0ZXJhdG9yTmFtZXMuaXRlbV0gPSBpdGVtO1xuICB9XG4gIGlmIChpdGVyYXRvck5hbWVzLmluZGV4KVxuICAgIHNjb3BlVmFyaWFibGVzW2l0ZXJhdG9yTmFtZXMuaW5kZXhdID0gaW5kZXg7XG4gIGlmIChpdGVyYXRvck5hbWVzLmNvbGxlY3Rpb24pXG4gICAgc2NvcGVWYXJpYWJsZXNbaXRlcmF0b3JOYW1lcy5jb2xsZWN0aW9uXSA9IGl0ZW1zO1xuICByZXR1cm4gc2NvcGVWYXJpYWJsZXM7XG59XG5mdW5jdGlvbiBpc051bWVyaWMzKHN1YmplY3QpIHtcbiAgcmV0dXJuICFBcnJheS5pc0FycmF5KHN1YmplY3QpICYmICFpc05hTihzdWJqZWN0KTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1yZWYuanNcbmZ1bmN0aW9uIGhhbmRsZXIzKCkge1xufVxuaGFuZGxlcjMuaW5saW5lID0gKGVsLCB7IGV4cHJlc3Npb24gfSwgeyBjbGVhbnVwOiBjbGVhbnVwMiB9KSA9PiB7XG4gIGxldCByb290ID0gY2xvc2VzdFJvb3QoZWwpO1xuICBpZiAoIXJvb3QuX3hfcmVmcylcbiAgICByb290Ll94X3JlZnMgPSB7fTtcbiAgcm9vdC5feF9yZWZzW2V4cHJlc3Npb25dID0gZWw7XG4gIGNsZWFudXAyKCgpID0+IGRlbGV0ZSByb290Ll94X3JlZnNbZXhwcmVzc2lvbl0pO1xufTtcbmRpcmVjdGl2ZShcInJlZlwiLCBoYW5kbGVyMyk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtaWYuanNcbmRpcmVjdGl2ZShcImlmXCIsIChlbCwgeyBleHByZXNzaW9uIH0sIHsgZWZmZWN0OiBlZmZlY3QzLCBjbGVhbnVwOiBjbGVhbnVwMiB9KSA9PiB7XG4gIGlmIChlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09IFwidGVtcGxhdGVcIilcbiAgICB3YXJuKFwieC1pZiBjYW4gb25seSBiZSB1c2VkIG9uIGEgPHRlbXBsYXRlPiB0YWdcIiwgZWwpO1xuICBsZXQgZXZhbHVhdGUyID0gZXZhbHVhdGVMYXRlcihlbCwgZXhwcmVzc2lvbik7XG4gIGxldCBzaG93ID0gKCkgPT4ge1xuICAgIGlmIChlbC5feF9jdXJyZW50SWZFbClcbiAgICAgIHJldHVybiBlbC5feF9jdXJyZW50SWZFbDtcbiAgICBsZXQgY2xvbmUyID0gZWwuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgYWRkU2NvcGVUb05vZGUoY2xvbmUyLCB7fSwgZWwpO1xuICAgIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgICBlbC5hZnRlcihjbG9uZTIpO1xuICAgICAgaW5pdFRyZWUoY2xvbmUyKTtcbiAgICB9KTtcbiAgICBlbC5feF9jdXJyZW50SWZFbCA9IGNsb25lMjtcbiAgICBlbC5feF91bmRvSWYgPSAoKSA9PiB7XG4gICAgICB3YWxrKGNsb25lMiwgKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKCEhbm9kZS5feF9lZmZlY3RzKSB7XG4gICAgICAgICAgbm9kZS5feF9lZmZlY3RzLmZvckVhY2goZGVxdWV1ZUpvYik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY2xvbmUyLnJlbW92ZSgpO1xuICAgICAgZGVsZXRlIGVsLl94X2N1cnJlbnRJZkVsO1xuICAgIH07XG4gICAgcmV0dXJuIGNsb25lMjtcbiAgfTtcbiAgbGV0IGhpZGUgPSAoKSA9PiB7XG4gICAgaWYgKCFlbC5feF91bmRvSWYpXG4gICAgICByZXR1cm47XG4gICAgZWwuX3hfdW5kb0lmKCk7XG4gICAgZGVsZXRlIGVsLl94X3VuZG9JZjtcbiAgfTtcbiAgZWZmZWN0MygoKSA9PiBldmFsdWF0ZTIoKHZhbHVlKSA9PiB7XG4gICAgdmFsdWUgPyBzaG93KCkgOiBoaWRlKCk7XG4gIH0pKTtcbiAgY2xlYW51cDIoKCkgPT4gZWwuX3hfdW5kb0lmICYmIGVsLl94X3VuZG9JZigpKTtcbn0pO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWlkLmpzXG5kaXJlY3RpdmUoXCJpZFwiLCAoZWwsIHsgZXhwcmVzc2lvbiB9LCB7IGV2YWx1YXRlOiBldmFsdWF0ZTIgfSkgPT4ge1xuICBsZXQgbmFtZXMgPSBldmFsdWF0ZTIoZXhwcmVzc2lvbik7XG4gIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHNldElkUm9vdChlbCwgbmFtZSkpO1xufSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtb24uanNcbm1hcEF0dHJpYnV0ZXMoc3RhcnRpbmdXaXRoKFwiQFwiLCBpbnRvKHByZWZpeChcIm9uOlwiKSkpKTtcbmRpcmVjdGl2ZShcIm9uXCIsIHNraXBEdXJpbmdDbG9uZSgoZWwsIHsgdmFsdWUsIG1vZGlmaWVycywgZXhwcmVzc2lvbiB9LCB7IGNsZWFudXA6IGNsZWFudXAyIH0pID0+IHtcbiAgbGV0IGV2YWx1YXRlMiA9IGV4cHJlc3Npb24gPyBldmFsdWF0ZUxhdGVyKGVsLCBleHByZXNzaW9uKSA6ICgpID0+IHtcbiAgfTtcbiAgaWYgKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJ0ZW1wbGF0ZVwiKSB7XG4gICAgaWYgKCFlbC5feF9mb3J3YXJkRXZlbnRzKVxuICAgICAgZWwuX3hfZm9yd2FyZEV2ZW50cyA9IFtdO1xuICAgIGlmICghZWwuX3hfZm9yd2FyZEV2ZW50cy5pbmNsdWRlcyh2YWx1ZSkpXG4gICAgICBlbC5feF9mb3J3YXJkRXZlbnRzLnB1c2godmFsdWUpO1xuICB9XG4gIGxldCByZW1vdmVMaXN0ZW5lciA9IG9uKGVsLCB2YWx1ZSwgbW9kaWZpZXJzLCAoZSkgPT4ge1xuICAgIGV2YWx1YXRlMigoKSA9PiB7XG4gICAgfSwgeyBzY29wZTogeyBcIiRldmVudFwiOiBlIH0sIHBhcmFtczogW2VdIH0pO1xuICB9KTtcbiAgY2xlYW51cDIoKCkgPT4gcmVtb3ZlTGlzdGVuZXIoKSk7XG59KSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL2luZGV4LmpzXG53YXJuTWlzc2luZ1BsdWdpbkRpcmVjdGl2ZShcIkNvbGxhcHNlXCIsIFwiY29sbGFwc2VcIiwgXCJjb2xsYXBzZVwiKTtcbndhcm5NaXNzaW5nUGx1Z2luRGlyZWN0aXZlKFwiSW50ZXJzZWN0XCIsIFwiaW50ZXJzZWN0XCIsIFwiaW50ZXJzZWN0XCIpO1xud2Fybk1pc3NpbmdQbHVnaW5EaXJlY3RpdmUoXCJGb2N1c1wiLCBcInRyYXBcIiwgXCJmb2N1c1wiKTtcbndhcm5NaXNzaW5nUGx1Z2luRGlyZWN0aXZlKFwiTWFza1wiLCBcIm1hc2tcIiwgXCJtYXNrXCIpO1xuZnVuY3Rpb24gd2Fybk1pc3NpbmdQbHVnaW5EaXJlY3RpdmUobmFtZSwgZGlyZWN0aXZlTmFtZSwgc2x1Zykge1xuICBkaXJlY3RpdmUoZGlyZWN0aXZlTmFtZSwgKGVsKSA9PiB3YXJuKGBZb3UgY2FuJ3QgdXNlIFt4LSR7ZGlyZWN0aXZlTmFtZX1dIHdpdGhvdXQgZmlyc3QgaW5zdGFsbGluZyB0aGUgXCIke25hbWV9XCIgcGx1Z2luIGhlcmU6IGh0dHBzOi8vYWxwaW5lanMuZGV2L3BsdWdpbnMvJHtzbHVnfWAsIGVsKSk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9pbmRleC5qc1xuYWxwaW5lX2RlZmF1bHQuc2V0RXZhbHVhdG9yKG5vcm1hbEV2YWx1YXRvcik7XG5hbHBpbmVfZGVmYXVsdC5zZXRSZWFjdGl2aXR5RW5naW5lKHsgcmVhY3RpdmU6IHJlYWN0aXZlMiwgZWZmZWN0OiBlZmZlY3QyLCByZWxlYXNlOiBzdG9wLCByYXc6IHRvUmF3IH0pO1xudmFyIHNyY19kZWZhdWx0ID0gYWxwaW5lX2RlZmF1bHQ7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL2J1aWxkcy9tb2R1bGUuanNcbnZhciBtb2R1bGVfZGVmYXVsdCA9IHNyY19kZWZhdWx0O1xuZXhwb3J0IHtcbiAgbW9kdWxlX2RlZmF1bHQgYXMgZGVmYXVsdFxufTtcbiIsICIvLyBwYWNrYWdlcy9wZXJzaXN0L3NyYy9pbmRleC5qc1xuZnVuY3Rpb24gc3JjX2RlZmF1bHQoQWxwaW5lKSB7XG4gIGxldCBwZXJzaXN0ID0gKCkgPT4ge1xuICAgIGxldCBhbGlhcztcbiAgICBsZXQgc3RvcmFnZTtcbiAgICB0cnkge1xuICAgICAgc3RvcmFnZSA9IGxvY2FsU3RvcmFnZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgY29uc29sZS53YXJuKFwiQWxwaW5lOiAkcGVyc2lzdCBpcyB1c2luZyB0ZW1wb3Jhcnkgc3RvcmFnZSBzaW5jZSBsb2NhbFN0b3JhZ2UgaXMgdW5hdmFpbGFibGUuXCIpO1xuICAgICAgbGV0IGR1bW15ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgICAgIHN0b3JhZ2UgPSB7XG4gICAgICAgIGdldEl0ZW06IGR1bW15LmdldC5iaW5kKGR1bW15KSxcbiAgICAgICAgc2V0SXRlbTogZHVtbXkuc2V0LmJpbmQoZHVtbXkpXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gQWxwaW5lLmludGVyY2VwdG9yKChpbml0aWFsVmFsdWUsIGdldHRlciwgc2V0dGVyLCBwYXRoLCBrZXkpID0+IHtcbiAgICAgIGxldCBsb29rdXAgPSBhbGlhcyB8fCBgX3hfJHtwYXRofWA7XG4gICAgICBsZXQgaW5pdGlhbCA9IHN0b3JhZ2VIYXMobG9va3VwLCBzdG9yYWdlKSA/IHN0b3JhZ2VHZXQobG9va3VwLCBzdG9yYWdlKSA6IGluaXRpYWxWYWx1ZTtcbiAgICAgIHNldHRlcihpbml0aWFsKTtcbiAgICAgIEFscGluZS5lZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBnZXR0ZXIoKTtcbiAgICAgICAgc3RvcmFnZVNldChsb29rdXAsIHZhbHVlLCBzdG9yYWdlKTtcbiAgICAgICAgc2V0dGVyKHZhbHVlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGluaXRpYWw7XG4gICAgfSwgKGZ1bmMpID0+IHtcbiAgICAgIGZ1bmMuYXMgPSAoa2V5KSA9PiB7XG4gICAgICAgIGFsaWFzID0ga2V5O1xuICAgICAgICByZXR1cm4gZnVuYztcbiAgICAgIH0sIGZ1bmMudXNpbmcgPSAodGFyZ2V0KSA9PiB7XG4gICAgICAgIHN0b3JhZ2UgPSB0YXJnZXQ7XG4gICAgICAgIHJldHVybiBmdW5jO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFscGluZSwgXCIkcGVyc2lzdFwiLCB7IGdldDogKCkgPT4gcGVyc2lzdCgpIH0pO1xuICBBbHBpbmUubWFnaWMoXCJwZXJzaXN0XCIsIHBlcnNpc3QpO1xuICBBbHBpbmUucGVyc2lzdCA9IChrZXksIHsgZ2V0LCBzZXQgfSwgc3RvcmFnZSA9IGxvY2FsU3RvcmFnZSkgPT4ge1xuICAgIGxldCBpbml0aWFsID0gc3RvcmFnZUhhcyhrZXksIHN0b3JhZ2UpID8gc3RvcmFnZUdldChrZXksIHN0b3JhZ2UpIDogZ2V0KCk7XG4gICAgc2V0KGluaXRpYWwpO1xuICAgIEFscGluZS5lZmZlY3QoKCkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZ2V0KCk7XG4gICAgICBzdG9yYWdlU2V0KGtleSwgdmFsdWUsIHN0b3JhZ2UpO1xuICAgICAgc2V0KHZhbHVlKTtcbiAgICB9KTtcbiAgfTtcbn1cbmZ1bmN0aW9uIHN0b3JhZ2VIYXMoa2V5LCBzdG9yYWdlKSB7XG4gIHJldHVybiBzdG9yYWdlLmdldEl0ZW0oa2V5KSAhPT0gbnVsbDtcbn1cbmZ1bmN0aW9uIHN0b3JhZ2VHZXQoa2V5LCBzdG9yYWdlKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKHN0b3JhZ2UuZ2V0SXRlbShrZXksIHN0b3JhZ2UpKTtcbn1cbmZ1bmN0aW9uIHN0b3JhZ2VTZXQoa2V5LCB2YWx1ZSwgc3RvcmFnZSkge1xuICBzdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xufVxuXG4vLyBwYWNrYWdlcy9wZXJzaXN0L2J1aWxkcy9tb2R1bGUuanNcbnZhciBtb2R1bGVfZGVmYXVsdCA9IHNyY19kZWZhdWx0O1xuZXhwb3J0IHtcbiAgbW9kdWxlX2RlZmF1bHQgYXMgZGVmYXVsdFxufTtcbiIsICJpbXBvcnQgQWxwaW5lIGZyb20gJ2FscGluZWpzJ1xuaW1wb3J0IHBlcnNpc3QgZnJvbSAnQGFscGluZWpzL3BlcnNpc3QnXG5pbXBvcnQgSHRteCBmcm9tICdodG14Lm9yZydcbndpbmRvdy5IdG14ID0gSHRteFxud2luZG93LkFscGluZSA9IEFscGluZVxuQWxwaW5lLnBsdWdpbihwZXJzaXN0KVxuQWxwaW5lLnN0b3JlKCdsZW1tYXJpbycsIHsgXCJvcmRlckJ5XCI6IEFscGluZS4kcGVyc2lzdChcInRpbWVcIikgfSk7XG5BbHBpbmUuc3RhcnQoKSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxPQUFDLFNBQVNBLElBQUVDLElBQUU7QUFBQyxZQUFHLE9BQU8sV0FBUyxjQUFZLE9BQU8sS0FBSTtBQUFDLGlCQUFPLENBQUMsR0FBRUEsRUFBQztBQUFBLFFBQUMsV0FBUyxPQUFPLFdBQVMsWUFBVSxPQUFPLFNBQVE7QUFBQyxpQkFBTyxVQUFRQSxHQUFFO0FBQUEsUUFBQyxPQUFLO0FBQUMsVUFBQUQsR0FBRSxPQUFLQSxHQUFFLFFBQU1DLEdBQUU7QUFBQSxRQUFDO0FBQUEsTUFBQyxHQUFHLE9BQU8sU0FBTyxjQUFZLE9BQUssU0FBSyxXQUFVO0FBQUMsZUFBTyxXQUFVO0FBQUM7QUFBYSxjQUFJLElBQUUsRUFBQyxRQUFPLEdBQUUsU0FBUSxJQUFHLElBQUcsSUFBRyxLQUFJLElBQUcsU0FBUSxJQUFHLE1BQUssSUFBRyxNQUFLLEdBQUUsU0FBUSxHQUFFLFNBQVEsR0FBRSxRQUFPLFNBQVNELElBQUVDLElBQUU7QUFBQyxn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cUJBQU87QUFBQSxZQUFJO0FBQUEsVUFBQztBQUFDLG1CQUFTLEVBQUVBLElBQUVDLElBQUU7QUFBQyxtQkFBT0QsR0FBRSxVQUFVLEdBQUVDLEdBQUUsTUFBTSxNQUFJQTtBQUFBLFVBQUM7QUFBQyxtQkFBUyxFQUFFRCxJQUFFQyxJQUFFO0FBQUMsbUJBQU9ELEdBQUUsVUFBVUEsR0FBRSxTQUFPQyxHQUFFLE1BQU0sTUFBSUE7QUFBQSxVQUFDO0FBQUMsbUJBQVMsRUFBRUQsSUFBRTtBQUFDLGdCQUFJQyxLQUFFRCxHQUFFLEtBQUs7QUFBRSxnQkFBRyxFQUFFQyxJQUFFLEdBQUcsS0FBRyxFQUFFQSxJQUFFLElBQUksR0FBRTtBQUFDLHFCQUFPQSxHQUFFLFVBQVUsR0FBRUEsR0FBRSxTQUFPLENBQUM7QUFBQSxZQUFDLE9BQUs7QUFBQyxxQkFBT0E7QUFBQSxZQUFDO0FBQUEsVUFBQztBQUFDLG1CQUFTLEVBQUVELElBQUVDLElBQUU7QUFBQyxnQkFBR0EsR0FBRSxRQUFRLFVBQVUsTUFBSSxHQUFFO0FBQUMscUJBQU0sQ0FBQyxFQUFFRCxJQUFFLEVBQUVDLEdBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQUEsWUFBQyxXQUFTQSxHQUFFLFFBQVEsT0FBTyxNQUFJLEdBQUU7QUFBQyxxQkFBTSxDQUFDLEVBQUVELElBQUUsRUFBRUMsR0FBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFBQSxZQUFDLFdBQVNBLE9BQUksUUFBTztBQUFDLHFCQUFNLENBQUNELEdBQUUsa0JBQWtCO0FBQUEsWUFBQyxXQUFTQyxHQUFFLFFBQVEsT0FBTyxNQUFJLEdBQUU7QUFBQyxxQkFBTSxDQUFDLEVBQUVELElBQUUsRUFBRUMsR0FBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFBQSxZQUFDLFdBQVNBLE9BQUksWUFBVztBQUFDLHFCQUFNLENBQUNELEdBQUUsc0JBQXNCO0FBQUEsWUFBQyxXQUFTQyxHQUFFLFFBQVEsV0FBVyxNQUFJLEdBQUU7QUFBQyxxQkFBTSxDQUFDLEVBQUVELElBQUUsRUFBRUMsR0FBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFBQSxZQUFDLFdBQVNBLE9BQUksWUFBVztBQUFDLHFCQUFNLENBQUMsUUFBUTtBQUFBLFlBQUMsV0FBU0EsT0FBSSxVQUFTO0FBQUMscUJBQU0sQ0FBQyxNQUFNO0FBQUEsWUFBQyxXQUFTQSxPQUFJLFFBQU87QUFBQyxxQkFBTSxDQUFDLFNBQVMsSUFBSTtBQUFBLFlBQUMsT0FBSztBQUFDLHFCQUFPLEdBQUcsRUFBRSxpQkFBaUIsRUFBRUEsRUFBQyxDQUFDO0FBQUEsWUFBQztBQUFBLFVBQUM7QUFBQyxjQUFJLElBQUUsU0FBU0QsSUFBRUMsSUFBRTtBQUFDLGdCQUFJQyxLQUFFLEdBQUcsRUFBRSxpQkFBaUJELEVBQUM7QUFBRSxxQkFBUUUsS0FBRSxHQUFFQSxLQUFFRCxHQUFFLFFBQU9DLE1BQUk7QUFBQyxrQkFBSUMsS0FBRUYsR0FBRUMsRUFBQztBQUFFLGtCQUFHQyxHQUFFLHdCQUF3QkosRUFBQyxNQUFJLEtBQUssNkJBQTRCO0FBQUMsdUJBQU9JO0FBQUEsY0FBQztBQUFBLFlBQUM7QUFBQSxVQUFDO0FBQUUsY0FBSSxJQUFFLFNBQVNKLElBQUVDLElBQUU7QUFBQyxnQkFBSUMsS0FBRSxHQUFHLEVBQUUsaUJBQWlCRCxFQUFDO0FBQUUscUJBQVFFLEtBQUVELEdBQUUsU0FBTyxHQUFFQyxNQUFHLEdBQUVBLE1BQUk7QUFBQyxrQkFBSUMsS0FBRUYsR0FBRUMsRUFBQztBQUFFLGtCQUFHQyxHQUFFLHdCQUF3QkosRUFBQyxNQUFJLEtBQUssNkJBQTRCO0FBQUMsdUJBQU9JO0FBQUEsY0FBQztBQUFBLFlBQUM7QUFBQSxVQUFDO0FBQUUsbUJBQVMsR0FBR0osSUFBRUMsSUFBRTtBQUFDLGdCQUFHQSxJQUFFO0FBQUMscUJBQU8sRUFBRUQsSUFBRUMsRUFBQyxFQUFFLENBQUM7QUFBQSxZQUFDLE9BQUs7QUFBQyxxQkFBTyxFQUFFLEdBQUcsRUFBRSxNQUFLRCxFQUFDLEVBQUUsQ0FBQztBQUFBLFlBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsRUFBRUEsSUFBRTtBQUFDLGdCQUFHLEVBQUVBLElBQUUsUUFBUSxHQUFFO0FBQUMscUJBQU8sRUFBRUEsRUFBQztBQUFBLFlBQUMsT0FBSztBQUFDLHFCQUFPQTtBQUFBLFlBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0EsSUFBRUMsSUFBRUMsSUFBRTtBQUFDLGdCQUFHLEVBQUVELEVBQUMsR0FBRTtBQUFDLHFCQUFNLEVBQUMsUUFBTyxHQUFHLEVBQUUsTUFBSyxPQUFNRCxJQUFFLFVBQVNDLEdBQUM7QUFBQSxZQUFDLE9BQUs7QUFBQyxxQkFBTSxFQUFDLFFBQU8sRUFBRUQsRUFBQyxHQUFFLE9BQU1DLElBQUUsVUFBU0MsR0FBQztBQUFBLFlBQUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0QsSUFBRUMsSUFBRUMsSUFBRTtBQUFDLGVBQUcsV0FBVTtBQUFDLGtCQUFJSCxLQUFFLEdBQUdDLElBQUVDLElBQUVDLEVBQUM7QUFBRSxjQUFBSCxHQUFFLE9BQU8saUJBQWlCQSxHQUFFLE9BQU1BLEdBQUUsUUFBUTtBQUFBLFlBQUMsQ0FBQztBQUFFLGdCQUFJQSxLQUFFLEVBQUVFLEVBQUM7QUFBRSxtQkFBT0YsS0FBRUUsS0FBRUM7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0YsSUFBRUMsSUFBRUMsSUFBRTtBQUFDLGVBQUcsV0FBVTtBQUFDLGtCQUFJSCxLQUFFLEdBQUdDLElBQUVDLElBQUVDLEVBQUM7QUFBRSxjQUFBSCxHQUFFLE9BQU8sb0JBQW9CQSxHQUFFLE9BQU1BLEdBQUUsUUFBUTtBQUFBLFlBQUMsQ0FBQztBQUFFLG1CQUFPLEVBQUVFLEVBQUMsSUFBRUEsS0FBRUM7QUFBQSxVQUFDO0FBQUMsY0FBSSxLQUFHLEdBQUcsRUFBRSxjQUFjLFFBQVE7QUFBRSxtQkFBUyxHQUFHSCxJQUFFQyxJQUFFO0FBQUMsZ0JBQUlDLEtBQUUsR0FBR0YsSUFBRUMsRUFBQztBQUFFLGdCQUFHQyxJQUFFO0FBQUMsa0JBQUdBLE9BQUksUUFBTztBQUFDLHVCQUFN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QUFHQSxJQUFFO0FBQUMsZ0JBQUlDLEtBQUU7QUFBRyxxQkFBUUMsTUFBS0YsSUFBRTtBQUFDLGtCQUFHQSxHQUFFLGVBQWVFLEVBQUMsR0FBRTtBQUFDLG9CQUFJQyxLQUFFSCxHQUFFRSxFQUFDO0FBQUUsb0JBQUcsTUFBTSxRQUFRQyxFQUFDLEdBQUU7QUFBQyxxQkFBR0EsSUFBRSxTQUFTSCxJQUFFO0FBQUMsb0JBQUFDLEtBQUUsR0FBR0EsSUFBRUMsSUFBRUYsRUFBQztBQUFBLGtCQUFDLENBQUM7QUFBQSxnQkFBQyxPQUFLO0FBQUMsa0JBQUFDLEtBQUUsR0FBR0EsSUFBRUMsSUFBRUMsRUFBQztBQUFBLGdCQUFDO0FBQUEsY0FBQztBQUFBLFlBQUM7QUFBQyxtQkFBT0Y7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0QsSUFBRTtBQUFDLGdCQUFJQyxLQUFFLElBQUk7QUFBUyxxQkFBUUMsTUFBS0YsSUFBRTtBQUFDLGtCQUFHQSxHQUFFLGVBQWVFLEVBQUMsR0FBRTtBQUFDLG9CQUFJQyxLQUFFSCxHQUFFRSxFQUFDO0FBQUUsb0JBQUcsTUFBTSxRQUFRQyxFQUFDLEdBQUU7QUFBQyxxQkFBR0EsSUFBRSxTQUFTSCxJQUFFO0FBQUMsb0JBQUFDLEdBQUUsT0FBT0MsSUFBRUYsRUFBQztBQUFBLGtCQUFDLENBQUM7QUFBQSxnQkFBQyxPQUFLO0FBQUMsa0JBQUFDLEdBQUUsT0FBT0MsSUFBRUMsRUFBQztBQUFBLGdCQUFDO0FBQUEsY0FBQztBQUFBLFlBQUM7QUFBQyxtQkFBT0Y7QUFBQSxVQUFDO0FBQUMsbUJBQVMsR0FBR0QsSUFBRUMsSUFBRUMsSUFBRTtBQUFDLGdCQUFJQyxLQUFFLEVBQUMsY0FBYSxRQUFPLGNBQWEsR0FBR0gsSUFBRSxJQUFJLEdBQUUsbUJBQWtCLEdBQUdBLElBQUUsTUFBTSxHQUFFLGFBQVksR0FBR0MsSUFBRSxJQUFJLEdBQUUsa0JBQWlCLEdBQUcsRUFBRSxTQUFTLEtBQUk7QUFBRSxlQUFHRCxJQUFFLGNBQWEsT0FBTUcsRUFBQztBQUFFLGdCQUFHRCxPQUFJ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LGlCQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFDQSxXQUFPLGVBQWVBLFNBQVEsWUFBWSxFQUFFLEtBQUssTUFBTSxRQUFRLEVBQUUsQ0FBQztBQUNsRSxJQUFBQSxRQUFPLE1BQU0sV0FBVyxPQUFPO0FBQy9CLElBQUFBLFFBQU8sVUFBVSxDQUFDLEtBQUssRUFBRSxLQUFBRSxNQUFLLEtBQUFDLEtBQUksR0FBRyxVQUFVLGlCQUFpQjtBQUM5RCxVQUFJLFVBQVUsV0FBVyxLQUFLLE9BQU8sSUFBSSxXQUFXLEtBQUssT0FBTyxJQUFJRCxLQUFJO0FBQ3hFLE1BQUFDLEtBQUksT0FBTztBQUNYLE1BQUFILFFBQU8sT0FBTyxNQUFNO0FBQ2xCLFlBQUksUUFBUUUsS0FBSTtBQUNoQixtQkFBVyxLQUFLLE9BQU8sT0FBTztBQUM5QixRQUFBQyxLQUFJLEtBQUs7QUFBQSxNQUNYLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUNBLFdBQVMsV0FBVyxLQUFLLFNBQVM7QUFDaEMsV0FBTyxRQUFRLFFBQVEsR0FBRyxNQUFNO0FBQUEsRUFDbEM7QUFDQSxXQUFTLFdBQVcsS0FBSyxTQUFTO0FBQ2hDLFdBQU8sS0FBSyxNQUFNLFFBQVEsUUFBUSxLQUFLLE9BQU8sQ0FBQztBQUFBLEVBQ2pEO0FBQ0EsV0FBUyxXQUFXLEtBQUssT0FBTyxTQUFTO0FBQ3ZDLFlBQVEsUUFBUSxLQUFLLEtBQUssVUFBVSxLQUFLLENBQUM7QUFBQSxFQUM1QztBQUdBLE1BQUlDLGtCQUFpQkw7OztBQ3pEckIsb0JBQWlCO0FBQ2pCLFNBQU8sT0FBTyxZQUFBTTtBQUNkLFNBQU8sU0FBUztBQUNoQixpQkFBTyxPQUFPQyxlQUFPO0FBQ3JCLGlCQUFPLE1BQU0sWUFBWSxFQUFFLFdBQVcsZUFBTyxTQUFTLE1BQU0sRUFBRSxDQUFDO0FBQy9ELGlCQUFPLE1BQU07IiwKICAibmFtZXMiOiBbImUiLCAidCIsICJyIiwgIm4iLCAiaSIsICJhIiwgIm8iLCAicyIsICJsIiwgInUiLCAiZiIsICJjIiwgImgiLCAidiIsICJNIiwgIlgiLCAiZCIsICJEIiwgIlUiLCAiZyIsICJtIiwgInAiLCAieCIsICJCIiwgIkYiLCAiViIsICJ5IiwgImIiLCAidyIsICJqIiwgIlMiLCAiRSIsICJfIiwgIkMiLCAiUiIsICJ6IiwgIiQiLCAiVCIsICJPIiwgIlciLCAicSIsICJIIiwgIkciLCAiSiIsICJMIiwgIkEiLCAiWiIsICJOIiwgIksiLCAiSSIsICJrIiwgIlAiLCAiWSIsICJpIiwgImUiLCAiYSIsICJiIiwgIl8iLCAiYyIsICJsIiwgInYiLCAiciIsICJzcmNfZGVmYXVsdCIsICJBbHBpbmUiLCAiZSIsICJnZXQiLCAic2V0IiwgIm1vZHVsZV9kZWZhdWx0IiwgIkh0bXgiLCAibW9kdWxlX2RlZmF1bHQiXQp9Cg==
