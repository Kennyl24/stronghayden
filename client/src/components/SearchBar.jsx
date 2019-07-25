import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import { Link } from 'react-router-dom';
import LeadingBar from './LeadingBar.jsx';
import BottomNav from './BottomNav.jsx';
import pdf from './pdf.pdf';
import Dropdown from 'react-dropdown';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from "@material-ui/core/styles";

const options = [
  'one', 'two', 'three'
]
const styles2 = {
  input1: {
    height: 20
  },
};
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },

  cssLabel: {
    color : 'black'
  },
  '& label.Mui-focused': {
    color: 'green',
  },
  cssLabelFocused: {
    color:'green !important',
    borderBottom: '1px solid green',
  },
  cssStandardInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `green !important`,
      borderBottom: '1px solid green !important',
      color: 'black'
    }
  },

  cssFocused: {
    // borderColor: `${theme.palette.primary.main} !important`,
    color: 'black',
    borderBottom: '1px solid GREEN !important',
  },

  notchedOutline: {
    borderWidth: '1px',
    borderBottom: '1px solid green !important',
    borderColor: 'grey !important',
    color: 'black'
  },

});
class SearchBar extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      menuOpen:false,
      search: '', 
      min:'',
      max:'',
      newMenu: false,
      listingType: 'All listings', 
      propertyType: 'Property Type', 
      searchSent: true,
    }
    this.handlePropertyChange = this.handlePropertyChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  componentDidMount(){
    // console.log(this.state.propertyType)
    // console.log(this.state.listingType)
  }
  handleClick(){
    console.log('hello')
    this.setState({
      menuOpen:true,
    })
  }
  handleClick2(){
    console.log('hello')
    this.setState({
      newMenu:true,
    })
  }
  handleClose(){
    console.log('goodbye')
    this.setState({
      menuOpen:false,
      newMenu:false,
    })
  }
  handleChange(event) {
    // console.log(event.target.value)
    this.setState({
      listingType: event.target.value
    });
  }
  handlePropertyChange(event) {
    if(event.target.value === 'Office'){
      this.setState({
        propertyNumber: 1,
      });
    } else  if(event.target.value === 'Retail'){
      this.setState({
        propertyNumber: 2,
      });
    } else  if(event.target.value === 'Industrial'){
      this.setState({
        propertyNumber: 3,
      });
    } else  if(event.target.value === 'Land'){
      this.setState({
        propertyNumber: 5,
      });
    } 
    else  if(event.target.value === 'Multi-Family'){
      this.setState({
        propertyNumber: 6,
      });
    } else  if(event.target.value === 'Special-Purpose'){
      this.setState({
        propertyNumber: 7,
      });
    } else  if(event.target.value === 'Hospitality'){
      this.setState({
        propertyNumber: 8,
      });
    } else  if(event.target.value === 'Medical'){
      this.setState({
        propertyNumber: 104,
      });
    } 
    this.setState({
      propertyType: event.target.value
    });
  }
  submit() {
    <Link to={{pathname:"/listings", customObject: null}}></Link>
  }
  render () {
    const { classes } = this.props;

    return (
  <div style={{zIndex:'999', position: isMobile ? 'relative' : 'fixed', bottom: isMobile ? '0px' : '20px', borderRadius:'8px', textAlign:'center', backgroundColor:'rgba(255, 255, 255, 0.6)', marginTop: '10px', marginBottom:'10px', border: '1px solid green', width: isMobile ? '90%':'80%', marginLeft:isMobile ? '5%' : '10%', display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
   <div style={{minWidth:'100%'}}><h1 style={{color:'#3d633b', fontSize:'36px', marginBottom:'0'}}> Strong & Hayden</h1></div>
   <div style={{minWidth:'100%'}}><h2 style={{color:'black', fontSize:'20px', fontWeight:'100'}}>A Leader In All Facets Of Commercial Real Estate</h2></div>
   <div>
   <TextField
           InputProps={{ classes: { input: styles2.input1 } }}
           InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              
              // focused: {color:'white'}
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssStandardInput,
              focused: classes.cssFocused,
              // notchedOutline: classes.notchedUnderline,
            },
            inputMode: "numeric"
        }}
          style={{width: isMobile? '250px': '360px', height: '50px' ,marginLeft:'10px', marginRight: '15px'}}
          id="outlined-email-input"
          placeholder="Search by address, city, state, or zip"
          label="Search"
          type="search"
          name="search"
          // autoComplete="email"
          margin="normal"
          // variant="outlined"
          value={this.state.search}
          onChange={(event) => {
            this.setState({
              search: event.target.value
            });
          }}
        />
    </div>
    <div style={{margin:'auto', zIndex:'9999999999',}}>
    <FormControl >
        <InputLabel htmlFor="age-helper">Listing Type</InputLabel>
        <Select
        displayEmpty={true}
        style={{width:'140px'}}
          value={this.state.listingType}
          onChange={this.handleChange}
          input={<Input name="age" id="age-helper" />}
        >
          <MenuItem value={'All Listings'}onClick={this.handleClose}>All Listings</MenuItem>
          <MenuItem value={'sale'}onClick={this.handleClose}>Sale</MenuItem>
          <MenuItem value={'lease'}onClick={this.handleClose}>Lease</MenuItem>
        </Select>
      </FormControl>
      <Menu style={{zIndex:"99999999"}}id="extra-menu" open={this.state.menuOpen} onClose={this.handleClose}>
      </Menu>
    </div>
    <div style={{margin:'auto', zIndex:'9999999999'}}>
    <FormControl >
        <InputLabel htmlFor="age-helper">Property Type</InputLabel>
        <Select
        style={{width:'140px'}}
          value={this.state.propertyType}
          onChange={this.handlePropertyChange}
          input={<Input name="age" id="age-helper" />}
          inputProps={{fontSize:'5px'}}
        >
        <MenuItem value={'All Properties'}onClick={this.handleClose}>All Properties</MenuItem>
         <MenuItem value={'Office'}onClick={this.handleClose}>Office</MenuItem>
         <MenuItem value={'Retail'}onClick={this.handleClose}>Retail</MenuItem>
         <MenuItem value={'Industrial'}onClick={this.handleClose}>Industrial</MenuItem>
         <MenuItem value={'Land'}onClick={this.handleClose}>Land</MenuItem>
         <MenuItem value={'Multi-Family'}onClick={this.handleClose}>Multi-Family</MenuItem>
         <MenuItem value={'Special-Purpose'}onClick={this.handleClose}>Special-Purpose</MenuItem>
         <MenuItem value={'Hospitality'}onClick={this.handleClose}>Hospitality</MenuItem>
         <MenuItem value={'Medical'}onClick={this.handleClose}>Medical</MenuItem>
        </Select>
        {/* <FormHelperText>Some important helper text</FormHelperText> */}
      </FormControl>
    </div>
    {/* </div> */}
    <div style={{margin:'auto', marginTop:"20px"}}>
    <Link to={{pathname:"/listings", customObject: 
    {
      searchSent: this.state.searchSent, 
      search: this.state.search, 
      min: this.state.min, 
      max: this.state.max, 
      propertyType: this.state.propertyType, 
      listingType: this.state.listingType, 
      propertyNumber: this.state.propertyNumber,
    }
  }}>
  <Button variant="contained" onClick={this.submit}style={{color:"white", backgroundColor:'#0c6e39', marginRight:'10px'}} >
        Find a Property
      </Button>
      {/* <Button variant="extended"  onClick={() => window.location.href = '/contact'} style={{color:"#0c6e39", backgroundColor:'#bebebe', borderColor:'#0c6e39'}}>
        Contact Us
    </Button>  */}
      {/* <Button
        variant="contained"
        onClick={this.submit}
      >
      Search
      </Button> */}
      </Link>
    </div>
    
    </div>
)
}
};

export default withStyles(styles)(SearchBar);