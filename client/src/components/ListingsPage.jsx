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
      console.log(this.ifr)
    // if(e.data.from.iframe === "load_products");
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
  function setUserAgent(element) {
    chrome.runtime.sendMessage(
        {action: "GET_USERAGENT"},

        function (customUserAgent) {
            // console.log('customUserAgent', customUserAgent)
            if (!customUserAgent)
                return false;
            var a = document.createElement("script");
            a.type = "text/javascript";
            a.innerText += "Object.defineProperty(window.navigator, 'userAgent', { get: function(){ return '" +
                customUserAgent + "'; } });";
            element.documentElement.insertBefore(a, element.documentElement.firstChild)
        }
    );
}
  this.test();
  // window.addEventListener("message", this.handleFrameTasks);
    window.scrollTo(0, 0);
    setTimeout(function(){ 
      console.log('timeouting')
      this.setState({
        open:true
      })
    }.bind(this), 8000);
    // const s = document.createElement("script");
    // s.src="//buildout.com/api.js?v8" 
    // const script = document.createElement("script");
    // script.src = BuildOut.embed({
    //   token:     "85de2b584effdb53e40923ac5de37c8b85006ba8",
    //   plugin:    "inventory",
    //   target:    "buildout"
    // });
    // script.async = true;
    // document.querySelector('body').appendChild(script);
    // var y = (x.contentWindow || x.contentDocument);
    // if (y.document)y = y.document;
    // y.body.style.backgroundColor = "red";
    // this.setUserAgent(document.getElemenentById('buildout').contentWindow, 'MANnDAaR Fake Agent');
}
onCloseModal(){
  this.setState({
    open: false
  })
}
loaded(){
  console.log('loaded')
  x = document.getElementById('buildout');
  console.log(x);
  // console.log(x.contentWindow)
  // y = (x.contentWindow || x.contentDocument);
  // if (y.document)y = y.document;
  // y.body.style.backgroundColor = "red";
}
resizeIframe(obj){
  // function resizeIframe(obj) {
    // obj.contentWindow.document;
    // y.body.style.backgroundColor = "red";
// }
}
test(){
  // axios.get('/buildout.com/api.js?v8')
  //    .then((response) => {
  //      console.log(response);
  //     //  const test = response.config.url.substring(1);
  //      this.setState({loaded: true, response: response})
  //    })
  //   .catch((error)=>{
  //      console.log(error);
  //   });
  axios.get('/https://buildout.com/plugins/85de2b584effdb53e40923ac5de37c8b85006ba8/inventory')
  .then((response) => {
    // handle success
    console.log(response);
    this.setState({ response: response})
  })
    
  .catch((error) => {
    // handle error
    console.log(error);
  })
  .finally(() => {
    // always executed
  });

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
        {/* <div id="script" /> */}

        {/* <a href="#" onClick={top.window.location.href=''}> */}
      
        {/* <div id="buildout"></div> */}
{/* <script type="text/javascript" src="//buildout.com/api.js?v8"></script> */}

{/* <div id='buildout' onClick={console.log('hello')} onLoad={this.loaded()}/> */}
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

    src= {this.props.location.customObject !== undefined ? 
      `https://buildout.com/plugins/85de2b584effdb53e40923ac5de37c8b85006ba8/inventory?propertyType=${this.props.location.customObject.propertyNumber}&saleOrLease=${this.props.location.customObject.listingType}&searchText=${this.props.location.customObject.search}`
    : this.state.feelsgood ? 
    'https://buildout.com/plugins/85de2b584effdb53e40923ac5de37c8b85006ba8/inventory/1200Firststreetnapa'
    :
    
    'https://buildout.com/plugins/85de2b584effdb53e40923ac5de37c8b85006ba8/inventory'
     }>
</iframe>
{/* </a> */}
   <BottomNav/>
      </div>
)
}
};

export default ListingsPage;


// import React from 'react';
// import ReactDOM from 'react-dom';

// import { Link } from 'react-router-dom';
// import LeadingBar from './LeadingBar.jsx';
// import BottomNav from './BottomNav.jsx';
// import {isMobile} from 'react-device-detect';
// import TextField from '@material-ui/core/TextField';

// import Button from '@material-ui/core/Button';
// import {Helmet} from "react-helmet";
// import axios from 'axios';
// import Modal from 'react-responsive-modal';
// import Iframe from 'react-iframe'
// import IframeComm from "react-iframe-comm";

// class ListingsPage extends React.Component { 
//   constructor(props) {
//     super(props);
//     this.state = {
//       open: false,  
//       email: '',
//     }
//     this.onCloseModal = this.onCloseModal.bind(this);
//     this.submitIt = this.submitIt.bind(this);
//     this.handleFrameTasks = this.handleFrameTasks.bind(this);
//     this.setUserAgent = this.setUserAgent.bind(this);
//   }
//   setUserAgent(window, userAgent) {
//     if (window.navigator.userAgent != userAgent) {
//         var userAgentProp = { get: function () { return userAgent; } };
//         try {
//             Object.defineProperty(window.navigator, 'userAgent', userAgentProp);
//         } catch (e) {
//             window.navigator = Object.create(navigator, {
//                 userAgent: userAgentProp
//             });
//         }
//     }
// }

