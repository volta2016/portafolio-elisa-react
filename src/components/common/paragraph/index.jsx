import React from "react";

const Paragraph = ({ children, props }) => {
	return <ParagraphContainer {...props}>{children}</ParagraphContainer>;
};

export default Paragraph;
