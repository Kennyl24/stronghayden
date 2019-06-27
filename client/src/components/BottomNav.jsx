import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {isMobile} from 'react-device-detect';
import { SocialIcon } from 'react-social-icons';

class BottomNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }
    this.submitted = this.submitted.bind(this);
  }
  submitted(){
    axios.post('/Email', {
      email: this.state.email,
    })
    .then( (response) =>  {
      setTimeout(() => {
      }, 500);
    })
    .catch( (error) => {
      return ('There seems to have been an error');
    });
    this.setState({
      email:'',
    })
  }

  render() {
    return (
      <Paper style={{height:'auto', verticalAlign:'middle', paddingTop:'2%', paddingBottom:'2%', backgroundColor:'#17252A'}}>
      <div style={{color: 'white'}}>
      <div className="grid" style={{paddingBottom: isMobile ? '100px' : '0px'}}> 
        <div className="grid-item" style={{order:2}}>
        <h1 style={{borderBottom:'2px solid green', fontSize:'24px', textAlign:'left', width:'60%'}}>CONNECT WITH US</h1>
        <div style={{textAlign:'left'}}>
        <SocialIcon style={{marginRight:'10px', marginBottom:'15px'}}url="https://twitter.com/stronghayden" />
        <SocialIcon style={{marginRight:'10px', marginBottom:'15px'}} url="https://www.facebook.com/StrongHayden/" />
        <SocialIcon style={{marginBottom:'15px'}} url="https://www.youtube.com/channel/UCYEoUjdS2NWUJHchJWvvTlw" />
        </div>
          </div>
          <div className="grid-item" style={{order:0}}>
        <h1 style={{borderBottom:'2px solid green', fontSize:'24px', textAlign:'left', width:'60%'}}>CONTACT US</h1>
       <div style={{marginBottom:'15px', fontSize:'14px'}} className="bottomnav_links"><a href="tel: (707) 226-2661" style={{color:'white', paddingBottom:'0px'}}>Phone: (707) 226-2661</a> <br/> </div>
        <div style={{marginBottom:'15px', fontSize:'14px'}} className="bottomnav_links"><a style={{color:'white', paddingBottom:'0px'}}> FAX: (707) 226-2339</a> <br/> </div>
      <div style={{marginBottom:'15px', fontSize:'14px'}}className="bottomnav_links"><a href="mailto:admin@stronghayden.com" style={{color:'white', marginBottom:'0px'}}>Email: admin@stronghayden.com</a> <br/></div>
      {/* <div style={{marginBottom:'15px', fontSize:'14px'}}className="bottomnav_links"><a href="https://www.google.com/maps/dir//433+Soscol+Ave+A110,+Napa,+CA+94559/@38.2913408,-122.2796044,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8085060d64b28763:0x86c2a7bfd93882c1!2m2!1d-122.2763325!2d38.2893383" target="_blank" 
             style={{color: 'white', marginBottom:'15px'}}className="bottomnav_links"> 433 Soscol Avenue, Suite A110, Napa, CA 94559 </a> <br/> </div>
      <div style={{marginBottom:'25px', fontSize:'14px'}}className="bottomnav_links">Monday - Friday 8:30AM-5:00PM <br/> </div> */}
      
          </div>
          <div className="grid-item" style={{order:0}}>
        <h1 style={{borderBottom:'2px solid green', fontSize:'24px', textAlign:'left', width:'60%'}}>OUR OFFICE</h1>
              <div style={{marginBottom:'15px', fontSize:'14px'}}className="bottomnav_links"><a href="https://www.google.com/maps/dir//433+Soscol+Ave+A110,+Napa,+CA+94559/@38.2913408,-122.2796044,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8085060d64b28763:0x86c2a7bfd93882c1!2m2!1d-122.2763325!2d38.2893383" target="_blank" 
             style={{color: 'white', marginBottom:'15px'}}className="bottomnav_links"> 433 Soscol Avenue, Suite A110 <br/>Napa, CA 94559 </a> <br/> </div>
      <div style={{marginBottom:'25px', fontSize:'14px'}}className="bottomnav_links">Monday - Friday 8:30AM-5:00PM <br/> </div>
      </div>
           {/* <div className="grid-item" style={{order: 1}}>
           <h1 style={{borderBottom:'2px solid green', fontSize:'24px', textAlign:'left', width:'60%'}}>MENU</h1>
          <div style={{display:'flex', flexDirection:'column', textAlign:'left'}}>
          <span style={{marginBottom:'10px', fontSize:'16px'}}><a href='/home'className="bottomnav_links">Home</a></span> 
          <span style={{marginBottom:'10px', fontSize:'16px'}}><a href='/About'className="bottomnav_links">About</a></span>    
          <span style={{marginBottom:'10px', fontSize:'16px'}}><a href='/agents'className="bottomnav_links">Agents</a></span> 
          <span style={{marginBottom:'10px', fontSize:'16px'}}><a href='/Blog'className="bottomnav_links">Blog</a></span>                                                                                                                                                                                                               
          <span style={{marginBottom:'10px', fontSize:'16px'}}><a href='/services'className="bottomnav_links">Services</a></span>
          <span style={{marginBottom: '10px', fontSize:'16px'}}><a href='/listings'className="bottomnav_links">Listings</a></span>  
          <span style={{marginBottom: '10px', fontSize:'16px'}}><a href='/contact'className="bottomnav_links">Contact</a></span>  
          </div>
          </div> */}
      </div> 
      </div> 
      <footer style={{color:'grey'}}>
     <span style={{cursor:'pointer'}}>Privacy Policy</span> / <span style={{cursor:'pointer'}}>Sitemap </span>
      </footer>
      </Paper>
    );
  }
}

export default BottomNav