import styled, { css } from "styled-components";

export const ParagraphContainer = styled.p`
	color: ${({ theme }) => theme.colors.primary.dark};
	font-size: ${({ theme }) => theme.sizeFont.md};
	margin: 1.125rem 0;
	${(props) =>
		props.drop &&
		css`
			font-size: ${({ theme }) => theme.sizeFont.lg};
			text-align: center;
			font-weight: 700;
			margin-top: 1.5rem;
		`}
	${(props) =>
		props.proyect &&
		css`
			text-align: left;
			line-height: 26px;
			letter-spacing: 0.005px;
			@media (min-width: 766px) {
				max-width: 450px;
			}
		`}
		${(props) =>
		props.testimonial &&
		css`
			text-align: center;
			font-weight: 700;
			font-size: ${({ theme }) => theme.sizeFont.lg};
			opacity: 0.5;
			margin-top: 0.5rem;
			letter-spacing: 0.005px;
			@media (max-width: 576px) {
				font-size: ${({ theme }) => theme.sizeFont.xs};
			}
		`}
`;
