import styled from "styled-components";
import { StyledButton } from "../Button/Button";

export const Title = styled.h1<{ color: string }>`
	color: ${({ color }): string => color};
	font-family: monospace;
	font-size: 50px;
	text-align: center;
`;

export const StyledText = styled.p<{ color: string }>`
	color: ${({ color }): string => color};
	font-family: monospace;
	font-size: 20px;
	text-align: center;
`;

export const StyledShareText = styled(StyledText)`
	margin: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 600px;
`;

export const Center = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 90vh;
`;

export const Button = styled(StyledButton)`
	margin-right: 20px;
`;

export const StyledDivRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

export const StyledDivSpacer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

export const StyledJoinRow = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

export const StyledBottomText = styled.div`
	position: absolute;
	bottom: 60px;

	@media (max-width: 600px), (max-height: 550px) {
		display: none;
	}
`;
