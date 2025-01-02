const express = require('express');
const router = express.Router();

// Exemple de base de données simulée pour les articles
let articles = [
    { id: 1, title: "Article 1", body: "This is the first article.", imageUrl: "https://via.placeholder.com/150" },
    { id: 2, title: "Article 2", body: "This is the second article.", imageUrl: "https://via.placeholder.com/150" }
];

// Route pour obtenir la liste de tous les articles
router.get('/', (req, res) => {
    res.status(200).json(articles);
});

// Route pour obtenir un article par son ID
router.get('/:id', (req, res) => {
    const articleId = parseInt(req.params.id, 10);
    const article = articles.find(a => a.id === articleId);

    if (!article) {
        return res.status(404).json({ message: 'Article not found' });
    }

    res.status(200).json(article);
});

// Route pour ajouter un nouvel article
router.post('/', (req, res) => {
    const { title, body, imageUrl } = req.body;

    if (!title || !body) {
        return res.status(400).json({ message: 'Title and body are required' });
    }

    const newArticle = {
        id: articles.length + 1,
        title,
        body,
        imageUrl: imageUrl || "https://via.placeholder.com/150" // URL d'image par défaut
    };

    articles.push(newArticle);
    res.status(201).json(newArticle);
});

// Route pour mettre à jour un article par son ID
router.put('/:id', (req, res) => {
    const articleId = parseInt(req.params.id, 10);
    const { title, body, imageUrl } = req.body;

    if (!title || !body) {
        return res.status(400).json({ message: 'Title and body are required' });
    }

    const article = articles.find(a => a.id === articleId);

    if (!article) {
        return res.status(404).json({ message: 'Article not found' });
    }

    article.title = title;
    article.body = body;
    article.imageUrl = imageUrl || article.imageUrl; // Garde l'ancienne image si aucune nouvelle n'est fournie

    res.status(200).json(article);
});

// Route pour supprimer un article par son ID
router.delete('/:id', (req, res) => {
    const articleId = parseInt(req.params.id, 10);
    const articleIndex = articles.findIndex(a => a.id === articleId);

    if (articleIndex === -1) {
        return res.status(404).json({ message: 'Article not found' });
    }

    articles.splice(articleIndex, 1);
    res.status(200).json({ message: 'Article deleted successfully' });
});

module.exports = router;
