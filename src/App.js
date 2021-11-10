import './App.less';
import React from 'react';
//HashRouter,支持#识别,http://localhost:8080/#/Page3/
// import { HashRouter, Route, Switch } from 'react-router-dom';
//单页BrowserRouter
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Page from './routes/Page'
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

class App extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            {new Array(5).fill(null).map((_, index) => {
              const key = index + 1;
              return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
            })}
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<Page />} />
            </Routes>
          </BrowserRouter>
        </Content>
        <Footer className="fixed-footer">Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>

    )

  }
}
export default App;
