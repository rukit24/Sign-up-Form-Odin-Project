const express = require("express");
const path = require("path");
const app = express();
const port = 5500;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve the HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Form.html"));
});

// Serve the CSS file
app.get("/styles.css", (req, res) => {
  res.sendFile(path.join(__dirname, "styles.css"));
});

// Handle form submissions
app.post("/submit-form", (req, res) => {
  const { firstname, lastname, email, phone, password } = req.body;

  console.log("Form submitted with the following data:");
  console.log(`First Name: ${firstname}`);
  console.log(`Last Name: ${lastname}`);
  console.log(`Email: ${email}`);
  console.log(`Phone Number: ${phone}`);
  console.log(`Password: ${password}`);

  // Send a success response
  res.send(`
        <h1>Form Received!</h1>
        <p>Thank you, ${firstname} ${lastname}. We have received your details.</p>
        <a href="/">Go Back</a>
    `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
