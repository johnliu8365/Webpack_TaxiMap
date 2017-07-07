/* global google */

import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, DirectionsRenderer,
   Marker, InfoWindow } from 'react-google-maps';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectDriver, setMyLocation } from '../actions/index';

import taxi from '../../image/taxi.png';
import mylocation from '../../image/mylocation.png';

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

  {props.marker}

  { props.directions && <DirectionsRenderer directions={props.directions} />}
  
  <div>
    <Marker
      position={props.center}
      icon={mylocation}
    />
  </div>
  
  {/*{props.center && (
      <div>
      <div>
      <Marker
      position={props.center}
      icon={mylocation}
      />
      </div>
      <div>
      <Circle
        center={props.center}
        radius={props.radius}
        icon={mylocation}
        options={{
          fillColor: 'red',
          fillOpacity: 0.2,
          strokeColor: 'red',
          strokeOpacity: 1,
          strokeWeight: 1,
        }}
      />
      </div>
      </div>
    )}*/}

  </GoogleMap>
));

class DriversMap extends Component {
  state = {
    taxiID: null,
  };

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     taxiID: null,
  //     showInfo: false
  //   };
  // }

  // markerLocation = this.markerLocation.bind(this);
  // onMarkerClick = this.onMarkerClick.bind(this);

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

  onMarkerClick(targetMarker) {
    this.setState({
      taxiID: targetMarker,
      showInfo: false
    });
  }

  markerLocation() {
      return this.props.DriverInfo.map((info) => {
        //console.log(info);
        return (
          <Marker
            key={info.id}
            icon={taxi}
            position={{ lat: info.latitude, lng: info.longitude }}
            onClick={() => this.onMarkerClick(info.id)}
          >
            {info.id === this.state.taxiID && (
              <InfoWindow >
                <div>
                  {info.DriverName}
                  {info.License}
                </div>
              </InfoWindow>
            )}
          </Marker>
        );
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
				<div style={{ width: 900, height: 400 }} />
			}
			mapElement={
				<div style={{ height: '100%' }} />
			}
			center={{ lat: this.state.latitude, lng: this.state.longitude }}
			directions={this.state.directions}
      marker={this.markerLocation()}
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

export default connect(mapStateToProps, mapDispatchToProps)(DriversMap);
