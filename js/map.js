const terminalLat = 49.1197;
const terminalLon = 13.8485;

const map = L.map('map').setView([terminalLat, terminalLon], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OSM',
  maxZoom: 18
}).addTo(map);

const terminalIcon = L.icon({
  iconUrl: "https://i.imgur.com/puN4S0i.jpeg", // Imgur URL
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});

L.marker([terminalLat, terminalLon], { icon: terminalIcon })
  .addTo(map)
  .bindPopup("Terminál")
  .openPopup();