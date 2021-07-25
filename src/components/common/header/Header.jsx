import React from "react";
import { Container } from "../../../styles/styledCommons";
import { HeaderWrapper, Descarga } from "./styles";
import Logo from "./Logo";
import NavBar from "./NavBar";
import Button from "../button";

const Header = () => {
	return (
		<HeaderWrapper>
			<Container justify>
				<Logo />
				<NavBar />
				<Button cv="true" tipo="link" link="/">
					<Descarga>descargar</Descarga>currículum
				</Button>
			</Container>
		</HeaderWrapper>
	);
};

export default Header;
