import React from "react";
import { Container } from "../../styles/styledCommons";
import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
	return (
		<Container>
			<Logo />
			<NavBar />
		</Container>
	);
};

export default Header;
