// Klima Optima, Hero (full-bleed rotating image carousel with rotating headlines)

const KO_HERO_SLIDES = [
  {
    id: 'hero-slide-1',
    placeholder: 'Drop a cinematic hero photo (cool/blue, dusk) here',
    src: 'assets/hero/portable-aircons-warehouse.png',
    eyebrow: 'Engineered for Precision Performance',
    lead: 'Climate Control Built for',
    accent: 'Demanding Spaces',
    sub: 'Portable cooling, dehumidification, and air-quality solutions for businesses, projects, and critical environments.',
    cta: { label: 'Explore Industrial ACs', href: 'industrial-portable-aircons.html' },
  },
  {
    id: 'hero-slide-2',
    placeholder: 'Drop an industrial / plant-room photo here',
    eyebrow: 'Trusted Across Industries',
    lead: 'Proven in the Most',
    accent: 'Critical Environments',
    sub: 'Hospitals, factories, hotels, cold-storage, and data-grade spaces rely on Klima Optima to hold their conditions.',
    cta: { label: 'Explore Commercial ACs', href: 'commercial-aircons.html' },
  },
  {
    id: 'hero-slide-3',
    placeholder: 'Drop a warehouse / deployment photo here',
    src: 'assets/hero/dehumidifiers-warehouse.png',
    eyebrow: 'Local Capability',
    lead: 'Built for Extreme',
    accent: 'Heat and Humidity',
    sub: 'Dependable local engineering, deployment, and service, wherever your operation runs.',
    cta: { label: 'Explore Dehumidifiers', href: 'dehumidifiers.html' },
  },
];

