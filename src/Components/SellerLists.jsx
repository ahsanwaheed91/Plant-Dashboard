import { Button, Flex, Tooltip, Typography, Card, Avatar, Divider } from 'antd'
import React from 'react'
import Pic from '../Assets/Pic.jpg'


const SellerLists = () => {
    return (
        <Flex align='center' justify='space-between' gap='large'>
            <Flex vertical='row' gap='small' className='top-sellers'>
                <Flex align='center' justify='space-between'>
                    <Typography.Title level={5} strong className='primary--color'>
                        Top Sellers
                    </Typography.Title>
                    <Button type='link' className='gray--color'>
                        View All
                    </Button>

                </Flex>
                <Card>
                    <Flex align='center' justify='space evenly'>
                        <Avatar.Group max={{count:5}}
                            maxPopoverTrigger='click'
                            size={'large'}
                            maxStyle={{
                                color: '#f56a00',
                                backgroundColor: '#fde3cf',
                                cursor: 'progress'
                            }}>
                            <Tooltip title='User 1' placement='top'>
                                <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
                            </Tooltip>
                            <Tooltip title='User 2' placement='top'>
                                <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=`${index}`' />
                            </Tooltip>
                            <Tooltip title='User 3' placement='top'>
                                <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=`${index}`' />
                            </Tooltip>
                            <Tooltip title='User 4' placement='top'>
                                <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=`${index}`' />
                            </Tooltip>
                            <Tooltip title='User 5' placement='top'>
                                <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=`${index}`' />
                            </Tooltip>
                            <Tooltip title='User 6' placement='top'>
                                <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=`${index}`' />
                            </Tooltip>
                            <Tooltip title='User 7' placement='top'>
                                <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=`${index}`' />
                            </Tooltip>
                            <Tooltip title='User 8' placement='top'>
                                <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=`${index}`' />
                            </Tooltip>
                        </Avatar.Group>
                        <Divider type='vertical' className='divider' />
                        <Flex vertical='row'>
                            <Typography.Text type='secondary' strong>
                                1,200 Plants Sold
                            </Typography.Text>
                            <Typography.Text type='secondary' strong>
                                10 Sellers
                            </Typography.Text>
                        </Flex>
                    </Flex>
                </Card>
            </Flex>
            <Flex vertical='row' gap='small' className='featured-sellers'>
                <Flex align='center' justify='space-between'>
                    <Typography.Title level={5} strong className='primary--color'>
                        Featured Sellers
                    </Typography.Title>
                    <Button type='link' className='gray--color'>
                        View All
                    </Button>

                </Flex>
                <Card>
                    <Flex align='center' justify='space evenly'>
                        <Avatar.Group maxCount={5}
                            maxPopoverTrigger='click'
                            size={'large'}
                            maxStyle={{
                                color: '#f56a00',
                                backgroundColor: '#fde3cf',
                                cursor: 'progress'
                            }}>
                            <Tooltip title='User 1' placement='top'>
                                <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
                            </Tooltip>
                            <Tooltip title='User 2' placement='top'>
                                <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=`${index}`' />
                            </Tooltip>
                            <Tooltip title='User 3' placement='top'>
                                <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=`${index}`' />
                            </Tooltip>
                            <Tooltip title='User 4' placement='top'>
                                <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=`${index}`' />
                            </Tooltip>
                            <Tooltip title='User 5' placement='top'>
                                <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=`${index}`' />
                            </Tooltip>
                            <Tooltip title='User 6' placement='top'>
                                <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=`${index}`' />
                            </Tooltip>
                            <Tooltip title='User 7' placement='top'>
                                <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=`${index}`' />
                            </Tooltip>
                            <Tooltip title='User 8' placement='top'>
                                <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=`${index}`' />
                            </Tooltip>
                          
                        </Avatar.Group>
                        <Divider type='vertical' className='divider' />
                        <Flex vertical='row'>
                            <Typography.Text type='secondary' strong>
                                1,860 Plants Sold
                            </Typography.Text>
                            <Typography.Text type='secondary' strong>
                                13 Sellers
                            </Typography.Text>
                        </Flex>
                    </Flex>
                </Card>
            </Flex>
        </Flex>
    )
}

export default SellerLists