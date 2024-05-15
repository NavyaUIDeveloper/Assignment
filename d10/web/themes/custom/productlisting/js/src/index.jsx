// import React from 'react';
// import ReactDOM from 'react-dom';

// // # Example 1: Simple "Hello, World" code
// ReactDOM.render(
//   <h1>Hello there - world!</h1>,
//   document.getElementById('react-app')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('react-app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
