import React from "react";
import Proyecto from "../sections/Proyecto";
import { Container } from "../../styles/styledCommons";

const ListProyect = ({ proyects }) => {
	return (
		<Container id="proyect">
			{proyects.map((proyect, index) => (
				<Proyecto key={index} proyect={proyect} />
			))}
		</Container>
	);
};

export default ListProyect;
