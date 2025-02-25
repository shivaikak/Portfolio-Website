const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000; // You can change this port if needed

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname)));

// Serve the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
