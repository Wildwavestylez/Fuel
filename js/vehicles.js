let ownedVehicles = [];

function createVehicle(type, name, capacity, speed, iconUrl) {
  const vehicle = {
    id: Date.now(),
    type, name, capacity, speed,
    status: 'volný',
    kmDriven: 0,
    destination: null,
    iconUrl
  };
  ownedVehicles.push(vehicle);
  return vehicle;
}