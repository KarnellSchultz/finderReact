import React from 'react';
import Nav from './Nav';
import NavEdit from './NavEdit';

type Props = {
	handleCreateNewFolder: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleCreateNewFile: (e: React.MouseEvent<HTMLButtonElement>) => void;
	isHighlighted: boolean;
	handleRenameClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function NavContainer({
	isHighlighted = false,
	handleCreateNewFile,
	handleCreateNewFolder,
	handleRenameClick,
}: Props) {
	return (
		<>
			{isHighlighted ? (
				<NavEdit handleRenameClick={handleRenameClick} />
			) : (
				<Nav
					handleCreateNewFile={handleCreateNewFile}
					handleCreateNewFolder={handleCreateNewFolder}
				/>
			)}
		</>
	);
}
