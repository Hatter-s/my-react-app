import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './index.css';

import App from './Component/App/App';
import Search from './Component/Search/Search'
import Albums from './Component/Albums/Albums';
import AppIndex from './Component/Index/AppIndex';
import ErorrPath from './Component/ErrorPath/ErrorPath';
import AlbumPage from './Component/AlbumPage/AlbumPage';
import AlbumsIndex from './Component/Index/AlbumsIndex';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<AppIndex/>}/>
          <Route path='search' element={<Search/>}/>
          <Route path='albums' element={<Albums/>}>
            <Route index element={<AlbumsIndex/>}/>
            <Route path=':albumId' element={<AlbumPage/>} />
          </Route>
        </Route>
        <Route path='*' element={<ErorrPath/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
