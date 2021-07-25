import React from "react";
import { ButtonContainer, ButtonSubmit } from "./styles";

const Button = ({ children, link, tipo, ...props }) => {
	console.log(link);
	return (
		<>
			{tipo === "link" ? (
				<ButtonContainer href={link} {...props}>
					{children}
				</ButtonContainer>
			) : (
				<ButtonSubmit>{children}</ButtonSubmit>
			)}
		</>
	);
};

export default Button;
