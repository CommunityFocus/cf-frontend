import styled from "styled-components";

export const PomoCounterPosition = styled.div`
	position: absolute;
	// top right corner
	top: 90px;
	right: 25px;
	z-index: 1;

	@media (max-width: 970px), (max-height: 600px) {
		display: none;
	}
`;

export const PomoCounterContainer = styled.div<{ color: string }>`
	border: 1px solid ${(props): string => props.color};
	border-radius: 20px;
	padding: 10px;
`;

export const PomoCounterText = styled.p<{ color: string }>`
	color: ${(props): string => props.color};
`;
