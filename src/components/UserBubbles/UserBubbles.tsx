import UserBubble from "./UserBubble";

const UserBubbles = (props: { userListInRoom: string[] }): JSX.Element => {
	const { userListInRoom } = props;

	return (
		<>
			{userListInRoom.map((user: string) => (
				<UserBubble user={user} />
			))}
		</>
	);
};

export default UserBubbles;
