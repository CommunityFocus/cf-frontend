import styled from "styled-components";

const StyledDiv = styled.span<{ color: string }>`
	display: flex;
	justify-content: center;
	align-content: center;
	color: ${({ color }): string => color};
`;

export default StyledDiv;
