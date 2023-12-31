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
} from "./RoomList.styled";
import { theme } from "../../../common/theme";

interface IRoom {
	room: string;
	numUsers: number;
}

interface IRoomList {
	rooms: IRoom[];
	isBreak: boolean;
}

const ListRow = (props: {
	room: IRoom;
	textColor: string;
	accentColor: string;
}): JSX.Element => {
	const { room, textColor, accentColor } = props;
	return (
		<RoomListTableRow>
			<RoomListTableRowCell color={textColor}>
				{room.room}
			</RoomListTableRowCell>
			<RoomListTableRowCell color={textColor}>
				{room.numUsers}
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
		</RoomListTableRow>
	);
};

const RoomList = (props: IRoomList): JSX.Element => {
	const { rooms, isBreak } = props;

	const { themeGroup } = useContext(ThemeContext);

	const { workAccent, workGrey, breakAccent } =
		theme[themeGroup as keyof typeof theme];

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
							/>
						);
					})}
				</RoomListTableBody>
			</RoomListTable>
		</TableContainer>
	);
};

export default RoomList;
