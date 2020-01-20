import React from 'react';
import Nav from './Nav';
import NavEdit from './NavEdit';

type Props = {
	handleCreateNewFolder: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleCreateNewFile: (e: React.MouseEvent<HTMLButtonElement>) => void;
	isHighlighted: boolean;
	isEditing: boolean;
	handleRenameClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleRenameSaveClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleDeleteClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function NavContainer({
	isHighlighted = false,
	handleCreateNewFile,
	handleCreateNewFolder,
	handleRenameClick,
	handleRenameSaveClick,
	handleDeleteClick,
	isEditing,
}: Props) {
	return (
		<>
			{isHighlighted ? (
				<NavEdit
					handleRenameSaveClick={handleRenameSaveClick}
					handleRenameClick={handleRenameClick}
					isEditing={isEditing}
					handleDeleteClick={handleDeleteClick}
				/>
			) : (
				<Nav
					handleCreateNewFile={handleCreateNewFile}
					handleCreateNewFolder={handleCreateNewFolder}
				/>
			)}
		</>
	);
}
