import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import newBack from './newBack.jpg';
import LeadingBar from './LeadingBar.jsx';
import ServicesMap from './ServicesMap.jsx';
import BottomNav from './BottomNav.jsx';
import ServiceIconsMap from './ServiceIconsMap.jsx';
import Button from '@material-ui/core/Button';
import {isMobile} from 'react-device-detect';

class ServicesPage extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
}
  render () {
    return (
      <div>
        <LeadingBar/>
        <h1 style={{color:'black', paddingTop: isMobile? '150px': '100px', textTransform:'uppercase', marginTop:'2.5%', textAlign:'center', width:isMobile? '80%': '60%', marginLeft: isMobile? '10%' : '20%', borderBottom:'2px solid green'}}> What Services do we offer?</h1>
        <ServiceIconsMap/>
        
        <ServicesMap/>
        <BottomNav/>
      </div>
)
}
};

export default ServicesPage;