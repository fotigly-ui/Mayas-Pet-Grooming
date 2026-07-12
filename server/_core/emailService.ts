import { TRPCError } from "@trpc/server";
import { ENV } from "./env";

export type EmailPayload = {
  to: string;
  subject: string;
  text: string;
  html?: string;
};

/**
 * Send email via Manus built-in email service
 * Uses the Forge API to send emails
 */
export async function sendEmail(payload: EmailPayload): Promise<boolean> {
  if (!ENV.forgeApiUrl || !ENV.forgeApiKey) {
    console.warn("[Email] Forge API credentials not configured");
    return false;
  }

  try {
    const response = await fetch(`${ENV.forgeApiUrl}/email/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ENV.forgeApiKey}`,
      },
      body: JSON.stringify({
        to: payload.to,
        subject: payload.subject,
        text: payload.text,
        html: payload.html || payload.text,
      }),
    });

    if (!response.ok) {
      const error = await response.text().catch(() => "Unknown error");
      console.error(`[Email] Failed to send email (${response.status}):`, error);
      return false;
    }

    console.log(`[Email] Successfully sent email to ${payload.to}`);
    return true;
  } catch (error) {
    console.error("[Email] Error sending email:", error);
    return false;
  }
}

/**
 * Send contact form inquiry email to owner
 */
export async function sendContactFormEmail(
  ownerEmail: string,
  name: string,
  email: string,
  phone: string,
  dogName: string,
  message: string
): Promise<boolean> {
  const subject = `New Grooming Inquiry from ${name}`;
  const text = `
New Grooming Inquiry:

Name: ${name}
Email: ${email}
Phone: ${phone}
Dog Name: ${dogName || "Not provided"}

Message:
${message}

---
This is an automated message from your Maya's Pet Grooming website.
  `;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #FF7A3D;">New Grooming Inquiry</h2>
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
        <p><strong>Dog Name:</strong> ${dogName || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-left: 3px solid #FF7A3D;">${message}</p>
      </div>
      <p style="color: #999; font-size: 12px; margin-top: 20px;">
        This is an automated message from your Maya's Pet Grooming website.
      </p>
    </div>
  `;

  return sendEmail({
    to: ownerEmail,
    subject,
    text,
    html,
  });
}
