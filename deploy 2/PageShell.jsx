// Klima Optima, Shared page primitives (hero, sections, cards, CTAs)
// All visual tokens & motion match the homepage.

/* ============================================================
   PageHero, used on every non-home page
   Cinematic blue-lit hero with crumbs, eyebrow, headline, sub, CTAs.
   ============================================================ */

const koShellStyles = {
  pageHero: {
    position: 'relative', overflow: 'hidden',
    background: '#04111F',
    paddingTop: 164
  },
  pageHeroBg: {
    position: 'absolute', inset: 0,
    background:
    'radial-gradient(circle at 18% 30%, rgba(24,183,255,0.28), transparent 32%),' +
    'radial-gradient(circle at 82% 18%, rgba(14,78,138,0.50), transparent 38%),' +
    'linear-gradient(135deg,#030B14 0%,#071B2F 45%,#0A2342 75%,#061728 100%)'
  },
  pageHeroGrid: {
    position: 'absolute', inset: 0, opacity: 0.14,
    backgroundImage: 'linear-gradient(90deg, rgba(110,216,255,0.18) 1px, transparent 1px), linear-gradient(rgba(110,216,255,0.16) 1px, transparent 1px)',
    backgroundSize: '86px 86px',
    maskImage: 'radial-gradient(circle at 50% 30%, rgba(0,0,0,1) 35%, transparent 80%)',
    WebkitMaskImage: 'radial-gradient(circle at 50% 30%, rgba(0,0,0,1) 35%, transparent 80%)'
  },
  pageHeroVignette: { position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.30), transparent 22%, transparent 80%, #030B14)', pointerEvents: 'none' },
  pageHeroInner: {
    position: 'relative', zIndex: 5,
    maxWidth: 1480, margin: '0 auto', padding: '40px 40px 100px'
  },
  crumbs: {
    display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px 10px',
    color: 'rgba(110,216,255,0.75)',
    fontFamily: 'var(--ko-font-display)', fontSize: 12.5, fontWeight: 600,
    letterSpacing: '0.04em'
  },
  crumbLink: { color: 'rgba(110,216,255,0.75)', textDecoration: 'none', whiteSpace: 'nowrap' },
  crumbCurrent: { color: '#fff', whiteSpace: 'nowrap' },
  crumbDot: { color: 'rgba(110,216,255,0.40)' },
  pill: {
    marginTop: 24,
    display: 'inline-flex', alignItems: 'center', gap: 12,
    borderRadius: 9999, border: '1px solid rgba(110,216,255,0.20)',
    background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(16px)',
    padding: '9px 20px', fontFamily: 'var(--ko-font-display)', fontSize: 11.5,
    fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase',
    color: '#6ED8FF'
  },
  pillDot: { width: 6, height: 6, borderRadius: 9999, background: '#18B7FF', boxShadow: '0 0 12px #18B7FF', animation: 'ko-pulse 2.4s ease-in-out infinite' },
  pageHeadline: {
    margin: '28px 0 0', maxWidth: 1000,
    fontFamily: 'var(--ko-font-display)', fontWeight: 900,
    fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)', lineHeight: 0.98,
    letterSpacing: '-0.028em', color: '#fff', textTransform: 'uppercase'
  },
  gradWord: { background: 'linear-gradient(90deg,#18B7FF,#9EEBFF)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' },
  pageSub: { margin: '28px 0 0', maxWidth: 720, fontSize: 18, lineHeight: 1.65, color: 'rgba(255,255,255,0.74)' },
  ctaRow: { marginTop: 40, display: 'flex', flexWrap: 'wrap', gap: 14 },

  /* Hero stats / right-side optional content */
  twoCol: { marginTop: 40, display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 48, alignItems: 'flex-end' },
  heroTwoCol: { marginTop: 4, display: 'grid', gridTemplateColumns: '1fr 1.08fr', gap: 56, alignItems: 'center' },
  heroMedia: { position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }
};

