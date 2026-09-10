// Klima Optima, Footer (shared across all pages)

const koFooterStyles = {
  footer: { position: 'relative', background: '#030B14', borderTop: '1px solid rgba(110,216,255,0.10)', padding: '72px 40px 32px', overflow: 'hidden' },
  glow: { position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 700, height: 200, background: 'radial-gradient(ellipse at 50% 0%, rgba(24,183,255,0.16), transparent 60%)', pointerEvents: 'none' },
  footerInner: { position: 'relative', maxWidth: 1480, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1fr', gap: 48 },
  brandCol: { display: 'flex', flexDirection: 'column', gap: 12 },
  tagline: { margin: 0, color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.6, maxWidth: 320 },
  social: { display: 'flex', alignItems: 'center', gap: 10, marginTop: 8 },
  socialBtn: {
    width: 38, height: 38, borderRadius: 12,
    border: '1px solid rgba(110,216,255,0.14)',
    background: 'rgba(255,255,255,0.04)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: 'rgba(110,216,255,0.7)', cursor: 'pointer',
    transition: 'all 220ms',
    textDecoration: 'none'
  },
  colTitle: {
    fontFamily: 'var(--ko-font-display)', fontWeight: 900, fontSize: 12,
    letterSpacing: '0.22em', textTransform: 'uppercase',
    color: '#6ED8FF', marginBottom: 22
  },
  list: { display: 'flex', flexDirection: 'column', gap: 14, fontSize: 14 },
  link: {
    color: 'rgba(255,255,255,0.66)', textDecoration: 'none',
    transition: 'color 180ms', cursor: 'pointer'
  },
  bottom: {
    position: 'relative',
    maxWidth: 1480, margin: '56px auto 0',
    paddingTop: 24,
    borderTop: '1px solid rgba(110,216,255,0.08)',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    flexWrap: 'wrap', gap: 16,
    color: 'rgba(255,255,255,0.45)', fontSize: 12.5,
    fontFamily: 'var(--ko-font-mono)', letterSpacing: '0.02em'
  },
  bottomLinks: { display: 'flex', gap: 24, color: 'rgba(255,255,255,0.45)' },
  cta: {
    position: 'relative',
    maxWidth: 1480, margin: '0 auto 32px',
    borderRadius: 36,
    border: '1px solid rgba(110,216,255,0.18)',
    background: 'linear-gradient(135deg, rgba(14,78,138,0.40), rgba(255,255,255,0.04))',
    backdropFilter: 'blur(20px)',
    padding: '48px 56px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    gap: 40, flexWrap: 'wrap',
    boxShadow: '0 30px 100px rgba(0,0,0,0.4)',
    overflow: 'hidden'
  },
  ctaText: { position: 'relative', flex: '1 1 360px', minWidth: 0 },
  ctaGlow: { position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(24,183,255,0.22), transparent 60%)', pointerEvents: 'none' },
  ctaTitle: {
    position: 'relative',
    margin: 0,
    fontFamily: 'var(--ko-font-display)', fontWeight: 900,
    fontSize: 'clamp(1.5rem, 2.6vw, 2.25rem)', color: '#fff',
    letterSpacing: '-0.02em', lineHeight: 1.1, maxWidth: 720
  },
  ctaSub: { position: 'relative', margin: '10px 0 0', fontSize: 15, color: 'rgba(255,255,255,0.66)', maxWidth: 620, lineHeight: 1.55 },
  ctaButtons: { position: 'relative', flexShrink: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }
};

const FOOTER_LINKS = {
  Products: [
  ['Dehumidifiers', 'dehumidifiers.html'],
  ['Air Conditioners', 'air-conditioners.html'],
  ['Humidifiers', 'humidifiers.html'],
  ['All products', 'products.html']],

  Solutions: [
  ['Humidity Control', 'humidity-control.html'],
  ['Portable Cooling', 'portable-cooling.html'],
  ['Precision Climate Control', 'precision-climate-control.html'],
  ['Industries', 'industries.html']],

  Company: [
  ['About us', 'about.html'],
  ['Resources', 'resources.html'],
  ['Careers', 'careers.html'],
  ['Contact', 'contact.html'],
  ['Privacy Policy', 'privacy-policy.html']],

  Contact: [
  ['+63 2 7955-8588', 'tel:+6327955858'],
  ['+63 (917) 623-4621', 'tel:+639176234621'],
  ['+63 (967) 057-9350', 'tel:+639670579350'],
  ['sales@klimaoptima.com', 'mailto:sales@klimaoptima.com'],
  ['support@klimaoptima.com', 'mailto:support@klimaoptima.com']]

};

const FooterLink = ({ children, href }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <a href={href}
    onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    style={{ ...koFooterStyles.link, color: hov ? '#6ED8FF' : 'rgba(255,255,255,0.66)' }}>
      {children}
    </a>);

};

