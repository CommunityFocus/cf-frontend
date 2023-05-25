import { io } from "socket.io-client";
import { SERVER_URL, roomName } from "../../common/common";

console.log("SERVER_URL", SERVER_URL);

export const socket = io(SERVER_URL, {
  query: {
    roomName: roomName,
  },
});
