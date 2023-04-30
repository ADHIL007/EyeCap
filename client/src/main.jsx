import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'



import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <BrowserRouter>
 <App />
 </BrowserRouter>
   
 
  </React.StrictMode>,
)
