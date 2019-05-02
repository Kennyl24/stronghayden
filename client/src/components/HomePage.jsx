import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import final from './final.jpg';
import vineyards from './vineyards.jpg';
import newBack from './thisback.jpg';
import archer from './archer.jpg';
import {isMobile} from 'react-device-detect';

import NavBar from './NavBar.jsx';
import Button from '@material-ui/core/Button';
import LeadingBar from './LeadingBar.jsx';

class HomePage extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber:'707254-8891',
      background: newBack,
    }
    this.titleClick=this.titleClick.bind(this);
    this.rotatephotos=this.rotatephotos.bind(this);
  }
  titleClick(){
    location.reload();
  }
  componentDidMount() {
    const array = [final, archer, vineyards, newBack]
    let i = 0;
    // let timerId = setInterval(() => alert('tick'), 2000);
    setInterval(function() {

      if (i < array.length) {
        this.setState({
          background: array[i],
        })
          console.log(array[i]);
      }
      else return;
      i++;
  }.bind(this), 5000);
    window.scrollTo(0, 0);
    // this.rotatephotos();
}
  rotatephotos(){
    for (let i = 0; i < array.length; i++) {
      setInterval(() => { console.log(i) }, 5000);
  }
}
  render () {
    return (
      <div className="home-background" style={{position:'relative', top:'00px',backgroundColor: 'rgba(238, 238, 238, 0.41) !important', backgroundImage: `url(${this.state.background})`, backgroundBlendMode: 'color', backgroundRepeat: 'no-repeat', imageRendering: '-webkit-optimize-contrast', backgroundSize:'cover', height:'100vh', width: '100%', marginBottom:'0px'}}>
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