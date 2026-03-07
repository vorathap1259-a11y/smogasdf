# Deployment Guide

This application is a **Full-Stack Node.js Application** (Express + Vite). It cannot be deployed as a static site (like on Vercel/Netlify) without configuration changes because it relies on a custom server (`server.ts`) for the contact form functionality.

## Recommended Hosting: Render / Railway / Heroku

We recommend using a platform that supports Node.js applications out of the box, such as **Render** or **Railway**.

### Steps to Deploy:

1.  **Get the Code**: Download this project or push it to a new GitHub repository.
2.  **Create a Web Service**:
    *   Sign up for [Render](https://render.com) or [Railway](https://railway.app).
    *   Create a new "Web Service" and connect your repository.
3.  **Configure Settings**:
    *   **Build Command**: `npm install && npm run build`
    *   **Start Command**: `npm start`
4.  **Set Environment Variables**:
    In your hosting dashboard, add the following environment variables:
    *   `NODE_ENV`: `production`
    *   `SMTP_HOST`: Your SMTP server (e.g., `smtp.gmail.com`)
    *   `SMTP_USER`: Your email address
    *   `SMTP_PASS`: Your email app password
    *   `SMTP_PORT`: `587` (or your provider's port)
    *   `SMTP_SECURE`: `false` (or `true` depending on provider)
5.  **Connect Your Domain**:
    *   Once deployed, go to the "Settings" or "Custom Domains" section in your hosting dashboard.
    *   Follow the instructions to add your custom domain (e.g., `www.yourdomain.com`).

### Important Note on PORT

Most hosting providers automatically set a `PORT` environment variable. You may need to update `server.ts` to respect this variable:

Change:
```typescript
const PORT = 3000;
```
To:
```typescript
const PORT = Number(process.env.PORT) || 3000;
```

(Note: Do not make this change in the AI Studio preview environment as it may break the preview).
