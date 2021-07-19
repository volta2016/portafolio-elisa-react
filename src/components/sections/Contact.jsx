import React from "react";
import TitleH2 from "../common/Title/TitleH2";
import Paragraph from "../common/paragraph";
import Button from "../common/button";
import { Container } from "../../styles/styledCommons";
import {
	Contain,
	FormGroup,
	Form,
	Label,
	Input,
	Message,
	Submit,
} from "./styles";

const Contact = () => {
	return (
		<Container id="#contacto">
			<Contain form>
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
						<Button send type="submit">
							ENVIAR MENSAJE
						</Button>
					</FormGroup>
				</Form>
			</Contain>
		</Container>
	);
};

export default Contact;
