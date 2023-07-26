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

export const StyledWorkBreakButtonDiv = styled.div<{ show: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	visibility: ${({ show }): string => (show ? "visible" : "hidden")};
`;
