import React from "react";
import { ButtonContainer } from "./styles";

const Button = ({ children, link, ...prosp }) => (
	<ButtonContainer to={link} {...prosp}>
		{children}
	</ButtonContainer>
);

export default Button;
