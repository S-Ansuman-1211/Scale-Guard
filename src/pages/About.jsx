import PageHeader from '../components/PageHeader'
import Figure from '../components/Figure'
import { IMG } from '../data/media'
import { CERTIFICATIONS, TIMELINE, CORE_VALUES } from '../data/content'
import './pages.css'

export default function About() {
  return (
    <div>
      <PageHeader
        eyebrow="About Us"
        title="A practical, engineering-led approach to non-chemical water conditioning."
        lead="ScaleGuard Technologies is a brand of Aqua Treat Pvt. Ltd., established in 1989 and ISO 9001:2000 certified."
      />

      {/* Approach */}
      <section className="section">
        <div className="container split split--center">
          <Figure src={IMG.building} alt="ScaleGuard / Aqua Treat head office" ratio="4 / 3" />
          <div>
            <p className="eyebrow">Our Approach</p>
            <p className="lead" style={{ marginBottom: 28 }}>
              We focus on passive inline devices that use nano-material properties and controlled
              fluid dynamics to influence mineral behaviour in water — reducing scale deposition on
              heat transfer surfaces.
            </p>
            <div className="split" style={{ gap: 40 }}>
              <div>
                <h3 className="block__title">Mission</h3>
                <p className="muted small">
                  Reliable, low-maintenance solutions that support efficient HVAC operation while
                  reducing dependency on chemical treatments.
                </p>
              </div>
              <div>
                <h3 className="block__title">Core Values</h3>
                <ul className="dashlist">
                  {CORE_VALUES.map((v) => <li key={v}>{v}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section--paper section">
        <div className="container">
          <p className="eyebrow">Credentials</p>
          <h2 className="h-section sec-head">Certifications &amp; Approvals</h2>
          <div className="certs">
            {CERTIFICATIONS.map((c) => (
              <div className="cert" key={c.title}>
                <h3 className="cert__title">{c.title}</h3>
                <p className="cert__note">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Our Journey</p>
          <div className="timeline" style={{ marginTop: 24 }}>
            {TIMELINE.map(([year, text]) => (
              <div className="timeline__row" key={year}>
                <span className="timeline__year">{year}</span>
                <span className="timeline__text">{text}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48 }}>
            <p className="eyebrow">Institutional Experience</p>
            <p className="lead text-steel">
              Installations completed at Parliament House, Prime Minister's Office, Supreme Court,
              AIIMS hospital, IIT campuses, and other critical facilities across India.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
