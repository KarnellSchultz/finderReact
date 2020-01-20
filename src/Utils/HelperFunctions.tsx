const createNewFolder = (
	name: string = 'untitled',
	type: string = 'folder',
	parent: string = 'root',
	child: any = [],
	isEditing: boolean = false,
	isHighlighted: boolean = false,
): {
	type: string;
	name: string;
	parent: string;
	child: any;
	isEditing: boolean;
	isHighlighted: boolean;
} => {
	return {
		type: type,
		name: name,
		parent: parent,
		child: child,
		isEditing: isEditing,
		isHighlighted: isHighlighted,
	};
};
export default createNewFolder;
