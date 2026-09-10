// Klima Optima, Header (real-link navigation across pages)

const KO_PAGES = {
  Home: 'Klima Optima Homepage.html',
  Products: 'products.html',
  Solutions: 'solutions.html',
  Industries: 'industries.html'
};

const KO_TOP_PAGES = {
  'About us': 'about.html',
  'Resources': 'resources.html',
  'Privacy Policy': 'privacy-policy.html',
  'Service and Support': 'service-support.html',
  'Careers': 'careers.html',
  'Contact us': 'contact.html'
};

const KO_DROPDOWNS = {
  Products: {
    groups: [
    { title: 'Humidity Control', items: [
      { label: 'Dehumidifiers', href: 'dehumidifiers.html', copy: 'Moisture & humidity control', icon: 'wind' },
      { label: 'Humidifiers', href: 'humidifiers.html', copy: 'Precision moisture delivery', icon: 'droplet' }] },
    { title: 'Air Conditioning', items: [
      { label: 'Portable Air Conditioners', href: 'air-conditioners.html', copy: 'Portable and Mobile Air Conditioners', icon: 'snowflake' },
      { label: 'Industrial And Precision Air Conditioners', href: 'industrial-precision-aircons.html', copy: 'Ducted, Cabinet, and Precision Air Conditioning', icon: 'gauge' }] },
    { title: 'HVAC Accessories', items: [
      { label: 'Flex Flow', href: 'flex-flow.html', copy: 'Ducted Climate Control Solutions', icon: 'wind' }] }]

  },
  Solutions: {
    items: [
    { label: 'Humidity Control', href: 'humidity-control.html', copy: 'Stable moisture for protected spaces', icon: 'droplet' },
    { label: 'Portable Cooling', href: 'portable-cooling.html', copy: 'Mobile cooling, deployed anywhere', icon: 'snowflake' },
    { label: 'Precision Climate Control', href: 'precision-climate-control.html', copy: 'Critical-environment regulation', icon: 'gauge' }]

  }
};

Object.values(KO_DROPDOWNS).forEach((d) => { if (d.groups && !d.items) d.items = d.groups.flatMap((g) => g.items); });

// Resolve active page from current URL
const koCurrentPage = () => {
  if (typeof window === 'undefined') return 'Home';
  const path = decodeURIComponent(window.location.pathname.split('/').pop() || '');
  if (!path || path === 'Klima Optima Homepage.html' || path === 'index.html') return 'Home';
  for (const [name, file] of Object.entries(KO_PAGES)) {
    if (file === path) return name;
  }
  // Sub-page mapping
  if (['products.html', 'dehumidifiers.html', 'air-conditioners.html', 'industrial-precision-aircons.html', 'flex-flow.html', 'humidifiers.html', 'light-commercial-dehumidifiers.html', 'commercial-dehumidifiers.html', 'industrial-dehumidifiers.html', 'industrial-portable-aircons.html', 'commercial-portable-aircons.html'].includes(path)) return 'Products';
  if (['solutions.html', 'humidity-control.html', 'portable-cooling.html', 'precision-climate-control.html'].includes(path)) return 'Solutions';
  if (path === 'industries.html') return 'Industries';
  return '';
};