const PageHero = ({ crumbs = [], eyebrow, headline, headlineHighlight, sub, ctas, children, media, minHeight = 'auto' }) => {
  const eyebrowEl = eyebrow &&
    <div className="ko-page-hero-eyebrow">
      <span style={koShellStyles.pill}>
        <span style={koShellStyles.pillDot} />
        {eyebrow}
      </span>
    </div>;
  const headingEl = (
    <React.Fragment>
      <h1 style={koShellStyles.pageHeadline} className="ko-page-hero-headline">
        {headline}{headlineHighlight && <>{' '}<span style={koShellStyles.gradWord}>{headlineHighlight}</span></>}
      </h1>
      {sub && <p style={koShellStyles.pageSub} className="ko-page-hero-sub">{sub}</p>}
      {ctas && <div style={koShellStyles.ctaRow} className="ko-page-hero-ctas">{ctas}</div>}
      {children}
    </React.Fragment>
  );
  const textBlock = (
    <React.Fragment>
      {eyebrowEl}
      {headingEl}
    </React.Fragment>
  );
  return (
<section style={{ ...koShellStyles.pageHero, minHeight }} className="ko-page-hero">
    <style>{`
      @media (max-width: 768px) {
        .ko-page-hero {
          padding-top: 96px !important;
        }
        .ko-page-hero-inner {
          padding: 32px 20px 60px !important;
        }
        .ko-page-hero-headline {
          font-size: 2rem !important;
          margin-top: 20px !important;
        }
        .ko-page-hero-sub {
          font-size: 16px !important;
          margin-top: 20px !important;
        }
        .ko-page-hero-ctas {
          margin-top: 28px !important;
          flex-direction: column !important;
        }
        .ko-page-hero-ctas button,
        .ko-page-hero-ctas a {
          width: 100% !important;
        }
        .ko-page-hero-two-col {
          grid-template-columns: 1fr !important;
          gap: 28px !important;
        }
        .ko-page-hero-media {
          order: -1 !important;
        }
        .ko-page-hero-media image-slot {
          height: clamp(220px, 56vw, 320px) !important;
        }
      }
    `}</style>
    <div style={koShellStyles.pageHeroBg} />
    <div style={koShellStyles.pageHeroGrid} />
    <div style={koShellStyles.pageHeroVignette} />
    <div style={koShellStyles.pageHeroInner} className="ko-page-hero-inner">
      {!!crumbs.length &&
    <div style={koShellStyles.crumbs}>
          {crumbs.map((c, i) =>
      <React.Fragment key={i}>
              {i > 0 && <span style={koShellStyles.crumbDot}>›</span>}
              {c.href ?
        <a href={c.href} style={koShellStyles.crumbLink}>{c.label}</a> :
        <span style={koShellStyles.crumbCurrent}>{c.label}</span>}
            </React.Fragment>
      )}
        </div>
    }
      {media ?
        <React.Fragment>
          {eyebrowEl}
          <div style={koShellStyles.heroTwoCol} className="ko-page-hero-two-col">
            <div>{headingEl}</div>
            <div style={koShellStyles.heroMedia} className="ko-page-hero-media">{media}</div>
          </div>
        </React.Fragment>
        : textBlock}
    </div>
  </section>
  );
};


/* ============================================================
   Section primitives, band, eyebrow + title + sub block.
   ============================================================ */

