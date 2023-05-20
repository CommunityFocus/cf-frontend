import { useState, useEffect } from "react";
import { socket } from "./Socket";
import { ConnectionState } from "./ConnectionState";
import { ConnectionManager } from "./ConnectionManager";
import { Timestamp } from "./Timestamp";
import { TimerForm } from "./TimerForm";

function Room() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [timestamp, setTimestamp] = useState("0");
  const [usersInRoom, setUsersInRoom] = useState(0);

  useEffect(() => {
    const roomName = window.location.href.split("/")[3];
    function onConnect() {
      socket.emit("join", roomName);
      console.log("join", roomName);
      setIsConnected(true);
    }

    function onDisconnect() {
      socket.emit("disconnect", roomName);
      setIsConnected(false);
    }

    function onTimerUpdate(value: string) {
    
      setTimestamp(value);
    }
    function onUsersInRoom(value: number) {
      console.log("usersInRoom", value);
      setUsersInRoom(value);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("timerUpdated", onTimerUpdate);
    socket.on("usersInRoom", onUsersInRoom);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("timerUpdated", onTimerUpdate);
      socket.off("usersInRoom", onUsersInRoom);
    };
  }, []);

  useEffect(() => {
    console.log({timestamp});
    // update the document title, with roomName and timestamp
    document.title = `${timestamp}-${window.location.href.split("/")[3]}`;
  }, [timestamp]);

  useEffect(() => {
    console.log("URL", window.location.href);
    console.log("roomId:", window.location.href.split("/")[3]);
  }, [isConnected]);

  return (
    <>
      <ConnectionState isConnected={isConnected} />
      <Timestamp timestamp={timestamp} />
      <ConnectionManager />
      <TimerForm />
      <p>Users in room: {usersInRoom}</p>
    </>
  );
}

export default Room;
