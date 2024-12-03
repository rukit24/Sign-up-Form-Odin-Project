const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Form.html'));
});

// Serve the CSS file
app.get('/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'styles.css'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

app.use(express.urlencoded({ extended: true })); // Middleware to parse form data

// Handle form submissions
app.post('/submit-form', (req, res) => {
    const { username } = req.body; // Extract the data from the form
    console.log(`Form submitted with username: ${username}`); // Log the data
    res.send(`Form received! Username: ${username}`);
});