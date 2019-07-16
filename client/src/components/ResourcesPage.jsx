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
import CREDIT from './CREDIT.pdf';
import Dropdown from 'react-dropdown';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import TextField from '@material-ui/core/TextField';
import resouce from './resouce.jpeg'
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import HomePageTest from './HomePageTest.jsx';
// import { createMuiTheme } from '@material-ui/core/styles';
// import { ThemeProvider } from '@material-ui/styles';
const options = [
  'one', 'two', 'three'
]
const styles = {
  input1: {
    height: 20
  },
};

// const outerTheme = createMuiTheme({
//   palette: {
//     secondary: {
//       main: orange[500],
//     },
//   },
// });

// const innerTheme = createMuiTheme({
//   palette: {
//     secondary: {
//       main: green[500],
//     },
//   },
// });
class ResourcesPage extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      menuOpen:false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  componentDidMount(){
    // const loan =  new Loan(10000, 0, 0, 6, 6.5);
    // const amortization = lc.amortization.getAmortizationSchedule(loan, loan.term, []);
    // console.log(JSON.stringify(amortization, null, 4));

  }
  handleClick(){
    console.log('hello')
    this.setState({
      menuOpen:true,
    })
  }
  handleClose(){
    console.log('goodbye')
    this.setState({
      menuOpen:false,
    })
  }
  render () {
    return (
      <div>
      <LeadingBar/>
      <div className="scrim">
      {/* <div className="home-background" style={{position:'relative', backgroundPosition:'center', top:'80px',backgroundColor: 'rgba(238, 238, 238, 0.41) !important', backgroundImage: `url(${resouce})`, backgroundRepeat: 'no-repeat', imageRendering: '-webkit-optimize-contrast', backgroundSize:'cover', height:'45vh', width: '100%', marginBottom:'20px'}}> */}
      {/* <div style={{height:'400px', textAlign:'center', backgroundColor:'white', paddingTop:"150px"}}> */}
      
      {/* <h1 style={{textAlign:'center', paddingTop:'40px', color:'white'}}>Resources</h1>
      <div style={{textAlign:'center'}}>
      <a href={CREDIT} type="application/pdf" target="_blank" className="menu-item" style={{textAlign:'center', borderBottom: '3px solid', color:'white', borderBottomColor:'rgb(125,121,121)', fontWeight:'600', fontSize:'18px', letterSpacing: '1px', textAlign:'center'}}>Credit Application</a> */}
      {/* </div> */}
      {/* </div> */}
      </div>
      <div style={{marginTop:'80px', backgroundColor:'white'}}>
      {/* <h1 style={{color:'black', textAlign:'center', color:'#3e623b'}}>Financing</h1>
      <div style={{width:'40%',marginLeft:'30%'}}>
      <h1 style={{color:'black', fontSize:'20px', width:'220px', borderBottom:'1px solid grey'}}> Loan Calculator </h1>
      <div style={{display:'flex', flexDirection:'column', margin:'auto'}}>
      <TextField
        label="Total Amount"
        // defaultValue="Total Amount"
        margin="normal"
        variant="filled"
      />
      <TextField
        label="Down Payment"
        // defaultValue="Down Payment"
        margin="normal"
        variant="filled"
      />
        <TextField
        label="Interest Rate"
        // defaultValue="Interest Rate"
        // className={classes.textField}
        margin="normal"
        variant="filled"
      />
        <TextField
        label="Amortization Period"
        // defaultValue="Amortization Period"
        // className={classes.textField}
        margin="normal"
        variant="filled"
      />
      <Button variant="contained">
        Submit
      </Button>
      </div>
      </div> */}
      {/* </div> */}
      {/* <h1 style={{color:'black',  marginTop:isMobile ? '150px' : '50px', textAlign:'center',  color:'#3e623b'}}> Recommended Resources</h1> */}
      {/* <div style={{display:'flex', flexDirection:'row', width:'80%', marginLeft:'10%'}}>
      <div style={{margin:'auto'}}>
      <Button variant="outlined" color="secondary">
        <a href="https://services.countyofnapa.org/ParcelReportTool/"target="_blank">GIS Parcel Tool</a>
      </Button>
        </div>
        <div style={{margin:'auto'}}>
      <Button variant="outlined" color="secondary">
      <a href="http://gis.napa.ca.gov/Html5Viewer/Index.html?viewer=Public_HTML"target="_blank">GIS</a>
      </Button>
        </div>
        <div style={{margin:'auto'}}>
      <Button variant="outlined" color="secondary">
      <a href="https://www.countyofnapa.org/1709/Planning-Division"target="_blank">Planning Projects</a>
      </Button>
        </div>
        <div style={{margin:'auto'}}>
      <Button variant="outlined" color="secondary">
      <a href="https://msc.fema.gov/portal/search"target="_blank">FEMA Flood Mapping</a>
      </Button>
        </div>
         <div style={{margin:'auto'}}>
      <Button variant="outlined" color="secondary">
      <a href="https://www.countyofnapa.org/150/Assessor-Parcel-Data"target="_blank">Assesor's Parcel Data</a>
      </Button>
        </div>
      </div> */}
      </div>
      <HomePageTest/>
      
      
      {/* <div className="front-text" style={{top: isMobile ? '20%' : '30%'}}>
      <h1 style={{fontFamily: 'Open Sans",sans-serif', textAlign:'center', fontSize:isMobile ? '22px': '50px'}}>
        Strong & Hayden
      </h1>
      <h2 style={{marginBottom:'30px' , fontWeight:'bolder'}}>A LEADER IN ALL FACETS OF COMMERCIAL REAL ESTATE.</h2>
      </div> */}
          {/* <a href={pdf} type="application/pdf" target="_blank" className="menu-item" style={{textAlign:'center', borderBottom: '3px solid', borderBottomColor:'rgb(125,121,121)', fontWeight:'600', fontSize:'12px', letterSpacing: '1px', color:'white', backgroundColor:'#696969'}}>RESUME</a> */}
    {/* <div style={{width:'100%', height:'100px', display:'flex', flexDirection:'row'}}>
    <Dropdown className='myclassname' options={options} style={{minWidth:'33%', margin:'auto'}} placeholder="Sale & Lease" />
    <Dropdown className='myclassname' options={options} style={{minWidth:'33%', margin:'auto'}} placeholder="All Property Types" />
    <Dropdown className='myclassname' options={options} style={{minWidth:'33%', margin:'auto'}} placeholder="Select an option" />
      </div> */}
    {/* <iframe id="inlineFrameExample"
    title="Inline Frame Example"
    width="100%"
    height="1500px"
    src="https://buildout.com/plugins/85de2b584effdb53e40923ac5de37c8b85006ba8/inventory?saleOrLease=sale">
</iframe> */}
     
     
      <BottomNav/>
      </div>
)
}
};

export default ResourcesPage;