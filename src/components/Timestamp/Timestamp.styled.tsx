import styled from "styled-components";

const StyledTimestamp = styled.h1<{ color: string }>`
	color: ${({ color }): string => color};
`;

export default StyledTimestamp;
