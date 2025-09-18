const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

// Allow requests from your frontend
app.use(cors({
  origin: "http://localhost:5173", // your React dev server
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Routes
const shapesRoutes = require("./routes/shapes");
const crystalsRoutes = require("./routes/crystals");

app.use("/shapes", shapesRoutes);
app.use("/crystals", crystalsRoutes);

app.get("/", (req, res) => res.send("Backend is alive!"));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});