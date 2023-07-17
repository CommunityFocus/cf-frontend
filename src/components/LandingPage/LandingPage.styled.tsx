import styled from "styled-components";

export const Title = styled.h1<{ color: string }>`
	color: ${({ color }): string => color};
	font-family: monospace;
	font-size: 50px;
`;

export const Center = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 90vh;
`;

export const Button = styled.button`
	border-radius: 2px
	text-align: center;
	font-size: 1.2rem;
	color: tomato;
`;
