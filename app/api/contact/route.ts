import { NextResponse } from "next/server";
let dotenv = require("dotenv").config();
let nodemailer = require("nodemailer");

export async function POST(request: Request) {
  const password = process.env.password;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "myaibbot@gmail.com",
      pass: password,
    },
    secure: true,
  });
  const res = await request.json();
  const mailData = {
    from: "myaibbot@gmail.com",
    to: "info@aibusinessmen.com",
    subject: `Message From ${res.firstName}`,
    text: res.message,
    html: `<div>
    <div>From: ${res.email}</div>
    <div>Subject: ${res.subject}</div>
    <h3>Message:</h3>
    <div>${res.message}</div>
    </div>`,
  };
  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err: any, info: any) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.error(info);
        resolve(info);
      }
    });
  });
  //   res.status(200);
  return NextResponse.json({ res });
}
