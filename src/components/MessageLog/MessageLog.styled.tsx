import styled from "styled-components";

export const StyledMessageLogContainer = styled.div`
	display: flex;
	max-height: 100px;
	min-height: 60px;
	max-width: 350px;
	min-width: 350px;

	// show on bottom left of page
	position: absolute;
	bottom: 60px;
	left: 20px;

	@media (max-width: 970px), (max-height: 600px) {
		display: none;
	}

	padding: 10px;

	// display
	flex-direction: column;
	overflow-wrap: break-word;

	// if content is larger than container, then scroll vertically
	overflow-y: auto;

	color: #a9a9a9;

	// scroll bar should be invisible
	::-webkit-scrollbar {
		width: 0px;
		background: transparent; /* make scrollbar transparent */
	}
`;

export const StyledMessageLogBubble = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 10px;
`;

export const MessageLogMessage = styled.span`
	font-size: 12px;

	display: flex;
	flex-direction: column;
	justify-content: left;
	max-width: 200px;
	margin-left: 5px;
`;

export const MessageLogDate = styled.span`
	font-size: 9px;

	display: flex;
	flex-direction: row;
`;

export const MessageDateDiv = styled.div`
	margin-left: auto;
`;

export const MessageLogCenterDiv = styled.div`
	display: flex;
	flex-direction: column;
`;

export const OverflowIndicatorTop = styled.div<{ $visible: boolean }>`
	display: ${(props): string => (props.$visible ? "flex" : "none")};
	justify-content: center;
	align-items: center;

	position: sticky;
	top: -8px;
`;
