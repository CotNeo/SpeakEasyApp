const { Translate } = require('@google-cloud/translate').v2;
const translateClient = new Translate();

const translateService = async (text, targetLanguage) => {
  try {
    const [translatedText] = await translateClient.translate(text, targetLanguage);
    return translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    throw new Error('Translation failed');
  }
};

module.exports = { translateService };