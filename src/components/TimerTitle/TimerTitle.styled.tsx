import { FaRegEye } from "react-icons/fa";
import styled from "styled-components";

export const TitleEditButtonPosition = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
`;

export const TitleEditEmojiSize = styled.div<{
	color: string;
	isLoaded: boolean;
}>`
	font-size: 1.5rem;
	margin-left: 0.5rem;
	margin-top: 0.5rem;
	color: ${({ color }): string => color};
	display: ${({ isLoaded }): string => (isLoaded ? "block" : "none")};
`;

export const StyledEye = styled(FaRegEye)`
	margin-right: 0.5rem;
`;
