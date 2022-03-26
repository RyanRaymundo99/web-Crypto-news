import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import {Cryptocurrencies, News} from '../components';
import { useGetCryptosQuery } from '../services/cryptoApi';

const {Title} = Typography;

const Homepage = () => {
    const { data, isFetching} = useGetCryptosQuery(8);
    const globalStats = data?.data?.stats;

    if(isFetching) return 'Loading...'

    return (
        <>
        <Title level={2} className='heading'>Global Crypto Status</Title>
        <Row>
            <Col span={12}><Statistic title="Total Crypto currencies" value={globalStats.total} /></Col>
            <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
            <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
            <Col span={12}><Statistic title="Total 24h volume" value={millify(globalStats.total24hVolume)} /></Col>
            <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
        </Row>
        <div className='home-heading-container'>
            <Title level={2} className='name-title'> Top 8 Cryptocurrencies in the world </Title>
            <Title level={3} className='show-more'> <Link to="/cryptocurrencies">Show more</Link> </Title>
        </div>
        <Cryptocurrencies simplified />
        <div className='home-heading-container'>
            <Title level={2} className='name-title'> Last Crypto News </Title>
            <Title level={3} className='show-more'> <Link to="/news">Show more</Link> </Title>
        </div>
        <News simplified />
      
        </>
    )
}

export default Homepage
