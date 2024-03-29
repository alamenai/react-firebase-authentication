import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/index'
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from './firebase';
import "./assets/main.css"

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>,
  </React.StrictMode >
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
