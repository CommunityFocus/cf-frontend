import { TooltipContainer, UserBubbleStyled } from "./UserBubble.styled";

interface UserBubbleProps {
	user: string;
	size: number;
}

const UserBubble = (props: UserBubbleProps): JSX.Element => {
	const { user, size } = props;

	return (
		<TooltipContainer>
			<UserBubbleStyled
				$borderColor="brown"
				data-tooltip-id="my-tooltip"
				data-tooltip-content={user}
				data-tooltip-place="top"
				$size={size}
			>
				{(user &&
					user.length > 0 &&
					user[0]
						?.toUpperCase()
						.concat(user[user.length - 1]?.toUpperCase())) ||
					Math.random().toString(36).substring(2, 4).toUpperCase()}
			</UserBubbleStyled>
		</TooltipContainer>
	);
};

export default UserBubble;
