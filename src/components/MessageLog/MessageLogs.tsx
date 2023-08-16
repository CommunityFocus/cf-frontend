import MessageLog from "./MessageLog";
import { StyledMessageLogChildren } from "./MessageLog.styled";
import MessageLogContainer from "./MessageLogContainer";

interface MessageLogsProps {
	messageList: { message: string; userName: string; date: Date }[];
}

const MessageLogs = ({ messageList }: MessageLogsProps): JSX.Element | null => {
	return messageList.length > 0 ? (
		<MessageLogContainer>
			<StyledMessageLogChildren>
				{messageList.map((msg) => (
					<MessageLog
						message={msg.message}
						date={msg.date}
						userName={msg.userName}
						key={crypto.randomUUID()}
					/>
				))}
			</StyledMessageLogChildren>
		</MessageLogContainer>
	) : null;
};

export default MessageLogs;
