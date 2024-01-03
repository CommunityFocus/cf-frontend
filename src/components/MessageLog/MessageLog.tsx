import ReactTimeAgo from "react-time-ago";

import {
	MessageDateDiv,
	MessageLogCenterDiv,
	MessageLogDate,
	MessageLogMessage,
	StyledMessageLogBubble,
} from "./MessageLog.styled";
import UserBubble from "../UserBubbles/UserBubble";

interface MessageLogProps {
	message: string;
	date: Date;
	userName: string;
}

const MessageLog = ({
	message,
	date,
	userName,
}: MessageLogProps): JSX.Element => {
	return (
		<StyledMessageLogBubble>
			<UserBubble
				user={userName}
				key={crypto.getRandomValues(new Uint32Array(1))[0]}
				size={15}
			/>
			<MessageLogMessage>{message}</MessageLogMessage>
			<MessageDateDiv>
				<MessageLogCenterDiv>
					<MessageLogDate>
						{new Date(date).toLocaleTimeString("en-US", {
							hour: "numeric",
							minute: "numeric",
						})}

						{" | "}
						<ReactTimeAgo
							date={Date.parse(`${date}`)}
							locale="en-US"
						/>
					</MessageLogDate>
				</MessageLogCenterDiv>
			</MessageDateDiv>
		</StyledMessageLogBubble>
	);
};

export default MessageLog;
