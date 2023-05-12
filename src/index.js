import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/home/Home';
import './fonts/MyRiadPro/MYRIADPRO-BOLD.OTF';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
      <Home/>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
