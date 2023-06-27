import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom/dist';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../images/cryptocurrency.png'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                {/* <Avatar src={icon} />
                <Typography.title level={2} className='logo' >
                    <Link to='/'>Cryptoverse</Link>
                </Typography.title> */}
                {/* <button className='menu-control-container'>

                </button> */}
                <h1>hi amal</h1>
            </div>
        </div>
    )
}

export default Navbar;