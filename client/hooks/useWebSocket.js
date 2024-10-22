import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const useWebSocket = (url) => {
  const [socket, setSocket] = useState(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const newSocket = io(url);
    setSocket(newSocket);

    newSocket.on('connect', () => {
      setConnected(true);
    });

    newSocket.on('disconnect', () => {
      setConnected(false);
    });

    return () => {
      newSocket.close();
    };
  }, [url]);

  return { socket, connected };
};

export default useWebSocket;