import styled, { css } from "styled-components";

export const Container = styled.div`
	margin: auto;
	max-width: 1200px;
	width: 100%;
	${(props) =>
		props.justify &&
		css`
			display: flex;
			justify-content: space-between;
			align-items: center;
		`}
	@media (max-width: 992px) {
		max-width: 960px;
	}
	@media (max-width: 768px) {
		max-width: 720px;
	}
	@media (max-width: 576px) {
		max-width: 540px;
		padding: 0 15px;
	}
`;
