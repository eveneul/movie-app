import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
import './style/scss/style.scss';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/movie/:id'>
					<Detail />
				</Route>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
