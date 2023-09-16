import { useContext, useEffect } from "react";
import { PiEraserBold } from "react-icons/pi";
import { ThemeContext } from "styled-components";
import { PomoCounterContainer, PomoCounterText } from "./PomoCounter.styled";
import updatePomoCounter from "../../helpers/updatePomoCount";
import { roomName } from "../../../common/common";
import { theme } from "../../../common/theme";

interface PomoCounterProps {
	workSessions: number;
	breakSessions: number;
	setWorkSessions: React.Dispatch<React.SetStateAction<number>>;
	setBreakSessions: React.Dispatch<React.SetStateAction<number>>;
}

const PomoCounter = (props: PomoCounterProps): JSX.Element => {
	const { workSessions, breakSessions, setWorkSessions, setBreakSessions } =
		props;

	// theme
	const { themeGroup } = useContext(ThemeContext);

	const { workGrey } = theme[themeGroup as keyof typeof theme];

	useEffect(() => {
		window.addEventListener("storage", () => {
			setWorkSessions(
				Number(
					JSON.parse(localStorage.getItem(roomName) || "{}")
						.workSessions
				) || 0
			);
			setBreakSessions(
				Number(
					JSON.parse(localStorage.getItem(roomName) || "{}")
						.breakSessions
				) || 0
			);
		});
	}, []);
	return (
		<PomoCounterContainer color={workGrey}>
			<PomoCounterText color={workGrey}>
				<PiEraserBold
					onClick={(): void =>
						updatePomoCounter({
							roomName,
							updatedPomoCount: 0,
							isBreakCounter: false,
							setWorkSessions,
							setBreakSessions,
						})
					}
				/>
				# of work sessions {workSessions}
			</PomoCounterText>
			<PomoCounterText color={workGrey}>
				<PiEraserBold
					onClick={(): void => {
						updatePomoCounter({
							roomName,
							updatedPomoCount: 0,
							isBreakCounter: true,
							setWorkSessions,
							setBreakSessions,
						});
					}}
				/>
				# of breaks sessions {breakSessions}
			</PomoCounterText>
		</PomoCounterContainer>
	);
};

export default PomoCounter;
