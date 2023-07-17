import styled from "styled-components";

export const StyledFooter = styled.div<{ backColor: string }>`
	padding: 1rem;
	background-color: ${({ backColor }): string => backColor};
	text-align: center;
	height: 25px;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;

	display: grid;
	grid-template-columns: 1fr 3fr 1fr;
`;

export const FooterText = styled.div`
	font-weight: bold;
	font-size: 14px;
`;

export const StyledText = styled.div<{ color: string }>`
	color: ${({ color }): string => color};
	margin-top: 5px;
	grid-column: 2;
	font-weight: bold;
	font-size: 14px;
`;

export const StyledConnectionState = styled.div<{ color: string }>`
	color: ${({ color }): string => color};
	margin-top: 5px;
	grid-column: 4;
`;
