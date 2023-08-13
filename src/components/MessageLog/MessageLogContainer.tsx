import { useEffect, useRef, useState } from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";
import {
	OverflowIndicatorTop,
	StyledMessageLogContainer,
} from "./MessageLog.styled";

interface MessageLogContainerProps {
	children: React.ReactNode;
}

const MessageLogContainer = ({
	children,
}: MessageLogContainerProps): JSX.Element => {
	const [showTopOverflow, setShowTopOverflow] = useState<boolean>(false);

	const messagesEndRef = useRef<HTMLDivElement>(null);
	const messageContainerRef = useRef<HTMLDivElement>(null);

	const scrollToBottom = (): void => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	const scrollToTop = (): void => {
		if (messageContainerRef.current) {
			messageContainerRef.current.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
	};

	const showTopOverflowIndicator = (): void => {
		if (messageContainerRef.current) {
			setShowTopOverflow(messageContainerRef.current.scrollTop > 0);
		}
	};

	const scrollIndicators = (): void => {
		showTopOverflowIndicator();
	};

	useEffect(() => {
		scrollToBottom();
	}, [children]);
	return (
		<StyledMessageLogContainer
			id="MessageLogContainer"
			onScroll={scrollIndicators}
			ref={messageContainerRef}
		>
			<OverflowIndicatorTop $visible={showTopOverflow}>
				<BsArrowUpCircleFill size={15} onClick={scrollToTop} />
			</OverflowIndicatorTop>
			{children}

			<div ref={messagesEndRef} />
		</StyledMessageLogContainer>
	);
};

export default MessageLogContainer;
