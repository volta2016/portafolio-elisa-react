import React from "react";
import Phone from "../icons/Phone";
import Email from "../icons/Email";
import Instagram from "../icons/Instagram";
import Twitter from "../icons/Twitter";
import { SocialNetwork, LinkSocial } from "./styles";

export default function Socials({ redes }) {
	const redesEnables = [
		{ name: "phone", component: <Phone /> },
		{ name: "email", component: <Email /> },
		{ name: "instagram", component: <Instagram /> },
		{ name: "twitter", component: <Twitter /> },
	];
	// console.log(redesEnables);
	return (
		<SocialNetwork>
			{redes.map((social, index) => (
				<LinkSocial footer key={index} to="https://voltauxui.cl/">
					{redesEnables.find((red) => red.name === social.name).component}
				</LinkSocial>
			))}
		</SocialNetwork>
	);
}
