// Klima Optima, Why Klima Optima (stats), Clients, Why Choose Us, Footer

const koLowerStyles = {
  why: { position:'relative', background:'#030B14', padding:'96px 40px', overflow:'hidden' },
  whyBg: { position:'absolute', inset:0, background:'radial-gradient(circle at 50% 0%, rgba(24,183,255,0.22), transparent 35%), linear-gradient(180deg,#030B14 0%,#061728 100%)' },
  inner: { position:'relative', maxWidth: 1480, margin:'0 auto', textAlign:'center' },
  eyebrow: { fontFamily:'var(--ko-font-display)', fontWeight: 900, fontSize: 13, letterSpacing:'0.22em', textTransform:'uppercase', color:'#6ED8FF' },
  title: { margin:'18px 0 0', fontFamily:'var(--ko-font-display)', fontWeight: 900, fontSize:'clamp(2.25rem, 4vw, 3.5rem)', letterSpacing:'-0.025em', color:'#fff', lineHeight:1.05 },
  gradWord: { background:'linear-gradient(90deg,#18B7FF,#9EEBFF)', WebkitBackgroundClip:'text', backgroundClip:'text', color:'transparent' },
  sub: { margin:'18px auto 0', maxWidth: 720, fontSize: 17, lineHeight: 1.65, color:'rgba(255,255,255,0.68)' },

  grid4: { marginTop: 56, display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap: 18, textAlign:'left' },
  stat: { borderRadius: 30, border:'1px solid rgba(110,216,255,0.12)', background:'rgba(255,255,255,0.045)', backdropFilter:'blur(20px)', padding: 30, boxShadow:'0 24px 90px rgba(0,0,0,0.35)' },
  statIcon: { height: 60, width: 60, borderRadius: 18, background:'rgba(24,183,255,0.10)', display:'flex', alignItems:'center', justifyContent:'center', color:'#6ED8FF', boxShadow:'0 0 30px rgba(24,183,255,0.18)' },
  statNum: { marginTop: 28, fontFamily:'var(--ko-font-display)', fontWeight: 900, fontSize: 56, lineHeight: 1, background:'linear-gradient(90deg,#18B7FF,#9EEBFF)', WebkitBackgroundClip:'text', backgroundClip:'text', color:'transparent', letterSpacing:'-0.02em' },
  statLabel: { marginTop: 14, fontFamily:'var(--ko-font-display)', fontWeight: 700, fontSize: 17, color:'#fff' },

  /* Clients */
  clients: { position:'relative', background:'linear-gradient(180deg,#0A2342 0%,#04111F 100%)', padding:'96px 40px', overflow:'hidden' },
  clientsBg: { position:'absolute', inset:0, opacity: 0.16, background:'radial-gradient(circle at 50% 0%, rgba(24,183,255,0.42), transparent 30%)' },
  clientPanel: { marginTop: 56, borderRadius: 36, border:'1px solid rgba(110,216,255,0.12)', background:'rgba(255,255,255,0.045)', backdropFilter:'blur(20px)', padding: 18, boxShadow:'0 30px 110px rgba(0,0,0,0.38)' },
  clientGrid: { display:'grid', gridTemplateColumns:'repeat(6,1fr)', gap: 14 },
  clientTile: { height: 96, borderRadius: 22, border:'1px solid rgba(110,216,255,0.10)', background:'rgba(6,23,40,0.7)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap: 8, color:'rgba(255,255,255,0.72)', fontFamily:'var(--ko-font-display)', fontWeight: 700, fontSize: 14, letterSpacing:'0.02em', cursor:'pointer', transition:'all 240ms' },
  tagWrap: { marginTop: 28, display:'flex', flexWrap:'wrap', justifyContent:'center', gap: 10 },
  tag: { padding:'8px 20px', borderRadius:9999, border:'1px solid rgba(110,216,255,0.10)', background:'rgba(255,255,255,0.035)', color:'rgba(255,255,255,0.62)', fontFamily:'var(--ko-font-display)', fontWeight: 600, fontSize: 13 },
  clientTabRow: { marginTop: 40, display:'flex', flexWrap:'wrap', justifyContent:'center', gap: 10 },
  clientTab: { padding:'11px 24px', borderRadius:9999, borderWidth:1, borderStyle:'solid', borderColor:'rgba(110,216,255,0.18)', background:'rgba(255,255,255,0.05)', color:'#6ED8FF', fontFamily:'var(--ko-font-display)', fontWeight: 700, fontSize: 14, letterSpacing:'0.01em', cursor:'pointer', transition:'all 220ms', whiteSpace:'nowrap' },
  clientTabActive: { background:'linear-gradient(90deg,#0E8ED0,#18B7FF)', borderColor:'transparent', color:'#04111F', boxShadow:'0 0 28px rgba(24,183,255,0.30)' },
  logoPlate: { borderRadius: 24, background:'rgba(255,255,255,0.94)', border:'1px solid rgba(110,216,255,0.16)', boxShadow:'0 12px 40px rgba(0,0,0,0.22)', padding:'28px 36px' },
  logoBanner: { display:'block', width:'100%', aspectRatio:'3 / 2', height:'auto', background:'transparent' },
  logoBannerAll: { display:'block', width:'100%', aspectRatio:'1446 / 2151', height:'auto', background:'transparent' },

  /* Why Choose Us */
  choose: { background:'#030B14', padding:'96px 40px' },
  choosePanel: { maxWidth: 1480, margin:'0 auto', borderRadius: 40, border:'1px solid rgba(110,216,255,0.12)', background:'linear-gradient(135deg,rgba(14,78,138,0.35),rgba(255,255,255,0.035))', backdropFilter:'blur(20px)', padding: 56, display:'grid', gridTemplateColumns:'1fr 1fr', gap: 48, alignItems:'center', boxShadow:'0 30px 120px rgba(0,0,0,0.4)' },
  chooseGrid: { display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap: 14 },
  chooseTile: { borderRadius: 24, border:'1px solid rgba(110,216,255,0.12)', background:'rgba(0,0,0,0.2)', padding: 26 },
  chooseIcon: { color:'#6ED8FF', display:'flex' },
  chooseTitle: { marginTop: 20, fontFamily:'var(--ko-font-display)', fontWeight: 700, fontSize: 18, color:'#fff' },

  /* Footer */
  footer: { background:'#030B14', borderTop:'1px solid rgba(110,216,255,0.10)', padding:'56px 40px 32px' },
  footerInner: { maxWidth: 1480, margin:'0 auto', display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr 1fr 1fr', gap: 48 },
  footerBrand: { display:'flex', flexDirection:'column', gap: 14 },
  footerTagline: { color:'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.6, maxWidth: 320 },
  footerColTitle: { fontFamily:'var(--ko-font-display)', fontWeight: 900, fontSize: 12, letterSpacing:'0.22em', textTransform:'uppercase', color:'#6ED8FF', marginBottom: 18 },
  footerList: { display:'flex', flexDirection:'column', gap: 12, fontSize: 14, color:'rgba(255,255,255,0.7)' },
  footerBottom: { maxWidth: 1480, margin:'40px auto 0', paddingTop: 24, borderTop:'1px solid rgba(110,216,255,0.08)', display:'flex', justifyContent:'space-between', color:'rgba(255,255,255,0.5)', fontSize: 13, fontFamily:'var(--ko-font-mono)', letterSpacing:'0.02em' },
};

const WhyKlimaOptima = () => (
  <section style={koLowerStyles.why}>
    <div style={koLowerStyles.whyBg}/>
    <div style={koLowerStyles.inner}>
      <span style={koLowerStyles.eyebrow}>Why Klima Optima</span>
      <h2 style={koLowerStyles.title}>Why <span style={koLowerStyles.gradWord}>Klima Optima</span></h2>
      <p style={koLowerStyles.sub}>We Combine Proven Technologies with a Depth of Industry Experience, and a Commitment to Customer Satisfaction.</p>
      <div style={koLowerStyles.grid4}>
        {[
          ['shield','10+','Years of Experience'],
          ['factory','3000+','Clients and Projects'],
          ['gear','100%','Local Support'],
          ['wind','5000+','Environments Optimized'],
        ].map(([ic,n,l]) => (
          <div key={l} style={koLowerStyles.stat}>
            <div style={koLowerStyles.statIcon}><Icon name={ic} size={28}/></div>
            <div style={koLowerStyles.statNum}>{n}</div>
            <div style={koLowerStyles.statLabel}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ClientTile = ({ icon, label }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{...koLowerStyles.clientTile,
        color: hover ? '#6ED8FF' : 'rgba(255,255,255,0.72)',
        borderColor: hover ? 'rgba(110,216,255,0.30)' : 'rgba(110,216,255,0.10)',
        background: hover ? 'rgba(24,183,255,0.05)' : 'rgba(6,23,40,0.7)',
      }}
    >
      <Icon name={icon} size={22}/>
      <span>{label}</span>
    </div>
  );
};

const CLIENT_TABS = [
  ['all', 'All'],
  ['healthcare', 'Healthcare'],
  ['hotels', 'Property'],
  ['food', 'Food Manufacturing'],
];

const CLIENT_IMAGES = {
  all: 'assets/clients/all-logos.png?v=2',
};

const ClientsSection = () => {
  const [tab, setTab] = React.useState('all');
  const activeLabel = (CLIENT_TABS.find(([id]) => id === tab) || [])[1] || 'All';
  return (
    <section style={koLowerStyles.clients} className="ko-clients">
      <style>{`
        @media (max-width: 768px) {
          .ko-clients { padding: 64px 14px !important; }
          .ko-clients .ko-logo-panel { padding: 8px !important; border-radius: 22px !important; }
          .ko-clients .ko-logo-plate { padding: 14px !important; border-radius: 16px !important; }
        }
      `}</style>
      <div style={koLowerStyles.clientsBg}/>
      <div style={{position:'relative', maxWidth: 1480, margin:'0 auto'}}>
        <div style={{textAlign:'center'}}>
          <span style={koLowerStyles.eyebrow}>Our Clients</span>
          <h2 style={koLowerStyles.title}>Trusted by Businesses Across Industries</h2>
          <p style={koLowerStyles.sub}>Climate control trusted by leaders across healthcare, hospitality, construction, commercial spaces, manufacturing, and critical environments.</p>
        </div>
        <div style={koLowerStyles.clientTabRow}>
          {CLIENT_TABS.map(([id, label]) => {
            const active = tab === id;
            return (
              <button
                key={id}
                onClick={() => setTab(id)}
                style={{ ...koLowerStyles.clientTab, ...(active ? koLowerStyles.clientTabActive : {}) }}
                onMouseEnter={(e) => { if (!active) { e.currentTarget.style.borderColor = 'rgba(110,216,255,0.42)'; e.currentTarget.style.background = 'rgba(24,183,255,0.10)'; } }}
                onMouseLeave={(e) => { if (!active) { e.currentTarget.style.borderColor = 'rgba(110,216,255,0.18)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; } }}>
                {label}
              </button>
            );
          })}
        </div>
        <div style={koLowerStyles.clientPanel} className="ko-logo-panel">
          {CLIENT_TABS.map(([id, label]) => (
            <div key={id} style={{ display: tab === id ? 'block' : 'none' }}>
              <div style={koLowerStyles.logoPlate} className="ko-logo-plate">
                <image-slot
                  id={`client-logos-${id}`}
                  placeholder={`Upload combined ${label} logos image`}
                  shape="rect"
                  fit="contain"
                  src={CLIENT_IMAGES[id]}
                  style={id === 'all' ? koLowerStyles.logoBannerAll : koLowerStyles.logoBanner}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => (
  <section style={koLowerStyles.choose}>
    <div style={koLowerStyles.choosePanel}>
      <div>
        <span style={koLowerStyles.eyebrow}>Why Klima Optima</span>
        <h2 style={{...koLowerStyles.title, textAlign:'left', marginTop: 16, fontSize:'clamp(2rem,3.5vw,3rem)'}}>Built for extreme heat, humidity, and demanding operations.</h2>
      </div>
      <div style={koLowerStyles.chooseGrid}>
        {[
          ['building','Business-ready deployment'],
          ['zap','Engineered for Performance and Reliability'],
          ['hardhat','Local Support and Technical Expertise'],
          ['handshake','The Professionals Choice'],
        ].map(([ic,t]) => (
          <div key={t} style={koLowerStyles.chooseTile}>
            <div style={koLowerStyles.chooseIcon}><Icon name={ic} size={28}/></div>
            <div style={koLowerStyles.chooseTitle}>{t}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer style={koLowerStyles.footer}>
    <div style={koLowerStyles.footerInner}>
      <div style={koLowerStyles.footerBrand}>
        <img src="assets/logos/klima-optima-reverse.png" alt="Klima Optima" style={{height:48, width:210, objectFit:'cover', objectPosition:'center', alignSelf:'flex-start'}}/>
        <p style={koLowerStyles.footerTagline}>Building engineered environments that comply with the temperature, humidity, and air-quality requirements of mission-critical, industrial, and commercial spaces.</p>
      </div>
      <div>
        <div style={koLowerStyles.footerColTitle}>Products</div>
        <div style={koLowerStyles.footerList}>
          <span>Portable AC</span><span>Dehumidifiers</span><span>Air Scrubbers</span><span>Critical Environment</span>
        </div>
      </div>
      <div>
        <div style={koLowerStyles.footerColTitle}>Solutions</div>
        <div style={koLowerStyles.footerList}>
          <span>Humidity Control</span><span>Portable Cooling</span><span>Project Support</span><span>Industries</span>
        </div>
      </div>
      <div>
        <div style={koLowerStyles.footerColTitle}>Company</div>
        <div style={koLowerStyles.footerList}>
          <span>About us</span><span>Resources</span><span>Careers</span><span>Contact</span>
        </div>
      </div>
      <div>
        <div style={koLowerStyles.footerColTitle}>Support</div>
        <div style={koLowerStyles.footerList}>
          <span>Service</span><span>Documentation</span><span>Inquire</span><span>+63 2 8000 0000</span>
        </div>
      </div>
    </div>
    <div style={koLowerStyles.footerBottom}>
      <span>© 2026 Klima Optima®. The Climate Control Specialist.</span>
      <span>Manila · Cebu · Davao</span>
    </div>
  </footer>
);

window.WhyKlimaOptima = WhyKlimaOptima;
window.ClientsSection = ClientsSection;
window.WhyChooseUs = WhyChooseUs;
window.Footer = Footer;
window.ClientTile = ClientTile;
