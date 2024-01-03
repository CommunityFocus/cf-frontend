import styled from "styled-components";

export const LogoText = styled.h1<{ color: string }>`
	color: ${({ color }): string => color};
	display: flex;
	align-items: center;
`;

export const StyledDiv = styled.div`
	flex-direction: row;
`;

export const StyledImg = styled.img`
	margin-right: 5px;
	height: 40px;
`;
