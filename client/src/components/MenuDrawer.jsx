import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {isMobile} from 'react-device-detect';

const styles = {
  fullList: {
    width: 'auto',
    height:'50%',
    zIndex: '999999' 
    // marginTop:'15%'
  },
};

class MenuDrawer extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
    showMenu: false
  };
  this.toggleDrawer = this.toggleDrawer.bind(this);
  this.showMenu = this.showMenu.bind(this);
}

  toggleDrawer(){
    this.setState({
      top: !this.state.top,
    });
  };
  showMenu(){
    console.log('yipee')
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
  render() {
    const { classes } = this.props;

    const fullList = (
      <div className={classes.fullList}>
        <List>
        
          {['Home', 'About', 'Team', 'Services', 'Resources', 'Listings', 'Contact'].map((text, index) => (
            
            <ListItem button key={text} style={{fontFamily: 'Graphik Web,Helvetica,sans-serif!important', textAlign:'center', borderBottom: '1px solid rgba(242, 241, 239, 1)'}}
            onClick={()=> {
            if (text === 'Apply Now'){
              window.open(
                'https://hildahensley.floify.com/apply?noheaderfooter#tab_a', '_blank')
             } else {
              window.location.href=`/${text}`
            }
            }
            }
            >
              <ListItemText primary={text.toUpperCase()} />
            </ListItem>
            
          ))}
          <ListItem button key={22} style={{textAlign:'center'}}
        onClick={this.showMenu}
          >
          <ListItemText primary={'Close'.toUpperCase()} />
          </ListItem>
        </List>

      </div>
    );

    return (
      <div style={{marginTop: '-12px'}}>
      <IconButton onClick={this.showMenu}color="inherit" aria-label="Menu">
      <MenuIcon/>
      </IconButton>
        <Drawer
          anchor="top"
          open={this.state.showMenu}
          onClose={this.toggleDrawer}
          onOpen={this.toggleDrawer}
          PaperProps={{
            zIndex:'999999999999'
          }}
          ModalProps={{
            zIndex:'999999999999'
          }}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
          >
            {fullList}
          </div>
        </Drawer>
      </div>
    );
  }
}

MenuDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuDrawer);
