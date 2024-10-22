import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RoomList = ({ rooms, onJoinRoom }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={rooms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onJoinRoom(item.id)}>
            <Text style={styles.roomText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  roomText: {
    padding: 15,
    backgroundColor: '#f4f4f4',
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default RoomList;