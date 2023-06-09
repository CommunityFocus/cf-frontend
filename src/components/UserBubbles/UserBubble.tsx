const UserBubble = (props: { user: string }) => {
	const { user } = props;
	return (
		<div>
			<p>{user}</p>
		</div>
	);
};

export default UserBubble;