//     componentWillUnmount() {
//     // this.setUserAgent(document.querySelector('iframe').contentWindow, 'MANnDAaR Fake Agent');
//     window.removeEventListener("message", this.handleFrameTasks);
//     }
//     handleFrameTasks(e) {
//       console.log(this.iframe)
//     if(e.data.from.iframe === "load_products");
//     }
// componentDidMount() {
//   // document.getElementById("inlineFrameExample").contentDocument.addEventListener('click', function(event) {clic(this.id);}, false);

//   window.addEventListener("message", this.handleFrameTasks);
//     window.scrollTo(0, 0);
//     setTimeout(function(){ 
//       console.log('timeouting')
//       this.setState({
//         open:true
//       })
//     }.bind(this), 8000);
//   //   const script = document.createElement("script");
//   //   script.src = BuildOut.embed({
//   //     token:     "85de2b584effdb53e40923ac5de37c8b85006ba8",
//   //     plugin:    "inventory",
//   //     target:    "buildout"
//   //     });
//   //   script.async = true;
//   //  document.body.appendChild(script);
// }
// onCloseModal(){
//   this.setState({
//     open: false
//   })
// }
// submitIt(){
//   axios.post('/Subscribe', {
//     email: this.state.email,
//   })
//   .then( (response) =>  {
//     setTimeout(() => {
//     }, 500);
//   })
//   .catch( (error) => {
//     return ('There seems to have been an error');
//   });
//   this.setState({
//     email: '',
//   });
// }
//   render () {
//     return (
    
//       <div>
//           {/* <Helmet>
// <script type="text/javascript" src="//buildout.com/api.js?v8"></script>
// <script type="text/javascript">
// 	{BuildOut.embed({
// 		token:     "85de2b584effdb53e40923ac5de37c8b85006ba8",
// 		plugin:    "inventory",
// 		target:    "buildout"
// 	})};
// </script>
//       </Helmet> */}
//       <LeadingBar/>
//       <Modal
//           open={this.state.open}
//           onClose={this.onCloseModal}
//           center
//           // styles={
//           //   modal={
//           //     maxWidth:'10px',
//           //   }
//           // }
//           classNames={{
//             modal: isMobile ? 'modal-test' : null,
//             transitionEnter: 'transitionEnter',
//             transitionEnterActive: 'transitionEnterActive',
//             transitionExit: 'transitionExitActive',
//             transitionExitActive: 'transitionExitActive',
//           }}
//           animationDuration={1000}
//         >
//         <div style={{marginTop:'20px', textAlign:'center', fontSize:'22px'}}>
//           <h4 style={{color:'#006f37', fontFamily:'Gotham'}}>To receive our weekly hot sheet of our latest properties</h4>
//           <p>Subscribe Today!</p>
//           </div>
//         <div style={{display:'flex', flexDirection:isMobile ? 'column' : 'row'}}>
//         <TextField
//           style={{width: isMobile? 'auto': '400px',height: '50px' , marginRight: '15px'}}
//           id="outlined-email-input"
//           label="Email"
//           type="email"
//           name="email"
//           autoComplete="email"
//           margin="normal"
//           variant="outlined"
//           value={this.state.email}
//           onChange={(event) => {
//             this.setState({
//               email: event.target.value
//             });
//           }}
//         />
//           <Button onClick={this.submitIt} variant="contained"style={{marginTop:'3%', width: isMobile ? 'auto' :'20%', minWidth:'150px', backgroundColor:"#006f37", color: 'white'}}> 
//           Submit
//           </Button>
//           </div>
//       </Modal>
//       <div style={{height:isMobile ? '150px' : '82px'}}>
//         </div>
//         {/* <a href="#" onClick={top.window.location.href=''}> */}
//         {/* <Iframe url={this.props.location.customObject !== undefined ? 
//       `https://buildout.com/plugins/85de2b584effdb53e40923ac5de37c8b85006ba8/inventory?propertyType=${this.props.location.customObject.propertyNumber}&saleOrLease=${this.props.location.customObject.listingType}&searchText=${this.props.location.customObject.search}`
//     :"https://buildout.com/plugins/85de2b584effdb53e40923ac5de37c8b85006ba8/inventory"}
//         width="100%"
//         height="1500px"
//         id="myId"
//         className="myClassname"
//         display="initial"
//         position="relative"/> */}
//   {/* <div id="buildout"></div> */}
//     <iframe id="inlineFrameExample"
//     title="Inline Frame Example"
//     width="100%"
//     height="1500px"

//     onClick={() => console.log('hello')}
//     src= {this.props.location.customObject !== undefined ? 
//       `https://buildout.com/plugins/85de2b584effdb53e40923ac5de37c8b85006ba8/inventory?propertyType=${this.props.location.customObject.propertyNumber}&saleOrLease=${this.props.location.customObject.listingType}&searchText=${this.props.location.customObject.search}`
//     :"https://buildout.com/plugins/85de2b584effdb53e40923ac5de37c8b85006ba8/inventory" }>
//         {/* <a href="'contact'" target="myFrame">Tutorial Republic</a> */}
// </iframe>
// {/* </a> */}
//    <BottomNav/>
//       </div>
// )
// }
// };

// export default ListingsPage;