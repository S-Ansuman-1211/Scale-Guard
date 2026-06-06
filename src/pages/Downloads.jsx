import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { DOWNLOADS } from '../data/content'
import './pages.css'

export default function Downloads() {
  return (
    <div>
      <PageHeader
        eyebrow="Downloads"
        title="Documentation library for engineers and procurement teams."
      />

      <section className="section">
        <div className="container">
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
