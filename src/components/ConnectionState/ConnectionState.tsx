import { FooterText } from "../Footer/Footer.styled";
import StyledDiv from "./ConnectionState.styled";
import { ReactComponent as Connected } from "./connection/connected.svg";
import { ReactComponent as Disconnected } from "./connection/disconnected.svg";

const ConnectionState = ({
	isConnected,
}: {
	isConnected: boolean;
}): JSX.Element => {
	return (
		<FooterText>
			{isConnected ? (
				<StyledDiv
					color="green"
					data-tooltip-id="my-tooltip"
					data-tooltip-content="You are connected to the server! All good to go!"
					data-tooltip-place="top"
				>
					Connected
					<Connected />
				</StyledDiv>
			) : (
				<StyledDiv
					color="red"
					data-tooltip-id="my-tooltip"
					data-tooltip-content="Something went wrong! You are not connected to the server! Please try again later!"
					data-tooltip-place="top"
				>
					Disconnected
					<Disconnected />
				</StyledDiv>
			)}
		</FooterText>
	);
};

export default ConnectionState;
