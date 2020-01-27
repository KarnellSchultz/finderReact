import React from 'react';
import { FolderFiles } from './Utils/Interfaces';

type Props = {
	files: FolderFiles[];
};

export default function Breadcrumb({ files }: Props) {
	return (
		<div className="col-12">
			<div className="mt-2">
				<nav aria-label="breadcrumb">
					<ol className="breadcrumb">
						<li className="breadcrumb-item">{files[0].name}</li>
						{/* <li className="breadcrumb-item">{files[0].child}</li> */}
						<li className="breadcrumb-item active" aria-current="page">
							Data
						</li>
					</ol>
				</nav>
			</div>
		</div>
	);
}
