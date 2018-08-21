
var map = L.map('mapid', {
    center:[40.7128, -74],
    zoom: 14
});
var latitude;
var longitude;

function zoomTo() {
  for (var i = 0; i < coordinate.length; i++){
    if (document.getElementById("zip").value == coordinate[i][0]){
        latitude = coordinate[i][1];
        longitude = coordinate[i][2];
        break;
      }
    }
  lat = latitude;
  lng = longitude;
  map.setView(new L.LatLng(lat, lng));
}


// Add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a Wikipedia layer
L.layerGroup.wikipediaLayer({ target: '_blank', images: 'https://cdn.rawgit.com/MatthewBarker/leaflet-wikipedia/master/build/images' }).addTo(map);
