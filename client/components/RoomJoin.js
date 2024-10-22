import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const RoomJoin = ({ onJoinRoom }) => {
  const [roomId, setRoomId] = useState('');

  const handleJoinRoom = () => {
    if (roomId.trim()) {
      onJoinRoom(roomId);
      setRoomId('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter room ID"
        value={roomId}
        onChangeText={setRoomId}
      />
      <Button title="Join Room" onPress={handleJoinRoom} />
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

export default RoomJoin;