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
import {isMobile} from 'react-device-detect';

class NavBar extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      loginModal: false,
      signUpModal: false
    }
  }

  render () {
    return (
      isMobile ? 
      null
      : 
      <AppBar position="static" style={{backgroundColor:'white', height:'100px'}}>
        <Toolbar>
      <MenuList style={{display:'flex', flexDirection:'row'}}>
      <MenuItem className="menu_item" style={{height:'100%'}} >
      <img style={{height: '100px', width: '315px', cursor:'pointer'}}
    onClick={() => window.location.href = '/'}
    src="https://i.ibb.co/w75NYhP/S-H-logo.jpg"/>
        </MenuItem >
      </MenuList>
      <div style={{position:'absolute', right:'5%', top: '5px'}}>
        <span className="menu_a" ><a href="tel:+17072262661">(707) 226-2661</a></span>
        <span className="menu_a"><a href="mailto:lgrayson@stronghayden.com">lgrayson@stronghayden.com</a></span>
        </div>
      <div style={{position:'absolute', right:'5%', top: '50px'}}>
        <span className="menu_item" onClick={() => window.location.href = '/'} >Home</span>
        <span className="menu_item" onClick={() => window.location.href = '/about'} >About</span>
        <span className="menu_item" onClick={() => window.location.href = '/services'}>Services</span>
        <span className="menu_item"onClick={() => window.location.href = '/listings'}>Listings</span>
        <span className="menu_item"onClick={() => window.location.href = '/blog'}>Blog</span>
        <span className="menu_item"onClick={() => window.location.href = '/contact'}>Contact</span>
        </div>
        </Toolbar>
      </AppBar>
      
)
}
};

export default NavBar;