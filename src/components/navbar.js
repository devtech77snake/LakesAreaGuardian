import React, { useState, useEffect } from "react";

const Navbar = () => {
	const [navbarColor, setNavbarColor] = useState("darkred");

	useEffect(() => {
		const changeNavbarColor = () => {
			if (window.scrollY == 0) {
				setNavbarColor("darkred");
			} else {
				setNavbarColor("rgba(33,33,33,1)");
			}
		};
		window.addEventListener("scroll", changeNavbarColor);
	}, [window.scroll]);

	return (
		<>
			<nav
				id="navbar"
				className="navbar navbar-expand-md fixed-top"
				style={{ backgroundColor: `${navbarColor}`, transition: "background-color 0.5s ease" }}
			>
				<div className="container-fluid">
					<a className="navbar-brand text-white" href="/">
						<img src="./image/logo.png" alt="Logo img" width={40} /> &nbsp; LakesAreaGuardian
					</a>
					<button
						className="navbar-toggler bg-white"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarTogglerDemo02"
						aria-controls="navbarTogglerDemo02"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
						<ul className="navbar-nav me-0 ms-auto float-end">
							<li className="nav-item">
								<a className="nav-link text-white" href="/">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-white" href="/privacy_policy">
									Privacy Policy
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
