import React from "react";
import './index.css';

class Footer extends React.Component {
  state = {
    test: 1111
  }
  componentDidMount() {
    this.setState({
      test: 55555,
      bottom: -53
    })
    console.log(this.state.test)
  }
  topContnteOver = () => {
    console.log('topContnteOver')
    this.setState({
      bottom: 0
    })
  }
  render() {
    return (
      <div className="Footer-content" style={{ bottom: `${this.state.bottom}}px` }}>
        <div className="footer-lock" onMouseOver={() => this.topContnteOver()} ></div>
        <div className="footer" ></div>
      </div >
    )
  }
}

export default Footer;