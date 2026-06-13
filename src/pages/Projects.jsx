import PageHeader from '../components/PageHeader'
import { CASE_STUDY, INSTALLATION_GROUPS, PROJECT_SUMMARY, RECENT_INSTALLATIONS } from '../data/content'
import './pages.css'

export default function Projects() {
  return (
    <div>
      <PageHeader
        eyebrow="Projects"
        title="Field-validated across government, healthcare, education and industry."
      />

      {/* Featured case study table */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Featured Case Study</p>
          <h2 className="h-section sec-head">IIT Jodhpur — 2,400 TR Chiller Plant</h2>
          <div className="tablewrap">
            <table className="table">
              <tbody>
                {CASE_STUDY.rows.map(([k, v]) => (
                  <tr key={k}>
                    <td style={{ width: '40%', color: 'var(--slate)' }}>{k}</td>
                    <td className="pos">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

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

      {/* Major installations */}
      <section className="section--paper section">
        <div className="container">
          <p className="eyebrow">Major Installations</p>
          <div className="listcards" style={{ marginTop: 24 }}>
            {INSTALLATION_GROUPS.map((g) => (
              <div className="listcard" key={g.title}>
                <h3 className="listcard__title">{g.title}</h3>
                <ul className="dashlist">
                  {g.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project summary table */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Project Summary</p>
          <div className="tablewrap" style={{ marginTop: 20 }}>
            <table className="table">
              <thead>
                <tr>{PROJECT_SUMMARY.head.map((h) => <th key={h}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {PROJECT_SUMMARY.rows.map((row) => (
                  <tr key={row[0]}>
                    <td>{row[0]}</td>
                    <td className="pos">{row[1]}</td>
                    <td className="neg">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}
