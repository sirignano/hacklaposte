// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

//Data
//Angular App Module and Controller
origin = '41 rue Jussieu';
arrcities = [];
var from_coords = {};
var to_coords = {};
var map;
var infowindow;

n = 0;
var createMarker = function (info){

  var marker = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(info.lat, info.long),
      title: info.city
  });
  marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

  google.maps.event.addListener(marker, 'click', function(){
      infowindow.setContent('<h2>' + info.city + '</h2>' + info.desc);
      infowindow.open(map, marker);
  });

}
function initMap(origin) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", 'http://api-adresse.data.gouv.fr/search/?q='+origin, false);
  xhr.send();
  jsonified = JSON.parse(xhr.response);
  longitude = jsonified.features[0].geometry.coordinates[0];
  latitude = jsonified.features[0].geometry.coordinates[1];
  if (step == 'from') {
    from_coords['lng'] = longitude;
    from_coords['lat'] = latitude;
  }
  else if (step == 'to') {
    to_coords['lng'] = longitude;
    to_coords['lat'] = latitude;
  }
  var mapDiv = document.getElementById('map');
  map = new google.maps.Map(mapDiv, {
    center: {lat: latitude, lng: longitude},
    zoom: 15
  });
  infowindow = new google.maps.InfoWindow({
    content: ''
  });
  xhr.open("GET", 'https://datanova.laposte.fr/api/records/1.0/search/?dataset=laposte_poincont2&geofilter.distance=' + latitude + ',' + longitude + ',5000', false);
  xhr.send();
  res = JSON.parse(xhr.response).records;
  for (var ids in res) {
      tmp1 = res[ids].fields.latitude - latitude;
      tmp2 = res[ids].fields.longitude - longitude;
      dist = Math.sqrt(tmp1 * tmp1 + tmp2 * tmp2);
      tmp = {id: res[ids].fields.identifiant_a, city: res[ids].fields.libelle_du_site, desc: res[ids].fields.adresse + " "  + res[ids].fields.code_postal + ", "  + res[ids].fields.localite, lat: res[ids].fields.latitude, long: res[ids].fields.longitude, dist: dist};
      arrcities.push(tmp);
      createMarker(tmp);
  }
}
