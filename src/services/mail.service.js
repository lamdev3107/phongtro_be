import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.MAILER_HOST,
    pass: process.env.MAILER_PASSWORD,
  },
});

export default function sendEmail({ to, subject, text = "", html }) {
  try {
    const msg = transporter.sendMail({
      from: {
        name: "PhongTro123",
        address: process.env.MAILER_HOST,
      }, // sender address
      to: to, // list of receivers
      subject: subject, // Subject line
      text: text, // plain text body
      html: html, // html body
    });
  } catch (error) {
    console.log(error);
  }
}
