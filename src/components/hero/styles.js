import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroContainer = styled.div`
	display: flex;
	margin-top: 2.4rem;
`;

export const SocialNetwork = styled.div`
	display: flex;
	list-style: none;
`;

export const LinkSocial = styled(Link)`
	height: 44px;
	padding: 0.5rem;
	border-radius: 4px;
	background: ${({ theme }) => theme.colors.secondary.secondone};
	margin-right: 1rem;
	border: 2px solid #0f0a0a};
	align-items: center;
`;

export const Col = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
`;

export const HeroImage = styled.img`
	width: 100%;
	object-fit: contain;
	margin-block-start: -90px;
`;

// export const TitleHero
