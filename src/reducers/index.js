import { combineReducers } from 'redux';
import DriversDestination from './sample_drivers_destination';
import DriversInfo from './sample_drivers_location';
import ActiveDriver from './reducer_active_driver';
import ActiveDestination from './reducer_active_destination';

const rootReducer = combineReducers({
  destination: DriversDestination, 
  info: DriversInfo,
  activeDriver: ActiveDriver, 
  activeDestination: ActiveDestination
});

export default rootReducer;
