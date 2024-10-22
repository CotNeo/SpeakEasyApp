import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import LanguageSelector from '../components/LanguageSelector';
import VoiceSettings from '../components/VoiceSettings';

const SettingsScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [voiceSettings, setVoiceSettings] = useState({ pitch: 1, speed: 1 });

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const handleVoiceSettingsChange = (settings) => {
    setVoiceSettings(settings);
  };

  return (
    <View style={styles.container}>
      <LanguageSelector onSelectLanguage={handleLanguageChange} />
      <VoiceSettings onSettingsChange={handleVoiceSettingsChange} />
      <Button title="Save Settings" onPress={() => alert('Settings Saved')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default SettingsScreen;