const ConnectionState = ({
	isConnected,
}: {
	isConnected: boolean;
}): JSX.Element => {
	return <p>State: {`${isConnected}`}</p>;
};

export default ConnectionState;
