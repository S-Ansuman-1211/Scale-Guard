import { Link } from 'react-router-dom'
import { WHATSAPP_URL, EMAIL, EMAIL_MAILTO, PHONE_DISPLAY, PHONE_TEL } from '../data/content'
import './Footer.css'

const COLUMNS = [
  {
    head: 'Explore',
    links: [
      { label: 'How It Works', to: '/how-it-works' },
      { label: 'Applications', to: '/applications' },
      { label: 'Benefits', to: '/benefits' },
      { label: 'Projects', to: '/projects' },
    ],
  },
  {
    head: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'For Consultants', to: '/consultants' },
      { label: 'Downloads', to: '/downloads' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    head: 'Connect',
    links: [
      { label: PHONE_DISPLAY, href: PHONE_TEL },
      { label: EMAIL, href: EMAIL_MAILTO },
      { label: 'WhatsApp', href: WHATSAPP_URL, external: true },
    ],
  },
]

function FooterLink({ item }) {
  if (item.to) {
    return <Link className="footer__link" to={item.to}>{item.label}</Link>
  }
  return (
    <a
      className="footer__link"
      href={item.href}
      {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {item.label}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__name">ScaleGuard</Link>
          <p className="footer__tag">Engineering Clean Water. Sustaining Energy. Without Chemicals.</p>
          <p className="footer__meta">A brand of Aqua Treat Pvt. Ltd. — ISO 9001:2000 certified since 1989.</p>
        </div>

        {COLUMNS.map((col) => (
          <div className="footer__col" key={col.head}>
            <span className="footer__head">{col.head}</span>
            {col.links.map((l) => <FooterLink key={l.label} item={l} />)}
          </div>
        ))}
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <span>© 2026 Aqua Treat Pvt. Ltd. All rights reserved.</span>
          <span>CPWD Approved · PWD Registered · 5-Year Warranty</span>
        </div>
      </div>
    </footer>
  )
}
