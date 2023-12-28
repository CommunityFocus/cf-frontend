import styled from "styled-components";

export const RoomListTable = styled.table`
	// width: 100%;
	border-collapse: collapse;

	width: 60%;
	// height: 100px;

	// overflow: none;
`;

export const RoomListTableBody = styled.tbody`
	// height: 200px;
	// overflow-y: visible;
`;

export const RoomListTableHeader = styled.thead`
	border: 1px solid black;
	padding: 10px;
`;

export const RoomListTableHeaderCell = styled.th`
	border: 1px solid black;
	padding: 10px;
	width: 33%;
`;

export const RoomListTableRow = styled.tr`
	border: 1px solid black;
	padding: 10px;
	height: 5px;
`;

export const RoomListTableRowCell = styled.td`
	border: 1px solid black;
	padding: 10px;

	width: 33%;

	text-align: center;
	vertical-align: middle;
`;

export const RoomListTableButton = styled.button`
	width: 50%;
	height: 100%;
	background-color: #4caf50;
	color: white;

	border: none;
	border-radius: 5px;
	padding: 5px;
	text-align: center;
`;
