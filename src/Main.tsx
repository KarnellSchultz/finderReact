import React from 'react';
import Emoji from './Utils/Emoji';

export default function Main() {
	return (
		<div className="col-8">
			<div className="container">
				<div className="row row-cols-4">
					<div style={folderStyles} className="col">
						<Emoji label="folder" symbol={'📁'} />
					</div>
					<div style={folderStyles} className="col">
						<Emoji label="folder" symbol={'📁'} />
					</div>
					<div style={folderStyles} className="col">
						<Emoji label="folder" symbol={'📁'} />
					</div>
					<div style={folderStyles} className="col">
						<Emoji label="folder" symbol={'📁'} />
					</div>
				</div>

				<div className="row row-cols-4">
					<div style={folderStyles} className="col">
						<Emoji label="folder" symbol={'📑'} />
					</div>
					<div style={folderStyles} className="col">
						<Emoji label="folder" symbol={'📑'} />
					</div>
					<div style={folderStyles} className="col">
						<Emoji label="folder" symbol={'📑'} />
					</div>
					<div style={folderStyles} className="col">
						<Emoji label="folder" symbol={'📑'} />
					</div>
				</div>
			</div>
		</div>
	);
}

const folderStyles = {
	fontSize: '90px',
};
