const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Serve static files (HTML, CSS, JS) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle POST request with JSON data
app.post('/update-checkboxes', (req, res) => {
    const { checkbox1, checkbox2, checkbox3 } = req.body;

    console.log('Received data:', req.body);

    // Send the same data back to the client to update the checkboxes
    res.json({
        checkbox1: checkbox1,
        checkbox2: checkbox2,
        checkbox3: checkbox3
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
