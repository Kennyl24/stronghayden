import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import {isMobile} from 'react-device-detect';
import vineyard from './vineyards.jpg';

import team from './team.jpg';

class AboutHeader extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
      <div className="scrim">
      <div className="home-background" style={{ position:'relative', top: isMobile ? '120px':'00px',backgroundColor: 'rgba(238, 238, 238, 0.41) !important', backgroundImage: `url(${vineyard})`, backgroundRepeat: 'no-repeat', imageRendering: '-webkit-optimize-contrast', backgroundSize:isMobile ? 'contain':'cover', height: isMobile ? '400px' : '80vh', width: '100%', marginBottom:'0px'}}>
       {/* <div style={{backgroundImage: `url(${adobe})`, backgroundBlendMode: 'color', backgroundRepeat: 'no-repeat', imageRendering: '-webkit-optimize-contrast', backgroundSize:'cover', height:'60vh', width: '100%',}}> */}
     
      <h1 style={{color:isMobile ? '#3c633a' :'white', fontWeight:'800', textAlign:'center', paddingTop:isMobile ? '50px': '200px'}}> ABOUT US</h1>
      <h1 style={{fontWeight:'800', color: isMobile ? 'white' : 'black', fontSize:'25px', textAlign:'center'}}>
      Napa Valley's leader in all facets of commercial real estate.
       {/* LEADER IN ALL FACETS OF COMMERCIAL REAL ESTATE */}
       </h1>

       {/* {isMobile ? null : <h1 style={{fontWeight:'800', color:'white', fontSize:'20px', textAlign:'center'}}>ESTABLISHED LEADER IN ALL FACETS OF COMMERCIAL REAL ESTATE</h1> } */}
       </div>
      </div>
)
}
};

export default AboutHeader;