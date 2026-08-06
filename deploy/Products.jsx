// Klima Optima, Advanced Climate Control Solutions (3-card grid per brief)

const koProdStyles = {
  wrap: {
    position: 'relative',
    background: 'linear-gradient(180deg,#030B14 0%,#061728 45%,#0A2342 100%)',
    padding: '120px 40px', overflow: 'hidden'
  },
  bg: { position: 'absolute', inset: 0, opacity: 0.20, background: 'radial-gradient(circle at 50% 10%, rgba(24,183,255,0.45), transparent 28%)' },
  grid: {
    position: 'absolute', inset: 0, opacity: 0.06,
    backgroundImage: 'linear-gradient(90deg, rgba(110,216,255,0.5) 1px, transparent 1px), linear-gradient(rgba(110,216,255,0.5) 1px, transparent 1px)',
    backgroundSize: '86px 86px',
    maskImage: 'radial-gradient(circle at 50% 30%, rgba(0,0,0,1) 30%, transparent 75%)',
    WebkitMaskImage: 'radial-gradient(circle at 50% 30%, rgba(0,0,0,1) 30%, transparent 75%)'
  },
  inner: { position: 'relative', maxWidth: 1480, margin: '0 auto' },
  head: { textAlign: 'center', marginBottom: 64 },
  eyebrow: { fontFamily: 'var(--ko-font-display)', fontWeight: 900, fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#6ED8FF' },
  title: { margin: '18px 0 0', fontFamily: 'var(--ko-font-display)', fontWeight: 900, fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', lineHeight: 1.05, letterSpacing: '-0.025em', color: '#fff', maxWidth: 820, marginLeft: 'auto', marginRight: 'auto' },
  gradWord: { background: 'linear-gradient(90deg,#18B7FF,#9EEBFF)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' },
  intro: { margin: '20px auto 0', maxWidth: 640, color: 'rgba(255,255,255,0.66)', fontSize: 17, lineHeight: 1.6 },
  viewAll: {
    display: 'inline-flex', alignItems: 'center', gap: 12, padding: '14px 24px',
    borderRadius: 9999, background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(16px)',
    border: '1px solid rgba(110,216,255,0.18)', color: '#fff',
    fontFamily: 'var(--ko-font-display)', fontWeight: 700, fontSize: 14, cursor: 'pointer',
    transition: 'all 220ms', whiteSpace: 'nowrap'
  },
  cardsGrid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22 },

  card: {
    position: 'relative', borderRadius: 32, padding: 32, minHeight: 540,
    border: '1px solid rgba(110,216,255,0.12)',
    background: 'linear-gradient(180deg, rgba(10,35,66,0.55), rgba(6,23,40,0.85))',
    backdropFilter: 'blur(20px)',
    boxShadow: '0 30px 100px rgba(0,0,0,0.45)',
    overflow: 'hidden', transition: 'all 260ms cubic-bezier(0.22,1,0.36,1)',
    cursor: 'pointer',
    display: 'flex', flexDirection: 'column'
  },
  cardGlow: { position: 'absolute', top: -40, right: -40, width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(24,183,255,0.22), transparent 70%)', pointerEvents: 'none', transition: 'opacity 300ms' },
  cardGridBg: {
    position: 'absolute', inset: 0, opacity: 0.08,
    backgroundImage: 'linear-gradient(90deg, rgba(110,216,255,0.7) 1px, transparent 1px), linear-gradient(rgba(110,216,255,0.7) 1px, transparent 1px)',
    backgroundSize: '36px 36px',
    pointerEvents: 'none'
  },
  cardTop: { position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  iconBox: { height: 56, width: 56, borderRadius: 18, background: 'rgba(24,183,255,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6ED8FF', boxShadow: '0 0 28px rgba(24,183,255,0.16)', transition: 'all 240ms', border: '1px solid rgba(110,216,255,0.16)' },
  badge: {
    display: 'inline-flex', alignItems: 'center', gap: 6,
    padding: '5px 12px',
    borderRadius: 9999,
    border: '1px solid rgba(110,216,255,0.20)',
    background: 'rgba(24,183,255,0.08)',
    fontFamily: 'var(--ko-font-mono)', fontSize: 11, fontWeight: 600,
    letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6ED8FF'
  },
  prodTitle: { position: 'relative', marginTop: 28, fontFamily: 'var(--ko-font-display)', fontWeight: 900, fontSize: 26, color: '#fff', lineHeight: 1.12, letterSpacing: '-0.015em' },
  prodCopy: { position: 'relative', marginTop: 14, color: 'rgba(255,255,255,0.64)', lineHeight: 1.6, fontSize: 14.5 },

  /* Stylized product render, premium */
  render: { position: 'relative', height: 220, marginTop: 28, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' },
  renderShadow: { position: 'absolute', bottom: 8, height: 14, width: '70%', borderRadius: '50%', background: 'rgba(0,0,0,0.6)', filter: 'blur(12px)' },
  renderGlow: { position: 'absolute', bottom: -20, height: 100, width: 220, borderRadius: '50%', background: 'rgba(24,183,255,0.30)', filter: 'blur(48px)' },

  /* Stats row */
  specs: { position: 'relative', marginTop: 'auto', paddingTop: 24, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, borderTop: '1px solid rgba(110,216,255,0.10)' },
  spec: { paddingTop: 16, paddingBottom: 4 },
  specLabel: { fontFamily: 'var(--ko-font-display)', fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(110,216,255,0.55)' },
  specVal: { marginTop: 6, fontFamily: 'var(--ko-font-display)', fontSize: 15, fontWeight: 700, color: '#fff', letterSpacing: '-0.01em' },

  ctaRow: { position: 'relative', marginTop: 22, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 },
  link: {
    color: '#6ED8FF', fontFamily: 'var(--ko-font-display)', fontWeight: 700, fontSize: 13,
    display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'gap 220ms'
  },
  unitCount: {
    fontFamily: 'var(--ko-font-mono)', fontSize: 11, fontWeight: 500,
    color: 'rgba(255,255,255,0.42)', letterSpacing: '0.06em'
  }
};

/* ========================================================================
   Stylized SVG product renders, premium portable AC, dehumidifier, precision
   ======================================================================== */

const RenderAC = ({ hover }) =>
<svg viewBox="0 0 200 220" style={{ position: 'relative', height: '100%', width: 'auto', filter: hover ? 'drop-shadow(0 30px 40px rgba(24,183,255,0.25))' : 'drop-shadow(0 20px 30px rgba(0,0,0,0.4))', transition: 'filter 320ms' }}>
    <defs>
      <linearGradient id="acBody" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="55%" stopColor="#cbd5e1" />
        <stop offset="100%" stopColor="#475569" />
      </linearGradient>
      <linearGradient id="acFront" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
      <linearGradient id="acScreen" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#0e8ed0" />
        <stop offset="100%" stopColor="#18B7FF" />
      </linearGradient>
    </defs>
    {/* Wheels */}
    <ellipse cx="60" cy="208" rx="12" ry="4" fill="#0f172a" />
    <ellipse cx="140" cy="208" rx="12" ry="4" fill="#0f172a" />
    {/* Main body */}
    <rect x="40" y="20" width="120" height="190" rx="14" fill="url(#acBody)" stroke="rgba(255,255,255,0.4)" />
    {/* Top vent */}
    <rect x="56" y="28" width="88" height="14" rx="4" fill="#0f172a" />
    <g stroke="#1e293b" strokeWidth="1.2">
      {Array.from({ length: 7 }).map((_, i) => <line key={i} x1={62 + i * 12} y1="30" x2={62 + i * 12} y2="40" />)}
    </g>
    {/* Display screen */}
    <rect x="56" y="54" width="88" height="36" rx="6" fill="url(#acFront)" />
    <rect x="64" y="62" width="72" height="20" rx="3" fill="url(#acScreen)" opacity={hover ? 1 : 0.85} />
    <text x="100" y="76" fill="#04111F" fontFamily="monospace" fontSize="11" fontWeight="800" textAnchor="middle">18°C</text>
    {/* Front grill - vents */}
    <rect x="56" y="100" width="88" height="80" rx="8" fill="url(#acFront)" />
    <g stroke="rgba(24,183,255,0.5)" strokeWidth="1">
      {Array.from({ length: 9 }).map((_, i) => <line key={i} x1="64" y1={108 + i * 8} x2="136" y2={108 + i * 8} />)}
    </g>
    {/* LED bar */}
    <rect x="56" y="188" width="88" height="6" rx="3" fill="#18B7FF" opacity={hover ? 1 : 0.75}>
      {hover && <animate attributeName="opacity" values="0.7;1;0.7" dur="1.8s" repeatCount="indefinite" />}
    </rect>
    {/* Highlight */}
    <rect x="42" y="22" width="6" height="186" rx="3" fill="rgba(255,255,255,0.5)" />
  </svg>;


const RenderDehum = ({ hover }) =>
<svg viewBox="0 0 200 220" style={{ position: 'relative', height: '100%', width: 'auto', filter: hover ? 'drop-shadow(0 30px 40px rgba(24,183,255,0.25))' : 'drop-shadow(0 20px 30px rgba(0,0,0,0.4))', transition: 'filter 320ms' }}>
    <defs>
      <linearGradient id="dhBody" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e2e8f0" />
        <stop offset="60%" stopColor="#94a3b8" />
        <stop offset="100%" stopColor="#334155" />
      </linearGradient>
      <radialGradient id="dhDrop" cx="0.5" cy="0.4" r="0.6">
        <stop offset="0%" stopColor="#9EEBFF" />
        <stop offset="100%" stopColor="#0e8ed0" />
      </radialGradient>
    </defs>
    {/* Wheels */}
    <ellipse cx="55" cy="208" rx="10" ry="3.5" fill="#0f172a" />
    <ellipse cx="145" cy="208" rx="10" ry="3.5" fill="#0f172a" />
    {/* Body */}
    <rect x="34" y="24" width="132" height="186" rx="22" fill="url(#dhBody)" stroke="rgba(255,255,255,0.4)" />
    {/* Handle slot */}
    <rect x="84" y="30" width="32" height="6" rx="3" fill="#0f172a" opacity="0.6" />
    {/* Big circular intake */}
    <circle cx="100" cy="100" r="44" fill="#0f172a" />
    <circle cx="100" cy="100" r="44" fill="none" stroke="rgba(24,183,255,0.30)" strokeWidth="1.5" />
    {Array.from({ length: 14 }).map((_, i) => {
    const a = i / 14 * Math.PI * 2;
    return <line key={i}
    x1={100 + Math.cos(a) * 20} y1={100 + Math.sin(a) * 20}
    x2={100 + Math.cos(a) * 40} y2={100 + Math.sin(a) * 40}
    stroke="rgba(110,216,255,0.45)" strokeWidth="1.2" />;
  })}
    <circle cx="100" cy="100" r="14" fill="url(#dhDrop)" opacity={hover ? 1 : 0.85} />
    <path d="M100 92 q-5 6 -5 11 a5 5 0 0010 0 q0 -5 -5 -11z" fill="rgba(255,255,255,0.85)" />
    {/* Lower control panel */}
    <rect x="60" y="160" width="80" height="32" rx="8" fill="#0f172a" />
    <circle cx="76" cy="176" r="5" fill="#18B7FF" opacity={hover ? 1 : 0.8} />
    <rect x="90" y="172" width="42" height="8" rx="2" fill="rgba(24,183,255,0.25)" />
    <rect x="90" y="172" width="28" height="8" rx="2" fill="#18B7FF" opacity={hover ? 1 : 0.8} />
    {/* Highlight */}
    <rect x="36" y="26" width="6" height="180" rx="3" fill="rgba(255,255,255,0.5)" />
  </svg>;


const RenderPrecision = ({ hover }) =>
<svg viewBox="0 0 200 220" style={{ position: 'relative', height: '100%', width: 'auto', filter: hover ? 'drop-shadow(0 30px 40px rgba(24,183,255,0.25))' : 'drop-shadow(0 20px 30px rgba(0,0,0,0.4))', transition: 'filter 320ms' }}>
    <defs>
      <linearGradient id="pcBody" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="50%" stopColor="#0f172a" />
        <stop offset="100%" stopColor="#020617" />
      </linearGradient>
      <linearGradient id="pcAccent" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#18B7FF" />
        <stop offset="100%" stopColor="#0e8ed0" />
      </linearGradient>
    </defs>
    {/* Base shadow */}
    <ellipse cx="100" cy="210" rx="60" ry="5" fill="#000" opacity="0.5" />
    {/* Cabinet */}
    <rect x="36" y="18" width="128" height="190" rx="10" fill="url(#pcBody)" stroke="rgba(110,216,255,0.20)" />
    {/* Top vent rack */}
    <rect x="46" y="28" width="108" height="14" rx="3" fill="#0a0f1c" />
    <g stroke="rgba(110,216,255,0.4)" strokeWidth="1">
      {Array.from({ length: 11 }).map((_, i) => <line key={i} x1={50 + i * 10} y1="30" x2={50 + i * 10} y2="40" />)}
    </g>
    {/* Main display */}
    <rect x="48" y="52" width="104" height="60" rx="6" fill="#04111F" stroke="rgba(24,183,255,0.35)" />
    {/* Display content - graph */}
    <polyline points="54,96 64,82 74,86 84,70 94,76 104,62 114,70 124,58 134,66 144,54" fill="none" stroke="url(#pcAccent)" strokeWidth="1.6" />
    <text x="56" y="68" fill="#6ED8FF" fontFamily="monospace" fontSize="8" fontWeight="700">22.4°C · 48%RH</text>
    <text x="56" y="106" fill="rgba(110,216,255,0.55)" fontFamily="monospace" fontSize="6">STABLE</text>
    {/* Sub-displays / dials */}
    <circle cx="68" cy="138" r="14" fill="#04111F" stroke="rgba(24,183,255,0.4)" />
    <path d="M68 138 L78 132" stroke="#18B7FF" strokeWidth="2" strokeLinecap="round" />
    <circle cx="68" cy="138" r="2" fill="#18B7FF" />
    <circle cx="100" cy="138" r="14" fill="#04111F" stroke="rgba(24,183,255,0.4)" />
    <path d="M100 138 L106 128" stroke="#18B7FF" strokeWidth="2" strokeLinecap="round" />
    <circle cx="100" cy="138" r="2" fill="#18B7FF" />
    <circle cx="132" cy="138" r="14" fill="#04111F" stroke="rgba(24,183,255,0.4)" />
    <path d="M132 138 L138 130" stroke="#18B7FF" strokeWidth="2" strokeLinecap="round" />
    <circle cx="132" cy="138" r="2" fill="#18B7FF" />
    {/* Buttons row */}
    <rect x="50" y="166" width="100" height="32" rx="6" fill="#0a0f1c" stroke="rgba(110,216,255,0.15)" />
    {Array.from({ length: 5 }).map((_, i) =>
  <circle key={i} cx={62 + i * 22} cy="182" r="4" fill={i === 0 && hover ? "#18B7FF" : "rgba(110,216,255,0.4)"}>
        {i === 0 && hover && <animate attributeName="r" values="3.5;5;3.5" dur="1.4s" repeatCount="indefinite" />}
      </circle>
  )}
    {/* Side rim */}
    <rect x="36" y="18" width="3" height="190" fill="rgba(110,216,255,0.20)" />
    <rect x="161" y="18" width="3" height="190" fill="rgba(0,0,0,0.5)" />
  </svg>;


const PRODUCTS = [
{
  icon: 'snowflake',
  eyebrow: 'Aircons',
  title: 'Portable Air Conditioning',
  copy: 'Fast, targeted cooling for offices, hospitality, healthcare, events, and operational backup. Move it where the heat is.',
  Render: RenderAC,
  specs: [
  ['Capacity', 'up to 36k BTU'],
  ['Airflow', 'High-volume air delivery'],
  ['Portability', 'Castor wheels']],

  units: '5 units in range'
},
{
  icon: 'droplet',
  eyebrow: 'Dehumidifiers',
  title: 'Dehumidifiers',
  copy: 'Control moisture, reduce mold and corrosion risk, and protect comfort in humid commercial and storage spaces.',
  Render: RenderDehum,
  specs: [
  ['Extraction', '30 to 500 L / Day'],
  ['Mode', 'Auto-RH'],
  ['Drainage', 'Continuous']],

  units: '4 units in range'
},
{
  icon: 'wind',
  eyebrow: 'Humidifiers',
  title: 'Humidifiers',
  copy: 'Inject precise moisture into dry, conditioned spaces, protecting materials, processes, and occupant comfort across cleanrooms, archives, print rooms, and production lines.',
  Render: RenderPrecision,
  specs: [
  ['Tolerance', '±0.5 °C'],
  ['RH range', '30-70 %'],
  ['Monitoring', '24/7 BMS']],

  units: 'Bespoke deployment'
}];


const ProductCard = ({ icon, eyebrow, title, copy, Render, specs, units, index }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      style={{
        ...koProdStyles.card,
        borderColor: hover ? 'rgba(110,216,255,0.34)' : 'rgba(110,216,255,0.12)',
        transform: hover ? 'translateY(-8px)' : 'none',
        boxShadow: hover ? '0 40px 110px rgba(0,0,0,0.55), 0 0 60px rgba(24,183,255,0.10)' : '0 30px 100px rgba(0,0,0,0.45)'
      }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      
      <div style={{ ...koProdStyles.cardGlow, opacity: hover ? 1 : 0.7 }} />
      <div style={koProdStyles.cardGridBg} />

      <div style={koProdStyles.cardTop}>
        <div style={{ ...koProdStyles.iconBox, background: hover ? '#18B7FF' : 'rgba(24,183,255,0.10)', color: hover ? '#04111F' : '#6ED8FF' }}>
          <Icon name={icon} size={26} />
        </div>
        <span style={koProdStyles.badge}>{eyebrow}</span>
      </div>

      <h3 style={koProdStyles.prodTitle}>{title}</h3>
      <p style={koProdStyles.prodCopy}>{copy}</p>

      <div style={{ position: 'relative', marginTop: 'auto', paddingTop: 24, marginBottom: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: '-10% 5%', background: 'radial-gradient(ellipse at 50% 60%, rgba(24,183,255,0.30), transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none', zIndex: 0 }} />
        <image-slot id={`home-product-${index}`} placeholder="Click or drop to upload image" shape="rounded" radius="16" style={{ position: 'relative', width: '100%', height: '200px', borderRadius: '16px', background: 'rgba(6,23,40,0.55)', cursor: 'pointer', zIndex: 1, border: "2px rgba(110, 216, 255, 0.4)" }} />
      </div>

      <div style={koProdStyles.ctaRow}>
        <span style={{ ...koProdStyles.link, gap: hover ? 12 : 8, color: hover ? '#9EEBFF' : '#6ED8FF' }}>
          View Products <Icon name="arrow-right" size={14} />
        </span>
      </div>
    </div>);

};

const ProductsSection = () => {
  const [vhover, setVHover] = React.useState(false);
  return (
    <section style={koProdStyles.wrap} id="products">
      <div style={koProdStyles.bg} />
      <div style={koProdStyles.grid} />
      <div style={koProdStyles.inner}>
        <div style={koProdStyles.head}>
          <span style={koProdStyles.eyebrow}>Our Products</span>
          <h2 style={koProdStyles.title}>Advanced Climate <span style={koProdStyles.gradWord}>Control Solutions</span></h2>
          <p style={koProdStyles.intro}>Engineered units across portable cooling, dehumidification, and precision humidity control, built for commercial deployment.</p>
        </div>
        <div style={koProdStyles.cardsGrid}>
          {PRODUCTS.map((p, i) => <ProductCard key={p.title} {...p} index={i} />)}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
          <button
            style={{
              ...koProdStyles.viewAll,
              borderColor: vhover ? 'rgba(110,216,255,0.38)' : 'rgba(110,216,255,0.18)',
              background: vhover ? 'rgba(24,183,255,0.10)' : 'rgba(255,255,255,0.05)',
              boxShadow: vhover ? '0 0 40px rgba(24,183,255,0.18)' : 'none'
            }}
            onMouseEnter={() => setVHover(true)} onMouseLeave={() => setVHover(false)}>
            
            View all products <Icon name="arrow-right" size={16} />
          </button>
        </div>
      </div>
    </section>);

};

window.ProductsSection = ProductsSection;
window.ProductCard = ProductCard;