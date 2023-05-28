import { io } from "socket.io-client";
import { SERVER_URL, roomName } from "../../common/common";

console.log("SERVER_URL", SERVER_URL);

const socket = io(SERVER_URL, {
	query: {
		roomName,
	},
});

export default socket;
