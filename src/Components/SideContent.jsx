import React from 'react'
import {Flex } from 'antd'
import Content from './Content'
import Activity from './Activity'

const SideContent = () => {
  return (
    <Flex vertical gap='2.3rem' style={{width:300}}>
      <Content/>
      <Activity/>
    </Flex>
  )
}

export default SideContent