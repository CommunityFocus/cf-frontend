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
				<StyledDiv>
					Connected
					<Connected />
				</StyledDiv>
			) : (
				<StyledDiv>
					Disconnected
					<Disconnected />
				</StyledDiv>
			)}
		</FooterText>
	);
};

export default ConnectionState;
