import React from 'react'
import { Provider } from 'react-redux';
import store from './store';
import Grid from '@components/grid'

const AppContainer = (props) => {
	console.log('AppContainer')
	return(
		<Provider store={store}>
			<Grid />
		</Provider>
	)
}

export default AppContainer