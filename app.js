const myMap = L.map("map").setView([50.99, 7.13], 5);
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Coded by coder\'s gyan with ❤️';
const tileLayer = L.tileLayer(tileUrl, { attribution });
tileLayer.addTo(myMap);
var marker = L.marker([50.99, 7.13]).addTo(myMap);

const lonLat = [
  {
    ID: 2,
    name: "test",
    type: "test",
    country: "test",
    region: "test",
    lon: 1,
    lat: 1,
    description: "test",
    recommendations: 0,
  },
  {
    ID: 3,
    name: "New York",
    type: "city",
    country: "USA",
    region: "NY",
    lon: -74,
    lat: 40.75,
    description: "A very interesting place",
    recommendations: 1,
  },
  {
    ID: 4,
    name: "London",
    type: "city",
    country: "UK",
    region: "London",
    lon: -0.1,
    lat: 51.51,
    description: "A very interesting place",
    recommendations: 0,
  },
  {
    ID: 5,
    name: "Oxford",
    type: "city",
    country: "UK",
    region: "Oxfordshire",
    lon: -1.25,
    lat: 51.75,
    description: "A very interesting place",
    recommendations: 0,
  },
  {
    ID: 6,
    name: "Bath",
    type: "city",
    country: "UK",
    region: "Somerset",
    lon: -2.36,
    lat: 51.38,
    description: "A very interesting place",
    recommendations: 0,
  },
  {
    ID: 7,
    name: "Paris",
    type: "city",
    country: "France",
    region: "Paris",
    lon: 2.35,
    lat: 48.86,
    description: "A very interesting place",
    recommendations: 0,
  },
  {
    ID: 8,
    name: "Rome",
    type: "city",
    country: "Italy",
    region: "Rome",
    lon: 12.48,
    lat: 41.89,
    description: "A very interesting place",
    recommendations: 0,
  },
  {
    ID: 9,
    name: "San Francisco",
    type: "city",
    country: "USA",
    region: "California",
    lon: -122.4,
    lat: 37.78,
    description: "A very interesting place",
    recommendations: 0,
  },
  {
    ID: 10,
    name: "Los Angeles",
    type: "city",
    country: "USA",
    region: "California",
    lon: -118.2,
    lat: 34.05,
    description: "A very interesting place",
    recommendations: 0,
  },
  {
    ID: 11,
    name: "Paderborn",
    type: "city",
    country: "Germany",
    region: "Nordrhein_Westfalen",
    lon: 8.75,
    lat: 51.72,
    description: "A very interesting place",
    recommendations: 0,
  },
  {
    ID: 12,
    name: "Hannover",
    type: "city",
    country: "Germany",
    region: "Niedersachsen",
    lon: 9.74,
    lat: 52.38,
    description: "A very interesting place",
    recommendations: 0,
  },
  {
    ID: 13,
    name: "Koeln",
    type: "city",
    country: "Germany",
    region: "Nordrhein_Westfalen",
    lon: 6.96,
    lat: 50.94,
    description: "A very interesting place",
    recommendations: 0,
  },
  {
    ID: 14,
    name: "Freiburg",
    type: "city",
    country: "Germany",
    region: "Baden-Wuerttemberg",
    lon: 7.85,
    lat: 48,
    description: "A very interesting place",
    recommendations: 0,
  },
  {
    ID: 15,
    name: "Garmisch-Partenkirchen",
    type: "town",
    country: "Germany",
    region: "Bayern",
    lon: 11.1,
    lat: 47.49,
    description: "A very interesting place",
    recommendations: 0,
  },
  {
    ID: 16,
    name: "Bergisch Gladbach",
    type: "town",
    country: "Germany",
    region: "Nordrhein_Westfalen",
    lon: 7.13,
    lat: 50.99,
    description: "A very interesting place",
    recommendations: 0,
  },
];
lonLat.forEach((location) => {
  var marker = L.marker([location.lat, location.lon]);
  marker.addTo(myMap);
  console.log(location.lat, location.lon, location);
  marker
    .bindPopup(
      `<h4><div>Name <span class="name item-val">${location.name} </span></div>
         <h4>Country <span class="country item-val"> ${location.country}</span></h4>
         <h4>Region <span class="region item-val"> ${location.region}</span></h4>
         <h4>Type <span class="type item-val">${location.type} </span></h4>
         <h4>Latitude <span class="latitude item-val"> ${location.lat}</span></h4>
         <h4>Longitude <span class="longitude item-val"> ${location.lon}</span></h4>
         <h4>Recommendations <span class="recommendations item-val">${location.recommendations} </span></h4></div>`
    )
    .openPopup();
});