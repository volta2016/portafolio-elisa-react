import React from "react";
import LogoPortafolio from "../../../assets/maletin.svg";
import { LogoLink, LogoImg, TitleImportant } from "./styles";

const Logo = () => (
	<LogoLink to="/">
		<LogoImg src={LogoPortafolio} alt="Portafolio logo" />
		<TitleImportant>Portafolio Elisa</TitleImportant>
	</LogoLink>
);

export default Logo;
