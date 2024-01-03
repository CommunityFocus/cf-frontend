import styled from "styled-components";
import { StyledButton } from "../Button/Button";

export const StyledTitle = styled.h3`
	text-align: center;
`;

export const StyledModalButton = styled(StyledButton)`
	margin-bottom: 20px;
	margin-top: 20px;
`;

export const StyledInput = styled.input`
	border: none;
	border-radius: 5px;
	padding: 10px;
	// shadow
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
	width: 100%;
`;

export const StyledUsernameModalContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	height: 100%;
	width: 100%;
`;
