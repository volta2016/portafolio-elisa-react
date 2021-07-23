import React from "react";

import { NavList, NavItem, NavMenu } from "./styles";
import { data } from "../../../data";

const NavBar = () => {
	let { menuItems } = data;
	return (
		<>
			<NavList>
				{menuItems.map((item, index) => (
					<NavMenu key={index}>
						<NavItem smooth to={item.path}>
							{item.name}
						</NavItem>
					</NavMenu>
				))}
			</NavList>
		</>
	);
};

export default NavBar;
