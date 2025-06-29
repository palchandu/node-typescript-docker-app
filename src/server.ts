import app from "./index";
import mongoose from "mongoose";
import { createClient } from "redis";
const PORT = process.env.PORT || 3900;
/** Mongoose connection from container */
console.log("Connecting to MongoDB...", process.env.MONGO_URI);
console.log("Connecting to Redis...", process.env.REDIS_URL);
const MONGO_URI = process.env.MONGO_URI || "mongodb://mongo:27017/mydatabase";
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
//** Redis connect */

const redisClient = createClient({
  url: process.env.REDIS_URL || "redis://redis:6379",
});
redisClient
  .connect()
  .then(() => {
    console.log("Redis connected");
  })
  .catch((err) => {
    console.error("Redis connection error:", err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
