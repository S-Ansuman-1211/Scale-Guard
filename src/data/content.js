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
  { label: 'For Consultants', to: '/consultants' },
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
    icon: '⚗',
    title: 'No Chemicals',
    body: 'Zero treatment chemicals to procure, store, or discharge.',
  },
  {
    icon: '⚡',
    title: 'No Electricity',
    body: 'Fully passive operation with zero power consumption.',
  },
  {
    icon: '⚙',
    title: 'No Maintenance',
    body: 'Solid-state device with nothing to wear, service, or replace.',
  },
  {
    icon: '⇄',
    title: 'Easy Retrofit',
    body: 'Flanged inline installation with minimal disruption to existing piping.',
  },
  {
    icon: '♻',
    title: 'Environment Friendly',
    body: 'No chemical discharge and a reduced lifecycle environmental footprint.',
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
  'IITs (Jodhpur & Delhi)',
  'AIIMS Delhi',
  'Nanavati Hospital',
  'Indian Railways',
  'IICC Dwarka',
  'Defence Establishments',
  'Parliament House',
  'Supreme Court',
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
export const RECENT_INSTALLATIONS = [
  { name: 'ILBS Hospital, Vasant Kunj, Delhi', capacity: '3 × 300 TR', pmc: 'PMC – DMRC', img: '/images/projects/ilbs-hospital-vasant-kunj.jpg' },
  { name: 'Lady Hardinge Medical College, Delhi', capacity: '5 × 425 TR', pmc: 'PMC – HSCC', img: '/images/projects/lady-hardinge-medical-college.jpg' },
  { name: 'AIIMS, Mother & Child Block, Delhi', capacity: '5 × 500 TR', pmc: 'PMC – HSCC', img: '/images/projects/aiims-mother-child-block-delhi.jpg' },
  { name: 'LNJP Orthopaedic Block, Delhi', capacity: '5 × 120 TR', pmc: 'PMC – PWD, Delhi', img: '/images/projects/lnjp-orthopaedic-block-delhi.jpg' },
  { name: 'Amity University, Noida', capacity: '3 × 1000 TR', pmc: 'Client – Amity', img: '/images/projects/amity-university-noida.jpg' },
  { name: 'GB Pant Hospital, Delhi', capacity: '5 × 120 TR, 4 × 150 TR', pmc: 'PMC – PWD, Delhi', img: '/images/projects/gb-pant-hospital-delhi.jpg' },
  { name: 'Kashmiri Gate Metro Station, Delhi', capacity: '3 × 400 TR', pmc: 'PMC – DMRC', img: '/images/projects/kashmiri-gate-metro-station.jpg' },
  { name: 'IIT Delhi', capacity: '3 × 350 TR', pmc: 'PMC – CPWD', img: '/images/projects/iit-delhi.jpg' },
  { name: 'IIT Ropar', capacity: '3 × 600 TR', pmc: 'PMC – CPWD', img: '/images/projects/iit-ropar.jpg' },
  { name: 'IIT Mandi', capacity: '3 × 275 TR', pmc: 'PMC – NBCC', img: '/images/projects/iit-mandi.jpg' },
  { name: 'AIIMS, Bhatinda', capacity: '5 × 575 TR', pmc: 'PMC – HLL', img: '/images/projects/aiims-bhatinda.jpg' },
  { name: 'AIIMS, Gorakhpur', capacity: '5 × 500 TR', pmc: 'PMC – HLL', img: '/images/projects/aiims-gorakhpur.jpg' },
  { name: 'Omaxe CP Mall, Greater Noida', capacity: '7 × 850 TR', pmc: 'Client – Omaxe', img: '/images/projects/omaxe-cp-mall-greater-noida.jpg' },
  { name: 'Kalpana Chawla Hospital, Karnal', capacity: '3 × 250 TR', pmc: 'PMC – HSCC', img: '/images/projects/kalpana-chawla-hospital-karnal.jpg' },
  { name: 'Civil Hospital, Ahmedabad', capacity: '3 × 200 TR', pmc: 'Client – PWD, Gujarat', img: '/images/projects/civil-hospital-ahmedabad.jpg' },
  { name: 'AIIMS, Guwahati', capacity: '5 × 650 TR', pmc: 'PMC – HLL', img: '/images/projects/aiims-guwahati.jpg' },
  { name: 'R.N. Cooper Hospital, Mumbai', capacity: '3 × 320 TR', pmc: 'PMC – MCG, Mumbai', img: '/images/projects/rn-cooper-hospital-mumbai.jpg' },
  { name: 'PGIMS, Rohtak', capacity: '3 × 300 TR', pmc: 'PMC – PGIMS', img: '/images/projects/pgims-rohtak.jpg' },
  { name: 'Jammu Airport', capacity: '3 × 200 TR', pmc: 'PMC – AAI', img: '/images/projects/jammu-airport.jpg' },
  { name: 'Danish Embassy, Delhi', capacity: '2 × 150 TR', pmc: 'PMC – CPWD', img: '/images/projects/danish-embassy-delhi.jpg' },
  { name: 'South Asian University, Delhi', capacity: '4 × 1000 TR', pmc: 'Client – SAU', img: '/images/projects/south-asian-university-delhi.jpg' },
  { name: 'Supreme Court of India', capacity: '4 × 550 TR', pmc: 'PMC – CPWD', img: '/images/projects/supreme-court-of-india.jpg' },
  { name: 'India International Convention Centre, Delhi', capacity: '6 × 2000 TR', pmc: 'PMC – AECOM', img: '/images/projects/iicc-delhi.jpg' },
  { name: 'HUDA City Centre, Gurgaon', capacity: '3 × 235 TR', pmc: 'PMC – DMRC', img: '/images/projects/huda-city-centre-gurgaon.jpg' },
]

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

export const CONSULTANT_RESOURCES = [
  { title: 'BOQ Specifications', note: 'Bill-of-quantity line items in CPWD/PWD tender format.', to: '/contact', cta: 'Request via Contact' },
  { title: 'CAD Drawings', note: 'Flange, spool, and installation drawings for design coordination.', to: '/contact', cta: 'Request via Contact' },
  { title: 'Technical Datasheets', note: 'Sizing tables, specifications, and certifications.', to: '/downloads', cta: 'Go to Downloads' },
  { title: 'Reference Projects', note: 'Installed sites across government, healthcare, education, and rail.', to: '/projects', cta: 'View Projects' },
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
  { title: 'Product Catalogue', note: 'Full ScaleGuard product range, applications and specifications.', meta: 'PDF · 1.3 MB', file: '/docs/scaleguard-catalogue.pdf' },
  { title: 'ISO 9001 Certificate', note: 'Aqua Treat Pvt. Ltd. quality management certification.', meta: 'PDF · 1.5 MB', file: '/docs/aqua-treat-iso-9001-certificate.pdf' },
]

/* ---------------- Contact / external links ---------------- */
export const PHONE_DISPLAY = '+91 98100 23754'
export const PHONE_TEL = 'tel:+919810023754'
export const EMAIL = 'info@scaleguard.in'
export const EMAIL_MAILTO = 'mailto:info@scaleguard.in'
export const WHATSAPP_URL =
  'https://wa.me/919810023754?text=Hello%20ScaleGuard%2C%20I%27d%20like%20a%20technical%20proposal.'

export const CONTACT_INFO = [
  { label: 'Phone', value: PHONE_DISPLAY, href: PHONE_TEL },
  { label: 'Email', value: EMAIL, href: EMAIL_MAILTO },
  { label: 'WhatsApp', value: 'Reply within ~2 hours', href: WHATSAPP_URL, external: true },
  { label: 'Head Office', value: 'New Delhi, India' },
]
