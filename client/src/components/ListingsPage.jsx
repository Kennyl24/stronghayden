import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import LeadingBar from './LeadingBar.jsx';
import BottomNav from './BottomNav.jsx';
import {isMobile} from 'react-device-detect';

import Button from '@material-ui/core/Button';
import {Helmet} from "react-helmet";
import axios from 'axios';

class ListingsPage extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
componentDidMount() {
    window.scrollTo(0, 0);
    const script = document.createElement("script");
    script.src = BuildOut.embed({
      token:     "85de2b584effdb53e40923ac5de37c8b85006ba8",
      plugin:    "inventory",
      target:    "buildout"
      });
    script.async = true;
   document.body.appendChild(script);
}
  render () {
    return (
      <div>
      <LeadingBar/>
      <div id="buildout" style={{paddingTop: isMobile ? '142px' : '80px'}}>
      </div>
   <BottomNav/>
      </div>
)
}
};

export default ListingsPage;