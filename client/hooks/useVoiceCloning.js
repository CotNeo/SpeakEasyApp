import { useState } from 'react';
import axios from 'axios';

const useVoiceCloning = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const synthesizeSpeech = async (text, voiceOptions) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/voice/synthesize', {
        text,
        voiceOptions,
      });
      return response.data.audioContent;
    } catch (err) {
      setError(err);
      console.error('Voice synthesis error:', err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { synthesizeSpeech, loading, error };
};

export default useVoiceCloning;