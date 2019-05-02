import React from 'react';
import ReactDOM from 'react-dom';

class Map extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.google !== this.props.google || prevProps.meetups !== this.props.meetups) {
      this.loadMap();
    }
  }
  loadMap() {
    if (this.props && this.props.google) {
      const { google } = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      let {zoom} = this.props;
      const {lat, lng} = this.props.initialCenter;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
      let markers = [];
      let latLng;
      this.props.meetups.map((meetup) => {
        if (!meetup.venue) {
          latLng = new google.maps.LatLng(meetup.group.lat, meetup.group.lon);
        } else {
          latLng = new google.maps.LatLng(meetup.venue.lat, meetup.venue.lon);
        }
        const marker = new google.maps.Marker({
          position: latLng,
          title: meetup.name
        });
        markers.push(marker);
        const infowindow = new google.maps.InfoWindow({
          content: `<h6>${meetup.name}</h6>`,
        });
        marker.addListener('click', () => {
          this.props.seeMore(marker.title);
          this.props.highLigh(marker.title);
          infowindow.open(this.map, marker);
          setTimeout(() => { infowindow.close(); }, 5000);
        });
      });
      if (this.map) {
        markers.forEach((marker) => {
          marker.setMap(this.map);
        });
      }
    }
  }
  render() {
    const style = {
      position:"relative",
      width: '50%',
      maxWidth:'50%',
      height: '65vh',
      paddingRight:'2%'
    };
    return (
      <div ref="map" style={style}>
        Loading map...
      </div>
    );
  }
}

export default Map;
