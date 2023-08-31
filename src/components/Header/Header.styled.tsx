import styled from "styled-components";

export const StyledHeader = styled.div<{ backColor: string }>`
	background-color: ${({ backColor }): string => backColor};
	box-sizing: border-box;
	width: 100%;
	display: flex;
	align-items: center;
	padding: 0 2em;
	height: 60px;
	justify-content: space-between;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;

	@media (max-width: 300px), (max-height: 500px) {
		display: none;
	}
`;

export const StyledDiv = styled.div`
	display: flex;
	align-items: center;
	column-gap: 20px;
`;
