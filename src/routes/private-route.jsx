import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			localStorage.getItem('mlluizDevBurger:user') ? (
				<Component {...props} />
			) : (
				<Redirect to="/login" />
			)
		}
	/>
)

export default PrivateRoute
