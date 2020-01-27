import React from 'react';
import Emoji from './Utils/Emoji';

type Props = {
	folderRows: React.ReactNode;
};

export default function Main({ folderRows }: Props) {
	return (
		<>
			<div className="col-8 bg-secondary mb-2 ">
				<div className="container">
					<div className="row row-cols-4">{folderRows}</div>
					<div className="row row-cols-4">
						<div className="col">
							<Emoji label="File" symbol={'📑'} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
