import {
	RoomListTable,
	RoomListTableBody,
	RoomListTableButton,
	RoomListTableHeader,
	RoomListTableHeaderCell,
	RoomListTableRow,
	RoomListTableRowCell,
	TableContainer,
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
		<TableContainer>
			<RoomListTable>
				<RoomListTableHeader>
					<tr>
						<RoomListTableHeaderCell>
							Room Name
						</RoomListTableHeaderCell>
						<RoomListTableHeaderCell>
							Number of Users
						</RoomListTableHeaderCell>
						<RoomListTableHeaderCell>Join</RoomListTableHeaderCell>
					</tr>
				</RoomListTableHeader>
				<RoomListTableBody>
					{rooms.map((room) => {
						return <ListRow room={room} key={room.room} />;
					})}
				</RoomListTableBody>
			</RoomListTable>
		</TableContainer>
	);
};

export default RoomList;
