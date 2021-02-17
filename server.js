// ANCHOR -- Require Modules
const path = require("path");
const express = require("express");
const sendEmail = require("./mail");
const dotenv = require("dotenv");

// ANCHOR -- Initialize Express
const app = express();

// Data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ANCHOR -- Routes --
app.post("/email", (req, res) => {
  // send email here

  const { subject, email, text } = req.body;

  console.log("data: ", req.body);

  sendEmail(email, subject, text, function (err, data) {
    if (err) {
      res.status(500).json({ message: "Internal Error" });
    } else {
      res.json({ message: "Email sent successfully!" });
    }
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// ANCHOR -- Init Server --
const PORT = 8080;
app.listen(PORT, () => console.log(`Server is starting on port ${PORT}`));

// TUTORIAL NOTES
