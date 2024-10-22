const { textToSpeechService } = require('../services/textToSpeechService');

// Ses sentezi işlemi
const synthesizeVoice = async (req, res) => {
  const { text, voiceOptions } = req.body;

  try {
    const audioContent = await textToSpeechService(text, voiceOptions);
    res.json({ audioContent });
  } catch (error) {
    res.status(500).json({ message: 'Voice synthesis failed', error });
  }
};

module.exports = { synthesizeVoice };