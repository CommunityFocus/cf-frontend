import styled from "styled-components";

const StyledButtonRow = styled.div<{
	show: boolean;
}>`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 10px;
	margin: 20px;
	visibility: ${({ show }): string => (show ? "visible" : "hidden")};
`;

export default StyledButtonRow;
