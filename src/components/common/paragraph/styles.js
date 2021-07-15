import styled, { css } from "styled-components";

export const ParagraphContainer = styled.p`
	color: ${({ theme }) => theme.colors.primary.dark};
	font-size: ${({ theme }) => theme.sizeFont.md};
	${(props) =>
		props.drop &&
		css`
			font-size: ${({ theme }) => theme.sizeFont.lg};
			text-align: center;
			font-weight: 700;
		`}
`;
