import './App.less';
import React from 'react';
//HashRouter,支持#识别,http://localhost:8080/#/Page3/
// import { HashRouter, Route, Switch } from 'react-router-dom';
//单页BrowserRouter
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Page from './routes/Page'
import Header from './views/Header';
import Footer from './views/Footer';

class App extends React.Component {
  render() {
    return (
      <div className='body-contnet'>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<Page />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
}
export default App;
