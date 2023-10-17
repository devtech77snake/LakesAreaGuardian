import React from "react";
import { BrowserRouter, Routes, Route, Navigate, HashRouter } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Layout from "./pages/index";
import Home from "./components/home";
import Privacy from "./components/privacy";

const App = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/privacy_policy" element={<Privacy />} />
				</Route>
				<Route path="*" element={<Navigate to={"/"}></Navigate>} />
			</Routes>
		</HashRouter>
	);
};

export default App;
