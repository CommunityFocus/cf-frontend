import styled from "styled-components";

export const StyledButton = styled.button`
	&:hover {
		cursor: pointer;
	}

	&:active {
		transform: translateY(2px) scale(0.98);
	}
`;
export const StyledTimeButton = styled(StyledButton)<{
	color: string;
	size: number;
	fontColor: string;
}>`
	position: absolute;
	background-color: ${({ color }): string => color};
	border-radius: 50%;
	height: ${({ size }): number => size}px;
	width: ${({ size }): number => size}px;
	border: none;
	color: ${({ fontColor }): string => fontColor};
	// shadow
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);

	&:active {
		background-color: ${({ color }): string => color};
	}
`;

export const StyledWorkBreakButtonDiv = styled.div<{ show: boolean , iconColor:string}>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	display: ${({ show }): string => (show ? "flex" : "none")};
	color: ${({ iconColor}): string => (iconColor)};
`;

export const StyledPillButton = styled(StyledButton)<{
	color: string;
	fontColor: string;
	hasDelete: boolean;
}>`
	position: relative;
	background-color: ${({ color }): string => color};
	border-radius: 50px;
	height: 30px;
	width: 50px;
	border: none;
	color: ${({ fontColor }): string => fontColor};
	margin: 5px;
	padding: 5px;
	font-size: 0.8em;
	// shadow
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);

	&::after {
		content: "x";
		position: absolute;
		top: -5px;
		right: -5px;
		height: 15px;
		width: 15px;
		border-radius: 50%;
		background-color: #c4c4c4;
		color: white;
		text-align: center;
		line-height: 15px;
		font-size: 0.7em;

		// shadow
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);

		visibility: ${({ hasDelete }): string =>
			hasDelete ? "visible" : "hidden"};
	}
`;
