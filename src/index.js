import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginProvider from './Auth/context';

import App from './app.js';



// class Main extends React.Component {
//   render() {
//     return <App />;
//   }
// }
function Main()  {
    return <App />
}

const rootElement = document.getElementById('root');
ReactDOM.render(
	<LoginProvider>
		<Main />
	</LoginProvider>,
	rootElement,
);
