import express from "express";
import { prisma } from "./prisma";

const app = express();

app.use(express.json());

app.post("/feedbacks", async (req, res) => {
  console.log(req.body);
  await prisma.feedback.create({
    data: {
      ...req.body,
    },
  });
  return res.status(201);
});

app.listen(3333, () => {
  console.log("Server started on port 3333");
});
