import React from "react";

import Phone from "../icons/Phone";
import Email from "../icons/Email";
import Instagram from "../icons/Instagram";
import Twitter from "../icons/Twitter";
// import { SocialNetwork } from "./styles";

const rrssEnables = [
	{ name: "Phone", component: <Phone /> },
	{ name: "Email", component: <Email /> },
	{ name: "Instagram", component: <Instagram /> },
	{ name: "Twitter", component: <Twitter /> },
];

const SocialIcon = ({ redes }) => (
	<div>
		{redes.map((social, index) => (
			<ul key={index}>
				{rrssEnables.find((red) => red.name === social.name).component}
			</ul>
		))}
	</div>
);

export default SocialIcon;
