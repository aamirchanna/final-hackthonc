import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";
import ConnectDB from "./config/db.js";

// Configure environment variables
dotenv.config();

// Database configuration
ConnectDB();

// Initialize express app
const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/auth", authRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the ecommerce app</h1>");
});

// Port configuration
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.DEV_MODE} mode on port ${PORT}`
  );
});
