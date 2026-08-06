/**
 * KLIMA OPTIMA — Client-Side Security Module
 * Include this script at the bottom of every page's <body>:
 *   <script src="security.js"></script>
 *
 * Features:
 *  1. Anti-iframe clickjacking fallback
 *  2. DevTools open detection + warning
 *  3. Console abuse warning
 *  4. Basic automated-bot fingerprint detection
 *  5. Outbound link safety (noopener noreferrer)
 *  6. Disable drag-and-drop of images (light content theft deterrent)
 */

(function () {
  "use strict";

  /* ── 1. ANTI-IFRAME CLICKJACKING (JS fallback) ─────────────
     If the X-Frame-Options header is stripped by a middleman,
     this forces the page out of any iframe. */
  if (window.self !== window.top) {
    // Hidden inside an iframe — bust out
    window.top.location = window.self.location;
  }

  /* ── 2. DEVTOOLS DETECTION ──────────────────────────────────
     Detects when browser DevTools are opened and shows a warning.
     This deters casual copycats and script-kiddies. */
  (function devToolsGuard() {
    const threshold = 160;
    let warned = false;

    function check() {
      const widthDiff  = window.outerWidth  - window.innerWidth;
      const heightDiff = window.outerHeight - window.innerHeight;
      if ((widthDiff > threshold || heightDiff > threshold) && !warned) {
        warned = true;
        console.warn(
          "%c⚠ WARNING",
          "color: red; font-size: 32px; font-weight: bold;"
        );
        console.warn(
          "%cThis is a browser feature intended for developers.\n" +
          "If someone told you to paste code here, they are attempting to scam or hack you.\n\n" +
          "© Klima Optima. All rights reserved.",
          "font-size: 14px; color: #333;"
        );
      }
    }

    window.addEventListener("resize", check);
    setInterval(check, 2000);
  })();

  /* ── 3. CONSOLE ABUSE WARNING ───────────────────────────────
     Immediately prints a warning in the console to deter
     anyone attempting console-based attacks. */
  (function consoleWarning() {
    if (typeof console !== "undefined" && console.log) {
      console.log(
        "%c⛔ STOP!",
        "color: #d32f2f; font-size: 40px; font-weight: bold; -webkit-text-stroke: 1px black;"
      );
      console.log(
        "%cThis browser console is for developers only.\n" +
        "Unauthorized access, data scraping, or tampering with this site\n" +
        "is strictly prohibited and may be prosecuted under applicable law.\n\n" +
        "© Klima Optima. All rights reserved.",
        "font-size: 13px; color: #333; line-height: 1.6;"
      );
    }
  })();

  /* ── 4. BOT / AUTOMATION DETECTION ─────────────────────────
     Checks for headless browser signals. Flags suspicious
     sessions and can be extended to report to your analytics. */
  (function botDetect() {
    const signals = [];

    if (navigator.webdriver)              signals.push("webdriver");
    if (!navigator.languages || navigator.languages.length === 0) signals.push("no-languages");
    if (navigator.plugins.length === 0)   signals.push("no-plugins");
    if (/HeadlessChrome|PhantomJS|Puppeteer|Playwright/i.test(navigator.userAgent)) signals.push("headless-ua");
    if (window.__nightmare)               signals.push("nightmare");
    if (window.callPhantom || window._phantom) signals.push("phantom");
    if (document.documentElement.getAttribute("webdriver")) signals.push("webdriver-attr");

    if (signals.length >= 2) {
      // Suspected bot — you can: redirect, show captcha, or silently log
      // Option A: Redirect to a bot-landing page
      // window.location.href = "/bot-detected.html";

      // Option B: Log to analytics (replace with your endpoint)
      // fetch("/api/bot-report", { method: "POST", body: JSON.stringify({ signals, url: location.href }) });

      // Option C (default): Just disable form submission
      document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll("form").forEach(function (form) {
          form.addEventListener("submit", function (e) {
            e.preventDefault();
            console.warn("Automated submission blocked.");
          });
        });
      });
    }
  })();

  /* ── 5. OUTBOUND LINK SAFETY ────────────────────────────────
     All external links get rel="noopener noreferrer" to prevent
     reverse tabnapping attacks. */
  document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll("a[href]");
    links.forEach(function (link) {
      try {
        var url = new URL(link.href, window.location.origin);
        if (url.hostname !== window.location.hostname) {
          var rel = link.getAttribute("rel") || "";
          if (!rel.includes("noopener"))   rel += " noopener";
          if (!rel.includes("noreferrer")) rel += " noreferrer";
          link.setAttribute("rel", rel.trim());
          // Open external links in new tab safely
          if (!link.target) link.setAttribute("target", "_blank");
        }
      } catch (e) { /* ignore invalid hrefs */ }
    });
  });

  /* ── 6. IMAGE DRAG PROTECTION ───────────────────────────────
     Prevents drag-and-drop of images (light deterrent against
     easy content theft). Does NOT block right-click saving — that
     would frustrate legitimate users. */
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("img").forEach(function (img) {
      img.setAttribute("draggable", "false");
      img.addEventListener("dragstart", function (e) { e.preventDefault(); });
    });
  });

  /* ── 7. INPUT SANITISATION HELPER ──────────────────────────
     Call KlimaOptimaSecurity.sanitize(str) anywhere in your code
     to strip HTML tags from user input before displaying it. */
  window.KlimaOptimaSecurity = {
    sanitize: function (str) {
      var div = document.createElement("div");
      div.appendChild(document.createTextNode(String(str)));
      return div.innerHTML;
    },
    escapeAttr: function (str) {
      return String(str)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }
  };

})();
