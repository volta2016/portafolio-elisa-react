import styled, { css } from "styled-components";

export const TitleH1 = styled.h1`
	color: ${({ theme }) => theme.colors.primary.dark};
`;

export const TitleH2 = styled.h2`
	color: ${({ theme }) => theme.colors.primary.dark};
	font-size: ${({ theme }) => theme.sizeFont.lg2};
	font-weight: 300;
	text-align: center;
	line-height: 55.01px;
	max-width: 900px;
	margin: auto;
	${(props) =>
		props.proyect &&
		css`
			display: inline-block;
			color: ${({ theme }) => theme.colors.secondary.secondone};
			background: ${({ theme }) => theme.colors.primary.dark};
			font-weight: 300;
			padding: 0.5rem;
			box-shadow: -4px 4px 0px #fff;
			margin-inline-start: 4px;
			&.form {
				text-align: center;
				width: 100%;
			}
		`}
`;

export const TitleH3 = styled.h3`
	color: ${({ theme }) => theme.colors.primary.dark};
	font-size: ${({ theme }) => theme.sizeFont.lg2};
	font-weight: 700;
	text-align: center;
	line-height: 55.01px;
	margin: auto;
`;

export const TitleSpan = styled.span`
	font-size: ${({ theme }) => theme.sizeFont.xl};
	display: block;
	${(props) =>
		props.greetings &&
		css`
			font-size: ${({ theme }) => theme.sizeFont.xxl};
			margin-top: 3.313rem;
		`}
`;

export const TitleContainer = styled.h2``;
