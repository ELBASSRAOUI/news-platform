const express = require('express');
const { body, param } = require('express-validator'); // Pour les validations
const router = express.Router();
const newsController = require('../controllers/newsController');

// Ajouter une validation sur la création de l'article
router.post(
    '/',
    [
        body('title').notEmpty().withMessage('Le titre est requis'),
        body('body').notEmpty().withMessage('Le corps de l\'article est requis')
    ],
    newsController.createNews
);

// Ajouter une validation sur l'ID pour la récupération ou suppression
router.get('/:id', [
    param('id').isNumeric().withMessage('L\'ID doit être un nombre')
], newsController.getNewsById);

router.delete('/:id', [
    param('id').isNumeric().withMessage('L\'ID doit être un nombre')
], newsController.deleteNews);
const validateRequest = require('../middlewares/validation');

// Exemple de validation avant d'atteindre le contrôleur
router.post('/', validateRequest, newsController.createNews);

module.exports = router;
