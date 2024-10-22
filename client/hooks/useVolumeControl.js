import { useState, useEffect } from 'react';
import { Audio } from 'expo-av'; // For React Native using expo-av for audio control

const useVolumeControl = () => {
  const [volume, setVolume] = useState(1); // Default volume level is 100%
  const [sound, setSound] = useState(null);

  const loadAudio = async (audioUri) => {
    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri: audioUri },
      { shouldPlay: true }
    );
    setSound(newSound);
    newSound.setVolumeAsync(volume);
  };

  const handleVolumeChange = async (newVolume) => {
    setVolume(newVolume);
    if (sound) {
      await sound.setVolumeAsync(newVolume);
    }
  };

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  return { volume, handleVolumeChange, loadAudio };
};

export default useVolumeControl;