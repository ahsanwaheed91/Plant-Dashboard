import React from 'react'
import { Flex, Typography } from 'antd'
import Search from 'antd/es/transfer/search'
import { MessageOutlined, NotificationOutlined,UserOutlined } from '@ant-design/icons'
import Avatar from 'antd/es/avatar/avatar'

const CustomHeader = () => {
    return (
        <>
            <Flex align='center' justify='space-between'>
                <Typography.Title level={3} type='secondary'>
                    Welcome Back! Ahsan Waheed
                </Typography.Title>
            <Flex align='center' gap='3rem'>
                <Search placeholder='Search Dashboard' allowClear />
                <Flex align='center' gap='0.7rem'>
                    <MessageOutlined  className='header-icon'/>
                    <NotificationOutlined className='header-icon' />
                    <Avatar icon={<UserOutlined/>}/>
                </Flex>

            </Flex>
            </Flex>
        </>
    )
}

export default CustomHeader