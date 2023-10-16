import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Layout from "./pages/index";
import Home from "./components/home";
import Privacy from "./components/privacy";
import Nopage from "./components/nopage";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/privacy_policy" element={<Privacy />} />
				</Route>
				<Route path="*" element={<Nopage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
