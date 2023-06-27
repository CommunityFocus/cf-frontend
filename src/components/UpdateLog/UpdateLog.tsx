import UserBubble from "../UserBubbles/UserBubble";
import Message from "./Message";
import { MessageContainer } from "./Message.styled";
import Timestamp from "./Timestamp";
import { LogContainer } from "./UpdateLog.styled";

export interface IUpdateLog {
	message: string;
	user: string;
	time: Date;
}

const UpdateLog = ({ message, user, time }: IUpdateLog): JSX.Element => {
	return (
		<LogContainer>
			<MessageContainer>
				<UserBubble user={user} key={user} size={20} />
				<Message message={message} user={user} />
			</MessageContainer>
			<Timestamp timestamp={time.toString()} />
		</LogContainer>
	);
};

export default UpdateLog;
