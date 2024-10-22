import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FeedbackSection = ({ feedback }) => {
  return (
    <View style={styles.container}>
      {feedback.map((item, index) => (
        <Text key={index} style={styles.feedbackText}>
          {item}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  feedbackText: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
});

export default FeedbackSection;