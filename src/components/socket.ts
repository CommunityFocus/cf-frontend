import { io } from "socket.io-client";
import { SERVER_URL, roomName } from "../../common/common";

const socket = io(SERVER_URL, {
	query: {
		roomName,
	},
});

export default socket;
