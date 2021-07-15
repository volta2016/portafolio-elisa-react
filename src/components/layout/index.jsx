import React from "react";

import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

const Layout = ({ children }) => (
	<>
		<Header /> {children}
		<Footer />
	</>
);

export default Layout;
