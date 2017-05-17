/* global google */
import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, DirectionsRenderer } from 'react-google-maps';
import { connect } from 'react-redux';

const DirectionsExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={7}
    defaultCenter={props.center}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));

class DirectionsExample extends Component {

  componentDidMount() {
    const DirectionsService = new google.maps.DirectionsService();

    DirectionsService.route({
      origin: { lat: 25.047739, lng: 121.517040 },
      destination: { lat: 25.042214, lng: 121.535498 },
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

  componentDidUpdate() {
     if (!this.props.driver) {
		return {};
		}
    const DirectionsService = new google.maps.DirectionsService();

    DirectionsService.route({
      origin: { lat: this.props.driver.latitude, lng: this.props.driver.longitude },
      destination: { lat: 25.042214, lng: 121.535498 },
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

	render() {
		if (!this.props.driver) {
			return <div>Select a driver to get started.</div>;
		}

    return (
		<div>
			<div >{this.props.driver.latitude}</div>
			<div >{this.props.driver.longitude}</div>
			<DirectionsExampleGoogleMap
			containerElement={
				<div style={{ width: 700, height: 500 }} />
			}
			mapElement={
				<div style={{ height: '100%' }} />
			}
			center={{ lat: this.props.driver.latitude, lng: this.props.driver.longitude }}
			directions={this.state.directions}
			/>
		</div>
    );
     }
}

function mapStateToProps(state) {
	console.log(state);
	return {
		driver: state.activeDriver
	};
}

export default connect(mapStateToProps)(DirectionsExample);
