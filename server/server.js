import express from "express";
import path from "path";
import cors from "cors";
import mongoose from "mongoose";

import indexRouter from "./routes/index";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
const dbUrl = process.env.MONGO_URI || "mongodb://localhost:27017/BookDB";
mongoose.connect(dbUrl, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => {
  console.error(error);
});
db.once("open", () => {
  console.log("we are connected!");
});

const port = process.env.PORT || 4000;
app.listen(port, function () {
  console.log("server ur on", port);
});
