import { useEffect, useRef, useState } from "react";
import { BsArrowDownCircleFill, BsArrowUpCircleFill } from "react-icons/bs";
import {
	OverflowIndicatorBottom,
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
	const [showBottomOverflow, setShowBottomOverflow] =
		useState<boolean>(false);

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
			setShowTopOverflow(messageContainerRef.current.scrollTop > 50);
		}
	};

	const showBottomOverflowIndicator = (): void => {
		if (messageContainerRef.current) {
			// returm true if the last message is not visible
			setShowBottomOverflow(
				messageContainerRef.current.scrollHeight -
					messageContainerRef.current.scrollTop -
					messageContainerRef.current.clientHeight >
					50
			);
		}
	};

	const scrollIndicators = (): void => {
		showTopOverflowIndicator();
		showBottomOverflowIndicator();
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
				<BsArrowUpCircleFill size={13.5} onClick={scrollToTop} />
			</OverflowIndicatorTop>
			{children}
			<div ref={messagesEndRef} />
			<OverflowIndicatorBottom $visible={showBottomOverflow}>
				<BsArrowDownCircleFill size={13.5} onClick={scrollToBottom} />
			</OverflowIndicatorBottom>
		</StyledMessageLogContainer>
	);
};

export default MessageLogContainer;
