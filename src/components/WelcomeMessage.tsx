type WelcomeMessageProps = {
	name: string;
};

const WelcomeMessage = ({ name }: WelcomeMessageProps): JSX.Element => {
	return <span>Hello, {name}!</span>;
};

export default WelcomeMessage;
