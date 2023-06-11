import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import ScrollToTop from './Components/ScrollToTop.js';
import { BrowserRouter } from 'react-router-dom';
import './Components/i18n.js';


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <ScrollToTop/>
        <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

