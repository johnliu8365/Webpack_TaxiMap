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
      destination: { lat: 25.033964, lng: 121.564472 },
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

	render() {
		if (!this.props.driver || !this.props.destination) {
			return <div>請選擇司機與目的地</div>;
		}

    return (
		<div>
			<div >出發點:( {this.props.driver.latitude}, {this.props.driver.longitude} )</div>
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
		driver: state.activeDriver,
    destination: state.activeDestination
	};
}

export default connect(mapStateToProps)(DirectionsExample);
