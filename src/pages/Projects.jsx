import PageHeader from '../components/PageHeader'
import { RECENT_INSTALLATIONS } from '../data/content'
import './pages.css'

export default function Projects() {
  return (
    <div>
      <PageHeader
        eyebrow="Projects"
        title="Field-validated across government, healthcare, education and industry."
      />

      {/* Recent major installations */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Recent Major Installations</p>
          <h2 className="h-section sec-head">ScaleGuard-treated AC plants across India</h2>
          <div className="project-gallery">
            {RECENT_INSTALLATIONS.map((p) => (
              <figure className="project-card" key={p.name}>
                <div className="project-card__frame">
                  <img src={p.img} alt={p.name} loading="lazy" />
                </div>
                <figcaption className="project-card__body">
                  <h3 className="project-card__title">{p.name}</h3>
                  <span className="project-card__capacity">{p.capacity}</span>
                  <span className="project-card__pmc">{p.pmc}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
