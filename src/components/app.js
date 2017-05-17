import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import DriversInfo from '../containers/drivers_info';
import Marker from '../containers/drivers_marker';
import Map from '../containers/drivers_map'

export default class App extends Component {
  render() {
    return (
		<div>

      <SearchBar />

      <DriversInfo />

        <Map />

        </div>
    );
  }
}
