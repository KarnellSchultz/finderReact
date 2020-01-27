import { FolderFiles } from './Interfaces';

export const createNewFolder = (): FolderFiles => {
	return {
		name: 'New Folder',
		type: 'folder',
		isEditing: false,
		isHighlighted: false,
		parent: 'root',
		child: [],
	};
};

export const removeIsEditing = (tempFiles: FolderFiles[]): FolderFiles[] => {
	tempFiles.map(el => (el.isEditing = false));

	return tempFiles;
};
export const removeIsHighlighting = (
	tempFiles: FolderFiles[],
): FolderFiles[] => {
	tempFiles.map(el => (el.isHighlighted = false));

	return tempFiles;
};
