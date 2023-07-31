import ReactTimeAgo from "react-time-ago";

import {
	MessageLogDate,
	MessageLogMessage,
	StyledMessageLogBubble,
} from "./MessageLog.styled";

interface MessageLogProps {
	message: string;
	date: Date;
}

const MessageLog = ({
	message,

	date,
}: MessageLogProps): JSX.Element => {
	return (
		<StyledMessageLogBubble>
			<MessageLogMessage>{message}</MessageLogMessage>
			<div>
				<MessageLogDate>
					{new Date(date).toLocaleTimeString("en-US", {
						hour: "numeric",
						minute: "numeric",
					})}

					{" | "}
					<ReactTimeAgo date={Date.parse(`${date}`)} locale="en-US" />
				</MessageLogDate>
			</div>
		</StyledMessageLogBubble>
	);
};

export default MessageLog;
