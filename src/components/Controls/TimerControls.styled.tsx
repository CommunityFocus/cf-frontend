import { BiAlarmAdd } from "react-icons/bi";
import { BsFillShareFill } from "react-icons/bs";
import { RxOpenInNewWindow } from "react-icons/rx";
import styled from "styled-components";

export const StyledButtonRow = styled.div<{
	show: boolean;
	iconColor: string;
}>`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 10px;
	margin: 20px;
	color: ${({ iconColor }): string => iconColor};
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

export const StyledMobileWorkBreakButtonDiv = styled.div<{
	isMobile: boolean;
}>`
	display: ${({ isMobile }): string => (isMobile ? "flex" : "none")};
`;

export const TimerFormContainer = styled.div<{
	isVisibile: boolean;
	isLoaded: boolean;
}>`
	// both not loading but isVisibile is true
	display: ${({ isVisibile, isLoaded }): string => {
		if (isLoaded && isVisibile) {
			return "flex";
		}
		return "none";
	}};
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

export const StyledRowDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 20px;
	margin-top: 20px;

	@media (max-width: 300px), (max-height: 600px) {
		display: none;
	}
`;
