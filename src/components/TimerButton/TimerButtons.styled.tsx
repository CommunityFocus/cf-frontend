import styled from "styled-components";

export const ButtonContainer = styled.div`
	flex-direction: row;
`;

export const StyledButton = styled.button`
	&:hover {
		cursor: pointer;
	}

	&:active {
		transform: translateY(2px);
	}
`;
export const StyledTimeButton = styled(StyledButton)<{
	color: string;
	size: number;
	fontColor: string;
}>`
	background-color: ${({ color }): string => color};
	border-radius: 50%;
	height: ${({ size }): number => size}px;
	width: ${({ size }): number => size}px;
	border: none;
	color: ${({ fontColor }): string => fontColor};
`;
