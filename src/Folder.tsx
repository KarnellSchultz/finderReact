//parenet folder?
//child folder?
//name
//documents inside of the folder?
//

export default class Folder {
	name: string;
	parentFolder: string;
	childrenFolders: string;
	documentsWithin: any;

	constructor(name: string, parentFolder: string, childrenFolders: string) {
		this.name = name;
		this.parentFolder = parentFolder;
		this.childrenFolders = childrenFolders;
	}
}
