import React from "react";
const Jumbotron = () => {
	return (
		<div className="jumbotron container text-center pt-5 my-5">
			<div className="row">
				<div className="col-sm">
					<h1 className="display-4">Hello, world!</h1>
					<p className="lead">
						This is a simple hero unit, a simple jumbotron-style
						component for calling extra attention to featured
						content or information.
					</p>
					<p>
						It uses utility classes for typography and spacing to
						space content out within the larger container.
					</p>
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Learn more
					</a>
				</div>
			</div>
		</div>
	);
};

export default Jumbotron;
