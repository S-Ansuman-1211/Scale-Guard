import { Link } from 'react-router-dom'
import Figure from '../components/Figure'
import { IMG } from '../data/media'
import { STATS, BENEFIT_TILES, CASE_STUDY, PROVEN } from '../data/content'
import './Home.css'

export default function Home() {
  const caseRows = CASE_STUDY.rows.filter(([k]) =>
    ['System', 'Observed Energy Reduction', 'Annual Savings', 'Installation Cost', 'Payback Period'].includes(k)
  )

  return (
    <div className="home">
      {/* ---------- Hero ---------- */}
      <section className="section--paper home-hero">
        <div className="container">
          <div className="home-hero__masthead">
            <span>VOL. 35 · EST. 1989</span>
            <span>ENGINEERING BRIEF — HVAC WATER TREATMENT</span>
          </div>
          <hr className="rule" />

          <div className="home-hero__grid">
            <div className="home-hero__copy fade-up">
              <p className="eyebrow">Non-Chemical Scale Prevention</p>
              <h1 className="display">
                Engineering clean<br />water. <em>Sustaining</em><br />energy. Without<br />chemicals.
              </h1>
              <p className="lead">
                ScaleGuard is a passive, inline water conditioning system that helps prevent
                scale formation in cooling towers, chiller plants and condenser water circuits.
                No chemicals. No electricity. Minimal maintenance.
              </p>
              <div className="home-hero__actions">
                <Link to="/contact" className="btn btn--primary">Get a Free Site Assessment →</Link>
                <Link to="/how-it-works" className="btn btn--ghost">See How It Works</Link>
              </div>
            </div>

            <div className="home-hero__media">
              <Figure
                src={IMG.coolingTowers}
                alt="Institutional chiller plant cooling towers at dusk"
                ratio="4 / 3"
                caption="A 2,400 TR chiller plant — typical of the institutional installations served since 1989."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Stats ---------- */}
      <section className="section--paper home-stats">
        <div className="container home-stats__grid">
          {STATS.map((s) => (
            <div className="home-stats__item" key={s.value}>
              <div className="home-stats__value">{s.value}</div>
              <div className="home-stats__label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Challenge editorial ---------- */}
      <section className="section">
        <div className="container">
          <div className="home-editorial">
            <div>
              <p className="eyebrow">Editorial № 01</p>
              <h2 className="h-section">The challenge with scale in HVAC systems</h2>
            </div>
            <div className="home-editorial__body">
              <p className="muted">
                Scale deposits on heat transfer surfaces reduce efficiency, increase energy
                consumption, and shorten equipment life. Traditional chemical treatment programs
                involve ongoing costs, handling hazards, and environmental considerations.
              </p>
              <p className="muted">
                ScaleGuard offers a non-chemical alternative using nano-material principles to
                condition water — keeping condensers, chillers, and cooling towers operating
                closer to their design efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Benefit tiles ---------- */}
      <section className="section--paper section--tight">
        <div className="container">
          <div className="home-benefits__head">
            <div>
              <p className="eyebrow">Why Consider ScaleGuard</p>
              <h2 className="h-section">Engineered to disappear into your plant room.</h2>
            </div>
            <Link to="/benefits" className="home-link">All benefits →</Link>
          </div>

          <div className="grid grid-4 home-benefits__grid">
            {BENEFIT_TILES.map((t) => (
              <div className="tile" key={t.title}>
                <span className="tile__icon" aria-hidden>◆</span>
                <h3 className="tile__title">{t.title}</h3>
                <p className="tile__body">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Featured case study ---------- */}
      <section className="section">
        <div className="container home-case">
          <div className="home-case__media">
            <Figure src={IMG.valve} alt="Stainless steel inline conditioning device" ratio="1 / 1" />
          </div>
          <div className="home-case__copy">
            <p className="eyebrow">Featured Case Study</p>
            <h2 className="h-section">IIT Jodhpur — 2,400 TR chiller plant.</h2>
            <p className="muted home-case__intro">{CASE_STUDY.intro}</p>
            <dl className="home-case__rows">
              {caseRows.map(([k, v]) => (
                <div className="home-case__row" key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <Link to="/projects" className="home-link">Read full case study →</Link>
          </div>
        </div>
      </section>

      {/* ---------- Proven band ---------- */}
      <section className="section--navy section--tight">
        <div className="container">
          <p className="eyebrow eyebrow--muted">Proven in Critical Infrastructure</p>
          <div className="home-proven">
            {PROVEN.map((p) => (
              <span className="home-proven__item" key={p}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="section">
        <div className="container">
          <hr className="rule" />
          <div className="home-cta">
            <div>
              <p className="eyebrow">Get In Touch</p>
              <h2 className="h-section">Ready to evaluate options for your cooling<br />water system?</h2>
            </div>
            <div className="home-cta__actions">
              <Link to="/contact" className="btn btn--primary">Request Technical Proposal</Link>
              <Link to="/downloads" className="btn btn--ghost">Download Brochure</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
