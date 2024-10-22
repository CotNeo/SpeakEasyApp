const express = require('express');
const router = express.Router();
const { synthesizeVoice } = require('../controllers/voiceController');

// Ses sentezleme işlemi için rota
router.post('/synthesize', synthesizeVoice);

module.exports = router;