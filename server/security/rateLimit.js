const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 dakika
  max: 100, // Her IP için 15 dakika içinde en fazla 100 istek
  message: 'Too many requests from this IP, please try again later.',
});

module.exports = limiter;