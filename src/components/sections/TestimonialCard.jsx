import React from "react";
import Paragraph from "../common/paragraph";
import TitleHThree from "../common/Title/TitleH3";
import { TestimonialsCard, Profile } from "./styles";

const TestimonialCard = ({ testimonial }) => {
	const { name, title, image, description } = testimonial;
	return (
		<TestimonialsCard>
			<Profile src={image} alt={name}></Profile>
			<TitleHThree>{description}</TitleHThree>
			<Paragraph testimonial>
				{name} / {title}
			</Paragraph>
		</TestimonialsCard>
	);
};

export default TestimonialCard;
