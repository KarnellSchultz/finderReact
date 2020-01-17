import React, { useState } from 'react';
import Breadcrumb from './Breadcrumb';
import TreeNav from './TreeNav';
import MainContainer from './MainContainer';
import createNewFolder from './Utils/HelperFunctions';
import NavContainer from './NavContainer';

const App: React.FC = () => {
	const initialState = [
		{
			type: 'folder',
			name: 'Untitled Folder',
			parent: 'root',
			child: '',
			isEditing: false,
		},
	];

	const [files, setFiles] = useState(initialState);

	const handleCreateNewFolder = (
		e: React.MouseEvent<HTMLButtonElement>,
	): void => {
		const newFile = createNewFolder();
		e.preventDefault();
		console.log(files);
		setFiles([...files, newFile]);
	};
	const handleCreateNewFile = (
		e: React.MouseEvent<HTMLButtonElement>,
	): void => {
		const newFile = {
			type: 'folder',
			name: 'firstFolder',
			parent: 'root',
			child: '',
			isEditing: false,
		};
		e.preventDefault();
		console.log(files);
		setFiles([...files, newFile]);
	};

	const handleFolderClick = (e: React.MouseEvent, index: number) => {
		e.preventDefault();
		console.log(index, 'this is index');
		console.log(files[index], '2nd loggggg');
		// setFiles({ ...files });
	};

	return (
		<div className="App container bg-light shadow p-3 mb-5 bg-white rounded">
			<div className="jumbotron bg-secondary border border-white ">
				<div className="row bg-dark">
					<NavContainer
						handleCreateNewFile={handleCreateNewFile}
						handleCreateNewFolder={handleCreateNewFolder}
					/>
				</div>
				<div className="row bg-white">
					<Breadcrumb />
				</div>
				<div className="row bg-light">
					<TreeNav />
					<MainContainer handleFolderClick={handleFolderClick} files={files} />
				</div>
				{/* <Toggle>
					{({ on, toggle }) => {
						return (
							<>
								{on && <h1>YO</h1>}
								<button onClick={toggle}> HELLO </button>
							</>
						);
					}}
				</Toggle> */}
			</div>
		</div>
	);
};

export default App;
