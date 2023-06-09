import { Tooltip } from "react-tooltip";
import { TooltipContainer, UserBubbleStyled } from "./UserBubble.styled";

const MultiUserBubble = (props: { users: string[] }) => {
	const { users } = props;
	// first and last character of user name
	return (
		<TooltipContainer>
			<UserBubbleStyled
				$borderColor="brown"
				data-tooltip-id="my-tooltip-multilin"
				data-tooltip-html={users.join("<br /><br />")}
				data-tooltip-place="top"
			>
				<Tooltip id="my-tooltip-multilin" />
				{`${users.length}+`}
			</UserBubbleStyled>
		</TooltipContainer>
	);
};

export default MultiUserBubble;
