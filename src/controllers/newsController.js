const axios = require('axios');
const DUMMY_JSON_URL = 'https://dummyjson.com/posts';

const newsController = {
    // Récupérer tous les articles
    async getAllNews(req, res) {
        try {
            const response = await axios.get(DUMMY_JSON_URL);
            if (response.data) {
                res.status(200).json(response.data);
            } else {
                res.status(404).json({ message: 'Aucun article trouvé' });
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des articles:', error.message);
            res.status(500).json({ message: 'Erreur serveur lors de la récupération des articles' });
        }
    },

    // Récupérer un article par son ID
    async getNewsById(req, res) {
        const { id } = req.params;
        try {
            const response = await axios.get(`${DUMMY_JSON_URL}/${id}`);
            if (response.data) {
                res.status(200).json(response.data);
            } else {
                res.status(404).json({ message: 'Article non trouvé' });
            }
        } catch (error) {
            console.error(`Erreur lors de la récupération de l'article ${id}:`, error.message);
            res.status(500).json({ message: 'Erreur serveur lors de la récupération de l\'article' });
        }
    },

    // Créer un nouvel article
    async createNews(req, res) {
        const { title, body } = req.body;
        try {
            const response = await axios.post(DUMMY_JSON_URL, { title, body });
            if (response.data) {
                res.status(201).json(response.data);
            } else {
                res.status(400).json({ message: 'Impossible de créer l\'article' });
            }
        } catch (error) {
            console.error('Erreur lors de la création de l\'article:', error.message);
            res.status(500).json({ message: 'Erreur serveur lors de la création de l\'article' });
        }
    },

    // Modifier un article existant
    async updateNews(req, res) {
        const { id } = req.params;
        const { title, body } = req.body;
        try {
            const response = await axios.put(`${DUMMY_JSON_URL}/${id}`, { title, body });
            if (response.data) {
                res.status(200).json(response.data);
            } else {
                res.status(404).json({ message: 'Article non trouvé pour mise à jour' });
            }
        } catch (error) {
            console.error(`Erreur lors de la mise à jour de l'article ${id}:`, error.message);
            res.status(500).json({ message: 'Erreur serveur lors de la mise à jour de l\'article' });
        }
    },

    // Supprimer un article
    async deleteNews(req, res) {
        const { id } = req.params;
        try {
            const response = await axios.delete(`${DUMMY_JSON_URL}/${id}`);
            if (response.data) {
                res.status(200).json({ message: 'Article supprimé avec succès' });
            } else {
                res.status(404).json({ message: 'Article non trouvé pour suppression' });
            }
        } catch (error) {
            console.error(`Erreur lors de la suppression de l'article ${id}:`, error.message);
            res.status(500).json({ message: 'Erreur serveur lors de la suppression de l\'article' });
        }
    }
};

module.exports = newsController;
