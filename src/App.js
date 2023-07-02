import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';

const App = () => {
    return (
        <div className='app'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route element={<Homepage />} path="/" />
                            <Route element={<Exchanges />} path="/exchanges" />
                            <Route element={<Cryptocurrencies />} path="/cryptocurrencies" />
                            <Route element={<CryptoDetails />} path="/crypto/:coinId" />
                            <Route element={<News />} path="/news" />

                        </Routes>
                    </div>
                </Layout>
            </div>
            <div className='footer'>

            </div>
        </div>
    )
}

export default App;