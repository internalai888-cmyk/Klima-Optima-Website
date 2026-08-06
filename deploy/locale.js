/* ============================================================
   Klima Optima — Locale provision
   - Region switcher (distributor markets): Philippines / Indonesia / Singapore
     → changes flag, label, and distributor contact details
   - Language switcher: English ⇄ 中文 (Mandarin) → translates the page
   - Auto-detects region on first visit, choice persists, manual override
   Public API: window.KO_LOCALE
   ============================================================ */
(function () {
  'use strict';

  /* ---- Distributor markets ------------------------------------------ */
  const REGIONS = [
    {
      code: 'GL', flag: '🌐', name: 'Global',
      distributor: {
        company: 'Klima Optima',
        salesPhone: '+63 2 7956-5555', salesTel: 'tel:+6327956555',
        email: 'sales@klimaoptima.com',
        support: 'support@klimaoptima.com',
        mobile: '+63 (917) 623-4621', mobileTel: 'tel:+639176234621',
        address: '2904-B Tektite West Tower, Philippine Stock Exchange Centre, Exchange Road, Ortigas Center, Pasig City, Philippines 1605'
      }
    },
    {
      code: 'PH', flag: '🇵🇭', name: 'Philippines',
      distributor: {
        company: 'Klima Optima Philippines',
        salesPhone: '+63 2 7956-5555', salesTel: 'tel:+6327956555',
        email: 'sales@klimaoptima.com',
        support: 'support@klimaoptima.com',
        mobile: '+63 (917) 623-4621', mobileTel: 'tel:+639176234621',
        address: '2904-B Tektite West Tower, Philippine Stock Exchange Centre, Exchange Road, Ortigas Center, Pasig City, Philippines 1605'
      }
    },
    {
      code: 'ID', flag: '🇮🇩', name: 'Indonesia',
      distributor: {
        company: 'Klima Optima Indonesia',
        salesPhone: '+62 21 5000 0000', salesTel: 'tel:+62215000000',
        email: 'sales@klimaoptima.id',
        support: 'support@klimaoptima.id',
        mobile: '+62 811 1000 000', mobileTel: 'tel:+628111000000',
        address: '[Distributor address — Jakarta, Indonesia]'
      }
    },
    {
      code: 'SG', flag: '🇸🇬', name: 'Singapore',
      distributor: {
        company: 'Klima Optima Singapore',
        salesPhone: '+65 6000 0000', salesTel: 'tel:+6560000000',
        email: 'sales@klimaoptima.sg',
        support: 'support@klimaoptima.sg',
        mobile: '+65 8000 0000', mobileTel: 'tel:+6580000000',
        address: '[Distributor address — Singapore]'
      }
    }
  ];

  const LANGS = { en: 'En', zh: '中文' };
  const STORE = 'ko-locale';

  /* ---- Persistence -------------------------------------------------- */
  function loadState() {
    try { return JSON.parse(localStorage.getItem(STORE) || 'null') || {}; }
    catch (e) { return {}; }
  }
  function saveState(s) {
    try { localStorage.setItem(STORE, JSON.stringify(s)); } catch (e) {}
  }

  /* ---- Auto-detect region from browser / timezone ------------------- */
  function detectRegionCode() {
    let lang = '', tz = '';
    try { lang = (navigator.language || '').toLowerCase(); } catch (e) {}
    try { tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || '').toLowerCase(); } catch (e) {}
    if (/jakarta|pontianak|makassar|jayapura/.test(tz) || lang.startsWith('id') || lang.indexOf('-id') > -1) return 'ID';
    if (/singapore/.test(tz) || lang.indexOf('-sg') > -1) return 'SG';
    if (/manila/.test(tz) || lang.indexOf('-ph') > -1 || lang.startsWith('fil') || lang.startsWith('tl')) return 'PH';
    return 'GL';
  }

  function regionByCode(code) { return REGIONS.find(function (r) { return r.code === code; }); }

  let _state = (function () {
    const s = loadState();
    const region = regionByCode(s.region) ? s.region : detectRegionCode();
    const lang = LANGS[s.lang] ? s.lang : 'en';
    return { region: region, lang: lang };
  })();

  function getRegion() { return regionByCode(_state.region) || REGIONS[0]; }
  function getLang() { return _state.lang; }
  function current() {
    return { region: getRegion(), lang: { code: _state.lang, label: LANGS[_state.lang] } };
  }

  function emit() {
    try { window.dispatchEvent(new CustomEvent('ko-locale-change', { detail: current() })); } catch (e) {}
  }

  function setRegion(code) {
    if (!regionByCode(code)) return;
    _state.region = code; saveState(_state); emit();
  }
  function setLang(code) {
    if (!LANGS[code]) return;
    _state.lang = code; saveState(_state); applyLang(code); emit();
  }

  /* ===================================================================
     Translation — English ⇄ 中文
     Exact full-text-node matching against the dictionary below.
     Originals are stashed on each text node so En restores cleanly.
     =================================================================== */
  const DICT = {
    /* --- Header nav + utility --- */
    'Home': '首页', 'Products': '产品', 'Solutions': '解决方案', 'Industries': '行业',
    'About us': '关于我们', 'Resources': '资源中心', 'Service and Support': '服务与支持',
    'Careers': '招贤纳士', 'Contact us': '联系我们',

    /* --- Dropdowns --- */
    'Dehumidifiers': '除湿机', 'Air Conditioners': '空调', 'Humidifiers': '加湿器',
    'Moisture & humidity control': '水分与湿度控制',
    'Portable Aircons and Precision Cooling': '移动空调与精密制冷',
    'Precision moisture delivery': '精密水分输送',
    'Humidity Control': '湿度控制', 'Portable Cooling': '移动制冷',
    'Precision Climate Control': '精密环境控制',
    'Stable moisture for protected spaces': '为受保护空间维持稳定湿度',
    'Mobile cooling, deployed anywhere': '随处部署的移动制冷',
    'Critical-environment regulation': '关键环境调节',

    /* --- Hero --- */
    'Engineered for Precision Performance': '为精准性能而设计',
    'Climate Control Built for': '气候控制，专为',
    'Demanding Spaces': '严苛空间而建',
    'Portable cooling, dehumidification, and air-quality solutions for businesses, projects, and critical environments.': '为企业、项目和关键环境提供移动制冷、除湿和空气质量解决方案。',
    'Explore Industrial ACs': '探索工业空调',
    'Trusted Across Industries': '深受各行业信赖',
    'Proven in the Most': '历经验证，适用于最',
    'Critical Environments': '关键的环境',
    'Hospitals, factories, hotels, cold-storage, and data-grade spaces rely on Klima Optima to hold their conditions.': '医院、工厂、酒店、冷库和数据级空间都依靠 Klima Optima 维持其环境条件。',
    'Explore Commercial ACs': '探索商用空调',
    'Local Capability': '本地服务能力',
    'Built for Extreme': '专为极端的',
    'Heat and Humidity': '高温与潮湿而建',
    'Dependable local engineering, deployment, and service — wherever your operation runs.': '可靠的本地工程、部署与服务——无论您的业务在何处运行。',
    'Explore Dehumidifiers': '探索除湿机',

    /* --- Solutions section --- */
    'Our Solutions': '我们的解决方案',
    'Our': '我们的', 'Solutions ': '解决方案',
    'Premium climate control solutions engineered for mobility, precision, humidity control, and critical environments.': '专为移动性、精密度、湿度控制和关键环境而设计的高端气候控制解决方案。',
    'Maintain ideal moisture levels for healthier, more comfortable, and protected indoor environments.': '维持理想的湿度水平，营造更健康、更舒适、更受保护的室内环境。',
    'Flexible cooling solutions designed for quick setup, mobility, and efficient temperature control.': '灵活的制冷解决方案，专为快速安装、移动便利和高效温控而设计。',
    'Accurate temperature and humidity management for critical environments requiring stable operating conditions.': '为需要稳定运行条件的关键环境提供精准的温湿度管理。',
    'Learn More': '了解更多',

    /* --- Products section --- */
    'Our Products': '我们的产品',
    'Advanced Climate': '先进的气候', 'Control Solutions': '控制解决方案',
    'Engineered units across portable cooling, dehumidification, and precision humidity control — built for commercial deployment.': '涵盖移动制冷、除湿和精密湿度控制的精工设备——专为商业部署而打造。',
    'Aircons': '空调', '02 / Humidity': '02 / 湿度',
    'Portable Airconditioning and Precision Cooling': '移动空调与精密制冷',
    'Fast, targeted cooling for offices, hospitality, healthcare, events, and operational backup. Move it where the heat is.': '为办公室、酒店、医疗、活动和运营备援提供快速、定向的制冷。哪里热，就移到哪里。',
    'Control moisture, reduce mold and corrosion risk, and protect comfort in humid commercial and storage spaces.': '控制水分，降低霉变和腐蚀风险，在潮湿的商业和仓储空间中保障舒适。',
    'Precision Humidity Control': '精密湿度控制',
    'Accurate temperature and humidity management for critical environments — server rooms, archives, cleanrooms, labs.': '为关键环境提供精准的温湿度管理——机房、档案室、洁净室、实验室。',
    'View Products': '查看产品', 'View all products': '查看所有产品',
    'Capacity': '容量', 'Airflow': '风量', 'Portability': '便携性',
    'Extraction': '除湿量', 'Mode': '模式', 'Drainage': '排水',
    'Tolerance': '精度', 'RH range': '湿度范围', 'Monitoring': '监测',
    'up to 36k BTU': '最高 36k BTU', 'High-volume air delivery': '大风量送风',
    'Castor wheels': '万向脚轮', '30 to 500 L / Day': '每天 30 至 500 升',
    'Auto-RH': '自动湿度', 'Continuous': '连续', '24/7 BMS': '24/7 楼宇管理系统',
    '5 units in range': '系列含 5 款', '4 units in range': '系列含 4 款',
    'Bespoke deployment': '定制部署',

    /* --- Why Klima Optima (stats) --- */
    'Why Klima Optima': '为何选择 Klima Optima', 'Why': '为何选择',
    'We Combine Proven Technologies with a Depth of Industry Experience, and a Commitment to Customer Satisfaction.': '我们将成熟的技术、深厚的行业经验与对客户满意度的承诺融为一体。',
    'Years of Experience': '年行业经验', 'Clients and Projects': '客户与项目',
    'Local Support': '本地支持', 'Environments Optimized': '已优化环境',

    /* --- Clients --- */
    'Our Clients': '我们的客户',
    'Trusted by Businesses Across Industries': '深受各行业企业信赖',
    'Climate control trusted by leaders across healthcare, hospitality, construction, commercial spaces, manufacturing, and critical environments.': '深受医疗、酒店、建筑、商业空间、制造业和关键环境领域领导者信赖的气候控制方案。',
    'All': '全部', 'Healthcare': '医疗', 'Property': '物业', 'Food Manufacturing': '食品制造',

    /* --- Why choose us --- */
    'Built for extreme heat, humidity, and demanding operations.': '专为极端的高温、潮湿和严苛运营而打造。',
    'Business-ready deployment': '即用型商业部署',
    'Engineered for Performance and Reliability': '为性能与可靠性而设计',
    'Local Support and Technical Expertise': '本地支持与技术专长',
    'The Professionals Choice': '专业人士之选',

    /* --- Footer --- */
    'Company': '公司', 'Contact': '联系方式', 'Support': '支持',
    'All products': '所有产品', 'Project Support': '项目支持',
    'Portable AC': '移动空调', 'Air Scrubbers': '空气净化器', 'Critical Environment': '关键环境',
    'Documentation': '技术文档', 'Service': '服务', 'Inquire': '咨询',
    'Building engineered environments that comply with the temperature, humidity, and air-quality requirements of mission-critical, industrial, and commercial spaces.': '打造符合关键任务、工业和商业空间的温度、湿度及空气质量要求的工程化环境。',
    'The climate control specialist — engineered cooling, dehumidification, and air quality solutions for the world’s most demanding spaces.': '打造符合关键任务、工业和商业空间的温度、湿度及空气质量要求的工程化环境。',
    'Talk to a Specialist.': '联系专家咨询。',
    'Speak with a climate-control specialist about your project — survey, sizing, and deployment included.': '就您的项目咨询气候控制专家——包含现场勘测、选型和部署。',
    'Request Consultation': '预约咨询',
    '© 2026 Klima Optima®. The Climate Control Specialist.': '© 2026 Klima Optima®。气候控制专家。',
    'Privacy · Terms · Sitemap': '隐私 · 条款 · 网站地图',
    'Serving demanding spaces worldwide': '为全球严苛空间提供服务',

    /* --- Common CTAs --- */
    'Contact Us': '联系我们', 'Explore Solutions': '探索解决方案',
    'Explore Humidifiers': '探索加湿器', 'View Range': '查看系列',

    /* --- Contact page --- */
    'Contact Klima Optima': '联系 Klima Optima',
    "Let's Talk About": '让我们一起规划', "Let’s Talk About": '让我们一起规划',
    'Your Climate.': '您的气候环境。',
    'Site surveys, sizing reports, BMS integration, and service contracts — start the conversation and a specialist will reply within one business day.': '现场勘测、选型报告、楼宇管理系统集成和服务合约——开启对话，专家将在一个工作日内回复。',
    'Inquiry Form': '咨询表单',
    'Start a project conversation': '开启项目对话',
    'The more we know up front, the more useful the first call is. All fields encrypted; never shared.': '您提供的信息越充分，首次沟通就越高效。所有字段均经加密，绝不外泄。',
    'Company': '公司', 'Your name': '您的姓名', 'Email': '电子邮箱', 'Phone': '电话',
    'Inquiry type': '咨询类型', 'Industry': '行业',
    'Tell us about your project': '请告诉我们您的项目',
    'Submit Inquiry': '提交咨询',
    'Inquiry': '咨询', 'Sales': '销售', 'Technical Support': '技术支持',
    'Service and Maintenance': '服务与维护',
    'For Purchase and Project Inquiries': '采购与项目咨询',
    'For Support and Service Inquiries': '支持与服务咨询',
    'Mobile': '手机', 'Office Address': '办公地址',
    'Inquiry received.': '已收到您的咨询。',
    'A specialist will reach out within one business day.': '专家将在一个工作日内与您联系。',
    'Submit another': '再次提交'
  };

  const SKIP_TAGS = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, NOSCRIPT: 1, CODE: 1, svg: 1, SVG: 1 };

  function translate(root, toZh) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const p = n.parentNode;
        if (!p || SKIP_TAGS[p.nodeName]) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    let c;
    while ((c = walker.nextNode())) nodes.push(c);
    nodes.forEach(function (n) {
      if (toZh) {
        if (n.__koEn === undefined) {
          const key = n.nodeValue.trim();
          const zh = DICT[key];
          if (zh) { n.__koEn = n.nodeValue; n.nodeValue = n.nodeValue.replace(key, zh); }
        }
      } else if (n.__koEn !== undefined) {
        n.nodeValue = n.__koEn; delete n.__koEn;
      }
    });
  }

  let _observer = null;
  let _busy = false;
  function runTranslate(toZh) {
    if (_busy) return;
    _busy = true;
    if (_observer) _observer.disconnect();
    try { translate(document.body, toZh); } catch (e) {}
    if (_observer && getLang() === 'zh') {
      _observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    }
    _busy = false;
  }
  function startObserver() {
    if (_observer) return;
    _observer = new MutationObserver(function () {
      clearTimeout(window.__koI18nTimer);
      window.__koI18nTimer = setTimeout(function () {
        if (getLang() === 'zh') runTranslate(true);
      }, 200);
    });
    _observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  }
  function stopObserver() { if (_observer) { _observer.disconnect(); _observer = null; } }

  function applyLang(lang) {
    if (!document.body) {
      document.addEventListener('DOMContentLoaded', function () { applyLang(lang); });
      return;
    }
    if (lang === 'zh') { runTranslate(true); startObserver(); }
    else { stopObserver(); translate(document.body, false); }
  }

  /* ---- Boot: apply stored language once the page has rendered -------- */
  function boot() {
    if (_state.lang === 'zh') {
      setTimeout(function () { applyLang('zh'); }, 250);
      setTimeout(function () { applyLang('zh'); }, 900);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  /* ---- Public API --------------------------------------------------- */
  window.KO_LOCALE = {
    REGIONS: REGIONS,
    LANGS: LANGS,
    current: current,
    getRegion: getRegion,
    getRegionCode: function () { return _state.region; },
    getLang: getLang,
    setRegion: setRegion,
    setLang: setLang,
    detectRegionCode: detectRegionCode,
    translate: function () { applyLang(getLang()); }
  };
})();
