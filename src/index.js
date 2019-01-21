import React from 'react'; //import React itself
import ReactDOM from 'react-dom'; //works as glue to react and dom
import './index.css'; //import css
import App from './components/App'; //import App.js file
import * as serviceWorker from './serviceWorker'; //let the app load faster
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>,
     document.getElementById('root')
     );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
