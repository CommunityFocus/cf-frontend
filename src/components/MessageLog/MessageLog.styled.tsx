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
	justify-content: space-between;
`;

export const MessageLogMessage = styled.span`
	font-size: 12px;
`;

export const MessageLogDate = styled.span`
	font-size: 9px;
`;