const koHeroStyles = {
  wrap: {
    position: 'relative', minHeight: '100vh', height: '100vh',
    background: '#030B14', overflow: 'hidden',
  },
  slide: {
    position: 'absolute', inset: 0,
    transition: 'opacity 1100ms cubic-bezier(0.22,1,0.36,1)',
  },
  bgSlot: { position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' },
  base: {
    position: 'absolute', inset: 0,
    background:
      'radial-gradient(circle at 18% 28%, rgba(24,183,255,0.18), transparent 42%),' +
      'linear-gradient(135deg,#030B14 0%,#071B2F 45%,#0A2342 78%,#061728 100%)',
  },
  overlay: {
    position: 'absolute', inset: 0, pointerEvents: 'none',
    background:
      'linear-gradient(180deg, rgba(3,11,20,0.62) 0%, rgba(3,11,20,0.30) 32%, rgba(3,11,20,0.48) 68%, #030B14 100%)',
  },
  grid: {
    position: 'absolute', inset: 0, opacity: 0.12, pointerEvents: 'none',
    backgroundImage: 'linear-gradient(90deg, rgba(110,216,255,0.18) 1px, transparent 1px), linear-gradient(rgba(110,216,255,0.16) 1px, transparent 1px)',
    backgroundSize: '88px 88px',
    maskImage: 'radial-gradient(circle at 50% 40%, rgba(0,0,0,1) 30%, transparent 78%)',
    WebkitMaskImage: 'radial-gradient(circle at 50% 40%, rgba(0,0,0,1) 30%, transparent 78%)',
  },
  content: {
    position: 'relative', zIndex: 5,
    maxWidth: 1040, margin: '0 auto', padding: '120px 40px 0',
    height: '100%',
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    textAlign: 'center',
    pointerEvents: 'none',
  },
  pill: {
    display: 'inline-flex', alignItems: 'center', gap: 12,
    borderRadius: 9999, border: '1px solid rgba(110,216,255,0.24)',
    background: 'rgba(4,17,31,0.45)', backdropFilter: 'blur(16px)',
    padding: '10px 22px', fontFamily: 'var(--ko-font-display)', fontSize: 11.5,
    fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase',
    color: '#6ED8FF', boxShadow: '0 0 40px rgba(24,183,255,0.12)',
  },
  pillDot: { width: 6, height: 6, borderRadius: 9999, background: '#18B7FF', boxShadow: '0 0 12px #18B7FF', animation: 'ko-pulse 2.4s ease-in-out infinite' },
  headline: {
    margin: '26px 0 0',
    fontFamily: 'var(--ko-font-display)', fontWeight: 900,
    fontSize: 'clamp(2.6rem, 6vw, 5.25rem)', lineHeight: 0.98,
    letterSpacing: '-0.028em', color: '#fff', textTransform: 'uppercase',
    textShadow: '0 2px 6px rgba(0,0,0,0.65), 0 6px 24px rgba(0,0,0,0.6), 0 14px 50px rgba(0,0,0,0.5)',
  },
  gradWord: { color: '#40C6FF', textShadow: '0 2px 6px rgba(0,0,0,0.6), 0 6px 24px rgba(0,0,0,0.55)' },
  sub: {
    margin: '24px auto 0', maxWidth: 660, fontSize: 19, lineHeight: 1.6,
    color: 'rgba(255,255,255,0.82)', textShadow: '0 2px 18px rgba(0,0,0,0.5)',
  },
  ctas: { marginTop: 40, display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', pointerEvents: 'auto' },

  arrow: {
    position: 'absolute', top: '50%', transform: 'translateY(-50%)', zIndex: 30,
    width: 56, height: 56, borderRadius: 9999,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    border: '1px solid rgba(110,216,255,0.22)', background: 'rgba(4,17,31,0.55)',
    backdropFilter: 'blur(18px)', color: '#9EEBFF', cursor: 'pointer',
    transition: 'all 220ms cubic-bezier(0.22,1,0.36,1)',
  },
  dots: {
    position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)',
    zIndex: 30, display: 'flex', alignItems: 'center', gap: 12,
  },
  dot: {
    height: 4, borderRadius: 9999, border: 'none', cursor: 'pointer', padding: 0,
    transition: 'all 360ms cubic-bezier(0.22,1,0.36,1)',
  },
  counter: {
    position: 'absolute', bottom: 36, right: 40, zIndex: 30,
    fontFamily: 'var(--ko-font-mono)', fontSize: 13, letterSpacing: '0.12em',
    color: 'rgba(110,216,255,0.75)',
  },
};

const Hero = () => {
  const [idx, setIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  const HERO_STORE_KEY = 'ko-hero-overrides';
  const loadHeroOverrides = () => { try { return JSON.parse(localStorage.getItem(HERO_STORE_KEY) || '{}'); } catch (e) { return {}; } };
  const mergeHeroSlides = (base, ov) => base.map((s) => ({ ...s, ...(ov[s.id] || {}), cta: { ...s.cta, ...((ov[s.id] && ov[s.id].cta) || {}) } }));
  const [slides, setSlides] = React.useState(() => mergeHeroSlides(KO_HERO_SLIDES, loadHeroOverrides()));

  const saveHeroField = (id, field, value) => {
    setSlides((prev) => prev.map((s) => (s.id === id ? { ...s, [field]: value } : s)));
    const ov = loadHeroOverrides();
    ov[id] = { ...(ov[id] || {}), [field]: value };
    localStorage.setItem(HERO_STORE_KEY, JSON.stringify(ov));
  };
  const saveHeroCta = (id, value) => {
    setSlides((prev) => prev.map((s) => (s.id === id ? { ...s, cta: { ...s.cta, label: value } } : s)));
    const ov = loadHeroOverrides();
    ov[id] = { ...(ov[id] || {}), cta: { ...((ov[id] && ov[id].cta) || {}), label: value } };
    localStorage.setItem(HERO_STORE_KEY, JSON.stringify(ov));
  };
  const editableProps = (onCommit) => ({
    contentEditable: true,
    suppressContentEditableWarning: true,
    spellCheck: false,
    className: 'ko-editable',
    onFocus: () => setPaused(true),
    onBlur: (e) => onCommit(e.currentTarget.innerText.replace(/\n+$/, '').trim()),
    onKeyDown: (e) => { if (e.key === 'Enter') { e.preventDefault(); e.currentTarget.blur(); } },
  });

  const n = slides.length;
  const go = (i) => setIdx((i + n) % n);
  const touch = React.useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((p) => (p + 1) % n), 6500);
    return () => clearInterval(t);
  }, [paused, n]);

  const onTouchStart = (e) => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e) => {
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x;
    const dy = t.clientY - touch.current.y;
    if (Math.abs(dx) > 44 && Math.abs(dx) > Math.abs(dy)) go(idx + (dx < 0 ? 1 : -1));
  };

  return (
    <section
      style={koHeroStyles.wrap}
      className="ko-hero-wrap"
      data-hero
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}>
      <style>{`
        .ko-hero-anim {
          opacity: 0; transform: translateY(24px);
          transition: opacity 900ms cubic-bezier(0.22,1,0.36,1), transform 900ms cubic-bezier(0.22,1,0.36,1);
          transition-delay: 260ms;
        }
        [data-active="true"] .ko-hero-anim { opacity: 1; transform: none; }
        .ko-editable { outline: none; cursor: text; pointer-events: auto; border-radius: 6px; transition: box-shadow 160ms, background 160ms; }
        .ko-editable:hover { box-shadow: 0 0 0 1px rgba(110,216,255,0.35); }
        .ko-editable:focus { box-shadow: 0 0 0 2px rgba(24,183,255,0.7); background: rgba(4,17,31,0.35); }
        @media (max-width: 768px) {
          .ko-hero-wrap { height: auto !important; min-height: 100svh !important; }
          .ko-hero-content { padding: 200px 22px 96px !important; justify-content: center !important; }
          .ko-hero-pill { font-size: 9.5px !important; letter-spacing: 0.16em !important; padding: 8px 16px !important; gap: 8px !important; }
          .ko-hero-headline { font-size: clamp(2.1rem, 9vw, 3rem) !important; margin-top: 20px !important; }
          .ko-hero-sub { font-size: 15.5px !important; margin-top: 18px !important; line-height: 1.55 !important; }
          .ko-hero-ctas { flex-direction: column !important; align-items: center !important; width: 100%; gap: 10px !important; margin-top: 28px !important; }
          .ko-hero-ctas a { width: auto !important; justify-content: center; padding: 10px 20px !important; font-size: 12.5px !important; }
          .ko-hero-arrow { display: none !important; }
          .ko-hero-counter { display: none !important; }
          .ko-hero-dots { left: 22px !important; right: 22px !important; bottom: 24px !important; transform: none !important; gap: 7px !important; }
          .ko-hero-dot { flex: 1 1 0 !important; width: auto !important; height: 0.5px !important; min-height: 0 !important; padding: 0 !important; border: 0 !important; line-height: 0 !important; font-size: 0 !important; -webkit-appearance: none !important; appearance: none !important; border-radius: 9999px !important; box-shadow: none !important; }
          .ko-hero-dot[data-active="false"] { background: rgba(255,255,255,0.28) !important; }
          .ko-hero-dot[data-active="true"] { background: linear-gradient(90deg,#18B7FF,#9EEBFF) !important; }
        }
      `}</style>

      <div style={koHeroStyles.base} />

      {slides.map((s, i) => (
        <div
          key={s.id}
          style={{ ...koHeroStyles.slide, opacity: i === idx ? 1 : 0, pointerEvents: i === idx ? 'auto' : 'none' }}
          data-active={i === idx ? 'true' : 'false'}>
          <image-slot
            id={s.id}
            placeholder={s.placeholder}
            src={s.src}
            shape="rect"
            fit="cover"
            style={koHeroStyles.bgSlot} />
          <div style={koHeroStyles.grid} />
          <div style={koHeroStyles.overlay} />

          <div style={koHeroStyles.content} className="ko-hero-content">
            <div className="ko-hero-anim">
              <span style={koHeroStyles.pill} className="ko-hero-pill">
                <span style={koHeroStyles.pillDot} />
                <span {...editableProps((v) => saveHeroField(s.id, 'eyebrow', v))}>{s.eyebrow}</span>
              </span>
              <h1 style={koHeroStyles.headline} className="ko-hero-headline">
                <span {...editableProps((v) => saveHeroField(s.id, 'lead', v))}>{s.lead}</span>{' '}
                <span style={koHeroStyles.gradWord} {...editableProps((v) => saveHeroField(s.id, 'accent', v))}>{s.accent}</span>
              </h1>
              <p style={koHeroStyles.sub} className="ko-hero-sub" {...editableProps((v) => saveHeroField(s.id, 'sub', v))}>{s.sub}</p>
              <div style={koHeroStyles.ctas} className="ko-hero-ctas">
                <a href={s.cta.href} className="ko-btn ko-btn-primary" style={{ textDecoration: 'none' }}>
                  {s.cta.label} <Icon name="arrow-right" size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Prev / Next */}
      <button
        aria-label="Previous slide"
        onClick={() => go(idx - 1)}
        className="ko-hero-arrow ko-hero-arrow-prev"
        style={{ ...koHeroStyles.arrow, left: 28 }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(24,183,255,0.18)'; e.currentTarget.style.borderColor = 'rgba(110,216,255,0.42)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(4,17,31,0.55)'; e.currentTarget.style.borderColor = 'rgba(110,216,255,0.22)'; }}>
        <span style={{ transform: 'rotate(180deg)', display: 'flex' }}><Icon name="arrow-right" size={22} /></span>
      </button>
      <button
        aria-label="Next slide"
        onClick={() => go(idx + 1)}
        className="ko-hero-arrow ko-hero-arrow-next"
        style={{ ...koHeroStyles.arrow, right: 28 }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(24,183,255,0.18)'; e.currentTarget.style.borderColor = 'rgba(110,216,255,0.42)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(4,17,31,0.55)'; e.currentTarget.style.borderColor = 'rgba(110,216,255,0.22)'; }}>
        <Icon name="arrow-right" size={22} />
      </button>

      {/* Dots */}
      <div style={koHeroStyles.dots} className="ko-hero-dots">
        {slides.map((s, i) => (
          <button
            key={s.id}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => go(i)}
            className="ko-hero-dot"
            data-active={i === idx ? 'true' : 'false'}
            style={{
              ...koHeroStyles.dot,
              width: i === idx ? 40 : 16,
              background: i === idx ? 'linear-gradient(90deg,#18B7FF,#9EEBFF)' : 'rgba(255,255,255,0.32)',
              boxShadow: i === idx ? '0 0 14px rgba(24,183,255,0.6)' : 'none',
            }} />
        ))}
      </div>
    </section>
  );
};

window.Hero = Hero;
