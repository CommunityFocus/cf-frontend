import { TooltipContainer, UserBubbleStyled } from "./UserBubble.styled";

const MultiUserBubble = (props: { users: string[] }): JSX.Element => {
	const { users } = props;
	return (
		<TooltipContainer>
			<UserBubbleStyled
				$borderColor="brown"
				data-tooltip-id="my-tooltip"
				data-tooltip-html={users.join("<br />")}
				data-tooltip-place="top"
			>
				{`${users.length}+`}
			</UserBubbleStyled>
		</TooltipContainer>
	);
};

export default MultiUserBubble;
