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
    }
    this.resize = this.resize.bind(this);
  }
  componentWillMount(){
    if(window.innerWidth < 975){
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
    window.addEventListener('resize', this.resize);
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.resize);
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
       { isMobile || !this.state.width ? 
       <AppBar position="fixed" style={{zIndex:'999',backgroundColor:'white', height:'60px'}}>
       <Toolbar>
       <MenuList style={{display:'flex', margin:'auto', flexDirection:'row'}}>
       <MenuItem className="menu_icon" style={{height:'100%'}} >
       <ListItemIcon>
       <MenuDrawer/>
       </ListItemIcon>
         </MenuItem >
         <MenuItem className="menu_icon" style={{height:'100%'}} >
       <ListItemIcon>
            <DraftsIcon />
       </ListItemIcon>
         </MenuItem >
         <MenuItem className="menu_icon" style={{height:'100%'}} >
       <ListItemIcon>
            <PhoneIcon />
       </ListItemIcon>
         </MenuItem >
       </MenuList>
     </Toolbar>
       </AppBar>
       : null }
      <AppBar position= {isMobile || !this.state.width ? "absolute" : 'fixed'} style={{zIndex:'99', backgroundColor:'white', top: isMobile ? '60px' : '0px', alignItems: isMobile ? 'center': null, height:'80px'}}>
        <Toolbar>
      <MenuList style={{display:'flex', flexDirection:'row'}}>
      <MenuItem className="menu_icon" style={{height:'100%'}} >
      <img style={{height: '85px', width: '305px', cursor:'pointer'}}
    onClick={() => window.location.href = '/'}
    src="http://stronghayden.com/wp-content/uploads/2014/07/SH-WebLogo-Clear.png"/>
        </MenuItem >
      </MenuList>
      {isMobile ? 
      
      null
      
      : 
      <div>
      <div style={{position:'absolute', right:'5%', top: '5px'}}>
        <span className="menu_b" ><a href="tel:+17072262661">(707) 226-2661</a></span>
        <span className="menu_b"><a href="mailto:lgrayson@stronghayden.com">lgrayson@stronghayden.com</a></span>
        </div>
         
      <div style={{position:'absolute', right:'5%', top: '40px'}}>
        <span className="menu_i" onClick={() => window.location.href = '/'} >Home</span>
        <span className="menu_i" onClick={() => window.location.href = '/about'} >About</span>
        <span className="menu_i" onClick={() => window.location.href = '/team'} >Agents</span>
        <span className="menu_i" onClick={() => window.location.href = '/services'}>Services</span>
        <span className="menu_i"onClick={() => window.location.href = '/listings'}>Listings</span>
        <span className="menu_i"onClick={() => window.location.href = '/blog'}>Blog</span>
        <span className="menu_i"onClick={() => window.location.href = '/contact'}>Contact</span>
        </div> </div>}
        </Toolbar>
      </AppBar>
      </div>
)
}
};

export default LeadingBar;