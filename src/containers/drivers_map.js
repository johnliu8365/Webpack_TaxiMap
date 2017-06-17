/* global google */

import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, DirectionsRenderer, Marker, Circle, InfoWindow } from 'react-google-maps';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import raf from "raf";
import { selectDriver, setMyLocation } from '../actions/index';

const taxi = '../../image/taxi.png';
const mylocation = '../../image/mylocation.png';

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
    console.log(marker)

    return (
    <Marker
      key={index}
      position={marker.position}
      icon={taxi}
      title={(index + 1).toString()}
      onClick={() => props.onMarkerClick(marker)}
    >

      {marker.showInfo && (
          <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
            <div>Hello</div>
          </InfoWindow>
        )}
    </Marker>

    );
    })}
    {props.directions && <DirectionsRenderer directions={props.directions} />
  }

  {props.center && (
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
    )}

  </GoogleMap>
));

class DriversMap extends Component {
  state = {
    radius: 3000,
  };

  handleMarkerClick = this.handleMarkerClick.bind(this);
  handleMarkerClose = this.handleMarkerClose.bind(this);

  handleMarkerClick(targetMarker) {
    this.setState({
     markers: this.props.DriverInfo.find( (marker) => {
      console.log(targetMarker);
      console.log(marker.latitude);
        return marker.latitude === targetMarker.position.lat
      }),
    showInfo: true
    });
          console.log(this.state);
  }

  handleMarkerClose(targetMarker) {
    this.setState({
      markers: this.props.DriverInfo.map( (marker) => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: false,
          };
        }
        return marker;
      }),
    });
  }

  componentDidMount() {
      const tick = () => {
      if (this.isUnmounted) {
        return;
      }
      this.setState({ radius: Math.max(this.state.radius - 20, 0) });

      if (this.state.radius > 200) {
        raf(tick);
      }
    };

    geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    this.setState({
          latitude: lat,
          longitude: lng 
        });
    this.props.setMyLocation(lat, lng);
    raf(tick);
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


  DriversMarkerList() {
    return this.props.DriverInfo.map((info) => {
      return {
          position: { lat: info.latitude, lng: info.longitude },
          showInfo: false,
          infoContent: (
          <div>Hello</div>
        ),
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
				<div style={{ width: 900, height: 400 }} />
			}
			mapElement={
				<div style={{ height: '100%' }} />
			}
			center={{ lat: this.state.latitude, lng: this.state.longitude }}
			directions={this.state.directions}
        onMarkerClick={this.handleMarkerClick}
        onMarkerClose={this.handleMarkerClose}
      markers={this.DriversMarkerList()}
      radius={this.state.radius}
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
