import { ThemeContext } from "styled-components";
import { useContext } from "react";

import { IPublicRoom } from "./PublicRoom";
import { theme } from "../../../common/theme";
import { StyledTitle } from "./StatRoom.styled";
import RoomList, { ITimerRooms } from "../../components/RoomList/RoomList";
import DefaultRoom from "../../components/DefaultRoom/DefaultRoom";

interface IPublicRoomRouter extends IPublicRoom {
	isAdminMode: boolean;
	timerRooms: ITimerRooms[];
}

const PublicRoomRouter = (props: IPublicRoomRouter): JSX.Element => {
	const {
		isBreak,
		globalUsersConnected,
		isConnected,
		roomName,
		isAdminMode,
		timerRooms,
	} = props;

	const { themeGroup } = useContext(ThemeContext);

	const { workGrey } = theme[themeGroup as keyof typeof theme];

	if (roomName === "public-timers") {
		return (
			<>
				<StyledTitle color={workGrey}>Public Timers</StyledTitle>
				<RoomList
					rooms={timerRooms}
					isBreak={isBreak}
					isAdminMode={isAdminMode}
					roomName={roomName}
				/>
			</>
		);
	}

	if (roomName === "admin") {
		if (isAdminMode) {
			return (
				<>
					<StyledTitle color={workGrey}>Admin</StyledTitle>
					<RoomList
						rooms={timerRooms}
						isBreak={isBreak}
						isAdminMode={isAdminMode}
						roomName={roomName}
					/>
				</>
			);
		}
	}

	return (
		<DefaultRoom
			globalUsersConnected={globalUsersConnected}
			isBreak={isBreak}
			isConnected={isConnected}
		/>
	);
};

export default PublicRoomRouter;
