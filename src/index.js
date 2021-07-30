import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initConnection } from './core/services/socket';
import './assests/style/App.css';

initConnection();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