const koHeaderStyles = {
  shell: {
    position: 'absolute', top: 0, left: 0, right: 0, zIndex: 40,
    pointerEvents: 'none'
  },
  topBar: {
    pointerEvents: 'auto',
    borderBottom: '1px solid rgba(110,216,255,0.08)',
    background: 'rgba(3,11,20,0.30)',
    backdropFilter: 'blur(24px) saturate(120%)',
    WebkitBackdropFilter: 'blur(24px) saturate(120%)'
  },
  topInner: {
    maxWidth: 1480, margin: '0 auto', padding: '0 40px',
    height: 44, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    fontSize: 12.5, color: 'rgba(255,255,255,0.78)',
    fontFamily: 'var(--ko-font-display)'
  },
  topLeft: { display: 'flex', alignItems: 'center', gap: 10, fontWeight: 600, letterSpacing: '0.01em' },
  topLinks: { display: 'flex', alignItems: 'center', gap: 32, fontWeight: 500 },
  topLink: { color: 'rgba(255,255,255,0.78)', cursor: 'pointer', transition: 'color 160ms', textDecoration: 'none' },

  navBar: {
    pointerEvents: 'auto',
    borderBottom: '1px solid rgba(110,216,255,0.10)',
    background: 'rgba(4,17,31,0.42)',
    backdropFilter: 'blur(28px) saturate(140%)',
    WebkitBackdropFilter: 'blur(28px) saturate(140%)'
  },
  navInner: {
    maxWidth: 1480, margin: '0 auto', padding: '0 40px',
    height: 120, display: 'flex', alignItems: 'center', justifyContent: 'space-between'
  },
  brand: { display: 'flex', alignItems: 'center', cursor: 'pointer', textDecoration: 'none' },
  brandImg: { height: 110, objectFit: 'contain', display: 'block' },
  nav: { display: 'flex', alignItems: 'center', gap: 48, fontFamily: 'var(--ko-font-display)', fontWeight: 600, fontSize: 17, letterSpacing: '0.01em' },
  langPicker: {
    display: 'flex', alignItems: 'center', gap: 8,
    padding: '8px 14px',
    borderRadius: 9999,
    border: '1px solid rgba(110,216,255,0.14)',
    background: 'rgba(255,255,255,0.04)',
    color: 'rgba(255,255,255,0.86)', fontFamily: 'var(--ko-font-display)',
    fontSize: 13, fontWeight: 600, cursor: 'pointer',
    transition: 'all 200ms'
  },
  
  // Mobile menu styles
  mobileMenuBtn: {
    display: 'none',
    width: 44, height: 44,
    alignItems: 'center', justifyContent: 'center',
    borderRadius: 12,
    border: '1px solid rgba(110,216,255,0.14)',
    background: 'rgba(255,255,255,0.04)',
    cursor: 'pointer',
    transition: 'all 200ms'
  },
  mobileMenuOverlay: {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(3,11,20,0.85)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    zIndex: 999,
    transition: 'opacity 300ms cubic-bezier(0.22,1,0.36,1)'
  },
  mobileMenuDrawer: {
    position: 'fixed', top: 0, right: 0, bottom: 0, left: 0,
    width: '100%', maxWidth: 'none',
    background: 'linear-gradient(135deg, #030B14 0%, #071B2F 100%)',
    boxShadow: '0 0 80px rgba(24,183,255,0.10)',
    zIndex: 1000,
    overflowY: 'auto',
    transition: 'transform 360ms cubic-bezier(0.22,1,0.36,1), opacity 280ms ease'
  },
  mobileMenuHeader: {
    padding: '24px 24px',
    borderBottom: '1px solid rgba(110,216,255,0.10)',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between'
  },
  mobileMenuClose: {
    width: 40, height: 40,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    borderRadius: 10,
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(110,216,255,0.14)',
    cursor: 'pointer',
    transition: 'all 200ms'
  },
  mobileMenuContent: {
    padding: '24px 0'
  },
  mobileNavSection: {
    padding: '16px 24px 8px',
    fontFamily: 'var(--ko-font-display)',
    fontWeight: 900,
    fontSize: 11,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: '#6ED8FF'
  },
  mobileNavLink: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '16px 24px',
    fontFamily: 'var(--ko-font-display)',
    fontWeight: 600,
    fontSize: 15,
    color: 'rgba(255,255,255,0.86)',
    textDecoration: 'none',
    transition: 'all 200ms'
  },
  mobileNavSubmenu: {
    background: 'rgba(255,255,255,0.02)',
    borderTop: '1px solid rgba(110,216,255,0.06)',
    borderBottom: '1px solid rgba(110,216,255,0.06)'
  },
  mobileNavSubitem: {
    display: 'flex', alignItems: 'center', gap: 12,
    padding: '14px 24px 14px 40px',
    textDecoration: 'none',
    transition: 'all 200ms'
  }
};

