const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes for each language
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/de', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index-de.html'));
});

app.get('/fr', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index-fr.html'));
});

// Fallback to English
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🔧 The Fixer is live on port ${PORT}`);
});
