import express from "express";
import cron from "node-cron";
import axios from "axios";
import weatherRoutes from "./routes/weather.js";
import dotenv from "dotenv";
import connectDB from "./config/DBConfig.js";
import cors from "cors";

dotenv.config();

const app = express();
// Import CORS

app.use(cors()); // Enable CORS
app.use(express.json());
app.use("/api", weatherRoutes);

connectDB();

// Initial Weather Data Fetch
(async () => {
  console.log("Fetching weather data...");
  try {
    await axios.post("http://localhost:5000/api/fetch-weather");
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
  }
})();

// Schedule Weather Data Fetching Every 5 Minutes
cron.schedule("*/5 * * * *", async () => {
  console.log("Fetching weather data...");
  try {
    await axios.post("http://localhost:5000/api/fetch-weather");
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