const NavLink = ({ active, children, label }) => {
  const [hover, setHover] = React.useState(false);
  const hasDropdown = !!KO_DROPDOWNS[label];
  const href = KO_PAGES[label];
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ position: 'relative', height: 120, display: 'flex', alignItems: 'center' }}>
      
      <a
        href={href}
        style={{
          position: 'relative',
          color: active ? '#fff' : hover ? '#6ED8FF' : 'rgba(255,255,255,0.86)',
          cursor: 'pointer', textDecoration: 'none',
          transition: 'color 180ms',
          display: 'flex', alignItems: 'center', gap: 6
        }}>
        
        {children}
        {hasDropdown &&
        <span style={{
          display: 'inline-flex', transition: 'transform 220ms',
          transform: hover ? 'rotate(180deg)' : 'rotate(0)'
        }}>
            <Icon name="chevron-down" size={12} />
          </span>
        }
        {active &&
        <span style={{
          position: 'absolute', left: 0, right: 0, bottom: -14,
          height: 2, background: '#18B7FF',
          boxShadow: '0 0 14px rgba(24,183,255,0.9)'
        }} />
        }
      </a>

      {hasDropdown &&
      <DropdownPanel open={hover} items={KO_DROPDOWNS[label].items} groups={KO_DROPDOWNS[label].groups} label={label} />
      }
    </div>);

};

const DropdownPanel = ({ open, items, groups, label }) =>
<div style={{
  position: 'absolute', top: 120, left: '50%', transform: `translate(-50%, ${open ? '0' : '-8px'})`,
  width: groups ? Math.min(1080, 380 * groups.length) : 460,
  opacity: open ? 1 : 0,
  pointerEvents: open ? 'auto' : 'none',
  transition: 'opacity 220ms cubic-bezier(0.22,1,0.36,1), transform 260ms cubic-bezier(0.22,1,0.36,1)',
  paddingTop: 14
}}>
    <div style={{
    position: 'relative',
    borderRadius: 24,
    border: '1px solid rgba(110,216,255,0.16)',
    background: 'rgba(4,17,31,0.97)',
    backdropFilter: 'blur(40px) saturate(140%)',
    WebkitBackdropFilter: 'blur(40px) saturate(140%)',
    boxShadow: '0 30px 90px rgba(0,0,0,0.55), 0 0 60px rgba(24,183,255,0.08)',
    padding: 14,
    overflow: 'hidden'
  }}>
      <div style={{
      position: 'absolute', top: 0, left: '30%', right: '30%', height: 1,
      background: 'linear-gradient(90deg, transparent, rgba(24,183,255,0.6), transparent)'
    }} />
      <div style={{ position: 'absolute', top: 0, right: 0, width: 200, height: 200, background: 'radial-gradient(circle at 80% 0%, rgba(24,183,255,0.18), transparent 60%)', pointerEvents: 'none' }} />
      {groups ?
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: `repeat(${groups.length}, minmax(0,1fr))`, gap: 18 }}>
        {groups.map((g) =>
        <div key={g.title} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div style={{ padding: '8px 12px 6px', fontFamily: 'var(--ko-font-display)', fontWeight: 900, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#6ED8FF' }}>{g.title}</div>
          {g.items.map((it) => <DropdownItem key={it.label} {...it} />)}
        </div>
        )}
      </div> :
      <React.Fragment>
        <div style={{
        position: 'relative',
        padding: '8px 12px 4px',
        fontFamily: 'var(--ko-font-display)', fontWeight: 900,
        fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
        color: '#6ED8FF'
      }}>{label}</div>
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 2, marginTop: 4 }}>
          {items.map((it) => <DropdownItem key={it.label} {...it} />)}
        </div>
      </React.Fragment>
      }
    </div>
  </div>;


const DropdownItem = ({ label, copy, icon, href }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 16,
        padding: '14px 14px',
        borderRadius: 16,
        background: hov ? 'rgba(24,183,255,0.10)' : 'transparent',
        transition: 'background 200ms',
        cursor: 'pointer',
        textDecoration: 'none'
      }}>
      <div style={{
        width: 40, height: 40, borderRadius: 12, flexShrink: 0,
        background: hov ? '#18B7FF' : 'rgba(24,183,255,0.10)',
        color: hov ? '#04111F' : '#6ED8FF',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: hov ? '0 0 24px rgba(24,183,255,0.45)' : '0 0 18px rgba(24,183,255,0.10)',
        transition: 'all 200ms'
      }}>
        <Icon name={icon} size={20} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: 'var(--ko-font-display)', fontWeight: 700, fontSize: 15,
          color: '#fff', letterSpacing: '-0.005em'
        }}>{label}</div>
        <div style={{ marginTop: 2, fontSize: 12.5, color: 'rgba(255,255,255,0.58)', lineHeight: 1.45 }}>{copy}</div>
      </div>
      <span style={{
        color: hov ? '#6ED8FF' : 'rgba(110,216,255,0.35)',
        transform: hov ? 'translateX(2px)' : 'none',
        transition: 'all 220ms',
        display: 'inline-flex'
      }}>
        <Icon name="arrow-right" size={16} />
      </span>
    </a>);

};

