import React from 'react';
import config from '../../../config.js';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Button from '@material-ui/core/Button';
import {isMobile} from 'react-device-detect';

class MapContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showInfoWindow: true,
      activeMarker: {},
      lat: null,
      lng: null,
    }
    this.onMarkerClicked = this.onMarkerClicked.bind(this);
    this.id = 0;
    this.testLocation = this.testLocation.bind(this);
  }
  componentDidMount() {
    const options = {
      enableHighAccuracy: false,
      timeout: 8000,
      maximumAge: 0,
    };
  }
  testLocation(pos){
    const crd = pos.coords;
    this.setState({
      lat: crd.latitude,
      lng: crd.longitude,
    })
    const thisLat = crd.latitude;
    const thisLon = crd.longitude;
  }

  onMarkerClicked(props, marker, e){
    this.setState({
      showInfoWindow: true,
      activeMarker: marker,
    });
  }
  render() {
    return (
      <div
      style={{maxWidth: isMobile ? '100%' : '100%', position:"relative", backgroundColor:'#ededed'}}
      >
       <Map
       style={{
        width: isMobile ? '100%' : '100%',
        height: '85vh',
        position: 'absolute'
       }}
          google={this.props.google}
          initialCenter={{
            lat: 38.28939,
            lng: -122.27587
          }}
          zoom={18}
          // onClick={this.onMapClicked}
       >
       <Marker
    title={'Strong & Hayden'}
    name={'Strong & Hayden'}
    onClick={this.onMarkerClicked}
    // onMouseover={this.onMarkerClicked}
    position={{lat: 38.28939, lng:-122.27587}} />
    <InfoWindow
    onClick={this.onMarkerClicked}
    visible={true}
      marker={this.state.activeMarker}>
            <div style={{textAlign:'center'}}>
            <h1 style={{fontSize:'22px', color:'black'}}>
              Strong & Hayden
             </h1> 
             <Button variant="outlined" style={{marginTop:'.5%', marginBottom: '2%',width: '250px', height: '30px', color: 'black'}}>
             <a href="https://www.google.com/maps/dir/433+Soscol+Ave,+Napa,+CA+94559/433+Soscol+Ave,+Napa,+California+94559/@38.2934421,-122.2922831,15.2z/data=!4m13!4m12!1m5!1m1!1s0x8085060d64b28763:0x2ffbc67c08db1805!2m2!1d-122.2763325!2d38.2893383!1m5!1m1!1s0x8085060d64b28763:0x2ffbc67c08db1805!2m2!1d-122.2763325!2d38.2893383" target="_blank" 
             style={{color: 'black'}}
             >Directions</a>
      </Button>
              <br/>
              433 Soscol Ave A110
              <br/>
              Napa, Ca 94559
              <br/>
              (707) 226-2661
            </div>
    </InfoWindow>
    </Map>
    </div>
  );
}
};
export default GoogleApiWrapper({
  apiKey: config.GOOGLE_MAPS_API_KEY,
})(MapContainer);