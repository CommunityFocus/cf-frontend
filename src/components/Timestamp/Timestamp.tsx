import formatTimestamp from "../../helpers/formatTimestamp";
import StyledTimestamp from "./Timestamp.styled";

interface TimestampProps {
	timestamp: number;
	color: string;
}

const Timestamp = (props: TimestampProps): JSX.Element => {
	const { timestamp, color } = props;
	return (
		<StyledTimestamp color={color}>
			{formatTimestamp(timestamp)}
		</StyledTimestamp>
	);
};

export default Timestamp;
