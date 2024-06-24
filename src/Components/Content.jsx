import React from 'react'
import { Flex, Card, Typography, Image } from 'antd'
import Plant from '../Assets/Plant06.jpg'

const Content = () => {
    return (
        <div>
            <Card className='card'>
                <Flex vertical gap='large'>
                    <Typography.Title level={4} strong>
                        Today <br />5 Orders
                    </Typography.Title>
                    <Typography.Title level={4} strong>
                        This month <br />239 Orders
                    </Typography.Title>
                </Flex>
              
            </Card>
        </div>
    )
}

export default Content