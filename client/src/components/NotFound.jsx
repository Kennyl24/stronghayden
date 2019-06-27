import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';


class NotFound extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
      <div>
        <h1>PAGE NOT FOUND</h1>
      </div>
)
}
};

export default NotFound;