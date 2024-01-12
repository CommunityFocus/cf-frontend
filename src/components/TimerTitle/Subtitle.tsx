import { StyledSubtitle } from "./TimerTitle.styled";

interface SubtitleProps {
	isLoaded: boolean;
	workGrey: string;
	isBreak: boolean;
}

const Subtitle = (props: SubtitleProps): JSX.Element => {
	const { isLoaded, workGrey, isBreak } = props;
	return (
		<StyledSubtitle isLoaded={isLoaded} color={workGrey}>
			{isBreak ? "BREAK" : "WORK"}
		</StyledSubtitle>
	);
};

export default Subtitle;
