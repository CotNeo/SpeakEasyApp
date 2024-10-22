const Room = require('../models/Room');

// Oda oluşturma işlemi
const createRoom = async (req, res) => {
  const { name } = req.body;
  try {
    const room = new Room({ name });
    await room.save();
    res.status(201).json(room);
  } catch (error) {
    res.status(500).json({ message: 'Room creation failed', error });
  }
};

// Odaya katılma işlemi
const joinRoom = async (req, res) => {
  const { roomId } = req.params;
  try {
    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.json(room);
  } catch (error) {
    res.status(500).json({ message: 'Joining room failed', error });
  }
};

module.exports = { createRoom, joinRoom };