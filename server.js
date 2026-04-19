import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
const smtpSecure = process.env.SMTP_SECURE === 'true';
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const DEFAULT_EMAIL_TO = 'wazirishaban20@gmail.com';
const emailTo = process.env.EMAIL_TO || smtpUser || DEFAULT_EMAIL_TO;
const emailFrom = process.env.EMAIL_FROM || smtpUser || `no-reply@${process.env.EMAIL_DOMAIN || 'portfolio.com'}`;

const canSendEmail = Boolean(smtpHost && smtpPort && smtpUser && smtpPass && emailTo && emailFrom);
let mailTransport;

if (canSendEmail) {
  mailTransport = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  mailTransport.verify()
    .then(() => console.log('SMTP server is ready to send email'))
    .catch((error) => console.warn('SMTP configuration issue:', error));
} else {
  console.warn('SMTP is not configured. Contact form will save messages locally only.');
}

const DB_FILE = path.join(__dirname, 'messages.json');

// Initialize messages file if it doesn't exist
if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify([]));
}

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const newMessage = {
    id: Date.now(),
    name,
    email,
    subject,
    message,
    date: new Date().toISOString(),
  };

  try {
    const data = JSON.parse(fs.readFileSync(DB_FILE));
    data.push(newMessage);
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));

    if (canSendEmail && mailTransport) {
      try {
        await mailTransport.sendMail({
          from: emailFrom,
          to: emailTo,
          subject: `New message from ${name}: ${subject}`,
          text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
          html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br />')}</p>`,
        });

        console.log('New message received and emailed:', newMessage);
        res.status(201).json({ message: 'Message sent successfully. I will review it and reply soon.' });
        return;
      } catch (emailError) {
        console.error('Email send failed:', emailError);
        res.status(201).json({
          message: 'Message saved locally, but email delivery failed. Please check your SMTP configuration.',
        });
        return;
      }
    }

    console.log('New message received:', newMessage);
    res.status(201).json({ message: 'Message saved locally. Email delivery is not configured yet.' });
  } catch (error) {
    console.error('Error processing message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/messages', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(DB_FILE));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});