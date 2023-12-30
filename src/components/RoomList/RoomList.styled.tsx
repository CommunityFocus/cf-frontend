// RoomList.styled.ts
import styled from "styled-components";

export const RoomListContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const RoomListTableWrapper = styled.div``;

export const RoomListTable = styled.table`
	width: 80vh;
	border-collapse: collapse;
`;

export const RoomListTableHeader = styled.thead<{ color: string }>`
	position: sticky;
	top: 0;

	background-color: ${(props): string => props.color};
`;

export const RoomListTableBody = styled.tbody``;

export const RoomListTableRow = styled.tr`
	height: 50px;
	border: 1px solid white;
	border-collapse: collapse;
	border-radius: 5%;
`;

export const RoomListTableRowCell = styled.td<{ color: string }>`
	height: 50px;
	border-collapse: collapse;
	border-radius: 5%;
	text-align: center;
	color: ${(props): string => props.color};
`;

export const RoomListTableHeaderCell = styled.th<{
	color: string;
}>`
	height: 50px;
	color: ${(props): string => props.color};
`;

export const RoomListTableButton = styled.button<{
	color: string;
}>`
	background-color: ${(props): string => props.color};

	border: none;
	border-radius: 5px;
	padding: 5px 10px;

	&:hover {
		transform: translateY(0.8px);
	}
`;

export const TableContainer = styled.div`
	height: 400px;
	overflow: auto;
	border: 3px solid white;
	border-radius: 50px;
`;
