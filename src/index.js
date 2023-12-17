import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as constants from './constants'

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

rootElement.onmousemove = function(e) {
  const background = 'radial-gradient(600px at ' + e.pageX + 'px ' + e.pageY + 'px,' +
  constants.colors.backgroundGradient + ', transparent 80%)';
  rootElement.style.setProperty('background', background);
}
