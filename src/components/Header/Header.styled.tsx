import styled from "styled-components";

const StyledHeader = styled.div<{ backColor: string }>`
	box-sizing: border-box;
	width: 100%;
	display: flex;
	background-color: ${({ backColor }): string => backColor};
	align-items: center;
	padding: 0 2em;
	height: 60px;
	justify-content: space-between;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
`;

export default StyledHeader;