const koSectionStyles = {
  band: { position: 'relative', padding: '112px 40px', overflow: 'hidden' },
  inner: { position: 'relative', maxWidth: 1480, margin: '0 auto' },
  eyebrow: { fontFamily: 'var(--ko-font-display)', fontWeight: 900, fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#6ED8FF' },
  title: { margin: '18px 0 0', fontFamily: 'var(--ko-font-display)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.05, letterSpacing: '-0.025em', color: '#fff', maxWidth: 880 },
  sub: { margin: '20px 0 0', maxWidth: 720, fontSize: 17, lineHeight: 1.65, color: 'rgba(255,255,255,0.66)' },
  glow1: { position: 'absolute', inset: 0, background: 'radial-gradient(circle at 20% 0%, rgba(24,183,255,0.16), transparent 30%), radial-gradient(circle at 80% 100%, rgba(110,216,255,0.10), transparent 30%)', pointerEvents: 'none' }
};

// shadeIndex: 0 = #030B14, 1 = gradient down, 2 = #061728→#0A2342, 3 = deep #0A2342
const koBandBg = (shade) => {
  switch (shade) {
    case 1:return 'linear-gradient(180deg,#030B14 0%,#061728 55%,#071B2F 100%)';
    case 2:return 'linear-gradient(180deg,#030B14 0%,#061728 45%,#0A2342 100%)';
    case 3:return 'linear-gradient(180deg,#0A2342 0%,#04111F 100%)';
    default:return '#030B14';
  }
};

const SectionBand = ({ children, shade = 0, glow = true, id, style = {}, className = '', ...rest }) =>
<section id={id} className={('ko-band ' + className).trim()} style={{ ...koSectionStyles.band, background: koBandBg(shade), ...style }} {...rest}>
    {glow && <div style={koSectionStyles.glow1} />}
    <div style={koSectionStyles.inner}>{children}</div>
  </section>;


const SectionHead = ({ eyebrow, title, titleHighlight, sub, align = 'center' }) =>
<div style={{ textAlign: align, maxWidth: align === 'center' ? 880 : undefined, margin: align === 'center' ? '0 auto' : undefined }}>
    {eyebrow && <span style={koSectionStyles.eyebrow}>{eyebrow}</span>}
    <h2 style={{ ...koSectionStyles.title, textAlign: align, margin: align === 'center' ? '18px auto 0' : '18px 0 0' }}>
      {title}{titleHighlight && <>{' '}<span style={koShellStyles.gradWord}>{titleHighlight}</span></>}
    </h2>
    {sub && <p style={{ ...koSectionStyles.sub, margin: align === 'center' ? '20px auto 0' : '20px 0 0', textAlign: align }}>{sub}</p>}
  </div>;


/* ============================================================
   GlassCard, base building block for feature cards.
   ============================================================ */

const GlassCard = ({ children, hoverable = true, style = {}, padding = 32, accentTop = false, ...rest }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => hoverable && setHov(true)}
      onMouseLeave={() => hoverable && setHov(false)}
      style={{
        position: 'relative',
        borderRadius: 30,
        border: '1px solid ' + (hov ? 'rgba(110,216,255,0.30)' : 'rgba(110,216,255,0.12)'),
        background: 'rgba(255,255,255,0.045)',
        backdropFilter: 'blur(20px)',
        boxShadow: hov ? '0 30px 100px rgba(0,0,0,0.45), 0 0 50px rgba(24,183,255,0.08)' : '0 24px 90px rgba(0,0,0,0.36)',
        padding,
        overflow: 'hidden',
        transition: 'all 240ms cubic-bezier(0.22,1,0.36,1)',
        transform: hov ? 'translateY(-4px)' : 'none',
        ...style
      }}
      {...rest}>
      
      {accentTop &&
      <div style={{
        position: 'absolute', top: 0, left: '20%', right: '20%', height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(24,183,255,0.50), transparent)'
      }} />
      }
      <div style={{ position: 'absolute', top: 0, right: 0, width: 240, height: 240, background: 'radial-gradient(circle at 80% 0%, rgba(24,183,255,0.14), transparent 60%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative' }}>{children}</div>
    </div>);

};

/* ============================================================
   FeatureCard, icon + title + copy + optional link
   ============================================================ */

