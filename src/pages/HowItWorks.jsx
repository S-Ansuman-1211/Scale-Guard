import PageHeader from '../components/PageHeader'
import Figure from '../components/Figure'
import { IMG } from '../data/media'
import { PROCESS_STAGES, PROCESS_STEPS } from '../data/content'
import './pages.css'

export default function HowItWorks() {
  return (
    <div>
      <PageHeader
        eyebrow="How It Works"
        title="A two-stage passive process based on nano-ion adsorption and micro-turbulence."
        lead="ScaleGuard conditions water inline to reduce the tendency of scale-forming minerals — primarily calcium and magnesium carbonates — to adhere to surfaces."
      />

      {/* Two stages */}
      <section className="section">
        <div className="container">
          <div className="stage-grid">
            {PROCESS_STAGES.map((s) => (
              <div className="stage" key={s.num}>
                <span className="stage__num">{s.num}</span>
                <h3 className="stage__title">{s.title}</h3>
                <p className="stage__body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process summary */}
      <section className="section--paper section">
        <div className="container">
          <p className="eyebrow">Process Summary</p>
          <h2 className="h-section sec-head">From hard water in, to conditioned water out.</h2>
          <div className="steps">
            {PROCESS_STEPS.map(([num, body]) => (
              <div className="step" key={num}>
                <span className="step__num">{num}</span>
                <p className="step__body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The science (for consultants) */}
      <section className="section">
        <div className="container split split--center">
          <div className="stack">
            <div>
              <p className="eyebrow">The Science Behind ScaleGuard</p>
              <h2 className="h-section">Crystal nucleation within the flowing water stream.</h2>
            </div>
            <p className="muted">
              ScaleGuard promotes crystal nucleation within the flowing water stream, encouraging
              hardness minerals to form microscopic suspended particles rather than adhering to
              condenser tubes, chillers, and heat exchangers.
            </p>
            <p className="muted">
              The result is a <strong>micro/nano-scale crystal conditioning</strong> effect — an
              advanced physical water conditioning approach that keeps heat transfer surfaces
              cleaner without chemical dosing.
            </p>
          </div>
          <Figure
            src={IMG.diagram}
            alt="Micro/nano-scale crystal conditioning principle"
            ratio="1 / 1"
            caption="Conditioning influences mineral behaviour at the micro/nano scale within the flowing stream."
          />
        </div>
      </section>

      {/* Why scale still forms + installation */}
      <section className="section--paper section">
        <div className="container split">
          <div>
            <p className="eyebrow">Why Scale Still Forms In Treated Water</p>
            <p className="muted">
              Even RO or softened water can experience scaling due to temperature effects, local
              surface conditions, and flow dynamics. ScaleGuard is designed to address these
              practical challenges at the point of use.
            </p>
          </div>
          <div>
            <p className="eyebrow">Installation</p>
            <p className="muted">
              Inline flanged installation on condenser water lines. Minimal pressure drop. No system
              shutdown required in most cases. Available for pipe sizes DN25 to DN600+.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
