console.log("basicmap.jsloaded.");

//CPCC cordinates: 35.2176665 N, 809.831473 W-> 35.2176665, -80.831473


let makewrs =[];

makers.push(
L.marker([35.2176665, -80.831473], {
  title: "Hello from cpcc"
}).bindPopup(`
  <center>
    <h2>Hello from cpcc</h2>
    <hr>
    <a href="https://www.cpcc.edu">Click here to visit CPCC's Website</a><br>
    <iframe width="260" height="120" src="https://www.youtube.com/embed/wCyHWiYPiXU?si=KLdReNWLNeIBd4wt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <hr>
    <p>[URL: https://www.youtube.com/watch?v=wCyHWiYPiXU]</p>
  </center>`
)
)

let CPCC= L.layerGroup(makers);

console.log("basicmap.jsloaded again.");

let street = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})

var topo = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryTopo/MapServer/tile/{z}/{y}/{x}', {
	maxZoom: 20,
	attribution: 'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>'
});

let baseMaps ={
Street: street,
Topographic: topo
}

let overlaysMaps ={
CPCC:CPCC
}
let map= L.marker([35.2176665, -80.831473], {
	zoom: 16,
	layers:[street,CPCC]
});

L.control,layers(baseMaps,overlayMaps,{
collapsed:false
}).addTo(map);
