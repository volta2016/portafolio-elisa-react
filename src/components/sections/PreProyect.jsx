import React from "react";
import TitleHtwo from "../common/Title/TitleH2";
import Arrow from "../icons/Arrow";
import Paragraph from "../common/paragraph";
import { data } from "../../data";
import { SectionPreProyect, ArrowDown } from "./styles";

let { info, preproyect } = data;

const PreProyect = () => (
	<SectionPreProyect id="hola">
		<TitleHtwo>{info}</TitleHtwo>
		<Paragraph drop>{preproyect}</Paragraph>
		<ArrowDown to="#">
			<Arrow />
		</ArrowDown>
	</SectionPreProyect>
);

export default PreProyect;
