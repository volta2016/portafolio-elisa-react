import React from "react";
import { ButtonContainer } from "./styles";

const Button = ({ content, ...prosp }) => (
	<ButtonContainer {...prosp}>{content}</ButtonContainer>
);

export default Button;