/* ---- Region switcher (distributor markets), top utility bar ---- */
const KoRegionPicker = () => {
  const has = typeof window !== 'undefined' && window.KO_LOCALE;
  const path = typeof window !== 'undefined' ? decodeURIComponent((window.location.pathname.split('/').pop() || '')) : '';
  const isHome = !path || path === 'Klima Optima Homepage.html' || path === 'index.html';
  const interactive = !!has && (isHome || path === 'contact.html');
  const [cur, setCur] = React.useState(function () { return has ? window.KO_LOCALE.current() : null; });
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(function () {
    if (!has) return;
    const f = function () { setCur(window.KO_LOCALE.current()); };
    window.addEventListener('ko-locale-change', f);
    return function () { window.removeEventListener('ko-locale-change', f); };
  }, [has]);
  React.useEffect(function () {
    if (!open) return;
    const onDoc = function (e) { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return function () { document.removeEventListener('mousedown', onDoc); };
  }, [open]);

  const flag = cur ? cur.region.flag : '\uD83C\uDF10';
  const name = cur ? cur.region.name : 'Global';
  const langLabel = cur ? cur.lang.label : 'En';

  if (!interactive) {
    return (
      <div style={koHeaderStyles.topLeft}>
        <span style={{ fontSize: 14, lineHeight: 1 }}>{flag}</span>
        <span>{name} ({langLabel})</span>
      </div>);
  }

  return (
    <div ref={ref} style={{ ...koHeaderStyles.topLeft, position: 'relative' }}>
      <button onClick={function () { setOpen(function (o) { return !o; }); }}
        style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', border: 'none', cursor: 'pointer', color: 'inherit', font: 'inherit', fontWeight: 600, padding: 0 }}>
        <span style={{ fontSize: 14, lineHeight: 1 }}>{flag}</span>
        <span>{name} ({langLabel})</span>
        <span style={{ display: 'inline-flex', color: 'rgba(110,216,255,0.7)', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 180ms' }}><Icon name="chevron-down" size={13} /></span>
      </button>
      {open &&
        <div style={{ position: 'absolute', top: 'calc(100% + 10px)', left: 0, zIndex: 70, minWidth: 220, padding: 6, borderRadius: 14, border: '1px solid rgba(110,216,255,0.18)', background: 'rgba(6,23,40,0.95)', backdropFilter: 'blur(20px)', boxShadow: '0 24px 70px rgba(0,0,0,0.5)' }}>
          <div style={{ padding: '6px 12px 8px', fontSize: 10.5, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(110,216,255,0.55)' }}>Select region</div>
          {window.KO_LOCALE.REGIONS.map(function (r) {
            const active = cur && cur.region.code === r.code;
            return (
              <div key={r.code} onClick={function () { window.KO_LOCALE.setRegion(r.code); setOpen(false); }}
                style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', borderRadius: 9, cursor: 'pointer', fontSize: 13, fontWeight: 700, color: active ? '#9EEBFF' : 'rgba(255,255,255,0.82)', background: active ? 'rgba(24,183,255,0.12)' : 'transparent' }}
                onMouseEnter={function (e) { if (!active) e.currentTarget.style.background = 'rgba(24,183,255,0.07)'; }}
                onMouseLeave={function (e) { if (!active) e.currentTarget.style.background = 'transparent'; }}>
                <span style={{ fontSize: 15 }}>{r.flag}</span>
                <span style={{ flex: 1 }}>{r.name}</span>
                {active && <Icon name="check" size={14} />}
              </div>);
          })}
        </div>}
    </div>);
};

/* ---- Language switcher (English / 中文), main nav ---- */
const KoLangPicker = () => {
  const has = typeof window !== 'undefined' && window.KO_LOCALE;
  const [lang, setLang] = React.useState(function () { return has ? window.KO_LOCALE.getLang() : 'en'; });
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(function () {
    if (!has) return;
    const f = function () { setLang(window.KO_LOCALE.getLang()); };
    window.addEventListener('ko-locale-change', f);
    return function () { window.removeEventListener('ko-locale-change', f); };
  }, [has]);
  React.useEffect(function () {
    if (!open) return;
    const onDoc = function (e) { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return function () { document.removeEventListener('mousedown', onDoc); };
  }, [open]);

  const active = open || hover;
  if (!has) {
    return (
      <div style={koHeaderStyles.langPicker} className="ko-header-desktop-nav">
        <Icon name="globe" size={16} /><span>English</span><Icon name="chevron-down" size={12} />
      </div>);
  }
  const label = lang === 'zh' ? '中文' : 'English';
  const OPTS = [['en', 'English'], ['zh', '中文']];
  return (
    <div ref={ref} style={{ position: 'relative' }} className="ko-header-desktop-nav">
      <div style={{ ...koHeaderStyles.langPicker, background: active ? 'rgba(24,183,255,0.10)' : 'rgba(255,255,255,0.04)', borderColor: active ? 'rgba(110,216,255,0.30)' : 'rgba(110,216,255,0.14)' }}
        onMouseEnter={function () { setHover(true); }} onMouseLeave={function () { setHover(false); }}
        onClick={function () { setOpen(function (o) { return !o; }); }}>
        <Icon name="globe" size={16} />
        <span>{label}</span>
        <span style={{ display: 'inline-flex', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 180ms' }}><Icon name="chevron-down" size={12} /></span>
      </div>
      {open &&
        <div style={{ position: 'absolute', top: 'calc(100% + 8px)', right: 0, zIndex: 70, minWidth: 150, padding: 6, borderRadius: 12, border: '1px solid rgba(110,216,255,0.18)', background: 'rgba(6,23,40,0.95)', backdropFilter: 'blur(20px)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
          {OPTS.map(function (o) {
            const act = lang === o[0];
            return (
              <div key={o[0]} onClick={function () { window.KO_LOCALE.setLang(o[0]); setOpen(false); }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, padding: '9px 12px', borderRadius: 8, cursor: 'pointer', fontSize: 13, fontWeight: 700, color: act ? '#9EEBFF' : 'rgba(255,255,255,0.82)', background: act ? 'rgba(24,183,255,0.12)' : 'transparent' }}
                onMouseEnter={function (e) { if (!act) e.currentTarget.style.background = 'rgba(24,183,255,0.07)'; }}
                onMouseLeave={function (e) { if (!act) e.currentTarget.style.background = 'transparent'; }}>
                <span>{o[1]}</span>{act && <Icon name="check" size={14} />}
              </div>);
          })}
        </div>}
    </div>);
};

const TopUtilityBar = () =>
<div style={koHeaderStyles.topBar}>
    <div style={koHeaderStyles.topInner} className="ko-header-top-inner">
      <KoRegionPicker />
      <nav style={koHeaderStyles.topLinks} className="ko-header-top-links">
        {Object.entries(KO_TOP_PAGES).map(([label, href]) =>
      <a key={label} href={href} style={koHeaderStyles.topLink}
      onMouseEnter={(e) => e.currentTarget.style.color = '#6ED8FF'}
      onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.78)'}>
        {label}</a>
      )}
      </nav>
    </div>
  </div>;


const MobileMenu = ({ open, onClose, active }) => {
  const [expandedSection, setExpandedSection] = React.useState(null);
  
  if (!open) return null;
  
  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  
  return ReactDOM.createPortal(
    <>
      <div 
        style={{
          ...koHeaderStyles.mobileMenuOverlay,
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none'
        }}
        onClick={onClose}
      />
      <div style={{
        ...koHeaderStyles.mobileMenuDrawer,
        transform: open ? 'translateY(0)' : 'translateY(100%)',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'auto' : 'none'
      }}>
        <div style={{ ...koHeaderStyles.mobileMenuHeader, position: 'relative', justifyContent: 'center' }}>
          <img
            src="assets/logos/klima-optima-wordmark.png"
            alt="Klima Optima"
            style={{ height: 38, width: 'auto', objectFit: 'contain', display: 'block' }} />
          <div 
            style={{ ...koHeaderStyles.mobileMenuClose, position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%)' }}
            onClick={onClose}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(24,183,255,0.10)';
              e.currentTarget.style.borderColor = 'rgba(110,216,255,0.30)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
              e.currentTarget.style.borderColor = 'rgba(110,216,255,0.14)';
            }}>
            <Icon name="x" size={20} />
          </div>
        </div>
        
        <div style={koHeaderStyles.mobileMenuContent}>
          <div style={koHeaderStyles.mobileNavSection}>Navigation</div>
          
          <a href="Klima Optima Homepage.html" style={{
            ...koHeaderStyles.mobileNavLink,
            background: active === 'Home' ? 'rgba(24,183,255,0.08)' : 'transparent',
            color: active === 'Home' ? '#fff' : 'rgba(255,255,255,0.86)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(24,183,255,0.08)'}
          onMouseLeave={(e) => e.currentTarget.style.background = active === 'Home' ? 'rgba(24,183,255,0.08)' : 'transparent'}>
            <span>Home</span>
          </a>
          
          {/* Products with submenu */}
          <div>
            <div 
              style={{
                ...koHeaderStyles.mobileNavLink,
                background: active === 'Products' || expandedSection === 'Products' ? 'rgba(24,183,255,0.08)' : 'transparent',
                color: active === 'Products' ? '#fff' : 'rgba(255,255,255,0.86)'
              }}
              onClick={() => toggleSection('Products')}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(24,183,255,0.08)'}
              onMouseLeave={(e) => e.currentTarget.style.background = (active === 'Products' || expandedSection === 'Products') ? 'rgba(24,183,255,0.08)' : 'transparent'}>
              <span>Products</span>
              <span style={{
                transform: expandedSection === 'Products' ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'transform 220ms',
                display: 'inline-flex'
              }}>
                <Icon name="chevron-down" size={16} />
              </span>
            </div>
            {expandedSection === 'Products' && (
              <div style={koHeaderStyles.mobileNavSubmenu}>
                {KO_DROPDOWNS.Products.groups.flatMap(g => [
                  <div key={g.title} style={{ padding: '10px 14px 4px', fontFamily: 'var(--ko-font-display)', fontWeight: 900, fontSize: 10.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#6ED8FF' }}>{g.title}</div>,
                  ...g.items.map(item => (
                  <a 
                    key={item.label}
                    href={item.href}
                    style={koHeaderStyles.mobileNavSubitem}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(24,183,255,0.06)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                    <div style={{
                      width: 32, height: 32,
                      borderRadius: 8,
                      background: 'rgba(24,183,255,0.10)',
                      color: '#6ED8FF',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Icon name={item.icon} size={16} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontFamily: 'var(--ko-font-display)',
                        fontWeight: 600,
                        fontSize: 14,
                        color: '#fff'
                      }}>{item.label}</div>
                      <div style={{
                        fontSize: 12,
                        color: 'rgba(255,255,255,0.54)',
                        marginTop: 2
                      }}>{item.copy}</div>
                    </div>
                  </a>
                ))])}
              </div>
            )}
          </div>
          
          {/* Solutions with submenu */}
          <div>
            <div 
              style={{
                ...koHeaderStyles.mobileNavLink,
                background: active === 'Solutions' || expandedSection === 'Solutions' ? 'rgba(24,183,255,0.08)' : 'transparent',
                color: active === 'Solutions' ? '#fff' : 'rgba(255,255,255,0.86)'
              }}
              onClick={() => toggleSection('Solutions')}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(24,183,255,0.08)'}
              onMouseLeave={(e) => e.currentTarget.style.background = (active === 'Solutions' || expandedSection === 'Solutions') ? 'rgba(24,183,255,0.08)' : 'transparent'}>
              <span>Solutions</span>
              <span style={{
                transform: expandedSection === 'Solutions' ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'transform 220ms',
                display: 'inline-flex'
              }}>
                <Icon name="chevron-down" size={16} />
              </span>
            </div>
            {expandedSection === 'Solutions' && (
              <div style={koHeaderStyles.mobileNavSubmenu}>
                {KO_DROPDOWNS.Solutions.items.map(item => (
                  <a 
                    key={item.label}
                    href={item.href}
                    style={koHeaderStyles.mobileNavSubitem}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(24,183,255,0.06)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                    <div style={{
                      width: 32, height: 32,
                      borderRadius: 8,
                      background: 'rgba(24,183,255,0.10)',
                      color: '#6ED8FF',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Icon name={item.icon} size={16} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontFamily: 'var(--ko-font-display)',
                        fontWeight: 600,
                        fontSize: 14,
                        color: '#fff'
                      }}>{item.label}</div>
                      <div style={{
                        fontSize: 12,
                        color: 'rgba(255,255,255,0.54)',
                        marginTop: 2
                      }}>{item.copy}</div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
          
          <a href="industries.html" style={{
            ...koHeaderStyles.mobileNavLink,
            background: active === 'Industries' ? 'rgba(24,183,255,0.08)' : 'transparent',
            color: active === 'Industries' ? '#fff' : 'rgba(255,255,255,0.86)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(24,183,255,0.08)'}
          onMouseLeave={(e) => e.currentTarget.style.background = active === 'Industries' ? 'rgba(24,183,255,0.08)' : 'transparent'}>
            <span>Industries</span>
          </a>
          
          <div style={koHeaderStyles.mobileNavSection}>Resources</div>
          {Object.entries(KO_TOP_PAGES).map(([label, href]) => (
            <a key={label} href={href} style={koHeaderStyles.mobileNavLink}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(24,183,255,0.08)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </>,
    document.body
  );
};

const MainNav = ({ active }) => {
  const [langHover, setLangHover] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const current = active || koCurrentPage();
  
  return (
    <div style={koHeaderStyles.navBar}>
      <style>{`
        @media (max-width: 1024px) {
          .ko-header-desktop-nav { display: none !important; }
          .ko-header-mobile-menu-btn { display: flex !important; }
        }
        @media (max-width: 768px) {
          .ko-header-top-links { display: none !important; }
          .ko-brand-desktop { display: none !important; }
          .ko-brand-mobile { display: block !important; height: 40px !important; width: auto !important; }
          .ko-header-nav-inner { height: 72px !important; padding: 0 20px !important; justify-content: center !important; position: relative; }
          .ko-header-actions { position: absolute !important; right: 16px; top: 50%; transform: translateY(-50%); }
          .ko-header-top-inner { padding: 0 20px !important; height: 34px !important; }
        }
      `}</style>
      
      <div style={koHeaderStyles.navInner} className="ko-header-nav-inner">
        <a href="Klima Optima Homepage.html" style={koHeaderStyles.brand}>
          <img src="assets/logos/klima-optima-reverse.png" alt="Klima Optima, The Climate Control Specialist" style={{ ...koHeaderStyles.brandImg, width: "181px", height: "200px" }} className="ko-header-brand-img ko-brand-desktop" />
          <img src="assets/logos/klima-optima-wordmark.png" alt="Klima Optima, The Climate Control Specialist" className="ko-brand-mobile" style={{ height: 40, width: 'auto', objectFit: 'contain', display: 'none' }} />
        </a>
        
        <nav style={koHeaderStyles.nav} className="ko-header-desktop-nav">
          {['Home', 'Products', 'Solutions', 'Industries'].map((label) =>
          <NavLink key={label} label={label} active={current === label}>{label}</NavLink>
          )}
        </nav>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className="ko-header-actions">
          <KoLangPicker />
          
          <div 
            style={koHeaderStyles.mobileMenuBtn}
            className="ko-header-mobile-menu-btn"
            onClick={() => setMobileMenuOpen(true)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(24,183,255,0.10)';
              e.currentTarget.style.borderColor = 'rgba(110,216,255,0.30)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
              e.currentTarget.style.borderColor = 'rgba(110,216,255,0.14)';
            }}>
            <Icon name="menu" size={24} />
          </div>
        </div>
      </div>
      
      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} active={current} />
    </div>);

};

const HeaderStack = ({ active }) =>
<div style={koHeaderStyles.shell}>
    <TopUtilityBar />
    <MainNav active={active} />
  </div>;


window.TopUtilityBar = TopUtilityBar;
window.MainNav = MainNav;
window.NavLink = NavLink;
window.MobileMenu = MobileMenu;
window.HeaderStack = HeaderStack;