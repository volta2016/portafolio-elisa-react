import React from "react";
import { Container } from "../../../styles/styledCommons";
import { HeaderWrapper } from "./styles";
import Logo from "./Logo";
import NavBar from "./NavBar";
import Button from "../button";

const Header = () => {
	return (
		<HeaderWrapper>
			<Container justify>
				<Logo />
				<NavBar />
				<Button>descargar currículum</Button>
			</Container>
		</HeaderWrapper>
	);
};

export default Header;
