const express = require('express');
const router = express.Router();
const { connectZoomTeams } = require('../controllers/zoomTeamsController');

// Zoom veya Teams bağlantısı için rota
router.post('/connect', connectZoomTeams);

module.exports = router;