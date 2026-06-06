/* ============================================================
   Central content store for the ScaleGuard site.
   Edit copy here without touching page layout.
   ============================================================ */

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Applications', to: '/applications' },
  { label: 'Benefits', to: '/benefits' },
  { label: 'Projects', to: '/projects' },
  { label: 'Consultants', to: '/consultants' },
  { label: 'Downloads', to: '/downloads' },
  { label: 'Contact', to: '/contact' },
]

/* ---------------- Shared figures ---------------- */
export const STATS = [
  { value: '35+', label: 'years of engineering experience' },
  { value: '300+', label: 'installations across India' },
  { value: '5–15%', label: 'documented chiller energy savings' },
]

export const BENEFIT_TILES = [
  {
    title: 'No chemical dosing',
    body: 'Zero treatment chemicals to procure, store, or discharge.',
  },
  {
    title: 'No external power',
    body: 'Passive operation with zero electricity consumption.',
  },
  {
    title: 'No moving parts',
    body: 'Solid-state device with nothing to wear or replace.',
  },
  {
    title: 'Inline installation',
    body: 'Flanged into the condenser line with minimal disruption.',
  },
]

/* ---------------- Featured case study ---------------- */
export const CASE_STUDY = {
  title: 'IIT Jodhpur — 2,400 TR Chiller Plant',
  intro:
    'An institutional chiller plant where ScaleGuard replaced the conventional chemical dosing program. Conservative measurement methodology recorded a ~5% reduction in electricity consumption.',
  rows: [
    ['System', '2,400 TR water-cooled chiller plant'],
    ['Treatment', 'ScaleGuard inline conditioning (condenser circuit)'],
    ['Measurement Approach', 'Conservative comparative methodology'],
    ['Observed Energy Reduction', '~5% in electricity consumption'],
    ['Annual Savings', '₹30.6 Lakhs'],
    ['Installation Cost', '₹73.5 Lakhs'],
    ['Payback Period', '~2 years 4 months'],
  ],
}

export const PROVEN = [
  'Parliament House',
  'Supreme Court',
  'AIIMS Delhi',
  'IIT Jodhpur',
  'CPWD Projects',
]

/* ---------------- About ---------------- */
export const CERTIFICATIONS = [
  { title: 'ISO 9001:2000', note: 'Certified Quality Management' },
  { title: 'CPWD Approved', note: 'Central Public Works Department vendor' },
  { title: 'PWD Registered', note: 'Across multiple Indian states' },
  { title: '5-Year Warranty', note: 'On all ScaleGuard products' },
  { title: '1-Year Free Service', note: 'Post-installation support included' },
  { title: '35+ Years', note: 'In water treatment engineering' },
]

export const TIMELINE = [
  ['1989', 'Company founded as Aqua Treat Pvt. Ltd.'],
  ['1990s–2000s', 'Early government and hospital projects across North India.'],
  ['2010s', 'ScaleGuard developed; major institutional installations.'],
  ['2020s', 'Over 300 active systems deployed nationwide.'],
]

export const CORE_VALUES = [
  'Engineering-driven innovation',
  'Field-validated performance',
  'Reduced chemical footprint',
  '5-year warranty, 1-year free service',
]

/* ---------------- How it works ---------------- */
export const PROCESS_STAGES = [
  {
    num: '01',
    title: 'Nano-Ion Adsorption',
    body: 'Water passes through a specialised nano-material core that selectively adsorbs H⁺ ions, creating a localised pH shift inside the device. This encourages controlled precipitation of minerals within the unit rather than on downstream equipment.',
  },
  {
    num: '02',
    title: 'Nano-Turbulence Core',
    body: 'Internal turbulence elements break down the precipitated particles into very fine colloidal sizes (approximately 0.01–0.05 µm). These particles remain suspended and are typically removed through normal blowdown.',
  },
]

export const PROCESS_STEPS = [
  ['01', 'Hard water enters the device'],
  ['02', 'Localised ion adsorption and pH effect'],
  ['03', 'Mineral precipitation inside the unit'],
  ['04', 'Particle fragmentation into colloidal suspension'],
  ['05', 'Conditioned water exits — reduced scaling potential'],
]

/* ---------------- Applications ---------------- */
export const APPLICATIONS = [
  ['01', 'HVAC Cooling Towers', 'Helps maintain fill media, nozzles, and basins.', 'Institutional, commercial'],
  ['02', 'Chiller Plants & Condenser Circuits', 'Supports heat transfer efficiency in water-cooled chillers.', 'Multiple TR ranges, DN25–DN600+'],
  ['03', 'Hospitals & Healthcare', 'Chemical-free operation for critical environments.', 'AIIMS, Safdarjung, GTB'],
  ['04', 'Educational Institutions', 'Low-maintenance solution for campus HVAC.', 'IIT Jodhpur, IIT Delhi'],
  ['05', 'Government Buildings', 'CPWD/PWD installations in sensitive facilities.', 'Parliament House, Supreme Court'],
  ['06', 'Airports & Large Infrastructure', 'High-throughput cooling for large concourses.', 'NBCC Dwarka and similar'],
  ['07', 'Industrial Process Cooling', 'Heat exchangers and process equipment.', 'Process plants'],
]

/* ---------------- Benefits ---------------- */
export const BENEFIT_GROUPS = [
  {
    title: 'Operational',
    items: [
      'No ongoing chemical dosing',
      'No power requirement',
      'No moving parts',
      'Inline installation with limited disruption',
    ],
  },
  {
    title: 'Financial',
    items: [
      '5–15% chiller energy reduction (documented)',
      'Elimination of annual chemical costs',
      'Extended equipment cleaning intervals',
      'Typical payback in 2–3 years',
    ],
  },
  {
    title: 'Environmental',
    items: [
      'Zero chemical discharge from treatment',
      'Reduced hazardous material handling',
      'Supports LEED / IGBC objectives',
      'Lower lifecycle footprint',
    ],
  },
]

