import React from "react";
import Routes from "./router/Routes";
import theme from "./theme/theme";
import GlobalStyled from "./styles/globalStyled";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
const App = () => (
	<ThemeProvider theme={theme}>
		<Helmet>
			<title>Portafolio Elisa</title>
			<meta
				name="Portafolio Elisa - React js"
				content="elisa's portfolio in this project I used new technologies such as styled components, which allows me to style my components and at the same time define them. I was able to condition their values as we want and it is very dynamic to work with this library.
					I worked with the UI in figma built by the educational platform [leonidasesteban.com](https://leonidasesteban.com/)"
			/>
		</Helmet>
		<GlobalStyled />
		<Routes />
	</ThemeProvider>
);

export default App;
