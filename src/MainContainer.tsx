import React from 'react';
import Emoji from './Utils/Emoji';
import Toggle from './Utils/Toggle';
import Main from './Main';

type Props = {
	files: any;
	handleFolderClick: (e: React.MouseEvent, index: number) => void;
};

export default function MainContainer({
	files = [],
	handleFolderClick,
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
						<Toggle>
							{({ on, toggle }) => {
								return (
									<div
										onClick={e => handleFolderClick(e, index)}
										key={index}
										className="col">
										<Emoji symbol="📁" label={name} />
										{isEditing && <input type="text" />}
										{on ? (
											<input
												onClick={toggle}
												className="form-control-sm"
												type="text"
												size={7}></input>
										) : (
											<span
												onClick={e => {
													handleFolderClick(e, index);
												}} //pass in index
												className="badge badge-danger">
												{name}
											</span>
										)}
									</div>
								);
							}}
						</Toggle>
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
