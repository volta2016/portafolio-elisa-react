import React from "react";
import { Link } from "react-router-dom";
import LogoPortafolio from "../../assets/maletin.svg";

const Logo = () => (
	<Link to="/">
		<img src={LogoPortafolio} alt="Portafolio logo" />
	</Link>
);

export default Logo;
