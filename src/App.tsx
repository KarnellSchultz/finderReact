import React, { useState, useEffect, useContext } from 'react';
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
	const [view, setView] = useState(files);
	const [isHighlighted, setIsHighlighted] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [editingIndex, setEditingIndex] = useState(0);

	useEffect(() => {
		setView(files);

		console.table(files);
		console.table(view);
	}, [files]);

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

	const handleFolderNameEdit = (tempName: string, tempSetValue: string) => {
		const tempFiles = [...files];
		tempFiles[editingIndex].name = tempSetValue;
		setFiles(tempFiles);

		console.log(files[editingIndex], editingIndex);
	};

	const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const tempFiles = [...files];
		tempFiles.splice(editingIndex, 1);
		setEditingIndex(0);
		setIsHighlighted(false);
		setFiles(tempFiles);
	};

	const handleRenameSaveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const tempFiles = [...files];
		tempFiles.forEach(el => {
			if (el.isEditing) {
				el.isEditing = false;
			}
		});
		setIsEditing(!isEditing);
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

	const handleGotoClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const tempFiles = [...files];
		setView(tempFiles[editingIndex].child);
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
						handleGotoClick={handleGotoClick}
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
						view={view}
					/>
				</div>
			</div>
		</div>
	);
};

export default App;
