import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import PhoneIcon from '@material-ui/icons/Phone';

import MenuDrawer from './MenuDrawer.jsx';


import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import MoreVertIcon from '@material-ui/icons/MoreVert';

class LeadingBar extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      showSimple: false,
      width: null,
      opacity: 0.9
    }
    this.listenScrollEvent = this.listenScrollEvent.bind(this);
    this.resize = this.resize.bind(this);
  }
  componentWillMount(){
    if(window.innerWidth < 1050){
      this.setState({
        width: false,
      });
    } else {
      this.setState({
        width: true,
      });
    }
  }
  
  componentDidMount(){
      window.addEventListener('scroll', this.listenScrollEvent)
    window.addEventListener('resize', this.resize);
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.resize);
    window.removeEventListener('scroll', this.listenScrollEvent);
}
listenScrollEvent(e){
  if (window.scrollY > 250) {
    this.setState({
      opacity: 1.0
    })
  } else {
    this.setState({
      opacity: .9
    })  
  }
}
resize(){
  this.forceUpdate();
  if(window.innerWidth < 970){
    this.setState({
      width: false,
    });
  } else {
    this.setState({
      width: true,
    });
  }
};
  render () {
    return (
      <div>
       { isMobile ? 
       <AppBar position="fixed" style={{zIndex:'999',backgroundColor:`white`, height:'60px'}}>
       <Toolbar>
       <MenuList style={{display:'flex', margin:'auto', flexDirection:'row'}}>
       <MenuItem className="menu_icon" style={{height:'100%'}} >
       <ListItemIcon>
       <MenuDrawer/>
       </ListItemIcon>
         </MenuItem >
         <MenuItem className="menu_icon" style={{height:'100%'}} >
       <ListItemIcon>
       <a href="mailto:admin@stronghayden.com"><DraftsIcon /></a>
       </ListItemIcon>
         </MenuItem >
         <MenuItem className="menu_icon" style={{height:'100%'}} >
       <ListItemIcon>
       <a href="tel: (707) 226-2661">  <PhoneIcon /></a>
       </ListItemIcon>
         </MenuItem >
       </MenuList>
     </Toolbar>
       </AppBar>
       : null }
      <AppBar position= {isMobile || !this.state.width ? 'absolute' : 'fixed'} style={{zIndex:'99', backgroundColor: isMobile ? 'white' : `rgba(255,255,255, ${this.state.opacity})`, top: isMobile ? '60px' : '0px', alignItems: isMobile ? 'center': null, height: isMobile? '80px': '80px'}}>
        <Toolbar>
      <MenuList style={{display:'flex', flexDirection:'row'}}>
      <MenuItem className="menu_icon" style={{height:'100%'}} >
      <img style={{height: '80px', width: isMobile ? '280px' : '380px', marginTop:'8px', cursor:'pointer'}}
    onClick={() => window.location.href = '/'}
    src="https://i.ibb.co/w6xBp07/imageedit-12-5093301832.png"/>
        </MenuItem >
      </MenuList>
      {isMobile ? 
      
      null
      
      : 
  <div>
      <div style={{position:'absolute', right:'5%', top: '5px'}}>
       {!this.state.width ? null  : <span className="menu_b" ><a href="tel:+17072262661">(707) 226-2661</a></span>}
       {!this.state.width ? null  :  <span className="menu_b"><a href="mailto:admin@stronghayden.com">admin@stronghayden.com</a></span>}
        </div>
      {!this.state.width ? 
      <ListItemIcon>
      <MenuDrawer/>
      </ListItemIcon>
      :    
      <div style={{position:'absolute', right:'1%', top: '40px'}}>
        <span className="menu_i" onClick={() => window.location.href = '/'} >Home</span>
        <span className="menu_i" onClick={() => window.location.href = '/about'} >About</span>
        <span className="menu_i" onClick={() => window.location.href = '/team'} >Agents</span>
        <span className="menu_i" onClick={() => window.location.href = '/services'}>Services</span>
        <span className="menu_i"onClick={() => window.location.href = '/listings'}>Listings</span>
        <span className="menu_i"onClick={() => window.location.href = '/resources'}>Resources</span>
        <span className="menu_i"onClick={() => window.location.href = '/contact'}>Contact</span>
      </div> 
      }
  </div>
      }
        </Toolbar>
      </AppBar>
      </div>
)
}
};

export default LeadingBar;