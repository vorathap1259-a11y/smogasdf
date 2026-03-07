import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API routes FIRST
  app.post("/api/contact", async (req, res) => {
    const { name, business, location, revenue, goal } = req.body;

    if (!name || !business || !location || !goal) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      // Configure nodemailer transporter
      // For production, you should use real SMTP credentials in .env
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_USER || '"SMOG Agency" <noreply@smog.agency>',
        to: "ysipusovi4@gmail.com, thewiseturtle123@gmail.com",
        subject: `New Strategy Call Request from ${name} (${business})`,
        text: `
          New Strategy Call Request:
          
          Name: ${name}
          Business: ${business}
          Location: ${location}
          Revenue: ${revenue || "Not provided"}
          Goal: ${goal}
        `,
        html: `
          <h2>New Strategy Call Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Business:</strong> ${business}</p>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>Revenue:</strong> ${revenue || "Not provided"}</p>
          <p><strong>Goal:</strong> ${goal}</p>
        `,
      };

      // Only send if credentials are provided, otherwise just log it
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully to ysipusovi4@gmail.com & thewiseturtle123@gmail.com");
      } else {
        console.log("No SMTP credentials provided. Email would have been sent to ysipusovi4@gmail.com & thewiseturtle123@gmail.com with content:", mailOptions.text);
      }

      res.status(200).json({ success: true, message: "Request received" });
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
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
