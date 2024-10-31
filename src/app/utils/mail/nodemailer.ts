import nodemailer from "nodemailer";

console.log({
  email: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
  pass: process.env.NEXT_PUBLIC_NODEMAILER_PASSWORD,
});

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
    pass: process.env.NEXT_PUBLIC_NODEMAILER_PASSWORD,
  },
});

export default transporter;
