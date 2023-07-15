import formatTimestamp from "../../helpers/formatTimestamp";

const Timestamp = ({ timestamp }: { timestamp: number }): JSX.Element => {
	return (
		<div>
			<h2>{formatTimestamp(timestamp)}</h2>
		</div>
	);
};

export default Timestamp;
