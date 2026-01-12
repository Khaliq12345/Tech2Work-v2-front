// // server/api/contact.post.ts

import nodemailer from "nodemailer";

function generateEmailHtml(
  name: string,
  email: string,
  message: string,
): string {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Tech2Work - Email</title>
</head>
<body style="margin: 0; padding: 0; width: 100%; background-color: #f9fafb; font-family: 'Segoe UI', Arial, Helvetica, sans-serif;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f9fafb;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <table role="presentation" cellpadding="0" cellspacing="0" width="650" style="background-color: #ffffff; border-radius: 16px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb;">

                    <!-- HEADER -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); padding: 50px 20px; text-align: center; border-radius: 16px 16px 0 0;">
                            <h1 style="color: #ffffff; font-size: 52px; font-weight: 800; margin: 0; letter-spacing: -1px;">Tech2Work</h1>
                        </td>
                    </tr>

                    <!-- LIGNE DE SÉPARATION -->
                    <tr>
                        <td style="background-color: #ffffff; padding: 0 40px;">
                            <div style="height: 3px; background: linear-gradient(90deg, #1f2937, #374151); margin: 30px 0; border-radius: 2px;"></div>
                        </td>
                    </tr>

                    <!-- CONTENU -->
                    <tr>
                        <td style="padding: 40px 50px; background-color: #ffffff;">

                            <p style="color: #111827; font-size: 17px; line-height: 1.6; margin: 0 0 12px 0; font-weight: 600;">
                                <strong>Name:</strong> <span style="color: #374151; font-weight: normal;">${escapeHtml(name)}</span>
                            </p>

                            <p style="color: #111827; font-size: 17px; line-height: 1.6; margin: 0 0 30px 0; font-weight: 600;">
                                <strong>Email:</strong> <span style="color: #374151; font-weight: normal;">${escapeHtml(email)}</span>
                            </p>

                            <div style="background: linear-gradient(to right, #f9fafb 0%, #ffffff 100%); border-left: 5px solid #6b7280; padding: 25px; margin: 25px 0; border-radius: 8px;">
                                <p style="color: #111827; font-size: 16px; line-height: 1.7; margin: 0; font-weight: 400;">
                                    ${escapeHtml(message).replace(/\n/g, "<br>")}
                                </p>
                            </div>

                            <p style="color: #6b7280; font-size: 16px; line-height: 1.6; margin: 40px 0 0 0; padding-top: 30px; border-top: 1px dashed #e5e7eb;">
                                Cordialement,<br/>
                                <strong style="color: #111827; font-size: 18px;">L'équipe Tech2Work</strong>
                            </p>
                        </td>
                    </tr>

                    <!-- FOOTER -->
                    <tr>
                        <td style="background: linear-gradient(to bottom, #374151 0%, #1f2937 100%); padding: 25px; text-align: center; border-radius: 0 0 16px 16px;">
                            <p style="color: #d1d5db; font-size: 14px; margin: 0; font-weight: 500;">
                                © 2024 Tech2Work. Tous droits réservés.
                            </p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
}

// Fonction simple d’échappement HTML pour éviter injection XSS dans l’email
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default defineEventHandler(async (event) => {
  // Lis les données envoyées depuis le frontend
  const body = await readBody(event);
  const config = useRuntimeConfig();
  const { email, name, message } = body;

  // Crée le transporteur SMTP (configuration depuis .env)
  const transporter = nodemailer.createTransport({
    host: config.smtpServer,
    port: Number(config.smtpPort),
    secure: false, // true si SSL (port 465)
    auth: {
      user: config.smtpUser,
      pass: config.smtpPassword,
    },
  });

  try {
    // Envoie l’e-mail
    const info = await transporter.sendMail({
      from: config.smtpUser, // adresse d’envoi
      to: email,
      subject: "New contact from client",
      text: message,
      html: generateEmailHtml(name, email, message),
    });

    console.log("email sent");
    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (err: any) {
    console.error(err);
    return {
      success: false,
      error: err.message,
    };
  }
});