const FeatureCard = ({ icon, title, copy, link, img, padding = 32 }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative', borderRadius: 30, padding,
        border: '1px solid ' + (hov ? 'rgba(110,216,255,0.30)' : 'rgba(110,216,255,0.12)'),
        background: 'rgba(255,255,255,0.045)', backdropFilter: 'blur(20px)',
        boxShadow: hov ? '0 30px 100px rgba(0,0,0,0.45), 0 0 50px rgba(24,183,255,0.08)' : '0 24px 90px rgba(0,0,0,0.36)',
        overflow: 'hidden', transition: 'all 240ms cubic-bezier(0.22,1,0.36,1)',
        transform: hov ? 'translateY(-4px)' : 'none',
        cursor: link ? 'pointer' : 'default',
        display: 'flex', flexDirection: 'column', minHeight: 280
      }}>
      
      <div style={{ position: 'absolute', top: -30, right: -30, width: 200, height: 200, background: 'radial-gradient(circle, rgba(24,183,255,0.20), transparent 60%)', pointerEvents: 'none' }} />
      {img &&
      <div style={{ position: 'relative', marginBottom: 24, borderRadius: 18, overflow: 'hidden' }}>
        {img.src ?
        <img src={img.src} alt={title}
          style={{ display: 'block', width: '100%', height: '190px', objectFit: 'cover', objectPosition: 'center', borderRadius: '18px', border: '1px solid rgba(110,216,255,0.18)', background: 'rgba(6,23,40,0.6)' }} /> :
        <image-slot id={img.id} placeholder={img.placeholder} shape="rounded" radius="18" fit="cover"
          style={{ display: 'block', width: '100%', height: '190px', border: '1px solid rgba(110,216,255,0.18)', background: 'rgba(6,23,40,0.6)' }}></image-slot>
        }
      </div>
      }
      <div style={{
        position: 'relative', height: 60, width: 60, borderRadius: 18,
        background: hov ? '#18B7FF' : 'rgba(24,183,255,0.10)',
        color: hov ? '#04111F' : '#6ED8FF',
        border: '1px solid rgba(110,216,255,0.18)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: hov ? '0 0 36px rgba(24,183,255,0.45)' : '0 0 24px rgba(24,183,255,0.12)',
        transition: 'all 240ms'
      }}>
        <Icon name={icon} size={28} />
      </div>
      <h3 style={{ position: 'relative', marginTop: 26, fontFamily: 'var(--ko-font-display)', fontWeight: 900, fontSize: 22, color: '#fff', letterSpacing: '-0.01em', lineHeight: 1.2 }}>{title}</h3>
      <p style={{ position: 'relative', marginTop: 14, color: 'rgba(255,255,255,0.66)', lineHeight: 1.6, fontSize: 15, flex: 1 }}>{copy}</p>
      {link &&
      <a href={link.href} style={{
        position: 'relative', marginTop: 22,
        color: hov ? '#9EEBFF' : '#6ED8FF',
        fontFamily: 'var(--ko-font-display)', fontWeight: 700, fontSize: 13.5,
        display: 'inline-flex', alignItems: 'center', gap: hov ? 12 : 8,
        textDecoration: 'none', transition: 'gap 220ms, color 220ms'
      }}>
          {link.label || 'Learn more'} <Icon name="arrow-right" size={14} />
        </a>
      }
    </div>);

};

/* ============================================================
   StatCard, large gradient number
   ============================================================ */

const StatCard = ({ icon, value, label }) =>
<div style={{
  position: 'relative', borderRadius: 30, padding: 30,
  border: '1px solid rgba(110,216,255,0.12)',
  background: 'rgba(255,255,255,0.045)', backdropFilter: 'blur(20px)',
  boxShadow: '0 24px 90px rgba(0,0,0,0.36)', overflow: 'hidden'
}}>
    <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'radial-gradient(circle, rgba(24,183,255,0.16), transparent 60%)', pointerEvents: 'none' }} />
    <div style={{ position: 'relative', height: 56, width: 56, borderRadius: 16, background: 'rgba(24,183,255,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6ED8FF', boxShadow: '0 0 24px rgba(24,183,255,0.18)' }}>
      <Icon name={icon} size={26} />
    </div>
    <div style={{ position: 'relative', marginTop: 28, fontFamily: 'var(--ko-font-display)', fontWeight: 900, fontSize: 48, lineHeight: 1, whiteSpace: 'nowrap', background: 'linear-gradient(90deg,#18B7FF,#9EEBFF)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', letterSpacing: '-0.02em' }}>{value}</div>
    <div style={{ position: 'relative', marginTop: 12, fontFamily: 'var(--ko-font-display)', fontWeight: 700, fontSize: 15, color: '#fff' }}>{label}</div>
  </div>;


/* ============================================================
   CTABand, full-width call-to-action between sections
   ============================================================ */

