import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;
function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[2]} style={{ lineHeight: '64px' }}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Upload</Menu.Item>
          </Menu>
        </Header>

        <Content style={{ padding: '0 50px' }}>Content</Content>

        <Footer style={{ textAlign: 'center' }}>Ant Design ©2019 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}

export default App;
