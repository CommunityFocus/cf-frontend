import { FiEdit } from "react-icons/fi";
import ReactGA from "react-ga4";
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
		<StyledText
			color={color}
			onClick={(): void => {
				onClick();

				// react ga
				ReactGA.event({
					category: "Welcome Message",
					action: "Click",
					label: "Edit Name",
				});
			}}
		>
			Hello, {name}! <FiEdit />
		</StyledText>
	);
};

export default WelcomeMessage;
