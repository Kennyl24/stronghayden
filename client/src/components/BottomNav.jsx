import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {isMobile} from 'react-device-detect';

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
      <Paper style={{height:'auto', verticalAlign:'middle', paddingTop:'2%', paddingBottom:'5%', backgroundColor:'#929497'}}>
      <div style={{color: 'white'}}>
      <div className="grid" style={{paddingBottom: isMobile ? '100px' : '0px'}}> 
        <div className="grid-item">
        <div style={{marginBottom:'25px', fontSize:'14px'}} className="bottomnav_links"><a href="tel: (707) 226-2661" style={{color:'white', paddingBottom:'0px'}}> (707) 226-2661</a> <br/> </div>
      <div style={{marginBottom:'25px', fontSize:'14px'}}className="bottomnav_links"><a href="mailto:lgrayson@stronghayden.com" style={{color:'white', marginBottom:'0px'}}>lgrayson@stronghayden.com</a> <br/></div>
      <div style={{marginBottom:'25px', fontSize:'14px'}}className="bottomnav_links"><a href="https://www.google.com/maps/dir/4123+Solano+Ave,+Napa,+CA+94558/''/@38.3344478,-122.3566659,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x808500d2af41b48d:0x2760ab5bef29d629!2m2!1d-122.3216465!2d38.334453!1m5!1m1!1s0x808500d2af41b48d:0x2760ab5bef29d629!2m2!1d-122.3216465!2d38.334453" target="_blank" 
             style={{color: 'white', marginBottom:'15px'}}className="bottomnav_links"> 433 Soscol Avenue, Suite A110, Napa, CA 94559 </a> <br/> </div>
      <div style={{marginBottom:'25px', fontSize:'14px'}}className="bottomnav_links">Monday - Friday 8:30AM-6:00PM <br/> </div>
      <div style={{marginBottom:'25px', fontSize:'14px'}}className="bottomnav_links">© 2019 Ark-La-Tex Financial Services, LLC</div>
      <div style={{marginBottom:'25px', fontSize:'14px'}}className="bottomnav_links">NMLS#2143 </div>
          </div>
          <div className="grid-item">
         <div style={{display: 'flex', flexDirection:'column'}}>
          <div className="footer-subscribe-title"> 
            Subscribe to receive our latest tips!
          </div>
          <TextField
          style={{width: '100%', height: '50px'}}
          id="this-input"
          label="email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          value={this.state.email}
          onChange={(event) => {
            this.setState({
              email: event.target.value
            });
          }}
        />
        <Button onClick={this.submitted} variant="contained" style={{backgroundColor:"#242f6e", color: 'white'}}>
          Subscribe
      </Button>
      </div>
          </div>
          <div className="grid-item" style={{width: isMobile ? '90%' :'30%'}}>
          <span style={{marginBottom:'20px', fontSize:'16px'}}><a href='/home'className="bottomnav-links">Home</a></span> 
          <span style={{marginBottom:'20px', fontSize:'16px'}}><a href='/About'className="bottomnav-links">About</a></span>    
          <span style={{marginBottom:'20px', fontSize:'16px'}}><a href='/Blog'className="bottomnav-links">Blog</a></span>                                                                                                                                                                                                               
          <span style={{marginBottom:'20px', fontSize:'16px'}}><a href='/Vlog'className="bottomnav-links">Vlog</a></span>
          <span style={{marginBottom:'20px', fontSize:'16px'}}><a href='/Reviews'className="bottomnav-links">Reviews</a></span>  
          <span><a href='/Contact' className="bottomnav-links">Contact</a></span>
  <img style={{width:'100px', marginTop:'20px', height:'100px'}}src ="https://i.ibb.co/FHV0ffT/image-12.png"/>
   <div style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
        <ul style={{listStyle:'none', marginLeft:'-30px'}}>
        <li style={{textDecoration:'underline', cursor:'pointer', marginTop:'5px'}}> <a style={{color:'white'}} href="/Privacy">Privacy Policy </a></li>
        <li style={{textDecoration:'underline', cursor:'pointer', marginTop:'5px'}} onClick={() => window.location.href="http://www.nmlsconsumeraccess.org/"}>NMLS Consumer Access</li>
        </ul>
        </div>
          </div>
      </div> 
      </div> 
      </Paper>
    );
  }
}

export default BottomNav