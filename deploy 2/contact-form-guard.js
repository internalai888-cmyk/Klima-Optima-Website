/**
 * KLIMA OPTIMA — Contact Form Protection
 * Include on any page that has a contact / quote / inquiry form:
 *   <script src="contact-form-guard.js"></script>
 *
 * Features:
 *  1. Honeypot field injection (invisible trap for bots)
 *  2. Submission rate limiter (max 3 submissions per 10 minutes)
 *  3. Time-based validation (bots fill forms too fast)
 *  4. Input length limits + basic XSS sanitization
 *  5. reCAPTCHA v3 integration hook (optional — see instructions below)
 */

(function () {
  "use strict";

  /* ── CONFIG ─────────────────────────────────────────────────
     Adjust these values to suit your site. */
  var CONFIG = {
    maxSubmissionsPerWindow : 3,       // max form sends allowed
    rateLimitWindowMs       : 10 * 60 * 1000, // 10 minutes
    minFillTimeMs           : 2500,    // minimum time to fill form (ms) — bots are faster
    maxFieldLength          : 2000,    // max characters per field
    honeypotFieldName       : "website_url_do_not_fill", // bots fill this; humans don't see it
    // reCAPTCHA v3 site key — replace with yours from https://www.google.com/recaptcha/admin
    // Leave empty string "" to disable reCAPTCHA
    recaptchaSiteKey        : "",
  };

  /* ── STATE ──────────────────────────────────────────────────*/
  var submissionLog = JSON.parse(sessionStorage.getItem("ko_form_log") || "[]");

  /* ── HELPERS ────────────────────────────────────────────────*/
  function cleanLog() {
    var now = Date.now();
    submissionLog = submissionLog.filter(function (t) {
      return now - t < CONFIG.rateLimitWindowMs;
    });
    sessionStorage.setItem("ko_form_log", JSON.stringify(submissionLog));
  }

  function isRateLimited() {
    cleanLog();
    return submissionLog.length >= CONFIG.maxSubmissionsPerWindow;
  }

  function recordSubmission() {
    submissionLog.push(Date.now());
    sessionStorage.setItem("ko_form_log", JSON.stringify(submissionLog));
  }

  function showError(form, msg) {
    var existing = form.querySelector(".ko-form-error");
    if (existing) existing.remove();
    var el = document.createElement("p");
    el.className = "ko-form-error";
    el.style.cssText = "color:#c0392b;font-size:14px;margin:8px 0;font-weight:600;";
    el.textContent = msg;
    var btn = form.querySelector("[type=submit]");
    if (btn) btn.insertAdjacentElement("beforebegin", el);
    else form.insertAdjacentElement("beforeend", el);
  }

  function sanitizeValue(val) {
    return String(val)
      .replace(/<[^>]*>/g, "")         // strip HTML tags
      .replace(/javascript:/gi, "")    // strip JS protocol
      .replace(/on\w+\s*=/gi, "")      // strip event handlers
      .trim();
  }

  /* ── INJECT HONEYPOT ────────────────────────────────────────
     A hidden text field that only bots will fill in. */
  function injectHoneypot(form) {
    if (form.querySelector("[name='" + CONFIG.honeypotFieldName + "']")) return;
    var wrapper = document.createElement("div");
    wrapper.setAttribute("aria-hidden", "true");
    wrapper.style.cssText = "position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;overflow:hidden;opacity:0;";
    wrapper.innerHTML =
      '<label for="' + CONFIG.honeypotFieldName + '">Leave this blank</label>' +
      '<input type="text" name="' + CONFIG.honeypotFieldName + '" id="' + CONFIG.honeypotFieldName + '" tabindex="-1" autocomplete="off">';
    form.appendChild(wrapper);
  }

  /* ── INJECT TIMESTAMP FIELD ─────────────────────────────────
     Records when the form was loaded to catch bots submitting instantly. */
  function injectTimestamp(form) {
    if (form.querySelector("[name='_ko_ts']")) return;
    var input = document.createElement("input");
    input.type  = "hidden";
    input.name  = "_ko_ts";
    input.value = Date.now().toString();
    form.appendChild(input);
  }

  /* ── VALIDATE SUBMISSION ────────────────────────────────────*/
  function validateSubmission(form) {
    // 1. Honeypot check
    var honeypot = form.querySelector("[name='" + CONFIG.honeypotFieldName + "']");
    if (honeypot && honeypot.value.trim() !== "") {
      return { ok: false, reason: "honeypot" };
    }

    // 2. Time check
    var tsInput = form.querySelector("[name='_ko_ts']");
    if (tsInput) {
      var elapsed = Date.now() - parseInt(tsInput.value, 10);
      if (elapsed < CONFIG.minFillTimeMs) {
        return { ok: false, reason: "too_fast", msg: "Please take a moment to review your message before sending." };
      }
    }

    // 3. Rate limit check
    if (isRateLimited()) {
      return { ok: false, reason: "rate_limited", msg: "You've sent too many messages recently. Please wait a few minutes and try again." };
    }

    // 4. Field length + sanitization
    var inputs = form.querySelectorAll("input:not([type=hidden]):not([type=submit]):not([type=button]):not([type=checkbox]):not([type=radio]), textarea");
    for (var i = 0; i < inputs.length; i++) {
      var field = inputs[i];
      if (field.value.length > CONFIG.maxFieldLength) {
        return { ok: false, reason: "too_long", msg: "One of your fields is too long. Please shorten your message." };
      }
      // Sanitize in place
      field.value = sanitizeValue(field.value);
    }

    return { ok: true };
  }

  /* ── SETUP reCAPTCHA ────────────────────────────────────────
     If a site key is configured, loads the reCAPTCHA script
     and adds a score-based token to the form on submission. */
  function setupRecaptcha(form, onReady) {
    if (!CONFIG.recaptchaSiteKey) { onReady(); return; }
    if (window.grecaptcha) { onReady(); return; }

    var script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?render=" + CONFIG.recaptchaSiteKey;
    script.async = true;
    script.onload = function () { onReady(); };
    document.head.appendChild(script);
  }

  function getRecaptchaToken(action, callback) {
    if (!CONFIG.recaptchaSiteKey || !window.grecaptcha) { callback(null); return; }
    grecaptcha.ready(function () {
      grecaptcha.execute(CONFIG.recaptchaSiteKey, { action: action }).then(callback);
    });
  }

  /* ── PRIVACY HARDENING ───────────────────────────────────────
     Keeps what a visitor types out of the browser's shared surfaces:
     autofill store, back/forward cache, session restore, and any
     insecure transport. Nothing typed here is written to storage. */
  function privacyHarden(form) {
    // 1. Never submit personal data over plain HTTP
    var action = form.getAttribute("action") || "";
    if (/^http:\/\//i.test(action)) form.setAttribute("action", action.replace(/^http:/i, "https:"));
    if (location.protocol === "http:" && location.hostname !== "localhost" && !/^127\./.test(location.hostname)) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("This form can only be submitted over a secure (HTTPS) connection.");
      }, true);
    }

    // 2. Force POST — never put field values in a URL
    if ((form.getAttribute("method") || "get").toLowerCase() !== "post") form.setAttribute("method", "post");

    // 3. Keep entries out of browser autofill / password-manager stores
    form.setAttribute("autocomplete", "off");
    form.querySelectorAll("input, textarea, select").forEach(function (el) {
      if (el.type === "hidden") return;
      el.setAttribute("autocomplete", "off");
      el.setAttribute("autocorrect", "off");
      el.setAttribute("spellcheck", "false");
      el.setAttribute("data-lpignore", "true");   // LastPass
      el.setAttribute("data-1p-ignore", "true");  // 1Password
      el.setAttribute("data-form-type", "other"); // Dashlane
    });

    // 4. Wipe fields when the page is hidden, closed, or restored from cache
    function wipe() {
      form.querySelectorAll("input, textarea").forEach(function (el) {
        if (el.type === "hidden" || el.type === "submit" || el.type === "button") return;
        if (el.type === "checkbox" || el.type === "radio") { el.checked = false; return; }
        el.value = "";
      });
    }
    window.addEventListener("pagehide", wipe);
    window.addEventListener("pageshow", function (e) { if (e.persisted) wipe(); });
    form.addEventListener("submit", function () { setTimeout(wipe, 1200); });
  }

  /* ── GUARD ALL FORMS ────────────────────────────────────────*/
  function guardForm(form) {
    if (form.dataset.koGuarded) return;
    form.dataset.koGuarded = "1";
    privacyHarden(form);
    injectHoneypot(form);
    injectTimestamp(form);

    setupRecaptcha(form, function () {
      // reCAPTCHA loaded (or not needed)
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var result = validateSubmission(form);
      if (!result.ok) {
        if (result.reason === "honeypot") {
          // Silent reject — don't tell bots they failed
          return;
        }
        showError(form, result.msg || "Submission blocked. Please try again.");
        return;
      }

      // Remove previous errors
      var existing = form.querySelector(".ko-form-error");
      if (existing) existing.remove();

      // Get reCAPTCHA token (if configured)
      var action = form.dataset.recaptchaAction || "contact";
      getRecaptchaToken(action, function (token) {
        if (token) {
          var tokenInput = form.querySelector("[name='g-recaptcha-response']") || document.createElement("input");
          tokenInput.type  = "hidden";
          tokenInput.name  = "g-recaptcha-response";
          tokenInput.value = token;
          form.appendChild(tokenInput);
        }

        recordSubmission();

        // Re-submit the form naturally (or via fetch if you use AJAX)
        form.submit();
      });
    });
  }

  /* ── INIT ────────────────────────────────────────────────────*/
  function scan() {
    document.querySelectorAll("form").forEach(guardForm);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scan);
  } else {
    scan();
  }

  // Forms rendered later by React/Babel are guarded as they appear
  function watch() {
    if (!document.body) { setTimeout(watch, 50); return; }
    scan();
    new MutationObserver(scan).observe(document.body, { childList: true, subtree: true });
  }
  watch();

})();
