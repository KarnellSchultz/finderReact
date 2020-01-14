import React from 'react';
// import { Button } from './Components/Button';
import Nav from './Nav';
import Breadcrumb from './Breadcrumb';
import TreeNav from './TreeNav';
import Main from './Main';

const App: React.FC = () => {
	return (
		<div className="App container bg-light shadow p-3 mb-5 bg-white rounded">
			<div className="jumbotron bg-secondary border border-white ">
				<div className="row bg-dark">
					<Nav />
				</div>
				<div className="row bg-white">
					<Breadcrumb />
				</div>
				<div className="row bg-light">
					<TreeNav />
					<Main />
				</div>
			</div>
		</div>
	);
};

export default App;
