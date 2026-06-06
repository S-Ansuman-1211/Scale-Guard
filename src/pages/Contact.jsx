import { useSelector, useDispatch } from 'react-redux'
import PageHeader from '../components/PageHeader'
import { CONTACT_INFO } from '../data/content'
import { updateField, submitContactForm, resetForm } from '../store/slices/contactSlice'
import './Contact.css'

export default function Contact() {
  const dispatch = useDispatch()
  const { form, status } = useSelector((s) => s.contact)

  const set = (field) => (e) =>
    dispatch(updateField({ field, value: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(submitContactForm(form))
  }

  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title="Talk to the engineering team."
        lead="Free site assessment, technical proposals, and tender documentation. WhatsApp response typically within ~2 hours."
      />

      <section className="section">
        <div className="container contact">
          {/* Left: contact info */}
          <aside className="contact__info">
            {CONTACT_INFO.map((c) => (
              <div className="contact__item" key={c.label}>
                <span className="contact__label">{c.label}</span>
                {c.href ? (
                  <a
                    className="contact__value contact__value--link"
                    href={c.href}
                    {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {c.value}
                  </a>
                ) : (
                  <span className="contact__value">{c.value}</span>
                )}
              </div>
            ))}
            <hr className="rule" />
            <div className="contact__item">
              <span className="contact__label">Regional Presence</span>
              <span className="contact__value text-slate">
                Operational across North, West, East, South, and Central India with local
                installation and service teams.
              </span>
            </div>
          </aside>

          {/* Right: form or thank-you */}
          <div className="contact__panel">
            {status === 'submitted' ? (
              <div className="contact__thanks">
                <h3 className="contact__thanks-title">Thank you.</h3>
                <p className="muted">A member of the technical team will respond shortly.</p>
                <button className="btn btn--ghost" onClick={() => dispatch(resetForm())}>
                  Submit another request
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__row">
                  <Field label="Full Name" required value={form.fullName} onChange={set('fullName')} />
                  <Field label="Organisation" value={form.organisation} onChange={set('organisation')} />
                </div>
                <div className="contact__row">
                  <Field label="Email" type="email" required value={form.email} onChange={set('email')} />
                  <Field label="Phone / WhatsApp" value={form.phone} onChange={set('phone')} />
                </div>
                <Field
                  label="System Type (TR / Pipe Size / Sector)"
                  value={form.systemType}
                  onChange={set('systemType')}
                />
                <div className="field">
                  <label className="field__label">Project Details</label>
                  <textarea
                    className="field__input"
                    rows={4}
                    value={form.details}
                    onChange={set('details')}
                  />
                </div>
                <button className="btn btn--primary btn--block" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending…' : 'Request Technical Proposal'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

function Field({ label, required, type = 'text', value, onChange }) {
  return (
    <div className="field">
      <label className="field__label">
        {label} {required && <span className="field__req">*</span>}
      </label>
      <input
        className="field__input"
        type={type}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
