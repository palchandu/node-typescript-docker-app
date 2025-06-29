import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

// Import routes
import userRouter from "./routers/user.router";
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes
app.use("/api/users", userRouter);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
export default app;
