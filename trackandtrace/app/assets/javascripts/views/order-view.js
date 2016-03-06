'use strict'

//TEMPLATE
var tpl = require('../../templates/order.hbs');

var OrderView = Marionette.ItemView.extend({
		//el: '#tweet-container',
		template: tpl, 

		ui: {
			btnSubmit: "#btnSubmit",
			sendfrom: "#sendfrom",
			sendtoo: "#sendtoo"

		},

		events: {
			'click @ui.btnSubmit': 'getResult',
			'click @ui.sendfrom': 'sendFrom',
			'click @ui.sendtoo': 'sendTo'

		},


		sendTo: function(e) {
			initMap($('#arrivee').value);
		},
		sendFrom: function(e) {
			initMap($('#depart').value);
		},

		getResult: function(e) {
		   this.trigger('getResult', e);
		}
	});

module.exports = OrderView;