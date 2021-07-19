import React from "react";
import TitleH1 from "../common/Title/TitleH1";
import Paragraph from "../common/paragraph";
import Socials from "./Socials";
import { data } from "../../data";
import { Col } from "./styles";

const HeroInformation = () => (
	<Col>
		<TitleH1 greetings="Hola a todos!" name="Soy Elisa"></TitleH1>
		<Paragraph>
			Una Frontend Developer que le encanta implementar diseños<br></br> que
			inspiran y atraen a las personas.
		</Paragraph>
		<Socials redes={data.redes} />
	</Col>
);

export default HeroInformation;
