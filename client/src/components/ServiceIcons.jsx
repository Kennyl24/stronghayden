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
      <div style={{maxWidth:'300px', margin:'auto'}}>
        <img src={this.props.icon.image} style={{height:'128px', width:'128px'}}/> 
        {this.props.icon.title}
      </div>
)
}
};

export default ServiceIcons;