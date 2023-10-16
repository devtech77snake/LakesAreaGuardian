import React from "react";

const Nopage = () => {
	return (
		<div className="bg-danger bg-opacity-75 container text-center align-middle text-white">
			<div className="row">
				<div className="align-self-center col-10 mx-auto text-center text-title">
					<h1>Error</h1>
					<h1 className="display-3">404</h1>
					<h2>The page not found</h2>
					<h3>
						the requested URL <span className="text-warning">{window.location.pathname}</span> was not found
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Nopage;
