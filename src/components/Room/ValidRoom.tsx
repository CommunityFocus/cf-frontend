import validRoomname from "../../helpers/validRoomname";
import Room from "./Room";
import RoomProps from "./RoomProps";
import DefaultRoom from "../DefaultRoom/DefaultRoom";

const ValidRoom = (props: RoomProps): JSX.Element => {
	const {
		globalUsersConnected,
		isBreak,
		setIsBreak,
		isConnected,
		setIsConnected,
	} = props;

	const room = window.location.pathname.split("/")[1];

	const validateRoom = validRoomname(room);

	if (validateRoom || room === "default") {
		return (
			<DefaultRoom
				globalUsersConnected={globalUsersConnected}
				isBreak={isBreak}
				isConnected={isConnected}
			/>
		);
	}

	return (
		<Room
			globalUsersConnected={globalUsersConnected}
			isBreak={isBreak}
			setIsBreak={setIsBreak}
			isConnected={isConnected}
			setIsConnected={setIsConnected}
		/>
	);
};

export default ValidRoom;
