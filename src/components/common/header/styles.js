import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
	background: linear-gradient(80deg, #fad7a1 0%, #e96d71 500%);
	position: sticky;
	top: 0;
	padding: 1rem 1rem;
	z-index: 1;
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
	@media (max-width: 912px) {
		display: none;
	}
`;

export const NavMenu = styled.li`
	list-style: none;
`;

export const NavItem = styled(HashLink)`
	font-size: ${({ theme }) => theme.sizeFont.sm};
	color: ${({ theme }) => theme.colors.primary.main};
	font-weight: bold;
	padding: 0 2rem;
	transition: 0.3s;
	cursor: pointer;
	text-decoration: none;
	&:hover,
	&:active {
		background-color: transparent;
		color: ${({ theme }) => theme.colors.primary.dark};
	}
`;

export const Descarga = styled.span`
	display: none;
	@media (min-width: 912px) {
		display: inline-block;
		margin-right: 0.25rem;
	}
`;
