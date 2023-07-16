import styled from "styled-components";

export const StyledFooter = styled.div<{ backColor: string }>`
	position: absolute;
	right: 0;
	bottom: 0;
	left: 0;
	padding: 1rem;
	background-color: ${({ backColor }): string => backColor};
	text-align: center;
	height: 25px;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
`;

export const StyledText = styled.h3`
	color: #393034;
	margin-top: 5px;
	font-size: 14px;
`;
