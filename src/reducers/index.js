import { combineReducers } from 'redux';
import DestinationReducers from './reducer_destination';

const rootReducer = combineReducers({
  destination: DestinationReducers
});

export default rootReducer;
