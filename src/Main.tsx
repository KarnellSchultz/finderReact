import React from 'react';
import Emoji from './Utils/Emoji';
import { type } from 'os';

type Props = any;

export default function Main({ files = [] }: Props) {
	function folderRow(files: any) {
		const rows = files.map(
			(
				el: { type: 'folder'; name: 'firstFolder'; parent: 'root'; child: '' },
				index: number,
			) => {
				return (
					<div key={index} className="col">
						<Emoji symbol="📁" label={el.name} />
						Hello!
					</div>
				);
			},
		);
		return rows;
	}

	return (
		<div className="col-8 bg-secondary mb-2 ">
			<div className="container">
				<div className="row row-cols-4">{folderRow(files)}</div>

				<div className="row row-cols-4">
					<div className="col">
						<Emoji label="File" symbol={'📑'} />
					</div>
				</div>
			</div>
		</div>
	);
}
