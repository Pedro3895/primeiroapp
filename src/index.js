import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserStore } from './contexts/userContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserStore>
     <App />
    </UserStore>
  </React.StrictMode>
);

//envolveremos o app com a UserStore, tornando-o o childrem
//caso apagemos o <App> o site não mostrara nada

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//original
//import React from 'react';
//import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';


//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>
//);
