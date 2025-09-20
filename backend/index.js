const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

// Allow requests from your frontend
app.use(cors({
  origin: "http://localhost:5173", // your React dev server
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());
app.use(bodyParser.json());

// Routes
const shapesRoutes = require("./routes/shapes");
const crystalsRoutes = require("./routes/crystals");

app.use("/shapes", shapesRoutes);
app.use("/crystals", crystalsRoutes);

app.get("/", (req, res) => res.send("Backend is alive!"));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Replace with your Gmail credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'cjalamares05@gmail.com',
    pass: 'Crystal_Admin'
  }
});

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

app.post('/send-otp', async (req, res) => {
  const { email } = req.body;
  const otp = generateOTP();

  const mailOptions = {
    from: 'cjalamares05@gmail.com',
    to: email,
    subject: 'Your OTP Code from ShapeShop',
    text: `Your OTP is: ${otp}`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`OTP sent to ${email}: ${otp}`);
    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ message: 'Failed to send OTP' });
  }
});