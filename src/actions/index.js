import { destination } from '../data/sample_drivers_destination';

export function selectDestination(id) {
  return {
    type: 'DESTINATION_SELECTED',
    payload: destination[id]
  };
}

export function selectDriver(driver) {
	console.log(driver);
	return {
		type: 'DRIVER_SELECTED',
		payload: driver
	};
}
