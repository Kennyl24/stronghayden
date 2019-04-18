import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';


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
      <div style={{width:'60%', marginLeft:'20%', marginRight: "20%"}}>
        <h1 style={{color:'black', fontSize:'25px', width:'80%', borderBottom:'2px solid green'}}>
          {this.props.service.title}
          </h1>
          <div style={{display:'flex', flexDirection:'row'}}>
          <p style={{marginRight: this.props.service.key % 2 !== 0 ? 0 : '40px', marginLeft:  this.props.service.key % 2 !== 0 ? '40px' : '0px'}}>
          {this.props.service.text}
          </p>
          <img src={this.props.service.image} style={{
            order: this.props.service.key % 2 !== 0 ? -1 : 1,
            minHeight:'180px',
            minWidth:'250px', 
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