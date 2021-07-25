import React from "react";
import Hero from "../hero/";
import PreProyect from "../sections/PreProyect";
import ListProyect from "../sections/ListProyect";
import Contact from "../sections/Contact";
import { data } from "../../data";
import { Helmet } from "react-helmet";

const HomePage = () => {
	return (
		<>
			<Helmet>
				<title>Portafolio Elisa</title>
				<meta
					name="Portafolio Elisa React js"
					content="elisa's portfolio in this project I used new technologies such as styled components, which allows me to style my components and at the same time define them. I was able to condition their values as we want and it is very dynamic to work with this library.
					I worked with the UI in figma built by the educational platform https://leonidasesteban.com/"
				/>
			</Helmet>
			<main>
				<Hero />
				<PreProyect />
				<ListProyect proyects={data.proyects} />
				<Contact />
			</main>
		</>
	);
};

export default HomePage;
