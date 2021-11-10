import React from 'react';
import { Link } from 'react-router-dom'

class Page extends React.Component {
  render() {
    return (
      <div>
        <div>
          <p>this is about page</p>
          <Link to="/">goto Home</Link>
        </div>
      </div>
    );
  }
}

export default Page;
