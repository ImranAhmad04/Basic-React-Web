
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // This is your CSS import
import App from './App'; // This is your App component import
// import * as serviceWorker from './serviceWorker';s

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This is where your app is rendered in the "index.html" file
);

// ...
