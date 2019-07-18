import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import LeadingBar from './LeadingBar.jsx';
import BottomNav from './BottomNav.jsx';


class NotFound extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
      <div>
        <LeadingBar/>
        <h1 style={{marginTop:'150px'}}>PAGE NOT FOUND</h1>
        <a href="/"><h1 style={{marginTop:'10px'}}>Back To Home</h1></a>
        <BottomNav/>
      </div>
)
}
};

export default NotFound;