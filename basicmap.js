console.log("basicmap.jsloaded.");

//CPCC cordinates: 35.2176665 N, 809.831473 W-> 35.2176665, -80.831473

let map = L.map("map", {
  center: [35.2176665, -80.831473],
  zoom: 15
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([35.2176665, -80.831473], {
  title: "Hello from cpcc"
}).addTo(map);

console.log("basicmap.jsloaded again.");

