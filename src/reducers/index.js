import { combineReducers } from 'redux';
import DestinationReducers from './reducer_destination';
import DriversInfo from './sample_drivers_location';

const rootReducer = combineReducers({
  destination: DestinationReducers, 
  info: DriversInfo
});

export default rootReducer;
