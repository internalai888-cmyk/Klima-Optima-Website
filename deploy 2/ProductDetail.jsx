// Klima Optima, Product detail page template
// Used by air-conditioners.html, dehumidifiers.html, humidifiers.html

const ProductDetail = ({active, crumbs, eyebrow, headline, headlineHighlight, sub, Render, benefits, models, applications, specs, specHeaders}) => {
  return (
    <Page active={active}>
      {/* ===================== HERO ===================== */}
      <section style={{position:'relative', overflow:'hidden', background:'#04111F', paddingTop: 164}}>
        <div style={{position:'absolute', inset: 0, background:'radial-gradient(circle at 18% 30%, rgba(24,183,255,0.30), transparent 32%), radial-gradient(circle at 82% 18%, rgba(14,78,138,0.55), transparent 40%), linear-gradient(135deg,#030B14 0%,#071B2F 45%,#0A2342 75%,#061728 100%)'}}/>
        <div style={{position:'absolute', inset:0, opacity:0.14, backgroundImage:'linear-gradient(90deg, rgba(110,216,255,0.18) 1px, transparent 1px), linear-gradient(rgba(110,216,255,0.16) 1px, transparent 1px)', backgroundSize:'86px 86px', maskImage:'radial-gradient(circle at 65% 50%, rgba(0,0,0,1) 30%, transparent 80%)', WebkitMaskImage:'radial-gradient(circle at 65% 50%, rgba(0,0,0,1) 30%, transparent 80%)'}}/>
        <div style={{position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(0,0,0,0.30), transparent 22%, transparent 82%, #030B14)', pointerEvents:'none'}}/>

        <div style={{position:'relative', zIndex: 5, maxWidth: 1480, margin:'0 auto', padding:'40px 40px 100px', display:'grid', gridTemplateColumns:'1.05fr 0.95fr', gap: 56, alignItems:'center'}}>
          <div className="ko-fade-up">
            {/* Crumbs */}
            <div style={{display:'inline-flex', alignItems:'center', gap: 10, color:'rgba(110,216,255,0.75)', fontFamily:'var(--ko-font-display)', fontSize: 12.5, fontWeight: 600, letterSpacing:'0.04em'}}>
              {crumbs.map((c, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <span style={{color:'rgba(110,216,255,0.40)'}}>›</span>}
                  {c.href
                    ? <a href={c.href} style={{color:'rgba(110,216,255,0.75)', textDecoration:'none'}}>{c.label}</a>
                    : <span style={{color:'#fff'}}>{c.label}</span>}
                </React.Fragment>
              ))}
            </div>
            <span style={{marginTop: 24, display:'inline-flex', alignItems:'center', gap: 12, borderRadius: 9999, border:'1px solid rgba(110,216,255,0.20)', background:'rgba(255,255,255,0.05)', backdropFilter:'blur(16px)', padding:'9px 20px', fontFamily:'var(--ko-font-display)', fontSize: 11.5, fontWeight: 800, letterSpacing:'0.22em', textTransform:'uppercase', color:'#6ED8FF'}}>
              <span style={{width:6, height:6, borderRadius:9999, background:'#18B7FF', boxShadow:'0 0 12px #18B7FF', animation:'ko-pulse 2.4s ease-in-out infinite'}}/>
              {eyebrow}
            </span>
            <h1 style={{margin:'28px 0 0', maxWidth: 720, fontFamily:'var(--ko-font-display)', fontWeight: 900, fontSize:'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 0.98, letterSpacing:'-0.028em', color:'#fff', textTransform:'uppercase'}}>
              {headline} <span style={{background:'linear-gradient(90deg,#18B7FF,#9EEBFF)', WebkitBackgroundClip:'text', backgroundClip:'text', color:'transparent'}}>{headlineHighlight}</span>
            </h1>
            <p style={{margin:'28px 0 0', maxWidth: 640, fontSize: 18, lineHeight: 1.65, color:'rgba(255,255,255,0.74)'}}>{sub}</p>
            <div style={{marginTop: 40, display:'flex', flexWrap:'wrap', gap: 14}}>
              <a href="contact.html" className="ko-btn ko-btn-primary" style={{textDecoration:'none'}}>Request Consultation <Icon name="arrow-right" size={18}/></a>
              <a href="resources.html" className="ko-btn ko-btn-secondary" style={{textDecoration:'none'}}>Download Brochure</a>
            </div>
          </div>

          {/* Hero product render */}
          <div style={{position:'relative', minHeight: 540, display:'flex', alignItems:'center', justifyContent:'center'}} className="ko-fade-in">
            <div style={{position:'absolute', inset:'10% -10%', borderRadius:'50%', background:'radial-gradient(circle, rgba(24,183,255,0.32), transparent 60%)', filter:'blur(50px)', pointerEvents:'none'}}/>
            <div style={{position:'relative', height: 520}} className="ko-hero-float">
              <Render/>
            </div>
            {/* Floating metric chip */}
            <div className="ko-hero-float-slow" style={{position:'absolute', right: 0, top: 30, borderRadius: 18, border:'1px solid rgba(110,216,255,0.22)', background:'rgba(4,17,31,0.82)', backdropFilter:'blur(24px)', padding:'14px 18px', boxShadow:'0 24px 80px rgba(0,0,0,0.5)', zIndex: 4}}>
              <div style={{fontFamily:'var(--ko-font-display)', fontWeight: 900, fontSize: 10, letterSpacing:'0.20em', textTransform:'uppercase', color:'#6ED8FF'}}>Top model</div>
              <div style={{marginTop: 8, display:'flex', alignItems:'baseline', gap: 8}}>
                <span style={{fontFamily:'var(--ko-font-display)', fontWeight: 900, fontSize: 22, color:'#fff', letterSpacing:'-0.02em'}}>{models[models.length-1].name}</span>
              </div>
              <div style={{marginTop: 4, fontFamily:'var(--ko-font-mono)', fontSize: 11, color:'rgba(110,216,255,0.65)', letterSpacing:'0.06em'}}>{models[models.length-1].label}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== BENEFITS ===================== */}
      <SectionBand shade={1}>
        <Reveal>
          <SectionHead align="center" eyebrow="Benefits" title="Engineered for" titleHighlight="commercial duty." sub="Specified for the operational demands of the most demanding spaces."/>
          <div style={{marginTop: 56, display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap: 18}}>
            {benefits.map(([ic,t,c]) => <FeatureCard key={t} icon={ic} title={t} copy={c}/>)}
          </div>
        </Reveal>
      </SectionBand>

      {/* ===================== FEATURED MODELS ===================== */}
      <SectionBand shade={2}>
        <Reveal>
          <SectionHead align="center" eyebrow="Featured Models" title="The" titleHighlight="range." sub="Pick by coverage area, BTU rating, or operational pattern."/>
          <div style={{marginTop: 56, display:'grid', gridTemplateColumns:`repeat(${Math.min(models.length, 4)},1fr)`, gap: 18}}>
            {models.map(m => <ModelCard key={m.label} m={m}/>)}
          </div>
        </Reveal>
      </SectionBand>

      {/* ===================== APPLICATIONS ===================== */}
      <SectionBand shade={0}>
        <Reveal>
          <SectionHead align="center" eyebrow="Applications" title="Where these units" titleHighlight="get deployed."/>
          <div style={{marginTop: 56, display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap: 18}}>
            {applications.map(([ic,t,c]) => (
              <GlassCard key={t} padding={28}>
                <div style={{width:52, height:52, borderRadius:16, background:'rgba(24,183,255,0.10)', color:'#6ED8FF', display:'flex', alignItems:'center', justifyContent:'center', border:'1px solid rgba(110,216,255,0.18)'}}>
                  <Icon name={ic} size={24}/>
                </div>
                <h4 style={{margin:'22px 0 0', fontFamily:'var(--ko-font-display)', fontWeight: 800, fontSize: 19, color:'#fff', letterSpacing:'-0.01em', lineHeight: 1.25}}>{t}</h4>
                <p style={{margin:'12px 0 0', fontSize: 14, color:'rgba(255,255,255,0.64)', lineHeight: 1.6}}>{c}</p>
              </GlassCard>
            ))}
          </div>
        </Reveal>
      </SectionBand>

      {/* ===================== SPECS TABLE ===================== */}
      <SectionBand shade={1}>
        <Reveal>
          <SectionHead align="center" eyebrow="Specifications" title="Technical" titleHighlight="comparison." sub="Side-by-side specs across the range. For full submittal sheets, download the brochure."/>
          <div style={{marginTop: 56, borderRadius: 30, border:'1px solid rgba(110,216,255,0.16)', background:'rgba(255,255,255,0.04)', backdropFilter:'blur(20px)', overflow:'hidden', boxShadow:'0 30px 100px rgba(0,0,0,0.4)'}}>
            <table style={{width:'100%', borderCollapse:'collapse', color:'#fff', fontFamily:'var(--ko-font-body)', fontSize: 14}}>
              <thead>
                <tr style={{background:'rgba(24,183,255,0.06)'}}>
                  <th style={{padding:'20px 28px', textAlign:'left', fontFamily:'var(--ko-font-display)', fontWeight: 900, fontSize: 11.5, letterSpacing:'0.18em', textTransform:'uppercase', color:'#6ED8FF'}}>Spec</th>
                  {specHeaders.map(h => (
                    <th key={h} style={{padding:'20px 24px', textAlign:'left', fontFamily:'var(--ko-font-display)', fontWeight: 900, fontSize: 11.5, letterSpacing:'0.18em', textTransform:'uppercase', color:'#6ED8FF'}}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {specs.map((row, i) => (
                  <tr key={i} style={{borderTop:'1px solid rgba(110,216,255,0.08)'}}>
                    <td style={{padding:'16px 28px', fontFamily:'var(--ko-font-display)', fontWeight: 700, color:'rgba(255,255,255,0.78)'}}>{row[0]}</td>
                    {row.slice(1).map((v, j) => (
                      <td key={j} style={{padding:'16px 24px', color:'rgba(255,255,255,0.72)', fontFamily:'var(--ko-font-mono)', fontSize: 13, letterSpacing:'0.02em'}}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </SectionBand>

      {/* ===================== WHY KO ===================== */}
      <SectionBand shade={0}>
        <Reveal>
          <SectionHead align="center" eyebrow="Why Klima Optima" title="Trust" titleHighlight="In Numbers." sub="A track record measured in deployments, not just billable hours."/>
          <div style={{marginTop: 56, display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap: 18}}>
            <StatCard icon="shield"  value="10+"    label="Years of Experience"/>
            <StatCard icon="factory" value="3,000"  label="Clients and Projects"/>
            <StatCard icon="support" value="100%"   label="Local Support"/>
            <StatCard icon="wind"    value="1M+"     label="m² Climate-treated"/>
          </div>
        </Reveal>
      </SectionBand>

      {/* ===================== CTA ===================== */}
      <CTABand
        eyebrow="Ready to deploy?"
        title="Let's size and spec the right unit for your space."
        sub="Surface area, occupancy, operational tolerance, deployment timeline, we'll come back with a sized proposal in three business days."
        primary={{label:'Request Consultation', href:'contact.html'}}
        secondary={{label:'Download Brochure', href:'resources.html'}}
      />
    </Page>
  );
};

const ModelCard = ({m}) => {
  const [hov, setHov] = React.useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      position:'relative', display:'flex', flexDirection:'column',
      borderRadius: 30, padding: 28, minHeight: 380,
      border:'1px solid ' + (hov ? 'rgba(110,216,255,0.30)' : 'rgba(110,216,255,0.12)'),
      background:'rgba(255,255,255,0.045)', backdropFilter:'blur(20px)',
      boxShadow: hov ? '0 30px 100px rgba(0,0,0,0.45), 0 0 50px rgba(24,183,255,0.10)' : '0 24px 90px rgba(0,0,0,0.36)',
      transform: hov ? 'translateY(-4px)' : 'none',
      transition:'all 240ms', overflow:'hidden',
    }}>
      <div style={{position:'absolute', top:-30, right:-30, width: 200, height: 200, background:'radial-gradient(circle, rgba(24,183,255,0.18), transparent 60%)', pointerEvents:'none'}}/>
      <div style={{position:'relative', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <span style={{fontFamily:'var(--ko-font-mono)', fontSize: 11.5, color:'#6ED8FF', letterSpacing:'0.10em', padding:'5px 12px', borderRadius: 9999, border:'1px solid rgba(110,216,255,0.20)', background:'rgba(24,183,255,0.08)'}}>{m.label}</span>
        <span style={{fontFamily:'var(--ko-font-display)', fontSize: 10.5, fontWeight: 900, letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(110,216,255,0.50)'}}>Model</span>
      </div>
      <h3 style={{position:'relative', marginTop: 24, fontFamily:'var(--ko-font-display)', fontWeight: 900, fontSize: 24, color:'#fff', letterSpacing:'-0.015em'}}>{m.name}</h3>
      <div style={{position:'relative', marginTop: 18, display:'flex', flexDirection:'column', gap: 12}}>
        {[
          [m.btu || m.cap, m.btu ? 'Capacity' : 'Capacity'],
          [m.area, 'Coverage'],
          [m.power, m.power ? 'Power' : ''],
          [m.best, 'Best for'],
        ].filter(([v]) => v).map(([v,l],i) => (
          <div key={i} style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', paddingBottom: 10, borderBottom: i < 3 ? '1px solid rgba(110,216,255,0.08)' : 'none'}}>
            <span style={{fontFamily:'var(--ko-font-display)', fontSize: 11, fontWeight: 900, letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(110,216,255,0.50)'}}>{l}</span>
            <span style={{fontFamily:'var(--ko-font-display)', fontWeight: 700, fontSize: 14, color:'#fff', textAlign:'right', maxWidth: '60%'}}>{v}</span>
          </div>
        ))}
      </div>
      <a href="contact.html" style={{position:'relative', marginTop: 'auto', paddingTop: 20, color: hov ? '#9EEBFF' : '#6ED8FF', fontFamily:'var(--ko-font-display)', fontWeight: 700, fontSize: 13, display:'inline-flex', alignItems:'center', gap: hov ? 12 : 8, transition:'all 220ms', textDecoration:'none'}}>
        Inquire <Icon name="arrow-right" size={14}/>
      </a>
    </div>
  );
};

Object.assign(window, { ProductDetail, ModelCard });
