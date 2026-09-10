// Klima Optima, Icon set (Lucide-style line icons, 1.8 stroke)
// Cyan-tinted, premium engineering aesthetic.

const Icon = ({ name, size = 22, stroke = 1.8, ...rest }) => {
  const props = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor",
    strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round",
    ...rest,
  };
  switch (name) {
    case 'snowflake': return (
      <svg {...props}>
        <line x1="12" y1="2" x2="12" y2="22"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <line x1="5" y1="5" x2="19" y2="19"/>
        <line x1="19" y1="5" x2="5" y2="19"/>
        <path d="M9 5l3-2 3 2M9 19l3 2 3-2M5 9l-2 3 2 3M19 9l2 3-2 3"/>
      </svg>
    );
    case 'droplet': return (
      <svg {...props}><path d="M12 2c4 5 6 9 6 12a6 6 0 11-12 0c0-3 2-7 6-12z"/></svg>
    );
    case 'droplets': return (
      <svg {...props}><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 4.8 7 3.5c-.29 1.3-1.15 2.84-2.29 3.81S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/></svg>
    );
    case 'shield': return (
      <svg {...props}><path d="M12 22s8-4 8-12V5l-8-3-8 3v5c0 8 8 12 8 12z"/><path d="M9 12l2 2 4-4"/></svg>
    );
    case 'wind': return (
      <svg {...props}><path d="M3 8h11a3 3 0 100-6"/><path d="M3 14h17a3 3 0 110 6"/><path d="M3 11h9a2 2 0 100-4"/></svg>
    );
    case 'factory': return (
      <svg {...props}><path d="M2 20h20M4 20V11l5 3V11l5 3V8l5 3v9"/><path d="M8 20v-4M13 20v-4M18 20v-4"/></svg>
    );
    case 'building': return (
      <svg {...props}><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21V12h6v9"/></svg>
    );
    case 'hospital': return (
      <svg {...props}><path d="M3 21V8l9-5 9 5v13"/><path d="M12 9v6M9 12h6"/></svg>
    );
    case 'gauge': return (
      <svg {...props}><path d="M12 14l4-4"/><path d="M3.5 14a9 9 0 0117 0"/></svg>
    );
    case 'gear': return (
      <svg {...props}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
    );
    case 'arrow-right': return (
      <svg {...props}><path d="M5 12h14"/><path d="M13 5l7 7-7 7"/></svg>
    );
    case 'chevron-down': return (
      <svg {...props}><path d="M6 9l6 6 6-6"/></svg>
    );
    case 'globe': return (
      <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>
    );
    case 'check': return (
      <svg {...props}><path d="M4 12l5 5L20 6"/></svg>
    );
    case 'play': return (
      <svg {...props} fill="currentColor" stroke="none"><path d="M8 5v14l11-7z"/></svg>
    );
    case 'sun-snow': return (
      <svg {...props}><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/></svg>
    );
    case 'thermo': return (
      <svg {...props}><path d="M10 14V4a2 2 0 114 0v10a4 4 0 11-4 0z"/></svg>
    );
    case 'warehouse': return (
      <svg {...props}><path d="M3 21V9l9-4 9 4v12"/><path d="M7 21v-7h10v7M7 17h10"/></svg>
    );
    case 'hotel': return (
      <svg {...props}><path d="M3 22V4h18v18"/><path d="M7 22v-6h10v6M7 9h2M11 9h2M15 9h2M7 13h2M11 13h2M15 13h2"/></svg>
    );
    case 'cold': return (
      <svg {...props}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 12h18M9 3v18"/></svg>
    );
    case 'retail': return (
      <svg {...props}><path d="M3 9h18l-2 11H5L3 9zM7 9V6a5 5 0 0110 0v3"/></svg>
    );
    case 'event': return (
      <svg {...props}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>
    );
    case 'support': return (
      <svg {...props}><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path d="M9 9a3 3 0 116 0c0 2-3 2-3 4M12 17v.01"/></svg>
    );
    case 'bacteria': return (
      <svg {...props}>
        <ellipse cx="12" cy="12" rx="4.5" ry="6.5" transform="rotate(-38 12 12)"/>
        <path d="M6.6 7.2L4.4 5.4M5.2 11L2.7 10.6M7.4 16.4l-1.7 2M12.4 18.6l.6 2.4M16.8 14.6l2.4.7M17.6 9.6l2.2-1.2M14.2 5.6l1-2.3"/>
        <circle cx="10" cy="13" r="1"/>
        <circle cx="13.3" cy="10.2" r="1"/>
      </svg>
    );
    case 'palm': return (
      <svg {...props}><path d="M12 9c-1-3-4-4.5-7-3.5"/><path d="M12 9c1-3 4-4.5 7-3.5"/><path d="M12 9c-3-1-6.5 0-8.5 2.5"/><path d="M12 9c3-1 6.5 0 8.5 2.5"/><path d="M12 9c-.5 4-.5 9 .5 13"/><path d="M9.5 22h5.5"/></svg>
    );
    case 'plug': return (
      <svg {...props}><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-1.5v5"/><path d="M6 8v5a4 4 0 0 0 4 4h1.5"/><path d="M5 8h14"/></svg>
    );
    case 'chip': return (
      <svg {...props}><rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M10 2v3M14 2v3M10 19v3M14 19v3M2 10h3M2 14h3M19 10h3M19 14h3"/></svg>
    );
    case 'server': return (
      <svg {...props}><rect x="2" y="3" width="20" height="8" rx="2"/><rect x="2" y="13" width="20" height="8" rx="2"/><path d="M6 7h.01M6 17h.01"/></svg>
    );
    case 'leaf': return (
      <svg {...props}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.48 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>
    );
    case 'fan': return (
      <svg {...props}><path d="M10.83 16.38a6.08 6.08 0 0 1-8.62-7l5.41 1.45a6.08 6.08 0 0 1 7-8.62l-1.45 5.41a6.08 6.08 0 0 1 8.62 7l-5.41-1.45a6.08 6.08 0 0 1-7 8.62z"/><circle cx="12" cy="12" r="1.2"/></svg>
    );
    case 'restaurant': return (
      <svg {...props}><path d="M3 2v7a2 2 0 0 0 2 2 2 2 0 0 0 2-2V2"/><path d="M5 11v11"/><path d="M21 15V2a5 5 0 0 0-5 5v6a2 2 0 0 0 2 2h3zm0 0v7"/></svg>
    );
    case 'fork': return (
      <svg {...props}><path d="M6 2v5a3 3 0 0 0 6 0V2"/><path d="M9 2v9"/><path d="M9 11v11"/></svg>
    );
    case 'dumbbell': return (
      <svg {...props}><path d="M6.5 6v12"/><path d="M9.5 8v8"/><path d="M14.5 8v8"/><path d="M17.5 6v12"/><path d="M9.5 12h5"/></svg>
    );
    case 'party': return (
      <svg {...props}><path d="M3 21l4.5-12 7.5 7.5z"/><path d="M7.5 9l7.5 7.5"/><path d="M14 3.5l.6 1.6M19 5l-1.1 1.2M20.5 10l-1.6.4M17.5 14l-1-1.4"/><circle cx="13.5" cy="9" r="0.7"/><circle cx="18" cy="9.5" r="0.7"/></svg>
    );
    case 'antenna': return (
      <svg {...props}><path d="M12 11v10"/><path d="M8.5 21h7"/><circle cx="12" cy="9" r="1.6"/><path d="M9.2 11.8a4 4 0 0 1 0-5.6"/><path d="M14.8 6.2a4 4 0 0 1 0 5.6"/><path d="M6.8 14.2a8 8 0 0 1 0-10.4"/><path d="M17.2 3.8a8 8 0 0 1 0 10.4"/></svg>
    );
    case 'flask': return (
      <svg {...props}><path d="M9 2h6"/><path d="M10 2v6.5L4.8 17.5A2 2 0 0 0 6.5 20.5h11a2 2 0 0 0 1.7-3L14 8.5V2"/><path d="M7.2 14h9.6"/></svg>
    );
    case 'maximize': return (
      <svg {...props}><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>
    );
    case 'volume-x': return (
      <svg {...props}><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M22 9l-6 6M16 9l6 6"/></svg>
    );
    case 'water': return (
      <svg {...props}><path d="M2 7c2 0 2.5 1.5 5 1.5S11.5 7 14 7s2.5 1.5 5 1.5"/><path d="M2 12c2 0 2.5 1.5 5 1.5S11.5 12 14 12s2.5 1.5 5 1.5"/><path d="M2 17c2 0 2.5 1.5 5 1.5S11.5 17 14 17s2.5 1.5 5 1.5"/></svg>
    );
    case 'smoke': return (
      <svg {...props}><path d="M7 21c0-2 1.5-2.5 1.5-4S7 15 7 13s1.5-2.5 1.5-4S7 6.5 7 4.5"/><path d="M12 21c0-2 1.5-2.5 1.5-4S12 15 12 13s1.5-2.5 1.5-4S12 6.5 12 4.5"/><path d="M17 21c0-2 1.5-2.5 1.5-4S17 15 17 13s1.5-2.5 1.5-4S17 6.5 17 4.5"/></svg>
    );
    case 'computer': return (
      <svg {...props}><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
    );
    case 'cross': return (
      <svg {...props}><path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/></svg>
    );
    case 'book': return (
      <svg {...props}><path d="M4 4.5A2.5 2.5 0 016.5 2H20v15H6.5A2.5 2.5 0 004 19.5z"/><path d="M4 19.5A2.5 2.5 0 016.5 17H20v5H6.5A2.5 2.5 0 014 19.5z"/></svg>
    );
    case 'zap': return (
      <svg {...props}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
    );
    case 'hardhat': return (
      <svg {...props}>
        <path d="M2 13.5h20"/>
        <path d="M4 13.5v3a1 1 0 001 1h14a1 1 0 001-1v-3"/>
        <path d="M12 3.5v2"/>
        <path d="M5 13.5a7 7 0 0114 0"/>
      </svg>
    );
    case 'handshake': return (
      <svg {...props}>
        <path d="M2 10h5l2-3h6l2 3h5v6h-5l-2 3H9l-2-3H2V10z"/>
        <path d="M9 7v3M15 7v3"/>
      </svg>
    );
    case 'download': return (
      <svg {...props}><path d="M12 3v12M7 10l5 5 5-5M4 21h16"/></svg>
    );
    case 'search': return (
      <svg {...props}><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
    );
    case 'x': return (
      <svg {...props}><path d="M6 6l12 12M18 6L6 18"/></svg>
    );
    case 'menu': return (
      <svg {...props}><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
    );
    case 'sun': return (
      <svg {...props}><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/></svg>
    );
    case 'thermometer': return (
      <svg {...props}><path d="M14 14V5a2 2 0 10-4 0v9a4 4 0 104 0z"/><line x1="12" y1="9" x2="12" y2="15"/></svg>
    );
    default: return <svg {...props}><circle cx="12" cy="12" r="9"/></svg>;
  }
};

window.Icon = Icon;
