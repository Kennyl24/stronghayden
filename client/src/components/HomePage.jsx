import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
// import newBack from './newBack.jpg';
// import newBack from './stronghayden.jpg';
// import newBack from './back.jpg';
import newBack from './thisback.jpg';
import {isMobile} from 'react-device-detect';

import NavBar from './NavBar.jsx';
import Button from '@material-ui/core/Button';
import LeadingBar from './LeadingBar.jsx';

class HomePage extends React.Component { 
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
      <div className="home-background" style={{position:'relative', top:'00px',backgroundColor: 'rgba(238, 238, 238, 0.41) !important', backgroundImage: `url(${newBack})`, backgroundBlendMode: 'color', backgroundRepeat: 'no-repeat', imageRendering: '-webkit-optimize-contrast', backgroundSize:'cover', height:'100vh', width: '100%', marginBottom:'0px'}}>
      <LeadingBar/>
      <div className="front-text" style={{top: isMobile ? '20%' : '40%'}}>
      <h1 style={{textShadow: '1px 1px black', fontSize:isMobile ? '32px': '46px'}}>
        We Provide, sales, leasing, consulting and Management Of Commercial Real Estate. 
      </h1>
      <h2 style={{textShadow: '1px 1px black', marginBottom:'30px'}}>A LEADER IN ALL FACETS OF COMMERCIAL REAL ESTATE.</h2>
      <Button variant="contained"  onClick={() => window.location.href = '/listings'}style={{color:"#43b686", borderColor:'#43b686', marginRight:'10px'}} >
        Find a Property
      </Button>
      <Button variant="contained"  onClick={() => window.location.href = '/contact'}style={{color:"white", backgroundColor:'#43b686'}}>
        Contact Us
      </Button>
      </div>
      </div>
)
}
};

export default HomePage;