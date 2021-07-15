import React from "react";

import { TitleH1, TitleSpan } from "./styles";

const Title = ({ greetings, name }) => (
	<TitleH1>
		<TitleSpan>{greetings}</TitleSpan>
		<TitleSpan>{name}</TitleSpan>
	</TitleH1>
);

export default Title;
