import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <div>
        This is Home!
        <Link to="/about">goto Home</Link>
      </div>
    );
  }
}

export default Home;
