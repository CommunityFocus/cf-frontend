import styled from "styled-components";

export const ContributorsWidgetContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const ContributorsTitle = styled.h2<{ color: string }>`
	color: ${({ color }): string => color};
	font-family: monospace;
	font-size: 20px;
	text-align: center;
	max-width: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ContributorsListContainer = styled.div`
	display: flex;

	justify-content: center;
	align-items: center;
	flex-direction: row;
	height: 200px;
	width: 200px;
	overflow-x: scroll;

	flex-wrap: wrap;

	// hide scrollbar
	::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
`;

export const ContributorsListItem = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: 5px;
	cursor: pointer;

	width: 100%;
`;

export const ContributorsWidgetPosition = styled.div`
	position: absolute;
	top: 35%;
	right: 5px;

	@media (max-width: 991px), (max-height: 520px) {
		display: none;
	}
`;

export const ContributorImg = styled.img`
	width: 25px;
	height: 25px;
	border-radius: 50%;
	margin: 5px;
`;

export const ContributorName = styled.span<{ color: string }>`
	color: ${({ color }): string => color};
	font-family: monospace;
	font-size: 13px;
	text-align: center;
`;

export const StyledList = styled.ul<{ color: string }>`
	color: ${({ color }): string => color};
	font-family: monospace;
	font-size: 13px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 5px;
`;

export const ContributionGraphLinks = styled.p<{ color: string }>`
	color: ${({ color }): string => color};
	font-family: monospace;
	font-size: 13px;
	text-align: center;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 5px;
`;
