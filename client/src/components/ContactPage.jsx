import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import newBack from './newBack.jpg';
import LeadingBar from './LeadingBar.jsx';
import BottomNav from './BottomNav.jsx';
import MapContainer from './MapContainer.jsx';
import GetInTouch from './GetInTouch.jsx';
import Button from '@material-ui/core/Button';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";


class ContactPage extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber:'707254-8891'
    }
    this.titleClick=this.titleClick.bind(this);
  }
  titleClick(){
    location.reload();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
}
  render () {
    return (
      <div>
      <LeadingBar/>
      <div style={{paddingTop: isMobile? '150px' : '90px',backgroundColor:'#ededed', paddingBottom:'2%', display:'flex', flexWrap:'wrap', maxWidth:'100%', flexDirection:'row'}}>
      <GetInTouch/>
      <div style={{width: isMobile? '100%' : '50%', paddingTop: isMobile? '12px': '0px'}}>
      {isMobile ? null : <MapContainer/>}
      </div>
      </div>
      <BottomNav/>
      </div>
)
}
};

export default ContactPage;