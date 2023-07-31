import MessageLog from "./MessageLog";
import MessageLogContainer from "./MessageLogContainer";

interface MessageLogsProps {
	messageList: { message: string; userName: string; date: Date }[];
}

const MessageLogs = ({ messageList }: MessageLogsProps): JSX.Element | null => {
	return messageList.length > 0 ? (
		<MessageLogContainer>
			{messageList.map((msg) => (
				<MessageLog
					message={msg.message}
					date={msg.date}
					key={crypto.randomUUID()}
				/>
			))}
		</MessageLogContainer>
	) : null;
};

export default MessageLogs;
