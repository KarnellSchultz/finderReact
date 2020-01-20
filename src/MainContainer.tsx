import React, { useState } from 'react';
import Emoji from './Utils/Emoji';
import Toggle from './Utils/Toggle';
import Main from './Main';

type Props = {
	files: any;
	handleFolderClick: (e: React.MouseEvent, index: number) => void;
	handleFolderNameEdit: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function MainContainer({
	files = [],
	handleFolderClick,
	handleFolderNameEdit,
}: Props) {
	function folderRow(files: any) {
		const rows = files.map(
			(
				el: {
					type: 'folder';
					name: 'firstFolder';
					parent: 'root';
					child: '';
					isEditing: boolean;
					isHighlighted: boolean;
				},
				index: number,
			) => {
				const { name, isEditing } = el;
				return (
					<>
						<div
							onClick={e => handleFolderClick(e, index)}
							key={index}
							className="col">
							<Emoji symbol="📁" label={name} />

							<input
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									handleFolderNameEdit
								}
								className="form-control-sm"
								type="text"
								value={name}
								name={name}
								size={7}></input>
						</div>
					</>
				);
			},
		);
		return rows;
	}

	const folderRows = folderRow(files);

	return (
		<>
			<Main folderRows={folderRows} />
		</>
	);
}
