import styled from "styled-components";

export const PomoCounterPosition = styled.div`
	position: absolute;
	// top right corner
	top: 90px;
	right: 25px;
`;

export const PomoCounterContainer = styled.div<{ color: string }>`
	border: 1px solid ${(props): string => props.color};
	border-radius: 20px;
	padding: 10px;
`;

export const PomoCounterText = styled.p<{ color: string }>`
	color: ${(props): string => props.color};
`;