export const COMPARISON = {
  head: ['Aspect', 'Chemical Treatment', 'ScaleGuard'],
  rows: [
    ['Ongoing chemical dosing required', 'Yes', 'No'],
    ['External power supply required', 'Often', 'No'],
    ['Moving parts / regular service', 'Yes', 'No'],
    ['Chemical handling and disposal', 'Yes', 'Eliminated'],
    ['Typical chiller energy savings', 'Baseline', '5–15%'],
    ['Payback period', '—', '2–3 years (typical)'],
    ['Supports LEED / IGBC', 'Limited', 'Yes'],
  ],
}

/* ---------------- Projects ---------------- */
export const INSTALLATION_GROUPS = [
  {
    title: 'Government / CPWD',
    items: ['Parliament House', 'Supreme Court of India', "Prime Minister's Office", 'Various Ministries'],
  },
  {
    title: 'Healthcare',
    items: ['AIIMS Delhi', 'Safdarjung Hospital', 'GTB Hospital', 'G.B. Pant Hospital'],
  },
  {
    title: 'Education',
    items: ['IIT Jodhpur', 'IIT Delhi', 'Lady Hardinge Medical College'],
  },
  {
    title: 'Infrastructure & Defence',
    items: ['NBCC Dwarka', 'Defence facilities', 'Airport terminals'],
  },
]

export const PROJECT_SUMMARY = {
  head: ['Sector', 'No. of Projects', 'Key References'],
  rows: [
    ['Government / CPWD', '80+', 'Parliament House, Supreme Court, PMO'],
    ['Healthcare', '60+', 'AIIMS, Safdarjung, GTB'],
    ['Education', '40+', 'IIT Jodhpur, IIT Delhi'],
    ['Industrial', '70+', 'Process cooling installations'],
    ['Infrastructure', '50+', 'NBCC Dwarka, airports, defence'],
  ],
}

/* ---------------- Consultants ---------------- */
export const CONSULTANT_BLOCKS = [
  {
    title: 'Specification & Sizing',
    items: ['Hydraulic sizing per TR', 'Pipe-size selection DN25–DN600+', 'Pressure-drop analysis', 'Custom flange ratings'],
  },
  {
    title: 'Tender Documentation',
    items: ['CPWD-format technical specs', 'PWD-registered vendor documents', 'BOQ assistance', 'Comparison statements'],
  },
  {
    title: 'Installation Coordination',
    items: ['Site-readiness checklist', 'Flange / spool drawings', 'On-site supervision', 'Commissioning protocols'],
  },
  {
    title: 'Post-Installation',
    items: ['1-year free service', '5-year product warranty', 'Performance verification', 'Operator training'],
  },
]

export const KEY_PARAMETERS = {
  head: ['Parameter', 'Value'],
  rows: [
    ['Connection Type', 'Flanged (ANSI / DIN)'],
    ['Pipe Sizes', 'DN25 to DN600+'],
    ['Operating Pressure', 'Up to PN16 (higher on request)'],
    ['Operating Temperature', 'Ambient to 90 °C'],
    ['Body Material', 'Carbon steel with anti-corrosion treatment'],
    ['Internal Core', 'Nano-material composite'],
    ['Power Required', 'None — fully passive'],
    ['Pressure Drop', 'Negligible at design flow'],
    ['Maintenance', 'Annual visual inspection'],
    ['Warranty', '5 years product, 1 year free service'],
  ],
}

/* ---------------- Downloads ---------------- */
export const DOWNLOADS = [
  { title: 'Company Brochure', note: 'Overview of ScaleGuard products and applications.', meta: 'PDF · 2.4 MB', file: '/docs/company-brochure.pdf' },
  { title: 'Technical Data Sheet', note: 'Specifications, sizing tables, and pressure-drop charts.', meta: 'PDF · 1.1 MB', file: '/docs/technical-data-sheet.pdf' },
  { title: 'Case Study — IIT Jodhpur', note: '2,400 TR chiller plant savings analysis.', meta: 'PDF · 850 KB', file: '/docs/case-study-iit-jodhpur.pdf' },
  { title: 'Tender Specifications', note: 'CPWD-format technical specs for procurement.', meta: 'PDF · 720 KB', file: '/docs/tender-specifications.pdf' },
  { title: 'Comparison Document', note: 'Chemical treatment vs ScaleGuard analysis.', meta: 'PDF · 640 KB', file: '/docs/comparison-document.pdf' },
  { title: 'Installation Guidelines', note: 'Site preparation and commissioning protocols.', meta: 'PDF · 980 KB', file: '/docs/installation-guidelines.pdf' },
]

/* ---------------- Contact / external links ---------------- */
export const PHONE_DISPLAY = '+91 99999 99999'
export const PHONE_TEL = 'tel:+919999999999'
export const EMAIL = 'info@scaleguard.in'
export const EMAIL_MAILTO = 'mailto:info@scaleguard.in'
export const WHATSAPP_URL =
  'https://wa.me/919999999999?text=Hello%20ScaleGuard%2C%20I%27d%20like%20a%20technical%20proposal.'

export const CONTACT_INFO = [
  { label: 'Phone', value: PHONE_DISPLAY, href: PHONE_TEL },
  { label: 'Email', value: EMAIL, href: EMAIL_MAILTO },
  { label: 'WhatsApp', value: 'Reply within ~2 hours', href: WHATSAPP_URL, external: true },
  { label: 'Head Office', value: 'New Delhi, India' },
]
