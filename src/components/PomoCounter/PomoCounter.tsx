import { useContext, useEffect } from "react";
import ReactGA from "react-ga4";
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
					data-tooltip-id="my-tooltip"
					data-tooltip-content="Clear the work session counter"
					data-tooltip-place="top"
					onClick={(): void => {
						updatePomoCounter({
							roomName,
							updatedPomoCount: 0,
							isBreakCounter: false,
							setWorkSessions,
							setBreakSessions,
						});

						// react ga
						ReactGA.event({
							category: "Pomo Counter",
							action: "Clear Work Counter",
						});
					}}
				/>
				<span
					data-tooltip-id="my-tooltip"
					data-tooltip-content="Number of work sessions you've completed"
					data-tooltip-place="top"
				>
					# of work sessions: {workSessions}
				</span>
			</PomoCounterText>
			<PomoCounterText color={workGrey}>
				<PiEraserBold
					data-tooltip-id="my-tooltip"
					data-tooltip-content="Clear the break session counter"
					data-tooltip-place="top"
					onClick={(): void => {
						updatePomoCounter({
							roomName,
							updatedPomoCount: 0,
							isBreakCounter: true,
							setWorkSessions,
							setBreakSessions,
						});

						// react ga
						ReactGA.event({
							category: "Pomo Counter",
							action: "Clear Break Counter",
						});
					}}
				/>
				<span
					data-tooltip-id="my-tooltip"
					data-tooltip-content="Number of break sessions you've completed"
					data-tooltip-place="top"
				>
					# of breaks sessions: {breakSessions}
				</span>
			</PomoCounterText>
		</PomoCounterContainer>
	);
};

export default PomoCounter;
