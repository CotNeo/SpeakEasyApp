const speakeasy = require('speakeasy');

const twoFactorAuthMiddleware = (req, res, next) => {
  const token = req.body.token;

  if (!token) {
    return res.status(403).json({ message: 'No 2FA token provided' });
  }

  const verified = speakeasy.totp.verify({
    secret: req.user.twoFactorSecret,
    encoding: 'base32',
    token,
  });

  if (!verified) {
    return res.status(401).json({ message: 'Invalid 2FA token' });
  }

  next();
};

module.exports = twoFactorAuthMiddleware;