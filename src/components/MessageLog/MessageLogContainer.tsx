import { useEffect, useRef } from "react";

import { StyledMessageLogContainer } from "./MessageLog.styled";

interface MessageLogContainerProps {
	children: React.ReactNode;
}

const MessageLogContainer = ({
	children,
}: MessageLogContainerProps): JSX.Element => {
	const messagesEndRef = useRef<HTMLDivElement>(null);

	const scrollToBottom = (): void => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [children]);
	return (
		<StyledMessageLogContainer>
			{children}
			<div ref={messagesEndRef} />
		</StyledMessageLogContainer>
	);
};

export default MessageLogContainer;
