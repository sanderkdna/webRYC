import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../src/css/flaticon.css'
import '../src/css/odometer-theme-default.css'
import '../src/css/animate.css'
import App from '../src/containers/app';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import store from './store'
import './index.css';
const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
