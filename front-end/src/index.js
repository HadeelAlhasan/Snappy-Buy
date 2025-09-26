import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Aos from "aos";
import "aos/dist/aos.css"
import reportWebVitals from './reportWebVitals';
import './components/i18n'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
Aos.init({duration:1500,once:true});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
