import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterCopiright = styled.footer`
	margin-top: 3.625rem;
	padding: 2rem 1rem;
`;

export const Contain = styled.div`
	margin: auto;
	max-width: 1200px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Copyright = styled.p`
	display: flex;
	align-items: center;
	font-weight: 400;
	& > svg {
		margin: 0 0.3rem;
	}
`;

export const LinkPortfolio = styled(Link)`
	margin-left: 0.5rem;
	color: ${({ theme }) => theme.colors.secondary.secondone};
	font-size: ${({ theme }) => theme.sizeFont.sm};
`;
