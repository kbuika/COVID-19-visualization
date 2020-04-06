// variable to hold the map
let myMap;
// variable to hold the canvas
let canvas;
// variable to hold geo data
let counties;
// new mappa instance using Leaflet
const mappa = new Mappa("Leaflet");

// map options
const options = {
    lat: -0.023559,
    lng: 37.906193,
    zoom: 6.8,
    style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function preload(){
    casesData = loadTable('cases.csv', 'header')
    counties = loadJSON('counties.json');
}

// p5.js setup
function setup(){
    canvas = createCanvas(1200,640);
    

    // tile map 
    myMap = mappa.tileMap(options);
    // overlay the canvas over the tile map
    myMap.overlay(canvas);

   for ( let row of casesData.rows) {
       let county = row.get('county_name').toLowerCase();
       let latlon = counties[county];
       if (latlon) {
        let lat = latlon[0];
        let lon = latlon[1];
        const pix = myMap.latLngToPixel(lat, lon);
        fill(255, 0, 200); 
        ellipse(pix.x, pix.y, 20, 20);
       }
       
   }
  
}

// p5.js draw
function draw(){
    clear();

}