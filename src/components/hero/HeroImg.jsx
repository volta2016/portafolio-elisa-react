import React from "react";
import { data } from "../../data";
import { HeroImage, Col } from "./styles";

let { name, image } = data;

const HeroImg = () => (
	<Col>
		<HeroImage src={image} alt={name} />
	</Col>
);

export default HeroImg;
