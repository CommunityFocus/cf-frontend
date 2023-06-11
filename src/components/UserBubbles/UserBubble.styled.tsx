import styled from "styled-components";

export const UserBubbleStyled = styled.a<{ $borderColor?: string }>`
	border-radius: 50%;
	width: 30px;
	height: 30px;
	background-color: #393034;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 4px solid ${(props): string => props.$borderColor || "#BF4F74"};
	color: #fff;
	font-size: 0.8rem;
`;

export const UserBubblesContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: 75px;
	left: 0;
	right: 0;
	margin: auto;
	gap: 5px;
`;

export const TooltipContainer = styled.div`
	border-radius: 50%;
`;
