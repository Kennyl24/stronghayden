import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import {isMobile} from 'react-device-detect';


class AboutHeader extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
      <div>
        <h1 style={{color:'#006f37', textAlign:'center', paddingTop:isMobile ? '180px': '120px'}}> About Strong & Hayden</h1>
        <h1 style={{color:'black', fontSize:'16px', textAlign:'center'}}>ESTABLISHED TO BECOME A LEADER IN ALL FACETS OF COMMERCIAL REAL ESTATE.</h1>
      </div>
)
}
};

export default AboutHeader;