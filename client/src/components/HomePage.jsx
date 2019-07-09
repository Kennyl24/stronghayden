import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import final from './final.jpg';
import vineyards from './vineyards.jpg';
import newBack from './thisback.jpg';
import thisone from './967.jpg';
import burgerfi from './burgerfi.jpg';
import newscreen from './newscreen.jpeg';
import homescreen from './aerial.jpg';
import century from './century.jpg';
import {isMobile} from 'react-device-detect';
import SearchBar from './SearchBar.jsx';
import Fab from '@material-ui/core/Fab';
import NavBar from './NavBar.jsx';
import Button from '@material-ui/core/Button';
import LeadingBar from './LeadingBar.jsx';
import ContactPaper from './ContactPaper.jsx';
import CheckoutForm from './CheckoutForm.jsx';
import {Elements, StripeProvider} from 'react-stripe-elements';
import VideoCover from 'react-video-cover'
import BottomNav from './BottomNav.jsx';
import {Helmet} from "react-helmet";
import {YouTubePlayer} from 'react-video-players';
import video from './video.mp4'
class HomePage extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber:'707254-8891',
      background: final,
      contactPaper: false,
      addres: '967 First Street Napa, CA 94559'
    }
    this.titleClick=this.titleClick.bind(this);
    this.rotatephotos=this.rotatephotos.bind(this);
  }
  titleClick(){
    location.reload();
  }
  componentDidMount() {
    const array = [final, newscreen, homescreen, burgerfi, century]
    const repeatedArray = array.concat(...Array(10).fill(array));
    const addressarray = [
      '1700, 1710 Soscol Avenue & 625 Imperial Way Napa, CA 94559',
      '1424-1436 Second Street Napa, CA 94559',
      '1700, 1710 Soscol Avenue & 625 Imperial Way Napa, CA 94559',
      '967 First Street Napa, CA 94559',
      'Gasser South Century Center Napa, CA 94559',  
      


  ]
    const repeatedArray2 = addressarray.concat(...Array(10).fill(addressarray));
    let i = 0;
    setInterval(function() {

      if (i < repeatedArray.length) {
        this.setState({
          background: repeatedArray[i],
          addres: repeatedArray2[i],
        });
          console.log(repeatedArray[i]);
      }
      else return;
      i++;
  }.bind(this), 5000);
    window.scrollTo(0, 0);
}
  rotatephotos(){
    for (let i = 0; i < array.length; i++) {
      setInterval(() => { console.log(i) }, 5000);
  }
}
  render () {
    return (
      <div>
      <LeadingBar/>
      {/* <div style={{paddingTop:'80px'}}>
      <img className="home-pictures"src={this.state.background} style={{minWidth:'100%', maxWidth:'100%', height:'550px'}}/> */}

      {/* <div>
        <YouTubePlayer config={{controls:0, autoplay:1, loop:1}} videoId="bAMaZg8bdC4" />
      </div> */}
      {/* <video className="background-video" loop autoPlay> */}
                {/* <source src={this.state.videoURL} type="video/mp4" /> */}
                {/* <source src={this.state.videoURL} type="video/ogg" /> */}
                {/* Your browser does not support the video tag. */}
       {/* </video> */}
       {/* <video className='background-video' autoPlay loop muted>
        <source src={this.state.videoUrl} type='video/mp4' />
      </video> */}
       {/* <iframe src="https://streamable.com/s/xz5ze/ksfkrl" frameborder="0" width="100%" height="100%" allowfullscreen style={{width:'100%',height:'100%', position:'absolute', left:'0px',top:'0px', overflow:'hidden'}}></iframe> */}
  {/* <img className="home-pictures"src={this.state.background} style={{minWidth:'100%', maxWidth:'100%', height:'550px'}}/> */}
       
        {/* </div> */}
      <div className="home-background" style={{position:'relative', backgroundPosition:'center', top:'-00px',backgroundColor: 'rgba(238, 238, 238, 0.41) !important',  backgroundRepeat: 'no-repeat', imageRendering: '-webkit-optimize-contrast', backgroundSize:'cover', height:'600px', width: '100%', marginBottom:'0px'}}>
      {/* <div style={{
  width: '300px',
  height: '300px',
  overflow: 'hidden',
}}> */}
<video id="background-video" loop autoPlay muted>
    <source src={video} type="video/mp4" />
    <source src={video} type="video/ogg" />
    Your browser does not support the video tag.
    
</video>
  {/* <iframe src='https://www.youtube.com/embed/w-LKDZNPst4' /> */}
{/* </div> */}
      <div className="front-text" style={{top: isMobile ? '20%' : '40%'}}>
      

      {/* <div className="serviceicon-test" style={{backgroundColor:'rgba(61, 99, 59, .3)',borderRadius:'60px', cursor:'pointer', height:'auto', width:'40%', marginLeft:'30%'}}>
      <h1 style={{color:'white', fontSize:'32px'}}>{this.state.addres}</h1>
      </div> */}
      
      {/* https://i.ibb.co/hVrQJKW/IMG-0583-copy.jpg */}
      {/* <img class="ball"src="https://i.ibb.co/HYDZR11/icons8-map-pin-100-1.png" alt="icons8-map-pin-100" border="0"/> */}
      <h1 style={{fontFamily: 'Open Sans",sans-serif', textAlign:'center', fontSize:isMobile ? '22px': '50px'}}>
      </h1>
      {/* <h2 style={{marginBottom:'30px' , fontWeight:'bolder'}}>A LEADER IN ALL FACETS OF COMMERCIAL REAL ESTATE.</h2> */}
     
      {/* <Button variant="contained"  onClick={() => window.location.href = '/listings'}style={{color:"white", backgroundColor:'#0c6e39', marginRight:'10px'}} >
        Find a Property
      </Button>
      <Button variant="contained"  onClick={() => window.location.href = '/contact'} style={{color:"#0c6e39", borderColor:'#0c6e39'}}>
        Contact Us
      </Button> */}
      </div>
      </div>
      {/* <div style={{textAlign:'center'}}>
      <Button variant="contained"  onClick={() => window.location.href = '/listings'}style={{color:"white", backgroundColor:'#0c6e39', marginRight:'10px'}} >
        Find a Property
      </Button>
      <Button variant="contained"  onClick={() => window.location.href = '/contact'} style={{color:"#0c6e39", borderColor:'#0c6e39'}}>
        Contact Us
      </Button> 
      </div> */}
      {/* <div style={{paddingTop:'300px'}}> */}
      {/* </div> */}
      {this.state.contactPaper ? <ContactPaper/> : null}
     {isMobile ? null : this.state.open ?
      <Fab variant="extended"  onClick={() => this.setState({contactPaper: !this.state.contactPaper, open:false})} style={{color:"red", position:'absolute', bottom:'10px', right:'10px', borderColor:'#0c6e39'}}>
      Close
  </Fab>
      : <Fab variant="extended"  onClick={() => this.setState({contactPaper: !this.state.contactPaper, open:true})} style={{color:"#0c6e39", position:'absolute', bottom:'10px', right:'10px', borderColor:'#0c6e39'}}>
        Contact Us
    </Fab>  }
      {/* </div> */}
      {/* </div> */}
      <SearchBar/>
      {/* <BottomNav/> */}
      </div>
)
}
};

export default HomePage;