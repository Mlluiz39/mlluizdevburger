import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Products from '../pages/Products'
import PrivateRoute from './private-route'

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route component={Login} path="/login" />
				<Route component={Register} path="/cadastro" />
				<PrivateRoute exact component={Home} path="/" />
				<PrivateRoute component={Products} path="/produtos" />
			</Switch>
		</Router>
	)
}

export default Routes
