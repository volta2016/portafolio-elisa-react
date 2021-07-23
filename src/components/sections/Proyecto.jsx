import React from "react";
import TitleHtwo from "../common/Title/TitleH2";
import Paragraph from "../common/paragraph";
import Button from "../common/button";
import Github from "../icons/GitHub";

import TestimonialCard from "./TestimonialCard";
import {
	ContainerProyects,
	ProyectDescription,
	ProyectImage,
	ImagePro,
	Contain,
} from "./styles";

const Proyecto = ({ proyect }) => {
	const { name, description, url, image, testimonial, repo } = proyect;
	return (
		<ContainerProyects>
			<Contain pro>
				<ProyectImage>
					<ImagePro src={image} alt={name} />
				</ProyectImage>
				<ProyectDescription>
					<TitleHtwo proyect>{name}</TitleHtwo>
					<Paragraph proyect>{description}</Paragraph>
					<Contain>
						<Button tipo="link" link={url}>
							VER PROYECTO
						</Button>
						<Button tipo="link" outline="true" link={repo}>
							<Github /> VER CÓDIGO
						</Button>
					</Contain>
				</ProyectDescription>
			</Contain>
			<TestimonialCard testimonial={testimonial} />
		</ContainerProyects>
	);
};

export default Proyecto;