const SocialBtn = ({ children }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <a onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    style={{
      ...koFooterStyles.socialBtn,
      color: hov ? '#04111F' : 'rgba(110,216,255,0.7)',
      background: hov ? '#18B7FF' : 'rgba(255,255,255,0.04)',
      borderColor: hov ? 'rgba(110,216,255,0.40)' : 'rgba(110,216,255,0.14)',
      boxShadow: hov ? '0 0 24px rgba(24,183,255,0.40)' : 'none'
    }}>
      {children}
    </a>);

};

const FooterCTA = () =>
<div style={koFooterStyles.cta}>
    <div style={koFooterStyles.ctaGlow} />
    <div style={koFooterStyles.ctaText}>
      <h3 style={koFooterStyles.ctaTitle}>
        Talk to a Specialist.
      </h3>
      <p style={koFooterStyles.ctaSub}>
        Speak with a climate-control specialist about your project, survey, sizing, and deployment included.
      </p>
    </div>
    <div style={koFooterStyles.ctaButtons}>
      <a href="contact.html" className="ko-btn ko-btn-primary" style={{ textDecoration: 'none' }}>
        Request Consultation <Icon name="arrow-right" size={18} />
      </a>
    </div>
  </div>;


const Footer = ({ showCta = true }) =>
<React.Fragment>
    {showCta && <section style={{ background: '#030B14', padding: '40px 40px 8px' }}><FooterCTA /></section>}
    <footer style={koFooterStyles.footer}>
      <div style={koFooterStyles.glow} />
      <div style={koFooterStyles.footerInner}>
        <div style={koFooterStyles.brandCol}>
          <a href="Klima Optima Homepage.html" style={{ display: 'block' }}>
            <img src="assets/logos/klima-optima-reverse.png" alt="Klima Optima" style={{ height: "48px", objectFit: "cover", objectPosition: "center", width: "210px" }} />
          </a>
          <p style={koFooterStyles.tagline}>
            Building engineered environments that comply with the temperature, humidity, and air-quality requirements of mission-critical, industrial, and commercial spaces.
          </p>
          <div style={koFooterStyles.social}>
            <SocialBtn><Icon name="globe" size={16} /></SocialBtn>
            <SocialBtn><Icon name="building" size={16} /></SocialBtn>
            <SocialBtn><Icon name="support" size={16} /></SocialBtn>
          </div>
        </div>
        {Object.entries(FOOTER_LINKS).map(([title, items]) =>
      <div key={title}>
            <div style={koFooterStyles.colTitle}>{title}</div>
            <div style={koFooterStyles.list}>
              {items.map(([label, href]) =>
          <FooterLink key={label} href={href}>{label}</FooterLink>
          )}
            </div>
          </div>
      )}
      </div>
      <div style={koFooterStyles.bottom}>
        <span>© 2026 Klima Optima®. The Climate Control Specialist.</span>
        <div style={{fontSize: 12, color: 'rgba(255,255,255,0.45)'}}>
          2904-B Tektite West Tower, Philippine Stock Exchange Centre, Exchange Road, Ortigas Center, Pasig City, Philippines 1605
        </div>
        <span><a href="privacy-policy.html" style={{color:'rgba(255,255,255,0.45)', textDecoration:'none'}}>Privacy</a> · Terms · Sitemap</span>
      </div>
    </footer>
  </React.Fragment>;


window.Footer = Footer;
window.FooterCTA = FooterCTA;