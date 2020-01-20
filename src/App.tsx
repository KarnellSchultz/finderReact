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
			child: [],
			isEditing: false,
			isHighlighted: false,
		},
	];

	const [files, setFiles] = useState(initialState);
	const [isHighlighted, setIsHighlighted] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [editingIndex, setEditingIndex] = useState(0);

	const handleCreateNewFolder = (
		e: React.MouseEvent<HTMLButtonElement>,
	): void => {
		const newFile = createNewFolder();
		newFile.child = [createNewFolder()];
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
			child: [],
			isEditing: false,
			isHighlighted: false,
		};
		e.preventDefault();
		console.log(files);
		setFiles([...files, newFile]);
	};

	const handleFolderClick = (e: React.MouseEvent, index: number) => {
		e.preventDefault();
		setEditingIndex(index);
		const tempFiles = [...files];
		tempFiles.map(el => (el.isHighlighted = false));
		tempFiles[index].isHighlighted = !tempFiles[index].isHighlighted;
		setIsHighlighted(!isHighlighted);
		setFiles([...tempFiles]);
	};

	const handleFolderNameEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const tempFiles = [...files];
		tempFiles[editingIndex].name += e.currentTarget.name;
		setFiles([...tempFiles]);
	};

	const handleRenameSaveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setIsEditing(!isEditing);
	};
	const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const tempFiles = [...files];
		tempFiles.splice(editingIndex, 1);
		setEditingIndex(0);
		setIsHighlighted(false);
		setFiles(tempFiles);
	};

	const handleRenameClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setIsEditing(!isEditing);
		const tempFiles = [...files];
		console.log('clicked rename');

		let tempElement: {} | undefined;
		tempFiles.forEach(el => {
			if (el.isHighlighted) {
				el.isEditing = true;
				tempElement = el;
			}
		});

		console.log(tempFiles);
	};

	return (
		<div className="App container bg-light shadow p-3 mb-5 bg-white rounded">
			<div className="jumbotron bg-secondary border border-white ">
				<div className="row bg-dark">
					<NavContainer
						handleRenameSaveClick={handleRenameSaveClick}
						handleCreateNewFile={handleCreateNewFile}
						handleCreateNewFolder={handleCreateNewFolder}
						isHighlighted={isHighlighted}
						isEditing={isEditing}
						handleRenameClick={handleRenameClick}
						handleDeleteClick={handleDeleteClick}
					/>
				</div>
				<div className="row bg-white">
					<Breadcrumb />
				</div>
				<div className="row bg-light">
					<TreeNav />
					<MainContainer
						handleFolderClick={handleFolderClick}
						handleFolderNameEdit={handleFolderNameEdit}
						files={files}
					/>
				</div>
			</div>
		</div>
	);
};

export default App;
