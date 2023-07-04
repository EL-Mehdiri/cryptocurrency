import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment/moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';


const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });
    // console.log(cryptoNews)
    // const { data } = useGetCryptosQuery(100);
    if (!cryptoNews?.value) return 'loading ...';

    // const testaray = [1, 2, 34, 5, 6 7, 7 4, 3]
    return (
        <Row gutter={[24, 24]}>
            {!simplified && (
                <Col span={24}>
                    <Select showSearch className='select-news' placeholder='Select a Crypto' optionFilterProp='children' onChange={(value) => console.log(value)} filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) > 0}>
                        <Option value="Cryptocurency">Cryptocurrency</Option>
                        {/* {data?.data?.coins?.map((currency) => <Option value={currency.name}>{currency.name}</Option>)} */}
                    </Select>
                </Col>
            )}
            {cryptoNews.value.map((news, i) => (
                <Col xs={24} sm={12} lg={10} key={i}>
                    <Card hoverable className='news-card'>
                        <a href={news.url} target='_blank' rel="noreferrer">
                            <div className='news-image-container'>
                                <Title className='news-title' level={4}>{news.name}</Title>
                                <img style={{ maxWidth: '200px', maxHeight: '100px' }} src={news?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                            </div>
                            <p>
                                {news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}
                            </p>
                            <div className="provider-container">
                                <Avatar src={news?.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt='' />
                                <Text className='provider-name'>
                                    {news.provider[0]?.name}
                                </Text>
                            </div>
                            <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default News;