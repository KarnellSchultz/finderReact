import React from 'react';

export default function TreeNav() {
	return (
		<div className="col-2 mb-2">
			<nav className="navbar navbar-light bg-light">
				<button className="navbar-brand btn btn-info ">TreeNav</button>
				<nav className="nav nav-pills flex-column">
					<span className="badge badge-warning mt-2">Document</span>{' '}
					<nav className="nav nav-pills flex-column">
						<span className="badge badge-success mt-2 ">Success</span>
					</nav>
					<span className="badge badge-danger mt-2 ">Success</span>
					<span className="badge badge-dark mt-2">Success</span>
				</nav>
			</nav>
		</div>
	);
}
