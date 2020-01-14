import React from 'react';

export default function Nav() {
	return (
		<div className="w-100">
			<nav className="navbar   navbar-dark bg-dark ">
				<h3 className=" nav-item navbar-brand">NellNav</h3>

				<button className=" nav-item  btn btn-secondary">New Folder</button>
				<button className=" nav-item btn btn-secondary">Upload </button>

				<form className=" mr-2 d-flex justify-content-end nav-item form-inline">
					<input
						className=" form-control mr-sm-2"
						type="search"
						placeholder="Search"
						aria-label="Search"></input>
					<button
						className="btn btn-outline-success my-2 my-sm-0"
						type="submit">
						Search
					</button>
				</form>
			</nav>
		</div>
	);
}
