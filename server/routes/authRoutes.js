const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/authController');

// Kullanıcı giriş rotası
router.post('/login', login);

// Kullanıcı kayıt rotası
router.post('/register', register);

module.exports = router;