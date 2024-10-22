const xss = require('xss-clean');

// XSS saldırılarına karşı giriş verilerini temizleyen middleware
const xssSanitizer = xss();

module.exports = xssSanitizer;