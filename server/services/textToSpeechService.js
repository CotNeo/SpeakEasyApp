const textToSpeech = require('@google-cloud/text-to-speech');
const client = new textToSpeech.TextToSpeechClient();

const textToSpeechService = async (text, voiceOptions) => {
  const request = {
    input: { text },
    voice: {
      languageCode: voiceOptions.languageCode || 'en-US',
      name: voiceOptions.voiceName || 'en-US-Wavenet-D',
      ssmlGender: voiceOptions.ssmlGender || 'NEUTRAL',
    },
    audioConfig: {
      audioEncoding: 'MP3',
      pitch: voiceOptions.pitch || 0,
      speakingRate: voiceOptions.speakingRate || 1.0,
    },
  };

  try {
    const [response] = await client.synthesizeSpeech(request);
    return response.audioContent;
  } catch (error) {
    console.error('Text to Speech Error:', error);
    throw new Error('Failed to synthesize speech');
  }
};

module.exports = { textToSpeechService };