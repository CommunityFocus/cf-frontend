import styled from "styled-components";

export const StyledMessageLogContainer = styled.div`
	display: flex;
	max-height: 110px;
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

const OverflowIndicator = styled.div<{ $visible: boolean }>`
	display: ${(props): string => (props.$visible ? "flex" : "none")};
	justify-content: center;
	align-items: center;

	position: sticky;

	// should be translucent except when hovering
	opacity: 0.3;

	&:hover {
		opacity: 1;
	}
`;

export const OverflowIndicatorTop = styled(OverflowIndicator)`
	top: -10px;
`;

export const OverflowIndicatorBottom = styled(OverflowIndicator)`
	bottom: -8px;
`;

export const StyledMessageLogChildren = styled.div`
	// the last child should be normal but the rest should be translucent
	& > *:not(:last-child) {
		opacity: 0.3;
	}

	& > *:not(:last-child):hover {
		opacity: 1;
	}

	// the date div should be hidden except when hovering over the the container. The last child should always be visible
	& > *:not(:last-child) > ${MessageDateDiv} {
		display: none;
	}

	&:hover > *:not(:last-child) > ${MessageDateDiv} {
		display: flex;
	}
`;
