import { useEffect, useRef } from "react";
import UpdateLog, { IUpdateLog } from "./UpdateLog";
import { PositionDiv, UpdateLogContainer } from "./UpdateLog.styled";

export type IUpdateLogs = Array<IUpdateLog>;

const UpdateLogs = ({ logs }: { logs: IUpdateLogs }): JSX.Element => {
	const messagesEndRef = useRef<HTMLDivElement>(null);

	const scrollToBottom = (): void => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [logs]);

	return (
		<PositionDiv>
			<UpdateLogContainer>
				{logs.map((log) => (
					<UpdateLog
						message={log.message}
						user={log.user}
						time={log.time}
						key={crypto.randomUUID()}
					/>
				))}
				<div ref={messagesEndRef} />
			</UpdateLogContainer>
		</PositionDiv>
	);
};

export default UpdateLogs;
