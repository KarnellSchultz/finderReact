import React from 'react';

export default function Breadcrumb() {
	return (
		<div className="col-12">
			<div className="mt-2">
				<nav aria-label="breadcrumb">
					<ol className="breadcrumb">
						<li className="breadcrumb-item">Home</li>
						<li className="breadcrumb-item">Documents</li>
						<li className="breadcrumb-item active" aria-current="page">
							Data
						</li>
					</ol>
				</nav>
			</div>
		</div>
	);
}
