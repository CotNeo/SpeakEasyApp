import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const RoomCreation = ({ onCreateRoom }) => {
  const [roomName, setRoomName] = useState('');

  const handleCreateRoom = () => {
    if (roomName.trim()) {
      onCreateRoom(roomName);
      setRoomName('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter room name"
        value={roomName}
        onChangeText={setRoomName}
      />
      <Button title="Create Room" onPress={handleCreateRoom} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default RoomCreation;