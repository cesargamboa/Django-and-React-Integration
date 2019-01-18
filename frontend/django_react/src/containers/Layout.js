import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom'

const { Header, Content, Footer } = Layout;
const CustomLayout = (props) => (
 <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><Link to="/login">Login</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/">Article's List</Link></Menu.Item>
        {/* <Menu.Item key="3">nav 3</Menu.Item> */}
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{props.children}</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Cesar ©2018
    </Footer>
  </Layout>
);
export default CustomLayout;
