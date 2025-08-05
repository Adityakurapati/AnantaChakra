import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Rate limiting setup
const rateLimit = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5; // Max requests per window

export async function POST(request: NextRequest) {
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';

  // Rate limiting check
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW;

  const requests = (rateLimit.get(ip) || []).filter((timestamp: number) => timestamp > windowStart);

  if (requests.length >= RATE_LIMIT_MAX) {
    return NextResponse.json(
      { success: false, error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  rateLimit.set(ip, [...requests, now]);

  try {
    const formData = await request.formData();

    // Validate and extract form data
    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const subject = formData.get("subject")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    // Input validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.in",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_EMAIL || "support@anantachakra.tech",
        pass: process.env.ZOHO_APP_PASSWORD,
      },
    });

    // Verify connection configuration
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error("SMTP verify error:", verifyError);
      return NextResponse.json(
        { success: false, error: "Email service configuration error" },
        { status: 500 }
      );
    }

    // Current date and time for the email
    const currentDate = new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Kolkata'
    });

    // Send emails in parallel
    await Promise.all([
      // Email to your team (modern table format)
      transporter.sendMail({
        from: `"Website Contact" <${process.env.ZOHO_EMAIL || "support@anantachakra.tech"}>`,
        to: "anantachakra25@gmail.com",
        subject: `📩 New Contact Submission: ${subject}`,
        html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 700px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #7c3aed 0%, #9d50bb 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .header h1 { color: white; margin: 0; font-size: 24px; }
            .content { background: #ffffff; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
            .table { width: 100%; border-collapse: collapse; margin: 25px 0; }
            .table th { background-color: #f8f9fa; text-align: left; padding: 12px 15px; font-weight: 600; color: #495057; }
            .table td { padding: 12px 15px; border-bottom: 1px solid #e9ecef; }
            .table tr:last-child td { border-bottom: none; }
            .table tr:hover td { background-color: #f8f9fa; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef; color: #6c757d; font-size: 14px; text-align: center; }
            .highlight { color: #7c3aed; font-weight: 600; }
            .ip-address { background: #f1f3f5; padding: 2px 6px; border-radius: 4px; font-family: monospace; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <p>You've received a new contact form submission on <span class="highlight">${currentDate}</span>:</p>

              <table class="table">
                <tr>
                  <th>Field</th>
                  <th>Details</th>
                </tr>
                <tr>
                  <td><strong>Name</strong></td>
                  <td>${name}</td>
                </tr>
                <tr>
                  <td><strong>Email</strong></td>
                  <td><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr>
                  <td><strong>Subject</strong></td>
                  <td>${subject}</td>
                </tr>
                <tr>
                  <td><strong>Message</strong></td>
                  <td>${message.replace(/\n/g, '<br>')}</td>
                </tr>
                <tr>
                  <td><strong>Submitted from IP</strong></td>
                  <td><span class="ip-address">${ip}</span></td>
                </tr>
              </table>

              <div class="footer">
                <p>This message was sent from your website contact form.</p>
                <p>© ${new Date().getFullYear()} AnantaChakra. All rights reserved.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
        `,
      }),

      // Auto-response to user (premium brand experience)
      transporter.sendMail({
        from: `"AnantaChakra Support" <${process.env.ZOHO_EMAIL || "support@anantachakra.tech"}>`,
        to: email,
        subject: `Thank you for contacting AnantaChakra, ${name}!`,
        html: `
          <!DOCTYPE html>
            <html>
            <head>
              <meta charset="UTF-8" />
              <style>
                body {
                  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                  margin: 0;
                  padding: 0;
                  background: #f0f0ff;
                }

                .container {
                  max-width: 600px;
                  margin: 30px auto;
                  background: #fff;
                  border-radius: 12px;
                  overflow: hidden;
                  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
                }

                .header {
                  background: linear-gradient(to right, #6366f1, #8b5cf6);
                  color: white;
                  padding: 20px 0;
                  text-align: center;
                }

                .header h1 {
                  margin: 0;
                  font-size: 28px;
                  font-weight: 700;
                }

                .header p {
                  margin-top: 5px;
                  font-style: italic;
                  font-size: 14px;
                }

                .content {
                  padding: 30px;
                  color: #111827;
                }

                .content h2 {
                  font-size: 20px;
                  margin-bottom: 10px;
                }

                .content p {
                  font-size: 15px;
                  line-height: 1.6;
                  margin-bottom: 20px;
                }

                .message-summary {
                  background: #f9fafb;
                  padding: 15px 20px;
                  border-left: 4px solid #6366f1;
                  border-radius: 8px;
                  margin-bottom: 20px;
                }

                .message-summary p {
                  margin: 6px 0;
                }

                .cta {
                  text-align: center;
                  margin: 30px 0;
                }

                .cta a {
                  background: linear-gradient(to right, #6366f1, #8b5cf6);
                  color: white;
                  padding: 12px 30px;
                  border-radius: 25px;
                  font-weight: 600;
                  text-decoration: none;
                }

                .footer {
                  text-align: center;
                  font-size: 13px;
                  color: #6b7280;
                  padding: 20px;
                  background: #f9fafb;
                }

                .footer p {
                  margin: 4px 0;
                }

                .divider {
                  border-top: 1px solid #e5e7eb;
                  margin: 30px 0;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>AnantaChakra</h1>
                  <p>Let's Evolve & Revolve</p>
                </div>

                <div class="content">
                  <h2>Thank you for reaching out, ${name}!</h2>
                  <p>We've received your message and appreciate you taking the time to contact us. Our team will review your inquiry and get back to you within 24 hours.</p>

                  <div class="message-summary">
                    <p><strong>Subject:</strong> ${subject || 'Not specified'}</p>
                    <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
                  </div>

                  <p>In the meantime, feel free to explore our services and learn more about how we can help your business evolve and revolve in the digital landscape.</p>

                  <div class="cta">
                    <a href="https://anantachakra.tech" target="_blank">Visit Our Website</a>
                  </div>

                  <div class="divider"></div>

                  <div class="footer">
                    <p><strong>AnantaChakra</strong></p>
                    <p>Email: support@anantachakra.tech</p>
                    <p>Location: India</p>
                    <p><em>This is an automated response. Please do not reply to this email.</em></p>
                  </div>
                </div>
              </div>
            </body>
            </html>
          `,
        }),
    ]);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully"
    });

  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email",
        details: process.env.NODE_ENV === "development" ? error.message : undefined
      },
      { status: 500 }
    );
  }
}