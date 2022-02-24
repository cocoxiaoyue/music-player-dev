import React from "react";
import { connect } from "react-redux";
import "./index.less";
import { UnlockOutlined, LockOutlined } from "@ant-design/icons";
import AudioPlayer from "@components/audioPlayer";

const mapStateToProps = (state) => {
  console.log(state.home.number);
  return {
    number: state.home.number,
  };
};
const mapDispatchToProps = (dispatch, action) => {
  console.log(dispatch);
  console.log(action);
  return {};
};
class Footer extends React.Component {
  state = {
    showFoot: true, // 暂时设置为true
    lockFoot: true, // 暂时设置为true
  };

  componentDidMount() {}
  topContnteOver = () => {
    if (!this.state.lockFoot) {
      this.setState({
        showFoot: true,
      });
    }
  };
  topContnteLeave = () => {
    if (!this.state.lockFoot) {
      this.setState({
        showFoot: false,
      });
    }
  };
  lockOnClick = () => {
    this.setState({
      lockFoot: !this.state.lockFoot,
    });
  };
  render() {
    return (
      <div
        onMouseLeave={() => this.topContnteLeave()}
        className={
          this.state.showFoot
            ? "Footer-content footer-show"
            : "Footer-content footer-hidden"
        }
      >
        <div className="footer-lock" onMouseOver={() => this.topContnteOver()}>
          <div className="lock" onClick={() => this.lockOnClick()}>
            {this.state.lockFoot ? (
              <LockOutlined style={{ color: "#fff" }} />
            ) : (
              <UnlockOutlined style={{ color: "#fff" }} />
            )}
          </div>
        </div>
        <div className="footer">
          <AudioPlayer />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
