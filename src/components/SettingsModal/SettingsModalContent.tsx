import ReactGA from "react-ga4";
import socket from "../Socket/socket";
import {
	StyledSettingsLine,
	StyledSettingsModalContainer,
	StyledTitle,
} from "./SettingsModalContent.styled";

interface SettingsModalContentProps {
	roomName: string;
	isPublicRoom: boolean;
}
const SettingsModalContent = (
	props: SettingsModalContentProps
): JSX.Element => {
	const { roomName, isPublicRoom } = props;

	return (
		<StyledSettingsModalContainer>
			<StyledTitle>Settings</StyledTitle>
			<StyledSettingsLine>
				<input
					type="checkbox"
					id="public-toggle"
					checked={isPublicRoom}
					onClick={(): void => {
						socket.emit("togglePublic", {
							roomName,
						});

						// react ga
						ReactGA.event({
							category: "Settings",
							action: "Toggle Public",
						});
					}}
				/>
				<span>
					Make Room Public? ( See{" "}
					<a href="/public-timers">Room List </a>
					here)
				</span>
			</StyledSettingsLine>
		</StyledSettingsModalContainer>
	);
};

export default SettingsModalContent;
