// Klima Optima, Solution detail page template
// Used by humidity-control.html, portable-cooling.html, precision-climate-control.html

const SolutionDetail = ({active, crumbs, eyebrow, headline, headlineHighlight, sub, heroIcon, heroMetrics, problems, approach, benefits, products = [], productGroups, productsEyebrow = 'Products', productsTitle = 'Recommended', productsTitleHighlight = 'units.', productsSub = 'The units we deploy for this solution, pick by your space, tolerance, and operational pattern.', problemsEyebrow = 'The Problem', problemsTitle = 'What goes wrong when', problemsTitleHighlight = "climate isn't controlled.", problemsSub = 'Operational impacts we see in the field, across hospitals, factories, warehouses, archives.', benefitsEyebrow = 'Outcomes', benefitsTitle = 'What you', benefitsTitleHighlight = 'get.', benefitsSub, ctaEyebrow = 'Talk to us', ctaTitle = 'Tell us about your space.', ctaSub = 'A specialist will design a deployment around your operational constraints, surveyed, sized, and supported for service.', industries}) => {
  return (
    <Page active={active}>
      {/* ===================== HERO ===================== */}
      <section style={{position:'relative', overflow:'hidden', background:'#04111F', paddingTop: 164}}>
        <div style={{position:'absolute', inset: 0, background:'radial-gradient(circle at 18% 30%, rgba(24,183,255,0.30), transparent 32%), radial-gradient(circle at 82% 18%, rgba(14,78,138,0.55), transparent 40%), linear-gradient(135deg,#030B14 0%,#071B2F 45%,#0A2342 75%,#061728 100%)'}}/>
        <div style={{position:'absolute', inset:0, opacity:0.14, backgroundImage:'linear-gradient(90deg, rgba(110,216,255,0.18) 1px, transparent 1px), linear-gradient(rgba(110,216,255,0.16) 1px, transparent 1px)', backgroundSize:'86px 86px', maskImage:'radial-gradient(circle at 50% 30%, rgba(0,0,0,1) 35%, transparent 80%)', WebkitMaskImage:'radial-gradient(circle at 50% 30%, rgba(0,0,0,1) 35%, transparent 80%)'}}/>
        <div style={{position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(0,0,0,0.30), transparent 22%, transparent 82%, #030B14)', pointerEvents:'none'}}/>

        <div style={{position:'relative', zIndex: 5, maxWidth: 1480, margin:'0 auto', padding:'40px 40px 100px'}}>
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

            <div style={{marginTop: 28, display:'flex', alignItems:'center', gap: 20}}>
              <div style={{width: 76, height: 76, borderRadius: 22, background:'rgba(24,183,255,0.12)', color:'#9EEBFF', display:'flex', alignItems:'center', justifyContent:'center', border:'1px solid rgba(110,216,255,0.28)', boxShadow:'0 0 36px rgba(24,183,255,0.30)'}}>
                <Icon name={heroIcon} size={38}/>
              </div>
              <span style={{display:'inline-flex', alignItems:'center', gap: 12, borderRadius: 9999, border:'1px solid rgba(110,216,255,0.20)', background:'rgba(255,255,255,0.05)', backdropFilter:'blur(16px)', padding:'9px 20px', fontFamily:'var(--ko-font-display)', fontSize: 11.5, fontWeight: 800, letterSpacing:'0.22em', textTransform:'uppercase', color:'#6ED8FF'}}>
                <span style={{width:6, height:6, borderRadius:9999, background:'#18B7FF', boxShadow:'0 0 12px #18B7FF', animation:'ko-pulse 2.4s ease-in-out infinite'}}/>
                {eyebrow}
              </span>
            </div>

            <h1 style={{margin:'32px 0 0', maxWidth: 1080, fontFamily:'var(--ko-font-display)', fontWeight: 900, fontSize:'clamp(2.5rem, 5.4vw, 4.75rem)', lineHeight: 0.98, letterSpacing:'-0.028em', color:'#fff', textTransform:'uppercase'}}>
              {headline}{headlineHighlight && (<> <span style={{background:'linear-gradient(90deg,#18B7FF,#9EEBFF)', WebkitBackgroundClip:'text', backgroundClip:'text', color:'transparent'}}>{headlineHighlight}</span></>)}
            </h1>
            <p style={{margin:'28px 0 0', maxWidth: 800, fontSize: 18, lineHeight: 1.65, color:'rgba(255,255,255,0.74)'}}>{sub}</p>
            <div style={{marginTop: 40, display:'flex', flexWrap:'wrap', gap: 14}}>
              <a href="contact.html" className="ko-btn ko-btn-primary" style={{textDecoration:'none'}}>Request Consultation <Icon name="arrow-right" size={18}/></a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== THE PROBLEM ===================== */}
      <SectionBand shade={1}>
        <Reveal>
          <SectionHead align="center" eyebrow={problemsEyebrow} title={problemsTitle} titleHighlight={problemsTitleHighlight} sub={problemsSub}/>
          <div style={{marginTop: 56, display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap: 18}}>
            {problems.map(([ic, t, c]) => (
              <div key={t} style={{
                position:'relative', borderRadius: 28, padding: 32,
                border:'1px solid rgba(255,80,80,0.18)',
                background:'rgba(20,8,8,0.35)', backdropFilter:'blur(20px)',
                boxShadow:'0 24px 80px rgba(0,0,0,0.4)', overflow:'hidden',
              }}>
                <div style={{position:'absolute', top:-30, right:-30, width: 200, height: 200, background:'radial-gradient(circle, rgba(255,80,80,0.15), transparent 60%)', pointerEvents:'none'}}/>
                <div style={{position:'relative', width: 48, height: 48, borderRadius: 14, background:'rgba(255,120,120,0.10)', color:'#FF9B9B', display:'flex', alignItems:'center', justifyContent:'center', border:'1px solid rgba(255,120,120,0.22)'}}>
                  <Icon name={ic} size={22}/>
                </div>
                <h4 style={{position:'relative', margin:'22px 0 0', fontFamily:'var(--ko-font-display)', fontWeight: 800, fontSize: 19, color:'#fff', letterSpacing:'-0.01em', lineHeight: 1.25}}>{t}</h4>
                <p style={{position:'relative', margin:'12px 0 0', fontSize: 14, color:'rgba(255,255,255,0.62)', lineHeight: 1.6}}>{c}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </SectionBand>

      {/* ===================== BENEFITS ===================== */}
      {benefits && benefits.length > 0 &&
      <SectionBand shade={0}>
        <Reveal>
          <SectionHead align="center" eyebrow={benefitsEyebrow} title={benefitsTitle} titleHighlight={benefitsTitleHighlight} sub={benefitsSub}/>
          <div style={{marginTop: 56, display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap: 18}}>
            {benefits.map(([ic,t,c]) => <FeatureCard key={t} icon={ic} title={t} copy={c}/>)}
          </div>
        </Reveal>
      </SectionBand>
      }

      {/* ===================== RECOMMENDED PRODUCTS ===================== */}
      <SectionBand shade={1}>
        <Reveal>
          <SectionHead align="center" eyebrow={productsEyebrow} title={productsTitle} titleHighlight={productsTitleHighlight} sub={productsSub}/>
          {Array.isArray(productGroups) && productGroups.length ? (
            <div style={{marginTop: 56, display:'flex', flexDirection:'column', gap: 52}}>
              {productGroups.map(g => (
                <div key={g.title}>
                  <div style={{display:'flex', alignItems:'center', gap: 16, marginBottom: 26}}>
                    <div style={{fontFamily:'var(--ko-font-mono)', fontSize: 12, letterSpacing:'0.16em', textTransform:'uppercase', color:'rgba(110,216,255,0.70)', whiteSpace:'nowrap'}}>{g.title}</div>
                    <div style={{flex: 1, height: 1, background:'linear-gradient(90deg, rgba(110,216,255,0.30), transparent)'}}/>
                  </div>
                  <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap: 18}}>
                    {g.items.map(p => (
                      <FeatureCard key={p.title} icon={p.icon} title={p.title} copy={p.copy} img={p.img} link={{label: p.link || 'View range', href: p.href}}/>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
          <div style={{marginTop: 56, display:'grid', gridTemplateColumns: products.length <= 4 ? `repeat(${products.length},1fr)` : 'repeat(3,1fr)', gap: 18, maxWidth: products.length <= 2 ? 760 : 'none', marginLeft:'auto', marginRight:'auto'}}>
            {products.map(p => (
              <FeatureCard key={p.title} icon={p.icon} title={p.title} copy={p.copy} img={p.img} link={{label: p.link || 'View range', href: p.href}}/>
            ))}
          </div>
          )}
        </Reveal>
      </SectionBand>

      {/* ===================== INDUSTRIES ===================== */}
      <SectionBand shade={2}>
        <Reveal>
          <SectionHead align="center" eyebrow="Industries" title="Where this" titleHighlight="is deployed." />
          <div style={{marginTop: 48, display:'flex', justifyContent:'center', flexWrap:'wrap', gap: 12}}>
            {industries.map(i => (
              <a key={i} href="industries.html" style={{textDecoration:'none'}}>
                <Tag>{i}</Tag>
              </a>
            ))}
          </div>
          <div style={{marginTop: 40, textAlign:'center'}}>
            <a href="industries.html" className="ko-btn ko-btn-secondary" style={{textDecoration:'none'}}>
              Browse All Industries <Icon name="arrow-right" size={16}/>
            </a>
          </div>
        </Reveal>
      </SectionBand>

      {/* ===================== CTA ===================== */}
      <CTABand
        eyebrow={ctaEyebrow}
        title={ctaTitle}
        sub={ctaSub}
        primary={{label:'Request Consultation', href:'contact.html'}}
        secondary={{label:'Browse Products', href:'products.html'}}
      />
    </Page>
  );
};

Object.assign(window, { SolutionDetail });
