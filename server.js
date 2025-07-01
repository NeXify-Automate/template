const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Health Check
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

// Statische Dateien (z.B. HTML) direkt ausliefern
app.use(express.static(__dirname));

// Haupt-HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'nexify-premium-landing.html'));
});

// Fallback für alle anderen Routen
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'nexify-premium-landing.html'));
});

app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});

module.exports = app; // Wichtig für Vercel