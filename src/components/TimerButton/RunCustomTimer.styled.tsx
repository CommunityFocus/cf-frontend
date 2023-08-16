import styled from "styled-components";
import ValidationInput from "../Modal/ValidationInput";

export const StyledCustomTimerInputDiv = styled.div`
	// both on the same line with a space between
	display: flex;
	flex-direction: row;

	align-items: center;
`;

export const StyledInputLabelDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const StyledValidationInput = styled(ValidationInput)`
	margin: 0px;
	width: 40%;
`;

export const StyledContainerDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	margin-top: 1rem;
	margin-bottom: 1rem;
	gap: 1rem;
`;
