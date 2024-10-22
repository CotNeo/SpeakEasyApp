import { useState, useEffect } from 'react';
import axios from 'axios';

const useRoomManagement = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRooms = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/rooms');
      setRooms(response.data);
    } catch (err) {
      setError(err);
      console.error('Error fetching rooms:', err);
    } finally {
      setLoading(false);
    }
  };

  const createRoom = async (roomName) => {
    try {
      const response = await axios.post('http://localhost:5000/api/rooms/create', {
        name: roomName,
      });
      setRooms((prevRooms) => [...prevRooms, response.data]);
    } catch (err) {
      setError(err);
      console.error('Error creating room:', err);
    }
  };

  const joinRoom = async (roomId) => {
    try {
      await axios.get(`http://localhost:5000/api/rooms/join/${roomId}`);
    } catch (err) {
      setError(err);
      console.error('Error joining room:', err);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return { rooms, createRoom, joinRoom, loading, error };
};

export default useRoomManagement;