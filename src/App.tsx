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
			isHighlighted: false,
		},
	];

	const [files, setFiles] = useState(initialState);
	const [isHighlighted, setIsHighlighted] = useState(false);

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
			isHighlighted: false,
		};
		e.preventDefault();
		console.log(files);
		setFiles([...files, newFile]);
	};

	const handleFolderClick = (e: React.MouseEvent, index: number) => {
		e.preventDefault();
		console.log(index, 'this is index');

		const tempFiles = [...files];
		tempFiles.map(el => (el.isHighlighted = false));
		tempFiles[index].isHighlighted = !tempFiles[index].isHighlighted;
		setIsHighlighted(!isHighlighted);
		setFiles([...tempFiles]);
	};

	const handleRenameClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		console.log('clicked rename');
		const tempFiles = [...files];

		// const result = tempFiles.filter((el, index) => {
		// 	console.log(index);
		// 	return el.isHighlighted === true;
		// });

		// const results = tempFiles.map(el => {
		// 	if (el.isHighlighted) {
		// 		el.isEditing = true;
		// 	}
		// });

		tempFiles.forEach(el => {
			if (el.isHighlighted) {
				el.isEditing = true;
				console.log('GOT EMMM, ', el);
			}
		});

		// // tempFiles.splice([index], 1, result);
		// const tempRestult = [...tempFiles, result[0]];
		// // result[0].isEditing = !result[0].isEditing;
		// // setFiles([...finalResult])
		console.log(tempFiles);
	};

	return (
		<div className="App container bg-light shadow p-3 mb-5 bg-white rounded">
			<div className="jumbotron bg-secondary border border-white ">
				<div className="row bg-dark">
					<NavContainer
						handleCreateNewFile={handleCreateNewFile}
						handleCreateNewFolder={handleCreateNewFolder}
						isHighlighted={isHighlighted}
						handleRenameClick={handleRenameClick}
					/>
				</div>
				<div className="row bg-white">
					<Breadcrumb />
				</div>
				<div className="row bg-light">
					<TreeNav />
					<MainContainer handleFolderClick={handleFolderClick} files={files} />
				</div>
			</div>
		</div>
	);
};

export default App;
