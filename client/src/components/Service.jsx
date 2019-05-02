import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import {isMobile} from 'react-device-detect';


class Service extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount(){
    console.log(this.props.service.index)
  }
  render () {
    return (
      <div style={{width:'100%', paddingBottom:'40px', paddingTop:'40px', backgroundColor: this.props.service.key % 2 !== 0 ? '#f5f5f5' : 'white'}}>
      <div style={{width: isMobile ? '100%' : '60%', marginLeft: isMobile ? '0%' : '20%', marginRight: isMobile ? '0%' : "20%"}}>
        <h1 style={{color:'black', textAlign:isMobile ? 'center' : null, fontSize:'25px', width:'80%', marginLeft: isMobile ? '10%': null, borderBottom:'2px solid green'}}>
          {this.props.service.title}
          </h1>
          <div style={{display:'flex', flexDirection:'row', flexWrap: isMobile ? 'wrap' :'nowrap'}}>
          <p style={{marginRight: isMobile ? '10px' : this.props.service.key % 2 !== 0 ? 0 : '40px', marginLeft:  isMobile ? '10px' : this.props.service.key % 2 !== 0 ? '40px' : '0px',
        
        letterSpacing: isMobile ? '0px' : 'inherit', textAlign: isMobile ? 'center' : 'inherit'
        }}>
          {this.props.service.text}
          </p>
          <img src={this.props.service.image} style={{
            order: isMobile ? -1 : this.props.service.key % 2 !== 0 ? -1 : 1,
            minHeight:'180px',
            minWidth:'250px', 
            marginLeft: isMobile ? '60px' : null,
            height:'180px', 
            width:'250px'}}
            />
          </div>
      </div>
      </div>
)
}
};

export default Service;