import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Main from './pages/Main.jsx';
import Error404 from './components/pages/Error404';
import WorkHistory from './components/pages/WorkHistory';
import Contact from './components/pages/Contact';

import './styles/global.css';
import './styles/forms.css';

class Doc extends React.Component {
	state = {};
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/' component={Main} />
					<Route exact path='/404' component={Error404} />
					<Redirect to='/404' />
				</Switch>
			</Router>
		);
	}
}

ReactDOM.render(<Doc />, document.getElementById('root'));
