import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';


class ServiceIcons extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.icon.title,
    }
  }
  render () {
    return (
      <div style={{maxWidth:'300px', marginRight:'100px'}}>
        <img src={this.props.icon.image} style={{height:'128px', width:'128px'}}/> 
        {/* <h3 style={{color:'#7e7575', marginRight:'10px', marginLeft:'10px', fontWeight:'300', }}>
        
        {this.props.icon.title}</h3> */}
        {this.props.icon.title}
      </div>
)
}
};

export default ServiceIcons;