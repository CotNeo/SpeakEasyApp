const rateLimit = require('express-rate-limit');

const rateLimitMiddleware = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 dakika
  max: 100, // 15 dakika içinde her IP adresinden en fazla 100 istek
  message: 'Too many requests, please try again later.',
});

module.exports = rateLimitMiddleware;