import ReactTimeAgo from "react-time-ago";
import { Tooltip } from "react-tooltip";
import { TimestampContainer, TimestampDiv } from "./Timestamp.styled";

const Timestamp = ({ timestamp }: { timestamp: string }): JSX.Element => {
	return (
		<TimestampContainer>
			<TimestampDiv>
				<ReactTimeAgo
					date={new Date(timestamp)}
					locale="en-US"
					data-tooltip-id="my-tooltip"
					data-tooltip-content={new Date(timestamp).toLocaleString()}
					data-tooltip-place="top"
					tooltip={false}
				/>
				<Tooltip id="my-tooltip" />
			</TimestampDiv>
		</TimestampContainer>
	);
};

export default Timestamp;
