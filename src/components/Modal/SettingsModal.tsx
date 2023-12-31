import SettingsModalContent from "../SettingsModal/SettingsModalContent";

interface SettingModalProps {
	roomName: string;
	isPublicRoom: boolean;
}

const SettingsModal = (props: SettingModalProps): JSX.Element => {
	const { roomName, isPublicRoom } = props;

	return (
		<SettingsModalContent roomName={roomName} isPublicRoom={isPublicRoom} />
	);
};

export default SettingsModal;
