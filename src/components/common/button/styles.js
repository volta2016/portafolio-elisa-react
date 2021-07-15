import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const ButtonContainer = styled(Link)`
	height: 49px;
	max-width: 250px;
	cursor: pointer;
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
	&:hover {
		background: ${({ theme }) => theme.colors.secondary.secondtwo};
	}

	${(props) =>
		props.outline &&
		css`
			background: ${({ theme }) => theme.colors.gray.main};
			&:hover {
				background: ${({ theme }) => theme.colors.gray.light};
			}
		`}
`;
