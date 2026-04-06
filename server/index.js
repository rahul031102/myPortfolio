const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const projectRoutes = require("./routes/projects");
const contactRoutes = require("./routes/contact");
const seedDB = require("./config/seed");

const app = express();
const PORT = process.env.PORT || 5000;


//const mongoose = require("mongoose");

//mongoose.connect(process.env.MONGO_URI)
  //.then(() => console.log("MongoDB Connected"))
  //.catch(err => console.log("Mongo Error:", err));

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Portfolio API is running" });
});

// MongoDB connection + seed
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/portfolio")
  .then(async () => {
    console.log("✅ MongoDB connected");
    await seedDB();
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });
