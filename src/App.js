import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './components';

import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar" >
      <Navbar />
    </div>
    <div className="main">
      <div className='routes'>
        <Routes>
            <Route exact path="/" element={<Homepage />}></Route>

            <Route exact path="/exchanges" element={ <Exchanges />}></Route>

            <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />}></Route>

            <Route exact path="/crypto/:cointID" element={ <CryptoDetails />}></Route>

            <Route exact path="/news" element={<News />}></Route>
        </Routes>
      </div>
    
    <div className='footer' >
      <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
        CryptoNews <br />
        All Rights reserved
      </Typography.Title>
      <Space>
        <Link to='/home'>Home </Link>
        <Link to='/exchanges'>Exchanges</Link>
        <Link to='/news'>News</Link>
      </Space>

    </div>
    </div>
  </div>
);

export default App;
