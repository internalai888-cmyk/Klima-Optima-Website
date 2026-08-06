# Klima Optima — Security Setup Guide

A complete walkthrough for deploying all security files before launch.

---

## Files Included

| File | What it does |
|---|---|
| `.htaccess` | Server-level security — the most important file |
| `security.js` | Client-side JS protections for every page |
| `contact-form-guard.js` | Form spam, flood, and bot protection |
| `security-meta-snippet.html` | HTML `<head>` additions for every page |

---

## Step 1 — Deploy `.htaccess`

1. Upload `.htaccess` to the **root of your website** (the same folder as your `index.html`).  
   In cPanel, this is usually `public_html/`.

2. **Update your domain name** in the hotlink protection section:
   ```apache
   RewriteCond %{HTTP_REFERER} !^https://(www\.)?klimaoptima\.com [NC]
   ```
   Replace `klimaoptima\.com` with your actual domain (escape the dot with `\.`).

3. **Adjust the Content-Security-Policy** if you use third-party services not listed:
   - Google Analytics / GTM: already included
   - Facebook Pixel: add `https://connect.facebook.net` to `script-src`
   - Other CDNs: add their domains to `script-src` or `style-src`

4. Test in cPanel → File Manager by visiting your site. If you get a **500 error**, a module may not be available — comment out the offending block with `#`.

---

## Step 2 — Upload JS Files

1. Upload `security.js` and `contact-form-guard.js` to your website root (or a `/js/` folder).

2. Add the following to the **bottom of `<body>`** on every HTML page:
   ```html
   <script src="/security.js"></script>
   ```

3. On any page with a **contact or inquiry form**, also add:
   ```html
   <script src="/contact-form-guard.js"></script>
   ```

---

## Step 3 — Update Your HTML `<head>`

Open every HTML file and add these lines inside `<head>`, near the top:

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="referrer" content="strict-origin-when-cross-origin">
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google.com https://www.gstatic.com https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; frame-src https://www.google.com; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self';">
```

See `security-meta-snippet.html` for the full annotated version.

---

## Step 4 — Verify Security Headers (Free Tool)

After going live, paste your URL into:  
**https://securityheaders.com**

You should score **A** or **A+**. If any header is missing, check that `mod_headers` is enabled in cPanel (ask your host if unsure).

Also check:  
**https://www.ssllabs.com/ssltest/** — aim for an **A** TLS rating.

---

## Step 5 — Free Cloudflare Setup (Highly Recommended)

Cloudflare's free plan adds a powerful layer of protection that a static host alone cannot provide:

1. Sign up at **https://cloudflare.com** (free)
2. Add your domain and update your nameservers at your registrar
3. Enable these settings in the Cloudflare dashboard:
   - **SSL/TLS → Full (Strict)** — enforces HTTPS end-to-end
   - **Security → WAF** → enable the free managed ruleset
   - **Security → Bot Fight Mode** → ON
   - **Speed → Auto Minify** → HTML, CSS, JS
   - **Caching → Caching Level → Standard**
   - **Page Rules** (or Rules) → set cache TTL for static assets

This gives you a Web Application Firewall (WAF), DDoS protection, and a global CDN for free.

---

## Step 6 — cPanel Hardening Checklist

In your cPanel control panel:

- [ ] **SSL Certificate** — install a free Let's Encrypt certificate if not already done
- [ ] **Directory Privacy** — password-protect any admin/staging directories
- [ ] **Hotlink Protection** — enable in cPanel → Hotlink Protection (mirrors your `.htaccess` rule)
- [ ] **Leech Protect** — if you have login-protected pages
- [ ] **Backup** — enable automatic backups weekly (cPanel → Backup Wizard)
- [ ] **Two-Factor Auth** — enable 2FA for your cPanel login

---

## Step 7 — Optional: reCAPTCHA v3 on Contact Forms

To add Google reCAPTCHA v3 to your forms:

1. Register at **https://www.google.com/recaptcha/admin** → select v3
2. Copy your **Site Key**
3. Open `contact-form-guard.js` and replace:
   ```js
   recaptchaSiteKey: "",
   ```
   with:
   ```js
   recaptchaSiteKey: "YOUR_SITE_KEY_HERE",
   ```
4. On your server-side handler (or Formspree/Netlify form), verify the token using your **Secret Key**.

---

## Ongoing Maintenance

| Task | Frequency |
|---|---|
| Check https://securityheaders.com | Monthly |
| Review Cloudflare firewall logs | Monthly |
| Update blocked bot list in `.htaccess` | As needed |
| Test contact form against spam | After launch |
| Renew SSL certificate | Automatic (Let's Encrypt) |

---

## Quick Troubleshooting

| Problem | Likely cause | Fix |
|---|---|---|
| 500 Internal Server Error | `.htaccess` syntax error or unsupported module | Comment out the last block you added with `#` |
| CSS/fonts not loading | CSP too strict | Add the missing domain to `style-src` or `font-src` |
| Forms not submitting | `form-action` CSP blocking external form handler | Add your form handler URL to `form-action` (e.g. Formspree) |
| Images not loading from CDN | `img-src` too strict | Add the CDN domain to `img-src` |
| Google Analytics not working | `script-src` missing GTM domain | Confirm `https://www.googletagmanager.com` is in `script-src` |

---

*Prepared for Klima Optima pre-launch security hardening.*
