// Klima Optima, Solutions, Products, Stats, Clients, Why-Choose-Us sections

const koSecStyles = {
  solutions: {
    position:'relative',
    background:'linear-gradient(180deg,#030B14 0%,#061728 55%,#071B2F 100%)',
    padding:'96px 40px', overflow:'hidden',
  },
  solutionsBg: {
    position:'absolute', inset:0, pointerEvents:'none',
    background:'radial-gradient(circle at 20% 10%, rgba(24,183,255,0.18), transparent 30%), radial-gradient(circle at 80% 20%, rgba(110,216,255,0.12), transparent 28%)',
  },
  centered: { position:'relative', maxWidth: 1480, margin:'0 auto', textAlign:'center' },
  centeredLeft: { position:'relative', maxWidth: 1480, margin:'0 auto' },
  eyebrow: { fontFamily:'var(--ko-font-display)', fontWeight: 900, fontSize: 13, letterSpacing:'0.22em', textTransform:'uppercase', color:'#6ED8FF' },
  title: { margin:'18px 0 0', fontFamily:'var(--ko-font-display)', fontWeight: 900, fontSize:'clamp(2.25rem, 4.5vw, 3.5rem)', lineHeight: 1.05, letterSpacing:'-0.025em', color:'#fff' },
  gradWord: { background:'linear-gradient(90deg,#18B7FF,#9EEBFF)', WebkitBackgroundClip:'text', backgroundClip:'text', color:'transparent' },
  sub: { margin:'18px auto 0', maxWidth: 720, fontSize: 17, lineHeight: 1.65, color:'rgba(255,255,255,0.68)' },
  cardGrid: { marginTop: 56, display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap: 18, textAlign:'left' },
  cardGrid4: { marginTop: 48, display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap: 18, textAlign:'left' },

  solCard: {
    position:'relative', borderRadius: 34, padding: 36, minHeight: 380,
    border:'1px solid rgba(110,216,255,0.12)',
    background:'rgba(255,255,255,0.045)', backdropFilter:'blur(20px)',
    boxShadow:'0 24px 90px rgba(0,0,0,0.36)',
    overflow:'hidden', transition:'all 240ms cubic-bezier(0.22,1,0.36,1)',
    cursor:'pointer',
  },
  solGlow: { position:'absolute', inset:0, background:'radial-gradient(circle at 70% 12%, rgba(24,183,255,0.18), transparent 34%)', pointerEvents:'none' },
  solIcon: { position:'relative', height: 80, width: 80, borderRadius: 24, background:'rgba(24,183,255,0.10)', display:'flex', alignItems:'center', justifyContent:'center', color:'#6ED8FF', boxShadow:'0 0 34px rgba(24,183,255,0.18)', transition:'all 240ms' },
  solTitle: { position:'relative', marginTop: 40, fontFamily:'var(--ko-font-display)', fontWeight: 900, fontSize: 28, color:'#fff', letterSpacing:'-0.01em' },
  solCopy: { position:'relative', marginTop: 18, fontSize: 16, lineHeight: 1.7, color:'rgba(255,255,255,0.66)' },
  solCta: { position:'relative', marginTop: 36, display:'inline-flex', alignItems:'center', gap: 10, padding:'12px 22px', borderRadius: 9999, border:'1px solid rgba(110,216,255,0.15)', background:'rgba(255,255,255,0.055)', color:'#6ED8FF', fontFamily:'var(--ko-font-display)', fontWeight: 700, fontSize: 13, cursor:'pointer' },
};

const SolutionCard = ({ iconName, title, copy, href }) => {
  const [hover, setHover] = React.useState(false);
  const slug = (title || '').replace(/[^a-z0-9]+/gi, '-').toLowerCase();
  return (
    <div
      style={{...koSecStyles.solCard, transform: hover ? 'translateY(-6px)' : 'translateY(0)', borderColor: hover ? 'rgba(110,216,255,0.30)' : 'rgba(110,216,255,0.12)'}}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
    >
      <div style={koSecStyles.solGlow}/>
      <div style={{...koSecStyles.solIcon, background: hover ? 'rgba(24,183,255,0.16)' : 'rgba(24,183,255,0.10)'}}>
        <image-slot
          id={`solution-icon-${slug}`}
          placeholder="Icon"
          shape="rounded" radius="16"
          fit="contain"
          style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'transparent', display: 'block' }} />
      </div>
      <h3 style={koSecStyles.solTitle}>{title}</h3>
      <p style={koSecStyles.solCopy}>{copy}</p>
      <CtaButton href={href}/>
    </div>
  );
};

const CtaButton = ({ href }) => {
  const [hov, setHov] = React.useState(false);
  const baseStyle = {
    ...koSecStyles.solCta,
    textDecoration: 'none',
    transition: 'all 240ms cubic-bezier(0.22,1,0.36,1)',
    background: hov
      ? 'linear-gradient(90deg, rgba(14,142,208,0.35), rgba(24,183,255,0.45))'
      : 'rgba(255,255,255,0.055)',
    borderColor: hov ? 'rgba(110,216,255,0.55)' : 'rgba(110,216,255,0.15)',
    color: hov ? '#ffffff' : '#6ED8FF',
    boxShadow: hov
      ? '0 0 0 1px rgba(110,216,255,0.25), 0 0 24px rgba(24,183,255,0.45), 0 0 56px rgba(24,183,255,0.30)'
      : 'none',
    transform: hov ? 'translateY(-1px)' : 'translateY(0)',
  };
  return (
    <a href={href}
       style={baseStyle}
       onMouseEnter={() => setHov(true)}
       onMouseLeave={() => setHov(false)}>
      Learn More
      <span style={{display:'inline-flex', transition:'transform 240ms cubic-bezier(0.22,1,0.36,1)', transform: hov ? 'translateX(4px)' : 'translateX(0)'}}>
        <Icon name="arrow-right" size={14}/>
      </span>
    </a>
  );
};

const SolutionsSection = () => (
  <section style={koSecStyles.solutions}>
    <div style={koSecStyles.solutionsBg}/>
    <div style={koSecStyles.centered}>
      <span style={koSecStyles.eyebrow}>Our Solutions</span>
      <h2 style={koSecStyles.title}>
        <span>Our </span><span style={koSecStyles.gradWord}>Solutions</span>
      </h2>
      <p style={koSecStyles.sub}>
        Premium climate control solutions engineered for mobility, precision, humidity control, and critical environments.
      </p>
      <div style={koSecStyles.cardGrid}>
        <SolutionCard iconName="droplet" title="Humidity Control" copy="Maintain ideal moisture levels for healthier, more comfortable, and protected indoor environments." href="humidity-control.html"/>
        <SolutionCard iconName="snowflake" title="Portable Cooling" copy="Flexible cooling solutions designed for quick setup, mobility, and efficient temperature control." href="portable-cooling.html"/>
        <SolutionCard iconName="gauge" title="Precision Climate Control" copy="Accurate temperature and humidity management for critical environments, server rooms, archives, cleanrooms, labs." href="precision-climate-control.html"/>
      </div>
    </div>
  </section>
);

window.SolutionsSection = SolutionsSection;
window.SolutionCard = SolutionCard;
