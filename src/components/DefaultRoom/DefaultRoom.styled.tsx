import styled from "styled-components";

export const StyledDiv = styled.div`
	height: 93vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const StyledText = styled.h1<{ color: string }>`
	color: ${({ color }): string => color};
`;
