

var mymap = L.map('mapid').setView([40.730610,  -73.935242], 10);
   L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
       attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
       maxZoom: 18,
       id: 'mapbox.streets',
       accessToken: 'sk.eyJ1IjoidGFsZ2FvbjAyIiwiYSI6ImNqa3Y5a2JxczBvbTAzdm1tZ3U2ZDRuaG0ifQ.rKbY9gXURD34wj4dvzVzTA'
   }).addTo(mymap);
   // var marker = L.marker([ 40.7795457, -73.962916,]).addTo(mymap);
   // marker.bindPopup("The MET.").openPopup();
   // var marker = L.marker([ 40.696011, -73.993286,]).addTo(mymap);
   // marker.bindPopup("Brooklyn hights.").openPopup();
   var greenIcon = L.icon({
    iconUrl: 'leaf-red.png',
    shadowUrl: 'leaf-shadow.png',
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
  L.marker([ 40.7795457, -73.962916,], {icon: greenIcon}).addTo(mymap).bindPopup("The Metropolitan Museum of Art");
  L.marker([ 40.696011, -73.993286], {icon: greenIcon}).addTo(mymap).bindPopup("Brooklyn Heights");
  L.marker([ 40.7033, -73.9881], {icon: greenIcon}).addTo(mymap).bindPopup("DUMBO");
  L.marker([ 40.7480, -74.0048], {icon: greenIcon}).addTo(mymap).bindPopup("The High Line");
  L.marker([ 40.7149, -73.9892], {icon: greenIcon}).addTo(mymap).bindPopup("Seward Park");
   L.marker([ 43.5178, -70.3773], {icon: greenIcon}).addTo(mymap).bindPopup("Orchard Beach");
   L.marker([ 40.7813, -73.9603], {icon: greenIcon}).addTo(mymap).bindPopup("Neue galer");




