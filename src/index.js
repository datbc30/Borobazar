import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./assets/scss/style.scss"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Account from './page/Account/Account';
import Oders from './page/Oders/Oders';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path='' element={<App />}>
          <Route index element={<Account />}></Route>
          <Route path='/account' element={<Account />}></Route>
          <Route path='/oders' element={<Oders />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
