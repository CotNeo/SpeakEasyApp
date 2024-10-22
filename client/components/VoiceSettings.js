import React, { useState } from 'react';
import { View, Text, Slider, Button, StyleSheet } from 'react-native';

const VoiceSettings = ({ onSettingsChange }) => {
  const [pitch, setPitch] = useState(1);
  const [speed, setSpeed] = useState(1);

  return (
    <View style={styles.container}>
      <Text>Pitch: {pitch.toFixed(2)}</Text>
      <Slider
        minimumValue={0.5}
        maximumValue={2}
        value={pitch}
        onValueChange={setPitch}
        style={styles.slider}
      />
      <Text>Speed: {speed.toFixed(2)}</Text>
      <Slider
        minimumValue={0.5}
        maximumValue={2}
        value={speed}
        onValueChange={setSpeed}
        style={styles.slider}
      />
      <Button title="Apply Settings" onPress={() => onSettingsChange({ pitch, speed })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  slider: {
    width: '100%',
    marginVertical: 10,
  },
});

export default VoiceSettings;