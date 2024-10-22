const speech = require('@google-cloud/speech');
const client = new speech.SpeechClient();

const speechToText = async (audioBuffer) => {
  const request = {
    audio: {
      content: audioBuffer.toString('base64'),
    },
    config: {
      encoding: 'LINEAR16',
      sampleRateHertz: 16000,
      languageCode: 'en-US',
    },
  };

  try {
    const [response] = await client.recognize(request);
    const transcription = response.results
      .map(result => result.alternatives[0].transcript)
      .join('\n');
    return transcription;
  } catch (error) {
    console.error('Speech to Text Error:', error);
    throw new Error('Failed to transcribe audio');
  }
};

module.exports = { speechToText };