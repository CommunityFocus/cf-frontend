import MultiUserBubble from "./MultiUserBubble";
import UserBubble from "./UserBubble";
import { UserBubblesContainer } from "./UserBubble.styled";

const UserBubbles = (props: { userListInRoom: string[] }): JSX.Element => {
	const { userListInRoom } = props;

	return (
		<UserBubblesContainer>
			{userListInRoom.length < 7 ? (
				userListInRoom.map((user: string) => (
					<UserBubble
						user={user}
						key={crypto.getRandomValues(new Uint32Array(1))[0]}
					/>
				))
			) : (
				<>
					{userListInRoom.slice(0, 6).map((user: string) => (
						<UserBubble
							user={user}
							key={crypto.getRandomValues(new Uint32Array(1))[0]}
						/>
					))}
					<MultiUserBubble users={userListInRoom.slice(6)} />
				</>
			)}
		</UserBubblesContainer>
	);
};

export default UserBubbles;
