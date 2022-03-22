import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import blogRoute from "./routes/blogPosts.routes.js";

const app = express();

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use("/api/blog", blogRoute);

const url =
  "mongodb+srv://infothamizha:info12345@cluster0.trxcm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const DB_CONNECTION = process.env.DATABASE_URL || url;
const PORT = process.env.PORT || 6000;

mongoose
  .connect(DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, console.log(`server is running on PORT ${PORT}`))
  )
  .catch((error) => console.error(error.message));
