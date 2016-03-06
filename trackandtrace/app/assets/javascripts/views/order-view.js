'use strict'

//TEMPLATE
var tpl = require('../../templates/order.hbs');

var OrderView = Marionette.ItemView.extend({
		//el: '#tweet-container',
		template: tpl, 

		ui: {
			btnSubmit: "#btnSubmit",
			sendfrom: "#sendfrom",
			sendto: "#sendto"

		},

		events: {
			'click @ui.btnSubmit': 'getResult',
			'click @ui.sendfrom': 'sendFrom',
			'click @ui.sendto': 'sendTo'
		},

		sendTo: function(e) {
			this.initMap(document.getElementById('arrivee', 'to').value);
		},
		sendFrom: function(e) {
			this.initMap(document.getElementById('depart', 'from').value);
		},

		getResult: function(e) {
		   this.trigger('getResult', e);
		},

		initialize: function(){


			// function initMap
		},

		createMarker: function(info, string) {
			var self = this;
			  var marker = new google.maps.Marker({
			      map: self.map,
			      position: new google.maps.LatLng(info.lat, info.long),
			      title: info.city
			  });
			  marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

			  google.maps.event.addListener(marker, 'click', function(){
			      self.infowindow.setContent('<h2>' + info.city + '</h2>' + info.desc + '<input class="btn btn-primary" type="button" value=' + string + ' id="sendfrom">');
			      self.infowindow.open(self.map, marker);
			  });

			},

		initMap: function(origin, step) {
			  if (origin == null || origin == '')
			    return ;
			  var xhr = new XMLHttpRequest();
			  xhr.open("GET", 'http://api-adresse.data.gouv.fr/search/?q='+origin, false);
			  xhr.send();
			  var jsonified = JSON.parse(xhr.response);
			  var longitude = jsonified.features[0].geometry.coordinates[0];
			  var latitude = jsonified.features[0].geometry.coordinates[1];
			  if (step == 'from') {
			    this.fromCoord.longitude = longitude;
			    this.fromCoord.latitude = latitude;
			    this.string = 'Deposer mon colis ici !';
			  }
			  else if (step == 'to') {
			    this.toCoord.longitude = longitude;
			    this.toCoord.latitude = latitude;
			    this.string = 'Retirer mon colis ici !';
			  }
			  else
			  	this.string = '';
			  var mapDiv = document.getElementById('map');
			  this.map = new google.maps.Map(mapDiv, {
			    center: {lat: latitude, lng: longitude},
			    zoom: 15
			  });
			  this.infowindow = new google.maps.InfoWindow({
			    content: ''
			  });
			  console.log(this.infowindow);
			  xhr.open("GET", 'https://datanova.laposte.fr/api/records/1.0/search/?dataset=laposte_poincont2&geofilter.distance=' + latitude + ',' + longitude + ',5000', false);
			  xhr.send();
			  var res = JSON.parse(xhr.response).records;
			  for (var ids in res) {
			      var tmp1 = res[ids].fields.latitude - latitude;
			      var tmp2 = res[ids].fields.longitude - longitude;
			      var dist = Math.sqrt(tmp1 * tmp1 + tmp2 * tmp2);
			      this.createMarker({id: res[ids].fields.identifiant_a, city: res[ids].fields.libelle_du_site, desc: res[ids].fields.adresse + " "  + res[ids].fields.code_postal + ", "  + res[ids].fields.localite, lat: res[ids].fields.latitude, long: res[ids].fields.longitude, dist: dist}, this.string);
			  }
			}


	});

module.exports = OrderView;