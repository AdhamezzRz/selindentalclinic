const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'data', 'bookings.ndjson');

let transporter = null;
function getTransporter(mail) {
  if (!mail.host || !mail.user || !mail.pass || !mail.to) return null;
  if (!transporter) {
    const nodemailer = require('nodemailer');
    transporter = nodemailer.createTransport({
      host: mail.host,
      port: mail.port,
      secure: mail.secure,
      auth: { user: mail.user, pass: mail.pass },
    });
  }
  return transporter;
}

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

async function saveBooking(booking, config) {
  const record = { ...booking, receivedAt: new Date().toISOString() };
  await fs.promises.mkdir(path.dirname(FILE), { recursive: true });
  await fs.promises.appendFile(FILE, JSON.stringify(record) + '\n', 'utf8');

  const tx = getTransporter(config.mail);
  if (tx) {
    const rows = Object.entries(record)
      .map(([k, v]) => `<tr><td style="padding:6px 12px;color:#9A948A">${esc(k)}</td><td style="padding:6px 12px">${esc(Array.isArray(v) ? v.join(', ') : v)}</td></tr>`)
      .join('');
    try {
      await tx.sendMail({
        from: config.mail.from || config.mail.user,
        to: config.mail.to,
        replyTo: booking.email || undefined,
        subject: `New booking request — ${booking.name}`,
        text: Object.entries(record).map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(', ') : v}`).join('\n'),
        html: `<div style="font-family:Arial,sans-serif;background:#F5F1EB;padding:24px"><h2 style="color:#0F1520">SÉLIN — New booking request</h2><table style="background:#fff;border-collapse:collapse">${rows}</table></div>`,
      });
    } catch (e) {
      // The booking is already saved; log mail errors without failing the request.
      console.error('Booking e-mail failed:', e.message);
    }
  }
  return record;
}

module.exports = { saveBooking };
