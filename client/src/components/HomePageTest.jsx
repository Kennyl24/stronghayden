import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {isMobile} from 'react-device-detect';
import CREDIT from './CREDIT.pdf';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
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
    url: 'https://i.ibb.co/QJJcWzT/helloquence-OQMZw-Nd3-Th-U-unsplash.jpg',
    title: 'Credit Application',
    width: '30%',
    descripition:'',
    href: CREDIT
  },
  {
    url: 'https://i.ibb.co/XZ7WPbv/Canva-White-Paper-and-Silver-Fountain-Pen.jpg',
    title: 'Letter Of Intent',
    width: '30%',
    descripition:'',
    href: CREDIT
  },
  {
    url: 'https://i.ibb.co/Hn66jTn/screen-2x.jpg',
    title: 'GIS',
    width: '30%',
    descripition:'',
    href: 'http://gis.napa.ca.gov/Html5Viewer/Index.html?viewer=Public_HTML'
  },
  {
    url: 'https://i.ibb.co/Yk3mnHZ/download-1.jpg',
    title: 'US Small Business Administration Loans',
    width: '30%',
    descripition:'',
    href:'https://www.sba.gov/funding-programs/loans'
  },
  {
    url: 'https://i.ibb.co/YRbw9rx/Canva-Photo-of-Person-Holding-Pen.jpg',
    title: 'Loan Calculator',
    width: '30%',
    descripition:'',
    href:'https://www.bankrate.com/calculators/mortgages/loan-calculator.aspx'
  },
  {
    url: 'https://i.ibb.co/MpX1fr4/Canva-null.jpg',
    title: 'Commercial Loans',
    width: '30%',
    descripition:'',
    href: 'https://fitsmallbusiness.com/commercial-real-estate-loans/'
  },
  {
    url: 'https://images.pexels.com/photos/1549000/pexels-photo-1549000.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Planning Projects',
    width: '30%',
    descripition:'',
    href: 'https://www.countyofnapa.org/1709/Planning-Division'
  },
  {
    url: 'https://i.ibb.co/Z2BG7T3/Canva-Close-Up-Photo-of-Assorted-Color-of-Push-Pins-on-Map.jpg',
    title: 'FEMA Flood Mapping',
    width: '30%',
    descripition:'',
    href: 'https://msc.fema.gov/portal/search'
  },
  {
    url: 'https://i.ibb.co/QQtSszp/Canva-Pile-of-Folders.jpg',
    title: 'Assesors Parcel Data',
    width: '30%',
    descripition:'',
    href:'https://www.countyofnapa.org/150/Assessor-Parcel-Data'
  },

];

function ButtonBases(props) {
  const { classes } = props;

  return (
    <div style={{marginTop:'20px', marginBottom:'50px', width:'90%', marginLeft:'10%'}}>
    <div className={classes.root}>
      {images.map((image, index) => (
        <ButtonBase
          onClick={()=> 
            {
              window.open(
                image.href,
                '_blank' // <- This is what makes it open in a new window.
              );
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
      ))}
    </div>
    </div>
  );
}

ButtonBases.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonBases);