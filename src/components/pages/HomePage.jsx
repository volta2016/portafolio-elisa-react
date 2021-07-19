import React from "react";
import Hero from "../hero/";
import PreProyect from "../sections/PreProyect";
import ListProyect from "../sections/ListProyect";
import Contact from "../sections/Contact";
import Footer from "../common/footer/Footer";

import { data } from "../../data";

const HomePage = () => {
	return (
		<main>
			<Hero />
			<PreProyect />
			<ListProyect proyects={data.proyects} />
			<Contact />
		</main>
	);
};

export default HomePage;
