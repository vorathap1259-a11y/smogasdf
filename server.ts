import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API routes FIRST
  app.post("/api/contact", async (req, res) => {
    const { name, email, business, location, revenue, goal } = req.body;

    if (!name || !email || !business || !location || !goal) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    console.log(`Received contact form submission from ${email} - attempting to send email...`);

    try {
      // Configure nodemailer transporter
      // For production, you should use real SMTP credentials in .env
      const port = parseInt(process.env.SMTP_PORT || "587");
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: port,
        secure: process.env.SMTP_SECURE === "true" || port === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        connectionTimeout: 10000, // 10 seconds to fail fast
        greetingTimeout: 10000,
        socketTimeout: 10000,
      });

      const mailOptions = {
        from: process.env.SMTP_USER || '"SMOG Agency" <noreply@smog.agency>',
        to: "thewiseturtle123@gmail.com, ysipusovi4@gmail.com",
        subject: `🚨 Viral Strategy Call Request: ${name} (${business})`,
        text: `
          New Strategy Call Request Received!
          
          Name: ${name}
          Email: ${email}
          Business: ${business}
          Location: ${location}
          Revenue: ${revenue || "Not provided"}
          Goal: ${goal}
          
          ------------------------------------------
          This request was submitted via the SMOG Agency website.
        `,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 10px;">
            <h2 style="color: #8b5cf6;">New Strategy Call Request</h2>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Business:</strong> ${business}</p>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Revenue:</strong> ${revenue || "Not provided"}</p>
            <p><strong>Goal:</strong> ${goal}</p>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <p style="font-size: 12px; color: #64748b;">This request was submitted via the SMOG Agency website contact form.</p>
          </div>
        `,
      };

      // Only send if credentials are provided, otherwise log it or return error in prod
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        await transporter.sendMail(mailOptions);
        console.log(`Email successfully sent to thewiseturtle123@gmail.com and ysipusovi4@gmail.com`);
        return res.status(200).json({ success: true, message: "Request received and email sent" });
      } else {
        console.warn("No SMTP credentials provided! Email not sent.", mailOptions.text);
        if (process.env.NODE_ENV === "production" && process.env.RENDER) {
            // Give an explicit error on Render so they know to configure SMTP
            return res.status(500).json({ success: false, error: "SMTP environment variables not configured on Render." });
        }
        return res.status(200).json({ success: true, message: "Request received (mocked, no credentials)" });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send request" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const buildPath = path.join(process.cwd(), 'build');
    app.use(express.static(buildPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(buildPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
