import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import GroupChatScreen from '../components/GroupChatScreen';

const GroupScreen = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = (message) => {
    setMessages([...messages, { id: Date.now().toString(), text: message }]);
  };

  return (
    <View style={styles.container}>
      <GroupChatScreen messages={messages} />
      <TextInput
        style={styles.input}
        placeholder="Type your group message"
        value={newMessage}
        onChangeText={setNewMessage}
      />
      <Button title="Send" onPress={() => sendMessage(newMessage)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default GroupScreen;