const CTABand = ({ eyebrow, title, sub, primary, secondary }) =>
<SectionBand shade={0} glow={false} style={{ padding: '80px 40px' }}>
    <style>{`
      @media (max-width: 768px) {
        .ko-cta-band-inner {
          padding: 48px 28px !important;
        }
        .ko-cta-band-title {
          font-size: 1.75rem !important;
        }
        .ko-cta-band-ctas {
          flex-direction: column !important;
        }
        .ko-cta-band-ctas a {
          width: 100% !important;
        }
      }
    `}</style>
    <div style={{
    position: 'relative',
    borderRadius: 40,
    border: '1px solid rgba(110,216,255,0.20)',
    background: 'linear-gradient(135deg, rgba(14,78,138,0.45), rgba(255,255,255,0.04))',
    backdropFilter: 'blur(20px)',
    padding: '64px 56px',
    textAlign: 'center',
    overflow: 'hidden',
    boxShadow: '0 30px 100px rgba(0,0,0,0.4)'
  }} className="ko-cta-band-inner">
      <div style={{ position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)', width: '80%', height: '160%', background: 'radial-gradient(ellipse at 50% 0%, rgba(24,183,255,0.20), transparent 55%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative' }}>
        {eyebrow && <span style={koSectionStyles.eyebrow}>{eyebrow}</span>}
        <h2 style={{
        margin: '18px auto 0', maxWidth: 900,
        fontFamily: 'var(--ko-font-display)', fontWeight: 900,
        fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.05, letterSpacing: '-0.025em', color: '#fff'
      }} className="ko-cta-band-title">{title}</h2>
        {sub && <p style={{ margin: '20px auto 0', maxWidth: 700, fontSize: 17, lineHeight: 1.65, color: 'rgba(255,255,255,0.72)' }}>{sub}</p>}
        <div style={{ marginTop: 36, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }} className="ko-cta-band-ctas">
          {primary && <a href={primary.href} className="ko-btn ko-btn-primary" style={{ textDecoration: 'none' }}>{primary.label} <Icon name="arrow-right" size={18} /></a>}
          {secondary && <a href={secondary.href} download={secondary.download || undefined} className="ko-btn ko-btn-secondary" style={{ textDecoration: 'none' }}>{secondary.label}</a>}
        </div>
      </div>
    </div>
  </SectionBand>;


/* ============================================================
   IconChip / Tag, used for inline labels
   ============================================================ */

const Tag = ({ children }) =>
<span style={{
  padding: '7px 16px', borderRadius: 9999,
  border: '1px solid rgba(110,216,255,0.16)',
  background: 'rgba(24,183,255,0.06)',
  color: '#6ED8FF',
  fontFamily: 'var(--ko-font-display)', fontWeight: 600, fontSize: 12.5,
  letterSpacing: '0.02em',
  display: 'inline-flex', alignItems: 'center', gap: 6
}}>{children}</span>;


/* ============================================================
   Reveal-on-scroll observer (registered once per page).
   Wrap blocks with <RevealOnScroll>.
   ============================================================ */

const useRevealOnce = () => {
  React.useEffect(() => {
    // Immediately reveal all elements on mount
    const els = document.querySelectorAll('[data-reveal]');
    els.forEach((el) => el.classList.add('in'));
  }, []);
};

const Reveal = ({ children, delay = 0 }) =>
<div data-reveal style={{ transitionDelay: `${delay}ms` }}>{children}</div>;


/* ============================================================
   Standard <Page> wrapper, handles header, body, footer
   ============================================================ */

const Page = ({ active, children, footerCta = true }) => {
  useRevealOnce();
  return (
    <div>
      <div style={{ position: 'relative' }}>
        <HeaderStack active={active} />
        {children}
      </div>
      <Footer showCta={footerCta} />
    </div>);

};

Object.assign(window, {
  PageHero, SectionBand, SectionHead, GlassCard, FeatureCard, StatCard,
  CTABand, Tag, Reveal, Page, useRevealOnce, koShellStyles, koSectionStyles, koBandBg
});