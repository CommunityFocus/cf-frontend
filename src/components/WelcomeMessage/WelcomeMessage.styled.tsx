import styled from "styled-components";

const StyledText = styled.span<{ color: string }>`
	color: ${({ color }): string => color};
`;

export default StyledText;
