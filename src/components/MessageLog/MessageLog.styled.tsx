import styled from "styled-components";

export const StyledMessageLogContainer = styled.div`
	display: flex;
	max-height: 100px;
	min-height: 60px;
	max-width: 350px;
	min-width: 350px;
	// border: 1px solid black;
	border-radius: 10px;
	// show on bottom left of page
	position: absolute;
	bottom: 80px;
	left: 20px;

	@media (max-width: 970px), (max-height: 600px) {
		display: none;
	}

	// content
	padding: 10px;

	// z-index: 0;

	// display
	flex-direction: column;
	overflow-wrap: break-word;

	// if content is larger than container, then scroll vertically
	overflow-y: auto;

	// font color
	color: #a9a9a9;
`;

export const StyledMessageLogBubble = styled.div`
	display: flex;
	flex-direction: column;
	// space away from the span tags
`;

export const MessageLogMessage = styled.span`
	font-size: 12px;

	// remove line spacing above and below
	margin: 0;
	padding: 0;
`;

export const MessageLogDate = styled.span`
	font-size: 9px;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
`;

export const PaddingDiv = styled.div`
	padding: 0 3px;
`;
