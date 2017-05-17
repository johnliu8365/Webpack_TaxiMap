import { combineReducers } from 'redux';
import DestinationReducers from './reducer_destination';
import DriversInfo from './sample_drivers_location';
import ActiveDriver from './reducer_active_driver';

const rootReducer = combineReducers({
  destination: DestinationReducers, 
  info: DriversInfo,
  activeDriver: ActiveDriver
});

export default rootReducer;
