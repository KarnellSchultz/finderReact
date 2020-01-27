import React, { useState, useEffect, createContext } from 'react';
import Breadcrumb from './Breadcrumb';
import TreeNav from './TreeNav';
import MainContainer from './MainContainer';
import {
	createNewFolder,
	removeIsEditing,
	removeIsHighlighting,
} from './Utils/HelperFunctions';
import NavContainer from './NavContainer';

import { FolderFiles } from './Utils/Interfaces';

export const FilesContext = createContext({});

const App: React.FC = () => {
	const childObject = createNewFolder();
	const initFileState: FolderFiles[] = [
		{
			type: 'folder',
			name: 'Document',
			isEditing: false,
			isHighlighted: false,
			parent: 'root',
			child: [childObject],
		},
	];

	const [files, setFiles] = useState(initFileState);
	const [view, setView] = useState(files);
	const [isHighlighted, setIsHighlighted] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [editingIndex, setEditingIndex] = useState(0);

	useEffect(() => {
		setView(files);

		console.table(files);
		console.table('VIEW:', view);
		console.log(editingIndex);
		console.log(isEditing, 'editing');
	}, [files, view, isEditing, isHighlighted, editingIndex]);

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
		e.preventDefault();
		const newFile = createNewFolder();
		console.log(files);
		setFiles([...files, newFile]);
	};

	const handleFolderClick = (e: React.MouseEvent, index: number) => {
		e.preventDefault();

		const tempFiles = [...files];
		setEditingIndex(index);
		removeIsEditing(tempFiles);
		removeIsHighlighting(tempFiles);

		setIsHighlighted(true);
		setIsEditing(false);

		if (tempFiles[index].isHighlighted) {
			tempFiles[index].isHighlighted = false;
		} else {
			tempFiles[index].isHighlighted = true;
		}
		// tempFiles[index].isHighlighted = true;
		setFiles([...tempFiles]);
	};

	const handleFolderNameEdit = (tempSetValue: string) => {
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
		removeIsEditing(tempFiles);
		setFiles(tempFiles);
	};

	const handleRenameSaveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const tempFiles = [...files];
		removeIsEditing(tempFiles);
		removeIsHighlighting(tempFiles);
		setIsEditing(false);
		setIsHighlighted(false);
	};

	const handleRenameClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log('clicked rename');
		e.preventDefault();

		setIsEditing(true);
		const tempFiles = [...files];

		tempFiles.map((el): FolderFiles | null => {
			if (el.isHighlighted) {
				el.isEditing = true;
			} else {
				return null;
			}
			return el;
		});
		setFiles(tempFiles);
	};

	const handleGotoClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const tempFiles = [...files];
		console.log(tempFiles);
		console.log(tempFiles[editingIndex].child);
		console.log(editingIndex);

		tempFiles.map(
			(el): FolderFiles => {
				if (el.isHighlighted) {
					setView([el]);
				}
				return el;
			},
		);
	};

	return (
		<FilesContext.Provider value={files}>
			<div className="App container bg-light shadow p-3 mb-5 bg-white rounded">
				<div className="jumbotron bg-secondary border border-white ">
					<div className="row bg-dark">
						<NavContainer
							handleRenameSaveClick={handleRenameSaveClick}
							handleCreateNewFile={handleCreateNewFile}
							handleCreateNewFolder={handleCreateNewFolder}
							isHighlighted={isHighlighted}
							handleRenameClick={handleRenameClick}
							handleDeleteClick={handleDeleteClick}
							handleGotoClick={handleGotoClick}
							isEditing={isEditing}
						/>
					</div>
					<div className="row bg-white">
						<Breadcrumb files={files} />
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
		</FilesContext.Provider>
	);
};

export default App;
