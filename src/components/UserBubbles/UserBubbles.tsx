import MultiUserBubble from "./MultiUserBubble";
import UserBubble from "./UserBubble";
import { UserBubblesContainer } from "./UserBubble.styled";

const UserBubbles = (props: { userListInRoom: string[] }): JSX.Element => {
	const { userListInRoom } = props;

	return (
		<UserBubblesContainer>
			{/* {userListInRoom.map((user: string) => (
				<UserBubble user={user} key={user} />
			))} */}

			{/* if there are less than 7, show all otherwise dont render the user bubble, but show an extra bubble with the number not shown as the user */}
			{userListInRoom.length < 7 ? (
				userListInRoom.map((user: string) => (
					<UserBubble user={user} key={user} />
				))
			) : (
				<>
					{userListInRoom.slice(0, 6).map((user: string) => (
						<UserBubble user={user} key={user} />
					))}
					<MultiUserBubble users={userListInRoom.slice(6)} />
				</>
			)}
		</UserBubblesContainer>
	);
};

export default UserBubbles;
