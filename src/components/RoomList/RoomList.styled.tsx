// RoomList.styled.ts
import styled from "styled-components";

export const RoomListContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	// height: 400px;

	// width: 60%;
`;

export const RoomListTableWrapper = styled.div`
	// width: 60%;
	// overflow: hidden;
	// border: 1px solid black;
`;

export const RoomListTable = styled.table`
	width: 80vh;
	border-collapse: collapse;
	border: 1px solid black;
`;

export const RoomListTableHeader = styled.thead`
	position: sticky;
	top: 0;
	border: 1px solid black;
	background-color: white;
`;

export const RoomListTableBody = styled.tbody`
	// max-height: 200px;
	// overflow-y: auto;
`;

export const RoomListTableRow = styled.tr`
	height: 50px;
	border: 1px solid white;
	border-collapse: collapse;
	border-radius: 5%;
`;

export const RoomListTableRowCell = styled.td`
	// Your existing styles for table cells
`;

export const RoomListTableHeaderCell = styled.th`
	// Your existing styles for table header cells
`;

export const RoomListTableButton = styled.button`
	// Your existing styles for buttons
`;

export const TableContainer = styled.div`
	height: 400px;
	overflow: auto;
	border: 3px solid black;
	border-radius: 5%;
`;
