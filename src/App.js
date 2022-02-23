import "./App.less";
import React from "react";
//HashRouter,支持#识别,http://localhost:8080/#/Page3/
// import { HashRouter, Route, Switch } from 'react-router-dom';
//单页BrowserRouter
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./views/Header";
import Footer from "./views/Footer";
import { routers } from "./routes/index";

class App extends React.Component {
  render() {
    return (
      <div className="body-contnet">
        <Header />
        <BrowserRouter>
          <Routes>
            {routers.map((item, index) => {
              return (
                <Route
                  key={index}
                  exact
                  path={item.path}
                  element={item.component}
                />
              );
            })}
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
export default App;
