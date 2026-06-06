import PageHeader from '../components/PageHeader'
import { BENEFIT_GROUPS, COMPARISON } from '../data/content'
import './pages.css'

export default function Benefits() {
  return (
    <div>
      <PageHeader
        eyebrow="Benefits"
        title="Practical advantages observed in operating installations."
      />

      {/* Three benefit columns */}
      <section className="section">
        <div className="container grid grid-3">
          {BENEFIT_GROUPS.map((g) => (
            <div key={g.title}>
              <h3 className="block__title">{g.title}</h3>
              <ul className="ticklist">
                {g.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="section--paper section">
        <div className="container">
          <p className="eyebrow">Comparison</p>
          <h2 className="h-section sec-head">Chemical Treatment vs ScaleGuard</h2>
          <div className="tablewrap">
            <table className="table">
              <thead>
                <tr>
                  {COMPARISON.head.map((h, i) => <th key={h} style={{ color: i === 2 ? 'var(--steel)' : undefined }}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {COMPARISON.rows.map((row) => (
                  <tr key={row[0]}>
                    <td>{row[0]}</td>
                    <td className="neg">{row[1]}</td>
                    <td className="pos">{row[2]}</td>
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
