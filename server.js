const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Variable to store received JSON data (this will be updated with the external POST request)
let checkboxData = [
    { checkboxText: 'Oled pede?', checked: false },
    { checkboxText: 'Option 2', checked: false },
    { checkboxText: 'Option 3', checked: false }
];

// Serve static files (HTML, CSS, JS) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to receive JSON data from an external application
app.post('/receive-checkbox-data', (req, res) => {
    const data = req.body;

    if (Array.isArray(data)) {
        checkboxData = data; // Update checkbox data with received data
        res.json({ message: 'Data received successfully!' });
    } else {
        res.status(400).json({ error: 'Invalid data format' });
    }
});

// Route to send checkbox data to the frontend
app.get('/get-checkbox-data', (req, res) => {
    res.json(checkboxData); // Respond with the current checkbox data
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
