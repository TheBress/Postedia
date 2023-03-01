import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import notificationRoutes from "./routes/notifications.js";
import requestRoutes from "./routes/requests.js";
import bodyParser from "body-parser";

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.set("strictQuery", false);

mongoose
  .connect(DATABASE_URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((e) => {
    console.log(e.message);
  });

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/posts", postRoutes);
app.use("/notifications", notificationRoutes);
app.use("/requests", requestRoutes);

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});
