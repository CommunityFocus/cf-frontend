import ReactTimeAgo from "react-time-ago";

import {
	MessageLogDate,
	MessageLogMessage,
	PaddingDiv,
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
		<>
			<MessageLogMessage>{message}</MessageLogMessage>
			<MessageLogDate>
				{new Date(date).toLocaleTimeString("en-US", {
					hour: "numeric",
					minute: "numeric",
				})}

				<PaddingDiv>
					{" | "}
					<ReactTimeAgo date={Date.parse(`${date}`)} locale="en-US" />
				</PaddingDiv>
			</MessageLogDate>
		</>
	);
};

export default MessageLog;
