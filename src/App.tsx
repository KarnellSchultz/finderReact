import React, { useState } from 'react';
import Nav from './Nav';
import Breadcrumb from './Breadcrumb';
import TreeNav from './TreeNav';
import Main from './Main';
import Toggle from './Toggle';

const App: React.FC = () => {
	const initialState = [
		{ type: 'folder', name: 'firstFolder', parent: 'root', child: '' },
	];

	const [files, setFiles] = useState(initialState);

	const handleCreateNewFolder = (
		e: React.MouseEvent<HTMLButtonElement>,
	): void => {
		const newFile = {
			type: 'folder',
			name: 'firstFolder',
			parent: 'root',
			child: '',
		};
		e.preventDefault();
		console.log(files);
		setFiles([...files, newFile]);
	};

	return (
		<div className="App container bg-light shadow p-3 mb-5 bg-white rounded">
			<div className="jumbotron bg-secondary border border-white ">
				<div className="row bg-dark">
					<Nav handleCreateNewFolder={handleCreateNewFolder} />
				</div>
				<div className="row bg-white">
					<Breadcrumb />
				</div>
				<div className="row bg-light">
					<TreeNav />
					<Main files={files} />
				</div>
				<Toggle>
					{({ on, toggle }) => {
						return (
							<>
								{on && <h1>YO</h1>}
								<button onClick={toggle}> HELLO </button>
							</>
						);
					}}
				</Toggle>
			</div>
		</div>
	);
};

export default App;
