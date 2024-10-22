const { translateService } = require('../services/translateService');

// Çeviri işlemi
const translateText = async (req, res) => {
  const { text, targetLanguage } = req.body;

  try {
    const translatedText = await translateService(text, targetLanguage);
    res.json({ translatedText });
  } catch (error) {
    res.status(500).json({ message: 'Translation error', error });
  }
};

module.exports = { translateText };