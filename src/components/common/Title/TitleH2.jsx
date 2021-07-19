import React from "react";

import { TitleH2 } from "./styles";

const TitleHtwo = ({ children, ...props }) => (
	<TitleH2 {...props}>{children}</TitleH2>
);

export default TitleHtwo;
