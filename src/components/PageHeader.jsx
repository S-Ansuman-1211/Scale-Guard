import './PageHeader.css'

export default function PageHeader({ eyebrow, title, lead, children }) {
  return (
    <section className="page-header section--paper">
      <div className="container">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="display page-header__title fade-up">{title}</h1>
        {lead && <p className="lead page-header__lead">{lead}</p>}
        {children}
      </div>
      <div className="container"><hr className="rule page-header__rule" /></div>
    </section>
  )
}
