import StyledText from "./WelcomeMessage.styled";

type WelcomeMessageProps = {
	name: string;
	color: string;
};

const WelcomeMessage = ({ name, color }: WelcomeMessageProps): JSX.Element => {
	return <StyledText color={color}>Hello, {name}!</StyledText>;
};

export default WelcomeMessage;
