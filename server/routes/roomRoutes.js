const express = require('express');
const router = express.Router();
const { createRoom, joinRoom } = require('../controllers/roomController');

// Yeni oda oluşturma rotası
router.post('/create', createRoom);

// Odaya katılma rotası
router.get('/join/:roomId', joinRoom);

module.exports = router;