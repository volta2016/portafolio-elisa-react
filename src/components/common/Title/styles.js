import styled, { css } from "styled-components";

export const TitleH1 = styled.h1`
	color: ${({ theme }) => theme.colors.primary.dark};
`;

export const TitleSpan = styled.span`
	font-size: ${({ theme }) => theme.sizeFont.xl};
	${(props) =>
		props.greetings &&
		css`
			font-size: ;
		`}
`;

export const TitleContainer = styled.h2``;
