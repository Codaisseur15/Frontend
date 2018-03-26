import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './store'


//Styling

ReactDOM.render(
	<Provider store={store} className='unscroll'>
		<App className='unscroll'/>
	</Provider>,
	document.getElementById('root')
)
registerServiceWorker()
