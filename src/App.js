import React, { useState } from 'react'
import { Layout, Button, Flex } from 'antd'
import Siderbar from './Components/Sider';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import CustomHeader from './Components/Header';
import './App.css'
import MainContent from './Components/MainContent';
import SideContent from './Components/SideContent';



const { Sider, Header, Content } = Layout;
const App = () => {
  const [collapsed, setcollapsed] = useState(false)
  return (
    <Layout>
      <Sider theme='light' trigger={null} collapsible collapsed={collapsed} className='Sider' >
        <Siderbar />
        <Button type='text' icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} onClick={() => setcollapsed(!collapsed)} className='trigger-btn' />
      </Sider>
      <Layout>
        <Header className='header'>
          <CustomHeader />
        </Header>
        <Content className='content'>
          <Flex gap='large'>
            <MainContent />
            <SideContent />
          </Flex>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App