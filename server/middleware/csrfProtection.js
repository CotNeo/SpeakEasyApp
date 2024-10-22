const csrf = require('csurf');

// CSRF koruması için middleware
const csrfProtection = csrf({ cookie: true });

module.exports = csrfProtection;