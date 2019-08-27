import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import LeadingBar from './LeadingBar.jsx';
import BottomNav from './BottomNav.jsx';
import {isMobile} from 'react-device-detect';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import {Helmet} from "react-helmet";
import axios from 'axios';
import Modal from 'react-responsive-modal';
import Iframe from 'react-iframe'
import IframeComm from "react-iframe-comm";
import ShareButton from 'react-social-share-buttons'

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
} from 'react-share';
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon,
} from 'react-share';
let text;
let y;
class ListingsPage extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      open: false,  
      email: '',
      response:null,
      loaded: false,
      showShare: false,
      buildOutLoaded: false
    }
    this.onCloseModal = this.onCloseModal.bind(this);
    this.submitIt = this.submitIt.bind(this);
    this.resizeIframe = this.resizeIframe.bind(this);
    this.test = this.test.bind(this);
    this.setUserAgent = this.setUserAgent.bind(this);
    this.showShare = this.showShare.bind(this);
    this.handleFrameTasks = this.handleFrameTasks.bind(this);
  }
    componentWillUnmount() {
    window.removeEventListener("message", this.handleFrameTasks);
    }
    componentWillMount(){
    // this.test();
    }
    showShare(){
      this.setState({
        showShare: !this.state.showShare
      })
    }
    handleFrameTasks(e) {
    }
    setUserAgent(window, userAgent) {
      if (window.navigator.userAgent != userAgent) {
          var userAgentProp = { get: function () { return userAgent; } };
          try {
              Object.defineProperty(window.navigator, 'userAgent', userAgentProp);
          } catch (e) {
              window.navigator = Object.create(navigator, {
                  userAgent: userAgentProp
              });
          }
      }
  }
componentWillMount() {
    window.scrollTo(0, 0);
}
componentDidMount(){
  // Get the image id, style and the url from it
// style = img.currentStyle || window.getComputedStyle(img, false),
// bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");

// Display the url to the user   

  const s = document.createElement("script");
  s.src="//buildout.com/api.js?v8" 
  const script = document.createElement("script");
  script.src = BuildOut.embed({
    token:     "85de2b584effdb53e40923ac5de37c8b85006ba8",
    plugin:    "inventory",
    target:    "buildout",
  });
   
  document.querySelector('body').appendChild(script);
    if(this.props.location.customObject !== undefined) {
      console.log('hello')
        window.location = window.location + '#loaded';
        window.location.reload();
  }
}
componentDidUpdate(){
  text = document.getElementsByClassName('plugin-header-address');
  if(text){
  this.setState({
    innerHTML: text.innerText()
  }, ()=> {
    console.log(this.state.innerHTML)
  });
  let shareImage = document.getElementsByClassName('carousel-image carousel-image-bg')[0];
  style = shareImage.currentStyle || window.getComputedStyle(shareImage, false);
  bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
  console.log(bi);
  this.setState({
    innerHTML: text.innerHTML()
  }, ()=> {
    console.log(this.state.innerText)
  });
} else {
  return;
}
}
onCloseModal(){
  this.setState({
    open: false
  })
}
loaded(){
}
resizeIframe(obj){
}
test(){
  console.log('hello')
  let y = document.getElementsByClassName("col-auto text-muted")[0];
  console.log(y);
  let x  = document.getElementsByClassName("plugin-header-title")[0];
  console.log(x)
  for (var i = 0; i < x.length; i++) {
    let test = x[i].innerText;
    console.log(test)
  }
}
submitIt(){
  axios.post('/Subscribe', {
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
    email: '',
  });
}
  render () {
    return (
      <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Strong & Hayden Commercial Listings</title>
                <meta name="description" content="The latest Strong & Hayden commercial real estate listings."/>
            
            
            <title>Strong & Hayden Commercial Listings</title>
            <meta name="keywords" content="Napa, Vallejo, Commerical Real Estate, Latest lisitings, hotels, property, vineyards" />
            <meta name="description" content="The Latest Commercial Real Estate Listings in Napa and it's surronding areas" />
            <meta name="og:description" content="The Latest Commercial Real Estate Listings in Napa and it's surronding areas" />
            <meta property="og:title" content={this.state.innerHTML ? this.state.innerHTML : 'Commercial Listings'} />
            <meta property="og:image" content="https://imgs.xkcd.com/comics/error_code.png" />
            <meta property="og:url" content={window.location.href}/>
      </Helmet>
      <LeadingBar/>
      <Modal
          open={this.state.open}
          onClose={this.onCloseModal}
          center
          classNames={{
            modal: isMobile ? 'modal-test' : null,
            transitionEnter: 'transitionEnter',
            transitionEnterActive: 'transitionEnterActive',
            transitionExit: 'transitionExitActive',
            transitionExitActive: 'transitionExitActive',
          }}
          animationDuration={1000}
        >
        <div style={{marginTop:'20px', textAlign:'center', fontSize:'22px'}}>
          <h4 style={{color:'#006f37', fontFamily:'Gotham'}}>To receive our weekly hot sheet of our latest properties</h4>
          <p>Subscribe Today!</p>
          </div>
        <div style={{display:'flex', flexDirection:isMobile ? 'column' : 'row'}}>
        <TextField
          style={{width: isMobile? 'auto': '400px',height: '50px' , marginRight: '15px'}}
          id="outlined-email-input"
          label="Email"
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
          <Button onClick={this.submitIt} variant="contained"style={{marginTop:'3%', width: isMobile ? 'auto' :'20%', minWidth:'150px', backgroundColor:"#006f37", color: 'white'}}> 
          Submit
          </Button>
          </div>
      </Modal>
      <div style={{height:isMobile ? '150px' : '82px'}}>
        </div>
        <div id='buildout'/>
        <div onClick={this.test}style={{position:'fixed', borderRadius:'0px', bottom: '40%', left:'0%'}}> 
    {/* <h1 style={{fontSize:'16px', textAlign:'center', color:'black', backgroundColor:'white', margin: 0}}>Share</h1> */}
    {/* <Button style={{width:'200px', backgroundColor:'white', borderRadius:'20px', color:'black'}} onMouseOver={this.showShare} variant="contained">Share</Button> */}
{/*  {this.state.showShare ?  */}
  <div style={{display:'flex', flexDirection:'column'}}>
  {/* <div>
            Hey, share me!
            <ShareButton
                compact
                socialMedia={'facebook'}
                url={window.location.href}
                media={"https://imgs.xkcd.com/comics/error_code.png"}
                text="Sit by a lake"
            />
        </div> */}
  {/* <span style={{cursor:'pointer'}}> */}
  {/* <div>
  <FacebookShareButton style={{cursor:'pointer'}}children="Listing" url={window.location.href} hashtag="#StrongandHayden">
  <FacebookIcon size={40} round={false} />
  </FacebookShareButton>
  </div> */}
  {/* <div>

  <LinkedinShareButton style={{cursor:'pointer'}} children="Listing" url={window.location.href}>
  <LinkedinIcon size={40} round={false} />
  </LinkedinShareButton>
  </div>

  <div>

  <TwitterShareButton style={{cursor:'pointer'}} children="Listing" url={window.location.href}  via={'StrongHayden'} hashtags={["StrongandHayden"]}>
  <TwitterIcon size={40} round={false} />
  </TwitterShareButton>
  </div>
  <div>

  <EmailShareButton style={{cursor:'pointer'}} children="Listing" url={window.location.href}>
  <EmailIcon size={40} round={false} />
  </EmailShareButton>
  </div> */}
  {/* </span> */}

  </div> 
    </div>
   <BottomNav/>
   
      </div>
)
}
};

export default ListingsPage;


