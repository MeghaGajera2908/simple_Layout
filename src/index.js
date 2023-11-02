import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Apps from './Appcopy';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Myfunction from './demo';
import Myfunctions from './demo2';
import Myreact from './demo3';
import Myreacts from './demo4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />}></Route>
      <Route path='/head' element={<Apps />}></Route>
      <Route path='/contact' element={<Myfunction />}></Route>
      <Route path='/header' element={<Myfunctions />}></Route>
      <Route path='/vlogs' element={<Myreact />}></Route>
      <Route path='/vlog' element={<Myreacts />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
