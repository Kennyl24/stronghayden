import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import LeadingBar from './LeadingBar.jsx';
import BottomNav from './BottomNav.jsx';
import AboutHeader from './AboutHeader.jsx';
import TeamExperience from './TeamExperience.jsx';
import Agents from './Agents.jsx';
import Mission from './Mission.jsx';
import AboutUs from './AboutUs.jsx';
import {isMobile} from 'react-device-detect';
import {Helmet} from "react-helmet";
import aboutsec from './aboutsec.jpg';

import Button from '@material-ui/core/Button';

class AboutPage extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      showIcon: false,
      odd: false
    }
  }
  componentDidMount() {
  let i = 0;
  setInterval(function() {

      if (i < 50) {
        this.setState({
          odd: !this.state.odd,
        });
      }
      else return;
      i++;
  }.bind(this), 7000);
  //   setTimeout(() => {
  //     this.setState({
  //       odd: !this.state.odd,
  //     })
  // }, 5000);
    window.scrollTo(0, 0);

}
  render () {
    return (
      <div className="test">
      <Helmet>
                <meta charSet="utf-8" />
                <title>About Strong & Hayden</title>
                <meta name="description" content="Learn about Strong & Hayden. Napa's leading commerical real estate team."/>
                <link rel="canonical" href="https://stronghayden.com/about" />
      </Helmet>
      <LeadingBar/>
      <AboutHeader/>
      {/* <h1 style={{fontWeight:'800', color:'#3d633b', fontSize:'40px', textAlign:'center'}}>About Strong & Hayden</h1> */}
      {/* <TeamExperience/> */}
      <AboutUs/>
      <div style={{height: isMobile ? '450px': '300px', backgroundColor:'#eee', color:'black'}}> 
      <h1 style={{textAlign:'center', margin:0, paddingTop:'20px', lineHeight:'40px', color:'green'}}> 
      Reviews
      </h1>
      {this.state.odd ? 
      <div className="serviceicon-two">
        <p className={isMobile ? 'about-us-mobile' :"about-us"}>"We have been looking for a space for a wine bar/tasting room in Napa. This is a tall order as the market is so competitive and limited. I feel very fortunate in finding this company. Since day one my realtor has been nothing other than responsive, professional, accommodating, and utterly knowledgeable about this market."</p>
        <h1 style={{textAlign:'center', marginTop:'20px', fontSize:'16px', lineHeight:'40px', color:'green'}}> 
      -Thomas M.
      </h1>
      <div style={{textAlign:'center'}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle fill="white" cx="12" cy="12" r="8"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle fill="#010101" cx="12" cy="12" r="8"/></svg>
      </div>
      </div>
      :
      <div className="serviceicon-two">
      <p className={isMobile ? 'about-us-mobile' :"about-us"}>"I called Strong & Hayden on a friend's recommendation when I found out I had one month to move my business.  They got back to me immediately and within 48 hours I was shaking hands with a realtor and submitting an offer on the perfect office space.  They have a real knowledge of what is available in the Napa community and are very efficient in connecting business owners to the space that will best suit their needs."</p>
      <h1 style={{textAlign:'center', marginTop:'20px', fontSize:'16px', lineHeight:'40px', color:'green'}}> 
    -Trisha T.
    </h1>
    <div style={{textAlign:'center'}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle fill="#010101" cx="12" cy="12" r="8"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle fill="white" cx="12" cy="12" r="8"/></svg>
      </div>
    </div>}
    
    </div>
  
      <div className="home-background" style={{position:'relative', top: isMobile ? '00px':'00px',backgroundColor: 'rgba(238, 238, 238, 0.41) !important', backgroundImage: isMobile ? null: `url(${aboutsec})`, backgroundRepeat: 'no-repeat', imageRendering: '-webkit-optimize-contrast', backgroundSize:isMobile ? 'contain':'cover', height: isMobile ? '550px' : '350px', width: '100%', marginBottom:'0px'}}>
      <div className="scrim2">
      <p className= {isMobile ? 'about-us-mobile2' :"about-us2"} style={{lineHeight: isMobile ? '25px': '35px'}}>
      Strong & Hayden Commercial Real Estate provides tenants, owners and investors with a broad range of real estate services in Napa and Solano Counties. With an experienced team of professionals who have sold and leased over 2,800,000 square feet in commercial transactions, the company’s extensive local expertise generates a product that is best for the client and sustainable for the community.
      Our team and industry relationships allow us to develop a truly value added experience for our clients. Innovative, aggressive, and progressive, the  Strong & Hayden Real Estate generates a product that is best for the client  and sustainable for the community. Put our extensive network to work for you.</p>
      </div>
      </div> 

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
     {this.state.showIcon ? <img className="ball2"src="https://i.ibb.co/XYp88J3/iconfinder-Arrow-Forward-1063879.png" alt="iconfinder-Arrow-Forward-1063879"  style={{height:'48px', width:'48px', marginLeft:'40px'}}border="0"/> : <span style={{height:'48px', width:'48px', marginLeft:'0px'}}></span> }
     {/* {this.state.showIcon ? <img className="ball2"src="https://i.ibb.co/XYp88J3/iconfinder-Arrow-Forward-1063879.png" alt="iconfinder-Arrow-Forward-1063879"  style={{height:'48px', width:'48px', marginLeft:'40px'}}border="0"/> : <span style={{height:'48px', width:'48px', marginLeft:'40px'}}></span> } */}
 </h1>
 
      </div>
      <BottomNav/>
      </div>
)
}
};

export default AboutPage;