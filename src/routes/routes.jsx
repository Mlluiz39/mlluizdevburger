import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import PrivateRoute from './private-route'

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/cadastro" component={Register} />
				<PrivateRoute exact path="/" component={Home} />
			</Switch>
		</Router>
	)
}

export default Routes
