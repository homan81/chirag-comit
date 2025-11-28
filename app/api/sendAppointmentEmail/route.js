"use server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    console.log("EMAIL_USER =>", process.env.EMAIL_USER);
    console.log("ADMIN_EMAIL =>", process.env.ADMIN_EMAIL);

    const body = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: { rejectUnauthorized: false }
    });

    // ⭐ DETECT WHICH FORM
    if (body.type === "contact") {
      const { name, email, company, phone } = body;

      // Email to admin
      await transporter.sendMail({
        from: `"Contact Form" <${process.env.EMAIL_USER}>`,
        to: process.env.ADMIN_EMAIL,
        subject: "New Contact Form Submission",
        text: `
          New Contact Submission:

          Name: ${name}
          Email: ${email}
          Company: ${company}
          Phone: ${phone}
        `,
      });

      // ⭐ Auto-reply email to user
      await transporter.sendMail({
        from: `"LeapBridge Consulting" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Thank you for contacting LeapBridge Consulting",
        text: `
Hello ${name},

Thank you for reaching out to LeapBridge Consulting.

We have received your message:

Company: ${company}
Phone: ${phone}

Our team will get back to you shortly.

        `,
      });

      return new Response(JSON.stringify({ success: true }), { status: 200 });
    }

    // ⭐ FIRST FORM (Appointment Form)
    const { name, email, mobile, company, date, time } = body;

    await transporter.sendMail({
      from: `"Appointment" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Appointment Booking Received",
      text: `
A new appointment has been booked:

Name: ${name}
Email: ${email}
Mobile: ${mobile}
Company: ${company}
Date: ${date}
Time: ${time}
      `,
    });

    await transporter.sendMail({
      from: `"LeapBridge Consulting" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Appointment Request Has Been Received",
      text: `
Thank you for booking an appointment.

Date: ${date}
Time: ${time}
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500 }
    );
  }
}
