import styled from "styled-components";

export const ButtonContainer = styled.div`
	// flex-direction: row;

	// position: absolute;
	// background: red;
	// width: 20px;
	// height: 20px;
	// color: white;
`;

export const StyledButton = styled.button`
	&:hover {
		cursor: pointer;
	}

	&:active {
		transform: translateY(10px); !important;
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
`;
