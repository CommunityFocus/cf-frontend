import { MessageDiv } from "./Message.styled";

const Message = ({
	message,
	user,
}: {
	message: string;
	user: string;
}): JSX.Element => {
	return (
		<MessageDiv>
			{user} {message}
		</MessageDiv>
	);
};

export default Message;
