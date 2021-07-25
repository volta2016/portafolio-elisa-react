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
						<Button
							link={url}
							tipo="link"
							role="link"
							target="_blank"
							rel="noreferrer"
						>
							VER PROYECTO
						</Button>
						<Button
							link={repo}
							tipo="link"
							role="link"
							target="_blank"
							rel="noreferrer"
							outline="true"
						>
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
