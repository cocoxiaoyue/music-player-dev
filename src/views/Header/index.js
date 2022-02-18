import React from "react";
import './index.css';

class Header extends React.Component {
  state = {
    test: 1111
  }
  componentDidMount() {
    this.setState({
      test: 55555
    })
    console.log(this.state.test)
  }
  render() {
    return (
      <div className="Header-content">{this.state.test}</div>
    )
  }
}

export default Header;