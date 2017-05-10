export function selectDestination(destination) {
  console.log(destination);
  return {
    type: 'DESTINATION_SELECTED',
    payload: destination
  };
}
