import { useState, useEffect } from 'react';
import axios from 'axios';

const useTranslation = (text, targetLanguage) => {
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const translate = async () => {
      if (!text || !targetLanguage) return;
      setLoading(true);
      try {
        const response = await axios.post('http://localhost:5000/api/translate', {
          text,
          targetLanguage,
        });
        setTranslatedText(response.data.translatedText);
      } catch (error) {
        console.error('Translation error:', error);
      } finally {
        setLoading(false);
      }
    };

    translate();
  }, [text, targetLanguage]);

  return { translatedText, loading };
};

export default useTranslation;