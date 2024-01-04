import styled from "styled-components";

export const Centered = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;

	flex-direction: column;
`;

export const StyledTitle = styled.h2<{ color: string }>`
	color: ${({ color }): string => color};
`;
