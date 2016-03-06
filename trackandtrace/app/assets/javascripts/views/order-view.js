'use strict'

//TEMPLATE
var tpl = require('../../templates/order.hbs');

var OrderView = Marionette.ItemView.extend({
		//el: '#tweet-container',
		template: tpl, 

		ui: {
			btnSubmit: "#btnSubmit",
			sendfrom: "#sendfrom",
			sendto: "#sendto",
			fromrelais: "#fromrelais",
			torelais: "#torelais"
		},

		events: {
			'click @ui.btnSubmit': 'getResult',
			'click @ui.sendfrom': 'sendFrom',
			'click @ui.sendto': 'sendTo',
			'click @ui.fromrelais': 'fromRelais',
			'click @ui.torelais': 'toRelais'
		},

		sendTo: function(e) {
			this.initMap(document.getElementById('arrivee').value, 'to');
		},

		sendFrom: function(e) {
			this.initMap(document.getElementById('depart').value, 'from');
		},

		fromRelais: function(e) {
			var array = e.currentTarget.value.split(';', 3);
			if (array.length != 3)
				return ;
			this.fromLat = array[0];
			this.fromLng = array[1];
			this.fromCity = array[2];
			self = this;
			this.infowindow.close();
		},

		toRelais: function(e) {
			var array = e.currentTarget.value.split(';', 3);
			if (array.length != 3)
				return ;
			this.toLat = array[0];
			this.toLng = array[1];
			this.toCity = array[2];
			self = this;
			this.infowindow.close();
		},

		getResult: function(e) {
		   this.trigger('getResult', e);
		},

		initialize: function(){


			// function initMap
		},

		createMarker: function(info, string, id) {
			var self = this;
			  var marker = new google.maps.Marker({
			      map: self.map,
			      position: new google.maps.LatLng(info.lat, info.long),
			      title: info.city
			  });
			  marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

			  google.maps.event.addListener(marker, 'click', function(){
			      self.infowindow.setContent('<h2>' + info.city + '</h2>' + info.desc + '<input class="btn btn-primary" type="button" onclick="document.getElementById(\'' + id + '\').value=\'' + info.lat + ';' + info.long + ';' + info.city + '\';document.getElementById(\'' + id + '\').click()" value="' + string + '">');
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
			  if (jsonified.features[0].geometry == undefined)
			  	return ;
			  var longitude = jsonified.features[0].geometry.coordinates[0];
			  var latitude = jsonified.features[0].geometry.coordinates[1];
			  if (step == 'from') {
			    this.fromLongitude = longitude;
			    this.fromLatitude = latitude;
			    this.string = 'Deposer mon colis ici !';
			    this.id = 'fromrelais';
			  }
			  else if (step == 'to') {
			    this.toLongitude = longitude;
			    this.toLatitude = latitude;
			    this.string = 'Retirer mon colis ici !';
			    this.id = 'torelais';
			  }
			  var mapDiv = document.getElementById('map');
			  this.map = new google.maps.Map(mapDiv, {
			    center: {lat: latitude, lng: longitude},
			    zoom: 15
			  });
			  this.infowindow = new google.maps.InfoWindow({
			    content: ''
			  });
			  xhr.open("GET", 'https://datanova.laposte.fr/api/records/1.0/search/?dataset=laposte_poincont2&geofilter.distance=' + latitude + ',' + longitude + ',5000', false);
			  xhr.send();
			  var res = JSON.parse(xhr.response).records;
			  for (var ids in res) {
			      var tmp1 = res[ids].fields.latitude - latitude;
			      var tmp2 = res[ids].fields.longitude - longitude;
			      var dist = Math.sqrt(tmp1 * tmp1 + tmp2 * tmp2);
			      this.createMarker({id: res[ids].fields.identifiant_a, city: res[ids].fields.libelle_du_site, desc: res[ids].fields.adresse + " "  + res[ids].fields.code_postal + ", "  + res[ids].fields.localite, lat: res[ids].fields.latitude, long: res[ids].fields.longitude, dist: dist}, this.string, this.id);
			  }
			}


	});

module.exports = OrderView;