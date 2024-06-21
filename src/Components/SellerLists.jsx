import { Button, Flex, Typography } from 'antd'
import React from 'react'

const SellerLists = () => {
  return (
   <Flex align='center' justify='space-between' gap='large'>
    <Flex  vertical='row' gap='small' className='top-sellers'>
        <Flex align='center' justify='space-between'>
            <Typography.Title level={5} strong className='primary--color'>
                Top Sellers
            </Typography.Title>
            <Button type='link' className='gray--color'>
                View All
            </Button>

        </Flex>
    </Flex>
    <Flex  vertical='row' gap='small' className='featured-sellers'>
        <Flex align='center' justify='space-between'>
            <Typography.Title level={5} strong className='primary--color'>
                Featured Sellers
            </Typography.Title>
            <Button type='link' className='gray--color'>
                View All
            </Button>

        </Flex>
    </Flex>
   </Flex>
  )
}

export default SellerLists