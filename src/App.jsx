import React from "react";
import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./componets/Header";

function App() {
	return (
		<>
			<GlobalStyle />
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />}></Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
