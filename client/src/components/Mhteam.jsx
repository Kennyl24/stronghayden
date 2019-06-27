import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import mhteam from './mhteam.jpg';
import {isMobile} from 'react-device-detect';
import LeadingBar from './LeadingBar.jsx';
import BottomNav from './BottomNav.jsx';


class Mhteam extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
      <div>
      <LeadingBar/>
      <div className="home-background" style={{position:'relative', top: isMobile ? '120px':'00px',backgroundColor: 'rgba(238, 238, 238, 0.41) !important', backgroundImage: `url(${mhteam})`, backgroundRepeat: 'no-repeat', imageRendering: '-webkit-optimize-contrast', backgroundSize:isMobile ? 'contain':'cover', height: isMobile ? '400px' : '90vh', width: '100%', marginBottom:'0px'}}>
      <h1 style={{color:'white', fontWeight:'800', textAlign:'center', paddingTop:isMobile ? '100px': '100px'}}>Michael Holcomb Commercial Partners</h1>
      </div>
      <BottomNav/>
      </div>
)
}
};

export default Mhteam;