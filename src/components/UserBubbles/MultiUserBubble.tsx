import { Tooltip } from "react-tooltip";
import { TooltipContainer, UserBubbleStyled } from "./UserBubble.styled";

const MultiUserBubble = (props: {
	users: string[];
	size: number;
}): JSX.Element => {
	const { users, size } = props;
	return (
		<TooltipContainer>
			<UserBubbleStyled
				$borderColor="brown"
				data-tooltip-id="my-tooltip-multilin"
				data-tooltip-html={users.join("<br />")}
				data-tooltip-place="top"
				$size={size}
			>
				<Tooltip id="my-tooltip-multilin" />
				{`${users.length}+`}
			</UserBubbleStyled>
		</TooltipContainer>
	);
};

export default MultiUserBubble;
