import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './container/App';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);
