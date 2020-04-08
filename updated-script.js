require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/Layer",
    "esri/widgets/BasemapToggle",
    "esri/widgets/BasemapGallery"
  ], function(Map, MapView, Layer,BasemapToggle, BasemapGallery) {

  var map = new Map({
    basemap: "dark-gray-vector"
  });

  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [37.906193, -0.023559], // longitude, latitude
    zoom: 7
  });
  
//   var basemapGallery = new BasemapGallery({
//       view: view,
//       source: {
//         portal: {
//           url: "https://www.arcgis.com",
//           useVectorBasemaps: true  // Load vector tile basemaps
//         }
//       }
//     });
  
//   view.ui.add(basemapGallery, "top-right");
  
  var trailheadsPortalItem = Layer.fromPortalItem({
      portalItem: {
        id: "88433419aaec4d14b15a7801fffc9991"
      }
    });

    addLayer(trailheadsPortalItem, 0);
  
  function addLayer(layerItemPromise, index) {
      return layerItemPromise.then(function(layer){
        map.add(layer, index);
      });
    }
  
});