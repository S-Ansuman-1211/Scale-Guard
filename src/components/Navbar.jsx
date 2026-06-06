import { NavLink, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { NAV_LINKS } from '../data/content'
import { toggleMobileNav, closeMobileNav } from '../store/slices/uiSlice'
import './Navbar.css'

export default function Navbar() {
  const dispatch = useDispatch()
  const open = useSelector((s) => s.ui.mobileNavOpen)
  const close = () => dispatch(closeMobileNav())

  return (
    <header className="nav">
      <div className="nav__accent" />
      <div className="container nav__inner">
        <Link to="/" className="brand" onClick={close}>
          <span className="brand__mark">S</span>
          <span className="brand__text">
            <span className="brand__name">ScaleGuard</span>
            <span className="brand__sub">TECHNOLOGIES</span>
          </span>
        </Link>

        <nav id="primary-nav" className={`nav__menu ${open ? 'is-open' : ''}`}>
          <ul className="nav__links">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
                  onClick={close}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* CTA shown only inside the mobile drawer */}
          <div className="nav__menu-cta">
            <Link to="/contact" className="btn btn--primary btn--block" onClick={close}>
              Request Proposal
            </Link>
          </div>
        </nav>

        <div className="nav__actions">
          {/* CTA shown only on desktop */}
          <Link to="/contact" className="btn btn--primary nav__cta">
            Request Proposal
          </Link>
          <button
            className={`nav__burger ${open ? 'is-open' : ''}`}
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => dispatch(toggleMobileNav())}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {open && <button className="nav__backdrop" aria-label="Close navigation" onClick={close} />}
    </header>
  )
}
