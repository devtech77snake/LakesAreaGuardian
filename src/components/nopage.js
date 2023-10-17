import React from "react";
import { Link } from "react-router-dom";

const Nopage = () => {
	return (
		<div
			className="container text-center"
			style={{
				position: "absolute",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				width: "40%",
				height: "40%",
				backgroundColor: "#f6f6f6",
			}}
		>
			<div>
				<h1 style={{ fontFamily: "Arial", fontSize: "165px" }}>404</h1>
			</div>
			<div>
				<h3>The page you requested could not found.</h3>
			</div>
			<div>
				<Link to={"/"}>Go to Homepage.</Link>
			</div>
		</div>
	);
};

export default Nopage;
