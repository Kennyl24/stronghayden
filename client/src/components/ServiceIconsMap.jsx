import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import ServiceIcons from './ServiceIcons.jsx';

const services = [
  {
    title: <h3 style={{color:'#7e7575', marginRight:'10px', marginLeft:'10px', fontWeight:'300', }}>BROKERAGE <br/> SERVICES</h3>,
    image: 'https://i.ibb.co/Xjh80kS/1851814-512.png',
    key: 1,
    ref: 'brokerage',
  },
  {
    title: <h3 style={{color:'#7e7575', marginRight:'10px', marginLeft:'10px', fontWeight:'300', }}>INVESTMENT <br/> SERVICES</h3>,
    image: 'https://i.ibb.co/kcXQ9Y6/2639841-512.png',
    key: 2,
    ref: 'investment',
  },
  {
    title: <h3 style={{color:'#7e7575', marginRight:'10px', marginLeft:'10px', fontWeight:'300', }}>CONSTRUCTION <br/> MANAGEMENT & <br/> DEVOLOPMENT</h3>,
    image: 'https://i.ibb.co/F4b82Nw/4137181-512.png',
    key: 3,
    ref: 'construction',
  },
  {
    title: <h3 style={{color:'#7e7575', marginRight:'10px', marginLeft:'10px', fontWeight:'300', }}>MARKET <br/> RESEARCH <br/> ANALYSIS</h3>,
    image: 'https://i.ibb.co/609bfJt/3957374-512.png',
    key: 4,
    ref: 'market',
  }
]
class ServiceIconsMap extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
      <div>
        <div className="serviceicon-container">
        {services.length > 0 ? services.map((icon, key) => 
        <ServiceIcons
        icon={icon} 
        key={key} 
        />) : null}
    </div>
      </div>
)
}
};

export default ServiceIconsMap;