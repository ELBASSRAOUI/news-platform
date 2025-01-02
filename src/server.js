require('dotenv').config();
const express = require('express');
const cors = require('cors');
const newsRoutes = require('./routes/newsRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/api/news', newsRoutes);

// Middleware de gestion des erreurs
app.use((err, req, res, next) => {
    console.error(err.stack);  // Journaliser l'erreur pour le développeur
    res.status(500).json({ message: 'Une erreur est survenue sur le serveur.' });  // Message d'erreur générique pour le client
});

// Optionnel : Middleware de logging pour suivre les requêtes et erreurs
// Utilisez un paquet comme `morgan` pour une gestion simple des logs si vous le souhaitez

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
