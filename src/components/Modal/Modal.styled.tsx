import styled from "styled-components";
import ReactModal from "react-modal";
import { Theme } from "../../../common/theme";

const StyledUsernameModal = styled(ReactModal)<{ theme: Theme }>`
	background-color: white;
	border-radius: 10px;
	height: 280px;
	width: 400px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;

	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	// shadow
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
	box-sizing: border-box;
	gap: 10px;
`;

export default StyledUsernameModal;
