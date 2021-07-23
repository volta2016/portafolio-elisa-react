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
	text-align: center;
	@media (max-width: 1112px) {
		flex-direction: column-reverse;
	}
	& > a {
		display: flex;
	}
	@media (max-width: 576px) {
		& > a {
			display: none;
		}
	}
`;

export const Copyright = styled.p`
	display: flex;
	align-items: center;
	font-weight: 400;
	text-align: center;
	& > svg {
		margin: 0 0.3rem;
	}
	@media (max-width: 576px) {
		flex-direction: column;
	}
`;

export const LinkPortfolio = styled(Link)`
	margin-left: 0.5rem;
	color: ${({ theme }) => theme.colors.secondary.secondone};
	font-size: ${({ theme }) => theme.sizeFont.sm};
`;
