import styled from "styled-components";

export const UpdateLogContainer = styled.div`
	height: 250px;
	width: 250px;
	border: 2px solid #a1bca4;
	background-color: #c7e0d9;
	border-radius: 12px;

	overflow-y: scroll;
	// keep scrollbar visible
	::-webkit-scrollbar {
		-webkit-appearance: none;
		width: 7px;
	}
	::-webkit-scrollbar-thumb {
		border-radius: 4px;
		background-color: rgba(0, 0, 0, 0.5);
		-webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
	}

	::-webkit-scrollbar-track {
		background-color: rgba(255, 255, 255, 0.5);
		border-radius: 4px;
		-webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.5);
	}

	::-webkit-scrollbar-corner {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb:hover {
		background-color: rgba(0, 0, 0, 0.7);
	}

	::-webkit-scrollbar-thumb:active {
		background-color: rgba(0, 0, 0, 0.8);
	}
`;

export const PositionDiv = styled.div`
	position: absolute;
	top: 6rem;
	right: 4rem;
`;

export const LogContainer = styled.div`
	margin-bottom: 0.5rem;
`;
