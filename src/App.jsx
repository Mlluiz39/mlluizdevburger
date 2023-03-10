import React from 'react'
import { UserProvider } from './hooks/UserContext'

import Routes from './routes/routes'
import GlobalStyles from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'

function App() {
	return (
		<div>
			<ToastContainer autoClose={2500} theme={'colored'} />
			<UserProvider>
				<Routes />
			</UserProvider>
			<GlobalStyles />
		</div>
	)
}

export default App
