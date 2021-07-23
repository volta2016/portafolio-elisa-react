import React from "react";
import TitleH2 from "../common/Title/TitleH2";
import Paragraph from "../common/paragraph";
import Button from "../common/button";
import { Container } from "../../styles/styledCommons";
import { Contain, Form, FormGroup, Label, Input, Message } from "./styles";

const Contact = () => {
	return (
		<Container id="contact">
			<Contain contact>
				<TitleH2 className="form" proyect>
					HABLEMOS
				</TitleH2>
				<Paragraph>
					Si está interesado en trabajar conmigo en su próximo proyecto, no dude
					en ponerse en contacto conmigo.
				</Paragraph>
				<Form>
					<FormGroup>
						<Label>Nombre completo</Label>
						<Input type="text" name="name" placeholder="Juan"></Input>
					</FormGroup>
					<FormGroup>
						<Label>Correo electrónico</Label>
						<Input
							type="email"
							name="email"
							placeholder="juan@gmail.com"
						></Input>
					</FormGroup>
					<FormGroup>
						<Label>Mensaje</Label>
						<Message
							type="email"
							name="message"
							placeholder="Mensaje"
						></Message>
						<Button type="submit">ENVIAR MENSAJE</Button>
					</FormGroup>
				</Form>
			</Contain>
		</Container>
	);
};

export default Contact;
