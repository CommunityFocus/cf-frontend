import styled, { createGlobalStyle } from "styled-components";

export const StyledDiv = styled.div<{ backColor: string }>`
	background: ${({ backColor }): string => backColor};
	height: 93vh;
	padding: 1%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
`;

export const Center = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
