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
			initMap(document.getElementById('arrivee').value);
		},
		sendFrom: function(e) {
			initMap(document.getElementById('depart').value);
		},

		getResult: function(e) {
		   this.trigger('getResult', e);
		}
	});

module.exports = OrderView;