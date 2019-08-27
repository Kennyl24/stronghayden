import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
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
import {Helmet} from "react-helmet";


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
        <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Strong & Hayden</title>
        <meta name="description" content="The Strong & Hayden Team's Agents"/>
        <meta name="keywords" content="Napa, Vallejo, Commerical Real Estate, Latest lisitings, hotels, property, vineyards" />
            <meta name="description" content="The Latest Commercial Real Estate Listings in Napa and it's surronding areas" />
            <meta name="og:description" content="The Latest Commercial Real Estate Listings in Napa and it's surronding areas" />
            <meta property="og:title" content="Contact Strong & Hayden" />
            {/* <meta property="og:image" content={this.state.agent.image} /> */}
            <meta property="og:url" content={window.location.href}/>
        {/* <link rel="canonical" href="https://stronghayden.com/agents/" /> */}
            <link rel="canonical" href="https://stronghayden.com/contact" />
      </Helmet>
      <LeadingBar/>
      <div style={{paddingTop: isMobile? '150px' : '80px',backgroundColor:'white', paddingBottom:'2%', display:'flex', flexWrap:'wrap', maxWidth:'100%', flexDirection:'row'}}>
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