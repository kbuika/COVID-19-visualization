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
    lat: -0.900842,
    lng: 48.230254,
    zoom: 6.3,
    style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}


function preload(){
    casesData = loadTable('cases.csv', 'header')
    counties = loadJSON('counties.json');
}

// p5.js setup
function setup(){

    
    canvas = createCanvas(1400,640);
    

    // tile map 
    myMap = mappa.tileMap(options);
    // overlay the canvas over the tile map
    myMap.overlay(canvas);

   
  
}

// p5.js draw
function draw(){
    clear();

    
    for ( let row of casesData.rows) {
        let county = row.get('county_name').toLowerCase();
        let latlon = counties[county];
        if (latlon) {
         let lat = latlon[0];
         let lon = latlon[1];
         const pix = myMap.latLngToPixel(lat, lon);
         let cases = row.get("confirmed_cases")
         const zoom = myMap.zoom();
         const scl = pow(2, zoom) * sin(frameCount * 0.005) ;
         let diameter = map(sqrt(cases), 1, 10, 0.1, 1) * scl;
         fill(frameCount % 255, 0, 26, 100); 
        ellipse(pix.x, pix.y, diameter, diameter);
         
        }
        
    }

    

    

}