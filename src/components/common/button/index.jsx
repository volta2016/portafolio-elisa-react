import React from "react";
import { ButtonContainer, ButtonSubmit } from "./styles";

const Button = ({ children, link, tipo, ...props }) => {
	return (
		<>
			{tipo === "link" ? (
				<ButtonContainer to={link} {...props}>
					{children}
				</ButtonContainer>
			) : (
				<ButtonSubmit>{children}</ButtonSubmit>
			)}
		</>
	);
};

export default Button;
