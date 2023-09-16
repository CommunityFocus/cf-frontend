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
				{user
					? user.slice(0, 3).toUpperCase()
					: Math.floor(Math.random() * 100)}
			</UserBubbleStyled>
		</TooltipContainer>
	);
};

export default UserBubble;
