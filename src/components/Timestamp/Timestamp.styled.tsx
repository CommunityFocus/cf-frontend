import styled from "styled-components";

export const StyledTimestamp = styled.h1<{ color: string }>`
	color: ${({ color }): string => color};
`;

export const StyledBigCircle = styled.div`
	width: 200px;
	height: 200px;

	border-radius: 50%;
	margin: 40px 40px 40px auto;
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
