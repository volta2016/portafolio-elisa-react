import React from "react";
import { Container } from "../../styles/styledCommons";
import { HeroContainer } from "./styles";
import HeroInformation from "./HeroInformation";
import HeroImg from "./HeroImg";

const Hero = () => {
	return (
		<Container>
			<HeroContainer>
				<HeroInformation />
				<HeroImg />
			</HeroContainer>
		</Container>
	);
};

export default Hero;
