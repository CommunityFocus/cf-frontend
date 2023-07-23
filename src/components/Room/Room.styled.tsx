import styled, { createGlobalStyle } from "styled-components";

export const StyledDiv = styled.div`
	height: 93vh;
	padding: 1%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const GlobalStyle = createGlobalStyle<{ backColor: string }>`
    body {
        margin: 0;
		background: ${({ backColor }): string => backColor};
		font-family: 'Open Sans', sans-serif;
    }
`;

export const Center = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

