import React from 'react';

export default function TreeNav() {
	return (
		<div className="col-2">
			<nav id="navbar-example3" className="navbar navbar-dark bg-dark">
				<button className="navbar-brand">TreeNav</button>
				<nav className="nav nav-pills flex-column">
					<button className="nav-link">Docs</button>
					<nav className="nav nav-pills flex-column">
						<button className="nav-link ml-3 my-1">Desktop</button>
						<a className="nav-link ml-3 my-1">Item</a>
					</nav>
					<a className="nav-link">Item 2</a>
					<a className="nav-link">Item 3</a>
					<nav className="nav nav-pills flex-column">
						<a className="nav-link ml-3 my-1">Item 3-1</a>
						<a className="nav-link ml-3 my-1">Item 3-2</a>
					</nav>
				</nav>
			</nav>
		</div>
	);
}
