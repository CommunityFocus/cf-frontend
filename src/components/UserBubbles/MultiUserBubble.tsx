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
				data-tooltip-id="my-tooltip"
				data-tooltip-html={users.join("<br />")}
				data-tooltip-place="top"
				$size={size}
			>
				{`${users.length}+`}
			</UserBubbleStyled>
		</TooltipContainer>
	);
};

export default MultiUserBubble;
