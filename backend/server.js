const express = require("express");
const mysql = require("mysql2");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const crypto = require("crypto");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) throw err;
  console.log("Connecté à MySQL");
});

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// 📩 Email de confirmation
const confirmationEmail = (confirmUrl) => ({
  from: `"GCB" <${process.env.EMAIL_USER}>`,
  subject: "Veuillez confirmer votre inscription",
  html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; background: #f4f4f4;">
      <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        
        <!-- En-tête -->
        <div style="background: #040404; padding: 20px; text-align: center;">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaf4v2AoRE5ucORHTN1ZXyAGPthkfC3uJ6aA&s" alt="Logo Entreprise" style="max-height: 60px; margin-bottom: 10px;">
          <h1 style="margin: 0; color: #fbbb33; font-size: 24px;">Confirmez votre inscription</h1>
        </div>
        
        <!-- Corps -->
        <div style="padding: 20px; color: #333333;">
          <p style="font-size: 16px;">Bonjour 👋,</p>
          <p style="font-size: 16px;">
            Merci de vous être inscrit à la newsletter de <b style="color:#f35c2c;">GCB</b>.  
            Veuillez confirmer votre inscription en cliquant sur le bouton ci-dessous :
          </p>
          
          <div style="margin: 20px 0; text-align: center;">
            <a href="${confirmUrl}" style="background: #fbbb33; color: #040404; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold; display: inline-block;">
              Confirmer mon inscription
            </a>
          </div>
          
          <p style="font-size: 14px; color: #777;">Si vous n’êtes pas à l’origine de cette demande, ignorez simplement cet e-mail.</p>
        </div>
        
        <!-- Pied de page -->
        <div style="background: #f0f0f0; padding: 15px; text-align: center; font-size: 12px; color: #777;">
          <p>&copy; ${new Date().getFullYear()}  GCB. Tous droits réservés.</p>
        </div>
      </div>
    </div>
  `
});

// 📩 Email de bienvenue / remerciement
const thankYouEmail = (email) => ({
  from: `"GCB" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: "🎉 Merci pour votre inscription !",
  html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; background: #f4f4f4;">
      <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        
        <!-- En-tête -->
        <div style="background: #040404; padding: 20px; text-align: center;">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaf4v2AoRE5ucORHTN1ZXyAGPthkfC3uJ6aA&s" alt="Logo Entreprise" style="max-height: 60px; margin-bottom: 10px;">
          <h1 style="margin: 0; color: #fbbb33; font-size: 24px;">Bienvenue parmi nous 🎉</h1>
        </div>
        
        <!-- Corps -->
        <div style="padding: 20px; color: #333333;">
          <p style="font-size: 16px;">Bonjour,</p>
          <p style="font-size: 16px;">
            Nous sommes ravis de vous compter parmi la famille de la newsletter de <b style="color:#f35c2c;">GCB</b> !  
            Vous recevrez désormais les dernières actualités, projets et conseils directement dans votre boîte mail.
          </p>
          
          <div style="margin: 20px 0; text-align: center;">
            <a href="https://www.gcb.dz/" style="background: #fbbb33; color: #040404; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold; display: inline-block;">
              Visitez notre site
            </a>
          </div>
          
          <p style="margin-top: 20px; font-size: 16px;">Restez connectés,</p>
          <p style="font-weight: bold; font-size: 16px;">L’équipe de GCB</p>
        </div>
        
        <!-- Pied de page -->
        <div style="background: #f0f0f0; padding: 15px; text-align: center; font-size: 12px; color: #777;">
          <p>Vous recevez cet e-mail car vous avez confirmé votre inscription.</p>
        </div>
      </div>
    </div>
  `
});

// 📩 Email nouvel article
const newArticleEmail = (title, content, articleUrl) => ({
  from: `"GCB" <${process.env.EMAIL_USER}>`,
  subject: `📰 Nouvel article : ${title}`,
  html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; background: #f4f4f4;">
      <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        
        <!-- En-tête -->
        <div style="background: #040404; padding: 20px; text-align: center;">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaf4v2AoRE5ucORHTN1ZXyAGPthkfC3uJ6aA&s" alt="Logo Entreprise" style="max-height: 60px; margin-bottom: 10px;">
          <h1 style="margin: 0; color: #fbbb33; font-size: 24px;">Dernières nouvelles 📰</h1>
        </div>
        
        <!-- Corps -->
        <div style="padding: 20px; color: #333333;">
          <h2 style="color: #f35c2c;">${title}</h2>
          <p style="font-size: 16px; line-height: 1.6;">${content}</p>
          
          
          <div style="margin: 20px 0; text-align: center;">
            <a href="#" style="background: #fbbb33; color: #040404; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold; display: inline-block;">
              📖 Lire l’article complet
            </a>
          </div>
        </div>
        
        <!-- Pied de page -->
        <div style="background: #f0f0f0; padding: 15px; text-align: center; font-size: 12px; color: #777;">
          <p>Vous recevez cet e-mail car vous êtes abonné à la newsletter de <b>GCB</b>.</p>
        </div>
      </div>
    </div>
  `
});

// === ROUTES ===

