import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import {isMobile} from 'react-device-detect';


class TeamExperience extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
      <div>
      <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', alignItems:'center', marginLeft:'20%', marginRight:'20%'}}>
        <div className="team-circle">
        <p style={{marginTop:'40px', fontWeight:'800'}}>Over 250,000 SQ FT. Leased</p>
          </div>
         <div className="team-circle">
         <p style={{marginTop:'30px', fontWeight:'800'}}>Over $50,000,000 Sold</p>
          </div>
          <div className="team-circle">
          <p style={{marginTop:'40px', fontWeight:'800'}}> Over 2,000,000 SQ FT Sold</p>
          </div>
      </div>
      <div style={{marginLeft: isMobile ? '20px': '20%', marginRight: isMobile ? '20px': '20%', marginTop:'50px'}}>
      <p className="about-us"
      
      >Strong & Hayden Commercial Real Estate provides tenants, owners and investors with a broad range of real estate services in Napa and Solano Counties. With an experienced team of professionals who have sold and leased over 2,800,000 square feet in commercial transactions, the company’s extensive local expertise generates a product that is best for the client and sustainable for the community.
      Our team and industry relationships allow us to develop a truly value added experience for our clients. Innovative, aggressive, and progressive, the  Strong & Hayden Real Estate generates a product that is best for the client  and sustainable for the community. Put our extensive network to work for you.
      </p>
      </div>
      </div>
)
}
};

export default TeamExperience;