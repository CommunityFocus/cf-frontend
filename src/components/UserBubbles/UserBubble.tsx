import { Tooltip } from "react-tooltip";
import { TooltipContainer, UserBubbleStyled } from "./UserBubble.styled";

const UserBubble = (props: { user: string; size: number }): JSX.Element => {
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
				<Tooltip id="my-tooltip" />
				{user[0]
					.toUpperCase()
					.concat(user[user.length - 1].toUpperCase())}
			</UserBubbleStyled>
		</TooltipContainer>
	);
};

export default UserBubble;
