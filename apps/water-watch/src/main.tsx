import { AuthProvider } from '@water-watch/auth';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import { auth } from './app/firebaseApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <AuthProvider firebaseAuth={auth}>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
