import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatMessage = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.messageText}>{message.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  messageText: {
    fontSize: 16,
  },
});

export default ChatMessage;