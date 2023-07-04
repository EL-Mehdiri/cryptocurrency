import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatara, Card } from 'antd';
import moment from 'moment/moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });
    console.log(cryptoNews)
    if (!cryptoNews?.value) return 'loading ...';

    return (
        <Row gutter={[24, 24]}>
            {cryptoNews.value.map((news, i) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card hoverable className='news-card'>
                        <a href={news.url} target='_blank' rel="noreferrer">
                            <div className='news-image-container'>
                                <Title className='news-title' level={4}>{news.name}</Title>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default News;