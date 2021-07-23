import React from "react";
import LogoPortafolio from "../../../assets/maletin.svg";
import { LogoLink, LogoImg, TitleImportant } from "./styles";

const Logo = ({ props }) => (
	<LogoLink to="/" {...props}>
		<LogoImg src={LogoPortafolio} alt="Portafolio logo" />
		<TitleImportant>Portafolio Elisa</TitleImportant>
	</LogoLink>
);

export default Logo;
