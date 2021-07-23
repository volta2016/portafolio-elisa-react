import React from "react";
import Heart from "../../icons/Heart";
import Socials from "../../hero/Socials";
import Logo from "../header/Logo";
import { data } from "../../../data";
import { FooterCopiright, Contain, Copyright, LinkPortfolio } from "./styles";

const Footer = () => {
	return (
		<FooterCopiright>
			<Contain>
				<Logo />
				<Copyright>
					Hecho con <Heart /> © Copyright {new Date().getFullYear()} - Todos los
					derechos reservados.{" "}
					<LinkPortfolio to="https://voltauxui.cl/">
						www.voltauxui.cl
					</LinkPortfolio>
				</Copyright>
				<Socials redes={data.redes} />
			</Contain>
		</FooterCopiright>
	);
};

export default Footer;
