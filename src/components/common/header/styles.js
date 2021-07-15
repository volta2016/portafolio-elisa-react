import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
	padding: 2rem 0;
`;

export const LogoLink = styled(Link)`
	cursor: pointer;
	text-decoration: none;
	color: ${({ theme }) => theme.colors.primary.dark};
	display: flex;
	align-items: center;
	transition: transform ease 0.3s;
	&:hover {
		transform: scale(1.1);
	}
`;

export const TitleImportant = styled.h1`
	display: inline-block;
	font-size: ${({ theme }) => theme.sizeFont.md};
	margin: 0;
`;

export const LogoImg = styled.img`
	height: 39px;

	margin-right: 1rem;
`;

export const NavList = styled.ul`
	text-transform: uppercase;
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
`;

export const NavItem = styled.li`
	font-size: ${({ theme }) => theme.sizeFont.sm};
	color: ${({ theme }) => theme.colors.primary.main};
	font-weight: bold;
	padding: 0 2rem;
	transition: 0.3s;
	cursor: pointer;
	&:hover,
	&:active {
		background-color: transparent;
		color: ${({ theme }) => theme.colors.primary.dark};
	}
`;

// export const LogoImg = styled(Link)`
// 	text-transform: uppercase;
// 	font-size: ${({ theme }) => theme.sizeFont.sm};
//
// 	color: ${({ theme }) => theme.colors.gray.main};
// `;
