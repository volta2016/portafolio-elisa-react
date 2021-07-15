import React from "react";
import { Container } from "../../styles/styledCommons";
import { HeroContainer } from "./styles";
import HeroInformation from "./HeroInformation";

const Hero = () => {
	return (
		<Container>
			<HeroContainer>
				<HeroInformation />
			</HeroContainer>
		</Container>
	);
};

export default Hero;
