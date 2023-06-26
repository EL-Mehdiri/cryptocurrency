import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom/dist';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';



const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar />
                <Typography.title level={2} className='logo' >
                    <Link to='/'>Cryptoverse</Link>
                </Typography.title>
                <button className='menu-control-container'>

                </button>
            </div>
        </div>
    )
}

export default Navbar;