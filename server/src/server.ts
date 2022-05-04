import express from "express";
import nodemailer from "nodemailer";
import { prisma } from "./prisma";

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "cde5827594f25b",
    pass: "bc9bd738cadbb4",
  },
});

app.post("/feedbacks", async (req, res) => {
  console.log(req.body);
  await prisma.feedback.create({
    data: {
      ...req.body,
    },
  });
  await transport.sendMail({
    from: "matheus8888@gmail.com",
    to: "matheus@uniplac.net",
    subject: "Novo Feedback",
    html: [
      `<p> ${req.body.type}</p>`,
      `<p> ${req.body.comment}</p>`,
      `<p> ${req.body.screenshot}</p>`,
    ].join("\n"),
  });
  return res.status(201).send({ message: "Feedback enviado com sucesso" });
});

app.listen(3333, () => {
  console.log("Server started on port 3333");
});
