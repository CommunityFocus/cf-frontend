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

	&:active {
		background-color: ${({ color }): string => color};
	}
`;
