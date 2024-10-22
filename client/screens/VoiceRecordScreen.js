import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { Audio } from 'expo-av'; // Using expo-av for recording and playback

const VoiceRecordScreen = () => {
  const [recording, setRecording] = useState(null);
  const [audioUri, setAudioUri] = useState('');

  const startRecording = async () => {
    try {
      const permission = await Audio.requestPermissionsAsync();
      if (permission.status === 'granted') {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });

        const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );
        setRecording(recording);
      }
    } catch (err) {
      console.error('Failed to start recording:', err);
    }
  };

  const stopRecording = async () => {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    setAudioUri(uri);
  };

  const playRecording = async () => {
    const { sound } = await Audio.Sound.createAsync({ uri: audioUri });
    await sound.playAsync();
  };

  return (
    <View style={styles.container}>
      <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
      />
      {audioUri ? (
        <View>
          <Text>Recording saved at: {audioUri}</Text>
          <Button title="Play Recording" onPress={playRecording} />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default VoiceRecordScreen;