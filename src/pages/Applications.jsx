import PageHeader from '../components/PageHeader'
import { APPLICATIONS } from '../data/content'
import './pages.css'

export default function Applications() {
  return (
    <div>
      <PageHeader
        eyebrow="Applications"
        title="Suited to water-cooled HVAC and process systems where scale management is required."
      />

      <section className="section">
        <div className="container">
          <div className="rowlist">
            {APPLICATIONS.map(([num, title, desc, meta]) => (
              <div className="rowitem" key={num}>
                <span className="rowitem__num">{num}</span>
                <span className="rowitem__title">{title}</span>
                <span className="rowitem__desc">{desc}</span>
                <span className="rowitem__meta">{meta}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
