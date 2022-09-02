import express from "express";
import mongoose from "mongoose";
import commentsRouter from "./routers/commentsRouter.js";
import postsRouter from "./routers/postsRouter.js";
import multer from "multer";
import cors from "cors";
import fs from "fs";
import authRouter from "./routers/authRouter.js";
import jobsRouter from "./routers/jobRouter.js";
import certificatesRouter from "./routers/certificatesRouter.js";
import helpRouter from "./routers/helpRoutes.js";

const PORT = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL;

const app = express();

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    if (!fs.existsSync("uploads")) {
      fs.mkdirSync("uploads");
    }
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(express.json());
app.use(cors());

app.use("/api", postsRouter);
app.use("/api", commentsRouter);
app.use("/api", jobsRouter);
app.use("/api", helpRouter);
app.use("/api", certificatesRouter);
app.use("/auth", authRouter);
app.use("/uploads", express.static("uploads"));

app.post("/upload", upload.single("image"), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

mongoose
  .connect(DATABASE_URL)
  .then(() => console.log("Database connection OK!"))
  .catch((err) => console.error(err));

app.listen(PORT, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log(`SERVER START SUCCESS ON PORT ${PORT}!`);
});
