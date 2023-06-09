import UserBubble from "./UserBubble";
import { UserBubblesContainer } from "./UserBubble.styled";

const UserBubbles = (props: { userListInRoom: string[] }): JSX.Element => {
	const { userListInRoom } = props;

	return (
		<UserBubblesContainer>
			{userListInRoom.map((user: string) => (
				<UserBubble user={user} key={user} />
			))}
		</UserBubblesContainer>
	);
};

export default UserBubbles;
