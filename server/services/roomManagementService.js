const Room = require('../models/Room');

const createRoom = async (name) => {
  try {
    const room = new Room({ name });
    await room.save();
    return room;
  } catch (error) {
    console.error('Room creation error:', error);
    throw new Error('Failed to create room');
  }
};

const joinRoom = async (roomId) => {
  try {
    const room = await Room.findById(roomId);
    if (!room) {
      throw new Error('Room not found');
    }
    return room;
  } catch (error) {
    console.error('Join room error:', error);
    throw new Error('Failed to join room');
  }
};

module.exports = { createRoom, joinRoom };