// Subscribe endpoint
app.post("/api/subscribe", (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes("@")) {
    return res.status(400).json({ message: "Adresse e-mail invalide" });
  }

  const token = crypto.randomBytes(32).toString("hex");

  const query = "INSERT INTO subscribers (email, token, verified) VALUES (?, ?, 0)";
  db.query(query, [email, token], (err) => {
    if (err) {
      return res.status(400).json({ message: "E-mail déjà abonné" });
    }

    const confirmUrl = `http://localhost:5000/api/confirm?token=${token}`;

    const mailOptions = confirmationEmail(confirmUrl);
    mailOptions.to = email;

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) console.log(err);
      else console.log("E-mail de confirmation envoyé : " + info.response);
    });

    res.json({ message: "Vérifiez votre e-mail pour confirmer votre inscription !" });
  });
});

// Confirm endpoint
// Confirm endpoint
app.get("/api/confirm", (req, res) => {
  const { token } = req.query;
  if (!token) return res.status(400).send("Token invalide");

  const query = "UPDATE subscribers SET verified = 1 WHERE token = ?";
  db.query(query, [token], (err, result) => {
    if (err) return res.status(500).send("Erreur base de données");
    if (result.affectedRows === 0) return res.status(400).send("Token invalide ou expiré");

    // Redirection vers la page frontend
    res.redirect("http://localhost:5173/confirmation-success");
  });
});


// Add news endpoint
app.post("/api/news", (req, res) => {
  const { title, content } = req.body;
  const insertQuery = "INSERT INTO news (title, content) VALUES (?, ?)";
  db.query(insertQuery, [title, content], (err) => {
    if (err) return res.status(500).json(err);

    db.query("SELECT email FROM subscribers WHERE verified = 1", (err, users) => {
      if (err) return res.status(500).json(err);

      users.forEach(user => {
        const mailOptions = newArticleEmail(title, content, null);
        mailOptions.to = user.email;

        transporter.sendMail(mailOptions, (err) => {
          if (err) console.log(err);
          else console.log(`E-mail envoyé à ${user.email}`);
        });
      });

      res.json({ message: "Article ajouté et e-mails envoyés !" });
    });
  });
});

app.get("/api/subscribers", (req, res) => {
  db.query("SELECT id, email, verified FROM subscribers", (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

// ---------- Contact route: save to DB + email admins + autoreply ----------
app.post("/api/contact", (req, res) => {
  const { name, email, subject, recipient, message } = req.body || {};

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Veuillez remplir tous les champs obligatoires." });
  }
  // simple email regex
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Adresse e-mail invalide." });
  }

  // 1) Insert into DB
  const insertQuery = `INSERT INTO contact_messages (name, email, subject, recipient, message) VALUES (?, ?, ?, ?, ?)`;
  db.query(insertQuery, [name, email, subject, recipient || "general", message], (err, result) => {
    if (err) {
      console.error("DB insert error:", err);
      return res.status(500).json({ error: "Erreur serveur (DB)." });
    }

    // 2) Decide target admin email by recipient
    let adminEmail = process.env.COMPANY_EMAIL;
    if (recipient === "direction") adminEmail = process.env.DIR_EMAIL || adminEmail;
    if (recipient === "webmaster") adminEmail = process.env.WEBMASTER_EMAIL || adminEmail;

    // 3) Email to company (admin)
    const adminMail = {
      from: `"GCB" <${process.env.EMAIL_USER}>`,
      to: adminEmail,
      subject: `[Contact form] ${subject} — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color:#333;">
          <h3>Nouveau message de contact</h3>
          <p><strong>Nom:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <p><strong>Destinataire:</strong> ${escapeHtml(recipient || "general")}</p>
          <p><strong>Sujet:</strong> ${escapeHtml(subject)}</p>
          <hr/>
          <p>${nl2br(escapeHtml(message))}</p>
          <p style="font-size:12px;color:#666;margin-top:12px;">ID message: ${result.insertId} — ${new Date().toLocaleString()}</p>
        </div>
      `
    };

    transporter.sendMail(adminMail, (err, info) => {
      if (err) console.error("Error sending admin email:", err);
      else console.log("Admin notification sent:", info.response);
    });

    // 4) Autoreply to user (polite thank you)
    const userReply = {
      from: `"GCB" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Merci — Nous avons bien reçu votre message",
      html: `
        <div style="font-family: Arial, sans-serif; color:#333;">
          <div style="background:#040404;padding:18px;text-align:center;">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaf4v2AoRE5ucORHTN1ZXyAGPthkfC3uJ6aA&s" alt="Logo" style="max-height:48px;display:block;margin:0 auto 8px;">
          </div>
          <div style="padding:20px;background:#fff;border:1px solid #f0f0f0;">
            <h2 style="color:#f35c2c;margin:0 0 12px;">Merci, ${escapeHtml(name)} !</h2>
            <p>Nous avons bien reçu votre message et notre équipe reviendra vers vous sous peu.</p>
            <p><strong>Sujet :</strong> ${escapeHtml(subject)}</p>
            <p style="margin-top:18px;color:#666;font-size:13px;">Cordialement,<br/>L'équipe GCB</p>
          </div>
        </div>
      `
    };

    transporter.sendMail(userReply, (err, info) => {
      if (err) console.error("Error sending user autoreply:", err);
      else console.log("User autoreply sent:", info.response);
    });

    // 5) Respond to frontend
    return res.json({ success: true, message: "Message envoyé. Nous vous recontacterons bientôt." });
  });
});

// ---------- small helpers ----------
function escapeHtml(text) {
  if (!text) return "";
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
function nl2br(text) {
  return (text || "").replace(/\n/g, "<br/>");
}


app.listen(5000, () => console.log("Serveur lancé sur le port 5000"));
