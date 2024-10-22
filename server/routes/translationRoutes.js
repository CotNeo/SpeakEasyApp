const express = require('express');
const router = express.Router();
const { translateText } = require('../controllers/translationController');

// Çeviri işlemi için rota
router.post('/translate', translateText);

module.exports = router;