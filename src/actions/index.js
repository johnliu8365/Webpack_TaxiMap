export function selectDestination(destination) {
  console.log(destination);
  return {
    type: 'DESTINATION_SELECTED',
    payload: destination
  };
}

export function selectDriver(driver) {
	console.log(driver);
	return {
		type: 'DRIVER_SELECTED',
		payload: driver
	};
}
