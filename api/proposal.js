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

  const { RESEND_API_KEY, MAIL_FROM } = process.env

  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured.')
    return res.status(500).json({ error: 'Email service is not configured.' })
  }

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
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Must be an address on a domain verified in Resend (e.g. proposals@scaleguard.in).
        // Falls back to Resend's shared test sender, which only delivers to your own account email.
        from: MAIL_FROM || 'onboarding@resend.dev',
        to: [TO_ADDRESS],
        reply_to: email,
        subject: `Proposal request — ${fullName}${organisation ? ` (${organisation})` : ''}`,
        text,
        html,
      }),
    })

    if (!response.ok) {
      const detail = await response.text()
      console.error('Resend API error:', response.status, detail)
      return res.status(502).json({ error: 'Failed to send email.' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Failed to send proposal email:', err)
    return res.status(502).json({ error: 'Failed to send email.' })
  }
}
