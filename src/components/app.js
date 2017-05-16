import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import DriversInfo from '../containers/drivers_info';
import DriversMap from '../containers/drivers_map';

export default class App extends Component {
  render() {
    return (
		<div>
			<SearchBar />
			<DriversInfo />
			<div style={{ width: 600, height: 600 }}> 
              <DriversMap /> 
			</div> 
        </div>
    );
  }
}
