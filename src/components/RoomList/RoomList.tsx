/*
 * RoomList is a component that displays a list of rooms.
 * The columns are Room Name, Number of Users, Active status, timer length, and Join button.
 * The rows are the rooms.
 * The button is a link to the room.
 * The timer length is the length of the room's timer thats running.
 * The active status is whether the room is currently running a timer or not.
 * The number of users is the number of users in the room.
 * The room name is the name of the room.
 *
 * Inputs:
 *     - an array of rooms to display (roomName, numUsers, timerLength, isActive)
 */

import {
	RoomListTable,
	RoomListTableButton,
	// RoomListTableButtonContainer,
	RoomListTableHeader,
	RoomListTableRow,
	RoomListTableRowCell,
} from "./RoomList.styled";

interface IRoom {
	room: string;
	numUsers: number;
}

interface IRoomList {
	rooms: IRoom[];
}

const ListRow = (props: { room: IRoom }): JSX.Element => {
	const { room } = props;
	return (
		<RoomListTableRow>
			<RoomListTableRowCell>{room.room}</RoomListTableRowCell>
			<RoomListTableRowCell>{room.numUsers}</RoomListTableRowCell>

			<RoomListTableRowCell>
				<RoomListTableButton
					onClick={(): void => {
						window.location.href = `/${room.room}`;
					}}
				>
					Join
				</RoomListTableButton>
			</RoomListTableRowCell>
		</RoomListTableRow>
	);
};

const RoomList = (props: IRoomList): JSX.Element => {
	const { rooms } = props;
	return (
		<RoomListTable>
			<RoomListTableHeader>
				<RoomListTableRowCell>Room Name</RoomListTableRowCell>
				<RoomListTableRowCell>Number of Users</RoomListTableRowCell>
				<RoomListTableRowCell>Join</RoomListTableRowCell>
			</RoomListTableHeader>
			{rooms.map((room) => {
				return <ListRow room={room} />;
			})}
		</RoomListTable>
	);
};

export default RoomList;
