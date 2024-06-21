import {Image, Button, Card, Flex, Typography } from 'antd'
import React from 'react'
import PlantData from '../PlantData'


const {Meta}=Card
const ProductLists = () => {
  return (
    <div>
    <Flex align='center' justify='space-between'>
        <Typography.Title level={3} strong className='primary--color'>
            Top Listings
        </Typography.Title>
        <Button type='link' className='gray--color'>View All</Button>

    </Flex>
    <Flex align='center' gap='large'>
        {PlantData.map((Plant)=>(
            <Card key={Plant.id} hoverable className='plant-card'>
                <Image src={Plant.picture} style={{width:'130px'}} />
                <Meta title={Plant.name} style={{marginTop:'1rem'}}/>
            </Card>
        ))}

    </Flex>
    </div>
  )
}

export default ProductLists