import React from 'react';
import { Layout, Menu } from 'antd';
import { Route, NavLink } from 'react-router-dom';
import Home from './components/Home/';
import uploadPage from './components/Upload/';
import 'antd/dist/antd.css';
import styles from './styles.module.scss';

function App() {
  const { Header, Content, Footer } = Layout;
  return (
    <div className="App">
      <Layout className="layout">
        <Header className={styles.header}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" className={styles.menu}>
            <Menu.Item key="1">
              <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink to="/uplaod">Upload</NavLink>
            </Menu.Item>
          </Menu>
        </Header>
        <Content className={styles.content}>
          <Route name="home" exact path="/" component={Home} />
          <Route name="uploadPage" path="/uplaod" component={uploadPage} />
        </Content>
        <Footer className={styles.footer}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}

export default App;
