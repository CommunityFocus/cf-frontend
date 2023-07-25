import { FiEdit } from "react-icons/fi";
import StyledText from "./WelcomeMessage.styled";

type WelcomeMessageProps = {
	name: string;
	color: string;
	onClick: () => void;
};

const WelcomeMessage = ({
	name,
	color,
	onClick,
}: WelcomeMessageProps): JSX.Element => {
	return (
		<StyledText color={color} onClick={onClick}>
			Hello, {name}! <FiEdit />
		</StyledText>
	);
};

export default WelcomeMessage;
