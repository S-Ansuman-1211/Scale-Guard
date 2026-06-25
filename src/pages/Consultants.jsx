import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { CONSULTANT_BLOCKS, CONSULTANT_RESOURCES, KEY_PARAMETERS, DOWNLOADS } from '../data/content'
import './pages.css'

export default function Consultants() {
  return (
    <div>
      <PageHeader
        eyebrow="For Consultants"
        title="Specifications, sizing, and CPWD/PWD documentation — handled."
        lead="Detailed technical specifications, sizing assistance, CPWD/PWD documentation support, installation guidelines, and on-site coordination provided for consultants, contractors, and government officers."
      />

      {/* Resources */}
      <section className="section--paper section--tight">
        <div className="container">
          <p className="eyebrow">Resources</p>
          <h2 className="h-section sec-head">Consultant Resources</h2>
          <div className="listcards">
            {CONSULTANT_RESOURCES.map((r) => (
              <div className="listcard" key={r.title}>
                <h3 className="listcard__title">{r.title}</h3>
                <p className="muted small" style={{ marginBottom: 14 }}>{r.note}</p>
                <Link to={r.to} className="text-steel small">{r.cta} →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support blocks */}
      <section className="section">
        <div className="container grid grid-2">
          {CONSULTANT_BLOCKS.map((b) => (
            <div key={b.title}>
              <h3 className="block__title" style={{ fontSize: '1.15rem' }}>{b.title}</h3>
              <ul className="dashlist">
                {b.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Key parameters */}
      <section className="section--paper section">
        <div className="container">
          <p className="eyebrow">Technical Specifications</p>
          <h2 className="h-section sec-head">Key Parameters</h2>
          <div className="tablewrap">
            <table className="table">
              <thead>
                <tr>{KEY_PARAMETERS.head.map((h) => <th key={h}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {KEY_PARAMETERS.rows.map(([p, v]) => (
                  <tr key={p}>
                    <td style={{ width: '40%' }}>{p}</td>
                    <td className="pos">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Downloads</p>
          <h2 className="h-section sec-head">Documentation Library</h2>
          <div className="downloads">
            {DOWNLOADS.map((d) => (
              <div className="download" key={d.title}>
                <span className="download__icon" aria-hidden>▤</span>
                <div className="download__body">
                  <h3 className="download__title">{d.title}</h3>
                  <p className="download__note">{d.note}</p>
                  <span className="download__meta">{d.meta}</span>
                </div>
                <a
                  className="download__dl"
                  href={d.file}
                  download
                  aria-label={`Download ${d.title}`}
                >↓</a>
              </div>
            ))}
          </div>

          <p className="muted small" style={{ marginTop: 24 }}>
            Need something specific for a tender? <Link to="/contact" className="text-steel">Request via Contact</Link>.
          </p>
        </div>
      </section>
    </div>
  )
}
