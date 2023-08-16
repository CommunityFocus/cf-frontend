import styled from "styled-components";

export const UserBubbleStyled = styled.a<{
	$borderColor?: string;
	$size?: number;
}>`
	border-radius: 50%;
	width: ${(props): string => `${props.$size || 30}px`};
	height: ${(props): string => `${props.$size || 30}px`};
	background-color: #393034;
	display: flex;
	justify-content: center;
	align-items: center;
	border: ${(props): string => `${(props.$size || 30) / 8}px`} solid
		${(props): string => props.$borderColor || "#BF4F74"};
	color: #fff;
	font-size: ${(props): string => `${(props.$size || 30) / 40}rem`};
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
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

	// hide if window is too small
	@media (max-height: 680px), (max-width: 680px) {
		display: none;
	}
`;

export const TooltipContainer = styled.div`
	border-radius: 50%;
`;
