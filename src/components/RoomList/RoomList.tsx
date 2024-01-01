import { useContext } from "react";
import { ThemeContext } from "styled-components";
import {
	RoomListTable,
	RoomListTableBody,
	RoomListTableButton,
	RoomListTableHeader,
	RoomListTableHeaderCell,
	RoomListTableRow,
	RoomListTableRowCell,
	TableContainer,
	UserListDiv,
} from "./RoomList.styled";
import { theme } from "../../../common/theme";
import UserBubble from "../UserBubbles/UserBubble";
import MultiUserBubble from "../UserBubbles/MultiUserBubble";

export interface ITimerRooms {
	numUsers: number;
	userList: string[];
	room: string;
	isPublic: boolean;
}

interface IRoomList {
	rooms: ITimerRooms[];
	isBreak: boolean;
	isAdminMode: boolean;
	roomName: string;
}

const ListRow = (props: {
	room: ITimerRooms;
	textColor: string;
	accentColor: string;
	isAdminMode: boolean;
	roomName: string;
	isPublic: boolean;
}): JSX.Element => {
	const { room, textColor, accentColor, isAdminMode, roomName, isPublic } =
		props;

	console.log(room, room.isPublic);
	return (
		<RoomListTableRow>
			<RoomListTableRowCell color={textColor}>
				{room.room}
			</RoomListTableRowCell>
			<RoomListTableRowCell color={textColor}>
				<UserListDiv>
					{room.numUsers}

					{room.userList.length > 0 &&
						(room.userList.length < 5 ? (
							room.userList.map((user: string) => (
								<UserBubble
									user={user}
									key={
										crypto.getRandomValues(
											new Uint32Array(1)
										)[0]
									}
									size={20}
								/>
							))
						) : (
							<>
								{room.userList
									.slice(0, 4)
									.map((user: string) => (
										<UserBubble
											user={user}
											key={
												crypto.getRandomValues(
													new Uint32Array(1)
												)[0]
											}
											size={20}
										/>
									))}
								<MultiUserBubble
									users={room.userList.slice(4)}
									size={20}
								/>
							</>
						))}
				</UserListDiv>
			</RoomListTableRowCell>

			<RoomListTableRowCell color={textColor}>
				<RoomListTableButton
					color={accentColor}
					onClick={(): void => {
						window.location.href = `/${room.room}`;
					}}
				>
					Join
				</RoomListTableButton>
			</RoomListTableRowCell>

			{isAdminMode && roomName === "admin" && (
				<RoomListTableRowCell color={textColor}>
					{isPublic ? "Public" : "Private"}
				</RoomListTableRowCell>
			)}
		</RoomListTableRow>
	);
};

const RoomList = (props: IRoomList): JSX.Element => {
	const { rooms, isBreak, isAdminMode, roomName } = props;

	const { themeGroup } = useContext(ThemeContext);

	const { workAccent, workGrey, breakAccent } =
		theme[themeGroup as keyof typeof theme];

	console.log(rooms);

	return (
		<TableContainer>
			<RoomListTable>
				<RoomListTableHeader color={isBreak ? breakAccent : workAccent}>
					<tr>
						<RoomListTableHeaderCell color={workGrey}>
							Room Name
						</RoomListTableHeaderCell>
						<RoomListTableHeaderCell color={workGrey}>
							Number of Users
						</RoomListTableHeaderCell>
						<RoomListTableHeaderCell color={workGrey}>
							Join
						</RoomListTableHeaderCell>

						{isAdminMode && roomName === "admin" && (
							<RoomListTableHeaderCell color={workGrey}>
								Public
							</RoomListTableHeaderCell>
						)}
					</tr>
				</RoomListTableHeader>
				<RoomListTableBody>
					{rooms.length === 0 && (
						<RoomListTableRow>
							<RoomListTableRowCell color={workGrey}>
								No rooms available
							</RoomListTableRowCell>
						</RoomListTableRow>
					)}
					{rooms.map((room) => {
						return (
							<ListRow
								room={room}
								key={room.room}
								textColor={workGrey}
								accentColor={isBreak ? breakAccent : workAccent}
								isAdminMode={isAdminMode}
								roomName={roomName}
								isPublic={room.isPublic}
							/>
						);
					})}
				</RoomListTableBody>
			</RoomListTable>
		</TableContainer>
	);
};

export default RoomList;
