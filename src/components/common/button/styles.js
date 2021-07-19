import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const ButtonContainer = styled(Link)`
	cursor: pointer;
	height: 49px;
	min-width: 165px;
	color: ${({ theme }) => theme.colors.primary.dark};
	border-radius: 90px;
	border: 2px solid ${({ theme }) => theme.colors.primary.dark};
	background: ${({ theme }) => theme.colors.secondary.secondone};
	box-shadow: -4px 4px 14px rgba(0, 0, 0, 0.25);
	text-transform: uppercase;
	font-size: ${({ theme }) => theme.sizeFont.sm};
	font-weight: bold;
	padding: 12px 24px;
	text-decoration: none;
	transition: 0.3s;
	display: flex;
	align-items: center;
	&:hover {
		background: ${({ theme }) => theme.colors.secondary.secondtwo};
	}
	${(props) =>
		props.outline &&
		css`
			background: ${({ theme }) => theme.colors.primary.trans};
			&:hover {
				background: ${({ theme }) => theme.colors.gray.light};
			}
			& svg {
				margin-right: 0.5rem;
			}
		`}
	${(props) =>
		props.send &&
		css`
			text-align: center;
			display: block;
		`}
`;
