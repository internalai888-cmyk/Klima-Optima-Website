/**
 * KLIMA OPTIMA — Resilience Module
 * Load early in <head>:  <script src="resilience.js"></script>
 *
 * Keeps a page usable when something fails:
 *  1. Global error + promise-rejection trapping (no silent dead page)
 *  2. CDN fallback — retries React/ReactDOM/Babel from a second CDN
 *  3. Blank-screen watchdog — shows a branded recovery panel if #root never fills
 *  4. Image failure fallback — a broken image never leaves a torn layout
 *  5. Safe storage access — quota/private-mode errors can't halt a script
 */
(function () {
  "use strict";

  var FALLBACK_SHOWN = false;
  var ERRORS = [];

  /* ── 1. TRAP EVERYTHING ─────────────────────────────────────*/
  window.addEventListener("error", function (e) {
    if (e && e.target && e.target.tagName === "IMG") return; // handled in §4
    ERRORS.push((e && e.message) || "script error");
  }, true);

  window.addEventListener("unhandledrejection", function (e) {
    ERRORS.push("promise: " + ((e && e.reason && e.reason.message) || e.reason || "unknown"));
  });

  /* ── 2. CDN FALLBACK ────────────────────────────────────────
     If unpkg is blocked, slow, or down, pull the same pinned
     versions from jsDelivr and re-run the JSX transform. */
  var MIRROR = "https://cdn.jsdelivr.net/npm/";
  var NEEDED = [
    { test: function () { return window.React; },        src: "react@18.3.1/umd/react.development.js" },
    { test: function () { return window.ReactDOM; },     src: "react-dom@18.3.1/umd/react-dom.development.js" },
    { test: function () { return window.Babel; },        src: "@babel/standalone@7.29.0/babel.min.js" }
  ];

  function loadSequential(list, done) {
    if (!list.length) { done(); return; }
    var item = list.shift();
    if (item.test()) { loadSequential(list, done); return; }
    var s = document.createElement("script");
    s.src = MIRROR + item.src;
    s.crossOrigin = "anonymous";
    s.onload = function () { loadSequential(list, done); };
    s.onerror = function () { loadSequential(list, done); };
    document.head.appendChild(s);
  }

  function recoverFromCdnFailure() {
    var missing = NEEDED.filter(function (n) { return !n.test(); });
    if (!missing.length) return false;
    loadSequential(missing.slice(), function () {
      try {
        if (window.Babel && Babel.transformScriptTags) Babel.transformScriptTags();
      } catch (err) { ERRORS.push("retransform: " + err.message); }
    });
    return true;
  }

  /* ── 3. BLANK-SCREEN WATCHDOG ───────────────────────────────*/
  function rootIsEmpty() {
    var root = document.getElementById("root");
    return !root || root.children.length === 0;
  }

  function showFallback() {
    if (FALLBACK_SHOWN || !rootIsEmpty()) return;
    FALLBACK_SHOWN = true;
    var host = document.getElementById("root") || document.body;
    var wrap = document.createElement("div");
    wrap.setAttribute("role", "alert");
    wrap.style.cssText = "min-height:100vh;display:flex;align-items:center;justify-content:center;padding:40px;background:linear-gradient(135deg,#030B14,#04111F 60%,#061728);font-family:'Manrope',system-ui,sans-serif;color:#fff";
    wrap.innerHTML =
      '<div style="max-width:520px;text-align:center;border-radius:30px;border:1px solid rgba(110,216,255,0.18);background:rgba(255,255,255,0.045);backdrop-filter:blur(20px);box-shadow:0 24px 90px rgba(0,0,0,0.36);padding:44px 36px">' +
        '<div style="font-size:12px;font-weight:900;letter-spacing:0.22em;text-transform:uppercase;color:#6ED8FF;margin-bottom:18px">Connection Interrupted</div>' +
        '<h1 style="font-family:\'Inter Tight\',system-ui,sans-serif;font-weight:900;letter-spacing:-0.02em;line-height:1.05;font-size:34px;margin:0 0 16px">This Page Did Not Finish <span style="background:linear-gradient(90deg,#18B7FF,#9EEBFF);-webkit-background-clip:text;background-clip:text;color:transparent">Loading</span></h1>' +
        '<p style="font-size:15px;line-height:1.6;color:rgba(255,255,255,0.76);margin:0 0 28px">A network interruption stopped part of this page from loading. Reloading usually resolves it.</p>' +
        '<div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">' +
          '<button type="button" id="ko-reload" style="cursor:pointer;border:none;border-radius:9999px;padding:14px 26px;font-family:\'Inter Tight\',system-ui,sans-serif;font-weight:700;font-size:14px;color:#fff;background:linear-gradient(90deg,#0E8ED0,#18B7FF);box-shadow:0 0 38px rgba(24,183,255,0.32)">Reload Page</button>' +
          '<a href="contact.html" style="text-decoration:none;border-radius:9999px;padding:14px 26px;font-family:\'Inter Tight\',system-ui,sans-serif;font-weight:700;font-size:14px;color:#fff;background:rgba(255,255,255,0.045);border:1px solid rgba(110,216,255,0.18)">Contact Us</a>' +
        '</div>' +
      '</div>';
    if (host === document.body) host.appendChild(wrap); else host.replaceChildren(wrap);
    var btn = document.getElementById("ko-reload");
    if (btn) btn.addEventListener("click", function () { location.reload(); });
  }

  function watchdog() {
    if (!rootIsEmpty()) return;
    var retried = recoverFromCdnFailure();
    setTimeout(function () {
      if (rootIsEmpty()) showFallback();
    }, retried ? 6000 : 2500);
  }

  window.addEventListener("load", function () { setTimeout(watchdog, 3500); });

  /* ── 4. IMAGE FAILURE FALLBACK ──────────────────────────────*/
  document.addEventListener("error", function (e) {
    var el = e.target;
    if (!el || el.tagName !== "IMG" || el.dataset.koImgHandled) return;
    el.dataset.koImgHandled = "1";
    el.style.background = "linear-gradient(135deg,#071B2F,#0A2342)";
    el.style.border = "1px solid rgba(110,216,255,0.12)";
    el.style.borderRadius = el.style.borderRadius || "20px";
    el.removeAttribute("alt");
  }, true);

  /* ── 5. SAFE STORAGE ────────────────────────────────────────
     Private mode and full quotas throw on write; that must never
     take a page down. */
  window.KOSafeStorage = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); return true; } catch (e) { return false; } },
    remove: function (k) { try { localStorage.removeItem(k); } catch (e) {} }
  };

  window.KlimaOptimaResilience = {
    errors: function () { return ERRORS.slice(); },
    recover: watchdog
  };
})();
