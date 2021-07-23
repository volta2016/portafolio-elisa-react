import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

export const SectionPreProyect = styled.section`
	max-width: 900px;
	margin: auto;
	padding: 6.25rem 0;
`;

const bounceAnimation = keyframes`
 0% { transform: translateY(0); }
 50% { transform: translateY(-20px); }
 100% { transform: translateY(0); }
`;

export const ArrowDown = styled(Link)`
	margin-top: 2rem;
	display: block;
	text-align: center;
	cursor: pointer;
	animation-duration: 1s;
	animation-iteration-count: infinite;
	animation-name: ${bounceAnimation};
	animation-timing-function: linear;
`;

// Proyects

export const ContainerProyects = styled.article`
	@media (min-width: 768px) {
		&:nth-child(odd) div > div {
			order: 2;
		}
	}
`;

export const Contain = styled.div`
	@media (min-width: 769px) {
		display: flex;
		align-items: center;
		gap: 1rem;
		${(props) =>
			props.pro &&
			css`
				gap: 1.5rem;
				padding: 8rem 0;
			`}
		${(props) =>
			props.contact &&
			css`
				display: flex;
				flex-direction: column;
				gap: 1rem;
				max-width: 540px;
				margin: auto;
			`}
	}
`;

export const ProyectDescription = styled.div`
	@media (min-width: 768px) {
		flex: 1;
	}
`;

export const ProyectImage = styled.div`
	text-align: center;
	@media (min-width: 768px) {
		flex: 1;
    article &:nth-child(odd) {
      order: 2;
    }
	}
	@media (max-width: 576px) {
		margin-bottom: 2.5rem 
	}
}
`;
export const ImagePro = styled.img`
	max-inline-size: 100%;
`;

// testimonial

export const TestimonialsCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: rgba(255, 255, 255, 0.2);
	border-style: outset none none outset;
	border-radius: 24px;
	padding: 80px 15px 80px 15px;
	gap: 24px;
	margin: 80px 0;
	@media (min-width: 768px) {
		padding: 5rem;
	}
	@media (max-width: 576px) {
		padding: 24px;
	}
`;

export const Profile = styled.img`
	width: 80px;
`;

// Contact form

export const Form = styled.form`
	width: 100%;
	max-width: 544px;
	margin: auto;
`;

export const FormGroup = styled.div``;

export const Label = styled.label`
	font-weight: 700;
	font-size: ${({ theme }) => theme.sizeFont.md};
	margin: 0 0 0.5rem 1rem;
	display: block;
`;

export const Input = styled.input`
	width: 100%;
	background: ${({ theme }) => theme.colors.white};
	border: 1px solid #858c94;
	border-radius: 8px;
	padding: 0.75rem 1rem;
	font-size: ${({ theme }) => theme.sizeFont.md};
	margin-bottom: 1rem;
`;

export const Message = styled.textarea`
	height: 134px;
	width: 100%;
	font-size: ${({ theme }) => theme.sizeFont.md};
	padding: 0.75rem 1rem;
	border: 1px solid #858c94;
	border-radius: 8px;
	margin-bottom: 1rem;
	font-family: inherit;
`;

export const Submit = styled.button``;
