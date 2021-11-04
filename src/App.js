import './App.less';

import React from 'react';
//HashRouter,支持#识别,http://localhost:8080/#/Page3/
// import { HashRouter as Router, Route } from 'react-router-dom';
//单页BrowserRouter
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';

class App extends React.Component {
  render() {
    return (
      <Router >
        <Routes>
          <Route exact path="/" component={Home} />
        </Routes>
      </Router>
    )

  }
}
export default App;
