# Waziri CV Portfolio

A responsive developer portfolio built with React, Vite, TypeScript, Tailwind CSS, and shadcn/ui.

## Overview

This project showcases a personal portfolio website with sections for:
- Hero
- About
- Experience
- Education
- Projects
- Skills
- Contact form with backend email support

It includes a modern UI, smooth animations, and a responsive layout for desktop and mobile.

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui
- Express + Nodemailer (backend contact form)

## Local Setup

1. Install dependencies

   ```bash
   npm install
   ```

2. Create a `.env` file from `.env.example`

   ```bash
   cp .env.example .env
   ```

3. Update `.env` with your SMTP credentials

4. Start the development server

   ```bash
   npm run dev
   ```

5. Open the app in your browser at `http://localhost:3000`

## Contact Form Email Setup

The contact form is handled by `server.js` and requires SMTP configuration in `.env`:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `EMAIL_TO`
- `EMAIL_FROM`

If SMTP is not configured, messages are still saved locally to `messages.json`.

## Project Structure

```
.
├── public/
├── src/
│   ├── components/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── server.js
├── package.json
├── vite.config.ts
└── README.md
```

## Scripts

- `npm run dev` - start frontend and backend together
- `npm run build` - build production frontend
- `npm run preview` - preview production build
- `npm run lint` - run ESLint

## Deployment

Build the app with `npm run build`, then deploy using your preferred static hosting service and make sure the backend is available for the contact form.

## Contact

Reach out via the contact form or email: `wazirishaban20@gmail.com`

