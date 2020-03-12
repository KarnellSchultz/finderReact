export interface FolderFiles {
  type: string;
  name?: string;
  parent: string;
  isHighlighted: boolean;
  isEditing: boolean;
  child: Array<FolderFiles> | null;
  //   [key: string]: any;
  uid: number;
}
