import { TooltipContainer, UserBubbleStyled } from "./UserBubble.styled";

const UserBubble = (props: { user: string }): JSX.Element => {
	const { user } = props;
	return (
		<TooltipContainer>
			<UserBubbleStyled
				$borderColor="brown"
				data-tooltip-id="my-tooltip"
				data-tooltip-content={user}
				data-tooltip-place="top"
			>
				{user[0]
					.toUpperCase()
					.concat(user[user.length - 1].toUpperCase())}
			</UserBubbleStyled>
		</TooltipContainer>
	);
};

export default UserBubble;
