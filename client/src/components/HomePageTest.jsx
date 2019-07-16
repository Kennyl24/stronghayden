import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {isMobile} from 'react-device-detect';
import CREDIT from './CREDIT.pdf';
import Modal from 'react-modal';
import MortgageCalc from './MortgageCalc.jsx';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 230,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
        
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageTitle2: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});
const images = [
  {
    url: "https://i.ibb.co/chFWJzv/image-part-001.jpg",
    title: 'Credit Application',
    width: '33%',
    descripition:'',
    href: CREDIT
  },
  {
    url: 'https://i.ibb.co/LvQhYqC/image-part-003.jpg',
    title: 'GIS',
    width: '33%',
    descripition:'',
    href: 'http://gis.napa.ca.gov/Html5Viewer/Index.html?viewer=Public_HTML'
  },
  {
    url: 'https://i.ibb.co/9txPkDq/image-part-004.jpg',
    title: 'US Small Business Administration Loans',
    width: '32.5%',
    descripition:'',
    href:'https://www.sba.gov/funding-programs/loans'
  },
  {
    url: '"https://i.ibb.co/30twXtg/image-part-005.jpg',
    title: 'Loan Calculator',
    width: '33%',
    descripition:'',
    href:''
  },
  {
    url: "",
    title: 'RECOMMENDED RESOURCES',
    width: '33%',
    descripition:'',
    href: CREDIT, 
  },
  {
    url: 'https://i.ibb.co/HgqXBsk/image-part-006.jpg',
    title: 'Commercial Loans',
    width: '32.5%',
    descripition:'',
    href: 'https://fitsmallbusiness.com/commercial-real-estate-loans/'
  },
  {
    url: 'https://i.ibb.co/s3DTyD4/image-part-007.jpg',
    title: 'Planning Projects',
    width: '33%',
    descripition:'',
    href: 'https://www.countyofnapa.org/1709/Planning-Division'
  },
  {
    url: 'https://i.ibb.co/SRZMkzc/image-part-008.jpg',
    title: 'FEMA Flood Mapping',
    width: '33%',
    descripition:'',
    href: 'https://msc.fema.gov/portal/search'
  },
  {
    url: 'https://i.ibb.co/ft2qf5m/image-part-009.jpg',
    title: 'Assesors Parcel Data',
    width: '32.5%',
    descripition:'',
    href:'https://www.countyofnapa.org/150/Assessor-Parcel-Data'
  },

];
const images2 = [
  {
    url: 'https://i.ibb.co/QJJcWzT/helloquence-OQMZw-Nd3-Th-U-unsplash.jpg',
    title: 'Credit Application',
    width: '33%',
    descripition:'',
    href: CREDIT
  },
  {
    url: 'https://i.ibb.co/Hn66jTn/screen-2x.jpg',
    title: 'GIS',
    width: '33%',
    descripition:'',
    href: 'http://gis.napa.ca.gov/Html5Viewer/Index.html?viewer=Public_HTML'
  },
  {
    url: 'https://i.ibb.co/Yk3mnHZ/download-1.jpg',
    title: 'US Small Business Administration Loans',
    width: '32.5%',
    descripition:'',
    href:'https://www.sba.gov/funding-programs/loans'
  },
  {
    url: 'https://i.ibb.co/YRbw9rx/Canva-Photo-of-Person-Holding-Pen.jpg',
    title: 'Loan Calculator',
    width: '33%',
    descripition:'',
    href:''
  },
  {
    url: '',
    title: 'Recommended Resources Page',
    width: '33%',
    descripition:'',
    href: CREDIT, 
  },
  {
    url: 'https://i.ibb.co/MpX1fr4/Canva-null.jpg',
    title: 'Commercial Loans',
    width: '32.5%',
    descripition:'',
    href: 'https://fitsmallbusiness.com/commercial-real-estate-loans/'
  },
  {
    url: 'https://images.pexels.com/photos/1549000/pexels-photo-1549000.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Planning Projects',
    width: '33%',
    descripition:'',
    href: 'https://www.countyofnapa.org/1709/Planning-Division'
  },
  {
    url: 'https://i.ibb.co/Z2BG7T3/Canva-Close-Up-Photo-of-Assorted-Color-of-Push-Pins-on-Map.jpg',
    title: 'FEMA Flood Mapping',
    width: '33%',
    descripition:'',
    href: 'https://msc.fema.gov/portal/search'
  },
  {
    url: 'https://i.ibb.co/QQtSszp/Canva-Pile-of-Folders.jpg',
    title: 'Assesors Parcel Data',
    width: '32.5%',
    descripition:'',
    href:'https://www.countyofnapa.org/150/Assessor-Parcel-Data'
  },

];
const imagesMobile= [
  {
    url: 'https://i.ibb.co/QJJcWzT/helloquence-OQMZw-Nd3-Th-U-unsplash.jpg',
    title: 'Credit Application',
    width: '33%',
    descripition:'',
    href: CREDIT
  },
  {
    url: 'https://i.ibb.co/Hn66jTn/screen-2x.jpg',
    title: 'GIS',
    width: '33%',
    descripition:'',
    href: 'http://gis.napa.ca.gov/Html5Viewer/Index.html?viewer=Public_HTML'
  },
  {
    url: 'https://i.ibb.co/Yk3mnHZ/download-1.jpg',
    title: 'US Small Business Administration Loans',
    width: '32.5%',
    descripition:'',
    href:'https://www.sba.gov/funding-programs/loans'
  },
  {
    url: 'https://i.ibb.co/YRbw9rx/Canva-Photo-of-Person-Holding-Pen.jpg',
    title: 'Loan Calculator',
    width: '33%',
    descripition:'',
    href:''
  },
  {
    url: 'https://i.ibb.co/MpX1fr4/Canva-null.jpg',
    title: 'Commercial Loans',
    width: '32.5%',
    descripition:'',
    href: 'https://fitsmallbusiness.com/commercial-real-estate-loans/'
  },
  {
    url: 'https://images.pexels.com/photos/1549000/pexels-photo-1549000.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Planning Projects',
    width: '33%',
    descripition:'',
    href: 'https://www.countyofnapa.org/1709/Planning-Division'
  },
  {
    url: 'https://i.ibb.co/Z2BG7T3/Canva-Close-Up-Photo-of-Assorted-Color-of-Push-Pins-on-Map.jpg',
    title: 'FEMA Flood Mapping',
    width: '33%',
    descripition:'',
    href: 'https://msc.fema.gov/portal/search'
  },
  {
    url: 'https://i.ibb.co/QQtSszp/Canva-Pile-of-Folders.jpg',
    title: 'Assesors Parcel Data',
    width: '32.5%',
    descripition:'',
    href:'https://www.countyofnapa.org/150/Assessor-Parcel-Data'
  },

];
const customStyles = { 
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    height: '400px',
    transform             : 'translate(-50%, -50%)'
  }
}
class ButtonBases extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    }
  }
  componentDidMount(){
    Modal.setAppElement('body');
  }
  render () {
  const { classes } = this.props;

  return (
  <div style={{marginTop:'5px', paddingTop: isMobile ? '50px' : '0px',marginBottom:'5px', width:'100%', marginLeft: isMobile ? '0%' : '0%'}}>
   {this.state.showModal ? 
    <Modal
    isOpen={true}
    // onAfterOpen={this.afterOpenModal}
    onRequestClose={this.closeModal}
    style={customStyles}
    contentLabel="Example Modal"
  >
  <Button onClick={() => {this.setState({showModal:false})}}>Close</Button>
  <MortgageCalc/>
    {/* <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
    <button onClick={() => {this.setState({showModal:false})}}>close</button>
    <div>I am a modal</div>
    <form>
      <input />
      <button>tab navigation</button>
      <button>stays</button>
      <button>inside</button>
      <button>the modal</button>
    </form> */}
  </Modal> 
    : null}
   
    <div className={classes.root}>
    {isMobile ? imagesMobile.map((image, index) => (
        <ButtonBase
          onClick={
            () => {
            if(index === 3){
              this.setState({
                showModal: true,
              })
              console.log('trying')
        }  else {
            window.open(
              image.href,
              '_blank' // <- This is what makes it open in a new window.
            );
        }
        }
      }
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            margin:'3px',
            width: image.width, 
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      )) : 
      images2.map((image, index) => (
        <ButtonBase
          onClick={
            () => {
            if(index === 3){
              this.setState({
                showModal: true,
              })
              console.log('trying')
              
          }  else if(index === 4){
            window.alert('At Strong & Hayden, we use different tools daily in order to be the best agents we can be. Here are some of the examples of those tools.')
            
        }  else {
            window.open(
              image.href,
              '_blank' // <- This is what makes it open in a new window.
            );
        }
        }
      }
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            margin:'3px',
            width: image.width, 
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              style={{fontSize: index === 4 ? '1.75rem' : '1rem'}}
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
    </div>
  );
}
}
ButtonBases.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonBases);