import styled from "styled-components";

export const StyledTimestamp = styled.h1<{ color: string }>`
	color: ${({ color }): string => color};
	font-size: 3rem;
`;

export const StyledBigCircle = styled.div`
	width: 200px;
	height: 200px;

	border-radius: 50%;
	margin: 20px;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledCircleHold = styled.div`
	position: absolute;
	left: 90px; /* calculate circle width / 2 - .square width / 2 */
	top: 90px; /* calculate circle height / 2 - .square height / 2 */
	/* transform: translate(-40%, -50%); */
`;

export const StyledCenterDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const StyledPillCenterDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	flex-wrap: wrap;
`;
