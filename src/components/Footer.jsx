import { Link } from 'react-router-dom'
import { WHATSAPP_URL, EMAIL_MAILTO, PHONE_TEL } from '../data/content'
import './Footer.css'

const EXPLORE = [
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Applications', to: '/applications' },
  { label: 'Benefits', to: '/benefits' },
  { label: 'Projects', to: '/projects' },
]

const CONNECT = [
  { label: 'Contact', to: '/contact' },
  { label: 'Downloads', to: '/downloads' },
  { label: 'Tender Support', to: '/consultants' },
  { label: 'WhatsApp', href: WHATSAPP_URL, external: true },
]

function FooterLink({ item }) {
  if (item.external) {
    return (
      <a className="footer__link" href={item.href} target="_blank" rel="noopener noreferrer">
        {item.label}
      </a>
    )
  }
  return (
    <Link className="footer__link" to={item.to}>
      {item.label}
    </Link>
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
          <div className="footer__direct">
            <a href={PHONE_TEL} className="footer__direct-link">+91 99999 99999</a>
            <span className="footer__dot">·</span>
            <a href={EMAIL_MAILTO} className="footer__direct-link">info@scaleguard.in</a>
          </div>
        </div>

        <div className="footer__col">
          <span className="footer__head">Explore</span>
          {EXPLORE.map((l) => <FooterLink key={l.label} item={l} />)}
        </div>

        <div className="footer__col">
          <span className="footer__head">Connect</span>
          {CONNECT.map((l) => <FooterLink key={l.label} item={l} />)}
        </div>
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
