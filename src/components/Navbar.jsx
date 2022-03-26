import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import logo from '../images/logo.png';

const navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={logo} size="large" />
        <Typography.Title level={3} className="logo"><Link to="/">CryptoNews</Link></Typography.Title>
      </div>
      <Menu theme='dark'>
      <Menu theme="dark">
        <Menu.Item key={1} icon={<HomeOutlined />}><Link to="/">Home</Link></Menu.Item>
        
        <Menu.Item key={2} icon={<FundOutlined />}><Link to="/cryptocurrencies">Cryptocurrencies</Link></Menu.Item>

        <Menu.Item key={3} icon={<MoneyCollectOutlined />}><Link to="/exchanges">Exchanges</Link></Menu.Item>

        <Menu.Item key={4} icon={<BulbOutlined />}><Link to="/news">News</Link></Menu.Item>
      </Menu>
      </Menu>
      </div>
  )
}

export default navbar

