import React from 'react';

type Props = {
	handleCreateNewFolder: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Nav({ handleCreateNewFolder }: Props) {
	return (
		<div className="w-100">
			<nav className="navbar navbar-dark bg-dark ">
				<h3 className=" nav-item navbar-brand">NellNav</h3>
				<button
					onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
						return handleCreateNewFolder(e);
					}}
					className=" nav-item  btn btn-secondary">
					New Folder
				</button>
				<button className=" nav-item  btn btn-secondary">New File</button>
				<button className=" nav-item btn btn-secondary">Upload</button>
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
