import { StrictMode } from 'react';
import { render } from 'react-dom';

import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';

import './index.css';
import App from './pages/App';
import NotFound from './pages/NotFound';
import reportWebVitals from './reportWebVitals';

render(
	<StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	</StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
