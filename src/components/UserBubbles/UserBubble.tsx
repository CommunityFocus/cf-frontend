import { UserBubbleStyled } from "./UserBubble.styled";

const randomColor = () => {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};

const UserBubble = (props: { user: string }) => {
	const { user } = props;
	// first and last character of user name
	return (
		<UserBubbleStyled $borderColor={randomColor()}>
			{user[0].toUpperCase().concat(user[user.length - 1].toUpperCase())}
		</UserBubbleStyled>
	);
};

export default UserBubble;
