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
let x;
let y;
class ListingsPage extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      open: false,  
      email: '',
      response:null,
      loaded: false,
    }
    this.onCloseModal = this.onCloseModal.bind(this);
    this.submitIt = this.submitIt.bind(this);
    this.resizeIframe = this.resizeIframe.bind(this);
    this.test = this.test.bind(this);
    this.setUserAgent = this.setUserAgent.bind(this);

    this.handleFrameTasks = this.handleFrameTasks.bind(this);
  }
    componentWillUnmount() {
    window.removeEventListener("message", this.handleFrameTasks);
    }
    componentWillMount(){
    this.test();
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
componentDidMount() {
    window.scrollTo(0, 0);
    setTimeout(function(){ 
      this.setState({
        open:true
      })
    }.bind(this), 8000);
    const s = document.createElement("script");
    s.src="//buildout.com/api.js?v8" 
    const script = document.createElement("script");
    script.src = BuildOut.embed({
      token:     "85de2b584effdb53e40923ac5de37c8b85006ba8",
      plugin:    "inventory",
      target:    "buildout",
    });
    script.async = true;
    document.querySelector('body').appendChild(script);
  
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

  {/* {this.props.location.customObject !== undefined ? 
  <iframe 
    // sandbox='allow-scripts'
    ref={(f) => {this.ifr = f
    // console.log('hello', this.ifr.src)
    }} 
    id="inlineFrameExample"
    title="Inline Frame Example"
    width="100%"
    height="1500px"
    onLoad={(obj) => 
      this.resizeIframe(obj)
      // alert(this.contentWindow)
    }

    src={`https://buildout.com/plugins/85de2b584effdb53e40923ac5de37c8b85006ba8/inventory?propertyType=${this.props.location.customObject.propertyNumber}&saleOrLease=${this.props.location.customObject.listingType}&searchText=${this.props.location.customObject.search}`}
     >
</iframe> : 
 <div id='buildout'/>
 } */}
   <BottomNav/>
      </div>
)
}
};

export default ListingsPage;


