import PageHeader from '../components/PageHeader'
import { CONSULTANT_BLOCKS, KEY_PARAMETERS } from '../data/content'
import './pages.css'

export default function Consultants() {
  return (
    <div>
      <PageHeader
        eyebrow="Consultant & Tender Support"
        title="Specifications, sizing, and CPWD/PWD documentation — handled."
        lead="Detailed technical specifications, sizing assistance, CPWD/PWD documentation support, installation guidelines, and on-site coordination provided for consultants, contractors, and government officers."
      />

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
    </div>
  )
}
