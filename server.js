const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir les fichiers statiques depuis la racine
app.use(express.static(path.join(__dirname)));

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route pour la page "start"
app.get('/start', (req, res) => {
  res.sendFile(path.join(__dirname, 'start.html'));
});

// Route pour la page "card"
app.get('/card/:username', (req, res) => {
  res.sendFile(path.join(__dirname, 'card.html'));
});

// Route pour la page "quiz"
app.get('/quiz', (req, res) => {
  res.sendFile(path.join(__dirname, 'quiz.html'));
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
