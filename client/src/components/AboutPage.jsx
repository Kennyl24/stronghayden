import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import newBack from './newBack.jpg';
import LeadingBar from './LeadingBar.jsx';
import BottomNav from './BottomNav.jsx';
import AboutHeader from './AboutHeader.jsx';
import TeamExperience from './TeamExperience.jsx';
import Agents from './Agents.jsx';
import Mission from './Mission.jsx';
import AboutUs from './AboutUs.jsx';
import {isMobile} from 'react-device-detect';

import Button from '@material-ui/core/Button';

class AboutPage extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      showIcon: false,
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
}
  render () {
    return (
      <div className="test">
      <LeadingBar/>
      <AboutHeader/>
      <h1 style={{fontWeight:'800', color:'#3d633b', fontSize:'25px', textAlign:'center'}}>ESTABLISHED LEADER IN ALL FACETS OF COMMERCIAL REAL ESTATE</h1>
      {/* <TeamExperience/> */}
      <p className= {isMobile ? 'about-us-mobile' :"about-us"}
      
      >Strong & Hayden Commercial Real Estate provides tenants, owners and investors with a broad range of real estate services in Napa and Solano Counties. With an experienced team of professionals who have sold and leased over 2,800,000 square feet in commercial transactions, the company’s extensive local expertise generates a product that is best for the client and sustainable for the community.
      Our team and industry relationships allow us to develop a truly value added experience for our clients. Innovative, aggressive, and progressive, the  Strong & Hayden Real Estate generates a product that is best for the client  and sustainable for the community. Put our extensive network to work for you.
      </p>
      <AboutUs/>
      <div onClick={() => window.location.href = '/team'} 
    className="extra-nav"
    onMouseEnter={() => {
      this.setState({
        showIcon:true,
      })
    }}
    onMouseLeave={() => {
      this.setState({
        showIcon:false,
      })
    }}
    >
      <h1 style={{textAlign:'center', lineHeight:'150px', color:'inherit'}}> 
      Our Agents 
     {this.state.showIcon ? <img className="ball2"src="https://i.ibb.co/XYp88J3/iconfinder-Arrow-Forward-1063879.png" alt="iconfinder-Arrow-Forward-1063879"  style={{height:'48px', width:'48px', marginLeft:'40px'}}border="0"/> : <span style={{height:'48px', width:'48px', marginLeft:'40px'}}></span> }
 </h1>
 
      </div>
      <BottomNav/>
      </div>
)
}
};

export default AboutPage;