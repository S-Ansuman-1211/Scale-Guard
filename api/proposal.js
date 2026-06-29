import nodemailer from 'nodemailer'

const TO_ADDRESS = 'info@scaleguard.in'

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { fullName, organisation, email, phone, systemType, details } = req.body || {}

  // Minimal server-side validation (mirrors the required fields in the form).
  if (!fullName || !email) {
    return res.status(400).json({ error: 'Full name and email are required.' })
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_FROM,
  } = process.env

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error('SMTP environment variables are not configured.')
    return res.status(500).json({ error: 'Email service is not configured.' })
  }

  const port = Number(SMTP_PORT) || 587

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465, // true for 465, false for 587/STARTTLS
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })

  const rows = [
    ['Full Name', fullName],
    ['Organisation', organisation],
    ['Email', email],
    ['Phone / WhatsApp', phone],
    ['System Type', systemType],
    ['Project Details', details],
  ]

  const html = `
    <h2>New Technical Proposal Request</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="font-weight:600;vertical-align:top">${label}</td><td>${escapeHtml(
              value || '—'
            )}</td></tr>`
        )
        .join('')}
    </table>
  `

  const text = rows.map(([label, value]) => `${label}: ${value || '—'}`).join('\n')

  try {
    await transporter.sendMail({
      from: SMTP_FROM || SMTP_USER,
      to: TO_ADDRESS,
      replyTo: email,
      subject: `Proposal request — ${fullName}${organisation ? ` (${organisation})` : ''}`,
      text,
      html,
    })
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Failed to send proposal email:', err)
    return res.status(502).json({ error: 'Failed to send email.' })
  }
}
