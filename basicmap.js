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
}).bindPopup(`

  <center>
    <h2>Hello from cpcc</h2>
    <hr>
    <a href="https://www.cpcc.edu">Click here to visit CPCC's Website</a><br>
    <iframe width="260" height="120" src="https://www.youtube.com/embed/wCyHWiYPiXU?si=KLdReNWLNeIBd4wt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </center>

`).addTo(map);

console.log("basicmap.jsloaded again.");

