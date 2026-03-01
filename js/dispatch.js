let passengerGroups = {};

function addPassengerGroup(destination, count) {
  passengerGroups[destination] = (passengerGroups[destination] || 0) + count;
}