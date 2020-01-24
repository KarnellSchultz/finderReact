import React, { useState } from 'react';
import Emoji from './Utils/Emoji';
import Main from './Main';

type Props = {
	view: any;
	handleFolderClick: (e: React.MouseEvent, index: number) => void;
	handleFolderNameEdit: (tempName: string, tempSetValue: string) => void;
};

export default function MainContainer({
	view = [],
	handleFolderClick,
	handleFolderNameEdit,
}: Props) {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		return handleFolderNameEdit(
			event.currentTarget.name,
			event.currentTarget.value,
		);
	};

	function folderRow(view: any): React.ReactNode {
		const rows: React.ReactChild = view.map(
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
						{isEditing ? (
							<div
								// onClick={e => handleFolderClick(e, index)}
								key={index}
								className="col">
								<Emoji symbol="📁" />

								<input
									onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
										handleChange(e)
									}
									value={name}
									className="form-control-sm"
									type="text"
									name="name"
									size={7}></input>
							</div>
						) : (
							<div
								onClick={e => handleFolderClick(e, index)}
								key={index}
								className="col">
								<Emoji symbol="📁" label={name} />
							</div>
						)}
					</>
				);
			},
		);
		return rows;
	}

	const folderRows = folderRow(view);

	return (
		<>
			<Main folderRows={folderRows} />
		</>
	);
}
