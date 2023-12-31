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
					// onClick={(): void => {
					// 	console.log("toggle public");
					// 	socket.emit("togglePublic", {
					// 		roomName,
					// 	});
					// }}

					onClick={(): void => {
						console.log("toggle public");
						socket.emit("togglePublic", {
							roomName,
						});
					}}
				/>
				<span>Public</span>
			</StyledSettingsLine>
		</StyledSettingsModalContainer>
	);
};

export default SettingsModalContent;
