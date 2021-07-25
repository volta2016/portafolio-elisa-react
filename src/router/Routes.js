import React from "react";
import Layout from "../components/layout/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../components/pages/HomePage";

const Routes = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={HomePage}></Route>
				</Switch>
			</Layout>
		</BrowserRouter>
	);
};

export default Routes;
