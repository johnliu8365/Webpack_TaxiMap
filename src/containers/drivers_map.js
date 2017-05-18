/* global google */

import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, DirectionsRenderer, Marker, Circle } from 'react-google-maps';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectDriver, setMyLocation } from '../actions/index';

const geolocation = (
    navigator.geolocation || {
        getCurrentPosition: (success, failure) => {
            failure('Your browser doesn\'t support geolocation.');
        }
    }
);

const DirectionsExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={7}
    defaultCenter={props.center}
  >

  {props.markers.map((marker, index) => {
    
    return (
    <Marker
      key={index}
      position={marker.position}
    />
    );
    })}
    {props.directions && <DirectionsRenderer directions={props.directions} />
  }

  {props.center && (
      <Circle
        center={props.center}
        radius={200}
        options={{
          fillColor: `red`,
          fillOpacity: 0.2,
          strokeColor: `red`,
          strokeOpacity: 1,
          strokeWeight: 1,
        }}
      />
    )}

  </GoogleMap>
));

class DirectionsExample extends Component {

  componentDidMount() {
    geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    this.setState({
          latitude: lat,
          longitude: lng 
        });
    this.props.setMyLocation(lat, lng);
    });

    // const DirectionsService = new google.maps.DirectionsService();

    // DirectionsService.route({
    //   origin: { lat: 25.047739, lng: 121.517040 },
    //   destination: { lat: 25.033964, lng: 121.564472 },
    //   travelMode: google.maps.TravelMode.DRIVING,
    // }, (result, status) => {
    //   if (status === google.maps.DirectionsStatus.OK) {
    //     this.setState({
    //       directions: result,
    //     });
    //   } else {
    //     console.error(`error fetching directions ${result}`);
    //   }
    // });
  }

  componentDidUpdate() {
    if (!this.props.activeDriver || !this.props.destination) {
      return {};
		}

    const DirectionsService = new google.maps.DirectionsService();

    DirectionsService.route({
      origin: { lat: this.props.activeDriver.latitude, lng: this.props.activeDriver.longitude },
      destination: { lat: this.props.destination.latitude, lng: this.props.destination.longitude },
      travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result,
        });
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
  }


  DriversMarkerList() {
    return this.props.DriverInfo.map((info) => {
      return {
          position: { lat: info.latitude, lng: info.longitude },
      };
    });
  }
 
	render() {
		if (!this.props.activeDriver || !this.props.destination) {
			return <div>請選擇司機目的地</div>;
		}

    return (
		<div>
			<div >出發點:( {this.props.activeDriver.latitude}, {this.props.activeDriver.longitude} )</div>
			<div >目的地: {this.props.destination.name} 
      ( {this.props.destination.latitude}, {this.props.destination.longitude} )
      </div>

			<DirectionsExampleGoogleMap
			containerElement={
				<div style={{ width: 700, height: 300 }} />
			}
			mapElement={
				<div style={{ height: '100%' }} />
			}
			center={{ lat: this.state.latitude, lng: this.state.longitude }}
			directions={this.state.directions}
      markers={this.DriversMarkerList()}
			/>
		</div>
    );
     }
}

function mapStateToProps(state) {
	return {
		activeDriver: state.activeDriver,
    destination: state.activeDestination,
    DriverInfo: state.info
	};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectDriver, setMyLocation }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DirectionsExample);
