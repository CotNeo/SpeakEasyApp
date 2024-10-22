const crypto = require('crypto');
const algorithm = 'aes-256-cbc'; // Kullanılacak şifreleme algoritması
const secretKey = process.env.ENCRYPTION_KEY || 'mysecretkey12345'; // Şifreleme anahtarı
const iv = crypto.randomBytes(16); // Başlatma vektörü (IV)

const encrypt = (text) => {
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return iv.toString('hex') + ':' + encrypted.toString('hex');
};

const decrypt = (encryptedText) => {
  const parts = encryptedText.split(':');
  const iv = Buffer.from(parts.shift(), 'hex');
  const encryptedTextBuffer = Buffer.from(parts.join(':'), 'hex');
  const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secretKey), iv);
  let decrypted = decipher.update(encryptedTextBuffer);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};

module.exports = { encrypt, decrypt };