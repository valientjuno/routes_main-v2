require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connect");

// Initialize the Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Import routes from routes/index.js
const indexRoutes = require("./routes/index");

// Use the imported routes
app.use("/", indexRoutes);

// connect to mongodb

connectDB();

// Start the server
app.listen(PORT, () => {
  console.log("\x1b[45m%s\x1b[0m", `Connected to DB and listening on: ${PORT}`);
});
