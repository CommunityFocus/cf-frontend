import { BiAlarmAdd } from "react-icons/bi";
import { BsFillShareFill } from "react-icons/bs";
import { RxOpenInNewWindow } from "react-icons/rx";
import styled from "styled-components";

export const StyledButtonRow = styled.div<{
	show: boolean;
}>`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 10px;
	margin: 20px;
	visibility: ${({ show }): string => (show ? "visible" : "hidden")};
`;

export const StyledShareIcon = styled(BsFillShareFill)`
	@media (max-width: 300px), (max-height: 500px) {
		display: none;
	}
`;

export const StyledReopenIcon = styled(RxOpenInNewWindow)`
	@media (max-width: 300px), (max-height: 500px) {
		display: none;
	}
`;

export const StyledAddTimerIcon = styled(BiAlarmAdd)`
	@media (max-width: 300px), (max-height: 500px) {
		display: none;
	}
`;
