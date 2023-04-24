import  { useState, useEffect } from 'react';
import { socket } from './socket';
import { ConnectionState } from './components/ConnectionState';
import { ConnectionManager } from './components/ConnectionManager';
import { Events } from './components/Events';
import { MyForm } from './components/MyForm';


export default function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  // const [fooEvents, setFooEvents] = useState([]);
  const [timestamp, setTimestamp] = useState('0');

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value : string) {
      console.log('timer', value);
      setTimestamp(value);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('timer', onFooEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('timer', onFooEvent);
    };
  }, []);


  useEffect(() => {
    console.log('timestamp', timestamp);
  },[
    timestamp
  ]);

  return (
    <div className="App">
      <ConnectionState isConnected={ isConnected } />
      <Events events={ timestamp } />
      <ConnectionManager />
      <MyForm />
    </div>
  );
}